import { definePropType } from 'utils/runtime';
export const formProps = {
  model: {
    type: Object,
    default: () => {
      return {};
    }
  },
  rules: {
    default: null
  }
};