import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css','resources/scss/app.scss',  'resources/js/app.js', 'resources/js/task.js', 'resources/js/example.js'],
            refresh: true,
        }),
    ],
    server: {
        host: true,
        hmr: {
            host: 'localhost',
        },
    },
    build: {
        rollupOptions: {
            output: {
                globals: {
                    jquery: 'window.jQuery',
                }
            }
        }
    },
});
