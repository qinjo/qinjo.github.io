import { App } from 'vue'
import SvgIcon from './svg-icon'

const AppPlugin = {
  install (app: App<Element>) {
    app.use(SvgIcon)
  }
}

export default AppPlugin
