import HyCard from "./card/card";
import HyHeader from "./header/header";
import HyLoginBox from "./login-box/login-box";
import HyNavBar from "./navigator/nav-bar";
import HyNavButton from "./navigator/nav-button";
import HyNavItem from "./navigator/nav-item";

const components = [
  HyCard,
  HyNavBar,
  HyNavButton,
  HyNavItem,
  HyHeader,
  HyLoginBox
];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  HyNavBar,
  HyNavButton,
  HyNavItem,
  HyHeader,
  HyCard,
  HyLoginBox
};
