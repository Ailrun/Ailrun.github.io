import { useLayoutEffect } from 'react';
import { interop } from "../purescript/Util/Interop.purs"

export interface Props {
  component: any;
  input?: any;
  target?: HTMLElement;
}

export default function HalogenLoader({ component, input, target }: Props) {
  useLayoutEffect(() => {
    const realInput = input == null ? {} : input;
    let dispose: any;

    if (target != null) {
      interop(component, realInput, target, (hIO: { dispose: any }) => {
        dispose = hIO.dispose;
      });
    }

    return dispose;
  }, [component, input, target]);

  return null;
}
