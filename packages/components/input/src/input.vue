<template>
  <div class="ct-input">
    <div 
      class="ct-input-wrapper"
      :class="[isFocus ? 'is-focus' : '']"
    >
      <input 
        v-model="inputValue" 
        :placeholder="props.placeholder"
        class="ct-input-inner"
        @change="valueChange"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inputProps, emitsEvent } from './input';
import { ref, getCurrentInstance, ComponentInternalInstance } from 'vue';
defineOptions({
  name: 'CtInput'
});
const props = defineProps(inputProps);
const emit = defineEmits(emitsEvent);
const inputValue = ref(props.modelValue);
const isFocus = ref(false);
const context = getCurrentInstance() as ComponentInternalInstance;

const valueChange = () => {
  emit('onChange', inputValue.value);
  triggerValid('change');
};
const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
  emit('onInput', inputValue.value);
  triggerValid('input');
};
const onFocus = (event: FocusEvent) => {
  isFocus.value = true;
  emit('onFoucs', (event.target as HTMLInputElement).value);
  triggerValid('focus');
};
const onBlur = (event: FocusEvent) => {
  isFocus.value = false;
  emit('onBlur', (event.target as HTMLInputElement).value);
  triggerValid('blur');
};
const triggerValid = (eventName: string) => {
  const parent = context.parent as ComponentInternalInstance;
  if (parent.type && parent.type.name === 'CtFormItem') {
    parent.exposed?.eventValidate(inputValue.value, eventName);
  }
};
</script>
