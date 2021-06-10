import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: `${path.resolve(__dirname, 'dist')}/`,
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      'components/': `${path.resolve(__dirname, 'src/components')}/`,
      'lib/':        `${path.resolve(__dirname, 'src/lib')}/`,
      'public/':     `${path.resolve(__dirname, 'src/public')}/`,
      'state/':      `${path.resolve(__dirname, 'src/state')}/`,
      'style/':      `${path.resolve(__dirname, 'src/style')}/`,
      'templates/':  `${path.resolve(__dirname, 'src/public/templates')}/`,
    },
  },
});
