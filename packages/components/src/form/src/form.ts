import { definePropType } from '@custom/utils';
import { Rules } from 'async-validator';
export const propsType = {
  model: {
    type: Object,
    default: () => {
      return {};
    }
  },
  rules: {
    type: definePropType<Rules>(Object),
    default: null
  }
};