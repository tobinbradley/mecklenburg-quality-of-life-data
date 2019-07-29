import data from '../data.js'
import options from '../options.js'
const test = require('tape')
const fs = require('fs')
var csv = require('fast-csv')

// check to see if file exists
function fileExists(file, key) {
  fs.exists(file, exists => {
    test(`file exists for ${key}`, function(t) {
      t.plan(1)
      t.true(exists, `file ${file} exists`)
    })
  })
}

// check arrays are equal
function arraysEqual(a, b) {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length != b.length) return false

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

async function readCSV(file) {
  fs.createReadStream(file)
    .pipe(csv.parse({ headers: true }))
    .on('data', row => {
      return data
    })
}

// make sure GeoJSON files specified exist
options.geojson.forEach(g => {
  fileExists(`geojson/${g.layer}`, `${g.layer} GeoJSON`)
})

// yank id's from geojson
let geojsonIds = {}
options.geojson.forEach(g => {
  const geojson = JSON.parse(fs.readFileSync(`geojson/${g.layer}`, 'utf8'))
  let ids = []
  geojson.features.forEach(f => {
    ids.push(f.properties.id)
  })
  geojsonIds[g.layer] = ids.sort((a, b) =>
    a.localeCompare(b, 'en-US', { numeric: true, ignorePunctuation: true })
  )
})

// check csv
function checkCSV(file, geojson) {
  let stream = fs.createReadStream(file)
  let dataids = []
  let keys
  csv
    .fromStream(stream, { headers: true })
    .on('data', function(data) {
      keys = Object.keys(data)
      dataids.push(data.id)
    })
    .on('end', function() {
      // make sure csv and geojson id's are the same
      test(`id check for ${file}`, function(t) {
        t.plan(1)
        t.true(arraysEqual(dataids, geojsonIds[geojson]), 'id matches')
      })
      // make sure csv keys are lower case
      test(`lowercase check for ${file}`, function(t) {
        t.plan(1)
        t.true(keys.join() === keys.join().toLowerCase(), 'keys are lower case')
      })
    })
}

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

  checkCSV(`metric/r${key}.csv`, m.geojson || options.defaultgeojson)

})
