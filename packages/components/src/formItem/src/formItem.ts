import { definePropType } from '@custom/utils';
import { Rules, RuleItem } from 'async-validator';
import FormItem from './formItem.vue';
export const formItemProps = {
  label: {
    type: String,
    default: ''
  },
  prop: {
    type: String
  },
  rules: {
    type: definePropType<RulesItem>(Object),
    default: null
  }
};
type RuleExtend =  {
  trigger: string | string[]
}
export type RulesItem = RuleExtend[] & RuleItem[];

export type RulesType = Rules;
export type FormItemContext =  InstanceType<typeof FormItem>;