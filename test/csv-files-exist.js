var test = require("tape");
var fs = require("fs");
var dataConfig = require("../config/data");


// check to see if file exists
function fileExists(file, key) {
    fs.exists(file, (exists) => {
        test(`file(s) exist for ${key}`, function (t) {
            t.plan(1);
            t.true(exists, `file ${file} exists`);
        });
    });
}

// make sure correct files exist for computation method
let keys = Object.keys(dataConfig);
keys.forEach(function(key) {
    if (dataConfig[key].type === "sum") {
        fileExists(`metric/r${dataConfig[key].metric}.csv`, key);
    }
    if (dataConfig[key].type === "mean") {
        fileExists(`metric/n${dataConfig[key].metric}.csv`, key);
    }
    if (dataConfig[key].type === "weighted") {
        fileExists(`metric/r${dataConfig[key].metric}.csv`, key);
        fileExists(`metric/d${dataConfig[key].metric}.csv`, key);
    }
});
