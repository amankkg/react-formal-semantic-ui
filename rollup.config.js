import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

const config = {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  plugins: [
    resolve(),
    commonjs(),
    eslint(),
    babel({ exclude: 'node_modules/**' }),
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
if (process.env.NODE_ENV === 'production') {
  config.format = 'cjs'
  config.plugins.push(uglify())
} else {
  config.format = 'iife'
  config.moduleName = 'main'
}

export default config
