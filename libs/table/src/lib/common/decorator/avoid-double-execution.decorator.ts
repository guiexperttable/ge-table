/**
 * A decorator that prevents a method from being executed multiple times within a specified delay.
 *
 * @param {number} [delay=500] - The delay threshold in milliseconds.
 * @returns {Function} - The decorated method descriptor.
 */
export function AvoidDoubleExecution(delay:number = 500) {
  return function (_target: any, _key: string, descriptor: PropertyDescriptor) {
    let lastClick = 0;
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (Date.now() - lastClick < delay) {
        // skipped
        return;
      }
      lastClick = Date.now();
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}