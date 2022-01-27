const members = [
  { avatar: "../assets/images/avatar.png", discord_name: "member" },
  { avatar: "../assets/images/avatar.png", discord_name: "member" },
  { avatar: "../assets/images/avatar.png", discord_name: "member" },
];
const effects = [
  { label: "Layers", value: "Layers" },
  { label: "Background", value: "Background" },
  { label: "Cloak", value: "Cloak" },
  { label: "Jewelry", value: "Jewelry" },
  { label: "Sacred G", value: "Sacred G" },
  { label: "tattoo", value: "tattoo" },
];
const effectsMonarch = [
  { label: "Layers", value: "Layers" },
  { label: "Canes", value: "Canes" },
  { label: "Backgrounds", value: "Backgrounds" },
  { label: "Chairs", value: "Chairs" },
  { label: "Items", value: "Items" },
  { label: "Jackets", value: "Jackets" },
  { label: "Pants", value: "Pants" },
  { label: "Shirts", value: "Shirts" },
];
const effectsMercenary = [
  { label: "Layers", value: "Layers" },
  { label: "Suit", value: "Suit" },
  { label: "Background", value: "Background" },
  { label: "Helmet", value: "Helmet" },
  { label: "Weapons", value: "Weapons" },
  { label: "Cape", value: "Cape" },
];
const nftTypes = [
  { label: "Rarity", value: "Rarity" },
  { label: "Common", value: "Common" },
  { label: "Rare", value: "Rare" },
  { label: "Epic", value: "Epic" },
];
const fadeImages = [
  {
    image: "../assets/images/8.png",
    url: "../assets/images/8.png",
    trait: "Teal Portal",
    trait_type: "Tattoo",
    name: "",
    rarity: "Common",
  },
  {
    image: "../assets/images/1.png",
    url: "../assets/images/1.png",
    trait: "Green Portal",
    trait_type: "Background",
    name: "",
    rarity: "Common",
  },
  {
    image: "../assets/images/2.png",
    url: "../assets/images/2.png",
    trait: "Red Portal",
    trait_type: "Cloak",
    name: "",
    rarity: "Common",
  },
  {
    image: "../assets/images/3.png",
    url: "../assets/images/3.png",
    trait: "Blue Portal",
    trait_type: "Sacred G",
    name: "",
    rarity: "Common",
  },
];
const fadeMercenaryImages = [
  {
    image: "../assets/images/38.png",
    url: "../assets/images/38.png",
    trait: "Blue Sky",
    trait_type: "Capes",
    name: "",
    rarity: "Common",
  },
  {
    image: "../assets/images/41.png",
    url: "../assets/images/41.png",
    trait: "Lobster",
    trait_type: "Suit",
    name: "",
    rarity: "Common",
  },
  {
    image: "../assets/images/42.png",
    url: "../assets/images/42.png",
    trait: "Archer",
    trait_type: "Weapons",
    name: "",
    rarity: "Rare",
  },
  {
    image: "../assets/images/33.png",
    url: "../assets/images/33.png",
    trait: "Smoke",
    trait_type: "Helmet",
    name: "",
    rarity: "Epic",
  },
];
const fadeMonarchImages = [
  {
    image: "../assets/images/22.png",
    url: "../assets/images/22.png",
    trait: "Ebony Ivory",
    trait_type: "Canes",
    name: "",
    rarity: "Common",
  },
  {
    image: "../assets/images/21.png",
    url: "../assets/images/21.png",
    trait: "Enthusiast",
    trait_type: "Jackets",
    name: "",
    rarity: "Common",
  },
  {
    image: "../assets/images/12.png",
    url: "../assets/images/12.png",
    trait: "Magenta Magic",
    trait_type: "Shirts",
    name: "",
    rarity: "Common",
  },
  {
    image: "../assets/images/13.png",
    url: "../assets/images/13.png",
    trait: "Throne Of The Universe",
    trait_type: "Chairs",
    name: "",
    rarity: "Epic",
  },
];

