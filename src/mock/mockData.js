export const products = [
  {
    id: "p-skin-1",
    name: "Amrutam Gentle Cleanser",
    price: 349,
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=60"
    ],
    short: "Mild herbal cleanser for daily use",
    description: "A gentle Ayurvedic cleanser with neem and tulsi. Balances oil, soothes inflammation.",
    ingredients: [
      { slug: "neem", name: "Neem", ratio: "35%", info: "Anti-bacterial, good for oily skin." },
      { slug: "tulsi", name: "Tulsi", ratio: "25%", info: "Anti-oxidant and calming." },
      { slug: "sandal", name: "Sandalwood", ratio: "10%", info: "Soothing and aromatic." }
    ],
    category: "skincare"
  },
  {
    id: "p-skin-2",
    name: "Amrutam Vitamin C Serum",
    price: 799,
    rating: 4.7,
    images: ["https://images.unsplash.com/photo-1536305030012-6e6f6f9f6a6a?w=800&q=60"],
    short: "Lightweight vitamin C serum for brightening.",
    description: "Brightens skin and reduces dullness. Gentle formula for all skin types.",
    ingredients: [
      { slug: "amla", name: "Amla", ratio: "30%", info: "Rich in vitamin C." },
      { slug: "aloe", name: "Aloe Vera", ratio: "40%", info: "Hydrating and soothing." }
    ],
    category: "skincare"
  },
  {
    id: "p-hair-1",
    name: "Amrutam Hair Oil",
    price: 499,
    rating: 4.6,
    images: ["https://images.unsplash.com/photo-1542831371-d531d36971e6?w=800&q=60"],
    short: "Nourishing hair oil with bhringraj and amla.",
    description: "Strengthens hair, reduces breakage.",
    ingredients: [
      { slug: "bhringraj", name: "Bhringraj", ratio: "40%", info: "Promotes hair growth." },
      { slug: "amla", name: "Amla", ratio: "30%", info: "Conditioning and vitamin C rich." }
    ],
    category: "hair"
  }
];

export const categories = [
  { slug: "skincare", title: "Skincare" },
  { slug: "hair", title: "Hair Care" },
  { slug: "body", title: "Body Care" }
];

export const ingredients = [
  { slug: "neem", title: "Neem", details: "Neem is anti-bacterial and commonly used for oily/acne-prone skin." },
  { slug: "tulsi", title: "Tulsi", details: "Holy basil, calming and anti-oxidant." },
  { slug: "amla", title: "Amla", details: "Indian gooseberry — vitamin C rich, antioxidant." },
  { slug: "bhringraj", title: "Bhringraj", details: "Traditionally used for hair growth and strength." },
  { slug: "sandal", title: "Sandalwood", details: "Cooling, aromatic, soothing for skin." }
];

export const threads = [
  {
    id: "q1",
    title: "How often should I use the gentle cleanser?",
    author: { id: "u1", name: "Priya" },
    votes: 12,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4,
    recommended: 5,
    content: "I have combination skin. I tried this cleanser twice daily but my T-zone still feels oily. Any tips?",
    category: "skincare",
    attachments: [],
    repliesList: []
  },
  {
    id: "q2",
    title: "Is vitamin C serum okay for sensitive skin?",
    author: { id: "u2", name: "Anand" },
    votes: 8,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1,
    recommended: 12,
    content: "My skin gets irritated easily. Are there concentrations I should avoid?",
    category: "skincare",
    attachments: [],
    repliesList: []
  }
];

export const users = [
  { id: "u1", name: "Priya", bio: "Ayurveda enthusiast." },
  { id: "u2", name: "Anand", bio: "Student of herbal remedies." }
];
