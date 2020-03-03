export const assert: (value: unknown) => asserts value = (value) => {
  if (!value) {
    /* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
    throw TypeError(`Assertion failed: ${value} is not true`);
  }
};
