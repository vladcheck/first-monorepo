const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    format: 'cjs',
    platform: 'node',
    target: 'node22',
    minify: true,
    bundle: true,
    outdir: './dist'
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
