export function throttle<T extends (...args: any[]) => any>(func: T, wait: number = 500): (...args: Parameters<T>) => void {
  let timeout: number | null = null;
  let lastCallTime: number = 0;

  return function(this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const now = Date.now();
    const remainingTime = wait - (now - lastCallTime);

    if (remainingTime <= 0) {
      func.apply(this, args);
      lastCallTime = now;

    } else if (!timeout) {
      timeout = window.setTimeout(() => {
        func.apply(this, args);
        lastCallTime = Date.now();
        timeout = null;
      }, remainingTime);
    }
  };
}