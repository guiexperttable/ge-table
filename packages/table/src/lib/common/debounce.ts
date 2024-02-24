
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number = 500): (...args: Parameters<T>) => void {
  let timeout: number | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (timeout) {
      window.clearTimeout(timeout);
    }

    timeout = window.setTimeout(() => {
      func.apply(this, args);
      timeout = null;
    }, wait);
  };
}