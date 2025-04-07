---
layout: ../../../layouts/DemoCodeLayout.astro
---

Source of demo: [strategy/run.astro](https://github.com/guiexperttable/ge-table/blob/main/apps/webpage-guiexpert/src/components/showcase/strategy/run.astro).


This example takes inspiration from: https://spread-grid.tomasz-rewak.com/examples/plotter


```js title="Strategy Demo JS"


import {
  TableOptions,
  TableFactory,
  TableScope,
  EventAdapter,
  SimpleDomService,
  CheckboxBooleanPropertyCellRenderer,
  FocusModel,
  ColumnDef,
  px50,
  px60,
  px80,
  px170,
  px200
} from '/scripts/table/index.js';

// This example takes inspiration from: https://spread-grid.tomasz-rewak.com/examples/plotter

const boxChartRenderer = {
  render: (
    cellDiv,
    rowIndex,
    columnIndex,
    areaIdent,
    areaModel,
    _cellValue,
    _domService) => {

    const row = areaModel.getRowByIndex(rowIndex);

    if (!row.enabled) {
      cellDiv.innerHTML = '';
      return undefined;
    }

    const { perc25, perc75, min, max, median } = row;

    const width = 200;
    const height = 32;

    const lineHeight = 8;
    const h0 = height / 2;
    const baseLinePoints = [
      [min * 2, h0], [max * 2, h0]
    ];
    const baseLinePointsPath = baseLinePoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');

    const minLinePath = [
      [min * 2, h0 - lineHeight], [min * 2, h0 + lineHeight]
    ].map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');

    const maxLinePath = [
      [max * 2, h0 - lineHeight], [max * 2, h0 + lineHeight]
    ].map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');

    const medianLinePath = [
      [median * 2, h0 - lineHeight], [median * 2, h0 + lineHeight]
    ].map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');

    const boxLinePath = [
      [perc25 * 2, h0 - lineHeight], [perc75 * 2, h0 - lineHeight], [perc75 * 2, h0 + lineHeight], [perc25 * 2, h0 + lineHeight], [perc25 * 2, h0 - lineHeight]
    ].map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');

    const boxAreaPath = `${boxLinePath} Z`;
    if (boxAreaPath.includes('NaN')) return; // skip

    cellDiv.innerHTML = `
          <div class="ge-table-label-div"
          data-row-index="${rowIndex}"
          data-col-index="${columnIndex}"
          data-area="${areaIdent}"
          style="position: relative; background: transparent; width: 100%; height: 100%;">
              <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
                <path d="${boxAreaPath}" fill="#0098db11" />
                <path d="${baseLinePointsPath}" fill="none" stroke="#0098db" stroke-width="1" />
                <path d="${minLinePath}" fill="none" stroke="#0098db" stroke-width="1" />
                <path d="${maxLinePath}" fill="none" stroke="#0098db" stroke-width="1" />
                <path d="${medianLinePath}" fill="none" stroke="#e00034" stroke-width="1" />
                <path d="${boxLinePath}" fill="none" stroke="#0098db" stroke-width="1" />
              </svg>
          </div>`;

    return undefined;
  }
};

const lineChartRenderer = {
  render: (
    cellDiv,
    rowIndex,
    columnIndex,
    areaIdent,
    areaModel,
    _cellValue,
    _domService) => {

    const row = areaModel.getRowByIndex(rowIndex);
    if (!row.enabled) {
      cellDiv.innerHTML = '';
      return undefined;
    }

    const data = row.data;

    const width = 200;
    const height = 32;
    const maxVal = 100;
    const points = data.map((val, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - (val / maxVal) * height;
      return [x, y];
    });

    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
    const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

    if (areaPath.includes('NaN')) return; // skip

    cellDiv.innerHTML = `
          <div class="ge-table-label-div"
          data-row-index="${rowIndex}"
          data-col-index="${columnIndex}"
          data-area="${areaIdent}"
          style="position: relative; background: transparent; width: 100%; height: 100%;">
              <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
                <path d="${areaPath}" fill="#e00034aa" />
                <path d="${linePath}" fill="none" stroke="#800" stroke-width="1" />
              </svg>
          </div>`;

    return undefined;
  }
};

const upDownRenderer = {
  render: (
    cellDiv,
    rowIndex,
    columnIndex,
    areaIdent,
    areaModel,
    _cellValue,
    domService) => {

    domService.addClass(cellDiv, 'ge-star-rating-div');
    const row = areaModel.getRowByIndex(rowIndex);

    if (!row.enabled) {
      cellDiv.innerHTML = '';
      return undefined;
    }

    const cellValue = row.direction;

    if (cellValue) {
      let chr = '↑';
      if (cellValue > 0) {
        domService.addClass(cellDiv, 'ge-positive-text-color');
        domService.addClass(cellDiv, 'ge-positive-bg');

      } else if (cellValue < 0) {
        domService.addClass(cellDiv, 'ge-negative-text-color');
        domService.addClass(cellDiv, 'ge-negative-bg');
        chr = '↓';
      }
      cellDiv.innerHTML = `
          <div 
            class="ge-table-label-div" 
            data-row-index=${rowIndex}" 
            data-col-index="${columnIndex}" 
            data-area="${areaIdent}" 
            style="position: relative; background: transparent; width: 100%; height: 100%;">
            <div 
              class="ge-table-label"  
              data-row-index="${rowIndex}" 
              data-col-index="${columnIndex}" 
              data-area="${areaIdent}">${chr}</div></div>`;
    }

    return undefined;
  }
};

const columnDefs = [
  ColumnDef.create({
    property: 'enabled',
    headerLabel: '',
    width: px50,
    bodyRenderer: new CheckboxBooleanPropertyCellRenderer('enabled'),
    editable: true,
  }),
  ColumnDef.create({
    property: 'name',
    headerLabel: 'Strategy',
    width: px170,
    bodyClasses: ['ge-table-text-align-left'],
    headerClasses: ['ge-table-text-align-left']
  }),
  new ColumnDef('boxPlot', '', px200, undefined, ColumnDef.bodyRenderer(boxChartRenderer)),
  new ColumnDef('linePlot', '', px200, undefined, ColumnDef.bodyRenderer(lineChartRenderer)),
  new ColumnDef('current', '', px80, undefined),
  new ColumnDef('direction', '', px50, undefined, ColumnDef.bodyRenderer(upDownRenderer)),
  ColumnDef.create({
    property: 'min',
    headerLabel: 'Min',
    width: px60,
    bodyClasses: ['ge-table-text-align-right'],
    headerClasses: ['ge-table-text-align-right']
  }),
  ColumnDef.create({
    property: 'perc25',
    headerLabel: '25%',
    width: px60,
    bodyClasses: ['ge-table-text-align-right'],
    headerClasses: ['ge-table-text-align-right']
  }),
  ColumnDef.create({
    property: 'median',
    headerLabel: 'Median',
    width: px60,
    bodyClasses: ['ge-table-text-align-right'],
    headerClasses: ['ge-table-text-align-right']
  }),
  ColumnDef.create({
    property: 'perc75',
    headerLabel: '75%',
    width: px60,
    bodyClasses: ['ge-table-text-align-right'],
    headerClasses: ['ge-table-text-align-right']
  }),
  ColumnDef.create({
    property: 'max',
    headerLabel: 'Max',
    width: px60,
    bodyClasses: ['ge-table-text-align-right'],
    headerClasses: ['ge-table-text-align-right']
  })
];

const tableOptions = {
  ...new TableOptions(),
  verticalBorderVisible: false,
  defaultRowHeights: {
    header: 34, body: 34, footer: 0
  },
  hoverColumnVisible: false,
  hoverRowVisible: false,
  columnsDraggable: false,
  columnsResizable: false,
  getFocusModel: () => new FocusModel('none')
};

const maxDataPoints = 50;
const rows = [
  { name: 'loader_static_v1', enabled: true, data: [0] },
  { name: 'loader_static_v2', enabled: true, data: [10] },
  { name: 'loader_static_v3', enabled: true, data: [75] },
  { name: 'loader_dynamic_v1', enabled: true, data: [7] },
  { name: 'loader_dynamic_v2', enabled: true, data: [0] },
  { name: 'uploader_static_v1', enabled: false, data: [0] },
  { name: 'uploader_static_v2', enabled: true, data: [21] },
  { name: 'uploader_dynamic_v1', enabled: false, data: [33] },
  { name: 'uploader_dynamic_v2', enabled: true, data: [0] },
  { name: 'uploader_dynamic_v3', enabled: true, data: [0] }
];


const tableModel = TableFactory.createTableModel({
  rows, columnDefs, tableOptions
});


const ele = document.querySelector('.' + id);
const eleOut = document.querySelector('.' + idOut);

ele.style.width = `1060px`;
ele.style.height = `375px`;

ele.addEventListener('mouseout', ()=>requestUpdateIfFrozen());


let freeze = false;

const eventAdapter = new EventAdapter();
eventAdapter.onMouseMoved = (evt) => {
  if (evt.columnIndex===0){
    freeze = true;
  } else {
    requestUpdateIfFrozen();
  }
};




const tableScope = new TableScope(
  ele,
  tableModel,
  new SimpleDomService(),
  tableOptions,
  eventAdapter
);
tableScope.firstInit();

const tableApi = tableScope.getApi();

let lastTick = Date.now();
let count = 0;
let firstCalc = true;

// Start fake realtime updates:
sendUpdateTableModelEvents();

function updateData() {
  for (let i = 0; i < rows.length; i++) {
    const strategy = rows[i];
    const data = [...strategy.data];

    if (data.length >= maxDataPoints) {
      data.shift();
    }

    while (data.length < maxDataPoints) {
      const newPoint = strategy.enabled
        ? data[data.length - 1] + Math.random() * 10 - 5
        : 0;
      data.push(Math.max(0, Math.min(100, newPoint)));
    }

    const sortedData = [...data].sort((a, b) => a - b);
    strategy.data = data;
    strategy.min = Math.min(...data).toFixed(2);
    strategy.max = Math.max(...data).toFixed(2);
    strategy.perc25 = sortedData[Math.floor(sortedData.length * 0.25)].toFixed(2);
    strategy.median = sortedData[Math.floor(sortedData.length * 0.5)].toFixed(2);
    strategy.perc75 = sortedData[Math.floor(sortedData.length * 0.75)].toFixed(2);

    strategy.current = data[data.length - 1].toFixed(4);

    // const direction =  strategy.current - data[data.length - 2];
    const direction = strategy.current - data[0];
    strategy.direction = direction < 0 ? -1 : direction > 0 ? 1 : 0;

  }
}

function sendUpdateTableModelEvents() {
  if (freeze) return; // skip
  count++;

  if (count > 120) {
    const now = Date.now();
    const deltaTime = now - lastTick;
    eleOut.innerText = `${Math.round(10 * count / deltaTime * 1000) / 10} fps`;
    lastTick = now;
    count = 0;
  }

  updateData();

  if (firstCalc) {
    firstCalc = false;
    console.info(rows);
  }
  tableApi.updateCells([], true);
  requestAnimationFrame(() => sendUpdateTableModelEvents());
}

function requestUpdateIfFrozen(){
  if (freeze){
    freeze = false;
    requestAnimationFrame(() => sendUpdateTableModelEvents());
  }
}

```
