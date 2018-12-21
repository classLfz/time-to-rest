import Vue from 'vue'
import { Button, Input, Switch, MessageBox, TimePicker, Dialog } from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
  Vue.use(Button, { locale })
  Vue.use(Input, { locale })
  Vue.use(Switch, { locale })
  Vue.use(TimePicker, { locale })
  Vue.use(Dialog, { locale })
  Vue.prototype.$message = MessageBox
}
