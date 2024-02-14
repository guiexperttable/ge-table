export declare class GeFilterService {
    filterPredict<T>(item: T, filterString: string, toString?: (t: T) => string): boolean;
    filterRows<T>(rows: T[], filterString: string, toString?: (t: T) => string): T[];
    objectToString<T>(o: T): string;
}
