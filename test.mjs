import { test } from 'uvu';
import * as assert from 'uvu/assert';
import Emitter from './src/index.js';
const noop = () => null;

test('initialization', () => {
    assert.ok(new Emitter());
});

test('static', () => {
    const emitter = new Emitter();
    assert.ok(emitter);

    assert.instance(emitter, Emitter);
    assert.equal(emitter.eventNames().length, 0);
    assert.ok(emitter[Emitter.events])
    assert.equal(emitter.getMaxListeners(), Infinity);
    assert.ok(emitter.setMaxListeners(2000));
});

test('removeAllListeners', () => {
    const emitter = new Emitter();
    assert.ok(emitter);

    assert.ok(emitter.removeAllListeners());

    emitter.on('foo', noop);
    assert.equal(emitter.listenerCount('foo'), 1);

    assert.ok(emitter.removeAllListeners('foo'));
    assert.equal(emitter.listenerCount('foo'), 0);

    emitter.on('foo', noop);
    emitter.on('foo', noop);
    emitter.on('bar', noop);

    assert.ok(emitter.removeAllListeners('foo'));
    assert.equal(emitter.listeners().length, 0);

    assert.ok(emitter.removeAllListeners());
    assert.equal(emitter.listeners().length, 0);
});

test('shims', () => {
    const emitter = new Emitter();
    assert.ok(emitter);

    assert.ok(emitter.prependListener('foo', noop));
    assert.ok(emitter.addListener('foo', noop));
    assert.ok(emitter.prependOnceListener('foo', noop));
    assert.ok(emitter.off('random', noop));
});

test('on', () => {
    const emitter = new Emitter();

    const on = emitter.on('test', noop);
    assert.instance(on, Emitter);
    assert.equal(emitter.listenerCount('test'), 1);
    assert.equal(emitter.listenerCount('random'), 0);

    emitter.on('test', () => null);

    const emitted = emitter.emit('test', 'testist');
    assert.ok(emitted);

    emitter.removeListener('test', noop);
    assert.equal(emitter.listenerCount('test'), 1);

    const emitted2 = emitter.emit('test', 'testist');
    assert.ok(emitted2);

    assert.ok(emitter.off('test'));
    assert.equal(emitter.listenerCount('test'), 0);

    const emitted3 = emitter.emit('test', 'testist');
    assert.not.ok(emitted3);
});

test('once', () => {
    const emitter = new Emitter();

    emitter.once('test', () => null);
    assert.equal(emitter.listenerCount('test'), 1);

    const emitted = emitter.emit('test', 'testist');
    assert.ok(emitted);

    const emitted2 = emitter.emit('test', 'testist');
    assert.not.ok(emitted2);
});

test.run();