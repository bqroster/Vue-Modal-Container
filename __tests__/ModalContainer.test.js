import { mount } from '@vue/test-utils';
import ModalContainer from "~ModalContainer";

describe('ModalContainer Component mounted', () => {

    test('ModalContainer mounted correctly', () => {
        const wrapper = mount(ModalContainer);
        expect(wrapper.element).toMatchSnapshot();
    });
});