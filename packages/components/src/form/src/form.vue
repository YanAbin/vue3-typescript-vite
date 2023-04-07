<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import Schema from 'async-validator';
import { propsType } from './form';
import { FormValidateCallback } from './type';
import { provide, ref } from 'vue';
import { ValidateError } from 'async-validator';

defineOptions({
  name: 'CtForm'
});
let props = defineProps(propsType);
let validator = new Schema(props.rules);
let errorsFields = ref<ValidateError[]>();
const validate = (callback: FormValidateCallback) => {
  validator.validate(props.model, (errors, fields) => {
    let bool: boolean = errors ? false : true;
    if (errors) {
      errorsFields.value = errors;
      console.log(errors[0].message);
      return;
    }
    console.log(fields);
    callback(bool);
  });
};
provide('errors', errorsFields);
defineExpose({
  validate,
  // validateField
});
</script>