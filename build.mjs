console.time('build duration');

import { minify } from 'terser';
import { copyFile, mkdir, readFile, writeFile } from 'fs/promises';

setup: { try { await mkdir('./dist'); } catch { }; };

minify: {
    const { code } = await minify((await readFile('./src/index.js')).toString(), {
        compress: true,
        mangle: true
    });
    await writeFile('./dist/index.js', code);
};

esm_and_types: {
    await Promise.all([
        writeFile('./dist/index.mjs', 'import mod from"./index.js";export default mod;'),
        copyFile('./src/index.d.ts', './dist/index.d.ts')
    ]);
};

console.timeEnd('build duration');