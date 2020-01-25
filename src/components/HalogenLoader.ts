import { useLayoutEffect } from 'react';
import { HalogenComponent } from 'purescript-halogen';

import { interop } from '../purescript/Util/Interop.purs';

export interface Props {
  component: HalogenComponent;
  input?: any;
  target: HTMLElement | null;
}

const HalogenLoader: React.FC<Props> = ({ component, input, target }) => {
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
};
export default HalogenLoader;
