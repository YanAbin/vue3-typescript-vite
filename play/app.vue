<template>
  <div>
    <!-- <ct-button /> -->
    <ct-form 
      ref="formRef"
      :model="form" 
      :rules="rules"
    >
      <ct-form-item 
        label="标签"
        prop="inputVal"
      >
        <ct-input
          v-model="form.inputVal"
          @input="onInput"
        />
      </ct-form-item>
    </ct-form>
  </div>
</template>

<script lang="ts" setup>
import { Value } from 'async-validator';
import { reactive, ref, onMounted } from 'vue';
import { Form } from '@custom/components';
const form = reactive({
  inputVal: ''
});
type CtFormCtx = InstanceType<typeof Form>
form.inputVal = '222';
let formRef = ref<CtFormCtx | null>(null);
onMounted(() => {
  if (formRef.value) {
    formRef.value.validate((valid) => {
      if (valid) {
        console.log(1);
      }
    });
    console.log();
  }
});
const rules = {
  inputVal: [
    { required: true, message: '请输入xxxx', trigger: 'input' }
  ]
};
const onInput = (value: Value) => {
  console.log(value, form.inputVal);
};
</script>
