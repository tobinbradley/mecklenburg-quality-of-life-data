var test = require("tape");
var fs = require("fs");
var path = require("path");
var _ = require("lodash");
var csv = require("fast-csv");
var geoJSON = require("../geography.geojson.json");


// natural sort for mixed character and string
function naturalCompare(a, b) {
    var ax = [], bx = [];
    a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
    b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });
    while(ax.length && bx.length) {
        var an = ax.shift();
        var bn = bx.shift();
        var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
        if(nn) return nn;
    }
    return ax.length - bx.length;
}

// geojson id's into sorted array
let geoids = [];
for (let i = 0; i < geoJSON.features.length; i++) {
    geoids.push(geoJSON.features[i].properties.id);
}
geoids.sort(naturalCompare);

// test csv files
fs.readdir('metric', function(err, files) {
    files.forEach(function(file) {
        if (path.extname(file) === '.csv') {
            let stream = fs.createReadStream(`metric/${file}`);

            let dataids = [];
            let keys;
            csv
                .fromStream(stream, {headers : true})
                .on("data", function(data){
                    keys = Object.keys(data);
                    dataids.push(data.id);
                })
                .on("end", function(){
                    // make sure csv and geojson id's are the same
                    test(`id check for ${file}`, function (t) {
                        t.plan(1);
                        t.true(_.isEqual(geoids, dataids), 'id matches');
                    });
                    // make sure csv keys are lower case
                    test(`lowercase check for ${file}`, function (t) {
                        t.plan(1);
                        t.true(keys.join() === keys.join().toLowerCase(), 'keys lower case');
                    });
                });
        }
    });
});
