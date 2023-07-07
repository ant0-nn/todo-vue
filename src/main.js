import { createApp } from 'vue'
import './main.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import components from './components'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faXmark)
const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})

app
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')