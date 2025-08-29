import { resolve } from 'path';
import { defineConfig } from 'vite'

export default defineConfig({ 
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist'),
    },
    // plugins: [handlebars({
    //     partialDirectory: resolve(__dirname, 'src/partials'),
    //     context: {
    //         userName: 'John John'
    //     }
    // })],  
    server: {  
        port: 3001,  
        open: true,
        watch: {
            usePolling: true
        }
    },
    preview: {
        port: 3000,
    },
    // resolve: {  
    //     alias: {  
    //         '@': '/ src',  
    //     },  
    // },  
});  
