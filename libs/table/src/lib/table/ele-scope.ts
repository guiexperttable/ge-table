import { ConvenienceDomService } from "./service/convenience-dom.service";
import { DivScope } from "./data/div-scope.type";
import { TableModelIf } from "./data/tablemodel/table-model.if";
import { TableOptionsIf } from "./data/options/table-options.if";
import { GeoData } from "./data/geo-data";


/**
 * Represents an store for HTML elements.
 * @class
 */
export class EleScope {

  public scrollViewport: HTMLDivElement;

  protected contentWrapperDiv: HTMLDivElement; // the big one. height: sum of rows height == tableModel.getContentHeightInPixel()
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

  protected scrollTop = 0;

  protected areaBodyWestGeo: GeoData = new GeoData();
  protected areaBodyCenterGeo: GeoData = new GeoData();
  protected areaBodyEastGeo: GeoData = new GeoData();


  constructor(
    readonly hostElement: HTMLDivElement,
    readonly tableModel: TableModelIf,
    protected readonly dom: ConvenienceDomService,
    readonly tableOptions: TableOptionsIf
  ) {
    const hostEle = this.hostElement;

    hostEle.innerText = ""; // clear
    this.dom.setAttribute(hostEle, "tabindex", "0"); // needed for getting key events

    this.dom.setStyle(
      this.dom.addClass("ge-table", hostEle)
      , "position", "relative");


    this.hoverRow =
      dom.applyStylePosistionAbsolute(
        dom.createDivWithClass("ge-table-hover-row", hostEle));
    this.hoverColumn =
      dom.applyStylePosistionAbsolute(
        dom.createDivWithClass("ge-table-hover-column", hostEle));
    this.draggingColumn =
      dom.applyStylePosistionAbsolute(
        dom.createDivWithClass("ge-table-dragging-column", hostEle));

    this.areaHeaderWest = dom.appendRelativeChildDiv(
      dom.applyStylePosistionAbsolute(
        dom.createAreaDivWithClass("ge-table-header ge-table-header-west", hostEle, "header", "west")));
    this.areaHeaderCenter = dom.appendRelativeChildDiv(
      dom.applyStylePosistionAbsolute(
        dom.createAreaDivWithClass("ge-table-header ge-table-header-center", hostEle, "header", "center")));
    this.areaHeaderEast = dom.appendRelativeChildDiv(
      dom.applyStylePosistionAbsolute(
        dom.createAreaDivWithClass("ge-table-header ge-table-header-east", hostEle, "body", "east")));

    this.areaBodyWest = dom.appendRelativeChildDiv(
      dom.applyStylePosistionAbsolute(
        dom.createAreaDivWithClass("ge-table-body ge-table-body-west", hostEle, "body", "west")));

    this.areaBodyEast = dom.appendRelativeChildDiv(
      dom.applyStylePosistionAbsolute(
        dom.createAreaDivWithClass("ge-table-body ge-table-body-east", hostEle, "body", "east")));

    this.areaFooterWest = dom.appendRelativeChildDiv(
      dom.applyStylePosistionAbsolute(
        dom.createAreaDivWithClass("ge-table-footer ge-table-footer-west", hostEle, "footer", "west")));

    this.areaFooterCenter = dom.appendRelativeChildDiv(
      dom.applyStylePosistionAbsolute(
        dom.createAreaDivWithClass("ge-table-footer ge-table-footer-center", hostEle, "footer", "center")));

    this.areaFooterEast = dom.appendRelativeChildDiv(
      dom.applyStylePosistionAbsolute(
        dom.createAreaDivWithClass("ge-table-footer ge-table-footer-east", hostEle, "footer", "east")));

    this.scrollViewport =
      dom.applyStyleOverflowAuto(
        this.tableOptions.overflowX ?? "auto",
        this.tableOptions.overflowY ?? "auto",
        dom.applyStyleNoPadding(
          dom.applyStylePosistionAbsolute(
            dom.createAreaDivWithClass("ge-table-scroll-viewport", hostEle, "body", "center")
          )
        )
      );

    this.contentWrapperDiv = dom.applyStyleNoPadding(
      dom.applyStylePosistionRelative(
        dom.createDivWithClass("ge-table-scroll-content-wrapper", this.scrollViewport)));
    this.contentDiv = dom.applyStyleNoPadding(
      dom.applyStylePosistionRelative(
        dom.createDivWithClass("ge-table-scroll-content", this.contentWrapperDiv)));

    this.areaBodyCenter = dom.appendRelativeChildDiv(
      dom.createDivWithClass("ge-table-body-center", this.contentDiv));

    this.borderHeaderBottom =
      dom.applyStylePosistionAbsolute(
        dom.createDivWithClass("ge-table-header-border", hostEle));

    this.borderFixedWest =
      dom.applyStylePosistionAbsolute(
        dom.createDivWithClass("ge-table-west-fixed-column-border", hostEle));

    this.borderFixedEast =
      dom.applyStylePosistionAbsolute(
        dom.createDivWithClass("ge-table-east-fixed-column-border", hostEle));

    this.borderFooterTop =
      dom.applyStylePosistionAbsolute(
        dom.createDivWithClass("ge-table-footer-border", hostEle));
  }


