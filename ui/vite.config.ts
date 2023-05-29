import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
    build: {
        outDir: '../dist'
    },
    plugins: [
        react({
            include: '**/*.{jsx,tsx}',
        }),
    ],
    resolve: {
        alias: {
          src: path.resolve(__dirname, 'src'),
        }
      },
})