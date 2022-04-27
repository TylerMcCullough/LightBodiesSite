const members = [
  { avatar: '../assets/images/avatar.png', discord_name: 'member' },
  { avatar: '../assets/images/avatar.png', discord_name: 'member' },
  { avatar: '../assets/images/avatar.png', discord_name: 'member' }
]
const effects = [
  { label: 'Layers', value: 'Layers' },
  { label: 'Background', value: 'Background' },
  { label: 'Cloak', value: 'Cloak' },
  { label: 'Jewelry', value: 'Jewelry' },
  { label: 'Sacred G', value: 'Sacred G' },
  { label: 'tattoo', value: 'tattoo' }
]
const effectsMonarch = [
  { label: 'Layers', value: 'Layers' },
  { label: 'Canes', value: 'Canes' },
  { label: 'Backgrounds', value: 'Backgrounds' },
  { label: 'Chairs', value: 'Chairs' },
  { label: 'Items', value: 'Items' },
  { label: 'Jackets', value: 'Jackets' },
  { label: 'Pants', value: 'Pants' },
  { label: 'Shirts', value: 'Shirts' }
]
const effectsMercenary = [
  { label: 'Layers', value: 'Layers' },
  { label: 'Suit', value: 'Suit' },
  { label: 'Background', value: 'Background' },
  { label: 'Helmet', value: 'Helmet' },
  { label: 'Weapons', value: 'Weapons' },
  { label: 'Cape', value: 'Cape' }
]
const nftTypes = [
  { label: 'Rarity', value: 'Rarity' },
  { label: 'Common', value: 'Common' },
  { label: 'Rare', value: 'Rare' },
  { label: 'Epic', value: 'Epic' }
]
const fadeImages = [
  {
    image: '../assets/images/8.png',
    url: '../assets/images/8.png',
    trait: 'Teal Portal',
    trait_type: 'Tattoo',
    name: '',
    rarity: 'Common'
  },
  {
    image: '../assets/images/1.png',
    url: '../assets/images/1.png',
    trait: 'Green Portal',
    trait_type: 'Background',
    name: '',
    rarity: 'Common'
  },
  {
    image: '../assets/images/2.png',
    url: '../assets/images/2.png',
    trait: 'Red Portal',
    trait_type: 'Cloak',
    name: '',
    rarity: 'Common'
  },
  {
    image: '../assets/images/3.png',
    url: '../assets/images/3.png',
    trait: 'Blue Portal',
    trait_type: 'Sacred G',
    name: '',
    rarity: 'Common'
  }
]
const fadeMercenaryImages = [
  {
    image: '../assets/images/38.png',
    url: '../assets/images/38.png',
    trait: 'Blue Sky',
    trait_type: 'Capes',
    name: '',
    rarity: 'Common'
  },
  {
    image: '../assets/images/41.png',
    url: '../assets/images/41.png',
    trait: 'Lobster',
    trait_type: 'Suit',
    name: '',
    rarity: 'Common'
  },
  {
    image: '../assets/images/42.png',
    url: '../assets/images/42.png',
    trait: 'Archer',
    trait_type: 'Weapons',
    name: '',
    rarity: 'Rare'
  },
  {
    image: '../assets/images/33.png',
    url: '../assets/images/33.png',
    trait: 'Smoke',
    trait_type: 'Helmet',
    name: '',
    rarity: 'Epic'
  }
]
const fadeMonarchImages = [
  {
    image: '../assets/images/22.png',
    url: '../assets/images/22.png',
    trait: 'Ebony Ivory',
    trait_type: 'Canes',
    name: '',
    rarity: 'Common'
  },
  {
    image: '../assets/images/21.png',
    url: '../assets/images/21.png',
    trait: 'Enthusiast',
    trait_type: 'Jackets',
    name: '',
    rarity: 'Common'
  },
  {
    image: '../assets/images/12.png',
    url: '../assets/images/12.png',
    trait: 'Magenta Magic',
    trait_type: 'Shirts',
    name: '',
    rarity: 'Common'
  },
  {
    image: '../assets/images/13.png',
    url: '../assets/images/13.png',
    trait: 'Throne Of The Universe',
    trait_type: 'Chairs',
    name: '',
    rarity: 'Epic'
  }
]

