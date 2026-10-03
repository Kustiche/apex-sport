import { defineConfig } from 'vite';
import svgSprite from 'vite-plugin-svg-sprite-generator';

export default defineConfig({
	base: process.env.BASE_PATH || '/',

	plugins: [
		svgSprite({
			input: 'public/img/svg',
			output: 'public/img',
			name: 'sprite.svg',
			mode: 'single',
			clean: true,
			inheritAttrs: true,
		}),
	],
});
