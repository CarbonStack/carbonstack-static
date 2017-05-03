const sass = require('node-sass')
const path = require('path')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const fs = require('fs')
const mkdirp = require('mkdirp')

const sassOutput = sass.renderSync({
  file: path.join(__dirname, '..', 'node_modules/primer-base/index.scss'),
  includePaths: ['node_modules'],
  outputStyle: 'compressed'
})

postcss([autoprefixer]).process(sassOutput.css.toString())
  .then(result => {
    mkdirp.sync(path.join(__dirname, '../build'))
    fs.writeFileSync(path.join(__dirname, '../build/style.css'), result)
    console.log('I\'m done, bitch.')
  })
  .catch(err => {
    console.error(err)
    console.error('Bloody hell, we screwed something...')
  })
