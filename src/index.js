function indexOf(arr, element, fromIndex = 0) {
    for (var i = fromIndex, L = arr.length; i !== L; ++i) if (arr[i] === element) return i;
    return -1;
}
/**
 * @class Emitter
 */
class Emitter {
    #events = {};
    
    /**
     * @param {string} event
     * @param {any} fn
     * @return {any} 
     * @memberof Emitter
     */
    on(event, fn) {
        const e = this.#events[event];
        return e ? e[e.length] = fn : this.#events[event] = [fn];
    }

    /**
     * @param {string} event
     * @param {...any} args
     * @return {undefined} 
     * @memberof Emitter
     */
    emit(event, ...args) {
        const e = this.#events[event];
        if (!e) return;
        var i = e.length;
        while (i--) e[i](...args);
    }

    /**
     * @param {string} event
     * @param {any} fn
     * @return {any} 
     * @memberof Emitter
     */
    once(event, fn) {
        const f = (...args) => {
            this.splice(event, fn);
            fn(...args);
        }

        return this.on(event, f);
    }

    /**
     * @param {string} event
     * @return {any}
     * @memberof Emitter
     */
    off(event) {
        return this.#events[event] = void 0;
    }

    /**
     * @param {string} event
     * @param {fn} the function which you provided in <Emitter>.on or <Emitter>.once
     * @memberof Emitter
     */
    splice(event, fn) {
        const fns = this.#events[event];
        if (fns.length === 1) this.off(event);
        else fns.splice(indexOf(fns, fn), 1);
    }

    addListener(n, t) { return this.on(n, t) }
    removeListener(n, t) { return this.splice(n, t) }
    setMaxListeners(..._) { }
    getMaxListeners() { return Infinity }
}

module.exports = Emitter;