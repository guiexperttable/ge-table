export function harmonizeShortcut(shortcut: string): string {
  return shortcut
    .trim()
    .replace(/\+/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/⌫/g, 'backspace')
    .replace(/↩/g, 'enter')
    .replace(/⇧/g, 'shift')
    .replace(/⌥/g, 'alt')
    .replace(/option/g, 'alt')
    .replace(/opt/g, 'alt')
    .replace(/⌃/g, 'ctrl')
    .replace(/control/g, 'ctrl')
    .replace(/command/g, 'cmd')
    .replace(/meta/g, 'cmd')
    .replace(/escape/g, 'esc')
    .replace(/⌘/g, 'cmd')
    .replace(/\*/g, 'multiply')
    .split(' ')
    .filter(s => s)
    .sort((a: string, b: string) => {
      const modifierOrder: { [key: string]: number } = { 'cmd': 1, 'ctrl': 2, 'alt': 3, 'shift': 4 };
      const aOrder = modifierOrder[a] || 5;
      const bOrder = modifierOrder[b] || 5;
      if (aOrder !== bOrder) {
        return aOrder - bOrder;
      }
      return a.localeCompare(b);
    })
    .join(' ');
}

export function createHarmonizedShortcutByKeyboardEvent(keyboardEvent: KeyboardEvent): string {
  // Get the key from the event
  let key = keyboardEvent.key.toLowerCase();

  // Map special keys
  if (key === ' ') key = 'space';
  if (key === 'arrowleft') key = 'left';
  if (key === 'arrowright') key = 'right';
  if (key === 'arrowup') key = 'up';
  if (key === 'arrowdown') key = 'down';
  if (key === 'delete' && keyboardEvent.code === 'Delete') key = 'delete';
  if (key === 'backspace') key = 'backspace';
  if (key === 'escape') key = 'esc';
  if (key === 'return') key = 'enter';

  // Handle numpad keys
  if (keyboardEvent.code.startsWith('Numpad')) {
    const numpadKey = keyboardEvent.code.replace('Numpad', '').toLowerCase();
    if (numpadKey === 'add') key = 'num_add';
    else if (numpadKey === 'subtract') key = 'num_subtract';
    else if (numpadKey === 'multiply') key = 'num_multiply';
    else if (numpadKey === 'divide') key = 'num_divide';
    else if (numpadKey === 'decimal') key = 'num_decimal';
    else if (numpadKey === 'enter') key = 'num_enter';
    else key = 'num_' + numpadKey;
  }

  // Handle function keys (F1-F19)
  if (keyboardEvent.code.match(/^F\d+$/)) {
    key = keyboardEvent.code.toLowerCase();
  }

  // Handle digit keys (1-9,0)
  if (keyboardEvent.code.match(/^Digit\d+$/)) {
    key = keyboardEvent.code.replace(/Digit/g, '');
  }

  // Build the shortcut string with modifiers
  let shortcut = '';
  if (keyboardEvent.ctrlKey) shortcut += ' ctrl';
  if (keyboardEvent.altKey) shortcut += shortcut + ' alt';
  if (keyboardEvent.shiftKey) shortcut += shortcut + ' shift';
  if (keyboardEvent.metaKey) shortcut += shortcut + ' cmd';

  return harmonizeShortcut(shortcut + ' ' + key);
}



