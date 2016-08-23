let mapConfig = {
    style: "./style/style.json",
    zoom: 9.5,
    center: [-80.815,35.31],
    maxBounds: [[-78.255, 37.384],[-83.285, 33.180]],
    minZoom: 8,
    preserveDrawingBuffer: navigator.userAgent.toLowerCase().indexOf('firefox') > -1  // fix for Firefox print
};

module.exports = mapConfig;
