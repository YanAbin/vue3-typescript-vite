<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { formProps } from './form';
import { FormValidateCallback, FormValidationResult } from './type';
import { isFunction } from '@custom/utils';
import { ValidateFieldsError } from 'async-validator';
import { computed } from 'vue';
defineOptions({
  name: 'CtForm'
});
const propsData = defineProps(formProps);
const propsRules = computed(() => {
  return propsData.rules || [];
});
console.log(propsRules);
// 验证表单
const validate = async (callback?: FormValidateCallback): FormValidationResult => {
  let ruleskeys = Object.keys(propsRules.value);
  return validateField(ruleskeys, callback);
};
// 验证传入的字段
const validateField = async (modelProp: string[], callback: any) => {
  const shouldThrow = !isFunction(callback);
  try {
    const result = await doValidateField(modelProp);
    if (result === true) {
      callback?.(result);
    }
  } catch (e) {
    if (e instanceof Error) throw e;

    const invalidFields = e as ValidateFieldsError;

    callback?.(false, invalidFields);
    return shouldThrow && Promise.reject(invalidFields);
  }
  return true;
};
// 执行验证的逻辑
const doValidateField = async (props: Array<string> = []) => {
  debugger;
  if (!props.length) return true;
  // let fields = obtainValidateFields(props);
  let validationErrors: object = {};
  // for (const field of fields) {
  //   try {
  //     // await field.validate('');
  //     console.log(field);
  //   } catch (fields) {
  //     validationErrors = {
  //       ...validationErrors,
  //       ...(fields as ValidateFieldsError),
  //     };
  //   }
  // }

  if (Object.keys(validationErrors).length === 0) return true;
  return Promise.reject(validationErrors);
};
// 获取到关联的验证内容
// const obtainValidateFields = (props: Array<string>) => {
//   const filteredFields: keyof propsRules= {};
//   props.forEach((prop) => {
//     if (propsRules.value[prop]) {
//       filteredFields[prop] = propsRules.value[prop];
//     }
//   });
//   if (!filteredFields.length) {
//     debugWarn(COMPONENT_NAME, 'please pass correct props!')
//     return []
//   }
//   return filteredFields;
// };

// const filterFields = (
//   fields: [object],
//   props: Arrayable<string>
// ) => {
//   const normalized = props;
//   return normalized.length > 0
//     ? fields.filter((field) => field.prop && normalized.includes(field.prop))
//     : fields;
// };

defineExpose({
  validate,
  validateField
});
</script>