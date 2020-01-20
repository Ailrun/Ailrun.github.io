import { useEffect } from 'react';
import { interop } from "../../purescript/Util/Interop.purs"

export interface Props {
  component: any;
  target?: HTMLElement;
}

export default function HalogenLoader({ component, target }: Props) {
  useEffect(() => {
    if (target != null) {
      interop(component, {}, target);
    }
  }, [component, target]);

  return null;
}
