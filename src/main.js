import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//fontawesome icon
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faSnowboarding } from '@fortawesome/free-solid-svg-icons'
import { faTheaterMasks } from '@fortawesome/free-solid-svg-icons'
import { faGrinSquintTears } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCarCrash } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

import VueCarousel from 'vue-carousel';


import './assets/style.scss';

Vue.use(VueCarousel);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
library.add(faUserSecret, 
  faSnowboarding,
  faTheaterMasks,
  faGrinSquintTears,
  faHeart,
  faCarCrash,
  faGhost)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
