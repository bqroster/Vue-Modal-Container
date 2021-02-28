import { mount } from '@vue/test-utils';
import VueBpPckg from "~VueBpPckg";

describe('VueBpPckg Component mounted', () => {

    test('VueBpPckg mounted correctly', () => {
        const wrapper = mount(VueBpPckg);
        expect(wrapper.element).toMatchSnapshot();
    });

    test('VueBpPckg with title default property', () => {
        const wrapper = mount(VueBpPckg);
        expect(wrapper.find('.vue-bp-pckg-wrapper').exists()).toBe(true);
        expect(wrapper.get('.vue-bp-pckg-wrapper').text()).toBe('this is a simple bp vue npm package');
    });

    test('VueBpPckg with title prop set', () => {
        const wrapper = mount(VueBpPckg,
            {
                propsData: {
                    title: 'This is a package'
                }
            });
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.find('.vue-bp-pckg-wrapper').exists()).toBe(true);
        expect(wrapper.get('.vue-bp-pckg-wrapper').text()).toBe('this is a package');
    });
});