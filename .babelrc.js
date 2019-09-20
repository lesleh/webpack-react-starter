module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import'
  ],
  presets: [
    [
      '@babel/env',
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ],
    '@babel/react'
  ]
}
