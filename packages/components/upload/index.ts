import _Upload from './src/upload.vue';
import { withInstall } from '@custom/utils';
import type { Plugin } from 'vue';

export const Upload: Plugin = withInstall(_Upload);
export default Upload;