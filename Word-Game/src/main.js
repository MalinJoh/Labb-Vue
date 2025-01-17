
//  Vuetify och andra plugins. Sen mounteras appen
import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify';
import router from './router';

const app = createApp(App)

registerPlugins(app)

app.use(router);
app.use(vuetify);


app.mount('#app')
