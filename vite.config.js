import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Set the base to the subdirectory name so assets load from /second/assets/
    base: ''
});
