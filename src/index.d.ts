declare class Emitter<T extends Record<PropertyKey, any[]> = Record<PropertyKey, any[]>> {
  #events: T;

  on<K extends keyof T>(event: K, listener: EventFunction<T[K]>): this;
  once<K extends keyof T>(event: K, listener: EventFunction<T[K]>): this;
  off<K extends keyof T>(event: K, fn: EventFunction<T[K]>): this;
  listenerCount<K extends keyof T>(event: K): number;
  emit<K extends keyof T>(event: K, ...args: T[K]): boolean;
  removeListener<K extends keyof T>(event: K, fn: EventFunction<T[K]>): this;
  addListener<K extends keyof T>(event: K, listener: EventFunction<T[K]>): this;
  setMaxListeners(n: number): this;
  removeAllListeners<K extends keyof T>(event?: K): this;
  getMaxListeners(): number;
  eventNames(): string[];
  rawListeners<K extends keyof T>(event: K): EventFunction<T[K]>[];
  listeners<K extends keyof T>(event: K): EventFunction<T[K]>[];
  prependListener<K extends keyof T>(event: K, listener: EventFunction<T[K]>): this;
  prependOnceListener<K extends keyof T>(event: K, listener: EventFunction<T[K]>): this;

}

declare type EventFunction<T extends any[] = any[]> = (...args: T) => unknown;

export = Emitter;