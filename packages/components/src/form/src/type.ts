// import { definePropType } from 'utils/runtime';
import type {
  RuleItem,
  ValidateFieldsError
} from 'async-validator';
import { Arrayable } from 'utils/array';

export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}
export type FormRules = Partial<Record<string, Arrayable<FormItemRule>>>

export type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => void

export type FormValidationResult = Promise<boolean>

