import './bootstrap';
import '../../css/app.css';
import '../../scss/app.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../../vendor/tightenco/ziggy/dist/vue.m';
import ComponentsMap from '../componentsJs/components.js';

const appName = (import.meta.env.VITE_APP_NAME.replaceAll(/[_-]/g, ' ')) || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => 
    resolvePageComponent(`../../PagesVuejs/${name}.vue`, import.meta.glob('../../PagesVuejs/**/*.vue')),
 
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy);

             // chamada dos componentes
             Object.entries(ComponentsMap).forEach(([name, component]) => {
                app.component(name, component);
            });
            app.mount(el);
    },
    progress: {
        color: '#FDA543',
    },
});
