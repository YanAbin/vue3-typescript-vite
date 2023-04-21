import { useSizeProp } from '@custom/utils';
const buttonTypes = [
  'primary',
  'success',
  'danger',
  'warning'
] as const;
export const propsType = {
  type: {
    type: String,
    values: buttonTypes,
    default: 'default'
  },
  size: {
    type: String,
    values: useSizeProp,
    default: 'default'
  },
  text: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
};