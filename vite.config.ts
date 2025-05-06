import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';


export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), cssInjectedByJsPlugin()]
});
