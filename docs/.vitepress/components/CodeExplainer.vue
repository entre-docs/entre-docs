<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { createHighlighter } from 'shiki'

interface Tab {
  label: string
  description: string
  code: string
  lang?: string
  color?: string
  icon?: string
}

const props = defineProps<{ tabs: Tab[] }>()

const activeIndex = ref(0)
const highlightedCodes = ref<string[]>([])
const loading = ref(true)

const activeTab = computed(() => props.tabs[activeIndex.value])

onMounted(async () => {
  const langs = [...new Set(props.tabs.map(t => t.lang ?? 'java'))] as string[]
  const highlighter = await createHighlighter({
    themes: ['dracula'],
    langs
  })
  highlightedCodes.value = props.tabs.map(tab =>
    highlighter.codeToHtml(tab.code, {
      lang: tab.lang ?? 'java',
      theme: 'dracula'
    })
  )
  loading.value = false
})
</script>

<template>
  <div class="code-explainer">

    <!-- Card de descripción -->
    <div class="desc-card">
      <div
        class="desc-header"
        :style="{ background: activeTab.color ?? 'var(--vp-c-brand)' }"
      >
        <span v-if="activeTab.icon" class="desc-icon">{{ activeTab.icon }}</span>
        <strong>{{ activeTab.label }}</strong>
      </div>
      <div class="desc-body">
        <Transition name="ce-fade" mode="out-in">
          <p :key="activeIndex" class="desc-text">{{ activeTab.description }}</p>
        </Transition>
      </div>
    </div>

    <!-- Pestañas + código -->
    <div class="code-section">
      <div class="tabs-bar">
        <button
          v-for="(tab, i) in tabs"
          :key="tab.label"
          class="tab-btn"
          :class="{ active: i === activeIndex }"
          :style="i === activeIndex
            ? { borderBottomColor: tab.color ?? 'var(--vp-c-brand)', color: tab.color ?? 'var(--vp-c-brand)' }
            : {}"
          @click="activeIndex = i"
        >
          <span v-if="tab.icon" class="tab-icon">{{ tab.icon }}</span>
          {{ tab.label }}
        </button>
      </div>

      <div class="code-area">
        <div v-if="loading" class="code-loading">
          <div class="loading-dots">
            <span /><span /><span />
          </div>
        </div>
        <Transition v-else name="ce-fade" mode="out-in">
          <div
            :key="activeIndex"
            class="shiki-wrap"
            v-html="highlightedCodes[activeIndex] ?? ''"
          />
        </Transition>
      </div>
    </div>

  </div>
</template>

<style scoped>
.code-explainer {
  margin: 28px 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
  border: 1px solid var(--vp-c-divider);
}

/* --- Card descripción --- */
.desc-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  color: #fff;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.desc-icon {
  font-size: 1.1rem;
}

.desc-body {
  background: var(--vp-c-bg-soft);
  padding: 14px 18px;
  min-height: 68px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.desc-text {
  margin: 0;
  font-size: 0.93rem;
  line-height: 1.65;
  color: var(--vp-c-text-1);
}

/* --- Tabs --- */
.tabs-bar {
  display: flex;
  overflow-x: auto;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  scrollbar-width: none;
}

.tabs-bar::-webkit-scrollbar {
  display: none;
}

.tab-btn {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 16px;
  font-size: 0.84rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s, border-color 0.2s;
}

.tab-btn:hover {
  color: var(--vp-c-text-1);
}

.tab-icon {
  font-size: 0.95rem;
}

/* --- Código --- */
.code-area {
  min-height: 180px;
}

.code-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
}

.loading-dots {
  display: flex;
  gap: 6px;
}

.loading-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--vp-c-brand);
  animation: ce-bounce 1.2s infinite;
}

.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes ce-bounce {
  0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}

.shiki-wrap :deep(pre) {
  margin: 0;
  padding: 20px 24px;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.7;
  border-radius: 0;
}

.shiki-wrap :deep(code) {
  font-family: var(--vp-font-family-mono);
}

/* --- Transiciones --- */
.ce-fade-enter-active,
.ce-fade-leave-active {
  transition: opacity 0.18s ease;
}

.ce-fade-enter-from,
.ce-fade-leave-to {
  opacity: 0;
}
</style>
