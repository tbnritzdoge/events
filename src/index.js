function nullObjProto() { var a = {}; Object.setPrototypeOf(a, null); return a; };
class Emitter {
    #events;
    constructor() { this.#events = nullObjProto(); };

    on(event, fn) {
        const e = this.#events[event] ??= [];
        return e[e.length] = fn, this;
    };

    emit(event, ...args) {
        const e = this.#events[event];
        if (Array.isArray(e) == false) return false;
        var i = e.length;
        while (i--) e[i](...args);
        return true;
    };

    once(event, fn) {
        const f = (...args) => {
            this.off(event, fn);
            fn(...args);
        };

        return this.on(event, f);
    };

    off(event, fn) {
        const fns = this.#events[event];
        if (fns == undefined) return this;
        if (fns.length == 1) this.#events[event] = void 0;
        else fns.splice(fns.indexOf(fn), 1);
        return this;
    };

    listenerCount(event) {
        const fns = this.#events[event];
        if (fns == undefined) return 0;
        return fns.length;
    };

    removeAllListeners(event) {
        if (event == undefined) this.#events = nullObjProto();
        else this.#events[event] = void 0;
        return this;
    };

    prependListener(event, fn) { return this.on(event, fn); };
    prependOnceListener(event, fn) { return this.once(event, fn); };
    listeners(event) { return this.rawListeners(event); };
    rawListeners(event) { return this.#events[event] ?? []; };
    eventNames() { return Object.keys(this.#events); };
    removeListener(e, f) { return this.off(e, f); };
    addListener(n, t) { return this.on(n, t); };
    setMaxListeners(..._) { return this; };
    getMaxListeners() { return Infinity; };
};

module.exports = Emitter;