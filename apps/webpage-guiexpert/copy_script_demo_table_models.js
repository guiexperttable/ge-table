import {default as fse} from "fs-extra";

const target = 'public/scripts/demo-table-models';
const src = '../../packages/demo-table-models/dist';

fse.removeSync(target);
fse.copySync(src, target);
