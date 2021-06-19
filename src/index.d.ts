declare class Emitter {
  on(event: string, fn: (...args: any[]) => unknown): this;
  once(event: string, fn: (...args: any[]) => unknown): this;
  off(event: string): this;

  emit(event: string, ...args: any[]): boolean;
  splice(event: string, fn: (...args: any[]) => unknown): undefined;

  addListener(n: string, t: (...args: any[]) => unknown): this;
  removeListener(n: string, t: (...args: any[]) => unknown): this;

  setMaxListeners(n: number): this;
  getMaxListeners(): number;
}

export = Emitter;
