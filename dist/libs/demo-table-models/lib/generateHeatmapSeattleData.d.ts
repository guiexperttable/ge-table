export interface RawData {
    date: string;
    pressure: number;
    temperature: number;
    wind: number;
}
export declare function getRawData(): RawData[];
