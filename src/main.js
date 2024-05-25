import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入初始化样式
import "@/styles/common.scss";
import App from './App.vue'
import router from './router'
import DataVVue3 from '@kjgl77/datav-vue3'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(DataVVue3)
app.mount('#app')
