import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const NODE_ENV = process.env.NODE_ENV === 'production' ? '/smartx' : '';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: `${NODE_ENV}/`,
});
