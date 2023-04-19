import _Form from './src/form.vue';
import { withInstall } from '@custom/utils';
import type { Plugin } from 'vue';

export const Form: Plugin = withInstall(_Form);
export default Form;