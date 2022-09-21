// CONFIG FOR HOME PAGE
// In this file: Solutions, Features, Quotes, Sectors, Examples, Services

// SECTION 01
export const Solutions = [
  {
    "title": "Big Data Processing", 
    "animation": require('../assets/animations/homepage/service-data.json'),
    "desc": "Technologies that integrate, process, analyze, and visualize big data for your collective's solution.",
    "type": "Powerful",
    "comingSoon": true,
  }, {
    "title": "Rich Analytics",
    "animation": require('../assets/animations/homepage/service-rich.json'),
    "desc": "Advanced tools that Braga provides helps to come up with analytics that beneficial to tackle various challanges.",
    "type": "Advanced",
    "comingSoon": true,
  }, {
    "title": "IoT and AI Integration",
    "animation": require('../assets/animations/homepage/service-intg.json'),
    "desc": "Connect to IoT and AI tools, models, or hardwares for furhterly advanced and integrated problem solving.",
    "type": "Dynamic",
    "comingSoon": true,
  }, {
    "title": "Access Anywhere, Anytime.",
    "animation": require('../assets/animations/homepage/service-time.json'),
    "desc": "Not bounded by space and time, we help in multiple platforms, adapting to different conditions and terrains.",
    "type": "Global",
    "comingSoon": true,
  }
]

// SECTION 02
export const Features = [
  {
    "title": "Spatial Range Calculation",
    "img": require('../assets/images/homepage/features/pict-range.svg'),
    "desc": "Visualize multiple layers both vector and raster to perform a detailed, precise, and insightful analysis.",
  }, {
    "title": "Multi-Format Data Visualization",
    "img": require('../assets/images/homepage/features/pict-dataviz.svg'),
    "desc": "Easily visualize data in point, polygon and polyline format. Inspect rich data display for each attribute.",
  }, {
    "title": "Bootstrap Approach",
    "img": require('../assets/images/homepage/features/pict-bootstrap.svg'),
    "desc": "Created in no time through bootstrap. Get all the desired features, tailored to your needs.",
  }
]

// SECTION 03
export const Quotes = [
  {
    "quote": "“The Framework will help countries in building capacity using geospatial technology ... to achieve a digital transformation, and bridge the digital divide”",
    "img": require('../assets/images/homepage/quotes/anna-wellenstein.png'),
    "author": "Anna Wellenstein",
    "author_title": "Director, Land and Geospatial, World Bank.",
  }, {
    "quote": "“Transformasi Digital merupakan solusi tepat dan strategis untuk membawa Indonesia menuju masa depan”",
    "img": require('../assets/images/homepage/quotes/joko-widodo.png'),
    "author": "Ir. H. Joko Widodo",
    "author_title": "President of Indonesia",
  }, {
    "quote": "“Geospatial information is a critical component of a national infrastructure and a blueprint of what happens where, with proven societal and economic value”",
    "img": require('../assets/images/homepage/quotes/stefan-schweinfest.png'),
    "author": "Stefan Schweinfest",
    "author_title": "UN Department of Economic and Social Affairs",
  }
]

export const Sectors = [
  {
    title: 'Oil, Mining, and Gas',
    icon: '/homepage/sector-icons/icon-gas.svg',
    img: '/homepage/sector-imgs/img-gas.png',
    count: 1,
  },
  {
    title: 'Retail and Real Estate',
    icon: '/homepage/sector-icons/icon-retail.svg',
    img: '/homepage/sector-imgs/img-retail.png',
    count: 1,
  },
  {
    title: 'Agriculture',
    icon: '/homepage/sector-icons/icon-agriculture.svg',
    img: '/homepage/sector-imgs/img-agriculture.png',
    count: 11,
  },
  {
    title: 'Logistics and Fleet',
    icon: '/homepage/sector-icons/icon-fleet.svg',
    img: '/homepage/sector-imgs/img-fleet.png',
    count: 4,
  },
  {
    title: 'Tourism',
    icon: '/homepage/sector-icons/icon-tourism.svg',
    img: '/homepage/sector-imgs/img-tourism.png',
    count: 5,
  },
  {
    title: 'Assets Management',
    icon: '/homepage/sector-icons/icon-assets.svg',
    img: '/homepage/sector-imgs/img-assets.png',
    count: 1,
  },
  {
    title: 'Government',
    icon: '/homepage/sector-icons/icon-govt.svg',
    img: '/homepage/sector-imgs/img-govt.png',
    count: 49,
  },
  {
    title: 'Bank and Finance',
    icon: '/homepage/sector-icons/icon-bank.svg',
    img: '/homepage/sector-imgs/img-bank.png',
    count: 1,
  },
  {
    title: 'Supply Chain',
    icon: '/homepage/sector-icons/icon-supply.svg',
    img: '/homepage/sector-imgs/img-supply.png',
    count: 1,
  },
]

// SECTION 04
export const Examples = [
  {
    "title": "Si-Pulau", 
    "img": require('../assets/images/homepage/products/thumb-sipulau.png'),
    "desc": "Technologies that integrate, process, analyze, and visualize big data for your collective's solution.",
    "type": "GeoDashboard",
    "link": "https://sipulau.big.go.id/map",
  }, {
    "title": "Fleet Management System",
    "img": require('../assets/images/homepage/products/thumb-fleet.png'),
    "desc": "Technologies that integrate, process, analyze, and visualize big data for your collective's solution.",
    "type": "Enterprise",
    "comingSoon": true,
  }, {
    "title": "Visitor Monitoring",
    "img": require('../assets/images/homepage/products/thumb-visitor.png'),
    "desc": "Technologies that integrate, process, analyze, and visualize big data for your collective's solution.",
    "type": "Braga-AI",
    "comingSoon": true,
  }, {
    "title": "West Java Tourism",
    "img": require('../assets/images/homepage/products/thumb-tourism.png'),
    "desc": "Technologies that integrate, process, analyze, and visualize big data for your collective's solution..",
    "type": "GeoDashboard",
    "link": "https://smilingevent.jabarprov.go.id/event-map",
  }
]

export const Services = [
  {
    "title": "Geospatial",
    "desc": "Data Collection / Spatial Research and Analysis / Data Accuracy / Crowdsourcing / Spatial Insights Discovery",
  }, {
    "title": "Geospatial + Technology",
    "desc": "2D and 3D Data Visualization / Big Data Scalability / Multi-Platform Integration / Geographic Information System / Web Map",
  }, {
    "title": "Technology",
    "desc": "Full-Stack Web & Mobile / Product Cycle Management / Geo-Artificial Intelligence / Geo-IoT Integrations / CMS",
  }
]