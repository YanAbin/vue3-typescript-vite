import _FormItem from './src/formItem.vue';
import { withInstall } from '@custom/utils';
import type { Plugin } from 'vue';

export const FormItem: Plugin = withInstall(_FormItem);
export default FormItem;