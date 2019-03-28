import {
  Aside,
  Button,
  Col,
  Container,
  Footer,
  Header,
  Input,
  InputNumber,
  Main,
  Row,
  Tag
} from './module';

const pkg = require('../package.json');

const components = [
  Aside,
  Button,
  Col,
  Container,
  Footer,
  Header,
  Input,
  InputNumber,
  Main,
  Row,
  Tag
];

function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;
  components.forEach((Component) => {
    Component.install(Vue);
  });
}

const Idc = {
  version: pkg.version,
  install
};

components.forEach((Component) => {
  Idc[Component.name] = Component;
});

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default Idc;
