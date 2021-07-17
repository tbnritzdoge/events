console.time('build');
import { minify } from 'terser';
import { mkdir, readFile, writeFile } from 'fs/promises';

function replacer(code, runtime) {
    return code
        .replace(/.+\/\/ !(\w+)/g, (code, target) => target !== runtime ? '' : code)
        .replace(/\/\/ ![^]+?\n\/\/ !(\w+)/g, (code, target) => target !== runtime ? '' : code);
}

setup: {
    try { await mkdir('./dist'); } catch { };
};

minify: {
    const raw = replacer((await readFile('./src/index.js')).toString(), 'build');
    const { code } = await minify(raw, {
        compress: true,
        mangle: true
    });
    await writeFile('./dist/index.js', code);

};

console.timeEnd('build');