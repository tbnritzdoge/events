import { test } from 'uvu';
import * as assert from 'uvu/assert';
import Emitter from './dist/index.mjs'

test('initialization', () => {
    assert.ok(new Emitter());
});

test('static', () => {
    const emitter = new Emitter();
    assert.ok(emitter);

    assert.throws(emitter['#events']);
    assert.equal(emitter.getMaxListeners(), Infinity);
    assert.ok(emitter.setMaxListeners(2000));
});

test('emitter', () => {
    const fn = () => {};
    
    const emitter = new Emitter();

    assert.ok(emitter);
    assert.instance(emitter, Emitter);

    assert.equal(emitter.eventNames().length, 0);

    const on = emitter.on('test', fn);
    assert.instance(on, Emitter);
    assert.equal(emitter.listenerCount('test'), 1);
    assert.equal(emitter.listenerCount('random'), 0);

    emitter.once('test', () => null);
    assert.equal(emitter.listenerCount('test'), 2);

    const emitted = emitter.emit('test', 'testist');
    assert.ok(emitted);

    const emitted2 = emitter.emit('test', 'testist');
    assert.ok(emitted2);

    emitter.removeListener('test', fn);
    assert.equal(emitter.listenerCount('test'), 0);

    const emitted3 = emitter.emit('test', 'testist');
    assert.not.ok(emitted3);
});

test.run();