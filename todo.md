# guiexpert/table

## Packages Status

| Framework     | Lib | Demo | Stackblitz                                                                                                                                                                                          |
|---------------|-----|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| plain JS      | 👌  | 👌   | ✅ : https://stackblitz.com/edit/plain-html-vfcyjh?file=index.ts                                                                                                                                     |
| Web Component | 👌  | 👌   | ✅ : https://stackblitz.com/edit/stackblitz-guiexpert-table-webcomponents-simple?file=index.ts                                                                                                                                                                                               |
| Angular       | 👌  | 👌   | ✅ : https://stackblitz.com/edit/stackblitz-guiexpert-angular-simple?file=src%2Fmain.ts                                                                                                              |
| Vue3          | 👌  | 👌   | ✅ : https://stackblitz.com/edit/stackblitz-guiexpert-vue3-simple?file=src%2FApp.vue                                                                                                                 |
| React         | 👌  | 👌   | ✅ : https://stackblitz.com/edit/stackblitz-guiexpert-react-table-typescript?file=App.tsx                                                                                                            |
| Preact        | 👌  | 👌   | ✅ : https://stackblitz.com/edit/stackblitz-guiexpert-preact-table-simple?file=App.jsx                                                                                                               |
| Solid         | 👌  | ❌   | ❌ : TS2604: JSX element type  GuiexpertTable  does not have any construct or call signatures.   <br/>https://stackblitz.com/edit/stackblitz-guiexpert-solid-table-simple?file=index.html,src%2Findex.tsx |
| Svelte        | 👌  | 👌   | ❌ : fake!  https://stackblitz.com/edit/stackblitz-guiexpert-svelte-demo?file=src%2FApp.svelte                                                                                                       |




## TODOs
- analyse design: https://www.sincode.ai/
- New feature: grouping columns
- Custom-Renderer für angular(✓), vue(✓), solid(✓), svelte(✓), react(✓), preact(✓), webcomponent

- selection mit click & shift , alt
- Cursor model cell or row, blue border. TODO: Navigate mit pfeiltasten
- Spaltenbreite in %

- getActions(row,h) im areamodel, ActionIf (Label, key, disabled)
- Copy to clipboard
- Autorestore: selection, checkboxes, scrollpos(✓), collapsed/expanded(✓)
- Tooltiplistener

## Links

- https://angular.io/presskit

# Some Demo Data

- https://www.govtrack.us/api/v2/role?current=true&role_type=senator
- https://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=en
- https://www.vizgr.org/historical-events/search.php?format=json&begin_date=-3000000&end_date=20151231&lang=de
- https://api.opensource.org/licenses/
- https://api.nobelprize.org/v1/prize.json
- https://api.nobelprize.org/v1/laureate.json
- https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100&start=1
