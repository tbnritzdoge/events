console.time('build duration');

import { minify } from 'terser';
import { copyFile, mkdir, readFile, writeFile } from 'fs/promises';

setup: { try { await mkdir('./dist'); } catch { }; };

minify: {
    writeFile('./dist/index.js', (await minify((await readFile('./src/index.js')).toString(), { compress: true, mangle: true })).code);
};

esm_and_types: {
    Promise.all([
        writeFile('./dist/index.mjs', 'import m from\'./index.js\';export default m;'),
        copyFile('./src/index.d.ts', './dist/index.d.ts')
    ]);
};

console.timeEnd('build duration');