import { definePropType } from '@custom/utils';
import { Rules } from 'async-validator';
import { ComponentInternalInstance } from 'vue';
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
  },
  labelWidth: {
    type: Number || String
  },
  inline: {
    type: Boolean,
    default: true
  }
};

export type FormContext = {

  // expose
  addField: (field: ComponentInternalInstance) => void
  removeField: (field: ComponentInternalInstance) => void
  // resetFields: (props?: Arrayable<FormItemProp>) => void
  // clearValidate: (props?: Arrayable<FormItemProp>) => void
  // validateField: (
  //   props?: Arrayable<FormItemProp>,
  //   callback?: FormValidateCallback
  // ) => FormValidationResult
}