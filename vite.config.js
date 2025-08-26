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
        port: 3000,  
        open: true,  
    },  
    // resolve: {  
    //     alias: {  
    //         '@': '/ src',  
    //     },  
    // },  
});  
