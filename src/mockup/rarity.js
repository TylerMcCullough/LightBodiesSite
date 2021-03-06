const divinerRarity = {
  Common: {
    Background: [
      "Between-Lines",
      "Brick-House",
      "Ice-Cold",
      "Navy-Marble",
      "Nebula-Shatter",
      "Rough-Paint",
      "Yellow-Nebula",
    ],
    Cloak: [
      "Blue-Designer",
      "Braided-Cotton",
      "Dark-Cheetah",
      "Gille-Guy",
      "Green-Caviar",
      "Hawaii-5-0",
      "Hotel-Wallpaper",
      "Hot-Lava",
      "Purple-People-Eater",
      "Sand-Dune",
      "Sea-Grass",
    ],
    Jewelry: ["Beads", "Diamon-Bracelet", "Diamond-Crown", "Diamond-Necklace"],
    "Sacred G": [
      "Golden-Matrix",
      "Golden-Portal",
      "Gold-Saw",
      "Gold-Star",
      "Orange-Portal",
      "Pink-Flower",
      "Red-Matrix",
      "Red-Saw",
      "Red-Star",
    ],
    tattoo: [
      "Barbed-Eye",
      "Dagger-of-Life",
      "Dual-ring",
      "Open-Sea",
      "Polarity",
    ],
  },
  Rare: {
    Background: ["Blue-Lightning-R", "Fall-R", "Furreal-R", "Rockery-R"],
    Cloak: [
      "Hunters-Camo-R",
      "Rad-Orange-R",
      "Rastafarian-R",
      "Tie-Dye-Fur-R",
      "Van-Halen-R",
    ],
    Jewelry: ["Black-Raven-R", "Hood-Rings-R"],
    "Sacred G": [
      "Orange-Flower-R",
      "Teal-Matrix-R",
      "Teal-Portal-R",
      "Teal-Saw-R",
    ],
    tattoo: ["Brain-Heart-Connection-R", "DNA-R", "EyeDea-R"],
  },
  Epic: {
    Background: ["Rain-Woods-SR", "Blizzard-SR"],
    Cloak: ["Mystery-Machine-SR", "Leather-SR"],
    Jewelry: ["Gucci-Band-SR"],
    "Sacred G": ["Light-Bodies-SR"],
    tattoo: ["Lifes-Currency-SR"],
  },
};

const MercenaryRarity = {
  Common: {
    Background: [
      "Acid Ocean",
      "Charlottes Web",
      "Could 9",
      "Fall",
      "Ice Cave",
      "Line Speed",
      "Royal Camo",
      "Royal Red",
      "Sea Foam",
      "Winter",
    ],
    Cape: [
      "Blue-Sky",
      "Burnt-Waffle",
      "Camocean",
      "Green-Web",
      "nuclear-waste",
      "RAD",
      "Red-Kingdom",
      "Royal-Brown",
      "Volcanic-Beach",
    ],
    Helmet: [
      "Batallion",
      "Blue-Fade",
      "Candy-Cane",
      "Cant-See-Me",
      "Hunters-Camo",
      "Light-Leak",
      "Mossy",
      "Purple-People-Eater",
      "Red-Russian",
      "Spartan-Workshop",
    ],
    Suit: [
      "Burnt-Waffle",
      "Desert-Camo",
      "Hulk-Smash",
      "Hunters-Camo",
      "Light Speed",
      "Lobster",
      "Major-Lazer",
      "Ocean-Floor",
      "Orange-Hybrid",

      "Royal-Red",
      "Sardine",
      "Sidelines",
      "Snow-Camo",
      "Viking",
      "Watercolor",
    ],
    Weapons: ["Dark-SOL", "Kukri"],
  },
  Rare: {
    Background: [
      "Desert Storm R",
      "Fractal R",
      "Light Club R",
      "Range Fog R",
      "Thunder Storm R",
    ],
    Cape: [
      "Cheeto-Print-R",
      "hawaii-5-0-R",
      "hunters-camo-R",
      "Mellow-Yellow-R",
      "Rust-R",
    ],
    Helmet: ["Rust-R", "Teal-Waver-R", "War-Monguer"],
    Suit: ["Pacific-R", "Red-Yellow-R", "Rust-R"],
    Weapons: ["Archer-R", "Celtic-battle-axe-R"],
  },
  Epic: {
    Background: ["Blizzard SR", "Quary Falls"],
    Cape: ["Smoke-SR"],
    Helmet: ["Smoke-SR", "Yellux-SR"],
    Suit: ["Smoke-SR", "Yellux.SR"],
    Weapons: ["Dragon-slayer-SR"],
  },
};

const MonarchRarity = {
  Common: {
    Backgrounds: [
      "The Disco",
      "The Garage",
      "The Hanger",
      "The Metaverse",
      "The Space Lounge",
    ],
    Canes: [
      "Blue-Marble",
      "Candy-Cane",
      "Cosmic-Cane",
      "Ebony-Ivory",

      "Golden-Gala",
      "Splattered-Wood",
      "Volcanic",
    ],
    Chairs: [
      "Ancient-Moss3",
      "Executive-Walnut",
      "Ocean-Stone",
      "Precious",
      "Red-Marble",
      "Rusted-Steel",
    ],
    Items: ["BTC-moon", "Etherium", "Fiat", "The-Connection", "The-Creative"],
    Jackets: [
      "Caramel-Apple",
      "Creamsicle",
      "Enthusiast",
      "Fall-Blizzard",
      "Feathered-Corduroy",
      "GranDaddy-Purp",
      "High-Tide",
      "High-Voltage",
      "Hilly-Billy-Delux",
      "Marina-del-Rey",
      "The-Artist",
      "The-Grinch",
    ],
    Pants: ["Khakis", "Moons-Sand", "Rhino-R", "Sky-Party", "Slax"],
    Shirts: [
      "Aloha",
      "Bahama-Mama",
      "Business-Casual",
      "Magenta-Magic",
      "Navy-Train",
      "Rad-Red-",
    ],
  },
  Rare: {
    Backgrounds: [
      "Metropolis R",
      "Stark Tunnel R",
      "The Lair R",
      "The Think Tank",
    ],
    Canes: ["Python-Staff-R", "Toxic-Waste-R"],
    Chairs: ["Foreign-Luxury-R", "Hill-Billy-Delux-R", "Smoke-Throne-R"],
    Items: [
      "Life-Currency-R",
      "The-Guide-R",
      "The-Key-R",
      "The-Thought-Leader-R",
    ],
    Jackets: ["Cheeta-Fur-R", "Ebony-ivory-R", "Smoke-R"],
    Pants: ["Blue-Logoon-R", "Painter-R"],
    Shirts: ["Green-Day-R", "Jack-O-Lantern-R", "Royal-Flush-R"],
  },
  Epic: {
    Backgrounds: ["The Matrix SR"],
    Canes: ["Energy-Sword-SR"],
    Chairs: ["Throne-Of-The-Universe-SR"],
    Items: ["Light-Bodies-Token-SR"],
    Jackets: ["Ho-Ho-Ho-SR", "Royal-Suede-SR"],
    Pants: ["Ocean-Floor-SR"],
    Shirts: ["Street-Racer-SR"],
  },
};

export const allRarity = { divinerRarity, MercenaryRarity, MonarchRarity };
