// __________________________________
//  Site Configuration              |
// ----------------------------------
//        \   ^__^
//         \  (oo)\_______
//            (__)\       )\/\
//                ||----w |
//                ||     ||
//
//  Pretty self-explanatory, except for these:
//
//  qolembedURL     if you have a qol embed install, put the location here, otherwise set to null
//  qolreportURL    if you have a qol report install, put the location here, otherwise set to null
//  qoldashboardURL     if you have a qol dashboard install, put the location here, otherwise set to null
//  contactForm     location of your contact form if you have one for the dashboard, otherwise null
                    // POST arguments to the contact page will be:
                    //     email : sender email,
                    //     url: the current window location,
                    //     agent: users's browser info,
                    //     subject: "Whatever",
                    //     to: email address(s) to send the feedback to,
                    //     message: "I hate your website or whatever"
//  whatsnew        an array of recently updated metric id's to put in a what's new box, like ["2", "12"].
//                  set to null if you've got none
//  contacts "tobin.bradley@gmail.com,qualityoflife@charlottenc.gov",
//

let siteConfig = {
    "neighborhoodDescriptor": "NPA",
    "neighborhoodDefinition": "Neighborhood Profile Areas (NPAs) are geographic areas used for the organization and presentation of data in the Quality of Life Study. The boundaries were developed with community input and are based on one or more Census block groups.",
    "gaKey": "UA-48797957-1",
    "keywords": "GIS,Mecklenburg County,parks,libraries,schools,environment,impervious surface,floodplain,zoning,assessment,tax,photos,government",
    "author": "Tobin Bradley",
    "title": "Quality of Life Explorer",
    "description": "Exploring neighborhood character, economics, education, engagement, environment, health, housing, safety and transportation.",
    "qolembedURL": "https://mcmap.org/qol-embed/",
    "qolreportURL": "https://mcmap.org/qol-report/",
    "qoldashboardURL": "https://mcmap.org/qol/",
    "contactForm": "https://mcmap.org/utilities/feedback.php",
    "contacts": "tobin.bradley@gmail.com,qualityoflife@charlottenc.gov",
    "whatsnew": ["2", "12"],
    "links": [
        {
            "href": "http://qol.charmeck.org/",
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
};

module.exports = siteConfig;