const fadeAllImages = [
  {
    url: [
      '../assets/images/1.png',
      '../assets/images/11.png',
      '../assets/images/41.png'
    ]
  },
  {
    url: [
      '../assets/images/4.png',
      '../assets/images/14.png',
      '../assets/images/42.png'
    ]
  },
  {
    url: [
      '../assets/images/8.png',
      '../assets/images/15.png',
      '../assets/images/44.png'
    ]
  },
  {
    url: [
      '../assets/images/9.png',
      '../assets/images/22.png',
      '../assets/images/39.png'
    ]
  }
]

const contents = {
  who: {
    title: 'TRAIN TO GAIN FITNESS',
    text:
      'The Light Bodies are bringing Play To Earn Mechanics to the fitness industry, where your body now becomes the controller of the game that rewards you for leveling up your health! Utilizing the cutting edge of health tracking wearable technology, we are designing an economy and ecosystem around living a healthier lifestyle paired with the most valuable fitness application of its kind. Earning multiplier NFTs can be collected and staked to increase the amount of utility tokens you earn as you challenge your body with strenuous activity. You will be able to spend these tokens on the products, plans and routines that we have to offer. A healthy economy encourages spending rather than trading, our goal is to provide what you want to spend your money on within our ecosystem.'
  },
  what: {
    title: 'THE CUTTING EDGE',
    text:
      'Creative innovation is our highest priority as a pioneering Web 3 tech company. Our goal is to remain ahead of the curve, bringing the most innovative, valuable and fun experiences, products and services to the fitness industry. A deep understanding of Web 3 and the structure it brings gives us a huge advantage over any competitors, consuming an industry projected to hit 435B annually by 2028! You can read more in depth information about our plans and other industries we plan to tackle in our LightPaper!'
  },
  how: {
    title: 'HOLDER BENEFITS',
    text:
      'The owners of the Mercenary will earn 2X the average user and can be stacked using other multiplier NFTs. Mercenary holders have a huge role in the decision making process with product design, firmware and application features, tokenomics and ideas we implement into our ecosystem. The Light Bodies as a collective will be building together and will be rewarded the heaviest out of any user that enters our ecosystem. In every venture we embark on, whether it be the plethora of online projects we have in store, the events and seminars we will be hosting or our training centers, Light Bodies owners will always receive an owners experience and remain our top priority.'
  },
  community: {
    title: 'MENTAL STRENGTH MILITIA',
    text:
      'The Light Bodies boasts one of the most positive and supportive communities in the game. Do you love growth and challenging yourself? Are you into health and fitness?  Need a group to hold you accountable and lift you up? The Mental Strength Militia couldn’t be a better place to be! This is where you will find true Alpha to implement, a community making juicy gains together in every aspect of life!'
  },
  factions: {
    title: 'THE INFRASTRUCTURE',
    text: [
      {
        img: 'frac-mer.PNG',
        title: 'ECOSYSTEM',
        text:
          'With Upgradable NFTs and NFT staking you are able to multiply your earnings and compound the amount of utility tokens accumulated for your efforts. You can use these utility tokens to buy and stack NFTs as well as power up your gear. We will also offer new age workout routines, diet plans, supplements and physical gear which will be able to purchase using your earnings within our ecosystem. A full economy that promotes spending rather than trading, stimulating healthy growth to the token.'
      },
      {
        img: 'frac-div.PNG',
        title: 'CONSOLE',
        text:
          "Partnering with a manufacturing facility with over 10 years of professional experience, The Light Bodies are bringing you state of the art technology! Our smartwatch gives you in depth insight and tracking of your blood oxygen levels, ECG, heart rate, body temperature, HRV for stress levels, sleep monitor, multiple sport and exercise modes and activity tracking! This cutting edge tech is housed in stainless steel with 3D touch screen AMOLED glass, boasting a crystal clear and aesthetic appearance."
      },
      {
        img: 'frac-mon.PNG',
        title: 'HEADQUARTERS',
        text:
          'You can’t manage what you can’t measure, what is more important to your life and longevity than your health and wellness? Partnering with one of the leading fitness application development teams, our app will be your hub for every piece of your vitality puzzle. Filled with workout routines, diet plans, macro tracking, all of the health data logged by your watch and so much more. We plan to pack everything you could ever need on your fitness journey into one app that runs on our economy and ecosystem!'
      }
    ]
  }
}

