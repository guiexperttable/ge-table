
export const entitySuffix = 'Entity';


/**
 * Generates an entity name by formatting the input name and appending a predefined suffix if necessary.
 *
 * @param {string} name - The base name to generate the entity name from.
 * @return {string} The formatted entity name with the appropriate suffix.
 */
export function getEntityName(name: string): string {
  let entityName = trimArraySuffixes(firstLetterUppercase(name));
  if (!entityName.includes(entitySuffix)) {
    entityName = entityName + entitySuffix;
  }
  return entityName;
}


/**
 * Trims specific suffixes from the input string if present. The suffixes targeted for removal are 'Array', 'Arr', 'List', and 's'.
 *
 * @param {string} text - The input string to process and trim suffixes from.
 * @return {string} The modified string with the suffix removed, or the original string if no suffix was found.
 */
export function trimArraySuffixes(text: string): string {
  if (!text || text.length === 0) return text;

  const suffixesToRemove = ['Array', 'Arr', 'List', 's'];
  for (const suffix of suffixesToRemove) {
    if (text.endsWith(suffix)) {
      return text.slice(0, -suffix.length);
    }
  }
  return text;
}


/**
 * Transforms the first letter of the given string to uppercase while leaving the rest of the string unchanged.
 *
 * @param {string} text - The input string to be processed.
 * @return {string} The transformed string with the first letter in uppercase. Returns an empty string if the input is invalid or empty.
 */
export function firstLetterUppercase(text: string): string {
  if (!text || text.length === 0) return '';
  return text[0].toUpperCase() + text.slice(1);
}

