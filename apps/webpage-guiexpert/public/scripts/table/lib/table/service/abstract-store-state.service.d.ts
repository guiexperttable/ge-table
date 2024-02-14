import { GetStorageKeyFn } from "../data/options/auto-restore-options.if";
export declare abstract class AbstractStoreStateService {
    protected getStorageKeyFn?: undefined | GetStorageKeyFn;
    constructor(fn: GetStorageKeyFn | undefined);
    autoConvertMapToObject(item: any): {};
    protected abstract load(): void;
    protected checkAndPersistItem(keySuffix: string, item: any): void;
    protected persistItem(subKey: string, item: string | object): void;
    protected loadFromLocalStorage<U>(subKey: string): U | null;
}
