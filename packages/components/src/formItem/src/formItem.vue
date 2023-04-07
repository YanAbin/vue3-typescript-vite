<template>
  <div class="form-item">
    <slot></slot>
    <div>{{ msg }}</div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch, Ref } from 'vue';
import { formItemProps } from './formItem';
import { ValidateError } from 'async-validator';

const props = defineProps(formItemProps);
const errors: Ref<ValidateError[]> = inject('errors') as Ref<ValidateError[]>;
console.log(errors);
let msg = ref<string | undefined>('');

watch(() => errors.value, () => {
  console.log(errors, '报错监听');
  msg.value = errors.value.find(error => {
    return error.field === props.prop;
  })?.message;
});
defineOptions({
  name: 'CtFormItem'
});
</script>

<style scoped>

</style>