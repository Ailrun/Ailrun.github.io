export const assert: (value: unknown) => asserts value = (value) => {
  if (!value) {
    throw TypeError(`Assertion failed: ${value} is not true`);
  }
};
