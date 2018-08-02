# Data Configuration

## data.json

```javascript
{
  // metric identifier "m<the metric number>"
  "m2": {
    // metric number
    "metric": "2",
    // indicates accuracy data is bundled (optional)
    "accuracy": "true",
    // data category grouping
    "category": "Character",
    // number of decimal places to display (default is 0) (optional)
    "decimals": 1,
    // metric unit informaiton (optional)
    "label": "Years",
    // prefix for number display (optional)
    "prefix": "$",
    // [optional] label for raw number if available (also makes raw number visible)
    "raw_label": "units",
    // suffix for number display (optional)
    "suffix": "%",
    // title
    "title": "Age of Residents",
    // type of calculation: sum, mean, or weighted
    "type": "weighted",
    // override total geography value for particular years (optional)
    "world_val": {
      "y_2015": 35
    }
  }
}
```

## map.json

```javascript
{
  // default zoom for embed map
  "zoomEmbed": 9.5,
  // default zoom for dashboard
  "zoom": 9.3,
  // center for embed map
  "centerEmbed": [-80.815, 35.31],
  // center for dashboard
  "center": [-80.84, 35.26],
  // maximum bounds to zoom out to
  "maxBounds": [[-82.641, 34.115], [-79.008, 36.762]],
  // minimum zoom level
  "minZoom": 8,
  // where to stick the selected outline layer
  "neighborhoodsSelectedBefore": "water_label",
  // where to stick the fill layer
  "neighborhoodsBefore": "building"
}
```

## selectgroups.json

Use this to specify subgroups, like towns or political entities, with each group being an array of neighborhood id's. Set `selectGroups` to null if you aren't using this.

## site.json

```javascript
{
  // how to refer to neighborhood units
  "neighborhoodDescriptor": "NPA",
  // description of neighborhood units
  "neighborhoodDefinition":
    "Neighborhood Profile Areas (NPAs) are geographic areas used for the organization and presentation of data in the Quality of Life Study. The boundaries were developed with community input and are based on one or more Census block groups.",
  // google analytics key
  "gaKey": "UA-48797957-1",
  // keywords
  "keywords":
    "GIS,Mecklenburg County,parks,libraries,schools,environment,impervious surface,floodplain,zoning,assessment,tax,photos,government",
  // author
  "author": "Tobin Bradley",
  // site title
  "title": "Quality of Life Explorer",
  // jurisdiction
  "jurisdiction": "Charlotte/Mecklenburg",
  // site description meta
  "description":
    "Exploring neighborhood character, economics, education, engagement, environment, health, housing, safety and transportation.",
  // location of embed/print map, set to null if not using
  "qolembedURL": "https://mcmap.org/qol-embed/",
  // location of report, set to null if not using
  "qolreportURL": "https://mcmap.org/qol-report/",
  // location of dashboard, set to null if not using
  "qoldashboardURL": "https://mcmap.org/qol/",
  // contact form submit location, set to null if not using
  "contactForm": "https://mcmap.org/utilities/feedback.php",
  // who to contact, set to null if not using
  "contacts": "tobin.bradley@gmail.com,qualityoflife@charlottenc.gov",
  // highlight new data, set to empty array [] if not using
  "whatsnew": ["2", "12"],
  // links to go in dashboard footer
  "links": [
    {
      "href": "http://charlottenc.gov/HNS/CE/CommunityInfo/Pages/QOL.aspx",
      "text": "About"
    },
    {
      "href": "downloads/qol-data.zip",
      "text": "Download Data"
    },
    {
      "href": "http://maps.co.mecklenburg.nc.us/openmapping/",
      "text": "Mecklenburg County Open Mapping"
    },
    {
      "href": "http://clt.charlotte.opendata.arcgis.com/",
      "text": "City of Charlotte Open Data Portal"
    }
  ]
}
```
