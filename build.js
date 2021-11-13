require('esbuild').build({
  entryPoints: ['src/index.ts'],
  outfile: './js/index.js',
  // minify: true,
  bundle: true,
  tsconfig: 'tsconfig.json',
});
