<template>
  <div 
    class="ct-form-item"
    :class="[inline ? 'ct-form-item-flex' : '']"
  >
    <div 
      :style="{width: labelWidth}" 
      class="ct-form-item-label"
    >
      {{ props.label }}
    </div>
    <slot></slot>
  </div>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
import { inject, ref, Ref, getCurrentInstance, ComponentInternalInstance, onMounted } from 'vue';
import { formItemProps, RulesType, RulesItem } from './formItem';
import Schema from 'async-validator';
import { FormContext } from 'packages/components/form/src/form';

defineOptions({
  name: 'CtFormItem'
});

const props = defineProps(formItemProps);
const labelWidth: string | number | undefined = inject('labelWidth');
const formHandleFn = inject('formHandleFn') as FormContext;
const inline: Ref<boolean> = inject('inline') as Ref<boolean>;
const instance = getCurrentInstance() as ComponentInternalInstance;

let msg = ref<string | undefined>('');

onMounted(() => {
  formHandleFn.addField(instance);
});

const doValidate = (rules: RulesType, model: any) => {
  return new Promise((resolve) => {
    const validator = new Schema(rules);

    validator.validate(model, (errors: any) => {
      if (errors) {
        msg.value = errors[0].message;
        resolve(false);
        return;
      }
      msg.value = '';
      resolve(true);
    });
  });
};
const validate = async (model: any) => {
  const rules = getRules();
  let bool = await doValidate(rules, model);
  return bool;
};
const getRules = () => {
  const rules = props.rules || (instance.parent?.props.rules as RulesType)[props.prop as string];
  return {
    [props.prop as string]: rules as RulesItem
  };
};
const eventValidate = (value: any, eventName: string) => {
  let model = {
    [props.prop as string]: value
  };

  if (judgeTrigger(eventName)) {
    validate(model);
  }
};
const judgeTrigger = (eventName: string) => {
  let rules = getRules();
  let ruleArr = rules[props.prop as string];
  let index = ruleArr.findIndex(rule => {
    if (typeof rule?.trigger === 'string') {
      return rule?.trigger === eventName;
    }
    if (Array.isArray(rule?.trigger)) {
      return rule?.trigger.includes(eventName);
    }
  });
  return index > -1;
};
defineExpose({
  validate,
  eventValidate
});
</script>
