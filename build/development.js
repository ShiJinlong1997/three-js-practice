import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.ts', 'three/build/three.module.js'],
  format: 'esm',
  outdir: './js/',
  tsconfig: 'tsconfig.json',
});
