import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import replace from '@rollup/plugin-replace'

export default defineConfig( {
	base: 'elastic-time-input-demo',
	server: {
		port: 9000,
	},
	plugins: [
		reactRefresh(),
		replace( {
			'process.env.NODE_ENV': JSON.stringify( 'development' ),
		} ),
	],
} )