  adjustContainersAndRows() {
    const padding = this.tableModel.getPadding();
    const w = this.hostElement.clientWidth;
    const h = this.hostElement.clientHeight;
    this.dom.applyStyle(this.scrollViewport, {
      width: `${(w - padding.left)}px`,
      height: `${(h - padding.top)}px`,
      top: `${padding.top}px`,
      left: `${padding.left}px`
    });

    this.scrollTop = this.scrollViewport.scrollTop;

    // Content:
    this.dom.applyStyle(this.contentDiv, {
      width: `${this.scrollViewport.clientWidth}px`,
      height: `${this.scrollViewport.clientHeight}px`,
      top: `${this.scrollTop}px`,
      left: `${this.scrollViewport.scrollLeft}px`
    });

    // Body:
    // Body/West:
    this.areaBodyWestGeo.width = padding.left;
    this.areaBodyWestGeo.height = (h - padding.top - padding.bottom);
    this.areaBodyWestGeo.top = padding.top;
    this.areaBodyWestGeo.left = 0;
    this.dom.applyStyleInPx(this.areaBodyWest.parent, this.areaBodyWestGeo);
    if (this.tableOptions.fixedWestSeparatorBorderVisible &&
      this.tableModel.getFixedLeftColumnCount()) {
      this.dom.applyDisplayBlockStyle(
        this.dom.applyStyle(this.borderFixedWest, {
          width: `1px`,
          height: `${this.areaBodyWestGeo.height}px`,
          top: `${this.areaBodyWestGeo.top}px`,
          left: `${this.areaBodyWestGeo.width}px`
        })
      );
    } else {
      this.dom.applyDisplayNoneStyle(this.borderFixedWest);
    }

    // Body/East:
    this.areaBodyEastGeo.width = padding.right;
    this.areaBodyEastGeo.height = (h - padding.top - padding.bottom);
    this.areaBodyEastGeo.top = padding.top;
    this.areaBodyEastGeo.left = w - padding.right;
    this.dom.applyStyleInPx(this.areaBodyEast.parent, this.areaBodyEastGeo);

    if (this.tableOptions.fixedEastSeparatorBorderVisible &&
      this.tableModel.getFixedLeftColumnCount()) {
      this.dom.applyDisplayBlockStyle(
        this.dom.applyStyle(this.borderFixedEast, {
          width: `1px`,
          height: `${this.areaBodyEastGeo.height}px`,
          top: `${this.areaBodyEastGeo.top}px`,
          left: `${this.areaBodyEastGeo.left}px`
        }));
    } else {
      this.dom.applyDisplayNoneStyle(this.borderFixedEast);
    }

    // Body/Center:
    this.areaBodyCenterGeo.width = (w - padding.left - padding.right);
    this.areaBodyCenterGeo.height = (h - padding.top - padding.bottom);
    this.areaBodyCenterGeo.top = 0;
    this.areaBodyCenterGeo.left = 0;
    this.dom.applyStyleInPx(this.areaBodyCenter.parent, this.areaBodyCenterGeo);


    // Header:
    this.dom.applyStyle(this.areaHeaderCenter.parent, {
      width: `${w - padding.left - padding.right}px`,
      height: `${padding.top}px`,
      top: "0",
      left: `${padding.left}px`
    });
    this.dom.applyStyle(this.areaHeaderWest.parent, {
      width: `${padding.left}px`,
      height: `${padding.top}px`,
      top: "0",
      left: "0"
    });
    this.dom.applyStyle(this.areaHeaderEast.parent, {
      width: `${padding.right}px`,
      height: `${padding.top}px`,
      top: "0",
      left: `${w - padding.right}px`
    });
    if (this.tableOptions.headerSeparatorBorderVisible &&
      this.tableModel.isHeaderVisibe()) {
      this.dom.applyDisplayBlockStyle(
        this.dom.applyStyle(this.borderHeaderBottom, {
          width: `${w}px`,
          height: "1px",
          top: `${padding.top}px`,
          left: "0px"
        }));
    } else {
      this.dom.applyDisplayNoneStyle(this.borderHeaderBottom);
    }

    // Footer:
    this.dom.applyStyle(this.areaFooterWest.parent, {
      width: `${padding.left}px`,
      height: `${padding.bottom}px`,
      top: `${h - padding.bottom}px`,
      left: "0"
    });
    this.dom.applyStyle(this.areaFooterCenter.parent, {
      width: `${w - padding.left - padding.right}px`,
      height: `${padding.bottom}px`,
      top: `${h - padding.bottom}px`,
      left: `${padding.left}px`
    });
    this.dom.applyStyle(this.areaFooterEast.parent, {
      width: `${padding.right}px`,
      height: `${padding.bottom}px`,
      top: `${h - padding.bottom}px`,
      left: `${w - padding.right}px`
    });
    if (this.tableOptions.footerSeparatorBorderVisible &&
      this.tableModel.isFooterVisibe()) {
      this.dom.applyDisplayBlockStyle(
        this.dom.applyStyle(this.borderFooterTop, {
          width: `${w}px`,
          height: "1px",
          top: `${h - padding.bottom}px`,
          left: "0px"
        }));
    } else {
      this.dom.applyDisplayNoneStyle(this.borderFooterTop);
    }

    this.adjustAfterScrolling();
  }

  adjustAfterScrolling() {
    // must be overwritten
  }

  protected resetSizeOfWrapperDiv() {
    const w = `${this.tableModel.getContentWidthInPixel()}px`;
    const h = `${this.tableModel.getContentHeightInPixel() + 1}px`; // + 1, we want to see the last horizontal border
    this.dom.setStyle(this.contentWrapperDiv, "width", w);
    this.dom.setStyle(this.contentWrapperDiv, "height", h);
  }

}
