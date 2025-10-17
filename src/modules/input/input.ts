import { block } from '../block/block';
import { inputLayout } from './inputLayout';

input.prototype.block = block as () => void;

export function input(name: string, type: string, placeholder: string) {
  return inputLayout(name, type, placeholder)
}
