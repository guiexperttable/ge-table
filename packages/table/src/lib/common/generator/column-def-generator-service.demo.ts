import { PropertyType } from './domain/property-type';
import { PropertyTypeService } from './property-type.service';
import { ColumnDefGenerator } from './column-def-generator-service';
import { SchemeGenerator } from './scheme-generator-service';

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


const rootPropertyType: PropertyType = new PropertyTypeService().object2PropertyType(demoData, 'XyzRows');

console.log(new ColumnDefGenerator().renderColumnDefs(rootPropertyType, true).join('\n'));

console.log(new SchemeGenerator().renderTypeScriptInterfaces(rootPropertyType).join('\n'));