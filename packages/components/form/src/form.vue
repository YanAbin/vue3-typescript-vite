<template>
  <div class="ct-form">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { propsType, FormContext } from './form';
import { FormValidateCallback } from './type';
import { provide, ref, reactive, ComponentInternalInstance } from 'vue';

defineOptions({
  name: 'CtForm'
});
let props = defineProps(propsType);
let labelWidth = ref(props.labelWidth);
let inline = ref(props.inline);
const fields: ComponentInternalInstance[] = [];

const addField: FormContext['addField'] = (instance: ComponentInternalInstance) => {
  fields.push(instance);
};
const validate = async (callback: FormValidateCallback) => {
  const result: boolean[] = await doValidate();
  const resultBool = result.length === 0 || !result.includes(false);
  callback(resultBool);
};

const doValidate = ():Promise<boolean[]> => {
  return new Promise((resolve) => {
    let result: boolean[] = [];
    fields.forEach(async (instance) => {
      let bool = await instance.exposed?.validate(props.model);
      result.push(bool);
      result.length === fields.length && resolve(result);
    });
  });
};

provide('labelWidth', labelWidth);
provide('inline', inline);
provide('formHandleFn', reactive({
  addField,
}));
defineExpose({
  validate
});
</script>