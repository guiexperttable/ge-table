/**
 * https://api.json-generator.com/templates/ND86HXYRP2D8/data
 *
 * JG.repeat(5, 80, {
 *   id: JG.objectId().substring(17,19) + '-' + JG.objectId().substring(10,16),
 *   company: JG.company(),
 *   country: JG.country(),
 *   product: JG.lastName(),
 *   birthday: moment(JG.date(new Date(1969, 0, 1),
 *                            new Date(1999, 10, 1))).format('YYYY-MM-DD '),
 *   sellDate: moment(JG.date(new Date(2023, 0, 1),
 *                            new Date(2023, 10, 1))).format('YYYY.MM.DD'),
 *   lastVisit: moment(JG.date(new Date(2023, 0, 1),
 *                            new Date(2023, 10, 1))).toISOString(),
 *   time: moment(JG.date(new Date(2023, 0, 1),
 *                            new Date(2023, 10, 1))).format('hh:mm ss'),
 *   inStock: !!JG.integer(0, 1),
 *   quantity: JG.integer(1, 100),
 *   progress: JG.integer(1, 5),
 *   rating: JG.integer(1, 5),
 *   price: JG.floating(10, 50, 3),
 *   active: JG.bool(),
 *   currency: JG.currency(true),
 *   lorem: JG.loremIpsum({units: 'words', count: 10}),
 *   average: numeral(JG.floating(1000, 4000, 2)).format('$0,0.00'),
 *   f1: JG.floating(-4000, 4000, 2),
 *   f2: JG.floating(-10, 50, 8)
 * });
 *
 */
import { ManyTypesIf } from '../model/many-types.if';
declare const manyTypesData: ManyTypesIf[];
export default manyTypesData;
