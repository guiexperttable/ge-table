import { AreaModelArrayOfArrays, DefaultRowHeights, TableFactory, TableModelIf } from "@guiexpert/table";

const defaultRowHeights = new DefaultRowHeights(34, 50, 0);


const headerLabel = "_ Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");

const data: number[][] =
  `2009 27.9 36.7 42.4 54.5 62.5 67.5 72.7 75.7 66.3 55.0 51.2 35.9
2010 32.5 33.1 48.2 57.9 65.3 74.7 81.3 77.4 71.1 58.1 47.9 32.8
2011 29.7 36.0 42.3 54.3 64.5 72.3 80.2 75.3 70.0 57.1 51.9 43.3
2012 37.3 40.9 50.9 54.8 65.1 71.0 78.8 76.7 68.8 58.0 43.9 41.5
2013 35.1 33.9 40.1 53.0 62.8 72.7 79.8 74.6 67.9 60.2 45.3 38.5
2014 28.6 31.6 37.7 52.3 64.0 72.5 76.1 74.5 69.7 59.6 45.3 40.5
2015 29.9 23.9 38.1 54.3 68.5 71.2 78.8 79.0 74.5 58.0 52.8 50.8
2016 34.5 37.7 48.9 53.3 62.8 72.3 78.7 79.2 71.8 58.8 49.8 38.3
2017 38.0 41.6 39.2 57.2 61.1 72.0 76.8 74.0 70.5 64.1 46.6 33.4`
    .split("\n")
    .map(row => row
      .split(" ")
      .map(s => Number(s))
    );

const MIN = 27.9;
const MAX = 77.4;

// function getHsl(v: number): string {
//   const normalizedValue0to1 = (v - MIN) / (MAX - MIN);
//   const h = Math.floor((1 - normalizedValue0to1) * 360);
//   return `hsl(${h}deg ,100% ,50%)`;
// }

class RGB {
  constructor(
    public r: number,
    public g: number,
    public b: number
  ) {
  }
}

function normalize(value: number, fromSource: number, toSource: number, fromTarget: number, toTarget: number) {
  return (value - fromSource) / (toSource - fromSource) * (toTarget - fromTarget) + fromTarget;
}

function getTwoColorGradientRGB(min: number, max: number, value: number): string {
  var startRGB = new RGB(255, 0, 0);
  var endRGB = new RGB(0, 0, 255);
  var percentFade = normalize(value, min, max, 0, 1);

  var diffRed = endRGB.r - startRGB.r;
  var diffGreen = endRGB.g - startRGB.g;
  var diffBlue = endRGB.b - startRGB.b;

  diffRed = (diffRed * percentFade) + startRGB.r;
  diffGreen = (diffGreen * percentFade) + startRGB.g;
  diffBlue = (diffBlue * percentFade) + startRGB.b;

  return `rgb(${Math.round(diffRed)}, ${Math.round(diffGreen)}, ${Math.round(diffBlue)})`;
}


export function createHeatMapModel(): TableModelIf {
  const bodyAreaModel = new AreaModelArrayOfArrays("body", data, defaultRowHeights.body);
  const columnSizes = new Array(headerLabel.length).fill(50);
  const headerAreaModel = new AreaModelArrayOfArrays("header", [headerLabel], defaultRowHeights.header);

  bodyAreaModel.getCustomStyleAt = (rowIndex: number, columnIndex: number) => {
    let ret: { [key: string]: string } = {};
    if (columnIndex > 0) {
      const n = bodyAreaModel.getValueAt(rowIndex, columnIndex) as number;
      ret = {
        "background": getTwoColorGradientRGB(MIN, MAX, n),
        "color": "#fff"
      };
    }
    ret["paddingTop"] = "10px";
    return ret;
  };

  return TableFactory.createTableModel({
    headerAreaModel,
    bodyAreaModel,
    columnSizes
  });
}
