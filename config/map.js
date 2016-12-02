// __________________________________
//  Map Configuration               |
// ----------------------------------
//        \   ^__^
//         \  (oo)\_______
//            (__)\       )\/\
//                ||----w |
//                ||     ||
//
//
// style        gl style json, could be your tiles or mapbox or whatever. I'd recommend
//              using the great osm-liberty style from https://github.com/lukasmartinelli/osm-liberty,
//              which is included. Just change style to "./style/osm-liberty.json"
//
//
// zoomEmbed    default zoom level for embed map
// zoom         default zoom level for dashboard map
// centerEmbed  center coordinates for embed map
// center       center coordinates for dashboard map
// maxBounds    max bounds so your users don't go zipping around the planet. format LL, UR
// minZoom      minimum zoom level
// preserveDrawingBuffer    this is to make sure Firefox can print the map
// neighborhoodsSelectedBefore      the layer id in your map style to drop the selected line before, usually the first labels
// neighborhoodsBefore      the layer in your map style to drop the polygon fills before, usually buildings


let mapConfig = {
    style: "./style/osm-mecklenburg.json",
    zoomEmbed: 9.5,
    zoom: 9.3,
    centerEmbed: [-80.815,35.31],
    center: [-80.84, 35.26],
    maxBounds: [[-83.285, 33.180],[-78.255, 37.384]],
    minZoom: 8,
    preserveDrawingBuffer: navigator.userAgent.toLowerCase().indexOf('firefox') > -1,  // fix for Firefox print
    neighborhoodsSelectedBefore: 'water_label',
    neighborhoodsBefore: 'building'
};

module.exports = mapConfig;
