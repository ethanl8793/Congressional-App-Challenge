const itemCatalog = new Map();
const sofas = new Map();
const shelvings = new Map();
const diningSet = new Map();
const floorLamp = new Map();
const armchairs = new Map();
const storage = new Map();
const tableLamp = new Map();
const cabinet = new Map();
const beds = new Map();
const chandeliers = new Map();
const ceilingsLamp = new Map();
const storageChair = new Map();
const daybeds = new Map();

itemCatalog.set('sofa', sofas);
itemCatalog.set('shelving', shelvings);
itemCatalog.set('armchairs', armchairs);
itemCatalog.set('floorlamps', floorLamp);
itemCatalog.set('diningSet', diningSet);
itemCatalog.set('storage', storage)
itemCatalog.set('tableLamp', tableLamp)
itemCatalog.set('beds', beds)
itemCatalog.set('cabinet',cabinet)
itemCatalog.set('chandelier', chandeliers)
itemCatalog.set('ceilingsLamp', ceilingsLamp)
itemCatalog.set('storageChairs', storageChair)
itemCatalog.set('daybeds', daybeds)


sofas.set("KIVICK-4Seat",{ 
  name: 'KIVIK Sectional, 4-seat with chaise',
  category: 'sofa',
  width: 125.25,  
  height: 32.625,
  measurements: `Max. width : 125 1/4 in
    Height : 32 5/8 in
    Min. depth : 37 3/8 in
    Max. depth : 64 1/8 in
    Min. seat depth : 23 5/8 in
    Max. seat depth : 48 7/8 in
    Seat height : 17 3/4 in`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tresund-light-beige__1577809_pe1033546_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-tresund-light-beige-s79494391/',
  price: 1399,
  styleTags: ['modern','cozy'],
  defaultVariant: 'lightBeige',
  variants: [
    { variantId: 'lightBeige', label: 'light beige', hex: '#EFECE6', price: 1399.00, imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tresund-light-beige__1577809_pe1033546_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-tresund-light-beige-s79494391/',},
    { variantId: 'gray', label: 'Gray', hex: '#808080', price: 1249.00, imageUrl: 'https://www.ikea.com/us/en/images/p/725ff90252f60f2c/kivik-sectional-4-seat-with-chaise-tibbleby-beige-gray/PE1033078.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-tibbleby-beige-gray-s89440581/#content' },
    { variantId: 'grayTurqoise', label: 'Kelinge gray-turquoise', hex: '#496F72', price: 1299.00, imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-kelinge-gray-turquoise__1577295_pe1033070_s5.jpg?f=m', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-kelinge-gray-turquoise-s49443063/#content'},
    { variantId: 'beige', label: 'Gunnared Beige', hex: '#F5F5DC', price: 1399.00, imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-gunnared-beige__1577099_pe1032938_s5.jpg?f=m', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-gunnared-beige-s59499714/#content' },
    { variantId: 'blue', label: 'Gunnared blue', hex: '#3E5266', price: 1399.00, imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-gunnared-blue__1577102_pe1032941_s5.jpg?f=m', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-gunnared-blue-s29499715/#content' },
    { variantId: 'pink', label: 'Gunnared light brown-pink', hex: '#C27E79', price: 1399.00, imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-gunnared-light-brown-pink__1577106_pe1032942_s5.jpg?f=m', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-gunnared-light-brown-pink-s09499716/#content' },
    { variantId: 'green', label: 'Gunnared light green', hex: '#A4B39B', price: 1399.00, imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-gunnared-light-green__0823290_pe775769_s5.jpg?f=m', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-gunnared-light-green-s89499717/#content' },
    { variantId: 'mediumGray', label: 'Gunnared medium gray', hex: '#6E7275', price: 1399.00, imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-gunnared-medium-gray__1577119_pe1032954_s5.jpg?f=m', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-gunnared-medium-gray-s69499718/#content' },
    { variantId: 'black', label: 'Tresund anthracite', hex: '#383E42', price: 1399.00, imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tresund-anthracite__1577810_pe1033545_s5.jpg?f=m', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-tresund-anthracite-s69494382/#content' },
    { variantId: 'darkGreen', label: 'Tallmyra dark green', hex: '#1b3228', price: 1499.00, imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tallmyra-dark-green__1577103_pe1032945_s5.jpg?f=m', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-tallmyra-dark-green-s09499721/#content' },
    { variantId: 'white', label: 'Tallmyra white', hex: '#F5F5F0', price: 1499.00, imageUrl: 'https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tallmyra-white-black__0823308_pe775782_s5.jpg?f=m', productUrl: 'https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-tallmyra-white-black-s49499724/#content' }
  ]
})
sofas.set('STOCKHOLM-2025-Sofa', {
  name: 'STOCKHOLM 2025 Sofa',
  category: 'sofa',
  width: 91.75,
  depth: 40.5,
  height: null,
  measurements: `Armrest height : 26 3/4
    Armrest width : 3 1/2
    Depth : 40 1/2
    Height under furniture : 6 1/4
    Backrest height : 26 3/4
    Height including back cushions : 33 1/8
    Seat depth : 27 1/8
    Seat height : 16 1/2
    Seat width : 84 5/8
    Width : 91 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/stockholm-2025-sofa-sundhamn-beige__1577934_pe1033680_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/stockholm-2025-sofa-sundhamn-beige-00586096/#content',
  price: 1999,
  styleTags: [], // fill in by hand
  defaultVariant: 'sundhamnBeige',
  variants: [
    { variantId: 'sundhamnBeige', label: 'Sundhamn beige', hex: '#ece5d3', price: 1999, imageUrl: 'https://www.ikea.com/us/en/images/products/stockholm-2025-sofa-sundhamn-beige__1577934_pe1033680_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/stockholm-2025-sofa-sundhamn-beige-00586096/#content' },
  ],
})

sofas.set('HYLTARP-Sofa', {
  name: 'HYLTARP Sofa',
  category: 'sofa',
  width: 91.375,
  depth: 36.625,
  height: null,
  measurements: `Armrest height : 24 3/4
    Armrest width : 4 3/8
    Depth : 36 5/8
    Height under furniture : 5 1/2
    Backrest height : 32 1/4
    Height including back cushions : 35 7/8
    Seat depth : 23 5/8
    Seat height : 18 7/8
    Width : 91 3/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-gransel-natural__1577698_pe1033445_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/hyltarp-sofa-gransel-natural-s69489639/#content',
  price: 1249,
  styleTags: [], // fill in by hand
  defaultVariant: 'granselNatural',
  variants: [
    { variantId: 'granselNatural', label: 'Gransel natural', hex: '#d6d4ca', price: 1249, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-gransel-natural__1577698_pe1033445_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-sofa-gransel-natural-s69489639/#content' },
    { variantId: 'hallarpWhite', label: 'Hallarp white', hex: '#e4e6db', price: 1199, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-hallarp-white__1577691_pe1033441_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-sofa-hallarp-white-s39489645/#content' },
    { variantId: 'granselGray', label: 'Gransel gray', hex: '#4c5153', price: 1249, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-gransel-gray__1577693_pe1033440_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-sofa-gransel-gray-s89514930/#content' },
    { variantId: 'granselGrayBrown', label: 'Gransel gray-brown', hex: '#595046', price: 1249, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-gransel-gray-brown__1577699_pe1033446_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-sofa-gransel-gray-brown-s99489633/#content' },
    { variantId: 'hemmestaGrayGreen', label: 'Hemmesta gray-green', hex: '#6a796e', price: 1299, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-hemmesta-gray-green__1577694_pe1033438_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-sofa-hemmesta-gray-green-s79514935/#content' },
    { variantId: 'hemmestaLightBeige', label: 'Hemmesta light beige', hex: '#b1a994', price: 1299, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-hemmesta-light-beige__1577692_pe1033439_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-sofa-hemmesta-light-beige-s59514941/#content' },
    { variantId: 'tallmyraBlue', label: 'Tallmyra blue', hex: '#2c4859', price: 1299, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-tallmyra-blue__1577690_pe1033437_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-sofa-tallmyra-blue-s49514946/#content' },
    { variantId: 'tallmyraDarkGreen', label: 'Tallmyra dark green', hex: '#17251c', price: 1299, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-tallmyra-dark-green__1577689_pe1033436_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-sofa-tallmyra-dark-green-s29514952/#content' },
    { variantId: 'tallmyraWhiteBlack', label: 'Tallmyra white/black', hex: '#b0b0ac', price: 1299, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-tallmyra-white-black__1577688_pe1033432_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-sofa-tallmyra-white-black-s19514957/#content' },
  ],
})

sofas.set('MORABO-Sofa', {
  name: 'MORABO Sofa',
  category: 'sofa',
  width: 81.125,
  depth: 36.25,
  height: 31.875,
  measurements: `Width : 81 1/8
    Depth : 36 1/4
    Height : 31 7/8
    Height under furniture : 6 1/4
    Armrest width : 5 1/8
    Seat width : 70 7/8
    Seat depth : 24
    Seat height : 18 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-sofa-grann-bomstad-golden-brown-wood__1576948_pe1032847_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/morabo-sofa-grann-bomstad-golden-brown-wood-s29317758/#content',
  price: 1349,
  styleTags: [], // fill in by hand
  defaultVariant: 'grannBomstadGoldenBrownWood',
  variants: [
    { variantId: 'grannBomstadGoldenBrownWood', label: 'Grann/Bomstad golden brown/wood', hex: '#ae724c', price: 1349, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-sofa-grann-bomstad-golden-brown-wood__1576948_pe1032847_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-sofa-grann-bomstad-golden-brown-wood-s29317758/#content' },
    { variantId: 'grannBomstadGrayGreenWood', label: 'Grann/Bomstad gray-green/wood', hex: '#565650', price: null, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-sofa-grann-bomstad-gray-green-wood__0608996_pe684247_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-sofa-grann-bomstad-gray-green-wood-s89317859/#content' }, // CHECK: price not found
    { variantId: 'grannBomstadBlackWood', label: 'Grann/Bomstad black/wood', hex: '#303032', price: 1349, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-sofa-grann-bomstad-black-wood__1576906_pe1032803_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-sofa-grann-bomstad-black-wood-s69316672/#content' },
    { variantId: 'grannBomstadGoldenBrownMetal', label: 'Grann/Bomstad golden brown/metal', hex: '#af744d', price: 1349, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-sofa-grann-bomstad-golden-brown-metal__1576952_pe1032843_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-sofa-grann-bomstad-golden-brown-metal-s49317757/#content' },
  ],
})

sofas.set('MORABO-Sofa', {
  name: 'MORABO Sofa',
  category: 'sofa',
  width: 81.125,
  depth: 36.25,
  height: 31.875,
  measurements: `Width : 81 1/8
    Depth : 36 1/4
    Height : 31 7/8
    Height under furniture : 6 1/4
    Armrest width : 5 1/8
    Seat width : 70 7/8
    Seat depth : 24
    Seat height : 18 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-wood__1576917_pe1032814_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/morabo-sofa-gunnared-light-green-wood-s09318339/#content',
  price: 799,
  styleTags: [], // fill in by hand
  defaultVariant: 'gunnaredLightGreenWood',
  variants: [
    { variantId: 'gunnaredLightGreenWood', label: 'Gunnared light green/wood', hex: '#b1b5a9', price: 799, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-wood__1576917_pe1032814_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-sofa-gunnared-light-green-wood-s09318339/#content' },
    { variantId: 'gunnaredDarkGrayWood', label: 'Gunnared dark gray/wood', hex: '#515153', price: 799, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-wood__1576951_pe1032842_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-sofa-gunnared-dark-gray-wood-s89318321/#content' },
    { variantId: 'gunnaredLightGreenMetal', label: 'Gunnared light green/metal', hex: '#919589', price: 799, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-metal__1576918_pe1032815_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-sofa-gunnared-light-green-metal-s29318338/#content' },
  ],
})

sofas.set('LILLESATER-Sofa', {
  name: 'LILLESÄTER Sofa',
  category: 'sofa',
  width: 79.125,
  depth: 35.375,
  height: 27.125,
  measurements: `Armrest height : 20 1/8
    Armrest width : 6 1/4
    Depth : 35 3/8
    Height under furniture : 3/4
    Height : 27 1/8
    Seat depth : 25 5/8
    Seat height : 17 3/8
    Seat width : 65 3/8
    Width : 79 1/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/lillesaeter-sofa-axvall-off-white__1576111_pe1032230_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/lillesaeter-sofa-axvall-off-white-40619085/#content',
  price: 999,
  styleTags: [], // fill in by hand
  defaultVariant: 'axvallOffWhite',
  variants: [
    { variantId: 'axvallOffWhite', label: 'Axvall off-white', hex: '#c5c6b8', price: 999, imageUrl: 'https://www.ikea.com/us/en/images/products/lillesaeter-sofa-axvall-off-white__1576111_pe1032230_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/lillesaeter-sofa-axvall-off-white-40619085/#content' },
    { variantId: 'gunnaredBrightGreenYellow', label: 'Gunnared bright green-yellow', hex: '#c7b56d', price: 999, imageUrl: 'https://www.ikea.com/us/en/images/products/lillesaeter-sofa-gunnared-bright-green-yellow__1576112_pe1032231_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/lillesaeter-sofa-gunnared-bright-green-yellow-20618497/#content' },
  ],
})

sofas.set('MANNARP-3-seat-sofa', {
  name: 'MANNARP 3-seat sofa',
  category: 'sofa',
  width: 78,
  depth: 37.375,
  height: null,
  measurements: `Armrest height : 25 5/8
    Armrest width : 3 7/8
    Depth : 37 3/8
    Height under furniture : 6 1/4
    Backrest height : 29 7/8
    Height including back cushions : 37 3/4
    Seat depth : 19 5/8
    Seat height : 17 3/4
    Seat width : 70 1/8
    Width : 78`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/mannarp-3-seat-sofa-gunnared-beige__1578225_pe1033883_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/mannarp-3-seat-sofa-gunnared-beige-s39604037/#content',
  price: 449,
  styleTags: [], // fill in by hand
  defaultVariant: 'gunnaredBeige',
  variants: [
    { variantId: 'gunnaredBeige', label: 'Gunnared beige', hex: '#cac9b8', price: 449, imageUrl: 'https://www.ikea.com/us/en/images/products/mannarp-3-seat-sofa-gunnared-beige__1578225_pe1033883_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/mannarp-3-seat-sofa-gunnared-beige-s39604037/#content' },
    { variantId: 'saxemaraBlackBlue', label: 'Saxemara black-blue', hex: '#2b2c30', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/mannarp-3-seat-sofa-saxemara-black-blue__1578232_pe1033894_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/mannarp-3-seat-sofa-saxemara-black-blue-s39604042/#content' },
    { variantId: 'saxemaraGrayBeige', label: 'Saxemara gray-beige', hex: '#b7a68b', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/mannarp-3-seat-sofa-saxemara-gray-beige__1578233_pe1033901_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/mannarp-3-seat-sofa-saxemara-gray-beige-s89604049/#content' },
    { variantId: 'gunnaredBeige4', label: 'Gunnared beige', hex: '#d6d5c8', price: 449, imageUrl: 'https://www.ikea.com/us/en/images/products/mannarp-3-seat-sofa-gunnared-beige__1578532_pe1034171_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/mannarp-3-seat-sofa-gunnared-beige-s89619159/#content' },
  ],
})

sofas.set('SODERHAMN-Sofa', {
  name: 'SÖDERHAMN Sofa',
  category: 'sofa',
  width: 78,
  depth: 39,
  height: null,
  measurements: `Height including back cushions : 32 5/8
    Backrest height : 27 1/8
    Width : 78
    Depth : 39
    Height under furniture : 5 1/2
    Armrest width : 2 3/8
    Seat width : 73 1/4
    Seat depth : 18 7/8
    Seat height : 15 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/soederhamn-sofa-fridtuna-light-beige__1577391_pe1033154_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/soederhamn-sofa-fridtuna-light-beige-s09449694/#content',
  price: 919,
  styleTags: [], // fill in by hand
  defaultVariant: 'fridtunaLightBeige',
  variants: [
    { variantId: 'fridtunaLightBeige', label: 'Fridtuna light beige', hex: '#d6d2c9', price: 919, imageUrl: 'https://www.ikea.com/us/en/images/products/soederhamn-sofa-fridtuna-light-beige__1577391_pe1033154_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/soederhamn-sofa-fridtuna-light-beige-s09449694/#content' },
    { variantId: 'tonerudGray', label: 'Tonerud gray', hex: '#908f8f', price: 819, imageUrl: 'https://www.ikea.com/us/en/images/products/soederhamn-sofa-tonerud-gray__1057838_pe849017_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/soederhamn-sofa-tonerud-gray-s19452105/#content' },
    { variantId: 'fridtunaDarkGray', label: 'Fridtuna dark gray', hex: '#313334', price: 895, imageUrl: 'https://www.ikea.com/us/en/images/products/soederhamn-sofa-fridtuna-dark-gray__1057767_pe848961_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/soederhamn-sofa-fridtuna-dark-gray-s49449625/#content' },
    { variantId: 'viarpBeigeBrown', label: 'Viarp beige/brown', hex: '#b4b2ab', price: 969, imageUrl: 'https://www.ikea.com/us/en/images/products/soederhamn-sofa-viarp-beige-brown__1577083_pe1032920_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/soederhamn-sofa-viarp-beige-brown-s59305706/#content' },
    { variantId: 'tallmyraLightGreen', label: 'Tallmyra light green', hex: '#66796f', price: 1019, imageUrl: 'https://www.ikea.com/us/en/images/products/soederhamn-sofa-tallmyra-light-green__0780881_pe760274_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/soederhamn-sofa-tallmyra-light-green-s39499847/#content' },
  ],
})

sofas.set('GULLVALLA-Loveseat', {
  name: 'GULLVALLA Loveseat',
  category: 'sofa',
  width: 55.875,
  depth: 32.625,
  height: null,
  measurements: `Armrest height : 16 1/8
    Armrest width : 31 1/8
    Depth : 32 5/8
    Height under furniture : 5 7/8
    Backrest height : 27 1/2
    Height including back cushions : 30 3/4
    Seat depth : 18 7/8
    Seat height : 16 1/2
    Seat width : 47 1/4
    Width : 55 7/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/gullvalla-loveseat-silkeryd-dark-gray-beige__1578446_pe1034089_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/gullvalla-loveseat-silkeryd-dark-gray-beige-00618506/#content',
  price: 399,
  styleTags: [], // fill in by hand
  defaultVariant: 'silkerydDarkGrayBeige',
  variants: [
    { variantId: 'silkerydDarkGrayBeige', label: 'Silkeryd dark gray-beige', hex: '#968a77', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/gullvalla-loveseat-silkeryd-dark-gray-beige__1578446_pe1034089_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/gullvalla-loveseat-silkeryd-dark-gray-beige-00618506/#content' },
    { variantId: 'silkerydGrayGreen', label: 'Silkeryd gray-green', hex: '#576552', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/gullvalla-loveseat-silkeryd-gray-green__1576773_pe1032703_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/gullvalla-loveseat-silkeryd-gray-green-40618509/#content' },
  ],
})

sofas.set('HYLTARP-Loveseat', {
  name: 'HYLTARP Loveseat',
  category: 'sofa',
  width: 71.625,
  depth: 36.625,
  height: null,
  measurements: `Armrest height : 24 3/4
    Armrest width : 4 3/8
    Depth : 36 5/8
    Height under furniture : 5 1/2
    Backrest height : 32 1/4
    Height including back cushions : 35 7/8
    Seat depth : 23 5/8
    Seat height : 18 7/8
    Width : 71 5/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-loveseat-gransel-natural__1577684_pe1033431_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/hyltarp-loveseat-gransel-natural-s69489615/#content',
  price: 1149,
  styleTags: [], // fill in by hand
  defaultVariant: 'granselNatural',
  variants: [
    { variantId: 'granselNatural', label: 'Gransel natural', hex: '#d5d2c8', price: 1149, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-loveseat-gransel-natural__1577684_pe1033431_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-loveseat-gransel-natural-s69489615/#content' },
    { variantId: 'hallarpWhite', label: 'Hallarp white', hex: '#e5e7dc', price: 1099, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-loveseat-hallarp-white__1577677_pe1033424_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-loveseat-hallarp-white-s49489621/#content' },
    { variantId: 'granselGray', label: 'Gransel gray', hex: '#4d5355', price: 1149, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-loveseat-gransel-gray__1577686_pe1033433_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-loveseat-gransel-gray-s99514897/#content' },
    { variantId: 'hemmestaGrayGreen', label: 'Hemmesta gray-green', hex: '#69786e', price: 1199, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-loveseat-hemmesta-gray-green__1577685_pe1033435_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-loveseat-hemmesta-gray-green-s79514902/#content' },
    { variantId: 'hemmestaLightBeige', label: 'Hemmesta light beige', hex: '#b2aa95', price: 1199, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-loveseat-hemmesta-light-beige__1577679_pe1033429_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-loveseat-hemmesta-light-beige-s49514908/#content' },
    { variantId: 'tallmyraBlue', label: 'Tallmyra blue', hex: '#3a5868', price: 1199, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-loveseat-tallmyra-blue__1577682_pe1033426_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-loveseat-tallmyra-blue-s49514913/#content' },
    { variantId: 'tallmyraDarkGreen', label: 'Tallmyra dark green', hex: '#27352c', price: 1199, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-loveseat-tallmyra-dark-green__1577687_pe1033434_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-loveseat-tallmyra-dark-green-s19514919/#content' },
    { variantId: 'tallmyraWhiteBlack', label: 'Tallmyra white/black', hex: '#92928e', price: 1199, imageUrl: 'https://www.ikea.com/us/en/images/products/hyltarp-loveseat-tallmyra-white-black__1193794_pe901622_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hyltarp-loveseat-tallmyra-white-black-s89514925/#content' },
  ],
})

sofas.set('MORABO-Loveseat', {
  name: 'MORABO Loveseat',
  category: 'sofa',
  width: 65.375,
  depth: 36.25,
  height: 31.875,
  measurements: `Width : 65 3/8
    Depth : 36 1/4
    Height : 31 7/8
    Height under furniture : 6 1/4
    Armrest width : 5 1/8
    Seat width : 55 1/8
    Seat depth : 24
    Seat height : 18 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-loveseat-grann-bomstad-golden-brown-wood__1576943_pe1032840_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/morabo-loveseat-grann-bomstad-golden-brown-wood-s69317756/#content',
  price: 1249,
  styleTags: [], // fill in by hand
  defaultVariant: 'grannBomstadGoldenBrownWood',
  variants: [
    { variantId: 'grannBomstadGoldenBrownWood', label: 'Grann/Bomstad golden brown/wood', hex: '#af724c', price: 1249, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-loveseat-grann-bomstad-golden-brown-wood__1576943_pe1032840_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-loveseat-grann-bomstad-golden-brown-wood-s69317756/#content' },
    { variantId: 'grannBomstadGrayGreenWood', label: 'Grann/Bomstad gray-green/wood', hex: '#6f6e69', price: null, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-loveseat-grann-bomstad-gray-green-wood__0608992_pe684243_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-loveseat-grann-bomstad-gray-green-wood-s29317857/#content' }, // CHECK: price not found
    { variantId: 'grannBomstadBlackWood', label: 'Grann/Bomstad black/wood', hex: '#2f2e32', price: 1249, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-loveseat-grann-bomstad-black-wood__1576902_pe1032800_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-loveseat-grann-bomstad-black-wood-s89316633/#content' },
    { variantId: 'grannBomstadGoldenBrownMetal', label: 'Grann/Bomstad golden brown/metal', hex: '#af724c', price: 1249, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-loveseat-grann-bomstad-golden-brown-metal__1576939_pe1032836_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-loveseat-grann-bomstad-golden-brown-metal-s89317755/#content' },
  ],
})

sofas.set('APPLARYD-Loveseat', {
  name: 'ÄPPLARYD Loveseat',
  category: 'sofa',
  width: 78.375,
  depth: 36.625,
  height: null,
  measurements: `Armrest height : 28 3/8
    Armrest width : 6 3/4
    Depth : 36 5/8
    Height under furniture : 7 7/8
    Backrest height : 27 1/2
    Height including back cushions : 32 1/4
    Seat depth : 24
    Seat height : 18 1/2
    Width : 78 3/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/aepplaryd-loveseat-lejde-light-gray__1577353_pe1033134_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/aepplaryd-loveseat-lejde-light-gray-50506224/#content',
  price: 1099,
  styleTags: [], // fill in by hand
  defaultVariant: 'lejdeLightGray',
  variants: [
    { variantId: 'lejdeLightGray', label: 'Lejde light gray', hex: '#b2b0aa', price: 1099, imageUrl: 'https://www.ikea.com/us/en/images/products/aepplaryd-loveseat-lejde-light-gray__1577353_pe1033134_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/aepplaryd-loveseat-lejde-light-gray-50506224/#content' },
    { variantId: 'djuparpRedBrown', label: 'Djuparp red-brown', hex: '#501818', price: null, imageUrl: 'https://www.ikea.com/us/en/images/products/aepplaryd-loveseat-djuparp-red-brown__0992861_pe820288_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/aepplaryd-loveseat-djuparp-red-brown-60504286/#content' }, // CHECK: price not found
    { variantId: 'gunnaredBlackGray', label: 'Gunnared black/gray', hex: '#2c2e2e', price: 1099, imageUrl: 'https://www.ikea.com/us/en/images/products/aepplaryd-loveseat-gunnared-black-gray__1577864_pe1033610_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/aepplaryd-loveseat-gunnared-black-gray-80575065/#content' },
    { variantId: 'gunnaredLightBlue', label: 'Gunnared light blue', hex: '#6e8a94', price: 1099, imageUrl: 'https://www.ikea.com/us/en/images/products/aepplaryd-loveseat-gunnared-light-blue__1577862_pe1033608_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/aepplaryd-loveseat-gunnared-light-blue-40575072/#content' },
    { variantId: 'lejdeGrayBlack', label: 'Lejde gray/black', hex: '#6f6f70', price: 1099, imageUrl: 'https://www.ikea.com/us/en/images/products/aepplaryd-loveseat-lejde-gray-black__1577349_pe1033130_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/aepplaryd-loveseat-lejde-gray-black-80506232/#content' },
  ],
})

sofas.set('SKONABACK-Sleeper-sofa', {
  name: 'SKÖNABÄCK Sleeper sofa',
  category: 'sofa',
  width: 62.25,
  depth: 29.5,
  height: null,
  measurements: `Armrest height : 26
    Bed length : 74 3/4
    Armrest width : 5 7/8
    Bed width : 28
    Bed height : 15 3/8
    Depth : 29 1/2
    Height under furniture : 1 5/8
    Backrest height : 26
    Height including back cushions : 29 1/8
    Seat depth : 20 1/8
    Seat height : 15 3/8
    Seat width : 50 3/8
    Width : 62 1/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/skoenabaeck-sleeper-sofa-knisa-dark-gray__1360572_pe954478_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/skoenabaeck-sleeper-sofa-knisa-dark-gray-50582543/#content',
  price: 499,
  styleTags: [], // fill in by hand
  defaultVariant: 'knisaDarkGray',
  variants: [
    { variantId: 'knisaDarkGray', label: 'Knisa dark gray', hex: '#333333', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/skoenabaeck-sleeper-sofa-knisa-dark-gray__1360572_pe954478_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/skoenabaeck-sleeper-sofa-knisa-dark-gray-50582543/#content' },
    { variantId: 'vissleYellowGreen', label: 'Vissle yellow-green', hex: '#6e674a', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/skoenabaeck-sleeper-sofa-vissle-yellow-green__1360562_pe954483_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/skoenabaeck-sleeper-sofa-vissle-yellow-green-80582546/#content' },
  ],
})

diningSet.set('NORDVIKEN-NORDVIKEN-Table-and-4-chairs', {
  name: 'NORDVIKEN / NORDVIKEN Table and 4 chairs',
  category: 'chair',
  width: 37.375,
  depth: null,
  height: null,
  measurements: `Min. length : 59 7/8
    Max. length : 87 3/4
    Width : 37 3/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/nordviken-nordviken-table-and-4-chairs-black-black__0747569_pe744589_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/nordviken-nordviken-table-and-4-chairs-black-black-s59305155/#content',
  price: null,
  styleTags: [], // fill in by hand
  defaultVariant: 'blackBlack59788734x3738',
  variants: [
    { variantId: 'blackBlack59788734x3738', label: 'black/black, 59 7/8/87 3/4x37 3/8 "', hex: '#2e2e2e', price: null, imageUrl: 'https://www.ikea.com/us/en/images/products/nordviken-nordviken-table-and-4-chairs-black-black__0747569_pe744589_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/nordviken-nordviken-table-and-4-chairs-black-black-s59305155/#content' }, // CHECK: price not found
  ],
})

armchairs.set('STRANDTORP-MARENAS-Table-and-6-armchairs-59-80-3-4-102-3-8', {
  name: 'STRANDTORP / MÅRENÄS Table and 6 armchairs, 59/80 3/4/102 3/8 "',
  category: 'armchair',
  width: 37.375,
  depth: 80.75,
  height: 29.5,
  measurements: `Length : 80 3/4
    Table min. length : 59
    Table max. length : 102 3/8
    Width : 37 3/8
    Height : 29 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/strandtorp-marenaes-table-and-6-armchairs-brown-black-gunnared-beige__1198507_pe904114_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/strandtorp-marenaes-table-and-6-armchairs-brown-black-gunnared-beige-s19518823/#content',
  price: 1909.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'brownBlackGunnaredBeige',
  variants: [
    { variantId: 'brownBlackGunnaredBeige', label: 'brown/black Gunnared beige', hex: '#bbb3a6', price: 1909.99, imageUrl: 'https://www.ikea.com/us/en/images/products/strandtorp-marenaes-table-and-6-armchairs-brown-black-gunnared-beige__1198507_pe904114_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strandtorp-marenaes-table-and-6-armchairs-brown-black-gunnared-beige-s19518823/#content' },
    { variantId: 'brownBlackGunnaredDarkGrey', label: 'brown/black Gunnared dark grey', hex: '#4a484a', price: 1909.99, imageUrl: 'https://www.ikea.com/us/en/images/products/strandtorp-marenaes-table-and-6-armchairs-brown-black-gunnared-dark-grey__1198509_pe904116_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strandtorp-marenaes-table-and-6-armchairs-brown-black-gunnared-dark-grey-s29518832/#content' },
  ],
})

shelvings.set('KALLAX-Shelving-unit-57-5-8x30-1-8', {
  name: 'KALLAX Shelving unit, 57 5/8x30 1/8 "',
  category: 'shelving',
  width: 57.625,
  depth: 15.375,
  height: 30.125,
  measurements: `Width : 57 5/8
    Depth : 15 3/8
    Height : 30 1/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/kallax-shelving-unit-with-2-doors-with-4-drawers-white__0754627_pe747994_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/kallax-shelving-unit-with-2-doors-with-4-drawers-white-s39614376/#content',
  price: 169.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'with2DoorsWith4DrawersWhite',
  variants: [
    { variantId: 'with2DoorsWith4DrawersWhite', label: 'with 2 doors/with 4 drawers white', hex: '#d0d1cc', price: 169.99, imageUrl: 'https://www.ikea.com/us/en/images/products/kallax-shelving-unit-with-2-doors-with-4-drawers-white__0754627_pe747994_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/kallax-shelving-unit-with-2-doors-with-4-drawers-white-s39614376/#content' },
    { variantId: 'with2DoorsWith4DrawersWaveShapedWhite', label: 'with 2 doors with 4 drawers/wave shaped white', hex: '#d4d5d0', price: 169.99, imageUrl: 'https://www.ikea.com/us/en/images/products/kallax-shelving-unit-with-2-doors-with-4-drawers-wave-shaped-white__1245949_pe921877_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/kallax-shelving-unit-with-2-doors-with-4-drawers-wave-shaped-white-s39614357/#content' },
    { variantId: 'with2Doors4DrawersWhiteLightGrayBlueWaveShaped', label: 'with 2 doors/4 drawers white/light gray-blue wave shaped', hex: '#d8d9d5', price: 169.99, imageUrl: 'https://www.ikea.com/us/en/images/products/kallax-shelving-unit-with-2-doors-4-drawers-white-light-gray-blue-wave-shaped__1388960_pe965012_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/kallax-shelving-unit-with-2-doors-4-drawers-white-light-gray-blue-wave-shaped-s29614353/#content' },
    { variantId: 'with2Doors4DrawersWhiteStainedOakEffect', label: 'with 2 doors/4 drawers/white stained oak effect', hex: '#dac5ad', price: 169.99, imageUrl: 'https://www.ikea.com/us/en/images/products/kallax-shelving-unit-with-2-doors-4-drawers-white-stained-oak-effect__0480295_pe618865_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/kallax-shelving-unit-with-2-doors-4-drawers-white-stained-oak-effect-s29619218/#content' },
    { variantId: 'with2DoorsWith4DrawersBlackBrown', label: 'with 2 doors/with 4 drawers black-brown', hex: '#31302d', price: 169.99, imageUrl: 'https://www.ikea.com/us/en/images/products/kallax-shelving-unit-with-2-doors-with-4-drawers-black-brown__0754623_pe747987_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/kallax-shelving-unit-with-2-doors-with-4-drawers-black-brown-s59614375/#content' },
  ],
})

floorLamp.set('SIMRISHAMN-Floor-lamp', {
  name: 'SIMRISHAMN Floor lamp',
  category: 'floor',
  width: null,
  depth: null,
  height: 62,
  measurements: `Height : 62
    Base diameter : 12`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/simrishamn-floor-lamp-chrome-plated-opal-glass__0789445_pe763989_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/simrishamn-floor-lamp-chrome-plated-opal-glass-50437773/#content',
  price: 199.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'chromePlatedOpalGlass',
  variants: [
    { variantId: 'chromePlatedOpalGlass', label: 'chrome plated/opal glass', hex: '#cccccc', price: 199.99, imageUrl: 'https://www.ikea.com/us/en/images/products/simrishamn-floor-lamp-chrome-plated-opal-glass__0789445_pe763989_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/simrishamn-floor-lamp-chrome-plated-opal-glass-50437773/#content' }, // CHECK: hex unknown, pick one
  ],
})

floorLamp.set('OKENSAND-Floor-lamp', {
  name: 'ÖKENSAND Floor lamp',
  category: 'floor',
  width: null,
  depth: null,
  height: 61,
  measurements: `Height : 61
    Base diameter : 19
    Shade diameter : 14`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/oekensand-floor-lamp-beech-white__1187892_pe899535_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/oekensand-floor-lamp-beech-white-90541536/#content',
  price: 89.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'beechWhite',
  variants: [
    { variantId: 'beechWhite', label: 'beech/white', hex: '#f2f2ee', price: 89.99, imageUrl: 'https://www.ikea.com/us/en/images/products/oekensand-floor-lamp-beech-white__1187892_pe899535_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/oekensand-floor-lamp-beech-white-90541536/#content' }, // CHECK: hex guessed from color name
  ],
})

floorLamp.set('STRANDAD-Floor-lamp', {
  name: 'STRANDAD Floor lamp',
  category: 'floor',
  width: null,
  depth: null,
  height: null,
  measurements: `Shade diameter : 8
    Total height : 44`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/strandad-floor-lamp-white-black__1403319_pe969302_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/strandad-floor-lamp-white-black-70594842/#content',
  price: 19.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'whiteBlack',
  variants: [
    { variantId: 'whiteBlack', label: 'white/black', hex: '#f2f2ee', price: 19.99, imageUrl: 'https://www.ikea.com/us/en/images/products/strandad-floor-lamp-white-black__1403319_pe969302_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strandad-floor-lamp-white-black-70594842/#content' }, // CHECK: hex guessed from color name
  ],
})

floorLamp.set('VIDJA-Floor-lamp', {
  name: 'VIDJA Floor lamp',
  category: 'floor',
  width: null,
  depth: null,
  height: 54,
  measurements: `Height : 54
    Shade diameter : 7`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/vidja-floor-lamp-white__0606512_pe682388_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/vidja-floor-lamp-white-10309206/#content',
  price: 69.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'white54',
  variants: [
    { variantId: 'white54', label: 'white, 54 "', hex: '#f2f2ee', price: 69.99, imageUrl: 'https://www.ikea.com/us/en/images/products/vidja-floor-lamp-white__0606512_pe682388_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vidja-floor-lamp-white-10309206/#content' }, // CHECK: hex guessed from color name
  ],
})

floorLamp.set('ARSTID-Floor-lamp', {
  name: 'ÅRSTID Floor lamp',
  category: 'floor',
  width: null,
  depth: null,
  height: 61,
  measurements: `Height : 61
    Base diameter : 11
    Shade diameter : 14`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/arstid-floor-lamp-brass-white__0390610_pe566328_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/arstid-floor-lamp-brass-white-60321324/#content',
  price: 89.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'brassWhite',
  variants: [
    { variantId: 'brassWhite', label: 'brass/white', hex: '#f2f2ee', price: 89.99, imageUrl: 'https://www.ikea.com/us/en/images/products/arstid-floor-lamp-brass-white__0390610_pe566328_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/arstid-floor-lamp-brass-white-60321324/#content' }, // CHECK: hex guessed from color name
    { variantId: 'nickelPlatedWhite', label: 'nickel plated/white', hex: '#f2f2ee', price: 89.99, imageUrl: 'https://www.ikea.com/us/en/images/products/arstid-floor-lamp-nickel-plated-white__0684004_pe720967_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/arstid-floor-lamp-nickel-plated-white-50163867/#content' }, // CHECK: hex guessed from color name
  ],
})

floorLamp.set('RINGSTA-SKAFTET-Floor-lamp', {
  name: 'RINGSTA / SKAFTET Floor lamp',
  category: '/',
  width: null,
  depth: null,
  height: 60,
  measurements: `Height : 60
    Shade width : 17
    Base diameter : 11`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/ringsta-skaftet-floor-lamp-white-nickel-plated__0856897_pe780852_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/ringsta-skaftet-floor-lamp-white-nickel-plated-s59387448/#content',
  price: 64.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'whiteNickelPlated',
  variants: [
    { variantId: 'whiteNickelPlated', label: 'white/nickel plated', hex: '#f2f2ee', price: 64.99, imageUrl: 'https://www.ikea.com/us/en/images/products/ringsta-skaftet-floor-lamp-white-nickel-plated__0856897_pe780852_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/ringsta-skaftet-floor-lamp-white-nickel-plated-s59387448/#content' }, // CHECK: hex guessed from color name
  ],
})

floorLamp.set('STRALA-LED-floor-lamp', {
  name: 'STRÅLA LED floor lamp',
  category: 'led',
  width: 13,
  depth: null,
  height: 26,
  measurements: `Height : 26
    Width : 13`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/strala-led-floor-lamp-matchstick-shaped-wood__1409060_pe972117_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/strala-led-floor-lamp-matchstick-shaped-wood-50645611/#content',
  price: 44.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'matchstickShapedWood',
  variants: [
    { variantId: 'matchstickShapedWood', label: 'matchstick-shaped wood', hex: '#d0b58f', price: 44.99, imageUrl: 'https://www.ikea.com/us/en/images/products/strala-led-floor-lamp-matchstick-shaped-wood__1409060_pe972117_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strala-led-floor-lamp-matchstick-shaped-wood-50645611/#content' },
  ],
})

floorLamp.set('SKOTTORP-SKAFTET-Floor-lamp', {
  name: 'SKOTTORP / SKAFTET Floor lamp',
  category: '/',
  width: 69,
  depth: 69,
  height: 84,
  measurements: `Height : 84
    Length : 69
    Shade diameter : 17
    Base diameter : 19`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/skottorp-skaftet-floor-lamp-arched-light-gray__0856912_pe780859_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/skottorp-skaftet-floor-lamp-arched-light-gray-s59387542/#content',
  price: 144.98,
  styleTags: [], // fill in by hand
  defaultVariant: 'archedLightGray',
  variants: [
    { variantId: 'archedLightGray', label: 'arched, light gray', hex: '#c4c4c4', price: 144.98, imageUrl: 'https://www.ikea.com/us/en/images/products/skottorp-skaftet-floor-lamp-arched-light-gray__0856912_pe780859_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/skottorp-skaftet-floor-lamp-arched-light-gray-s59387542/#content' }, // CHECK: hex guessed from color name
  ],
})

floorLamp.set('VINDKAST-Floor-lamp', {
  name: 'VINDKAST Floor lamp',
  category: 'floor',
  width: null,
  depth: null,
  height: 57,
  measurements: `Base diameter : 14
    Height : 57
    Shade diameter : 15
    Total height : 57`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/vindkast-floor-lamp-white__1180020_pe896176_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/vindkast-floor-lamp-white-60539097/#content',
  price: 59.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#f2f2ee', price: 59.99, imageUrl: 'https://www.ikea.com/us/en/images/products/vindkast-floor-lamp-white__1180020_pe896176_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vindkast-floor-lamp-white-60539097/#content' }, // CHECK: hex guessed from color name
  ],
})

floorLamp.set('PILSKOTT-LED-floor-lamp', {
  name: 'PILSKOTT LED floor lamp',
  category: 'led',
  width: 5,
  depth: 12,
  height: 44,
  measurements: `Length : 12
    Width : 5
    Height : 44`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/pilskott-led-floor-lamp-smart-black__1077629_pe856958_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/pilskott-led-floor-lamp-smart-black-20478128/#content',
  price: 149.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'smartBlack',
  variants: [
    { variantId: 'smartBlack', label: 'smart black', hex: '#1f1f1f', price: 149.99, imageUrl: 'https://www.ikea.com/us/en/images/products/pilskott-led-floor-lamp-smart-black__1077629_pe856958_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/pilskott-led-floor-lamp-smart-black-20478128/#content' }, // CHECK: hex guessed from color name
  ],
})
storage.set('BILLY-Bookcase-31-1-2x11x79-1-2', {
  name: 'BILLY Bookcase, 31 1/2x11x79 1/2 "',
  category: 'storage',
  width: 31.5,
  depth: 11,
  height: 79.5,
  measurements: `Width : 31 1/2
    Depth : 11
    Height : 79 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-white__1590272_pe1038911_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-white-20522046/#content',
  price: 79,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#d4d5d0', price: 79, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-white__1590272_pe1038911_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-white-20522046/#content' },
    { variantId: 'blackOakEffect', label: 'black oak effect', hex: '#353534', price: 89, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-black-oak-effect__1590300_pe1038939_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-black-oak-effect-40477340/#content' },
    { variantId: 'brownWalnutEffect', label: 'brown walnut effect', hex: '#8d6951', price: 89, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-brown-walnut-effect__1590308_pe1038947_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-brown-walnut-effect-50508652/#content' },
    { variantId: 'darkBrownOakEffect', label: 'dark-brown oak effect', hex: '#38322b', price: 89, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-dark-brown-oak-effect__1590282_pe1038921_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-dark-brown-oak-effect-80492782/#content' },
    { variantId: 'oakEffect', label: 'oak effect', hex: '#a78d75', price: 89, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-oak-effect__1590287_pe1038926_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-oak-effect-10508932/#content' },
  ],
})

storage.set('BILLY-Bookcase-15-3-4x11x79-1-2', {
  name: 'BILLY Bookcase, 15 3/4x11x79 1/2 "',
  category: 'storage',
  width: 15.75,
  depth: 11,
  height: 79.5,
  measurements: `Width : 15 3/4
    Depth : 11
    Height : 79 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-white__1590291_pe1038930_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-white-50522040/#content',
  price: 59,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#d0d0cd', price: 59, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-white__1590291_pe1038930_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-white-50522040/#content' },
    { variantId: 'blackOakEffect', label: 'black oak effect', hex: '#2f2f2e', price: 69, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-black-oak-effect__1590314_pe1038953_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-black-oak-effect-70477334/#content' },
    { variantId: 'blue', label: 'blue', hex: '#d0d2d0', price: 69, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-blue__1590294_pe1038933_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-blue-40594928/#content' },
    { variantId: 'brownWalnutEffect', label: 'brown walnut effect', hex: '#d1d1ce', price: 69, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-brown-walnut-effect__1590293_pe1038932_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-brown-walnut-effect-80508641/#content' },
    { variantId: 'darkBrownOakEffect', label: 'dark-brown oak effect', hex: '#353029', price: 69, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-dark-brown-oak-effect__1590321_pe1038959_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-dark-brown-oak-effect-60492778/#content' },
    { variantId: 'oakEffect', label: 'oak effect', hex: '#cecfcb', price: 69, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-oak-effect__1590302_pe1038941_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-oak-effect-60477382/#content' },
  ],
})

storage.set('BILLY-Bookcase-31-1-2x11x41-3-4', {
  name: 'BILLY Bookcase, 31 1/2x11x41 3/4 "',
  category: 'storage',
  width: 31.5,
  depth: 11,
  height: 41.75,
  measurements: `Width : 31 1/2
    Depth : 11
    Height : 41 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-white__1590306_pe1038945_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-white-90522043/#content',
  price: 49,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#e9e9e3', price: 49, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-white__1590306_pe1038945_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-white-90522043/#content' },
    { variantId: 'blackOakEffect', label: 'black oak effect', hex: '#2d2d2c', price: 59, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-black-oak-effect__1097107_pe864733_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-black-oak-effect-00477337/#content' },
    { variantId: 'brownWalnutEffect', label: 'brown walnut effect', hex: '#6c4e38', price: 59, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-brown-walnut-effect__1590286_pe1038925_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-brown-walnut-effect-30508648/#content' },
    { variantId: 'darkBrownOakEffect', label: 'dark-brown oak effect', hex: '#37332c', price: 59, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-dark-brown-oak-effect__1590315_pe1038954_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-dark-brown-oak-effect-40492779/#content' },
    { variantId: 'oakEffect', label: 'oak effect', hex: '#a98e75', price: 59, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-oak-effect__1590275_pe1038914_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-oak-effect-90477385/#content' },
  ],
})

storage.set('BRIMNES-Bookcase-23-5-8x74-3-4', {
  name: 'BRIMNES Bookcase, 23 5/8x74 3/4 "',
  category: 'storage',
  width: 23.625,
  depth: 13.75,
  height: 74.75,
  measurements: `Width : 23 5/8
    Depth : 13 3/4
    Height : 74 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/brimnes-bookcase-white__1590279_pe1038918_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/brimnes-bookcase-white-90301225/#content',
  price: 149,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#d1d2cd', price: 149, imageUrl: 'https://www.ikea.com/us/en/images/products/brimnes-bookcase-white__1590279_pe1038918_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/brimnes-bookcase-white-90301225/#content' },
    { variantId: 'black', label: 'black', hex: '#333333', price: 149, imageUrl: 'https://www.ikea.com/us/en/images/products/brimnes-bookcase-black__1590307_pe1038946_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/brimnes-bookcase-black-40301223/#content' },
  ],
})

storage.set('HEMNES-Bookcase-35-3-8x77-1-2', {
  name: 'HEMNES Bookcase, 35 3/8x77 1/2 "',
  category: 'storage',
  width: 35.375,
  depth: 14.625,
  height: 77.5,
  measurements: `Depth : 14 5/8
    Height : 77 1/2
    Width : 35 3/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-bookcase-gray-green-light-brown-stained__1590305_pe1038944_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/hemnes-bookcase-gray-green-light-brown-stained-40596159/#content',
  price: 349,
  styleTags: [], // fill in by hand
  defaultVariant: 'grayGreenLightBrownStained',
  variants: [
    { variantId: 'grayGreenLightBrownStained', label: 'gray-green/light brown stained', hex: '#acb1ac', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-bookcase-gray-green-light-brown-stained__1590305_pe1038944_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hemnes-bookcase-gray-green-light-brown-stained-40596159/#content' },
    { variantId: 'blackBrown', label: 'black-brown', hex: '#2e2c2a', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-bookcase-black-brown__1590297_pe1038936_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hemnes-bookcase-black-brown-20371764/#content' },
    { variantId: 'blackBrownLightBrown', label: 'black-brown/light brown', hex: '#b28b6c', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-bookcase-black-brown-light-brown__1590299_pe1038938_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hemnes-bookcase-black-brown-light-brown-20452294/#content' },
    { variantId: 'whiteStain', label: 'white stain', hex: '#d5d4ce', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-bookcase-white-stain__1602136_pe1043228_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hemnes-bookcase-white-stain-90371765/#content' },
    { variantId: 'whiteStainLightBrown', label: 'white stain/light brown', hex: '#d2d1cb', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-bookcase-white-stain-light-brown__1590316_pe1038955_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hemnes-bookcase-white-stain-light-brown-60413502/#content' },
  ],
})

storage.set('BILLY-OXBERG-Bookcase-with-doors-31-1-2x11-3-4x79-1-2', {
  name: 'BILLY / OXBERG Bookcase with doors, 31 1/2x11 3/4x79 1/2 "',
  category: 'storage',
  width: 31.5,
  depth: 11.75,
  height: 79.5,
  measurements: `Width : 31 1/2
    Depth : 11 3/4
    Height : 79 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-white__1602141_pe1043233_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-white-s39581494/#content',
  price: 139,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#d1d1cf', price: 139, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-white__1602141_pe1043233_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-white-s39581494/#content' },
    { variantId: 'blackOakEffect', label: 'black oak effect', hex: '#323232', price: 159, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-black-oak-effect__1590442_pe1039080_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-black-oak-effect-s79483364/#content' },
    { variantId: 'brownWalnutEffect', label: 'brown walnut effect', hex: '#906c53', price: 159, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-brown-walnut-effect__1602179_pe1043271_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-brown-walnut-effect-s49483365/#content' },
    { variantId: 'darkBrownOakEffect', label: 'dark-brown oak effect', hex: '#38352f', price: 159, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-dark-brown-oak-effect__1602180_pe1043272_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-dark-brown-oak-effect-s29483366/#content' },
    { variantId: 'oakEffect', label: 'oak effect', hex: '#c8ac92', price: 159, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-oak-effect__1602181_pe1043273_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-oak-effect-s09483367/#content' },
  ],
})

storage.set('BILLY-Bookcase-corner-comb-w-ext-units-53-1-2-53-1-2x11x93-1-4', {
  name: 'BILLY Bookcase corner comb w ext units, 53 1/2/53 1/2x11x93 1/4 "',
  category: 'storage',
  width: null,
  depth: 11,
  height: 93.25,
  measurements: `Depth : 11
    Height : 93 1/4
    Width right : 53 1/2
    Width left : 53 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-corner-comb-w-ext-units-white__1590386_pe1039024_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-corner-comb-w-ext-units-white-s99581504/#content',
  price: 315,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#d8d9d3', price: 315, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-corner-comb-w-ext-units-white__1590386_pe1039024_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-corner-comb-w-ext-units-white-s99581504/#content' },
    { variantId: 'blackOakEffect', label: 'black oak effect', hex: '#2c2c2b', price: 360, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-corner-comb-w-ext-units-black-oak-effect__1590387_pe1039025_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-corner-comb-w-ext-units-black-oak-effect-s39483549/#content' },
    { variantId: 'brownWalnutEffect', label: 'brown walnut effect', hex: '#684a33', price: 360, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-corner-comb-w-ext-units-brown-walnut-effect__1590384_pe1039022_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-corner-comb-w-ext-units-brown-walnut-effect-s19483550/#content' },
    { variantId: 'darkBrownOakEffect', label: 'dark-brown oak effect', hex: '#353028', price: 360, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-corner-comb-w-ext-units-dark-brown-oak-effect__1602184_pe1043276_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-corner-comb-w-ext-units-dark-brown-oak-effect-s99483551/#content' },
    { variantId: 'oakEffect', label: 'oak effect', hex: '#886f57', price: 360, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-corner-comb-w-ext-units-oak-effect__1590391_pe1039029_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-corner-comb-w-ext-units-oak-effect-s79483552/#content' },
  ],
})

storage.set('BILLY-Bookcase-combination-94-1-2x11x41-3-4', {
  name: 'BILLY Bookcase combination, 94 1/2x11x41 3/4 "',
  category: 'storage',
  width: 94.5,
  depth: 11,
  height: 41.75,
  measurements: `Width : 94 1/2
    Depth : 11
    Height : 41 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-combination-white__1590277_pe1038916_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-combination-white-s19581517/#content',
  price: 147,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#d3d3cd', price: 147, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-combination-white__1590277_pe1038916_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-combination-white-s19581517/#content' },
    { variantId: 'brownWalnutEffect', label: 'brown walnut effect', hex: '#6a4d38', price: 177, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-combination-brown-walnut-effect__1590361_pe1038999_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-combination-brown-walnut-effect-s99581820/#content' },
    { variantId: 'darkBrownOakEffect', label: 'dark-brown oak effect', hex: '#36322c', price: 177, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-combination-dark-brown-oak-effect__1590362_pe1039000_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-combination-dark-brown-oak-effect-s79581821/#content' },
    { variantId: 'oakEffect', label: 'oak effect', hex: '#887058', price: 177, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-combination-oak-effect__1590363_pe1039001_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-combination-oak-effect-s59581822/#content' },
  ],
})

storage.set('BILLY-Bookcase', {
  name: 'BILLY Bookcase',
  category: 'storage',
  width: 78.75,
  depth: 11,
  height: 93.25,
  measurements: `Width : 78 3/4
    Depth : 11
    Height : 93 1/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-white__1590320_pe1038958_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-white-s59581515/#content',
  price: 302,
  styleTags: [], // fill in by hand
  defaultVariant: 'white7834x11x9314',
  variants: [
    { variantId: 'white7834x11x9314', label: 'white, 78 3/4x11x93 1/4 "', hex: '#d1d2cc', price: 302, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-bookcase-white__1590320_pe1038958_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-bookcase-white-s59581515/#content' },
  ],
})

storage.set('BILLY-OXBERG-Bookcase-with-doors-31-1-2x11-3-4x41-3-4', {
  name: 'BILLY / OXBERG Bookcase with doors, 31 1/2x11 3/4x41 3/4 "',
  category: 'storage',
  width: 31.5,
  depth: 11.75,
  height: 41.75,
  measurements: `Width : 31 1/2
    Depth : 11 3/4
    Height : 41 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-white__1602142_pe1043234_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-white-s09571236/#content',
  price: 109,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#cfd0ce', price: 109, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-white__1602142_pe1043234_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-white-s09571236/#content' },
    { variantId: 'blackOakEffect', label: 'black oak effect', hex: '#323232', price: 129, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-black-oak-effect__1590436_pe1039074_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-black-oak-effect-s19483277/#content' },
    { variantId: 'brownWalnutEffect', label: 'brown walnut effect', hex: '#8a6851', price: 129, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-brown-walnut-effect__1602168_pe1043260_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-brown-walnut-effect-s39483276/#content' },
    { variantId: 'darkBrownOakEffect', label: 'dark-brown oak effect', hex: '#36302b', price: 129, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-dark-brown-oak-effect__1590451_pe1039089_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-dark-brown-oak-effect-s99483278/#content' },
    { variantId: 'oakEffect', label: 'oak effect', hex: '#ad9178', price: 129, imageUrl: 'https://www.ikea.com/us/en/images/products/billy-oxberg-bookcase-with-doors-oak-effect__1602169_pe1043261_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/billy-oxberg-bookcase-with-doors-oak-effect-s59483275/#content' },
  ],
})

cabinet.set('HAUGA-High-cabinet-with-2-doors-27-1-2x78-3-8', {
  name: 'HAUGA High cabinet with 2 doors, 27 1/2x78 3/8 "',
  category: 'high',
  width: 27.5,
  depth: 18.125,
  height: 78.375,
  measurements: `Width : 27 1/2
    Depth : 18 1/8
    Height : 78 3/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/hauga-high-cabinet-with-2-doors-white__0914112_pe783851_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/hauga-high-cabinet-with-2-doors-white-20415046/#content',
  price: 199,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#dad6d0', price: 199, imageUrl: 'https://www.ikea.com/us/en/images/products/hauga-high-cabinet-with-2-doors-white__0914112_pe783851_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hauga-high-cabinet-with-2-doors-white-20415046/#content' },
    { variantId: 'gray', label: 'gray', hex: '#8b8b88', price: 199, imageUrl: 'https://www.ikea.com/us/en/images/products/hauga-high-cabinet-with-2-doors-gray__0914110_pe783850_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hauga-high-cabinet-with-2-doors-gray-60415054/#content' },
  ],
})

storage.set('HAVSTA-Storage-combination-w-glass-doors-95-5-8x18-1-2x83-1-2', {
  name: 'HAVSTA Storage combination w/glass doors, 95 5/8x18 1/2x83 1/2 "',
  category: 'storage',
  width: 95.625,
  depth: 18.5,
  height: 83.5,
  measurements: `Width : 95 5/8
    Depth : 18 1/2
    Height : 83 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/havsta-storage-combination-w-glass-doors-gray-beige__1289936_pe934585_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/havsta-storage-combination-w-glass-doors-gray-beige-s59534901/#content',
  price: 1947,
  styleTags: [], // fill in by hand
  defaultVariant: 'grayBeige',
  variants: [
    { variantId: 'grayBeige', label: 'gray-beige', hex: '#cdc5ba', price: 1947, imageUrl: 'https://www.ikea.com/us/en/images/products/havsta-storage-combination-w-glass-doors-gray-beige__1289936_pe934585_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/havsta-storage-combination-w-glass-doors-gray-beige-s59534901/#content' },
    { variantId: 'black', label: 'black', hex: '#292a2a', price: 1947, imageUrl: 'https://www.ikea.com/us/en/images/products/havsta-storage-combination-w-glass-doors-black__1289937_pe934586_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/havsta-storage-combination-w-glass-doors-black-s79534900/#content' },
    { variantId: 'white', label: 'white', hex: '#cfd0cd', price: 1947, imageUrl: 'https://www.ikea.com/us/en/images/products/havsta-storage-combination-w-glass-doors-white__1289935_pe934584_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/havsta-storage-combination-w-glass-doors-white-s39534902/#content' },
  ],
})

cabinet.set('LOMMARP-Cabinet-40-1-8x39-3-4', {
  name: 'LOMMARP Cabinet, 40 1/8x39 3/4 "',
  category: 'cabinet',
  width: 40.125,
  depth: 19.625,
  height: 39.75,
  measurements: `Width : 40 1/8
    Depth : 19 5/8
    Height : 39 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/lommarp-cabinet-dark-blue-green__0739327_pe741692_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/lommarp-cabinet-dark-blue-green-90483027/#content',
  price: 449,
  styleTags: [], // fill in by hand
  defaultVariant: 'darkBlueGreen',
  variants: [
    { variantId: 'darkBlueGreen', label: 'dark blue-green', hex: '#465252', price: 449, imageUrl: 'https://www.ikea.com/us/en/images/products/lommarp-cabinet-dark-blue-green__0739327_pe741692_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/lommarp-cabinet-dark-blue-green-90483027/#content' },
    { variantId: 'lightBeige', label: 'light beige', hex: '#ece5d2', price: 449, imageUrl: 'https://www.ikea.com/us/en/images/products/lommarp-cabinet-light-beige__0739329_pe741693_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/lommarp-cabinet-light-beige-70483028/#content' },
  ],
})

storage.set('SKRUVBY-Storage-combination-74-3-4x35-3-8', {
  name: 'SKRUVBY Storage combination, 74 3/4x35 3/8 "',
  category: 'storage',
  width: 74.75,
  depth: 15,
  height: 35.375,
  measurements: `Depth : 15
    Height : 35 3/8
    Width : 74 3/4
    Drawer depth (inside) : 11 3/4
    Drawer width (inside) : 16 1/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/skruvby-storage-combination-black-blue__1333010_pe946381_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/skruvby-storage-combination-black-blue-s69525604/#content',
  price: 298,
  styleTags: [], // fill in by hand
  defaultVariant: 'blackBlue',
  variants: [
    { variantId: 'blackBlue', label: 'black-blue', hex: '#23313d', price: 298, imageUrl: 'https://www.ikea.com/us/en/images/products/skruvby-storage-combination-black-blue__1333010_pe946381_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/skruvby-storage-combination-black-blue-s69525604/#content' },
    { variantId: 'white', label: 'white', hex: '#cececd', price: 298, imageUrl: 'https://www.ikea.com/us/en/images/products/skruvby-storage-combination-white__1291707_pe934968_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/skruvby-storage-combination-white-s39525605/#content' },
  ],
})

storage.set('HAVSTA-Storage-combination-w-sliding-doors-79-1-2x18-1-2x83-1-2', {
  name: 'HAVSTA Storage combination w sliding doors, 79 1/2x18 1/2x83 1/2 "',
  category: 'storage',
  width: 79.5,
  depth: 18.5,
  height: 83.5,
  measurements: `Depth : 18 1/2
    Height : 83 1/2
    Width : 79 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/havsta-storage-combination-w-sliding-doors-gray-beige__1289925_pe934590_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/havsta-storage-combination-w-sliding-doors-gray-beige-s69534830/#content',
  price: 1078,
  styleTags: [], // fill in by hand
  defaultVariant: 'grayBeige',
  variants: [
    { variantId: 'grayBeige', label: 'gray-beige', hex: '#cdc5ba', price: 1078, imageUrl: 'https://www.ikea.com/us/en/images/products/havsta-storage-combination-w-sliding-doors-gray-beige__1289925_pe934590_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/havsta-storage-combination-w-sliding-doors-gray-beige-s69534830/#content' },
    { variantId: 'black', label: 'black', hex: '#2f2f2f', price: 1078, imageUrl: 'https://www.ikea.com/us/en/images/products/havsta-storage-combination-w-sliding-doors-black__1289926_pe934591_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/havsta-storage-combination-w-sliding-doors-black-s89534829/#content' },
    { variantId: 'white', label: 'white', hex: '#d2d3d0', price: 1078, imageUrl: 'https://www.ikea.com/us/en/images/products/havsta-storage-combination-w-sliding-doors-white__1289924_pe934589_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/havsta-storage-combination-w-sliding-doors-white-s39534836/#content' },
  ],
})

cabinet.set('SKRUVBY-Sideboard-47-1-4x14-3-4x35-3-8', {
  name: 'SKRUVBY Sideboard, 47 1/4x14 3/4x35 3/8 "',
  category: 'sideboard',
  width: 47.25,
  depth: 14.75,
  height: 35.375,
  measurements: `Depth : 14 3/4
    Height : 35 3/8
    Width : 47 1/4
    Drawer width (inside) : 16 1/8
    Drawer depth (inside) : 11 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/skruvby-sideboard-black-blue__1241238_pe919728_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/skruvby-sideboard-black-blue-70568720/#content',
  price: 199,
  styleTags: [], // fill in by hand
  defaultVariant: 'blackBlue',
  variants: [
    { variantId: 'blackBlue', label: 'black-blue', hex: '#233848', price: 199, imageUrl: 'https://www.ikea.com/us/en/images/products/skruvby-sideboard-black-blue__1241238_pe919728_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/skruvby-sideboard-black-blue-70568720/#content' },
    { variantId: 'white', label: 'white', hex: '#cecece', price: 199, imageUrl: 'https://www.ikea.com/us/en/images/products/skruvby-sideboard-white__1241237_pe919729_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/skruvby-sideboard-white-60568725/#content' },
  ],
})

storage.set('BESTA-Storage-combination-with-drawers-70-7-8x16-1-2x29-1-8', {
  name: 'BESTÅ Storage combination with drawers, 70 7/8x16 1/2x29 1/8 "',
  category: 'storage',
  width: 70.875,
  depth: 16.5,
  height: 29.125,
  measurements: `Width : 70 7/8
    Depth : 16 1/2
    Height : 29 1/8
    Drawer width (inside) : 20 1/8
    Drawer depth (inside) : 12 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-stubbarp-black-brown__1602679_pe1043593_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-lappviken-stubbarp-black-brown-s09412681/#content',
  price: 365,
  styleTags: [], // fill in by hand
  defaultVariant: 'blackBrownLappvikenStubbarpBlackBrown',
  variants: [
    { variantId: 'blackBrownLappvikenStubbarpBlackBrown', label: 'black-brown/Lappviken/Stubbarp black-brown', hex: '#4a4a48', price: 365, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-stubbarp-black-brown__1602679_pe1043593_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-lappviken-stubbarp-black-brown-s09412681/#content' },
    { variantId: 'blackBrownLappvikenStubbarpBrownWalnutEffect', label: 'black-brown Lappviken/Stubbarp/brown walnut effect', hex: '#8d694d', price: 365, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-stubbarp-brown-walnut-effect__1603553_pe1044246_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-lappviken-stubbarp-brown-walnut-effect-s69612205/#content' },
    { variantId: 'darkGrayLappvikenStubbarpDarkGray', label: 'dark gray/Lappviken/Stubbarp dark gray', hex: '#535351', price: 331, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-dark-gray-lappviken-stubbarp-dark-gray__1602776_pe1043690_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-dark-gray-lappviken-stubbarp-dark-gray-s29508079/#content' },
    { variantId: 'whiteLappvikenStubbarpBrownWalnutEffect', label: 'white Lappviken/Stubbarp/brown walnut effect', hex: '#8d694d', price: 365, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-stubbarp-brown-walnut-effect__1602841_pe1043755_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-stubbarp-brown-walnut-effect-s09612208/#content' },
    { variantId: 'whiteStainedOakEffectLappvikenWhite', label: 'white stained oak effect/Lappviken white', hex: '#e9e9e3', price: 365, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-white__1602852_pe1043766_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-white-s89620544/#content' },
    { variantId: 'whiteStainedOakEffectLappvikenStubbarpWhiteStainedOakEffect', label: 'white stained oak effect/Lappviken/Stubbarp white stained oak effect', hex: '#d8c7ad', price: 365, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect__0350153_pe535233_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-stubbarp-white-stained-oak-effect-s39412689/#content' },
    { variantId: 'whiteLappvikenStubbarpWhite', label: 'white/Lappviken/Stubbarp white', hex: '#e9e9e4', price: 365, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-stubbarp-white__1602633_pe1043547_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-stubbarp-white-s99412686/#content' },
    { variantId: 'blackBrownHanvikenStubbarpBlackBrown', label: 'black-brown/Hanviken/Stubbarp black-brown', hex: '#494947', price: 385, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-hanviken-stubbarp-black-brown__1602930_pe1043842_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-hanviken-stubbarp-black-brown-s19412727/#content' },
    { variantId: 'whiteStainedOakEffectHanvikenStubbarpWhiteStainedOakEffect', label: 'white stained oak effect/Hanviken/Stubbarp white stained oak effect', hex: '#dbc6aa', price: 385, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-stained-oak-effect-hanviken-stubbarp-white-stained-oak-effect__1603480_pe1044173_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-stained-oak-effect-hanviken-stubbarp-white-stained-oak-effect-s59440276/#content' },
    { variantId: 'whiteHanvikenStubbarpWhite', label: 'white/Hanviken/Stubbarp white', hex: '#e8e9e3', price: 385, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-hanviken-stubbarp-white__1602643_pe1043557_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-hanviken-stubbarp-white-s29412722/#content' },
    { variantId: 'blackBrownLappvikenSindvikStubbarpBlackBrownClearGlass', label: 'black-brown Lappviken/Sindvik/Stubbarp black-brown clear glass', hex: '#313230', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass__0741364_pe742344_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass-s19412671/#content' },
  ],
})

storage.set('BESTA-Storage-combination-with-doors-70-7-8x16-1-2x29-7-8', {
  name: 'BESTÅ Storage combination with doors, 70 7/8x16 1/2x29 7/8 "',
  category: 'storage',
  width: 70.875,
  depth: 16.5,
  height: 29.875,
  measurements: `Width : 70 7/8
    Depth : 16 1/2
    Height : 29 7/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-lappviken-stubbarp-white__1603841_pe1044528_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-lappviken-stubbarp-white-s59419072/#content',
  price: 425,
  styleTags: [], // fill in by hand
  defaultVariant: 'whiteLappvikenStubbarpWhite',
  variants: [
    { variantId: 'whiteLappvikenStubbarpWhite', label: 'white/Lappviken/Stubbarp white', hex: '#f2f2ee', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-lappviken-stubbarp-white__1603841_pe1044528_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-lappviken-stubbarp-white-s59419072/#content' }, // CHECK: hex guessed from color name
    { variantId: 'blackBrownLappvikenStubbarpBlackBrown', label: 'black-brown/Lappviken/Stubbarp black-brown', hex: '#272727', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-black-brown-lappviken-stubbarp-black-brown__1603860_pe1044547_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-black-brown-lappviken-stubbarp-black-brown-s89419075/#content' },
    { variantId: 'blackSindvikStubbarpBlack', label: 'black/Sindvik/Stubbarp black', hex: '#161616', price: 530, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-black-sindvik-stubbarp-black__1603007_pe1043919_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-black-sindvik-stubbarp-black-s69419076/#content' },
    { variantId: 'whiteSindvikStubbarpWhiteClearGlass', label: 'white/Sindvik/Stubbarp white clear glass', hex: '#b4b5ac', price: 530, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-sindvik-stubbarp-white-clear-glass__1602963_pe1043875_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-sindvik-stubbarp-white-clear-glass-s19419074/#content' },
    { variantId: 'whiteSmevikenKabbarpWhite', label: 'white/Smeviken/Kabbarp white', hex: '#d4d4d0', price: 545, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-smeviken-kabbarp-white__1604075_pe1044762_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-smeviken-kabbarp-white-s99387762/#content' },
    { variantId: 'whiteSuttervikenKabbarpWhite', label: 'white/Sutterviken/Kabbarp white', hex: '#eaeae4', price: 515, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-sutterviken-kabbarp-white__1603455_pe1044148_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-sutterviken-kabbarp-white-s29387765/#content' },
    { variantId: 'whiteOstvikKabbarpWhiteClearGlass', label: 'white/Ostvik/Kabbarp white clear glass', hex: '#d3d3ce', price: 590, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-ostvik-kabbarp-white-clear-glass__1602951_pe1043863_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-ostvik-kabbarp-white-clear-glass-s19387756/#content' },
  ],
})

storage.set('BESTA-Storage-combination-94-1-2x16-1-2x29-7-8', {
  name: 'BESTÅ Storage combination, 94 1/2x16 1/2x29 7/8 "',
  category: 'storage',
  width: 94.5,
  depth: 16.5,
  height: 29.875,
  measurements: `Depth : 16 1/2
    Height : 29 7/8
    Width : 94 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-black-brown-lappviken-black-brown__1603088_pe1044000_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-black-brown-lappviken-black-brown-s79623232/#content',
  price: 525,
  styleTags: [], // fill in by hand
  defaultVariant: 'blackBrownLappvikenBlackBrown',
  variants: [
    { variantId: 'blackBrownLappvikenBlackBrown', label: 'black-brown/Lappviken black-brown', hex: '#363530', price: 525, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-black-brown-lappviken-black-brown__1603088_pe1044000_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-black-brown-lappviken-black-brown-s79623232/#content' },
    { variantId: 'whiteLappvikenWhite', label: 'white/Lappviken white', hex: '#f2f2ee', price: 525, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-white-lappviken-white__1602862_pe1043776_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-white-lappviken-white-s99623226/#content' }, // CHECK: hex guessed from color name
    { variantId: 'whitePipmakareWhite', label: 'white/Pipmakare white', hex: '#f2f2ee', price: 675, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-white-pipmakare-white__1603087_pe1043999_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-white-pipmakare-white-s39623229/#content' }, // CHECK: hex guessed from color name
    { variantId: 'whiteStudsvikenWovenPoplar', label: 'white/Studsviken woven poplar', hex: '#e8d0b2', price: 685, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-white-studsviken-woven-poplar__1603089_pe1044001_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-white-studsviken-woven-poplar-s59623228/#content' },
    { variantId: 'blackBrownHedevikenOakVeneer', label: 'black-brown/Hedeviken oak veneer', hex: '#d2ab88', price: 855, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-black-brown-hedeviken-oak-veneer__1603692_pe1044382_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-black-brown-hedeviken-oak-veneer-s99623231/#content' },
    { variantId: 'whiteHedevikenOakVeneer', label: 'white/Hedeviken oak veneer', hex: '#d3ab89', price: 855, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-white-hedeviken-oak-veneer__1603564_pe1044257_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-white-hedeviken-oak-veneer-s79623227/#content' },
  ],
})

storage.set('BESTA-Storage-combination-with-doors-70-7-8x16-1-2x44-7-8', {
  name: 'BESTÅ Storage combination with doors, 70 7/8x16 1/2x44 7/8 "',
  category: 'storage',
  width: 70.875,
  depth: 16.5,
  height: 44.875,
  measurements: `Width : 70 7/8
    Depth : 16 1/2
    Height : 44 7/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-smeviken-kabbarp-white-clear-glass__1603456_pe1044149_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-smeviken-kabbarp-white-clear-glass-s29387770/#content',
  price: 940,
  styleTags: [], // fill in by hand
  defaultVariant: 'whiteSmevikenKabbarpWhiteClearGlass',
  variants: [
    { variantId: 'whiteSmevikenKabbarpWhiteClearGlass', label: 'white/Smeviken/Kabbarp white clear glass', hex: '#d4d4cf', price: 940, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-smeviken-kabbarp-white-clear-glass__1603456_pe1044149_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-smeviken-kabbarp-white-clear-glass-s29387770/#content' },
    { variantId: 'lappvikenStubbarpSindvikBlackBrownClearGlass', label: 'Lappviken/Stubbarp/Sindvik black-brown clear glass', hex: '#272727', price: 760, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-lappviken-stubbarp-sindvik-black-brown-clear-glass__1602883_pe1043797_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-lappviken-stubbarp-sindvik-black-brown-clear-glass-s39419087/#content' },
    { variantId: 'lappvikenStubbarpSindvikWhiteClearGlass', label: 'Lappviken/Stubbarp/Sindvik white clear glass', hex: '#d5d5d3', price: 760, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-lappviken-stubbarp-sindvik-white-clear-glass__1603773_pe1044461_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-lappviken-stubbarp-sindvik-white-clear-glass-s59419086/#content' },
    { variantId: 'whiteSuttervikenKabbarpWhiteClearGlass', label: 'white/Sutterviken/Kabbarp white clear glass', hex: '#e9e9e3', price: 850, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-doors-white-sutterviken-kabbarp-white-clear-glass__1603917_pe1044604_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-doors-white-sutterviken-kabbarp-white-clear-glass-s69387773/#content' },
  ],
})

storage.set('BESTA-Storage-combination-with-drawers-70-7-8x16-1-2x29-1-8', {
  name: 'BESTÅ Storage combination with drawers, 70 7/8x16 1/2x29 1/8 "',
  category: 'storage',
  width: 70.875,
  depth: 16.5,
  height: 29.125,
  measurements: `Width : 70 7/8
    Depth : 16 1/2
    Height : 29 1/8
    Drawer width (inside) : 20 1/8
    Drawer depth (inside) : 12 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray__1602790_pe1043704_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray-s09575499/#content',
  price: 425,
  styleTags: [], // fill in by hand
  defaultVariant: 'whiteLappvikenSindvikStubbarpDarkGray',
  variants: [
    { variantId: 'whiteLappvikenSindvikStubbarpDarkGray', label: 'white Lappviken/Sindvik/Stubbarp dark gray', hex: '#d2d2cf', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray__1602790_pe1043704_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray-s09575499/#content' },
    { variantId: 'blackBrownLappvikenSindvikStubbarpBlackBrownClearGlass', label: 'black-brown Lappviken/Sindvik/Stubbarp black-brown clear glass', hex: '#323331', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass__1602876_pe1043790_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass-s59302675/#content' },
    { variantId: 'whiteLappvikenSindvikStubbarpWhiteClearGlass', label: 'white Lappviken/Sindvik/Stubbarp white clear glass', hex: '#cfd1ca', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-white-clear-glass__1602960_pe1043872_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-white-clear-glass-s49302685/#content' },
    { variantId: 'whiteStainedOakEffectLappvikenSindvikStubbarpWhtStainedOakEffectClearGlass', label: 'white stained oak effect Lappviken/Sindvik/Stubbarp wht stained oak effect clear glass', hex: '#d6c5ae', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-sindvik-stubbarp-wht-stained-oak-effect-clear-glass__1603137_pe1044049_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-sindvik-stubbarp-wht-stained-oak-effect-clear-glass-s29302691/#content' },
    { variantId: 'whiteLappvikenStubbarpFallsvikAnthracite', label: 'white Lappviken/Stubbarp/Fällsvik anthracite', hex: '#cfd1cc', price: 485, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-stubbarp-faellsvik-anthracite__1603042_pe1043954_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-stubbarp-faellsvik-anthracite-s39575501/#content' },
    { variantId: 'blackBrownSelsvikenStubbarpHighGlossBlackSmokedGlass', label: 'black-brown/Selsviken/Stubbarp high gloss/black smoked glass', hex: '#333433', price: 515, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-black-smoked-glass__1602942_pe1043854_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-black-smoked-glass-s19302696/#content' },
  ],
})

storage.set('BESTA-Storage-combination-with-drawers-70-7-8x16-1-2x29-1-8', {
  name: 'BESTÅ Storage combination with drawers, 70 7/8x16 1/2x29 1/8 "',
  category: 'storage',
  width: 70.875,
  depth: 16.5,
  height: 29.125,
  measurements: `Width : 70 7/8
    Depth : 16 1/2
    Height : 29 1/8
    Drawer width (inside) : 20 1/8
    Drawer depth (inside) : 12 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray__1602790_pe1043704_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray-s09575499/#content',
  price: 425,
  styleTags: [], // fill in by hand
  defaultVariant: 'whiteLappvikenSindvikStubbarpDarkGray',
  variants: [
    { variantId: 'whiteLappvikenSindvikStubbarpDarkGray', label: 'white Lappviken/Sindvik/Stubbarp dark gray', hex: '#d2d2cf', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray__1602790_pe1043704_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray-s09575499/#content' },
    { variantId: 'blackBrownLappvikenSindvikStubbarpBlackBrownClearGlass', label: 'black-brown Lappviken/Sindvik/Stubbarp black-brown clear glass', hex: '#323331', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass__1602876_pe1043790_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass-s59302675/#content' },
    { variantId: 'whiteLappvikenSindvikStubbarpWhiteClearGlass', label: 'white Lappviken/Sindvik/Stubbarp white clear glass', hex: '#cfd1ca', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-white-clear-glass__1602960_pe1043872_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-white-clear-glass-s49302685/#content' },
    { variantId: 'whiteStainedOakEffectLappvikenSindvikStubbarpWhtStainedOakEffectClearGlass', label: 'white stained oak effect Lappviken/Sindvik/Stubbarp wht stained oak effect clear glass', hex: '#d6c5ae', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-sindvik-stubbarp-wht-stained-oak-effect-clear-glass__1603137_pe1044049_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-sindvik-stubbarp-wht-stained-oak-effect-clear-glass-s29302691/#content' },
    { variantId: 'whiteLappvikenStubbarpFallsvikAnthracite', label: 'white Lappviken/Stubbarp/Fällsvik anthracite', hex: '#cfd1cc', price: 485, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-stubbarp-faellsvik-anthracite__1603042_pe1043954_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-stubbarp-faellsvik-anthracite-s39575501/#content' },
    { variantId: 'blackBrownSelsvikenStubbarpHighGlossBlackSmokedGlass', label: 'black-brown/Selsviken/Stubbarp high gloss/black smoked glass', hex: '#333433', price: 515, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-black-smoked-glass__1602942_pe1043854_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-black-smoked-glass-s19302696/#content' },
  ],
})
storage.set('BESTA-Storage-combination-with-drawers-70-7-8x16-1-2x29-1-8', {
  name: 'BESTÅ Storage combination with drawers, 70 7/8x16 1/2x29 1/8 "',
  category: 'storage',
  width: 70.875,
  depth: 16.5,
  height: 29.125,
  measurements: `Width : 70 7/8
    Depth : 16 1/2
    Height : 29 1/8
    Drawer width (inside) : 20 1/8
    Drawer depth (inside) : 12 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray__1602790_pe1043704_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray-s09575499/#content',
  price: 425,
  styleTags: [], // fill in by hand
  defaultVariant: 'whiteLappvikenSindvikStubbarpDarkGray',
  variants: [
    { variantId: 'whiteLappvikenSindvikStubbarpDarkGray', label: 'white Lappviken/Sindvik/Stubbarp dark gray', hex: '#d2d2cf', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray__1602790_pe1043704_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-dark-gray-s09575499/#content' },
    { variantId: 'blackBrownLappvikenSindvikStubbarpBlackBrownClearGlass', label: 'black-brown Lappviken/Sindvik/Stubbarp black-brown clear glass', hex: '#323331', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass__1602876_pe1043790_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-lappviken-sindvik-stubbarp-black-brown-clear-glass-s59302675/#content' },
    { variantId: 'whiteLappvikenSindvikStubbarpWhiteClearGlass', label: 'white Lappviken/Sindvik/Stubbarp white clear glass', hex: '#cfd1ca', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-white-clear-glass__1602960_pe1043872_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-sindvik-stubbarp-white-clear-glass-s49302685/#content' },
    { variantId: 'whiteStainedOakEffectLappvikenSindvikStubbarpWhtStainedOakEffectClearGlass', label: 'white stained oak effect Lappviken/Sindvik/Stubbarp wht stained oak effect clear glass', hex: '#d6c5ae', price: 425, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-sindvik-stubbarp-wht-stained-oak-effect-clear-glass__1603137_pe1044049_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-stained-oak-effect-lappviken-sindvik-stubbarp-wht-stained-oak-effect-clear-glass-s29302691/#content' },
    { variantId: 'whiteLappvikenStubbarpFallsvikAnthracite', label: 'white Lappviken/Stubbarp/Fällsvik anthracite', hex: '#cfd1cc', price: 485, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-white-lappviken-stubbarp-faellsvik-anthracite__1603042_pe1043954_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-white-lappviken-stubbarp-faellsvik-anthracite-s39575501/#content' },
    { variantId: 'blackBrownSelsvikenStubbarpHighGlossBlackSmokedGlass', label: 'black-brown/Selsviken/Stubbarp high gloss/black smoked glass', hex: '#333433', price: 515, imageUrl: 'https://www.ikea.com/us/en/images/products/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-black-smoked-glass__1602942_pe1043854_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/besta-storage-combination-with-drawers-black-brown-selsviken-stubbarp-high-gloss-black-smoked-glass-s19302696/#content' },
  ],
})

storage.set('EKET-Storage-combination-with-legs', {
  name: 'EKET Storage combination with legs',
  category: 'storage',
  width: 27.5,
  depth: 13.75,
  height: 31.5,
  measurements: `Width : 27 1/2
    Depth : 13 3/4
    Height : 31 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-white-wood__0915225_pe784665_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/eket-storage-combination-with-legs-white-wood-s79388003/#content',
  price: 110,
  styleTags: [], // fill in by hand
  defaultVariant: 'whiteWood2712x1334x3112',
  variants: [
    { variantId: 'whiteWood2712x1334x3112', label: 'white/wood, 27 1/2x13 3/4x31 1/2 "', hex: '#ebebe4', price: 110, imageUrl: 'https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-white-wood__0915225_pe784665_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/eket-storage-combination-with-legs-white-wood-s79388003/#content' },
  ],
})

cabinet.set('EKET-Wall-mounted-cabinet-combination-31-1-2x13-3-4x82-5-8', {
  name: 'EKET Wall-mounted cabinet combination, 31 1/2x13 3/4x82 5/8 "',
  category: 'wall-mounted',
  width: 15,
  depth: 15,
  height: 3,
  measurements: `Height : 3
    Length : 15`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/eket-wall-mounted-cabinet-combination-brown-walnut-effect-white-dark-gray__1172193_pe893265_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/eket-wall-mounted-cabinet-combination-brown-walnut-effect-white-dark-gray-s59507733/#content',
  price: 244,
  styleTags: [], // fill in by hand
  defaultVariant: 'brownWalnutEffectWhiteDarkGray',
  variants: [
    { variantId: 'brownWalnutEffectWhiteDarkGray', label: 'brown walnut effect/white dark gray', hex: '#d2cfcb', price: 244, imageUrl: 'https://www.ikea.com/us/en/images/products/eket-wall-mounted-cabinet-combination-brown-walnut-effect-white-dark-gray__1172193_pe893265_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/eket-wall-mounted-cabinet-combination-brown-walnut-effect-white-dark-gray-s59507733/#content' },
    { variantId: 'brownWalnutEffectWhite', label: 'brown walnut effect/white', hex: '#724d35', price: 244, imageUrl: 'https://www.ikea.com/us/en/images/products/eket-wall-mounted-cabinet-combination-brown-walnut-effect-white__1133104_pe878425_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/eket-wall-mounted-cabinet-combination-brown-walnut-effect-white-s49490323/#content' },
    { variantId: 'white', label: 'white', hex: '#e5e4db', price: 244, imageUrl: 'https://www.ikea.com/us/en/images/products/eket-wall-mounted-cabinet-combination-white__0625896_pe692503_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/eket-wall-mounted-cabinet-combination-white-s19189030/#content' },
  ],
})

cabinet.set('LOMMARP-Cabinet-40-1-8x39-3-4', {
  name: 'LOMMARP Cabinet, 40 1/8x39 3/4 "',
  category: 'cabinet',
  width: 40.125,
  depth: 19.625,
  height: 39.75,
  measurements: `Width : 40 1/8
    Depth : 19 5/8
    Height : 39 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/lommarp-cabinet-dark-blue-green__0739327_pe741692_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/lommarp-cabinet-dark-blue-green-90483027/#content',
  price: 449,
  styleTags: [], // fill in by hand
  defaultVariant: 'darkBlueGreen',
  variants: [
    { variantId: 'darkBlueGreen', label: 'dark blue-green', hex: '#465252', price: 449, imageUrl: 'https://www.ikea.com/us/en/images/products/lommarp-cabinet-dark-blue-green__0739327_pe741692_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/lommarp-cabinet-dark-blue-green-90483027/#content' },
    { variantId: 'lightBeige', label: 'light beige', hex: '#ece5d2', price: 449, imageUrl: 'https://www.ikea.com/us/en/images/products/lommarp-cabinet-light-beige__0739329_pe741693_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/lommarp-cabinet-light-beige-70483028/#content' },
  ],
})

tableLamp.set('SPETSBOJ-Table-lamp-9', {
  name: 'SPETSBOJ Table lamp, 9 "',
  category: 'table',
  width: 5,
  depth: 5,
  height: 9,
  measurements: `Base diameter : 3
    Diameter : 5
    Height : 9`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/spetsboj-table-lamp-dimmable-white__1355533_pe953162_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/spetsboj-table-lamp-dimmable-white-70589119/#content',
  price: 19.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'dimmableWhite',
  variants: [
    { variantId: 'dimmableWhite', label: 'dimmable/white', hex: '#b5b3a6', price: 19.99, imageUrl: 'https://www.ikea.com/us/en/images/products/spetsboj-table-lamp-dimmable-white__1355533_pe953162_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/spetsboj-table-lamp-dimmable-white-70589119/#content' },
    { variantId: 'dimmableGreen', label: 'dimmable/green', hex: '#2b4d37', price: 14.99, imageUrl: 'https://www.ikea.com/us/en/images/products/spetsboj-table-lamp-dimmable-green__1355495_pe953147_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/spetsboj-table-lamp-dimmable-green-60591622/#content' },
    { variantId: 'dimmableYellow', label: 'dimmable/yellow', hex: '#b4a559', price: 14.99, imageUrl: 'https://www.ikea.com/us/en/images/products/spetsboj-table-lamp-dimmable-yellow__1355566_pe953171_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/spetsboj-table-lamp-dimmable-yellow-60583858/#content' },
    { variantId: 'dimmableLightBlue', label: 'dimmable/light blue', hex: '#78a9b5', price: 19.99, imageUrl: 'https://www.ikea.com/us/en/images/products/spetsboj-table-lamp-dimmable-light-blue__1531238_pe1015571_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/spetsboj-table-lamp-dimmable-light-blue-50643315/#content' },
    { variantId: 'dimmableOrange', label: 'dimmable/orange', hex: '#ab5135', price: 19.99, imageUrl: 'https://www.ikea.com/us/en/images/products/spetsboj-table-lamp-dimmable-orange__1531242_pe1015572_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/spetsboj-table-lamp-dimmable-orange-20643326/#content' },
  ],
})

tableLamp.set('DEJSA-Table-lamp', {
  name: 'DEJSA Table lamp',
  category: 'table',
  width: null,
  depth: null,
  height: 11,
  measurements: `Shade width : 10
    Height : 11`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/dejsa-table-lamp-beige-opal-glass__0967540_pe810183_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/dejsa-table-lamp-beige-opal-glass-00404987/#content',
  price: 89.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'beigeOpalGlass11',
  variants: [
    { variantId: 'beigeOpalGlass11', label: 'beige/opal glass, 11 "', hex: '#d7d6d3', price: 89.99, imageUrl: 'https://www.ikea.com/us/en/images/products/dejsa-table-lamp-beige-opal-glass__0967540_pe810183_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/dejsa-table-lamp-beige-opal-glass-00404987/#content' },
  ],
})

tableLamp.set('HALGATT-Table-lamp', {
  name: 'HALGATT Table lamp',
  category: 'table',
  width: null,
  depth: null,
  height: null,
  measurements: `Base diameter : 6
    Shade diameter : 12 5/8
    Total height : 19`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/halgatt-table-lamp-dimmable-beige-brown-ceramic__1429913_pe981981_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/halgatt-table-lamp-dimmable-beige-brown-ceramic-70601258/#content',
  price: 59.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'dimmableBeigeBrownCeramic19',
  variants: [
    { variantId: 'dimmableBeigeBrownCeramic19', label: 'dimmable beige/brown ceramic, 19 "', hex: '#d9d5c8', price: 59.99, imageUrl: 'https://www.ikea.com/us/en/images/products/halgatt-table-lamp-dimmable-beige-brown-ceramic__1429913_pe981981_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/halgatt-table-lamp-dimmable-beige-brown-ceramic-70601258/#content' },
  ],
})

tableLamp.set('VARPTROSS-Table-lamp', {
  name: 'VARPTROSS Table lamp',
  category: 'table',
  width: 6,
  depth: 7,
  height: 10,
  measurements: `Height : 10
    Length : 7
    Width : 6`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/varptross-table-lamp-bamboo__1509490_pe1009729_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/varptross-table-lamp-bamboo-50601240/#content',
  price: 39.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'bamboo10',
  variants: [
    { variantId: 'bamboo10', label: 'bamboo, 10 "', hex: '#c9a874', price: 39.99, imageUrl: 'https://www.ikea.com/us/en/images/products/varptross-table-lamp-bamboo__1509490_pe1009729_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/varptross-table-lamp-bamboo-50601240/#content' },
  ],
})

tableLamp.set('HOGVIND-Table-lamp', {
  name: 'HÖGVIND Table lamp',
  category: 'table',
  width: 9,
  depth: 9,
  height: 10,
  measurements: `Diameter : 9
    Height : 10`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/hoegvind-table-lamp-nickel-plated-gray-glass__1300598_pe937151_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/hoegvind-table-lamp-nickel-plated-gray-glass-80568220/#content',
  price: 64.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'nickelPlatedGrayGlass',
  variants: [
    { variantId: 'nickelPlatedGrayGlass', label: 'nickel plated/gray glass', hex: '#4a4c51', price: 64.99, imageUrl: 'https://www.ikea.com/us/en/images/products/hoegvind-table-lamp-nickel-plated-gray-glass__1300598_pe937151_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hoegvind-table-lamp-nickel-plated-gray-glass-80568220/#content' },
  ],
})

tableLamp.set('SIMRISHAMN-Table-lamp', {
  name: 'SIMRISHAMN Table lamp',
  category: 'table',
  width: 6,
  depth: 12,
  height: 17,
  measurements: `Length : 12
    Width : 6
    Height : 17`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/simrishamn-table-lamp-chrome-plated-opal-glass__0789483_pe763998_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/simrishamn-table-lamp-chrome-plated-opal-glass-40437684/#content',
  price: 99.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'chromePlatedOpalGlass17',
  variants: [
    { variantId: 'chromePlatedOpalGlass17', label: 'chrome plated/opal glass, 17 "', hex: '#d3d4d2', price: 99.99, imageUrl: 'https://www.ikea.com/us/en/images/products/simrishamn-table-lamp-chrome-plated-opal-glass__0789483_pe763998_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/simrishamn-table-lamp-chrome-plated-opal-glass-40437684/#content' },
  ],
})

tableLamp.set('TVARFOT-Table-lamp', {
  name: 'TVÄRFOT Table lamp',
  category: 'table',
  width: null,
  depth: null,
  height: 9,
  measurements: `Shade width : 6
    Height : 9
    Base diameter : 3`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/tvaerfot-table-lamp-black-white__0772757_pe756087_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/tvaerfot-table-lamp-black-white-00467526/#content',
  price: 14.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'blackWhite',
  variants: [
    { variantId: 'blackWhite', label: 'black/white', hex: '#d1d2d1', price: 14.99, imageUrl: 'https://www.ikea.com/us/en/images/products/tvaerfot-table-lamp-black-white__0772757_pe756087_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/tvaerfot-table-lamp-black-white-00467526/#content' },
  ],
})

tableLamp.set('SNOBYAR-Table-lamp', {
  name: 'SNÖBYAR Table lamp',
  category: 'table',
  width: null,
  depth: null,
  height: 20,
  measurements: `Shade width : 13
    Height : 20
    Base diameter : 6`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/snoebyar-table-lamp-gray-turquoise-ceramic-gray__0952098_pe801573_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/snoebyar-table-lamp-gray-turquoise-ceramic-gray-20459846/#content',
  price: 99.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'grayTurquoiseCeramicGray20',
  variants: [
    { variantId: 'grayTurquoiseCeramicGray20', label: 'gray-turquoise ceramic/gray, 20 "', hex: '#c9c6b7', price: 99.99, imageUrl: 'https://www.ikea.com/us/en/images/products/snoebyar-table-lamp-gray-turquoise-ceramic-gray__0952098_pe801573_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/snoebyar-table-lamp-gray-turquoise-ceramic-gray-20459846/#content' },
  ],
})

tableLamp.set('KUDDLAVA-Table-lamp', {
  name: 'KUDDLAVA Table lamp',
  category: 'table',
  width: 13,
  depth: 13,
  height: null,
  measurements: `Base diameter : 5
    Diameter : 13
    Total height : 11
    Base height : 7`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/kuddlava-table-lamp-pleated-white__1416209_pe975491_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/kuddlava-table-lamp-pleated-white-10601204/#content',
  price: 19.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'pleatedWhite11',
  variants: [
    { variantId: 'pleatedWhite11', label: 'pleated white, 11 "', hex: '#d6d7d3', price: 19.99, imageUrl: 'https://www.ikea.com/us/en/images/products/kuddlava-table-lamp-pleated-white__1416209_pe975491_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/kuddlava-table-lamp-pleated-white-10601204/#content' },
  ],
})

tableLamp.set('KULGLASS-Bluetooth-speaker-lamp', {
  name: 'KULGLASS Bluetooth speaker lamp',
  category: 'bluetooth',
  width: 11,
  depth: 11,
  height: 15,
  measurements: `Height : 15
    Cord length : 79
    Diameter : 11`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/kulglass-bluetooth-speaker-lamp-red-brown-pink__1479137_pe999934_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/kulglass-bluetooth-speaker-lamp-red-brown-pink-80605294/#content',
  price: 129.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'redBrownPink',
  variants: [
    { variantId: 'redBrownPink', label: 'red brown/pink', hex: '#ebb091', price: 129.99, imageUrl: 'https://www.ikea.com/us/en/images/products/kulglass-bluetooth-speaker-lamp-red-brown-pink__1479137_pe999934_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/kulglass-bluetooth-speaker-lamp-red-brown-pink-80605294/#content' },
    { variantId: 'darkGreen', label: 'dark green', hex: '#303329', price: 129.99, imageUrl: 'https://www.ikea.com/us/en/images/products/kulglass-bluetooth-speaker-lamp-dark-green__1479134_pe999933_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/kulglass-bluetooth-speaker-lamp-dark-green-40605267/#content' },
  ],
})

tableLamp.set('BOJA-Table-lamp', {
  name: 'BÖJA Table lamp',
  category: 'table',
  width: 8,
  depth: 8,
  height: 16,
  measurements: `Height : 16
    Diameter : 8
    Cord length : 93`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/boeja-table-lamp-bamboo-handmade__0606973_pe682643_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/boeja-table-lamp-bamboo-handmade-90155040/#content',
  price: 69.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'bambooHandmade',
  variants: [
    { variantId: 'bambooHandmade', label: 'bamboo/handmade', hex: '#c9956a', price: 69.99, imageUrl: 'https://www.ikea.com/us/en/images/products/boeja-table-lamp-bamboo-handmade__0606973_pe682643_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/boeja-table-lamp-bamboo-handmade-90155040/#content' },
  ],
})

tableLamp.set('VINDKAST-Table-lamp', {
  name: 'VINDKAST Table lamp',
  category: 'table',
  width: 8,
  depth: 8,
  height: null,
  measurements: `Base diameter : 6
    Diameter : 8
    Total height : 10`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/vindkast-table-lamp-white__1152534_pe885404_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/vindkast-table-lamp-white-90539208/#content',
  price: 29.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'white10',
  variants: [
    { variantId: 'white10', label: 'white, 10 "', hex: '#d4d5d3', price: 29.99, imageUrl: 'https://www.ikea.com/us/en/images/products/vindkast-table-lamp-white__1152534_pe885404_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vindkast-table-lamp-white-90539208/#content' },
  ],
})

floorLamp.set('VIDJA-Floor-lamp', {
  name: 'VIDJA Floor lamp',
  category: 'floor',
  width: null,
  depth: null,
  height: 54,
  measurements: `Height : 54
    Shade diameter : 7`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/vidja-floor-lamp-white__0606512_pe682388_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/vidja-floor-lamp-white-10309206/#content',
  price: 69.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'white54',
  variants: [
    { variantId: 'white54', label: 'white, 54 "', hex: '#f2f2ee', price: 69.99, imageUrl: 'https://www.ikea.com/us/en/images/products/vidja-floor-lamp-white__0606512_pe682388_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vidja-floor-lamp-white-10309206/#content' }, // CHECK: hex guessed from color name
  ],
})

tableLamp.set('ISJAKT-LED-floor-uplighter-reading-lamp', {
  name: 'ISJAKT LED floor uplighter/reading lamp',
  category: 'led',
  width: 19.625,
  depth: null,
  height: 70.875,
  measurements: `Height : 70 7/8
    Base diameter : 9 1/2
    Width : 19 5/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/isjakt-led-floor-uplighter-reading-lamp-dimmable-nickel-plated__1006753_pe825819_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/isjakt-led-floor-uplighter-reading-lamp-dimmable-nickel-plated-70459716/#content',
  price: 149.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'dimmableNickelPlated71',
  variants: [
    { variantId: 'dimmableNickelPlated71', label: 'dimmable/nickel plated, 71 "', hex: '#cccccc', price: 149.99, imageUrl: 'https://www.ikea.com/us/en/images/products/isjakt-led-floor-uplighter-reading-lamp-dimmable-nickel-plated__1006753_pe825819_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/isjakt-led-floor-uplighter-reading-lamp-dimmable-nickel-plated-70459716/#content' }, // CHECK: hex unknown, pick one
  ],
})

floorLamp.set('STRALA-Floor-lamp', {
  name: 'STRÅLA Floor lamp',
  category: 'floor',
  width: null,
  depth: null,
  height: 32,
  measurements: `Height : 32
    Shade diameter : 22`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/strala-floor-lamp-snowman__1508438_pe1009526_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/strala-floor-lamp-snowman-10635464/#content',
  price: 29.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'snowman',
  variants: [
    { variantId: 'snowman', label: 'snowman', hex: '#d8d7d4', price: 29.99, imageUrl: 'https://www.ikea.com/us/en/images/products/strala-floor-lamp-snowman__1508438_pe1009526_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strala-floor-lamp-snowman-10635464/#content' },
  ],
})

chandeliers.set('VINTERFINT-Chandelier', {
  name: 'VINTERFINT Chandelier',
  category: 'chandelier',
  width: 25.25,
  depth: 25.25,
  height: 35,
  measurements: `Diameter : 25 1/4
    Height : 35`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/vinterfint-chandelier-for-8-candles-red__1538649_pe1017414_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/vinterfint-chandelier-for-8-candles-red-90637633/#content',
  price: 39.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'for8CandlesRed',
  variants: [
    { variantId: 'for8CandlesRed', label: 'for 8 candles red', hex: '#a8322d', price: 39.99, imageUrl: 'https://www.ikea.com/us/en/images/products/vinterfint-chandelier-for-8-candles-red__1538649_pe1017414_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vinterfint-chandelier-for-8-candles-red-90637633/#content' }, // CHECK: hex guessed from color name
  ],
})

floorLamp.set('HOGVIND-Pendant-lamp-with-3-lamps', {
  name: 'HÖGVIND Pendant lamp with 3 lamps',
  category: 'pendant',
  width: 16,
  depth: null,
  height: 61,
  measurements: `Max. height : 61
    Min. height : 28
    Width : 16`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/hoegvind-pendant-lamp-with-3-lamps-nickel-plated-gray-glass__1045903_pe842765_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/hoegvind-pendant-lamp-with-3-lamps-nickel-plated-gray-glass-50499266/#content',
  price: 179.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'nickelPlatedGrayGlass16',
  variants: [
    { variantId: 'nickelPlatedGrayGlass16', label: 'nickel plated/gray glass, 16 "', hex: '#cfd0cf', price: 179.99, imageUrl: 'https://www.ikea.com/us/en/images/products/hoegvind-pendant-lamp-with-3-lamps-nickel-plated-gray-glass__1045903_pe842765_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hoegvind-pendant-lamp-with-3-lamps-nickel-plated-gray-glass-50499266/#content' },
  ],
})

floorLamp.set('STOCKHOLM-2025-Pendant-lamp', {
  name: 'STOCKHOLM 2025 Pendant lamp',
  category: '2025',
  width: null,
  depth: null,
  height: null,
  measurements: `Min. height : 20
    Shade diameter : 21`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/stockholm-2025-pendant-lamp-glass-brass-plated__1285162_pe933235_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/stockholm-2025-pendant-lamp-glass-brass-plated-20585958/#content',
  price: 299.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'glassBrassPlated21',
  variants: [
    { variantId: 'glassBrassPlated21', label: 'glass/brass plated, 21 "', hex: '#e9eae4', price: 299.99, imageUrl: 'https://www.ikea.com/us/en/images/products/stockholm-2025-pendant-lamp-glass-brass-plated__1285162_pe933235_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/stockholm-2025-pendant-lamp-glass-brass-plated-20585958/#content' },
  ],
})

floorLamp.set('BLASVERK-Pendant-lamp', {
  name: 'BLÅSVERK Pendant lamp',
  category: 'pendant',
  width: 15,
  depth: 15,
  height: 7,
  measurements: `Diameter : 15
    Height : 7
    Shade diameter : 15`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/blasverk-pendant-lamp-beige__1150244_pe884434_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/blasverk-pendant-lamp-beige-30520909/#content',
  price: 49.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'beige15',
  variants: [
    { variantId: 'beige15', label: 'beige, 15 "', hex: '#d1d1cc', price: 49.99, imageUrl: 'https://www.ikea.com/us/en/images/products/blasverk-pendant-lamp-beige__1150244_pe884434_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/blasverk-pendant-lamp-beige-30520909/#content' },
  ],
})

floorLamp.set('JAKOBSBYN-JALLBY-Pendant-lamp', {
  name: 'JAKOBSBYN / JÄLLBY Pendant lamp',
  category: '/',
  width: 12,
  depth: 12,
  height: 10,
  measurements: `Height : 10
    Diameter : 12`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/jakobsbyn-jaellby-pendant-lamp-smoked-glass-brass-plated__1335520_pe947077_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/jakobsbyn-jaellby-pendant-lamp-smoked-glass-brass-plated-s29388128/#content',
  price: 69.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'smokedGlassBrassPlated',
  variants: [
    { variantId: 'smokedGlassBrassPlated', label: 'smoked glass/brass plated', hex: '#cccccc', price: 69.99, imageUrl: 'https://www.ikea.com/us/en/images/products/jakobsbyn-jaellby-pendant-lamp-smoked-glass-brass-plated__1335520_pe947077_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/jakobsbyn-jaellby-pendant-lamp-smoked-glass-brass-plated-s29388128/#content' }, // CHECK: hex unknown, pick one
    { variantId: 'clearGlassNickelPlated', label: 'clear glass/nickel plated', hex: '#cccccc', price: 69.99, imageUrl: 'https://www.ikea.com/us/en/images/products/jakobsbyn-jaellby-pendant-lamp-clear-glass-nickel-plated__1335519_pe947076_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/jakobsbyn-jaellby-pendant-lamp-clear-glass-nickel-plated-s19388119/#content' }, // CHECK: hex unknown, pick one
  ],
})

ceilingsLamp.set('SOLKLINT-Ceiling-lamp', {
  name: 'SOLKLINT Ceiling lamp',
  category: 'ceiling',
  width: 11,
  depth: 11,
  height: 8,
  measurements: `Height : 8
    Diameter : 11`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/solklint-ceiling-lamp-brass-gray-clear-glass__0842293_pe778939_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/solklint-ceiling-lamp-brass-gray-clear-glass-90472038/#content',
  price: 49.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'brassGrayClearGlass11',
  variants: [
    { variantId: 'brassGrayClearGlass11', label: 'brass/gray clear glass, 11 "', hex: '#cfcfcf', price: 49.99, imageUrl: 'https://www.ikea.com/us/en/images/products/solklint-ceiling-lamp-brass-gray-clear-glass__0842293_pe778939_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/solklint-ceiling-lamp-brass-gray-clear-glass-90472038/#content' },
  ],
})

storageChair.set('STRANDMON-Ottoman-with-storage', {
  name: 'STRANDMON Ottoman with storage',
  category: 'ottoman',
  width: 15.75,
  depth: 23.625,
  height: 17.375,
  measurements: `Length : 23 5/8
    Width : 15 3/4
    Height : 17 3/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/strandmon-ottoman-with-storage-tommaboda-deep-beige__1483776_pe1001339_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/strandmon-ottoman-with-storage-tommaboda-deep-beige-80613185/#content',
  price: 150,
  styleTags: [], // fill in by hand
  defaultVariant: 'tommabodaDeepBeige',
  variants: [
    { variantId: 'tommabodaDeepBeige', label: 'Tommaboda deep beige', hex: '#b9ac94', price: 150, imageUrl: 'https://www.ikea.com/us/en/images/products/strandmon-ottoman-with-storage-tommaboda-deep-beige__1483776_pe1001339_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strandmon-ottoman-with-storage-tommaboda-deep-beige-80613185/#content' },
    { variantId: 'nordvallaDarkGray', label: 'Nordvalla dark gray', hex: '#555756', price: 100, imageUrl: 'https://www.ikea.com/us/en/images/products/strandmon-ottoman-with-storage-nordvalla-dark-gray__1483779_pe1001340_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strandmon-ottoman-with-storage-nordvalla-dark-gray-30621357/#content' }, // CHECK: size differs from main product
    { variantId: 'sulvikenBlueBeige', label: 'Sulviken blue/beige', hex: '#8f938b', price: 100, imageUrl: 'https://www.ikea.com/us/en/images/products/strandmon-ottoman-with-storage-sulviken-blue-beige__1483778_pe1001341_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strandmon-ottoman-with-storage-sulviken-blue-beige-40613192/#content' },
    { variantId: 'tibblebyYellow', label: 'Tibbleby yellow', hex: '#d9b666', price: 100, imageUrl: 'https://www.ikea.com/us/en/images/products/strandmon-ottoman-with-storage-tibbleby-yellow__1483777_pe1001342_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strandmon-ottoman-with-storage-tibbleby-yellow-80613190/#content' },
    { variantId: 'tallidenBeigeBrown', label: 'Talliden beige/brown', hex: '#746a55', price: 150, imageUrl: 'https://www.ikea.com/us/en/images/products/strandmon-ottoman-with-storage-talliden-beige-brown__1543838_pe1018953_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strandmon-ottoman-with-storage-talliden-beige-brown-40628947/#content' },
    { variantId: 'tommabodaBrownRed', label: 'Tommaboda brown-red', hex: '#732517', price: 150, imageUrl: 'https://www.ikea.com/us/en/images/products/strandmon-ottoman-with-storage-tommaboda-brown-red__1483775_pe1001338_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/strandmon-ottoman-with-storage-tommaboda-brown-red-70613195/#content' },
  ],
})

storageChair.set('VIMLE-Ottoman-with-storage', {
  name: 'VIMLE Ottoman with storage',
  category: 'ottoman',
  width: 28.75,
  depth: 38.625,
  height: 18.875,
  measurements: `Height under furniture : 2 3/8
    Height : 18 7/8
    Length : 38 5/8
    Width : 28 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-johanneshov-dark-gray__1545234_pe1019642_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-johanneshov-dark-gray-s49632073/#content',
  price: 399,
  styleTags: [], // fill in by hand
  defaultVariant: 'johanneshovDarkGray',
  variants: [
    { variantId: 'johanneshovDarkGray', label: 'Johanneshov dark gray', hex: '#4d4f50', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-johanneshov-dark-gray__1545234_pe1019642_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-johanneshov-dark-gray-s49632073/#content' },
    { variantId: 'gunnaredBeige', label: 'Gunnared beige', hex: '#b7b1a7', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-gunnared-beige__0514351_pe639432_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-gunnared-beige-s09657051/#content' },
    { variantId: 'gunnaredMediumGray', label: 'Gunnared medium gray', hex: '#4b4a4f', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-gunnared-medium-gray__0514353_pe639449_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-gunnared-medium-gray-s89657052/#content' },
    { variantId: 'kelingeBeige', label: 'Kelinge beige', hex: '#a39785', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-kelinge-beige__1545231_pe1019646_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-kelinge-beige-s79632062/#content' },
    { variantId: 'kelingeDarkBlue', label: 'Kelinge dark blue', hex: '#122533', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-kelinge-dark-blue__1545229_pe1019644_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-kelinge-dark-blue-s09632065/#content' },
    { variantId: 'knabackGrayGreen', label: 'Knäbäck gray-green', hex: '#546453', price: 379, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-knaebaeck-gray-green__1545230_pe1019645_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-knaebaeck-gray-green-s59632044/#content' },
    { variantId: 'knabackLightBeige', label: 'Knäbäck light beige', hex: '#d2cbb8', price: 379, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-knaebaeck-light-beige__1545228_pe1019643_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-knaebaeck-light-beige-s19632041/#content' },
    { variantId: 'johanneshovBrownBeige', label: 'Johanneshov brown-beige', hex: '#786c5a', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-johanneshov-brown-beige__1545225_pe1019640_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-johanneshov-brown-beige-s79632038/#content' },
    { variantId: 'johanneshovOffWhite', label: 'Johanneshov off-white', hex: '#d9d7c7', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-johanneshov-off-white__1545227_pe1019648_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-johanneshov-off-white-s49632068/#content' },
    { variantId: 'mosshedDarkBrown', label: 'Mosshed dark-brown', hex: '#463728', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-mosshed-dark-brown__1545232_pe1019636_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-mosshed-dark-brown-s79632081/#content' },
    { variantId: 'mosshedGrayGreen', label: 'Mosshed gray-green', hex: '#6e755a', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/vimle-ottoman-with-storage-mosshed-gray-green__1545226_pe1019641_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vimle-ottoman-with-storage-mosshed-gray-green-s39632078/#content' },
  ],
})

sofas.set('MORABO-Ottoman', {
  name: 'MORABO Ottoman',
  category: 'ottoman',
  width: 25.625,
  depth: 30.375,
  height: 18.5,
  measurements: `Length : 30 3/8
    Width : 25 5/8
    Height : 18 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-ottoman-djuparp-dark-blue-wood__0990453_pe818966_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/morabo-ottoman-djuparp-dark-blue-wood-s09416504/#content',
  price: null,
  styleTags: [], // fill in by hand
  defaultVariant: 'djuparpDarkBlueWood',
  variants: [
    { variantId: 'djuparpDarkBlueWood', label: 'Djuparp dark blue/wood', hex: '#121727', price: null, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-ottoman-djuparp-dark-blue-wood__0990453_pe818966_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-ottoman-djuparp-dark-blue-wood-s09416504/#content' }, // CHECK: price not found
    { variantId: 'gunnaredDarkGrayWood', label: 'Gunnared dark gray/wood', hex: '#514f51', price: 249, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-ottoman-gunnared-dark-gray-wood__0602065_pe680129_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-ottoman-gunnared-dark-gray-wood-s69318317/#content' },
    { variantId: 'gunnaredLightGreenWood', label: 'Gunnared light green/wood', hex: '#a5a99a', price: 249, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-ottoman-gunnared-light-green-wood__0602077_pe680138_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-ottoman-gunnared-light-green-wood-s89318335/#content' },
    { variantId: 'djuparpDarkBlueMetal', label: 'Djuparp dark blue/metal', hex: '#141927', price: null, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-ottoman-djuparp-dark-blue-metal__0990450_pe818963_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-ottoman-djuparp-dark-blue-metal-s29416503/#content' }, // CHECK: price not found
  ],
})

sofas.set('UPPAKRA-Ottoman', {
  name: 'UPPÅKRA Ottoman',
  category: 'ottoman',
  width: 49.625,
  depth: 30.375,
  height: 18.125,
  measurements: `Width : 49 5/8
    Depth : 30 3/8
    Height : 18 1/8
    Height under furniture : 5 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/uppakra-ottoman-axvall-dark-gray-blue__1478570_pe999617_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/uppakra-ottoman-axvall-dark-gray-blue-s29619379/#content',
  price: 319,
  styleTags: [], // fill in by hand
  defaultVariant: 'axvallDarkGrayBlue',
  variants: [
    { variantId: 'axvallDarkGrayBlue', label: 'Axvall dark gray-blue', hex: '#476572', price: 319, imageUrl: 'https://www.ikea.com/us/en/images/products/uppakra-ottoman-axvall-dark-gray-blue__1478570_pe999617_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppakra-ottoman-axvall-dark-gray-blue-s29619379/#content' },
    { variantId: 'axvallOffWhite', label: 'Axvall off-white', hex: '#d5d4c8', price: 319, imageUrl: 'https://www.ikea.com/us/en/images/products/uppakra-ottoman-axvall-off-white__1478567_pe999608_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppakra-ottoman-axvall-off-white-s89619376/#content' },
    { variantId: 'johanneshovBrownBeige', label: 'Johanneshov brown-beige', hex: '#92866c', price: 369, imageUrl: 'https://www.ikea.com/us/en/images/products/uppakra-ottoman-johanneshov-brown-beige__1478563_pe999604_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppakra-ottoman-johanneshov-brown-beige-s19619370/#content' },
    { variantId: 'johanneshovDarkGray', label: 'Johanneshov dark gray', hex: '#595a5b', price: 369, imageUrl: 'https://www.ikea.com/us/en/images/products/uppakra-ottoman-johanneshov-dark-gray__1478578_pe999615_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppakra-ottoman-johanneshov-dark-gray-s59619373/#content' },
    { variantId: 'samsalaDarkBlue', label: 'Samsala dark blue', hex: '#183649', price: 369, imageUrl: 'https://www.ikea.com/us/en/images/products/uppakra-ottoman-samsala-dark-blue__1478571_pe999610_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppakra-ottoman-samsala-dark-blue-s09619380/#content' },
    { variantId: 'axvallDarkGrayBlue6', label: 'Axvall dark gray-blue', hex: '#466572', price: 319, imageUrl: 'https://www.ikea.com/us/en/images/products/uppakra-ottoman-axvall-dark-gray-blue__1478576_pe999613_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppakra-ottoman-axvall-dark-gray-blue-s69619358/#content' },
  ],
})

armchairs.set('UPPLAND-Armchair', {
  name: 'UPPLAND Armchair',
  category: 'armchair',
  width: 43.25,
  depth: 36.25,
  height: null,
  measurements: `Width : 43 1/4
    Depth : 36 1/4
    Seat depth : 22 7/8
    Seat height : 18 1/2
    Height including back cushions : 36 1/4
    Backrest height : 29 7/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-blekinge-white__0818464_pe774419_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-blekinge-white-s89384108/#content',
  price: 529,
  styleTags: [], // fill in by hand
  defaultVariant: 'blekingeWhite',
  variants: [
    { variantId: 'blekingeWhite', label: 'Blekinge white', hex: '#eae9e3', price: 529, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-blekinge-white__0818464_pe774419_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-blekinge-white-s89384108/#content' },
    { variantId: 'hakeboDarkGray', label: 'Hakebo dark gray', hex: '#53544e', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-hakebo-dark-gray__1242740_pe920368_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-hakebo-dark-gray-s09553845/#content' }, // CHECK: size differs from main product
    { variantId: 'hakeboGrayGreen', label: 'Hakebo gray-green', hex: '#737865', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-hakebo-gray-green__1242744_pe920354_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-hakebo-gray-green-s19553840/#content' }, // CHECK: size differs from main product
    { variantId: 'kilandaDarkBlue', label: 'Kilanda dark blue', hex: '#262e35', price: 529, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-kilanda-dark-blue__1242728_pe920356_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-kilanda-dark-blue-s39553839/#content' }, // CHECK: size differs from main product
    { variantId: 'kilandaLightBeige', label: 'Kilanda light beige', hex: '#d3c8b6', price: 529, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-kilanda-light-beige__1242736_pe920364_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-kilanda-light-beige-s79553842/#content' }, // CHECK: size differs from main product
    { variantId: 'karlshovBeigeMulticolor', label: 'Karlshov beige/multicolor', hex: '#97918b', price: 549, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-karlshov-beige-multicolor__1242732_pe920360_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-karlshov-beige-multicolor-s59553838/#content' }, // CHECK: size differs from main product
    { variantId: 'kelingeAnthracite', label: 'Kelinge anthracite', hex: '#4e4e4f', price: 549, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-kelinge-anthracite__1293273_pe935146_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-kelinge-anthracite-s49553848/#content' }, // CHECK: size differs from main product
    { variantId: 'kelingeBeige', label: 'Kelinge beige', hex: '#b1a699', price: 549, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-kelinge-beige__1293279_pe935152_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-kelinge-beige-s89553846/#content' }, // CHECK: size differs from main product
    { variantId: 'kelingeGrayTurquoise', label: 'Kelinge gray-turquoise', hex: '#33534f', price: 549, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-kelinge-gray-turquoise__1293276_pe935155_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-kelinge-gray-turquoise-s39567006/#content' }, // CHECK: size differs from main product
    { variantId: 'kelingeRust', label: 'Kelinge rust', hex: '#b26a51', price: 549, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-kelinge-rust__1293282_pe935149_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-kelinge-rust-s59553843/#content' }, // CHECK: size differs from main product
    { variantId: 'hillaredAnthracite', label: 'Hillared anthracite', hex: '#2c2c2f', price: 579, imageUrl: 'https://www.ikea.com/us/en/images/products/uppland-armchair-hillared-anthracite__0779158_pe759285_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/uppland-armchair-hillared-anthracite-s79553837/#content' }, // CHECK: size differs from main product
  ],
})

armchairs.set('LILLESATER-Swivel-chair', {
  name: 'LILLESÄTER Swivel chair',
  category: 'chair',
  width: 27.5,
  depth: 31.125,
  height: 28,
  measurements: `Depth : 31 1/8
    Height : 28
    Seat depth : 20 7/8
    Seat height : 16 1/2
    Width : 27 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/lillesaeter-swivel-chair-axvall-off-white__1480271_pe1000171_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/lillesaeter-swivel-chair-axvall-off-white-40618689/#content',
  price: 399,
  styleTags: [], // fill in by hand
  defaultVariant: 'axvallOffWhite',
  variants: [
    { variantId: 'axvallOffWhite', label: 'Axvall off-white', hex: '#d6d4c7', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/lillesaeter-swivel-chair-axvall-off-white__1480271_pe1000171_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/lillesaeter-swivel-chair-axvall-off-white-40618689/#content' },
    { variantId: 'gunnaredDarkBlue', label: 'Gunnared dark blue', hex: '#376695', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/lillesaeter-swivel-chair-gunnared-dark-blue__1480270_pe1000172_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/lillesaeter-swivel-chair-gunnared-dark-blue-50618491/#content' },
  ],
})

armchairs.set('SALTSJOBADEN-Armchair', {
  name: 'SALTSJÖBADEN Armchair',
  category: 'armchair',
  width: 36.625,
  depth: 34.625,
  height: 35.375,
  measurements: `Width : 36 5/8
    Depth : 34 5/8
    Height : 35 3/8
    Height under furniture : 6 3/4
    Seat width : 27 1/8
    Seat depth : 21 5/8
    Seat height : 18 1/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-vittangi-light-beige-white__1489508_pe1003833_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-vittangi-light-beige-white-s79656581/#content',
  price: 299,
  styleTags: [], // fill in by hand
  defaultVariant: 'vittangiLightBeigeWhite',
  variants: [
    { variantId: 'vittangiLightBeigeWhite', label: 'Vittangi light beige/white', hex: '#d3cbb7', price: 299, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-vittangi-light-beige-white__1489508_pe1003833_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-vittangi-light-beige-white-s79656581/#content' },
    { variantId: 'blekingeWhite', label: 'Blekinge white', hex: '#edece3', price: 299, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-blekinge-white__1421508_pe977697_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-blekinge-white-s59578565/#content' },
    { variantId: 'tonerudGray', label: 'Tonerud gray', hex: '#939690', price: 319, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-tonerud-gray__1421502_pe977695_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-tonerud-gray-s99578568/#content' },
    { variantId: 'tonerudRedBrown', label: 'Tonerud red-brown', hex: '#ad5934', price: 319, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-tonerud-red-brown__1421501_pe977694_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-tonerud-red-brown-s19578567/#content' },
    { variantId: 'fridtunaDarkGrayBlue', label: 'Fridtuna dark gray-blue', hex: '#556e75', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-fridtuna-dark-gray-blue__1571032_pe1030031_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-fridtuna-dark-gray-blue-s89599590/#content' },
    { variantId: 'vittangiLightBeigeWhite6', label: 'Vittangi light beige/white', hex: '#d3cbb7', price: 299, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-vittangi-light-beige-white__1498222_pe1006257_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-vittangi-light-beige-white-s99656580/#content' }, // CHECK: size differs from main product
    { variantId: 'vittangiLightBeigeWhite7', label: 'Vittangi light beige/white', hex: '#d3cbb7', price: 299, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-vittangi-light-beige-white__1513148_pe1010627_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-vittangi-light-beige-white-s19656579/#content' }, // CHECK: size differs from main product
  ],
})

armchairs.set('SALTSJOBADEN-Armchair', {
  name: 'SALTSJÖBADEN Armchair',
  category: 'armchair',
  width: 36.625,
  depth: 34.625,
  height: 35.375,
  measurements: `Width : 36 5/8
    Depth : 34 5/8
    Height : 35 3/8
    Height under furniture : 6 3/4
    Seat width : 27 1/8
    Seat depth : 21 5/8
    Seat height : 18 1/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-fridtuna-dark-gray-blue__1571032_pe1030031_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-fridtuna-dark-gray-blue-s89599590/#content',
  price: 349,
  styleTags: [], // fill in by hand
  defaultVariant: 'fridtunaDarkGrayBlue',
  variants: [
    { variantId: 'fridtunaDarkGrayBlue', label: 'Fridtuna dark gray-blue', hex: '#556e75', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-fridtuna-dark-gray-blue__1571032_pe1030031_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-fridtuna-dark-gray-blue-s89599590/#content' },
    { variantId: 'blekingeWhite', label: 'Blekinge white', hex: '#edece3', price: 299, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-blekinge-white__1421508_pe977697_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-blekinge-white-s59578565/#content' },
    { variantId: 'vittangiLightBeigeWhite', label: 'Vittangi light beige/white', hex: '#d3cbb7', price: 299, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-vittangi-light-beige-white__1489508_pe1003833_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-vittangi-light-beige-white-s79656581/#content' },
    { variantId: 'tonerudGray', label: 'Tonerud gray', hex: '#939690', price: 319, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-tonerud-gray__1421502_pe977695_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-tonerud-gray-s99578568/#content' },
    { variantId: 'tonerudRedBrown', label: 'Tonerud red-brown', hex: '#ad5934', price: 319, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-tonerud-red-brown__1421501_pe977694_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-tonerud-red-brown-s19578567/#content' },
    { variantId: 'fridtunaDarkGrayBlue6', label: 'Fridtuna dark gray-blue', hex: '#556e75', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-fridtuna-dark-gray-blue__1571259_pe1030157_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-fridtuna-dark-gray-blue-s19622706/#content' }, // CHECK: size differs from main product
    { variantId: 'fridtunaDarkGrayBlue7', label: 'Fridtuna dark gray-blue', hex: '#556e75', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/saltsjoebaden-armchair-fridtuna-dark-gray-blue__1571297_pe1030170_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/saltsjoebaden-armchair-fridtuna-dark-gray-blue-s79627616/#content' },
  ],
})

sofas.set('OSKARSHAMN-Wing-chair-with-ottoman', {
  name: 'OSKARSHAMN Wing chair with ottoman',
  category: 'chair',
  width: null,
  depth: null,
  height: 21,
  measurements: `Height : 21`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/oskarshamn-wing-chair-with-ottoman-tibbleby-beige-gray__1123966_pe874941_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/oskarshamn-wing-chair-with-ottoman-tibbleby-beige-gray-s79485339/#content',
  price: 599,
  styleTags: [], // fill in by hand
  defaultVariant: 'tibblebyBeigeGray',
  variants: [
    { variantId: 'tibblebyBeigeGray', label: 'Tibbleby beige/gray', hex: '#717171', price: 599, imageUrl: 'https://www.ikea.com/us/en/images/products/oskarshamn-wing-chair-with-ottoman-tibbleby-beige-gray__1123966_pe874941_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/oskarshamn-wing-chair-with-ottoman-tibbleby-beige-gray-s79485339/#content' },
    { variantId: 'gunnaredBlackGray', label: 'Gunnared black/gray', hex: '#2b2d2d', price: 699, imageUrl: 'https://www.ikea.com/us/en/images/products/oskarshamn-wing-chair-with-ottoman-gunnared-black-gray__1123967_pe874940_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/oskarshamn-wing-chair-with-ottoman-gunnared-black-gray-s29485332/#content' },
    { variantId: 'tonerudRed', label: 'Tonerud red', hex: '#b02f33', price: 699, imageUrl: 'https://www.ikea.com/us/en/images/products/oskarshamn-wing-chair-with-ottoman-tonerud-red__1123965_pe874939_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/oskarshamn-wing-chair-with-ottoman-tonerud-red-s49485345/#content' },
  ],
})

armchairs.set('MORABO-Armchair', {
  name: 'MORABO Armchair',
  category: 'armchair',
  width: 35.875,
  depth: 36.25,
  height: 31.875,
  measurements: `Width : 35 7/8
    Depth : 36 1/4
    Height : 31 7/8
    Height under furniture : 6 1/4
    Armrest width : 5 1/8
    Seat width : 25 5/8
    Seat depth : 24
    Seat height : 18 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-armchair-gunnared-dark-gray-wood__0602087_pe680155_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/morabo-armchair-gunnared-dark-gray-wood-s59318308/#content',
  price: 399,
  styleTags: [], // fill in by hand
  defaultVariant: 'gunnaredDarkGrayWood',
  variants: [
    { variantId: 'gunnaredDarkGrayWood', label: 'Gunnared dark gray/wood', hex: '#535254', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-armchair-gunnared-dark-gray-wood__0602087_pe680155_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-armchair-gunnared-dark-gray-wood-s59318308/#content' },
    { variantId: 'gunnaredLightGreenWood', label: 'Gunnared light green/wood', hex: '#b2b7a9', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-armchair-gunnared-light-green-wood__0602091_pe680160_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-armchair-gunnared-light-green-wood-s59318327/#content' },
    { variantId: 'gunnaredDarkGrayMetal', label: 'Gunnared dark gray/metal', hex: '#535254', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/morabo-armchair-gunnared-dark-gray-metal__0602085_pe680153_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/morabo-armchair-gunnared-dark-gray-metal-s79318307/#content' },
  ],
})

armchairs.set('HERRAKRA-Armchair', {
  name: 'HERRÅKRA Armchair',
  category: 'armchair',
  width: 28,
  depth: 26,
  height: 28.75,
  measurements: `Width : 28
    Depth : 26
    Height : 28 3/4
    Height under furniture : 7 1/2
    Armrest height : 28
    Seat width : 19 1/4
    Seat depth : 17 3/4
    Seat height : 17 3/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/herrakra-armchair-vissle-gray__1213671_pe911201_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/herrakra-armchair-vissle-gray-70544734/#content',
  price: 199.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'vissleGray',
  variants: [
    { variantId: 'vissleGray', label: 'Vissle gray', hex: '#717171', price: 199.99, imageUrl: 'https://www.ikea.com/us/en/images/products/herrakra-armchair-vissle-gray__1213671_pe911201_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/herrakra-armchair-vissle-gray-70544734/#content' },
    { variantId: 'diserodDarkYellow', label: 'Diseröd dark yellow', hex: '#b3914c', price: 199.99, imageUrl: 'https://www.ikea.com/us/en/images/products/herrakra-armchair-diseroed-dark-yellow__1213667_pe911203_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/herrakra-armchair-diseroed-dark-yellow-40535547/#content' },
    { variantId: 'skulstaBlack', label: 'Skulsta black', hex: '#2d3131', price: 199.99, imageUrl: 'https://www.ikea.com/us/en/images/products/herrakra-armchair-skulsta-black__1213663_pe911199_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/herrakra-armchair-skulsta-black-60535551/#content' },
  ],
})

armchairs.set('VENNGARN-1-5-seat-armchair', {
  name: 'VENNGARN 1.5-seat armchair',
  category: 'armchair',
  width: 49.625,
  depth: 42.875,
  height: 37.75,
  measurements: `Depth : 42 7/8
    Height : 37 3/4
    Seat depth : 27 1/2
    Seat height : 20 7/8
    Seat width : 30 3/4
    Width : 49 5/8
    Height under furniture : 3 1/8
    Armrest width : 10 1/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/venngarn-1-5-seat-armchair-johanneshov-off-white__1576844_pe1032757_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/venngarn-1-5-seat-armchair-johanneshov-off-white-30641911/#content',
  price: 899,
  styleTags: [], // fill in by hand
  defaultVariant: 'johanneshovOffWhite',
  variants: [
    { variantId: 'johanneshovOffWhite', label: 'Johanneshov off-white', hex: '#d5d4ce', price: 899, imageUrl: 'https://www.ikea.com/us/en/images/products/venngarn-1-5-seat-armchair-johanneshov-off-white__1576844_pe1032757_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/venngarn-1-5-seat-armchair-johanneshov-off-white-30641911/#content' },
    { variantId: 'johanneshovBrownBeige', label: 'Johanneshov brown-beige', hex: '#a8998b', price: 899, imageUrl: 'https://www.ikea.com/us/en/images/products/venngarn-1-5-seat-armchair-johanneshov-brown-beige__1576877_pe1032790_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/venngarn-1-5-seat-armchair-johanneshov-brown-beige-50632637/#content' },
    { variantId: 'johanneshovDarkGreen', label: 'Johanneshov dark green', hex: '#2b362b', price: 899, imageUrl: 'https://www.ikea.com/us/en/images/products/venngarn-1-5-seat-armchair-johanneshov-dark-green__1576792_pe1032712_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/venngarn-1-5-seat-armchair-johanneshov-dark-green-70632684/#content' },
  ],
})

armchairs.set('NORDKROKEN-Rocking-and-swivel-armchair', {
  name: 'NORDKROKEN Rocking and swivel armchair',
  category: 'armchair',
  width: 28.375,
  depth: 33.5,
  height: 32.625,
  measurements: `Width : 28 3/8
    Depth : 33 1/2
    Height : 32 5/8
    Seat height : 17 3/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/nordkroken-rocking-and-swivel-armchair-gransel-natural__1543934_pe1018997_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/nordkroken-rocking-and-swivel-armchair-gransel-natural-s89649811/#content',
  price: 499,
  styleTags: [], // fill in by hand
  defaultVariant: 'granselNatural',
  variants: [
    { variantId: 'granselNatural', label: 'Gransel natural', hex: '#e4dacf', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/nordkroken-rocking-and-swivel-armchair-gransel-natural__1543934_pe1018997_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/nordkroken-rocking-and-swivel-armchair-gransel-natural-s89649811/#content' },
    { variantId: 'granselGrayBrown', label: 'Gransel gray-brown', hex: '#585046', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/nordkroken-rocking-and-swivel-armchair-gransel-gray-brown__1543935_pe1018996_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/nordkroken-rocking-and-swivel-armchair-gransel-gray-brown-s29649809/#content' },
  ],
})

armchairs.set('ROCKSJON-Armchair', {
  name: 'ROCKSJÖN Armchair',
  category: 'armchair',
  width: 29.875,
  depth: 30.75,
  height: 31.5,
  measurements: `Width : 29 7/8
    Depth : 30 3/4
    Height : 31 1/2
    Height under furniture : 7 7/8
    Seat width : 19 5/8
    Seat depth : 19 5/8
    Seat height : 18 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/rocksjoen-armchair-blekinge-white__1247358_pe922626_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/rocksjoen-armchair-blekinge-white-s69508850/#content',
  price: null,
  styleTags: [], // fill in by hand
  defaultVariant: 'blekingeWhite',
  variants: [
    { variantId: 'blekingeWhite', label: 'Blekinge white', hex: '#d7d6cc', price: null, imageUrl: 'https://www.ikea.com/us/en/images/products/rocksjoen-armchair-blekinge-white__1247358_pe922626_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/rocksjoen-armchair-blekinge-white-s69508850/#content' }, // CHECK: price not found
    { variantId: 'kilandaLightBeige', label: 'Kilanda light beige', hex: '#eee7d7', price: null, imageUrl: 'https://www.ikea.com/us/en/images/products/rocksjoen-armchair-kilanda-light-beige__1247350_pe922624_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/rocksjoen-armchair-kilanda-light-beige-s49508851/#content' }, // CHECK: price not found
    { variantId: 'klovstaGrayWhite', label: 'Klovsta gray/white', hex: '#d1d0cf', price: null, imageUrl: 'https://www.ikea.com/us/en/images/products/rocksjoen-armchair-klovsta-gray-white__1247354_pe922628_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/rocksjoen-armchair-klovsta-gray-white-s09514694/#content' }, // CHECK: price not found
  ],
})
beds.set('TARVA-Bed-frame', {
  name: 'TARVA Bed frame',
  category: 'bed',
  width: null,
  depth: null,
  height: null,
  measurements: `Thickness : 7 7/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/tarva-bed-frame-pine-luroey__1102036_pe866857_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/tarva-bed-frame-pine-luroey-s29007794/#content',
  price: 199,
  styleTags: [], // fill in by hand
  defaultVariant: 'pineLuroyQueen',
  variants: [
    { variantId: 'pineLuroyQueen', label: 'pine/Luröy, Queen', hex: '#4a4f51', price: 199, imageUrl: 'https://www.ikea.com/us/en/images/products/tarva-bed-frame-pine-luroey__1102036_pe866857_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/tarva-bed-frame-pine-luroey-s29007794/#content' },
    { variantId: 'whiteStainedLuroyQueen', label: 'white stained/Luröy, Queen', hex: '#706556', price: 199, imageUrl: 'https://www.ikea.com/us/en/images/products/tarva-bed-frame-white-stained-luroey__1273535_pe930091_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/tarva-bed-frame-white-stained-luroey-s59553956/#content' },
    { variantId: 'pineLuroyFull', label: 'pine/Luröy, Full', hex: '#4a4f51', price: 179, imageUrl: 'https://www.ikea.com/us/en/images/products/tarva-bed-frame-pine-luroey__1102036_pe866857_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/tarva-bed-frame-pine-luroey-s29069796/#content' },
    { variantId: 'pineLuroyKing', label: 'pine/Luröy, King', hex: '#4a4f51', price: 249, imageUrl: 'https://www.ikea.com/us/en/images/products/tarva-bed-frame-pine-luroey__1102036_pe866857_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/tarva-bed-frame-pine-luroey-s09418584/#content' },
  ],
})

beds.set('MALM-Bed-frame', {
  name: 'MALM Bed frame',
  category: 'bed',
  width: null,
  depth: null,
  height: null,
  measurements: `Thickness : 9 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/malm-bed-frame-dark-brown-veneer-luroey__1364773_pe956029_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/malm-bed-frame-dark-brown-veneer-luroey-s09574348/#content',
  price: 399,
  styleTags: [], // fill in by hand
  defaultVariant: 'darkBrownVeneerLuroyKing',
  variants: [
    { variantId: 'darkBrownVeneerLuroyKing', label: 'dark-brown veneer/Luröy, King', hex: '#363229', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-bed-frame-dark-brown-veneer-luroey__1364773_pe956029_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-bed-frame-dark-brown-veneer-luroey-s09574348/#content' },
    { variantId: 'oakVeneerLuroyKing', label: 'oak veneer/Luröy, King', hex: '#74736e', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-bed-frame-oak-veneer-luroey__1364778_pe956034_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-bed-frame-oak-veneer-luroey-s59574398/#content' },
    { variantId: 'whiteLuroyKing', label: 'white/Luröy, King', hex: '#93938e', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-bed-frame-white-luroey__1101527_pe866706_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-bed-frame-white-luroey-s49009481/#content' },
    { variantId: 'darkBrownVeneerLuroyFull', label: 'dark-brown veneer/Luröy, Full', hex: '#363229', price: 269, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-bed-frame-dark-brown-veneer-luroey__1364773_pe956029_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-bed-frame-dark-brown-veneer-luroey-s29574352/#content' },
    { variantId: 'darkBrownVeneerLuroyQueen', label: 'dark-brown veneer/Luröy, Queen', hex: '#363229', price: 299, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-bed-frame-dark-brown-veneer-luroey__1364773_pe956029_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-bed-frame-dark-brown-veneer-luroey-s49574365/#content' },
  ],
})

beds.set('MALM-High-bed-frame-2-storage-boxes', {
  name: 'MALM High bed frame/2 storage boxes',
  category: 'bed',
  width: null,
  depth: null,
  height: null,
  measurements: `Thickness : 7 7/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-white-luroey__1101597_pe866769_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-2-storage-boxes-white-luroey-s79175978/#content',
  price: 399,
  styleTags: [], // fill in by hand
  defaultVariant: 'whiteLuroyQueen',
  variants: [
    { variantId: 'whiteLuroyQueen', label: 'white/Luröy, Queen', hex: '#92918e', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-white-luroey__1101597_pe866769_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-2-storage-boxes-white-luroey-s79175978/#content' },
    { variantId: 'darkBrownVeneerQueen', label: 'dark-brown veneer, Queen', hex: '#74726a', price: 349, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-dark-brown-veneer__1364749_pe956009_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-2-storage-boxes-dark-brown-veneer-s19574381/#content' },
    { variantId: 'darkBrownVeneerLuroyQueen', label: 'dark-brown veneer/Luröy, Queen', hex: '#74726a', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-dark-brown-veneer-luroey__1364749_pe956009_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-2-storage-boxes-dark-brown-veneer-luroey-s79574378/#content' },
    { variantId: 'oakVeneerLuroyQueen', label: 'oak veneer/Luröy, Queen', hex: '#8e8e8c', price: 399, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-oak-veneer-luroey__1364758_pe956003_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-2-storage-boxes-oak-veneer-luroey-s09574414/#content' },
    { variantId: 'whiteLuroyFull', label: 'white/Luröy, Full', hex: '#92918e', price: 369, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-white-luroey__1101597_pe866769_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-2-storage-boxes-white-luroey-s09175986/#content' },
    { variantId: 'whiteLuroyKing', label: 'white/Luröy, King', hex: '#92918e', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-white-luroey__1101597_pe866769_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-2-storage-boxes-white-luroey-s89175973/#content' },
  ],
})

beds.set('VIHALS-Bed-frame-with-2-storage-boxes-white', {
  name: 'VIHALS Bed frame with 2 storage boxes, white',
  category: 'bed',
  width: 62.625,
  depth: 81.875,
  height: null,
  measurements: `Drawer depth (inside) : 21 5/8
    Footboard height : 16 1/8
    Headboard height : 26
    Height of drawer (inside) : 5 1/2
    Length : 81 7/8
    Mattress length : 79 1/2
    Mattress width : 59 7/8
    Width : 62 5/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/vihals-bed-frame-with-2-storage-boxes-white__1448740_pe989650_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/vihals-bed-frame-with-2-storage-boxes-white-s49634736/#content',
  price: 189,
  styleTags: [], // fill in by hand
  defaultVariant: 'queen',
  variants: [
    { variantId: 'queen', label: 'Queen', hex: '#716557', price: 189, imageUrl: 'https://www.ikea.com/us/en/images/products/vihals-bed-frame-with-2-storage-boxes-white__1448740_pe989650_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vihals-bed-frame-with-2-storage-boxes-white-s49634736/#content' },
    { variantId: 'fullDouble', label: 'Full/Double', hex: '#716557', price: 179, imageUrl: 'https://www.ikea.com/us/en/images/products/vihals-bed-frame-with-2-storage-boxes-white__1448740_pe989650_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vihals-bed-frame-with-2-storage-boxes-white-s69634735/#content' }, // CHECK: size differs from main product
  ],
})

beds.set('VIHALS-Bed-frame-with-4-storage-boxes-white-Luroy', {
  name: 'VIHALS Bed frame with 4 storage boxes, white/Luröy',
  category: 'bed',
  width: 55.5,
  depth: 77.125,
  height: null,
  measurements: `Drawer depth (inside) : 21 5/8
    Footboard height : 16 1/8
    Headboard height : 26
    Height of drawer (inside) : 5 1/2
    Length : 77 1/8
    Mattress length : 74 3/4
    Mattress width : 53 1/8
    Width : 55 1/2`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/vihals-bed-frame-with-4-storage-boxes-white-luroey__1448765_pe989651_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/vihals-bed-frame-with-4-storage-boxes-white-luroey-s39582002/#content',
  price: 279,
  styleTags: [], // fill in by hand
  defaultVariant: 'fullDouble',
  variants: [
    { variantId: 'fullDouble', label: 'Full/Double', hex: '#999187', price: 279, imageUrl: 'https://www.ikea.com/us/en/images/products/vihals-bed-frame-with-4-storage-boxes-white-luroey__1448765_pe989651_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vihals-bed-frame-with-4-storage-boxes-white-luroey-s39582002/#content' },
    { variantId: 'queen', label: 'Queen', hex: '#999187', price: 299, imageUrl: 'https://www.ikea.com/us/en/images/products/vihals-bed-frame-with-4-storage-boxes-white-luroey__1448765_pe989651_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/vihals-bed-frame-with-4-storage-boxes-white-luroey-s19582003/#content' }, // CHECK: size differs from main product
  ],
})

beds.set('MALM-High-bed-frame-4-storage-boxes', {
  name: 'MALM High bed frame/4 storage boxes',
  category: 'bed',
  width: null,
  depth: null,
  height: null,
  measurements: `Thickness : 7 7/8`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-4-storage-boxes-dark-brown-veneer-luroey__1364749_pe956009_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-4-storage-boxes-dark-brown-veneer-luroey-s49574370/#content',
  price: 499,
  styleTags: [], // fill in by hand
  defaultVariant: 'darkBrownVeneerLuroyQueen',
  variants: [
    { variantId: 'darkBrownVeneerLuroyQueen', label: 'dark-brown veneer/Luröy, Queen', hex: '#74726a', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-4-storage-boxes-dark-brown-veneer-luroey__1364749_pe956009_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-4-storage-boxes-dark-brown-veneer-luroey-s49574370/#content' },
    { variantId: 'oakVeneerLuroyQueen', label: 'oak veneer/Luröy, Queen', hex: '#8e8e8c', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-4-storage-boxes-oak-veneer-luroey__1364758_pe956003_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-4-storage-boxes-oak-veneer-luroey-s89574429/#content' },
    { variantId: 'whiteLuroyQueen', label: 'white/Luröy, Queen', hex: '#92918e', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-4-storage-boxes-white-luroey__1101597_pe866769_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-4-storage-boxes-white-luroey-s39009504/#content' },
    { variantId: 'darkBrownVeneerLonsetQueen', label: 'dark-brown veneer/Lönset, Queen', hex: '#74726a', price: 569, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-4-storage-boxes-dark-brown-veneer-loenset__1364749_pe956009_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-4-storage-boxes-dark-brown-veneer-loenset-s19574357/#content' },
    { variantId: 'darkBrownVeneerLuroyFull', label: 'dark-brown veneer/Luröy, Full', hex: '#74726a', price: 469, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-4-storage-boxes-dark-brown-veneer-luroey__1364749_pe956009_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-4-storage-boxes-dark-brown-veneer-luroey-s39574356/#content' },
    { variantId: 'darkBrownVeneerLuroyKing', label: 'dark-brown veneer/Luröy, King', hex: '#74726a', price: 599, imageUrl: 'https://www.ikea.com/us/en/images/products/malm-high-bed-frame-4-storage-boxes-dark-brown-veneer-luroey__1364749_pe956009_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/malm-high-bed-frame-4-storage-boxes-dark-brown-veneer-luroey-s59574355/#content' },
  ],
})

beds.set('SLAKT-Bed-frame-w-storage-slatted-bedbase', {
  name: 'SLÄKT Bed frame w/storage+slatted bedbase',
  category: 'bed',
  width: null,
  depth: null,
  height: null,
  measurements: `Thickness : 4 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/slaekt-bed-frame-w-storage-slatted-bedbase-white__0648364_pe704867_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/slaekt-bed-frame-w-storage-slatted-bedbase-white-s99291991/#content',
  price: 449.99,
  styleTags: [], // fill in by hand
  defaultVariant: 'whiteTwin',
  variants: [
    { variantId: 'whiteTwin', label: 'white, Twin', hex: '#d2d3d0', price: 449.99, imageUrl: 'https://www.ikea.com/us/en/images/products/slaekt-bed-frame-w-storage-slatted-bedbase-white__0648364_pe704867_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/slaekt-bed-frame-w-storage-slatted-bedbase-white-s99291991/#content' },
  ],
})

beds.set('NORDLI-Bed-frame-with-storage-white', {
  name: 'NORDLI Bed frame with storage, white',
  category: 'bed',
  width: 63,
  depth: 79.5,
  height: 11.75,
  measurements: `Height of drawer (inside) : 6 1/4
    Length : 79 1/2
    Width : 63
    Height : 11 3/4
    Drawer width (inside) : 22 7/8
    Drawer depth (inside) : 20 1/8
    Mattress length : 78 3/4
    Mattress width : 63`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-white__0734414_pe739462_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-white-00349849/#content',
  price: 499,
  styleTags: [], // fill in by hand
  defaultVariant: 'queen',
  variants: [
    { variantId: 'queen', label: 'Queen', hex: '#d3d4d1', price: 499, imageUrl: 'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-white__0734414_pe739462_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-white-00349849/#content' },
    { variantId: 'king', label: 'King', hex: '#d3d4d1', price: 649, imageUrl: 'https://www.ikea.com/us/en/images/products/nordli-bed-frame-with-storage-white__0734414_pe739462_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-white-30349857/#content' }, // CHECK: size differs from main product
  ],
})

daybeds.set('BRIMNES-Daybed-frame-with-2-drawers-Twin', {
  name: 'BRIMNES Daybed frame with 2 drawers, Twin',
  category: 'daybed',
  width: null,
  depth: null,
  height: null,
  measurements: `Thickness : 4 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/brimnes-daybed-frame-with-2-drawers-white__1101301_pe866570_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/brimnes-daybed-frame-with-2-drawers-white-40228708/#content',
  price: 299,
  styleTags: [], // fill in by hand
  defaultVariant: 'white',
  variants: [
    { variantId: 'white', label: 'white', hex: '#aeafb3', price: 299, imageUrl: 'https://www.ikea.com/us/en/images/products/brimnes-daybed-frame-with-2-drawers-white__1101301_pe866570_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/brimnes-daybed-frame-with-2-drawers-white-40228708/#content' },
    { variantId: 'gray', label: 'gray', hex: '#706559', price: 299, imageUrl: 'https://www.ikea.com/us/en/images/products/brimnes-daybed-frame-with-2-drawers-gray__1411039_pe973047_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/brimnes-daybed-frame-with-2-drawers-gray-00598344/#content' },
  ],
})

daybeds.set('HEMNES-Daybed-frame-with-3-drawers-Twin', {
  name: 'HEMNES Daybed frame with 3 drawers, Twin',
  category: 'daybed',
  width: null,
  depth: null,
  height: null,
  measurements: `Thickness : 4 3/4`,
  imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-daybed-frame-with-3-drawers-gray__1101306_pe866575_s5.jpg?f=xl',
  productUrl: 'https://www.ikea.com/us/en/p/hemnes-daybed-frame-with-3-drawers-gray-20472701/#content',
  price: 449,
  styleTags: [], // fill in by hand
  defaultVariant: 'gray',
  variants: [
    { variantId: 'gray', label: 'gray', hex: '#938e8b', price: 449, imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-daybed-frame-with-3-drawers-gray__1101306_pe866575_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hemnes-daybed-frame-with-3-drawers-gray-20472701/#content' },
    { variantId: 'blackBrown', label: 'black-brown', hex: '#73766c', price: 449, imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-daybed-frame-with-3-drawers-black-brown__1101309_pe866578_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hemnes-daybed-frame-with-3-drawers-black-brown-60421446/#content' },
    { variantId: 'grayGreen', label: 'gray-green', hex: '#918677', price: 449, imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-daybed-frame-with-3-drawers-gray-green__1471581_pe997292_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hemnes-daybed-frame-with-3-drawers-gray-green-90622896/#content' },
    { variantId: 'white', label: 'white', hex: '#73766b', price: 449, imageUrl: 'https://www.ikea.com/us/en/images/products/hemnes-daybed-frame-with-3-drawers-white__1078996_pe857423_s5.jpg?f=xl', productUrl: 'https://www.ikea.com/us/en/p/hemnes-daybed-frame-with-3-drawers-white-30349329/#content' },
  ],
})

const catalogItem = Object.fromEntries(
  [...itemCatalog].map(([itemType, specificItem]) => {
    return[itemType, Object.fromEntries(specificItem)]
  })
)

export { itemCatalog, catalogItem };
export const measurementUnit = "in";