import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/',
    plugins: [vue()],
    
    build: {
        outDir: 'dist',
        assetsDir: '',
        emptyOutDir: true,
        
        rollupOptions: {
            output: {
                assetFileNames: '[name]-[hash][extname]',
                chunkFileNames: '[name]-[hash].js',
                entryFileNames: '[name]-[hash].js'
            }
        }
    }
})