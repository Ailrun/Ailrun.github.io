import { useEffect } from 'react';
import { interop } from "../purescript/Util/Interop.purs"

export interface Props {
  component: any;
  input?: any;
  target?: HTMLElement;
}

export default function HalogenLoader({ component, input, target }: Props) {
  useEffect(() => {
    const realInput = input == null ? {} : input
    if (target != null) {
      interop(component, realInput, target);
    }
  }, [component, input, target]);

  return null;
}
