import { PropertyType } from './domain/property-type';
import { PropertyTypeService } from './property-type.service';
import { ValueInfo } from './domain/value-info';

const demoData = [
  {
    id: 1,
    name: 'Alice',
    description: 'Lorem ipsum dolor',
    isActive: true,
    tags: ['typescript', 'javascript'],
    scripts: [],
    profile: { age: 30, location: 'Berlin' },
    preferences: [{ key: 'theme', value: 'dark' }]
  },
  {
    id: 2,
    name: 'Marc',
    description: 'Lorem ipsum dolor 2',
    isActive: false,
    tags: ['java', 'javascript'],
    scripts: [],
    profile: { age: 55, location: 'Frankfurt' },
    preferences: [{ key: 'theme', value: 'light' }]
  },
  {
    id: null,
    name: 'Bob',
    isActive: false,
    tags: null,
    scripts: [],
    profile: { age: 25, location: 'Frankfurt' },
    preferences: [{ key: 'language', value: 'de' }]
  }
];


const propertyTypeService = new PropertyTypeService();
propertyTypeService.debugging = true;

// let valueInfos: ValueInfo[] = propertyTypeService.object2ValueInfos(demoData, 'XyzRows');
// console.log('-----------------------------');
// valueInfos = valueInfos.filter(valueInfo=>{
//   let p = valueInfo.path.replace('root/[]/', '');
//   return !p.includes('root') && !p.includes('[]')
// });
// for (let i = 0; i < valueInfos.length; i++) {
//   const valueInfo = valueInfos[i];
//   valueInfo.value = null;
//   const istr = i.toString().padStart(2, '0');
//   let p = valueInfo.path.replace('root/[]/', '');
//   console.info(p + ' -> ' + valueInfo.propertyItem.toString());
// }


const rootPropertyType: PropertyType = propertyTypeService.object2PropertyType(demoData, 'XyzRows');
console.log('-----------------------------');
console.log(JSON.stringify(rootPropertyType, null, 4));
