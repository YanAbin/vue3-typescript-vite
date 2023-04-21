<template>
  <button 
    :class="[
      `ct-button-${props.size}`, 
      `ct-button-type-${props.type}`,
    ]"
    class="ct-button"
    :disabled="props.disabled"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { propsType } from './button';
defineOptions({
  name: 'CtButton'
});
const props = defineProps(propsType);

</script>

<style lang="less" scoped>
.a {
  text-align: center;
}
</style>
