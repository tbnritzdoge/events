declare class Emitter<T extends Record<PropertyKey, any[]> = {}> {
  #events: T

  on<K extends keyof T>(event: K, listener: EventFunction<T[K]>): this;
  once<K extends keyof T>(event: K, listener: EventFunction<T[K]>): this;
  off<K extends keyof T>(event: K): this;

  emit<K extends keyof T>(event: K, ...args: T[K]): boolean;
  removeListener<K extends keyof T>(event: K, fn: EventFunction<T[K]>): undefined;

  addListener<K extends keyof T>(event: K, listener: EventFunction<T[K]>): this;

  setMaxListeners(n: number): this;
  getMaxListeners(): number;
}

declare type EventFunction<A extends any[] = any[]> = (...args: A) => unknown;

export = Emitter;
