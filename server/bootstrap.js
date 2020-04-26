require('ignore-styles');

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '41',
          ie: '11',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@loadable/babel-plugin',
    'babel-plugin-styled-components',
    '@babel/plugin-transform-modules-commonjs',
    'transform-es2015-modules-commonjs',
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

require('./index');
