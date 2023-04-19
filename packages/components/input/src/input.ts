export const inputProps = {
  modelValue: {
    type: String || Number || null || undefined,
    default: ''
  },
  prop: String,
  placeholder: String
};

export const emitsEvent = [
  'update:modelValue',
  'onChange',
  'onInput',
  'onFoucs',
  'onBlur',
  'validate'
];
