module.exports = [
  {
    metric: '100',
    tags: ['Character', 'pac man'],
    label: 'People',
    title: 'Population Projection',
    type: 'sum',
    geojson: 'tracts.geojson.json',
    colors: 'orange'
  },
  {
    metric: '2',
    accuracy: 'true',
    tags: ['Character'],
    label: 'Years',
    title: 'Age of Residents',
    type: 'weighted',
    world_val: {
      y_2015: 35
    },
    subtitle: 'Median age of residents'
  },
  {
    metric: '1',
    tags: ['Character'],
    label: 'Acres',
    title: 'Area',
    type: 'sum',
    subtitle: 'Total land area'
  },
  {
    metric: '13',
    accuracy: 'true',
    tags: ['Character'],
    suffix: '%',
    title: 'Population - Older Adult',
    type: 'weighted',
    subtitle: 'Percentage of the population age 65 and over'
  },
  {
    metric: '12',
    accuracy: 'true',
    tags: ['Character'],
    suffix: '%',
    title: 'Population - Youth',
    type: 'weighted',
    subtitle: 'Percentage of the population under the age of 18'
  },
  {
    metric: '47',
    tags: ['Character'],
    label: 'People per Acre',
    raw_label: 'People',
    title: 'Population Density',
    type: 'weighted',
    subtitle: 'Concentration of residents',
    colors: 'YLGN6',
    comparables: [
      {
        name: 'Philadelphia (2018)',
        val: '5'
      }
    ]
  },
  {
    metric: '17',
    tags: ['Character'],
    suffix: '%',
    title: 'Race/Ethnicity - All Other Races',
    decimals: 1,
    type: 'weighted',
    accuracy: 'true',
    subtitle:
      'Percentage of population self-identified as American Indian, Native Hawaiian, some other race, or two or more races'
  },
  {
    metric: '16',
    tags: ['Character'],
    suffix: '%',
    title: 'Race/Ethnicity - Asian',
    decimals: 1,
    type: 'weighted',
    accuracy: 'true',
    subtitle: 'Percentage of population self-identified as Asian'
  },
  {
    metric: '15',
    tags: ['Character'],
    suffix: '%',
    title: 'Race/Ethnicity - Black or African American',
    decimals: 1,
    type: 'weighted',
    accuracy: 'true',
    subtitle:
      'Percentage of population self-identified as Black or African-American'
  },
  {
    metric: '18',
    tags: ['Character'],
    suffix: '%',
    title: 'Race/Ethnicity - Hispanic or Latino',
    decimals: 1,
    type: 'weighted',
    accuracy: 'true',
    subtitle: 'Percentage of population self-identified as Hispanic or Latino'
  },
  {
    metric: '14',
    tags: ['Character'],
    suffix: '%',
    title: 'Race/Ethnicity - White or Caucasian',
    decimals: 1,
    type: 'weighted',
    accuracy: 'true',
    subtitle: 'Percentage of population self-identified as White or Caucasian'
  },
  {
    metric: '11',
    tags: ['Character'],
    suffix: '%',
    raw_label: 'Acres',
    title: 'Vacant Land',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Percentage of land area that is classified as vacant'
  },
  {
    metric: '42',
    tags: ['Economy'],
    label: 'Years',
    title: 'Commercial Building Age',
    type: 'weighted',
    subtitle: 'Average age of commercial buildings'
  },
  {
    metric: '19',
    tags: ['Economy'],
    label: 'Permits per 100 Acres',
    raw_label: 'Permits',
    title: 'Commercial Construction',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Concentration of commercial building permits'
  },
  {
    metric: '41',
    tags: ['Economy'],
    label: 'Average Square Feet',
    raw_label: 'Square Feet',
    title: 'Commercial Space',
    type: 'weighted',
    subtitle: 'Average square footage of commercial space per parcel'
  },
  {
    metric: '38',
    accuracy: 'true',
    tags: ['Economy'],
    suffix: '%',
    title: 'Employment',
    type: 'weighted',
    subtitle: 'Percentage of adults in the labor force who are employed'
  },
  {
    metric: '80',
    tags: ['Economy'],
    suffix: '%',
    title: 'Food and Nutrition Services',
    type: 'weighted',
    subtitle:
      'Percentage of the population who receive Food and Nutrition Services (FNS)'
  },
  {
    metric: '37',
    accuracy: 'true',
    tags: ['Economy'],
    prefix: '$',
    title: 'Household Income',
    type: 'weighted',
    world_val: {
      y_2016: 59268
    },
    subtitle: 'Median household income'
  },
  {
    metric: '75',
    tags: ['Economy'],
    label: 'Jobs per Acre',
    raw_label: 'Jobs',
    title: 'Job Density',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Concentration of jobs'
  },
  {
    metric: '71',
    tags: ['Environment'],
    suffix: '%',
    raw_label: 'Miles',
    title: 'Adopt-a-Street Participation',
    type: 'weighted',
    subtitle: 'Percentage of eligible streets adopted for clean-up'
  },
  {
    metric: '79',
    tags: ['Economy'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Proximity to Financial Services',
    type: 'weighted',
    subtitle:
      'Percentage of housing units within &#189;-mile of a bank or credit union'
  },
  {
    metric: '20',
    accuracy: 'true',
    tags: ['Education'],
    suffix: '%',
    title: "Education Level - Bachelor's Degree",
    type: 'weighted',
    subtitle:
      "Percentage of adults over age 25 with a Bachelor's degree or higher"
  },
  {
    metric: '39',
    accuracy: 'true',
    tags: ['Education'],
    suffix: '%',
    title: 'Education Level - High School Diploma',
    type: 'weighted',
    subtitle:
      'Percentage of adults over age 25 with a high school diploma or equivalent'
  },
  {
    metric: '65',
    tags: ['Education'],
    suffix: '%',
    title: 'High School Graduation Rate',
    type: 'weighted',
    subtitle:
      'Percentage of Charlotte-Mecklenburg Schools (CMS) students graduating high school in 4 years',
    world_val: {
      y_2014: '86.00',
      y_2013: '81.00',
      y_2017: '89.00',
      y_2015: '89.00',
      y_2016: '90.00'
    }
  },
  {
    metric: '51',
    tags: ['Education'],
    suffix: '%',
    title: 'Library Card Holders',
    type: 'weighted',
    subtitle: 'Percentage of population with an active library card'
  },
  {
    metric: '67',
    tags: ['Education'],
    suffix: '%',
    title: 'Neighborhood School Attendance ',
    type: 'weighted',
    subtitle:
      'Percentage of Charlotte-Mecklenburg Schools (CMS) students attending their home school'
  },
  {
    metric: '21',
    tags: ['Education'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Proximity to Early Care and Education',
    type: 'weighted',
    subtitle:
      'Percentage of housing units within &#189;-mile of a licensed early care and education program for children birth to age 5'
  },
  {
    metric: '22',
    tags: ['Education'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Proximity to School-Age Care',
    type: 'weighted',
    subtitle:
      'Percentage of housing units within &#189;-mile of a licensed school-age program for children ages 5-12'
  },
  {
    metric: '66',
    tags: ['Education'],
    suffix: '%',
    title: 'Student Absenteeism',
    type: 'weighted',
    subtitle:
      'Percentage of Charlotte-Mecklenburg Schools (CMS) students absent 10 percent or more of school days'
  },
  {
    metric: '62',
    tags: ['Education'],
    suffix: '%',
    title: 'Test Proficiency - Elementary School',
    decimals: 1,
    type: 'weighted',
    subtitle:
      'Percentage of Charlotte-Mecklenburg Schools (CMS) students in grades 3-5 proficient in End of Grade testing'
  },
  {
    metric: '64',
    tags: ['Education'],
    suffix: '%',
    title: 'Test Proficiency - High School',
    decimals: 1,
    type: 'weighted',
    subtitle:
      'Percentage of Charlotte-Mecklenburg Schools (CMS) students in grades 9-12 proficient in End-of-Course testing'
  },
  {
    metric: '63',
    tags: ['Education'],
    suffix: '%',
    title: 'Test Proficiency - middle School',
    decimals: 1,
    type: 'weighted',
    subtitle:
      'Percentage of Charlotte-Mecklenburg Schools (CMS) students in grades 6-8 proficient in End of Grade testing'
  },
  {
    metric: '52',
    tags: ['Engagement'],
    label: 'Calls per 100 People',
    raw_label: 'Calls',
    title: '311 Requests',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Concentration of 311 requests from residents'
  },
  {
    metric: '50',
    tags: ['Engagement'],
    suffix: '%',
    raw_label: 'Households',
    title: 'Arts and Culture Participation',
    type: 'weighted',
    subtitle:
      'Percentage of households that participate in ASC-sponsored arts or cultural activities'
  },
  {
    metric: '72',
    tags: ['Engagement'],
    label: 'Residents serving per 1,000 People',
    raw_label: 'People',
    title: 'Municipal Board/Committee Participation',
    type: 'weighted',
    subtitle:
      'Number of residents that serve on appointed public boards, committees and commissions per 1,000 residents'
  },
  {
    metric: '73',
    tags: ['Engagement'],
    label: 'Organizations',
    title: 'Neighborhood Organizations',
    type: 'sum',
    subtitle:
      'Number of neighborhood organizations registered with the Charlotte-Mecklenburg Planning Department'
  },
  {
    metric: '48',
    tags: ['Engagement'],
    suffix: '%',
    raw_label: 'People',
    title: 'Voter Participation',
    decimals: 1,
    type: 'weighted',
    subtitle:
      'Percentage of registered voters that voted in the general election'
  },
  {
    metric: '43',
    tags: ['Environment'],
    suffix: '%',
    raw_label: 'Miles',
    title: 'Adopt-a-Stream Participation',
    type: 'weighted',
    subtitle: 'Percentage of eligible streams adopted for clean-up'
  },
  {
    metric: '10',
    accuracy: 'true',
    tags: ['Environment'],
    suffix: '%',
    title: 'Commuters Driving Alone',
    raw_label: '',
    type: 'weighted',
    subtitle: 'Percentage of workers who commute by driving alone'
  },
  {
    metric: '26',
    tags: ['Environment'],
    label: 'Kilowatt hours per month per unit',
    raw_label: 'Kilowatt hours per month',
    title: 'Energy Consumption - Electricity',
    type: 'weighted',
    subtitle: 'Average monthly household electricity consumption'
  },
  {
    metric: '77',
    tags: ['Environment'],
    label: 'Therms per month per unit',
    raw_label: 'Therms per month',
    title: 'Energy Consumption - Natural Gas',
    type: 'weighted',
    subtitle: 'Average monthly household natural gas consumption'
  },
  {
    metric: '4',
    tags: ['Environment'],
    suffix: '%',
    raw_label: 'Acres',
    title: 'Impervious Surface',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Percentage of land area that is impervious'
  },
  {
    metric: '23',
    tags: ['Environment'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Residential Recycling',
    decimals: 1,
    type: 'weighted',
    subtitle:
      'Percentage of eligible households that participate in municipal curbside recycling'
  },
  {
    metric: '24',
    tags: ['Environment'],
    label: 'Pounds per Day per unit',
    raw_label: 'Pounds per Day',
    title: 'Residential Solid Waste',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Average daily waste generation per household'
  },
  {
    metric: '25',
    tags: ['Environment'],
    suffix: '%',
    raw_label: 'Tons',
    title: 'Residential Solid Waste Diversion',
    decimals: 1,
    type: 'weighted',
    subtitle:
      'Percentage of residential solid waste diverted from landfills through recycling and yard waste processing'
  },
  {
    metric: '3',
    tags: ['Environment'],
    suffix: '%',
    raw_label: 'Acres',
    title: 'Tree Canopy',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Percentage of land area covered by tree canopy'
  },
  {
    metric: '49',
    tags: ['Environment'],
    suffix: '%',
    raw_label: 'Acres',
    title: 'Tree Canopy - Residential',
    type: 'weighted',
    subtitle: 'Percentage of residential land area covered by tree canopy'
  },
  {
    metric: '27',
    tags: ['Environment'],
    label: 'Gallons per Day per unit',
    raw_label: 'Gallons per Day',
    title: 'Water Consumption',
    type: 'weighted',
    subtitle: 'Average daily water consumption for single-family housing units'
  },
  {
    metric: '57',
    tags: ['Health'],
    label: 'Years',
    title: 'Age of Death',
    type: 'weighted',
    subtitle: 'Average age of death'
  },
  {
    metric: '54',
    tags: ['Health'],
    suffix: '%',
    title: 'Births to Adolescents',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Percentage of births to females under 19'
  },
  {
    metric: '55',
    tags: ['Health'],
    suffix: '%',
    title: 'Low Birthweight',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Percentage of births where birth weight was less than 5lb 8oz'
  },
  {
    metric: '56',
    tags: ['Health'],
    suffix: '%',
    title: 'Prenatal Care',
    decimals: 1,
    type: 'weighted',
    subtitle:
      'Percentage of births where mother received adequate pre-natal care'
  },
  {
    metric: '46',
    tags: ['Health'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Proximity to a Pharmacy',
    type: 'weighted',
    subtitle: 'Percentage of housing units within &#189;-mile of a pharmacy'
  },
  {
    metric: '28',
    tags: ['Health'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Proximity to Low-Cost Health Care',
    type: 'weighted',
    subtitle:
      'Percentage of housing units within &#189;-mile of a Medicaid provider or free clinic'
  },
  {
    metric: '74',
    tags: ['Health'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Proximity to Public Outdoor Recreation',
    type: 'weighted',
    subtitle:
      'Percentage of housing units within &#189;-mile of an outdoor public recreation area'
  },
  {
    metric: '45',
    tags: ['Health'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Proximity to a Grocery Store',
    type: 'weighted',
    subtitle:
      'Percentage of housing units within &#189;-mile of a full-service, chain grocery store'
  },
  {
    metric: '81',
    tags: ['Health'],
    suffix: '%',
    title: 'Public Health Insurance',
    type: 'weighted',
    subtitle:
      'Percentage of the population who receive Medicaid or N.C. Health Choice'
  },
  {
    metric: '29',
    accuracy: 'true',
    tags: ['Housing'],
    suffix: '%',
    title: 'Home Ownership',
    type: 'weighted',
    subtitle: 'Percentage of housing units that are owner-occupied'
  },
  {
    metric: '76',
    tags: ['Housing'],
    prefix: '$',
    title: 'Home Sales Price',
    type: 'weighted',
    subtitle: 'Average sales price of homes'
  },
  {
    metric: '7',
    tags: ['Housing'],
    label: 'Years',
    title: 'Housing Age',
    type: 'weighted',
    subtitle: 'Average age of single-family housing units'
  },
  {
    metric: '82',
    tags: ['Housing'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Housing Assistance – Development-Based',
    type: 'weighted',
    subtitle:
      'Percentage of housing units with development-based rental assistance'
  },
  {
    metric: '68',
    tags: ['Housing'],
    label: 'Violations per 100 Units',
    title: 'Housing Code Violations',
    type: 'weighted',
    raw_label: 'Violations',
    subtitle: 'Housing-related code violations per 100 units'
  },
  {
    metric: '5',
    tags: ['Housing'],
    label: 'Units per Acre',
    raw_label: 'Units',
    title: 'Housing Density',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Concentration of housing units'
  },
  {
    metric: '6',
    tags: ['Housing'],
    label: 'Average Sqft',
    title: 'Housing Size',
    type: 'weighted',
    subtitle: 'Average heated living space of single-family housing units'
  },
  {
    metric: '40',
    accuracy: 'true',
    tags: ['Housing'],
    prefix: '$',
    title: 'Rental Costs',
    type: 'weighted',
    world_val: {
      y_2016: 977
    },
    subtitle: 'Median gross rent of renter-occupied housing units'
  },
  {
    metric: '53',
    tags: ['Housing'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Rental Houses',
    type: 'weighted',
    subtitle: 'Percentage of detached single-family dwellings that are rentals'
  },
  {
    metric: '83',
    tags: ['Housing'],
    label: 'Demos per 1,000 units',
    raw_label: 'demolitions',
    title: 'Residential Demolitions',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Concentration of residential demolitions'
  },
  {
    metric: '69',
    tags: ['Housing'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Residential Foreclosures',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Percentage of dwellings that were foreclosed'
  },
  {
    metric: '8',
    tags: ['Housing'],
    label: 'Units per 100 Acres',
    raw_label: 'Units',
    title: 'Residential New Construction',
    decimals: 1,
    type: 'weighted',
    subtitle:
      'Concentration of residential units permitted for new construction'
  },
  {
    metric: '31',
    accuracy: 'true',
    tags: ['Housing'],
    suffix: '%',
    title: 'Residential Occupancy',
    type: 'weighted',
    subtitle: 'Percentage of housing units that are occupied'
  },
  {
    metric: '9',
    tags: ['Housing'],
    label: 'Units per 100 Acres',
    raw_label: 'Units',
    title: 'Residential Renovation',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Concentration of residential units permitted for renovation'
  },
  {
    metric: '30',
    tags: ['Housing'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Single-Family Housing',
    type: 'weighted',
    subtitle: 'Percentage of housing units that are single-family houses'
  },
  {
    metric: '61',
    tags: ['Safety'],
    label: 'Calls per 1,000 People',
    raw_label: 'Calls',
    title: 'Calls for Animal Care and Control',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Animal control calls per 1,000 residents'
  },
  {
    metric: '59',
    tags: ['Safety'],
    label: 'Crimes per 1,000 People',
    raw_label: 'Crimes',
    title: 'Crime - Property',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Property crime rate per 1,000 residents'
  },
  {
    metric: '58',
    tags: ['Safety'],
    label: 'Crimes per 1,000 People',
    raw_label: 'Crimes',
    title: 'Crime - Violent',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Violent crime rate per 1,000 residents'
  },
  {
    metric: '60',
    tags: ['Safety'],
    label: 'Calls per 1,000 People',
    raw_label: 'Calls',
    title: 'Disorder-related Calls',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Disorder-related calls per 1,000 residents'
  },
  {
    metric: '78',
    tags: ['Safety'],
    label: 'Calls per 1,000 People',
    raw_label: 'Calls',
    title: 'Fire Calls for Service',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Fire calls for service per 1,000 residents'
  },
  {
    metric: '32',
    tags: ['Safety'],
    label: 'Violations per 100 Units',
    raw_label: 'Violations',
    title: 'Nuisance Violations',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Nuisance violations per 100 housing units'
  },
  {
    metric: '34',
    tags: ['Transportation'],
    label: 'Index Value (1-3)',
    title: 'Bicycle Friendliness',
    decimals: 1,
    type: 'weighted',
    subtitle:
      "Index measuring the transportation network's ability to comfortably support cycling"
  },
  {
    metric: '33',
    accuracy: 'true',
    tags: ['Transportation'],
    suffix: '%',
    title: 'Long Commute',
    type: 'weighted',
    subtitle:
      'Percentage of auto commuters traveling 20 minutes or more to work'
  },
  {
    metric: '36',
    tags: ['Transportation'],
    suffix: '%',
    raw_label: 'Units',
    title: 'Proximity to Public Transportation',
    type: 'weighted',
    subtitle: 'Percentage of housing units within &#189;-mile of a transit stop'
  },
  {
    metric: '70',
    tags: ['Transportation'],
    suffix: '%',
    raw_label: 'Miles',
    title: 'Sidewalk Availability',
    decimals: 1,
    type: 'weighted',
    subtitle: 'Percentage of paved streets that have sidewalks'
  },
  {
    metric: '35',
    tags: ['Transportation'],
    label: 'Index Value (1-3)',
    title: 'Street Connectivity',
    decimals: 2,
    type: 'weighted',
    subtitle: 'Index measuring the connectedness of the street network'
  },
  {
    metric: '44',
    tags: ['Transportation'],
    label: 'Boardings per stop',
    raw_label: 'Weekly boardings',
    title: 'Transit Ridership',
    type: 'weighted',
    subtitle: 'Average weekly bus and train boardings per stop'
  }
]
