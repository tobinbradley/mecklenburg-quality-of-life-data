import data from '../data.js'
import options from '../options.js'
const test = require('tape')
const fs = require('fs')
var csv = require('fast-csv')

// check to see if file exists
function fileExists(file, key) {
  fs.exists(file, exists => {
    test(`file(s) exist for ${key}`, function(t) {
      t.plan(1)
      t.true(exists, `file ${file} exists`)
    })
  })
}

// make sure GeoJSON files specified exist
options.geojson.forEach(g => {
  fileExists(`geojson/${g.layer}`, `${g.layer} GeoJSON`)
})

data.forEach(m => {
  const key = m.metric

  // meta file exists
  fileExists(`meta/m${key}.md`, `${key} meta`)

  // data files exist
  fileExists(`metric/r${key}.csv`, `${key} metric`)
  if (m.type === 'weighted')
    fileExists(`metric/d${key}.csv`, `${key} weight file`)
  if (m.accuracy) fileExists(`metric/m${key}-accuracy.csv`, `${key} accuracy`)

  // check if specified color exists
  if (m.colors) {
    test(`specifed colors exist for ${key}`, function(t) {
      t.plan(1)
      t.true(options.colors[m.colors], `specified color exists`)
    })
  }

  // make sure first line of data files capitalized
  // make sure metric id's match geojson id's
  // make sure metric first line lower case
  // make sure metric sorted on id
  // make sure metric id and geojson id matches
})
