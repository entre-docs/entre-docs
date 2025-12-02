// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import DesignPatternChips from '../components/DesignPatternChips.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DesignPatternChips', DesignPatternChips)
  }
}