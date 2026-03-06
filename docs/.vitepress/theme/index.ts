// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DesignPatternChips from '../components/DesignPatternChips.vue'
import PagefindSearch from '../components/PagefindSearch.vue'
import './custom.css'

export default {
  extends: DefaultTheme,

  // Inyecta el componente en el slot de la navbar
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(PagefindSearch)
    })
  },

  enhanceApp({ app }) {
    app.component('DesignPatternChips', DesignPatternChips)
  }
}