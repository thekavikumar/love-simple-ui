import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true, // Generate TypeScript declaration files
  external: ['react', 'react-dom'], // Exclude react and react-dom from the bundle
  // splitting: false, // Disable code splitting for simpler output
  clean: true, // Clean the output folder before each build
  // Custom output file names for CJS and ESM
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs.js' : '.esm.js', // Customize the extensions
    };
  },
});
