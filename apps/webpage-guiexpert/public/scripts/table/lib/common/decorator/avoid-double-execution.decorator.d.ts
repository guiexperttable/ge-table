/**
 * A decorator that prevents a method from being executed multiple times within a specified delay.
 *
 * @param {number} [delay=500] - The delay threshold in milliseconds.
 * @returns {Function} - The decorated method descriptor.
 */
export declare function AvoidDoubleExecution(delay?: number): (_target: any, _key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
