export default {
  maxBounds: [[-82.641, 34.115], [-79.008, 36.762]],
  defaultgeojson: 'npa.geojson.json',
  geojson: [
    {
      layer: 'tracts.geojson.json',
      name: 'Block Group',
      description: 'US Census block groups.',
      compareGroups: [
        {
          name: 'Mecklenburg'
        }
      ]
    },
    {
      layer: 'npa.geojson.json',
      name: 'NPA',
      description:
        'Neighborhood Profile Areas (NPAs) are geographic areas used for the organization and presentation of data in the Quality of Life Study. The boundaries were developed with community input and are based on one or more Census block groups.',
      compareGroups: [
        {
          name: 'Mecklenburg'
        },
        {
          name: 'Charlotte',
          ids: 'groups/npa-jurisdiction-charlotte.json',
          format: function(data) {
            return data
          }
        }
      ],
      selectGroups: [
        {
          name: 'Charlotte',
          ids: 'groups/npa-jurisdiction-charlotte.json'
        },
        {
          name: 'Cornelius',
          ids: 'groups/npa-jurisdiction-cornelius.json'
        },
        {
          name: 'Davidson',
          ids: 'groups/npa-jurisdiction-davidson.json'
        },
        {
          name: 'Huntersville',
          ids: 'groups/npa-jurisdiction-huntersville.json'
        },
        {
          name: 'Matthews',
          ids: 'groups/npa-jurisdiction-matthews.json'
        },
        {
          name: 'Mint Hill',
          ids: 'groups/npa-jurisdiction-mint-hill.json'
        },
        {
          name: 'Pineville',
          ids: 'groups/npa-jurisdiction-pineville.json'
        },
        {
          name: 'Council District 1',
          ids: 'groups/npa-city-council-1.json'
        },
        {
          name: 'Council District 2',
          ids: 'groups/npa-city-council-2.json'
        },
        {
          name: 'Council District 3',
          ids: 'groups/npa-city-council-3.json'
        },
        {
          name: 'Council District 4',
          ids: 'groups/npa-city-council-4.json'
        },
        {
          name: 'Council District 5',
          ids: 'groups/npa-city-council-5.json'
        },
        {
          name: 'Council District 6',
          ids: 'groups/npa-city-council-6.json'
        },
        {
          name: 'Council District 7',
          ids: 'groups/npa-city-council-7.json'
        },
        {
          name: 'Commision District 1',
          ids: 'groups/npa-county-commission-1.json'
        },
        {
          name: 'Commision District 2',
          ids: 'groups/npa-county-commission-2.json'
        },
        {
          name: 'Commision District 3',
          ids: 'groups/npa-county-commission-3.json'
        },
        {
          name: 'Commision District 4',
          ids: 'groups/npa-county-commission-4.json'
        },
        {
          name: 'Commision District 5',
          ids: 'groups/npa-county-commission-5.json'
        },
        {
          name: 'Commision District 6',
          ids: 'groups/npa-county-commission-6.json'
        }
      ],
      searchPaths: [
        {
          name: 'NSA',
          url:
            'https://mcmap.org/api2/v1/intersect_feature/neighborhood_statistical_areas/neighborhoods?geom_column_from=the_geom&geom_column_to=the_geom&columns=neighborhood_statistical_areas.nsa_name%20as%20label%2C%20neighborhoods.id&filter=nsa_name%20ilike%20',
          searchVal: function(val) {
            return encodeURIComponent(`'${val.trim()}%'`)
          },
          format: function(data) {
            const formatted = []
            const labels = [
              ...new Set(
                data.map(el => {
                  return el.label
                })
              )
            ]

            labels.forEach(label => {
              formatted.push({ label: label, id: [] })
            })

            data.forEach(el => {
              formatted
                .filter(lab => el.label === lab.label)[0]
                .id.push(el.id.toString())
            })

            return formatted
          }
        },
        {
          name: 'zipcode',
          url:
            "https://mcmap.org/api2/v1/intersect_feature/zipcodes/neighborhoods?geom_column_from=the_geom&geom_column_to=the_geom&columns='ZIPCODE%20'%20%7C%7C%20zip%20as%20label%2C%20neighborhoods.id&filter=zip%3D",
          searchVal: function(val) {
            return encodeURIComponent(`'${val.trim()}'`)
          },
          format: function(data) {
            const formatted = []
            const labels = [
              ...new Set(
                data.map(el => {
                  return el.label
                })
              )
            ]

            labels.forEach(label => {
              formatted.push({ label: label, id: [] })
            })

            data.forEach(el => {
              formatted
                .filter(lab => el.label === lab.label)[0]
                .id.push(el.id.toString())
            })

            return formatted
          }
        }
      ]
    }
  ],
  searchPaths: [
    {
      name: 'address',
      url:
        "https://mcmap.org/api2/v1/query/master_address_table?columns=full_address%20as%20label%2C%20ST_X(ST_Transform(the_geom%2C%204326))%20%7C%7C%20'%2C'%20%7C%7C%20ST_Y(ST_Transform(the_geom%2C%204326))%20as%20lnglat&limit=5&filter=cde_status%3D'A'%20and%20num_x_coord%20%3E%200%20and%20ts%20%40%40%20to_tsquery('addressing_en'%2C'",
      searchVal: function(val) {
        return encodeURIComponent(
          val
            .trim()
            .toUpperCase()
            .replace(/ /g, '&') + ":*')"
        )
      }
    }
  ],
  style: 'positron-mecklenburg.json',
  fillLayerBefore: 'building',
  lineLayerBefore: 'place_other',
  colors: {
    default: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'],
    RdPu6: ['#feebe2', '#fcc5c0', '#fa9fb5', '#f768a1', '#c51b8a', '#7a0177'],
    YLGN6: ['#ffffcc', '#d9f0a3', '#addd8e', '#78c679', '#31a354', '#006837'],
    orange: [
      '#feedde',
      '#fdd0a2',
      '#fdae6b',
      '#fd8d3c',
      '#f16913',
      '#d94801',
      '#8c2d04'
    ]
  },
  defaultMetrics: [['27', '100', '2']],
  whatsnew: [
    '28',
    '36',
    '45',
    '46',
    '47',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '74',
    '79',
    '80'
  ]
}
