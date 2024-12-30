import { defineConfig } from 'tsup';
import postcss from 'esbuild-plugin-postcss';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  plugins: [
    postcss(), // Add PostCSS plugin
  ],
});
