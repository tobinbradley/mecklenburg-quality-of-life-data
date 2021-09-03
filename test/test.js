const test = require("ava");
const fs = require("fs");
const readline = require("readline");
const dataConfig = require("../config/data");
const geoJSON = require("../geography.geojson.json");

// geojson id's into sorted array
let geoids = [];
for (let i = 0; i < geoJSON.features.length; i++) {
  geoids.push(geoJSON.features[i].properties.id);
}
geoids.sort((a, b) =>
  a.localeCompare(b, "en", { numeric: true, ignorePunctuation: true })
);

// test if array is fully equal
function arraysEqual(a, b) {
  a = Array.isArray(a) ? a : [];
  b = Array.isArray(b) ? b : [];
  return a.length === b.length && a.every((el, ix) => el === b[ix]);
}

// test if array has same contents
function arraysContainSame(a, b) {
  a = Array.isArray(a) ? a : [];
  b = Array.isArray(b) ? b : [];
  return a.length === b.length && a.every((el) => b.includes(el));
}

// make sure correct files exist for computation method
let keys = Object.keys(dataConfig);
keys.forEach(async function(key) {
  if (dataConfig[key].type === "sum") {
    test(`file(s) exist for r${key}`, (t) => {
      t.true(
        fs.existsSync(`metric/r${dataConfig[key].metric}.csv`),
        `file ${key} exists`
      );
    });

    // test file id's and headers
    checkFileContents(`metric/r${dataConfig[key].metric}.csv`);
  }
  if (dataConfig[key].type === "mean") {
    test(`file(s) exist for n${key}`, (t) => {
      t.true(
        fs.existsSync(`metric/n${dataConfig[key].metric}.csv`),
        `file ${key} exists`
      );
    });

    // test file id's and headers
    checkFileContents(`metric/n${dataConfig[key].metric}.csv`);
  }
  if (dataConfig[key].type === "weighted") {
    // test if files exist
    test(`file(s) exist for r${key}`, (t) => {
      t.true(
        fs.existsSync(`metric/r${dataConfig[key].metric}.csv`),
        `file ${key} exists`
      );
    });
    test(`file(s) exist for d${key}`, (t) => {
      t.true(
        fs.existsSync(`metric/d${dataConfig[key].metric}.csv`),
        `file ${key} exists`
      );
    });

    // test file id's and headers
    checkFileContents(`metric/d${dataConfig[key].metric}.csv`);
    checkFileContents(`metric/r${dataConfig[key].metric}.csv`);

  }
  // check for accuracy files
  if (dataConfig[key].accuracy) {
    test(`accuracy file exists for m${key}`, (t) => {
      t.true(
        fs.existsSync(`metric/${key}-accuracy.csv`),
        `file ${key} exists`
      );
    });
    checkFileContents(`metric/${key}-accuracy.csv`);
  }
});

function checkFileContents(file) {
  const fileContents = fs.readFileSync(file).toString()
  const lines = fileContents.split(/\r?\n/)

  let ids = []

  lines.forEach((line, idx) => {
    if (idx === 0) {
      test(`lowercase ${file} ${idx} headers`, async (t) => {
        t.true(line === line.toLowerCase(), "keys lower case");
      });

      line.split(",").forEach((l, index) => {
        if (index === 0) {
          test(`${file} col ${index} id header check`, t => {
            t.true(l.replace(/^\uFEFF/gm, "").replace(/^\u00BB\u00BF/gm,"") === "id")
          })
        }
        if (index > 0) {
          test(`${file} col ${index} y_ header check`, t => {
            t.true(l.substring(0,2) === "y_")
          })
        }
      })

    } else {
      if (line.split(",")[0].length > 0)
        ids.push(line.split(",")[0]);
    }
  })

  // test id's
  test(`id check for ${file}`, async (t) => {
    t.true(arraysEqual(geoids, ids), "id matches");
  });

}
