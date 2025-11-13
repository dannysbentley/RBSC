// Pick Sml / Mid / Lrg based on viewport * devicePixelRatio
function pickImg(baseName) {
  const dpr = window.devicePixelRatio || 1;
  const width = (window.innerWidth || 1200) * dpr;
  const size = width <= 900 ? 'Sml' : (width <= 1600 ? 'Mid' : 'Lrg');
  return `assets/images/${baseName}_${size}_v1.jpg`;
}

window.SCENES = {
  diningArea: {
    group: 'Dining Area',
    title: 'Dining Area',
    url: pickImg('Dining-Area'),
    floorplan: {
      // Position the floor plan pin using percentages of the image width / height.
      x: 25,
      y: 50
    },
    hotspots: []
  },
  committeeBox: {
    group: 'Committee Box',
    title: 'Committee Box',
    url: pickImg('Committee-box'),
    floorplan: {
      // Position the floor plan pin using percentages of the image width / height.
      x: 58,
      y: 55
    },
    hotspots: []
  },
  stewardsBox: {
    group: 'Stewards Box',
    title: 'Stewards Box',
    url: pickImg('Stewards-Box'),
    floorplan: {
      // Position the floor plan pin using percentages of the image width / height.
      x: 40,
      y: 45
    },
    hotspots: []
  },
  vipBox: {
    group: 'VIP Box',
    title: 'VIP Box',
    url: pickImg('VIP-Box'),
    floorplan: {
      // Position the floor plan pin using percentages of the image width / height.
      x: 71,
      y: 45
    },
    hotspots: []
  }
};
