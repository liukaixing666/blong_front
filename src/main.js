// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
import vueAxios from "vue-axios";
import axios from "axios";
Vue.use(vueAxios, axios)
import VueVideoPlayer from "vue-video-player";
Vue.use(VueVideoPlayer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  // render : apps => apps(App),
  components: { App }
})
