export class JsonService {

  fixJSON(jsonString: string): string {
    const stack: string[] = [];
    let balancedString = '';
    let inString = false;
    let escapeNext = false;

    for (let i = 0; i < jsonString.length; i++) {
      const char = jsonString[i];

      balancedString += char;

      if (char === '"' && !escapeNext) {
        inString = !inString;
      }

      if (char === '\\' && !escapeNext) {
        escapeNext = true;
        continue;
      } else {
        escapeNext = false;
      }

      // Only pay attention to curly brackets and square brackets when we are NOT inside a string
      if (!inString) {
        if (char === '{' || char === '[') {
          stack.push(char);
        } else if (char === '}' || char === ']') {
          const last = stack.pop();
          if (
            (char === '}' && last !== '{') ||
            (char === ']' && last !== '[')
          ) {
            throw new Error('Invalid JSON structure detected.');
          }
        }
      }
    }

    // Add missing closing brackets:
    while (stack.length > 0) {
      const last = stack.pop();
      if (last === '{') {
        balancedString += '}';
      } else if (last === '[') {
        balancedString += ']';
      }
    }

    return balancedString;
  }


}