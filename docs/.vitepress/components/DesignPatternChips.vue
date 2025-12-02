<script setup lang="ts">
const props = defineProps({
  patterns: {
    type: Array as () => string[],
    required: true
  },
  category: {
    type: String,
    default: undefined
  }
})
</script>

<template>
  <div class="dp-chips">
    <span v-if="category" class="dp-category">{{ category }}</span>
    <div class="chips-container">
      <a
        v-for="pattern in patterns"
        :key="pattern"
        :href="`/patrones/${pattern.toLowerCase().replace(/\s+/g, '_')}`"
        class="dp-chip"
      >
        {{ pattern }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.dp-chips {
  margin: 2rem 0;
  font-family: inherit;
}

.dp-category {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--vp-c-brand);
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.dp-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.9rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.25s ease;
  white-space: nowrap;
}

.dp-chip:hover {
  background: var(--vp-c-brand);
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(100, 108, 255, 0.3);
}

/* Tema oscuro (opcional, queda brutal) */
html.dark .dp-chip {
  background: rgba(100, 108, 255, 0.15);
  border-color: rgba(100, 108, 255, 0.4);
}

html.dark .dp-chip:hover {
  background: var(--vp-c-brand);
  border-color: transparent;
}
</style>