export type Property = {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  match: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  predictedGrowth: number;
  verificationScore: number;
};

export const properties: Property[] = [
  {
    id: "zenith-peak-penthouse",
    name: "Zenith Peak Penthouse",
    location: "Pali Hill, Bandra West, Mumbai, Maharashtra",
    price: 34500000,
    rating: 4.9,
    match: 98,
    beds: 4,
    baths: 5,
    sqft: 4850,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    ],
    description:
      "Perched high above Bandra with sweeping views of the Mumbai skyline and the Arabian Sea, Zenith Peak Penthouse is a marvel of glass and pristine raw concrete. Smart lighting matrices sync with the sunrise, while integrated solar grids and silent climate systems run seamlessly in the background.",
    amenities: [
      "Smart Matrix Lights",
      "Geothermal Climate",
      "Cryptographic Entry Lock",
      "Silent Rooftop Pool",
      "Solar Energy Roof",
      "Private Theater",
    ],
    predictedGrowth: 4.2,
    verificationScore: 99,
  },
  {
    id: "elysian-fields-estate",
    name: "Elysian Fields Estate",
    location: "Aravali Hills, Gurugram, Haryana",
    price: 41200000,
    rating: 4.8,
    match: 96,
    beds: 5,
    baths: 6,
    sqft: 5200,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
    description:
      "An infinity-edge estate cut into the hillside, with uninterrupted canyon views and a fully automated pool terrace built for entertaining.",
    amenities: [
      "Infinity Pool",
      "Wine Cellar",
      "Home Automation Suite",
      "Guest House",
    ],
    predictedGrowth: 3.6,
    verificationScore: 97,
  },
  {
    id: "madrone-ridge-house",
    name: "Madrone Ridge House",
    location: "Whitefield, Bengaluru, Karnataka",
    price: 29500000,
    rating: 4.7,
    match: 93,
    beds: 4,
    baths: 4,
    sqft: 4100,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    ],
    description:
      "A cantilevered lake-view home wrapped in wood and glass, engineered for natural light throughout every season.",
    amenities: ["Bay Views", "Radiant Floor Heating", "EV Charging"],
    predictedGrowth: 2.9,
    verificationScore: 95,
  },
  {
    id: "aether-heights-studio",
    name: "Aether Heights Studio",
    location: "Koregaon Park, Pune, Maharashtra",
    price: 21000000,
    rating: 4.6,
    match: 89,
    beds: 3,
    baths: 3,
    sqft: 3400,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
    description:
      "A marble-clad open kitchen anchors this downtown loft, built for hosting and designed with concealed smart storage throughout.",
    amenities: ["Chef's Kitchen Island", "Skyline Views", "Smart Storage"],
    predictedGrowth: 3.1,
    verificationScore: 94,
  },
  {
    id: "maris-crest-villa",
    name: "Maris Crest Villa",
    location: "Candolim, North Goa",
    price: 68000000,
    rating: 4.9,
    match: 87,
    beds: 6,
    baths: 7,
    sqft: 7400,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    description:
      "Cliffside villa with a cantilevered edge overlooking the Arabian Sea, staged for sunset entertaining and long-term privacy.",
    amenities: ["Cliffside Terrace", "Private Beach Path", "Home Theater"],
    predictedGrowth: 5.1,
    verificationScore: 98,
  },
  {
    id: "solaris-smart-haven",
    name: "Solaris Smart Haven",
    location: "Jubilee Hills, Hyderabad, Telangana",
    price: 17500000,
    rating: 4.5,
    match: 84,
    beds: 3,
    baths: 3,
    sqft: 3100,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
    ],
    description:
      "A family-scaled smart home with a full solar roof array and a native-planted front yard designed for low water use.",
    amenities: ["Full Solar Array", "Native Landscaping", "EV Charging"],
    predictedGrowth: 2.4,
    verificationScore: 92,
  },
];

export function getProperty(id: string) {
  return properties.find((p) => p.id === id);
}

export function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
