require('esbuild').build({
  entryPoints: ['src/index.ts'],
  outdir: './js.',
  // minify: true,
  bundle: true,
  // tsconfig: 'tsconfig.json',
});
