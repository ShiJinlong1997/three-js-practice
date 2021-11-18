import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.ts'],
  format: 'esm',
  outfile: './js/index.js',
  minify: true,
  bundle: true,
  // tsconfig: 'tsconfig.json',
});
