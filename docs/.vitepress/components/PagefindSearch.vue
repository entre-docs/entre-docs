<template>
  <div class="pagefind-container" ref="containerRef">

    <!-- Botón que abre el buscador -->
    <button class="pagefind-trigger" @click="open = !open" :aria-label="'Buscar con Pagefind'">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <span>Buscar</span>
      <kbd>Ctrl K</kbd>
    </button>

    <!-- Panel de búsqueda (fixed para no ser recortado por el overflow del navbar) -->
    <div v-if="open" class="pagefind-panel" :style="panelStyle">
      <div class="pagefind-panel-header">
        <input
          ref="inputRef"
          v-model="query"
          type="search"
          placeholder="Buscar en docs y código..."
          class="pagefind-input"
          @keydown.escape="open = false"
        />
        <button class="pagefind-close" @click="open = false">✕</button>
      </div>

      <!-- Estado: no disponible (solo en dev sin build previo) -->
      <p v-if="unavailable" class="pagefind-msg pagefind-warn">
        ⚠️ Pagefind no está disponible en modo dev sin hacer build primero.<br />
        Ejecuta <code>npm run docs:build</code> y luego <code>npm run docs:preview</code>.
      </p>

      <!-- Estado: sin resultados -->
      <p v-else-if="query && !loading && results.length === 0" class="pagefind-msg">
        Sin resultados para "<strong>{{ query }}</strong>"
      </p>

      <!-- Resultados -->
      <ul v-else-if="results.length" class="pagefind-results">
        <li v-for="result in results" :key="result.url" class="pagefind-result">
          <a :href="result.url" @click="open = false">
            <span class="pagefind-result-meta">
              <span class="pagefind-result-topic">{{ getTopic(result.url) }}</span>
              <span class="pagefind-result-title">{{ result.meta?.title || result.url }}</span>
            </span>
            <!-- excerpt incluye fragmentos de código encontrados -->
            <span class="pagefind-result-excerpt" v-html="result.excerpt"></span>
          </a>
        </li>
      </ul>

      <p v-else-if="!query" class="pagefind-msg pagefind-hint">
        Busca texto, métodos, funciones o fragmentos de código.
      </p>
    </div>

    <!-- Overlay para cerrar al hacer clic fuera -->
    <div v-if="open" class="pagefind-overlay" @click="open = false" />
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'

const open = ref(false)
const query = ref('')
const results = ref([])
const loading = ref(false)
const unavailable = ref(false)
const inputRef = ref(null)
const containerRef = ref(null)
const panelStyle = ref({})

// Instancia de pagefind (se carga una sola vez)
let pagefind = null

async function loadPagefind() {
  if (pagefind) return pagefind
  try {
    // @vite-ignore evita que Vite intente resolver este import en tiempo de build
    pagefind = await import(/* @vite-ignore */ '/pagefind/pagefind.js')
    await pagefind.init()
    unavailable.value = false
  } catch {
    // En `docs:dev` sin haber hecho build, el archivo no existe todavía
    unavailable.value = true
    pagefind = null
  }
  return pagefind
}

async function search() {
  if (!query.value.trim()) {
    results.value = []
    return
  }

  loading.value = true
  const pf = await loadPagefind()

  if (!pf) {
    loading.value = false
    return
  }

  const searchResult = await pf.search(query.value)
  // Carga los datos de los primeros 8 resultados
  results.value = await Promise.all(
    searchResult.results.slice(0, 8).map(r => r.data())
  )
  loading.value = false
}

// Mapeo de segmentos de URL a nombres legibles
const TOPIC_LABELS = {
  oracle: 'Oracle',
  postgresql: 'PostgreSQL',
  mysql: 'MySQL',
  angular: 'Angular',
  react: 'React',
  vue: 'Vue',
  next: 'Next.js',
  node: 'Node.js',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  java: 'Java',
  kotlin: 'Kotlin',
  springboot: 'Spring Boot',
  docker: 'Docker',
  git: 'Git',
  linux: 'Linux',
  windows: 'Windows',
  aws: 'AWS',
  azure: 'Azure',
  bootstrap5: 'Bootstrap 5',
  patrones: 'Patrones',
  vsc: 'VSCode',
}

// Extrae el tema del primer segmento de la URL: /oracle/ddl → "Oracle"
function getTopic(url) {
  const segment = url.split('/').filter(Boolean)[0] || ''
  return TOPIC_LABELS[segment] ?? segment
}

// Atajo de teclado Ctrl+K para abrir/cerrar el buscador
function handleKeydown(e) {
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault()
    open.value = !open.value
  }
}
onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

// Busca cada vez que cambia el query (con debounce simple)
let debounceTimer = null
watch(query, () => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(search, 250)
})

// Al abrir el panel, calcula posición, carga pagefind y enfoca el input
watch(open, async (val) => {
  if (val) {
    await nextTick()
    // Posiciona el panel justo debajo del botón trigger usando coordenadas fixed
    const rect = containerRef.value?.getBoundingClientRect()
    if (rect) {
      panelStyle.value = {
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
      }
    }
    inputRef.value?.focus()
    await loadPagefind()
  } else {
    query.value = ''
    results.value = []
  }
})
</script>

<style scoped>
.pagefind-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.pagefind-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 0.2s, color 0.2s;
}

.pagefind-trigger:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.pagefind-trigger kbd {
  font-size: 11px;
  padding: 1px 5px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-3);
  font-family: inherit;
  margin-left: 4px;
}

.pagefind-overlay {
  position: fixed;
  inset: 0;
  z-index: 99;
}

.pagefind-panel {
  position: fixed;
  width: 420px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
}

.pagefind-panel-header {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  gap: 8px;
}

.pagefind-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 14px;
  outline: none;
}

.pagefind-input:focus {
  border-color: var(--vp-c-brand);
}

.pagefind-close {
  padding: 4px 8px;
  border: none;
  background: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
}

.pagefind-close:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.pagefind-results {
  list-style: none;
  margin: 0;
  padding: 8px;
  max-height: 400px;
  overflow-y: auto;
}

.pagefind-result a {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.15s;
}

.pagefind-result a:hover {
  background: var(--vp-c-bg-soft);
}

.pagefind-result-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.pagefind-result-topic {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 20px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
  white-space: nowrap;
  flex-shrink: 0;
}

.pagefind-result-title {
  font-weight: 600;
  font-size: 14px;
  color: var(--vp-c-brand);
}

.pagefind-result-excerpt {
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

/* Resalta las coincidencias que devuelve pagefind */
.pagefind-result-excerpt :deep(mark) {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
  border-radius: 2px;
  padding: 0 2px;
}

.pagefind-msg {
  padding: 16px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  text-align: center;
}

.pagefind-warn {
  color: var(--vp-c-warning-1, #b45309);
  line-height: 1.6;
}

.pagefind-warn code {
  background: var(--vp-c-bg-soft);
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 12px;
}

.pagefind-hint {
  color: var(--vp-c-text-3);
}
</style>
