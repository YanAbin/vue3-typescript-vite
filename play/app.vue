<template>
  <div>
    <ct-form 
      ref="formRef"
      :model="form" 
      :rules="rules"
      label-width="100px"
      inline
    >
      <ct-form-item 
        label="标签1"
        prop="inputVal1"
      >
        <ct-input
          v-model="form.inputVal1"
          placeholder="请输入标签1"
          @input="onInput"
        />
      </ct-form-item>
      <ct-form-item 
        label="标签2"
        prop="inputVal2"
      >
        <ct-input
          v-model="form.inputVal2"
          placeholder="请输入标签2"
          @input="onInput"
        />
      </ct-form-item>
    </ct-form>
    <ct-button
      size="small"
    >
      测试按钮
    </ct-button>
    <ct-button 
      size="large"
      :disabled="true"
    >
      测试按钮
    </ct-button>
    <ct-button
      type="primary"
    >
      测试按钮
    </ct-button>
    <ct-button 
      type="primary"
      :disabled="true"
    >
      测试按钮
    </ct-button>
    <ct-button
      type="success"
    >
      测试按钮
    </ct-button>
    <ct-button 
      type="success"
      :disabled="true"
    >
      测试按钮
    </ct-button>
    <ct-button
      type="danger"
    >
      测试按钮
    </ct-button>
    <ct-button 
      type="danger"
      :disabled="true"
    >
      测试按钮
    </ct-button>
    <ct-button
      type="warning"
    >
      测试按钮
    </ct-button>
    <ct-button 
      type="warning"
      :disabled="true"
    >
      测试按钮
    </ct-button>
  </div>
</template>

<script lang="ts" setup>
import { Value } from 'async-validator';
import { reactive, ref } from 'vue';
import { Form } from '@custom/components';
const form = reactive({
  inputVal1: '',
  inputVal2: ''
});
type CtFormCtx = InstanceType<typeof Form>
form.inputVal1 = '5';
let formRef = ref<CtFormCtx | null>(null);
let judgeNo1 = (rule: any, value: any, callback: any) => {
  if (value === '1') {
    callback(new Error('不能出入1'));
    return;
  }
  callback();
};
let judgeNo2 = (rule: any, value: any, callback: any) => {
  if (value === '2') {
    callback(new Error('不能出入2'));
    return;
  }
  callback();
};
const rules = {
  inputVal1: [
    { required: true, message: '请输入标签1', trigger: 'input' },
    { validator: judgeNo1, trigger: 'blur' }
  ],
  inputVal2: [
    { required: true, message: '请输入标签2', trigger: 'input' },
    { validator: judgeNo2, trigger: ['input', 'blur'] }
  ]
};
const onInput = (value: Value) => {
  console.log(value, form.inputVal1);
};
const judge = () => {
  if (!formRef.value) return;
  formRef.value.validate((valid) => {
    if (!valid) {
      console.log('校验不通过');
      return;
    }
    console.log('校验通过');
  });
};
</script>
