export const propsType = {
  limit: {
    type: Number
  },
  multiple: {
    type: Boolean,
    default: true
  },
  type: {
    type: String || Array
  },
  sizeLimit: {
    type: Number
  },
  onExceed: {
    type: Function
  }
};

export const emitsEvent = [
  'onBeforeUpload',
  'onSuccess',
  'onFail'
];