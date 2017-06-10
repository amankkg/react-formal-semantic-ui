import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

const isProd = process.env.NODE_ENV === 'production'

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: isProd ? 'cjs' : 'es',
  plugins: [
    resolve(),
    commonjs(),
    eslint(),
    babel({ exclude: 'node_modules/**' }),
    isProd && uglify(),
  ],
  external: [
    'prop-types',
    'react',
    'react-dom',
    'react-formal',
    'semantic-ui-react',
  ],
  sourceMap: true,
}
