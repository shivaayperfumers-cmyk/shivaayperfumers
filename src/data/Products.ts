import victoryNoir from "@/assets/Attar/Victory Noir.png";
import royalMukhalat from "@/assets/Attar/Royal Mukhalat Elixir.png";
import heavenlyNaeem from "@/assets/Attar/Heavenly Naeem.png";
import cocoaWhisper from "@/assets/Attar/Cocoa Whisper.png";
import azureOud from "@/assets/Attar/Azure Oud.png";
import velvetRazali from "@/assets/Attar/Velvet Razali Musk.png";
import pureTahara from "@/assets/Attar/Pure Tahara Essence.png";
import imperialOud from "@/assets/Attar/Imperial Oud Reserve.png";
import sultansEmber from "@/assets/Attar/Sultan's Ember.png";
import saffronOud from "@/assets/Attar/Saffron Oud Royale.png";
import cherryBelle from "@/assets/Attar/Cherry Belle.png";
import parisianCoco from "@/assets/Attar/Parisian Coco Noir.png";

import savageSpirit from "@/assets/Perfumes/Savage Spirit.png";
import davidoffCoolWater from "@/assets/Perfumes/Davidoff Cool Water.png";
import rougeElixir from "@/assets/Perfumes/Rouge Elixir 540.png";
import crimsonNight from "@/assets/Perfumes/Crimson Night.png";
import belleAura from "@/assets/Perfumes/Belle Aura.png";
import crystalNoir from "@/assets/Perfumes/Crystal Noir.png";
import floraBelle from "@/assets/Perfumes/Flora Belle.png";
import verdantValley from "@/assets/Perfumes/Verdant Valley.png";
import amberwoodCrown from "@/assets/Perfumes/Amberwood Crown.png";
import sultansOudFlame from "@/assets/Perfumes/Sultan's Oud Flame.png";

import zafranGoldBottle from "@/assets/Bottles/Zafran Gold 50ML Perfume.png";
import sultanBottle from "@/assets/Bottles/Sultan 50ML Perfume.png";
import nafisaBottle from "@/assets/Bottles/Nafisa 50ML Perfume.png";
import janbiyaBottle from "@/assets/Bottles/Janbiya 40ML Perfume.png";
import sultansDaggerBottle from "@/assets/Bottles/Sultan's Dagger 24ML Attar.png";
import royalTrellisBottle from "@/assets/Bottles/Royal Trellis 12ML Attar.png";
import burjAlNoorBottle from "@/assets/Bottles/Burj-Al-Noor 3ML Attar.png";
import arabianCharmBottle from "@/assets/Bottles/Arabian Charm 3ML Attar.png";
import luxeMajesticBottle from "@/assets/Bottles/Luxe Majestic 25ML Attar.png";
import emiratesTowerBottle from "@/assets/Bottles/Emirates Tower 12ML Attar.png";
import dubaiRoyaleBottle from "@/assets/Bottles/Dubai Royale 12ML Attar.png";
import goldenPrismBottle from "@/assets/Bottles/Golden Prism 6ML Attar.png";
import crystalLuxeBottle from "@/assets/Bottles/Crystal Luxe 12ML Attar.png";
import ishqEGulBottle from "@/assets/Bottles/Ishq-E-Gul 30ML Attar.png";
import royaleBottle from "@/assets/Bottles/Royale 30ML Attar.png";
import floralEleganceBottle from "@/assets/Bottles/Floral Elegance 15ML Attar.png";
import blossomAuraBottle from "@/assets/Bottles/Blossom Aura 70ML Perfume.png";
import royalMistBottle from "@/assets/Bottles/Royal Mist 30ML Perfume.png";
import noorSultanBottle from "@/assets/Bottles/Noor Sultan 7ML Attar.png";

export const phoneno = 917888562041