const fadeAllImages = [
  {
    url: [
      "../assets/images/1.png",
      "../assets/images/11.png",
      "../assets/images/41.png",
    ],
  },
  {
    url: [
      "../assets/images/4.png",
      "../assets/images/14.png",
      "../assets/images/42.png",
    ],
  },
  {
    url: [
      "../assets/images/8.png",
      "../assets/images/15.png",
      "../assets/images/44.png",
    ],
  },
  {
    url: [
      "../assets/images/9.png",
      "../assets/images/22.png",
      "../assets/images/39.png",
    ],
  },
];

const contents = {
  who: {
    title: "PLAY TO EARN PERSONAL GROWTH!",
    text: "The Light Bodies give away thousands of dollars in amazing prizes to the winners of our challenges every single week. Each week, you will receive challenges that you must take action and complete before the end of the week. Winners from each faction will be chosen during our weekly Power Talk meeting. The single greatest way to help someone is by assisting them in taking action. At the Light Bodies, you are financially incentivised to create a better life for yourself!",
  },
  what: {
    title: "FACTIONS",
    text: "The Light Bodies are separated into three key aspects of life. Each Faction is given a different challenge to accomplish depending on their specialization, giving members of each faction a shot at winning every single week! Thus owning multiple factions and completing each challenge gives you greater odds of winning.",
  },
  how: {
    title: "CHALLENGER REWARDS",
    text: "Winners are not randomly selected. Our team watches for effort, consistency and creativity within your journey here. The biggest way to grab our attention and show that you are dedicated, is to tag our accounts in your challenge posts. The more powerful and hungry you show up, the more likely you are to be rewarded. ",
  },
  community: {
    title: "MENTAL STRENGTH MILITIA",
    text: "The Light Bodies boasts one of the most positive and supportive communities on the planet. We know that the road to self discovery, improvement and entrepreneurship is a lonely journey. You are going to lose a lot of the people who you once thought to be loyal. But you don’t have to take this adventure alone. We are all in this together!",
  },
  factions: {
    title: "THE LIGHT BODIES",
    text: [
      {
        img: "frac-div.PNG",
        title: "The Diviner",
        text: "A master of self. Advanced in the laws of the Universe and how we as humans are connected and governed by them. A mentor that will guide you in the direction to truly tap into the higher faculties of the Human Being.",
      },
      {
        img: "frac-mer.PNG",
        title: "The Mercenary",
        text: "The relentless warrior. Carrying true power, courage, and hunger to every challenge. Your Mercenary will assist you in harnessing the strength to never take “Failure” as an option despite all hardships that life throws. To find what sets you ablaze from the inside out and use it to your advantage.",
      },
      {
        img: "frac-mon.PNG",
        title: "The Monarch",
        text: "An Elite creator of value and prosperity. A business and entrepreneurship specialist, the Monarch will help you take an idea and turn it into a well-oiled gold mining machine!",
      },
    ],
  },
};

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
    `,
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
    `,
  },
  monarch: {
    message: `You’ve arrived! You have chosen the path of	 the Monarch. The most incredible adventure one can embark on is that of complete self reliance. Mastering the science of wealth creation takes courage and resilience, as the most successful have “failed” more than anyone else. 

    Entrepreneurs are the backbone and what builds the future of our society. Creating wealth means creating immense value, but without proper marketing and execution this value will go unnoticed. We are here to assist you in your development in these areas and will be sharing lessons and challenges with you every week!

    Your lessons will be sent through this portal every Thursday, your weekly challenge will be sent on Sundays. You must complete your challenge by the following Sunday in order to begin your next challenge.

    As this is your first dispatch, this challenge is to set you up for your first week and future with The Light Bodies! You must complete this challenge by Monday for the Power Talk.
    `,
    challenge: `Acquire a fresh personal success journal to use as a hub to document your journey. Your first entry in your journal should be a detailed description of exactly where you are physically and emotionally in your life right now. What you are grateful for as well as the areas of your life you are dissatisfied with.

    What areas do you want to improve in your life? Who do you want to become and where do you want to be in 3 months from now?
    
    Dig deep and take this exercise seriously! You will be able to look back on this in a year from now and realize just how far you’ve come. This journal will contain the adventure, ups and downs as well as the lessons you will learn on your way to turning your dreams into your reality!`,
  },
};

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
  messages,
};
