import { ConvenienceDomService } from "./service/convenience-dom.service";
import { DivScope } from "./data/div-scope.type";
import { TableModelIf } from "./data/tablemodel/table-model.if";
import { TableOptionsIf } from "./data/options/table-options.if";
import { GeoData } from "./data/geo-data";
/**
 * Represents a store for HTML elements.
 * @class
 */
export declare class EleScope {
    readonly hostElement: HTMLDivElement;
    readonly tableModel: TableModelIf;
    protected readonly dom: ConvenienceDomService;
    readonly tableOptions: TableOptionsIf;
    scrollViewport: HTMLDivElement;
    protected contentWrapperDiv: HTMLDivElement;
    protected contentDiv: HTMLDivElement;
    protected areaHeaderCenter: DivScope;
    protected areaHeaderWest: DivScope;
    protected areaHeaderEast: DivScope;
    protected areaBodyCenter: DivScope;
    protected areaBodyWest: DivScope;
    protected areaBodyEast: DivScope;
    protected areaFooterCenter: DivScope;
    protected areaFooterWest: DivScope;
    protected areaFooterEast: DivScope;
    protected borderHeaderBottom: HTMLDivElement;
    protected borderFooterTop: HTMLDivElement;
    protected borderFixedWest: HTMLDivElement;
    protected borderFixedEast: HTMLDivElement;
    protected hoverRow: HTMLDivElement;
    protected hoverColumn: HTMLDivElement;
    protected draggingColumn: HTMLDivElement;
    protected scrollTop: number;
    protected areaBodyWestGeo: GeoData;
    protected areaBodyCenterGeo: GeoData;
    protected areaBodyEastGeo: GeoData;
    constructor(hostElement: HTMLDivElement, tableModel: TableModelIf, dom: ConvenienceDomService, tableOptions: TableOptionsIf);
    /**
     * Adjusts the containers and rows of the table based on the current state.
     *
     * @return {void}
     */
    adjustContainersAndRows(): void;
    /**
     * Adjusts the position or appearance of elements after scrolling.
     * This method must be overwritten in child classes.
     *
     * @return {void}
     */
    adjustAfterScrolling(): void;
    /**
     * Resets the size of the wrapper div based on the content dimensions.
     *
     * @protected
     *
     * @returns {void} Returns nothing.
     */
    protected resetSizeOfWrapperDiv(): void;
}