const messages = {
  diviner: {
    message: `You’ve arrived! You have chosen the path of	the Diviner. It seems that we were never really taught just how much power we have inside of us. Our ability to connect and utilize what we can’t physically see has been stifled, leaving us misled into relying on a man made system.

    You may understand you have immense potential as the spiritual being you are, or maybe it was instinct that guided you here. Your adventure to unlock the higher faculties of your personality has only just begun. We are here to assist you in your development in this area and will be sharing lessons and challenges with you every week!

    Your lessons will be sent through this portal every Tuesday, your weekly challenge will be sent on Fridays. You must complete your challenge by the following Friday in order to begin your next challenge.

    As this is your first dispatch, this challenge is to set you up for your first week and future with The Light Bodies! You must complete this challenge by Monday for the Power Talk.
    `,
    challenge: `Acquire a fresh personal success journal to use as a hub to document your journey. Your first entry in your journal should be a detailed description of exactly where you are physically and emotionally in your life right now. What you are grateful for as well as the areas of your life you are dissatisfied with.

    What areas do you want to improve in your life? Who do you want to become and where do you want to be in 3 months from now?

    Dig deep and take this exercise seriously! You will be able to look back on this in a year from now and realize just how far you’ve come. This journal will contain the adventure, ups and downs as well as the lessons you will learn on your way to turning your dreams into your reality!
    `
  },
  mercenary: {
    message: `You’ve arrived! You have chosen the path of	the Mercenary. A journey into the depths of what truly creates motivation, hunger and the ability to stop at nothing to attain what matters most to you!

    There are driving forces in every one of us, the difference maker separating those from a life of dreaming and that of living is the ability to tap into that force! We are here to assist you in your development in this area and will be sharing lessons and challenges with you every week!
    
    Your lessons will be sent through this portal every Wednesday, your weekly challenge will be sent on Saturdays. You must complete your challenge by the following Saturday in order to begin your next challenge.
    
    As this is your first dispatch, this challenge is to set you up for your first week and future with The Light Bodies! You must complete this challenge by Monday for the Power Talk.
    `,

    challenge: `Acquire a fresh personal success journal to use as a hub to document your journey. Your first entry in your journal should be a detailed description of exactly where you are physically and emotionally in your life right now. What you are grateful for as well as the areas of your life you are dissatisfied with.

    What areas do you want to improve in your life? Who do you want to become and where do you want to be in 3 months from now?

    Dig deep and take this exercise seriously! You will be able to look back on this in a year from now and realize just how far you’ve come. This journal will contain the adventure, ups and downs as well as the lessons you will learn on your way to turning your dreams into your reality!
    `
  },
  monarch: {
    message: `You’ve arrived! You have chosen the path of	 the Monarch. The most incredible adventure one can embark on is that of complete self reliance. Mastering the science of wealth creation takes courage and resilience, as the most successful have “failed” more than anyone else. 

    Entrepreneurs are the backbone and what builds the future of our society. Creating wealth means creating immense value, but without proper marketing and execution this value will go unnoticed. We are here to assist you in your development in these areas and will be sharing lessons and challenges with you every week!

    Your lessons will be sent through this portal every Thursday, your weekly challenge will be sent on Sundays. You must complete your challenge by the following Sunday in order to begin your next challenge.

    As this is your first dispatch, this challenge is to set you up for your first week and future with The Light Bodies! You must complete this challenge by Monday for the Power Talk.
    `,
    challenge: `Acquire a fresh personal success journal to use as a hub to document your journey. Your first entry in your journal should be a detailed description of exactly where you are physically and emotionally in your life right now. What you are grateful for as well as the areas of your life you are dissatisfied with.

    What areas do you want to improve in your life? Who do you want to become and where do you want to be in 3 months from now?
    
    Dig deep and take this exercise seriously! You will be able to look back on this in a year from now and realize just how far you’ve come. This journal will contain the adventure, ups and downs as well as the lessons you will learn on your way to turning your dreams into your reality!`
  }
}

//"You’ve arrived! You have chosen the path of	the Mercenary. A journey into the depths of what truly creates motivation, hunger and the ability to stop at nothing to attain what matters most to you! \n There are driving \nforces in every one of us, the difference maker separating those from a life of dreaming and that of living is the ability to tap into that force! We are here to assist you in your development in this area and will be sharing lessons and challenges with you every week! Your lessons will be sent through this portal every Wednesday, your weekly challenge will be sent on Saturdays. You must complete your challenge by the following Saturday in order to begin your next challenge As this is your first dispatch, this challenge is to set you up for your first week and future with The Light Bodies! You must complete this challenge by Monday for the Power Talk ",
export {
  fadeAllImages,
  fadeMercenaryImages,
  fadeMonarchImages,
  members,
  effects,
  effectsMonarch,
  effectsMercenary,
  nftTypes,
  fadeImages,
  contents,
  messages
}
