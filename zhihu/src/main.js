import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//引入icon-font的文件
import '../font/fonts/iconfont.js'
import '../font/fonts/iconfont.css'
const app = createApp(App)

app.use(router)

app.mount('#app')
