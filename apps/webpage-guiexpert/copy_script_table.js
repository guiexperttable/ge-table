import {default as fse} from "fs-extra";

const target = 'public/scripts/table';
const src = '../../packages/table/dist';

fse.removeSync(target);
fse.copySync(src, target);
