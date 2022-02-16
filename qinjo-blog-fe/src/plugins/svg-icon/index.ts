import { App } from 'vue'
import SvgIcon from './SvgIcon'
export default {
  install: (app: App<Element>) => {
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
    try {
      importAll(require.context('../../assets/svgs', true, /\.svg$/))
      app.component('svg-icon', SvgIcon)
    } catch (e) { console.log(e) }
  }
}
