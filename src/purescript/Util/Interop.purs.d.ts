import { HalogenComponent } from 'purescript-halogen';

declare interface InteropHalogenIO {
  dispose(): void;
}

declare function interop(
  component: HalogenComponent,
  input: unknown,
  target: HTMLElement,
  cb: (hIO: InteropHalogenIO) => void,
): void;
