# Portfólio Marcelo Henrique 2023 - branch Developing-Portfolio

![GitHub repo size](https://img.shields.io/github/repo-size/marceloteck/ProjectPortifolio2023?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/marceloteck/ProjectPortifolio2023?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/marceloteck/ProjectPortifolio2023?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/marceloteck/ProjectPortifolio2023?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/marceloteck/ProjectPortifolio2023?style=for-the-badge)

> Configuração para o projeto

### Navegação
| [branch installation](https://github.com/marceloteck/ProjectPortifolio2023/tree/installation) | [branch Main](https://github.com/marceloteck/ProjectPortifolio2023/tree/main)


### Pastas modificadas para uso no Projeto
<pre>
├── app
│   └── Custom
│       └── helpers.php
│   
├── config
│   └── view.php
│ 
├── public
│   └── Assets
│       ├── files
│       ├── image
│       └── js
│
├── resources
│    ├── css
│    |    ├── app.css
│    |    └── tailwind.css
│    |
│    ├── js
|    |    ├── componentsJs
|    |    |     ├── Applications.js
|    |    |     ├── Buttons.js
|    |    |     ├── components.js
|    |    |     ├── ConfigComponents.js
|    |    |     ├── ContentPages.js
|    |    |     ├── Forms.js
|    |    |     ├── Layouts.js
|    |    |     ├── MainRoutesVue.js
|    |    |     ├── Modals.js
|    |    |     └── Navs.js
|    |    |     
|    |    └── config
|    |          ├── app.js
|    |          └── bootstrap.js
|    |    
│    ├── PagesVuejs
|    |    ├── components
|    |    |     ├── Applications
|    |    |     ├── Buttons
|    |    |     ├── ContentPages
|    |    |     ├── Forms
|    |    |     ├── Layouts
|    |    |     ├── Modals
|    |    |     └── Navs
|    |    |    
|    |    └── Pages
|    |         └── index
|    |              ├── index.vue
|    |              └── mainIndex.vue
|    |   
│    ├── plugins
│    ├── scss
│    |    └── app.scss
│    |  
│    └── views
|         ├── AssetsGlobal 
|         |    ├── globalCss.php
|         |    └── globalJs.php
|         | 
|         ├── configApp 
|         └── app.blade.php 
|
└── vite.config.js

</pre>

### # Para Verificar o código de cada arquivo basta acessar no repositório

## Alguns códigos de configuração
### vite.config.js

```javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
          '@PagesVuejs': 'resources/PagesVuejs',
        },
      },

});

```
### app.js
```Javascript
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
        color: '#4B5563',
    },
});
```
### components.js
```javascript
// Importando Componentes
import Applications from '@/componentsJs/Applications.js';
import Buttons  from '@/componentsJs/Buttons.js';
import Forms from '@/componentsJs/Forms.js';
import Modals from '@/componentsJs/Modals.js';
import Navs from '@/componentsJs/Navs.js';
import Layouts from '@/componentsJs/Layouts.js';
import ConfigComponents from '@/componentsJs/ConfigComponents.js';
import ContentPages from '@/componentsJs/ContentPages.js';
import MainRoutesVue from '@/componentsJs/MainRoutesVue.js';

// constante Map
const ComponentsMap = {
  ...Applications,
  ...Buttons,
  ...Forms,
  ...Modals,
  ...Navs,
  ...Layouts,
  ...ConfigComponents,
  ...ContentPages,
  ...MainRoutesVue,
};

export default ComponentsMap;
```

### config/view.php
```php
'extensions' => [
        'php',
    ],
```

### app/Custom/helpers.php
```php
// não colocar namespace aqui
use illuminate\Support\Str;
class HtmlHelper
{
    public static function mix_version($path)
    {
        $filePath = public_path($path);
        $version = file_exists($filePath) ? filemtime($filePath) : Str::random(5) . rand(10, 99);
        return $path . ($version ? "?v=" . $version . Str::random(5) . rand(10, 99) : '');
    }

    public static function htmlResources($links = [], $type = 'link')
    {
        $html = '';
        $crossOrigin = 'anonymous';
        if ($type === 'link') {
            foreach ($links as $link) {
                $html .= "<link href='$link' rel='stylesheet' />";
            }
        } else {
            foreach ($links as $link) {
                $crossAttr = (strpos($link, 'http://') !== false || strpos($link, 'https://') !== false) ? " crossorigin='$crossOrigin'" : "";
                $html .= "<script src='$link' type='text/javascript'$crossAttr></script>\n";
            }
        }

        return $html;
    }
}
```