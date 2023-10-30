import { OrderIf } from "@guiexpert/demo-table-models";
/**
 * https://app.json-generator.com/DdnuC-lobzBN
 *
 * JG.repeat(5, 205, {
 *   id: JG.objectId().substring(17,19) + '-' + JG.objectId().substring(10,16),
 *   company: JG.company(),
 *   country: JG.country(),
 *   product: JG.lastName(),
 *   sellDate: moment(JG.date(new Date(2023, 0, 1),
 *                            new Date(2023, 10, 1))).format('YYYY-MM-DD'),
 *   inStock: !!JG.integer(0, 1),
 *   quantity: JG.integer(1, 100),
 *   progress: JG.integer(1, 5),
 *   rating: JG.integer(1, 5)
 * });
 */
declare const data: OrderIf[];
export default data;
