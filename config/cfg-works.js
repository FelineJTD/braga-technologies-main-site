// CONFIG FOR WORKS PAGE
// In this file: Works

const WorksData = [
  {
    id: "1",
    title: "Smiling Java / Event Portal",
    type: "Braga Enterprise",
    img: "https://www.google.com/maps/d/u/0/thumbnail?mid=1frHExlCasUKm6ymzyyUyuCvrtp0",
    coordinates: "37° 48' 15.7068'' N  122° 16' 15.9996'' W",
    number: "No. 03",
    is_coming_soon: false,
    work_type: "Project",
  },
  {
    id: "2",
    title: "Smiling Java / Event Portal",
    type: "Braga Enterprise",
    img: "https://www.google.com/maps/d/u/0/thumbnail?mid=1frHExlCasUKm6ymzyyUyuCvrtp0",
    coordinates: "37° 48' 15.7068'' N  122° 16' 15.9996'' W",
    number: "No. 03",
    is_coming_soon: true,
    work_type: "Case Study",
  },
]

for (let i = 0; i < 50; i++) {
  WorksData.push({
    id: `${i}`,
    title: "Smiling Java / Event Portal",
    type: "Braga Enterprise",
    img: "https://www.google.com/maps/d/u/0/thumbnail?mid=1frHExlCasUKm6ymzyyUyuCvrtp0",
    coordinates: "37° 48' 15.7068'' N  122° 16' 15.9996'' W",
    number: `No. ${i}`,
    is_coming_soon: false,
    work_type: "Case Study",
  })
}

export { WorksData };