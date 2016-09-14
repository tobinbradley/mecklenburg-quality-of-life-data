let mapConfig = {
    style: "./style/style.json",
    zoomEmbed: 9.5,
    zoom: 9.3,
    centerEmbed: [-80.815,35.31],
    center: [-80.84, 35.26],
    maxBounds: [[-83.285, 33.180],[-78.255, 37.384]],
    minZoom: 8,
    preserveDrawingBuffer: navigator.userAgent.toLowerCase().indexOf('firefox') > -1  // fix for Firefox print
};

module.exports = mapConfig;
