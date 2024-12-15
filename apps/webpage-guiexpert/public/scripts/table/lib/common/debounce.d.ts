export declare function debounce<T extends (...args: any[]) => any>(func: T, wait?: number): (...args: Parameters<T>) => void;
