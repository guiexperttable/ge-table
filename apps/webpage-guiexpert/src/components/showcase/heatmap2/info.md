---
layout: ../../../layouts/DemoCodeLayout.astro
---

You will find see source code of the model here: 
[generateHeatmapSeattle.ts](https://github.com/guiexperttable/ge-table/blob/main/packages/demo-table-models/src/lib/generateHeatmapSeattle.ts).
And the raw data here: 
[generateHeatmapSeattleData.ts](https://github.com/guiexperttable/ge-table/blob/main/packages/demo-table-models/src/lib/generateHeatmapSeattleData.ts).

In this example, we demonstrate how write a custom body area model by extending an `AreaModel`.
The background color is given by the `getCustomStyleAt()` method.

```ts title="HeatMapSeattleBodyModel.ts"
class HeatMapSeattleBodyModel extends AreaModel {

  override getRowCount(): number {
    return times.length;
  }

  override getRowHeight(_rowIndex: number): number {
    return defaultRowHeights;
  }

  override getValueAt(rowIndex: number, columnIndex: number): any {
    if (columnIndex === 0) return times[rowIndex];
    return "";
  }


  override getTooltipAt(rowIndex: number, columnIndex: number): any {
    if (columnIndex === 0) {
      return "";
    }
    columnIndex--;
    const date = days[columnIndex];
    const time = times[rowIndex];
    if (map[date] && map[date][time]) {
      return `${date} ${time} → ${map[date][time].temperature}`;
    }
    return "";
  }

  override getCustomStyleAt(rowIndex: number, columnIndex: number): { [p: string]: string } | undefined {
    if (columnIndex === 0) {
      return undefined;
    }
    columnIndex--;
    const date = days[columnIndex];
    const time = times[rowIndex];
    if (!map[date] || !map[date][time]) return undefined;

    const n = map[date][time].temperature;

    // const red = new ColorRgb(255, 0, 0);
    // const blue = new ColorRgb(0, 0, 255);
    // const p = new TwoColorGradientArg(MIN, red, MAX, blue);
    // -> "background": GeCssColorUtil.getTwoColorGradientRGB(n, p),

    const minColor = new ColorRgb(67, 1, 84);
    const middleColor = new ColorRgb(31, 144, 141);
    const maxColor = new ColorRgb(250, 230, 37);
    const MIDDLE = (MAX + MIN) / 2;
    const p = new ThreeColorGradientArg(MIN, minColor, MIDDLE, middleColor, MAX, maxColor);

    return {
      "background": GeCssColorUtil.getThreeColorGradientRGB(n, p),
      "color": "transparent" // we only want to show the bg color
    };
  }
}

```

We also write our own footer area model, because of so many col spans.

```ts
class HeatMapSeattleFooterModel extends AreaModel {

  override getRowCount(): number {
    return 1;
  }

  override getRowHeight(_rowIndex: number): number {
    return defaultRowHeights;
  }

  override getValueAt(_rowIndex: number, columnIndex: number): any {
    if (columnIndex === 1) return "Jan";
    if (columnIndex === 32) return "Feb";
    if (columnIndex === 60) return "Mar";
    if (columnIndex === 91) return "Apr";
    if (columnIndex === 121) return "May";
    if (columnIndex === 152) return "Jun";
    if (columnIndex === 182) return "Jul";
    if (columnIndex === 213) return "Aug";
    if (columnIndex === 244) return "Sep";
    if (columnIndex === 274) return "Oct";
    if (columnIndex === 305) return "Nov";
    if (columnIndex === 335) return "Dec";
    return "";
  }

  override getColspanAt(_rowIndex: number, columnIndex: number): number {
    if (columnIndex === 1) return 31;
    if (columnIndex === 32) return 28;
    if (columnIndex === 60) return 31;
    if (columnIndex === 91) return 30;
    if (columnIndex === 121) return 31;
    if (columnIndex === 152) return 30;
    if (columnIndex === 182) return 31;
    if (columnIndex === 213) return 31;
    if (columnIndex === 244) return 30;
    if (columnIndex === 274) return 31;
    if (columnIndex === 305) return 30;
    if (columnIndex === 335) return 31;
    return 0;
  }

  override getMaxColspan(): number {
    return 32;
  }

  override getCustomStyleAt(_rowIndex: number, columnIndex: number): { [p: string]: string } | undefined {
    return {
      "background": "#fff",
      "border-left": columnIndex > 2 ? "solid 1px #555" : "none"
    };
  }
}
```

The `TableModel` is created by:
```ts
export function createHeatMapSeattleModel(): TableModelIf {
  const bodyAreaModel = new HeatMapSeattleBodyModel();
  const footerAreaModel = new HeatMapSeattleFooterModel();
  const columnSizes = [60, ...(new Array(days.length).fill(defaultColumnWidth))];

  return TableFactory.createTableModel({
    bodyAreaModel,
    footerAreaModel,
    columnSizes,
    fixedLeftColumnCount: 1
  });
}
```

Full demo code: [heatmap2/run.astro](https://github.com/guiexperttable/website-astro/blob/main/src/components/showcase/heatmap2/run.astro)