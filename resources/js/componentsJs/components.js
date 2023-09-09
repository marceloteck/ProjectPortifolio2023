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
import pluginsVue from '@/componentsJs/pluginsVue.js';

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
  ...pluginsVue,
};

export default ComponentsMap;