const products = [
  // ========= ATTARS =========

  {
    id: "cr7-victory-noir",
    category: "attar",
    title: "Victory Noir",
    brand: "CR7",
    image: victoryNoir,
    sizes: [
      { ml: 6, price: 350 },
      { ml: 12, price: 650 },
      { ml: 24, price: 1250 }
    ],
    notes: {
      top: ["Bergamot", "Lemon zest"],
      heart: ["Lavender", "Spicy accords"],
      base: ["Amber", "Patchouli", "Soft Musk"]
    },
    vibe: "Fresh, sporty, masculine (daily + evening)"
  },

  {
    id: "mukhalat-royal-elixir",
    category: "attar",
    title: "Royal Mukhalat Elixir",
    brand: "Mukhalat",
    image: royalMukhalat,
    sizes: [
      { ml: 6, price: 450 },
      { ml: 12, price: 850 },
      { ml: 24, price: 1650 }
    ],
    notes: {
      top: ["Rose petals", "Saffron"],
      heart: ["Sandalwood", "Jasmine"],
      base: ["Oud", "Amber", "Musk"]
    },
    vibe: "Traditional, rich, royal (weddings & occasions)"
  },

  {
    id: "jannatul-naeem",
    category: "attar",
    title: "Heavenly Naeem",
    brand: "Jannatul Naeem",
    image: heavenlyNaeem,
    sizes: [
      { ml: 6, price: 500 },
      { ml: 12, price: 950 },
      { ml: 24, price: 1850 }
    ],
    notes: {
      top: ["Green herbs", "Fresh florals"],
      heart: ["Lily", "Rose", "White flowers"],
      base: ["Musk", "Light Amber"]
    },
    vibe: "Spiritual, calm, long-lasting (religious & daily)"
  },

  {
    id: "light-chocolate",
    category: "attar",
    title: "Cocoa Whisper",
    brand: "Light Chocolate",
    image: cocoaWhisper,
    sizes: [
      { ml: 6, price: 300 },
      { ml: 12, price: 550 },
      { ml: 24, price: 1050 }
    ],
    notes: {
      top: ["Milk chocolate", "Cocoa powder"],
      heart: ["Vanilla cream"],
      base: ["Soft Musk", "Tonka bean"]
    },
    vibe: "Sweet, cozy, modern (unisex, winter-friendly)"
  },

  {
    id: "sky-oud",
    category: "attar",
    title: "Azure Oud",
    brand: "Sky Oud",
    image: azureOud,
    sizes: [
      { ml: 6, price: 300 },
      { ml: 12, price: 550 },
      { ml: 24, price: 1050 }
    ],
    notes: {
      top: ["Fresh citrus", "Blue notes"],
      heart: ["Smooth Oud", "Lavender"],
      base: ["Amberwood", "White Musk"]
    },
    vibe: "Fresh + woody fusion (office & evening)"
  },

  {
    id: "musk-razali",
    category: "attar",
    title: "Velvet Razali Musk",
    brand: "Musk Razali",
    image: velvetRazali,
    sizes: [
      { ml: 6, price: 450 },
      { ml: 12, price: 850 },
      { ml: 24, price: 1650 }
    ],
    notes: {
      top: ["Clean aldehydes"],
      heart: ["Floral musk"],
      base: ["Deep white musk", "Powdery notes"]
    },
    vibe: "Soft, elegant, classy (daily wear)"
  },

  {
    id: "musk-tahara",
    category: "attar",
    title: "Pure Tahara Essence",
    brand: "Musk Tahara",
    image: pureTahara,
    sizes: [
      { ml: 6, price: 450 },
      { ml: 12, price: 850 },
      { ml: 24, price: 1650 }
    ],
    notes: {
      top: ["Fresh cotton", "Soap notes"],
      heart: ["White florals"],
      base: ["Creamy white musk"]
    },
    vibe: "Ultra-clean, intimate, skin scent"
  },

  {
    id: "oud-premium",
    category: "attar",
    title: "Imperial Oud Reserve",
    brand: "Oud Premium",
    image: imperialOud,
    sizes: [
      { ml: 6, price: 750 },
      { ml: 12, price: 1450 },
      { ml: 24, price: 2850 }
    ],
    notes: {
      top: ["Smoky woods"],
      heart: ["Natural Oud"],
      base: ["Leather", "Amber", "Earthy notes"]
    },
    vibe: "Bold, luxurious, power scent"
  },

  {
    id: "amir-al-oud-attar",
    category: "attar",
    title: "Sultan’s Ember",
    brand: "Amir Al Oud",
    image: sultansEmber,
    sizes: [
      { ml: 6, price: 450 },
      { ml: 12, price: 850 },
      { ml: 24, price: 1650 }
    ],
    notes: {
      top: ["Incense", "Spices"],
      heart: ["Burnt Oud", "Vanilla"],
      base: ["Amber", "Resin", "Musk"]
    },
    vibe: "Strong, Arabic, night wear"
  },

  {
    id: "zafrani-oud",
    category: "attar",
    title: "Saffron Oud Royale",
    brand: "Zafrani Oud",
    image: saffronOud,
    sizes: [
      { ml: 6, price: 500 },
      { ml: 12, price: 950 },
      { ml: 24, price: 1850 }
    ],
    notes: {
      top: ["Saffron", "Warm spices"],
      heart: ["Rose", "Oud"],
      base: ["Amber", "Woody notes"]
    },
    vibe: "Royal, festive, premium blend"
  },

  {
    id: "miss-dior-cherry",
    category: "attar",
    title: "Cherry Belle",
    brand: "Miss Dior Cherry",
    image: cherryBelle,
    sizes: [
      { ml: 6, price: 300 },
      { ml: 12, price: 550 },
      { ml: 24, price: 1050 }
    ],
    notes: {
      top: ["Cherry blossom", "Red berries"],
      heart: ["Rose", "Jasmine"],
      base: ["Vanilla", "Soft Musk"]
    },
    vibe: "Feminine, romantic, youthful"
  },

  {
    id: "coco-chanel",
    category: "attar",
    title: "Parisian Coco Noir",
    brand: "Coco Chanel",
    image: parisianCoco,
    sizes: [
      { ml: 6, price: 300 },
      { ml: 12, price: 550 },
      { ml: 24, price: 1050 }
    ],
    notes: {
      top: ["Citrus", "Bergamot"],
      heart: ["Rose", "Patchouli"],
      base: ["Vanilla", "Amber", "White Musk"]
    },
    vibe: "Elegant, classy, timeless female scent"
  },

  // ================= PERFUMES =================

  {
    id: "amir-al-oud-flame",
    category: "perfume",
    title: "Sultan’s Oud Flame",
    brand: "Amir Al Oud",
    image: sultansOudFlame,
    sizes: [
      { ml: 50, price: 900 },
      { ml: 100, price: 1350 }
    ],
    notes: {
      top: ["Incense", "Smoky spices"],
      heart: ["Burnt Oud", "Vanilla"],
      base: ["Amber", "Resin", "Musk"]
    },
    vibe: "Powerful • Arabic • Night wear • Boss energy"
  },

  {
    id: "amber-oud",
    category: "perfume",
    title: "Amberwood Crown",
    brand: "Amber Oud",
    image: amberwoodCrown,
    sizes: [
      { ml: 50, price: 800 },
      { ml: 100, price: 1250 }
    ],
    notes: {
      top: ["Citrus zest"],
      heart: ["Amber resin"],
      base: ["Oud wood", "Musk"]
    },
    vibe: "Warm • Luxurious • Unisex • Evening scent"
  },

  {
    id: "hudson-valley",
    category: "perfume",
    title: "Verdant Valley",
    brand: "Hudson Valley",
    image: verdantValley,
    sizes: [
      { ml: 50, price: 900 },
      { ml: 100, price: 1350 }
    ],
    notes: {
      top: ["Green apple", "Fresh air notes"],
      heart: ["Lavender", "Herbs"],
      base: ["Cedarwood", "Soft musk"]
    },
    vibe: "Fresh • Nature-inspired • Calm • Daytime"
  },

  {
    id: "gucci-flora",
    category: "perfume",
    title: "Flora Belle",
    brand: "Gucci Flora",
    image: floraBelle,
    sizes: [
      { ml: 50, price: 700 },
      { ml: 100, price: 1100 }
    ],
    notes: {
      top: ["Peony", "Citrus"],
      heart: ["Rose", "Osmanthus"],
      base: ["Sandalwood", "Soft musk"]
    },
    vibe: "Feminine • Elegant • Floral • Classy"
  },

  {
    id: "jalique-crystal",
    category: "perfume",
    title: "Crystal Noir",
    brand: "Jalique",
    image: crystalNoir,
    sizes: [
      { ml: 50, price: 900 },
      { ml: 100, price: 1350 }
    ],
    notes: {
      top: ["Fresh citrus"],
      heart: ["Powdery florals"],
      base: ["Amber", "Woody musk"]
    },
    vibe: "Sophisticated • Clean • Office-friendly"
  },

  {
    id: "lancome-belle",
    category: "perfume",
    title: "Belle Aura",
    brand: "Lancôme La Vie Est Belle",
    image: belleAura,
    sizes: [
      { ml: 50, price: 700 },
      { ml: 100, price: 1100 }
    ],
    notes: {
      top: ["Pear", "Blackcurrant"],
      heart: ["Iris", "Jasmine"],
      base: ["Vanilla", "Praline", "Patchouli"]
    },
    vibe: "Sweet • Romantic • Premium feminine"
  },

  {
    id: "vampire-blood",
    category: "perfume",
    title: "Crimson Night",
    brand: "Vampire Blood",
    image: crimsonNight,
    sizes: [
      { ml: 50, price: 900 },
      { ml: 100, price: 1350 }
    ],
    notes: {
      top: ["Dark berries", "Cherry"],
      heart: ["Plum", "Floral spice"],
      base: ["Amber", "Vanilla", "Musk"]
    },
    vibe: "Mysterious • Seductive • Bold • Night party"
  },

  {
    id: "baccarat-rouge",
    category: "perfume",
    title: "Rouge Elixir 540",
    brand: "Baccarat Rouge",
    image: rougeElixir,
    sizes: [
      { ml: 50, price: 900 },
      { ml: 100, price: 1350 }
    ],
    notes: {
      top: ["Saffron", "Jasmine"],
      heart: ["Amberwood"],
      base: ["Fir resin", "Musk"]
    },
    vibe: "Ultra-luxury • Rich • Addictive • Unisex"
  },

  {
    id: "cool-water",
    category: "perfume",
    title: "Aqua Rush",
    brand: "Davidoff Cool Water",
    image: davidoffCoolWater,
    sizes: [
      { ml: 50, price: 750 },
      { ml: 100, price: 1200 }
    ],
    notes: {
      top: ["Mint", "Sea breeze"],
      heart: ["Lavender", "Green notes"],
      base: ["Cedarwood", "Musk"]
    },
    vibe: "Fresh • Sporty • Daily wear • Youthful"
  },

  {
    id: "dior-sauvage",
    category: "perfume",
    title: "Savage Spirit",
    brand: "Dior Sauvage",
    image: savageSpirit,
    sizes: [
      { ml: 50, price: 900 },
      { ml: 100, price: 1350 }
    ],
    notes: {
      top: ["Bergamot", "Pepper"],
      heart: ["Lavender", "Spices"],
      base: ["Ambroxan", "Woody notes"]
    },
    vibe: "Masculine • Bold • Mass-appeal • All-season"
  },
  // ================= BOTTLES (SHOWCASE ONLY) =================

{
  id: "zafran-gold-bottle",
  category: "bottles",
  title: "Zafran Gold Bottle",
  brand: "Luxury Bottle",
  image: zafranGoldBottle,
  description: "Premium luxury bottle with rich golden finish."
},

{
  id: "sultan-bottle",
  category: "bottles",
  title: "Sultan Bottle",
  brand: "Royal Series",
  image: sultanBottle,
  description: "Royal Arabic-inspired bottle with bold presence."
},

{
  id: "nafisa-bottle",
  category: "bottles",
  title: "Nafisa Bottle",
  brand: "Elegant Series",
  image: nafisaBottle,
  description: "Elegant feminine bottle with refined detailing."
},

{
  id: "janbiya-bottle",
  category: "bottles",
  title: "Janbiya Bottle",
  brand: "Heritage Collection",
  image: janbiyaBottle,
  description: "Traditional dagger-inspired perfume bottle."
},

{
  id: "sultans-dagger-bottle",
  category: "bottles",
  title: "Sultan’s Dagger Bottle",
  brand: "Royal Collection",
  image: sultansDaggerBottle,
  description: "Iconic dagger-shaped bottle symbolizing power."
},

{
  id: "royal-trellis-bottle",
  category: "bottles",
  title: "Royal Trellis Bottle",
  brand: "Classic Series",
  image: royalTrellisBottle,
  description: "Classic trellis-style bottle for luxury attars."
},

{
  id: "burj-al-noor-bottle",
  category: "bottles",
  title: "Burj Al Noor Bottle",
  brand: "Dubai Collection",
  image: burjAlNoorBottle,
  description: "Architectural bottle inspired by iconic towers."
},

{
  id: "arabian-charm-bottle",
  category: "bottles",
  title: "Arabian Charm Bottle",
  brand: "Oriental Series",
  image: arabianCharmBottle,
  description: "Compact and elegant Arabic-style bottle."
},

{
  id: "luxe-majestic-bottle",
  category: "bottles",
  title: "Luxe Majestic Bottle",
  brand: "Premium Series",
  image: luxeMajesticBottle,
  description: "Bold luxury bottle with majestic aesthetics."
},

{
  id: "emirates-tower-bottle",
  category: "bottles",
  title: "Emirates Tower Bottle",
  brand: "Dubai Collection",
  image: emiratesTowerBottle,
  description: "Tower-shaped bottle inspired by modern Dubai."
},

{
  id: "dubai-royale-bottle",
  category: "bottles",
  title: "Dubai Royale Bottle",
  brand: "Luxury Collection",
  image: dubaiRoyaleBottle,
  description: "Royal bottle crafted for premium fragrances."
},

{
  id: "golden-prism-bottle",
  category: "bottles",
  title: "Golden Prism Bottle",
  brand: "Signature Series",
  image: goldenPrismBottle,
  description: "Geometric prism-style luxury bottle."
},

{
  id: "crystal-luxe-bottle",
  category: "bottles",
  title: "Crystal Luxe Bottle",
  brand: "Crystal Series",
  image: crystalLuxeBottle,
  description: "Crystal-clear bottle with refined luxury."
},

{
  id: "ishq-e-gul-bottle",
  category: "bottles",
  title: "Ishq-E-Gul Bottle",
  brand: "Floral Series",
  image: ishqEGulBottle,
  description: "Romantic floral-inspired bottle design."
},

{
  id: "royale-bottle",
  category: "bottles",
  title: "Royale Bottle",
  brand: "Classic Series",
  image: royaleBottle,
  description: "Timeless royal bottle for luxury attars."
},

{
  id: "floral-elegance-bottle",
  category: "bottles",
  title: "Floral Elegance Bottle",
  brand: "Elegant Series",
  image: floralEleganceBottle,
  description: "Graceful floral-themed bottle design."
},

{
  id: "blossom-aura-bottle",
  category: "bottles",
  title: "Blossom Aura Bottle",
  brand: "Modern Series",
  image: blossomAuraBottle,
  description: "Modern bottle with soft floral elegance."
},

{
  id: "royal-mist-bottle",
  category: "bottles",
  title: "Royal Mist Bottle",
  brand: "Luxury Series",
  image: royalMistBottle,
  description: "Premium mist-style bottle with royal finish."
},

{
  id: "noor-sultan-bottle",
  category: "bottles",
  title: "Noor Sultan Bottle",
  brand: "Miniature Series",
  image: noorSultanBottle,
  description: "Compact luxury bottle for exclusive attars."
}


];

export default products;
