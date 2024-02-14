/**
 * Represents a filter function that is used to determine if an element should be included in a filtered array.
 * @template T The type of the elements in the array.
 * @param {T} value The current element being evaluated.
 * @param {number} index The index of the current element being evaluated.
 * @param {T[]} array The array that the filter function was called upon.
 * @returns {unknown} The result of the filter function evaluation: `true` if the element should be included, `false` otherwise.
 */
export type FilterFunction<T> = (value: T, index: number, array: T[]) => unknown;
