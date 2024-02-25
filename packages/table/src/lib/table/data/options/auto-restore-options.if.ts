
/**
 * `IsSameFn` is a type alias for a function used within the `AutoRestoreOptionsIf` interface. The function is designed to compare
 * two instances of a generic type `T`, in conjunction with supplied options of type `AutoRestoreOptionsIf<T>`.
 *
 * This function is used for determining if two instances of `T` are considered the same when restoring the state of an application.
 * This helps in preserving specific states of the application, like sorting or selected state, across different stages or conditions
 * based on the developer's implementation. By default, this function uses strict equality check (`===`) if not provided.
 *
 * @typedef
 * @typeparam T - The type of the objects that the function is comparing.
 *
 * @param {T} r1 - The first object instance of type `T`.
 * @param {T} r2 - The second object instance of type `T`.
 * @param {AutoRestoreOptionsIf<T>} optionsIf - The options that dictate the behavior of auto-restoring.
 *
 * @returns {boolean} - Returns `true` if the two instances are considered the same, `false` otherwise.
 */
export type IsSameFn<T> = (r1: T, r2: T, optionsIf: AutoRestoreOptionsIf<T>) => boolean;


/**
 * GetRowIdFn is a type alias for a function that accepts an instance of type T and returns a unique identifier
 * (either a string or a number) for that instance. It is used for restoring state in conjunction with the
 * AutoRestoreOptionsIf interface.
 * @typedef
 * @typeparam T - The type of the object that the function is going to use.
 */
export type GetRowIdFn<T> = ((row: T) => string | number);

/**
 * GetStorageKeyFn is a type alias for a function that returns a unique key (as a string) for storage.
 * It is used for restoring state in conjunction with the AutoRestoreOptionsIf interface.
 * @typedef
 */
export type GetStorageKeyFn = (() => string);


/**
 * The AutoRestoreOptionsIf interface is utilized to encapsulate options
 * for managing auto-restoring settings across different states of the application.
 * This interface is generic and can be used with any type.
 *
 * @interface
 * @typeparam T - Any type that this interface is going to use.
 * @property {boolean} autoRestoreSortingState - If true, the sorting state of
 * T elements will be preserved after changes in the application state.
 *
 * @property {boolean=} autoRestoreCollapsedExpandedState - Optional. If true,
 * the expanded/collapsed state of T elements will be preserved after changes in the application state.
 *
 * @property {boolean=} autoRestoreScrollPosition - Optional. If true, the scroll position
 * in the list of T elements will be preserved after changes in the application state.
 *
 * @property {boolean=} autoRestoreCheckedState - Optional. If true, the checked state of
 * T elements will be preserved after changes in the application state.
 *
 * @property {boolean=} autoRestoreSelectedState - Optional. If true, the selected state of
 * T elements will be preserved after changes in the application state.
 *
 * @property {(row: T) => string | number} getRowId - Function for generating a unique identifier
 * for an instance of T. If not provided, each instance of T will create a new entry every time state is saved.
 *
 * @property {() => string} getStorageKeyFn - Function for generating a unique key used for storage.
 * If not provided, a constant key 'autorestoreoptionsif' will be used.
 *
 * @property {(r1: T, r2: T, optionsIf: AutoRestoreOptionsIf<T>) => boolean} isSame - Function for checking
 * if two instances of T are considered the same when restoring state. If not provided, strict equality check (===) will be used.
 */
export interface AutoRestoreOptionsIf<T> {

  autoRestoreSortingState: boolean;
  autoRestoreCollapsedExpandedState?: boolean;
  autoRestoreScrollPosition?: boolean;

  autoRestoreCheckedState?: boolean;
  autoRestoreSelectedState?: boolean;

  getRowId?: undefined | GetRowIdFn<T>;
  getStorageKeyFn?: undefined | GetStorageKeyFn;
  isSame?: undefined | IsSameFn<T>;

}



