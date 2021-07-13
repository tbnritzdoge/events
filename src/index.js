function indexOf(arr, element, fromIndex = 0) {
    for (var i = fromIndex, L = arr.length; i !== L; ++i) if (arr[i] === element) return i;
    return -1;
}
class Emitter {
    #events = {};

    on(event, fn) {
        const e = this.#events[event];
        return e ? e[e.length] = fn : this.#events[event] = [fn];
    }

    emit(event, ...args) {
        const e = this.#events[event];
        if (Array.isArray(e) === false) return;
        var i = e.length;
        while (i--) e[i](...args);
    }

    once(event, fn) {
        const f = (...args) => {
            this.splice(event, fn);
            fn(...args);
        }

        return this.on(event, f);
    }

    off(event, fn) {
        const fns = this.#events[event];
        if (fns.length === 1) this.#events[event] = void 0;
        else fns.splice(indexOf(fns, fn), 1);
    }

    removeListener(e, f) { return this.off(e, f); }
    addListener(n, t) { return this.on(n, t); }
    setMaxListeners(..._) { }
    getMaxListeners() { return Infinity }
}

module.exports = Emitter;