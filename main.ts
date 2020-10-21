import Vue from 'vue'

import 'normalize.css'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'

import '@/web/styles/element-variables.scss'
import '@/web/styles/index.scss'

import App from '@/web/App.vue'
import store from '@/web/store'
import router from '@/web/router'
import '@/web/icons/components'
import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'
import elementEnLocale from 'element-ui/lib/locale/lang/en'  // elementui 的英文语言包
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // elementui 的中文语言包

Vue.use(VueI18n)

const messages = {
    'zh-CN': {
        ...require('../common/lang/zh'),
        ...elementZhLocale,
    },
    'zh-TW': {
        ...require('../common/lang/tw'),
        ...elementZhLocale,
    },
    'en-US': {
        ...require('../common/lang/en'),
        ...elementEnLocale,
    },
}
const localeLang = localStorage.getItem('localeLang')
const i18n = new VueI18n({
    locale: localeLang || 'en-US',
    messages,
})
ElementLocale.i18n((key: string, value: object) => i18n.t(key, value))

export default i18n
Vue.use(ElementUI)
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em',
})

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app')
