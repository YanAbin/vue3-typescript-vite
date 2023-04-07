// import { definePropType } from '../../../../utils/runtime';
// import { FormRules } from './type';
export const formProps = {
  model: {
    type: Object,
    default: () => {
      return {};
    }
  },
  rules: {
    type: Array<string>,
    default: null
  }
};