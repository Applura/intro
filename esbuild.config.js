const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/render.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  outfile: 'dist/render.js',
  loader: {
    '.js': 'jsx',
    '.pcss': 'empty',
  },
}).catch(() => process.exit(1));
