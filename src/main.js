import ModalContainer from './ModalContainer.vue';

export { default as ModalSettingsMixin } from './mixins/ModalSettingsMixin';
export { default as ModalContainerPropsMixin } from './mixins/ModalContainerPropsMixin';

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('ModalContainer', ModalContainer);
}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.vue;
}

if (GlobalVue) {
    GlobalVue.use(plugin);
}

ModalContainer.install = install;

export default ModalContainer;