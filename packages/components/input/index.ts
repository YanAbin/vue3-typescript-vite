import _Input from './src/input.vue';
import { withInstall } from '@custom/utils/install';
import type { Plugin } from 'vue';

export const Input: Plugin = withInstall(_Input);
export default Input;
