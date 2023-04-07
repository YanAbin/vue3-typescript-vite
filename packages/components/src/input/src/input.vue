<template>
  <div>
    <div>
      <input 
        v-model="inputValue" 
        @change="valueChange"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inputProps } from './input';
import { ref } from 'vue';
defineOptions({
  name: 'CtInput'
});
const props = defineProps(inputProps);
const emit = defineEmits(['update:modelValue', 'onChange', 'onInput']);
const inputValue = ref(props.modelValue);
const valueChange = () => {
  emit('onChange', inputValue.value);
};
const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
  emit('onInput', inputValue.value);
};
// const validateInput = () => {

// };
</script>
