// CONFIG FOR HOME PAGE
// In this file: Solutions, Features, Quotes, Sectors, Examples, Services

import a from "../assets/animations/homepage/service-data.json";
import b from "../assets/animations/homepage/service-rich.json";
import c from "../assets/animations/homepage/service-intg.json";
import d from "../assets/animations/homepage/service-time.json";

// SECTION 01
export const Solutions = [
  {
    title: "Big Data Processing",
    animation: a,
    desc: "Technologies that integrate, process, analyze, and visualize big data for your collective's solution.",
    type: "Powerful",
    comingSoon: true,
  },
  {
    title: "Rich Analytics",
    animation: b,
    desc: "Advanced tools that Braga provides helps to come up with analytics that beneficial to tackle various challanges.",
    type: "Advanced",
    comingSoon: true,
  },
  {
    title: "IoT and AI Integration",
    animation: c,
    desc: "Connect to IoT and AI tools, models, or hardwares for furhterly advanced and integrated problem solving.",
    type: "Dynamic",
    comingSoon: true,
  },
  {
    title: "Access Anywhere, Anytime.",
    animation: d,
    desc: "Not bounded by space and time, we help in multiple platforms, adapting to different conditions and terrains.",
    type: "Global",
    comingSoon: true,
  },
];

// SECTION 02
export const Features = [
  {
    title: "Geo-Data Visualization",
    img: "/images/homepage/features/pict-range.svg",
    desc: "Visualize 2D and 3D data with more than 10 types of data (Ex: CSV, SHP, KML, GeoJSON, dwg, dxf, TiFF, obj, LAS, etc)",
  },
  {
    title: "Spatial Analysis",
    img: "/images/homepage/features/pict-dataviz.svg",
    desc: "Create new insight with more than 50 analytic tools (Ex: buffer, route finder, multi-site analysis, spatial autocorrelation, etc) ",
  },
  {
    title: "Data External and Sensor Integration",
    img: "/images/homepage/features/pict-bootstrap.svg",
    desc: "Integrate data with external database, APIs or IoT sensors.",
  },
];

// SECTION 03
export const Quotes = [
  {
    quote:
      "“The Framework will help countries in building capacity using geospatial technology ... to achieve a digital transformation, and bridge the digital divide”",
    img: "/images/homepage/quotes/anna-wellenstein.png",
    author: "Anna Wellenstein",
    author_title: "Director, Land and Geospatial, World Bank.",
  },
  {
    quote:
      "“Transformasi Digital merupakan solusi tepat dan strategis untuk membawa Indonesia menuju masa depan”",
    img: "/images/homepage/quotes/joko-widodo.png",
    author: "Ir. H. Joko Widodo",
    author_title: "President of Indonesia",
  },
  {
    quote:
      "“Geospatial information is a critical component of a national infrastructure and a blueprint of what happens where, with proven societal and economic value”",
    img: "/images/homepage/quotes/stefan-schweinfest.png",
    author: "Stefan Schweinfest",
    author_title: "UN Department of Economic and Social Affairs",
  },
];

export const Sectors = [
  {
    title: "Oil, Mining, and Gas",
    icon: "/homepage/sector-icons/icon-gas.svg",
    img: "/homepage/sector-imgs/img-gas.png",
    count: 1,
  },
  {
    title: "Retail and Real Estate",
    icon: "/homepage/sector-icons/icon-retail.svg",
    img: "/homepage/sector-imgs/img-retail.png",
    count: 1,
  },
  {
    title: "Agriculture",
    icon: "/homepage/sector-icons/icon-agriculture.svg",
    img: "/homepage/sector-imgs/img-agriculture.png",
    count: 11,
  },
  {
    title: "Logistics and Fleet",
    icon: "/homepage/sector-icons/icon-fleet.svg",
    img: "/homepage/sector-imgs/img-fleet.png",
    count: 4,
  },
  {
    title: "Tourism",
    icon: "/homepage/sector-icons/icon-tourism.svg",
    img: "/homepage/sector-imgs/img-tourism.png",
    count: 5,
  },
  {
    title: "Assets Management",
    icon: "/homepage/sector-icons/icon-assets.svg",
    img: "/homepage/sector-imgs/img-assets.png",
    count: 1,
  },
  {
    title: "Government",
    icon: "/homepage/sector-icons/icon-govt.svg",
    img: "/homepage/sector-imgs/img-govt.png",
    count: 49,
  },
  {
    title: "Bank and Finance",
    icon: "/homepage/sector-icons/icon-bank.svg",
    img: "/homepage/sector-imgs/img-bank.png",
    count: 1,
  },
  {
    title: "Supply Chain",
    icon: "/homepage/sector-icons/icon-supply.svg",
    img: "/homepage/sector-imgs/img-supply.png",
    count: 1,
  },
];

// SECTION 04
export const Examples = [
  {
    title: "Si Pulau BIG, WebGIS Information System",
    img: "/images/homepage/products/thumb-sipulau.png",
    desc: "Technologies that integrate, process, analyze, and visualize big data for your collective's solution.",
    type: "Government",
    link: "https://sipulau.big.go.id/map",
  },
  {
    title: "Event Mapping Information System",
    img: "/images/homepage/products/thumb-event.png",
    desc: "Supporting the Digital Transformation Initiatives of West java, our GeoDashboard is designed to map ongoing events to promote local events with DISPARBUD.",
    type: "Tourism",
    link: "https://smilingevent.jabarprov.go.id/event-map",
  },
  {
    title: "Agriculture Information System",
    img: "/images/homepage/products/thumb-agriculture.png",
    desc: "Imropving the management and presentation of village data in West Java to help in spreading information of land suitability.",
    type: "Agriculture",
    link: "https://dashboard-perkebunan.jabarprov.go.id/map",
  },
  {
    title: "Fleet Management System",
    img: "/images/homepage/products/thumb-fleet.png",
    desc: "Integrated with GeoDashboard, this system helps in managing large number of a nation-wide operations involving multiple forms of fleet and logistic machinery.",
    type: "Asset Management",
    comingSoon: true,
  },
  {
    title: "Crisis Center Reporting Portal",
    img: "/images/homepage/products/thumb-crisis.png",
    desc: "A portal that detects natural and manmade crisis in tourism spot digitally to aid in quick and accurate decision making.",
    type: "Tourism",
    comingSoon: true,
  },
  {
    title: "Vessel Management Monitoring Dashboard",
    img: "/images/homepage/products/thumb-vessel.png",
    desc: "Marine Positioning Integration, Real-time Weather Map, this system is designed to navigate the static and moving assets in the sea.",
    type: "Oil and Gas",
    comingSoon: true,
  },
];

export const Services = [
  {
    title: "Services",
    desc: "Data Collection / Spatial Research and Analysis / Data Accuracy / Crowdsourcing / Spatial Insights Discovery",
  },
  {
    title: "Geospatial Technology",
    desc: "2D and 3D Data Visualization / Big Data Scalability / Multi-Platform Integration / Geographic Information System / Web Map",
  },
  {
    title: "Development",
    desc: "Full-Stack Web & Mobile / Product Cycle Management / Geo-Artificial Intelligence / Geo-IoT Integrations / CMS",
  },
];
