declare class Emitter<T extends Record<PropertyKey, any[]> = {}> {
  #events: T;

  on<K extends PropertyKey>(event: K, listener: EventFunction): this;
  once<K extends PropertyKey>(event: K, listener: EventFunction): this;
  off<K extends PropertyKey>(event: K, fn: EventFunction): this;
  listenerCount<K extends PropertyKey>(event: K): number;

  emit<K extends PropertyKey>(event: K, ...args: T[K]): boolean;
  removeListener<K extends PropertyKey>(event: K, fn: EventFunction): this;

  addListener<K extends PropertyKey>(event: K, listener: EventFunction): this;

  setMaxListeners(n: number): this;
  getMaxListeners(): number;
}

declare type EventFunction = (...args: any[]) => unknown;

export = Emitter;
