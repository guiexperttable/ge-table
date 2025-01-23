
export const entitySuffix = 'Entity';

export function getEntityName(name: string): string {
  let entityName = trimArraySuffixes(firstLetterUppercase(name));
  if (!entityName.includes(entitySuffix)) {
    entityName = entityName + entitySuffix;
  }
  return entityName;
}

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

export function firstLetterUppercase(text: string): string {
  if (!text || text.length === 0) return '';
  return text[0].toUpperCase() + text.slice(1);
}

