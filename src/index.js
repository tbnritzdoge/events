const events = Symbol('events');
function null_obj_proto() { var a = {}; Object.setPrototypeOf(a, null); return a; };
class Emitter {
    [events] = null_obj_proto();

    emit(event, ...args) {
        const e = this[events][event];
        if (Array.isArray(e) == false) return false;
        var i = e.length;
        while (i--) e[i](...args);
        return true;
    };

    off(event, fn) {
        const fns = this[events][event];
        if (fns == undefined) return this;
        if (fns.length == 1) this[events][event] = void 0;
        else fns.splice(fns.indexOf(fn), 1);
        return this;
    };

    on(event, fn) { const e = this[events][event]; return (e ? e[e.length] = fn : this[events][event] = [fn]), this; };
    once(event, fn) {  return this.on(event, (...args) => (this.off(event, fn), fn(...args))); };
    listenerCount(event) { const f = this[events][event]; return f == undefined ? 0 : (f.length | 0); };
    removeAllListeners(event) { return (event == undefined ? this[events] = null_obj_proto() : this[events][event] = void 0), this; };
    prependListener(event, fn) { return this.on(event, fn); };
    prependOnceListener(event, fn) { return this.once(event, fn); };
    listeners(event) { return this.rawListeners(event); };
    rawListeners(event) { return this[events][event] ?? []; };
    eventNames() { return Object.keys(this[events]); };
    removeListener(e, f) { return this.off(e, f); };
    addListener(n, t) { return this.on(n, t); };
    setMaxListeners(..._) { return this; };
    getMaxListeners() { return Infinity; };
};

module.exports = Emitter;
module.exports.events = events;