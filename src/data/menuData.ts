export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  sizes?: {
    label: string; // e.g. "S", "M", "L", "Half", "Full", "5 Pcs", etc.
    name: string;
    price: number;
  }[];
  price?: number;
}

export interface DealItem {
  id: string;
  dealNumber: number | string;
  title: string;
  items: string[];
  price: number;
  originalPrice?: number;
  tag?: string;
  isHero?: boolean;
  serves?: string;
  image: string;
}

export const MENU_CATEGORIES = [
  { id: "all", label: "All Items", icon: "UtensilsCrossed" },
  { id: "deals", label: "Value Deals", icon: "Sparkles", badge: "Hot" },
  { id: "burgers", label: "Burgers", icon: "Sandwich" },
  { id: "regular-pizza", label: "Regular Pizza", icon: "Pizza" },
  { id: "special-pizza", label: "Our Specials", icon: "Flame", badge: "Chef Special" },
  { id: "fryd-crispy", label: "Fryd & Crispy", icon: "Drumstick" },
  { id: "roll", label: "Roll & Shawarma", icon: "Scroll" },
  { id: "pasta", label: "Pasta", icon: "Soup", badge: "10/10 Taste" },
  { id: "fries", label: "Fries", icon: "Zap" },
  { id: "sandwiches", label: "Sandwiches", icon: "Layers" },
  { id: "beverages", label: "Beverages", icon: "Coffee" },
  { id: "addons", label: "Add-Ons", icon: "Plus" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // --- BURGERS ---
  // ==========================================
  {
    id: "burger-zingrato",
    name: "Zingrato Burger",
    category: "burgers",
    description: "Kasur's 10/10 rated favorite! Super juicy & crunchy golden chicken zinger fillet topped with iceberg lettuce and signature spicy mayo.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
    badge: "10/10 Rated Juicy",
    isPopular: true,
    isSpicy: true,
    price: 450,
  },
  {
    id: "burger-reggy",
    name: "Reggy Burger",
    category: "burgers",
    description: "Classic golden fried chicken patty burger layered with fresh coleslaw, melted cheese sauce, and toasted sesame buns.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80",
    badge: "Classic Choice",
    price: 370,
  },
  {
    id: "burger-spice",
    name: "Spice Burger",
    category: "burgers",
    description: "Fiery spiced chicken burger seasoned with Hunger Spot secret spices, jalapenos, crunchy greens, and spicy dressing.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=80",
    badge: "Extra Spicy",
    isSpicy: true,
    price: 360,
  },
  {
    id: "burger-hunger-special",
    name: "Hunger Special Burger",
    category: "burgers",
    description: "The ultimate gourmet masterpiece: double layered premium chicken fillets, molten cheese slice, caramelised onion hints, and chef's special secret sauce.",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&auto=format&fit=crop&q=80",
    badge: "House Signature",
    isPopular: true,
    price: 690,
  },

  // ==========================================
  // --- REGULAR PIZZAS (S: 650, M: 1249, L: 1650) ---
  // ==========================================
  {
    id: "reg-chicken-tikka",
    name: "Chicken Tikka Pizza",
    category: "regular-pizza",
    description: "Traditional marinated smoky BBQ chicken tikka chunks with onions, fresh bell peppers and rich stretchy mozzarella on hand-kneaded dough.",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&auto=format&fit=crop&q=80",
    badge: "Kasur Favorite",
    isPopular: true,
    isSpicy: true,
    sizes: [
      { label: "S", name: "Small", price: 650 },
      { label: "M", name: "Medium", price: 1249 },
      { label: "L", name: "Large", price: 1650 },
    ],
  },
  {
    id: "reg-cheese-lover",
    name: "Cheese Lover Pizza",
    category: "regular-pizza",
    description: "Pure melted cheese bliss: loaded layers of golden baked stretchy mozzarella, cheddar hint, and Italian herb tomato base.",
    image: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=800&auto=format&fit=crop&q=80",
    badge: "Double Cheese",
    isVegetarian: true,
    sizes: [
      { label: "S", name: "Small", price: 650 },
      { label: "M", name: "Medium", price: 1249 },
      { label: "L", name: "Large", price: 1650 },
    ],
  },
  {
    id: "reg-chicken-supreme",
    name: "Chicken Supreme Pizza",
    category: "regular-pizza",
    description: "Generous combination of spiced chicken chunks, sliced black olives, garden bell peppers, sweet onions, and melted mozzarella.",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&auto=format&fit=crop&q=80",
    badge: "Supreme Loaded",
    isPopular: true,
    sizes: [
      { label: "S", name: "Small", price: 650 },
      { label: "M", name: "Medium", price: 1249 },
      { label: "L", name: "Large", price: 1650 },
    ],
  },
  {
    id: "reg-chicken-fajita",
    name: "Chicken Fajita Pizza",
    category: "regular-pizza",
    description: "Zesty Mexican-spiced chicken fajita slices, crunchy green bell peppers, diced sweet onions, and premium golden mozzarella.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80",
    isPopular: true,
    sizes: [
      { label: "S", name: "Small", price: 650 },
      { label: "M", name: "Medium", price: 1249 },
      { label: "L", name: "Large", price: 1650 },
    ],
  },
  {
    id: "reg-hot-chilli",
    name: "Hot & Chilli Pizza",
    category: "regular-pizza",
    description: "Spicy food lovers' choice: spicy chicken, sliced jalapenos, fiery red chili flakes, crunchy capsicum, and molten cheese.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=80",
    badge: "Fiery Hot",
    isSpicy: true,
    sizes: [
      { label: "S", name: "Small", price: 650 },
      { label: "M", name: "Medium", price: 1249 },
      { label: "L", name: "Large", price: 1650 },
    ],
  },
  {
    id: "reg-achari-pizza",
    name: "Achari Pizza",
    category: "regular-pizza",
    description: "Mouthwatering Pakistani tangy achari marinated chicken, pickled spices, green peppers, onions, and golden mozzarella.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
    badge: "Desi Tangy Twist",
    isSpicy: true,
    sizes: [
      { label: "S", name: "Small", price: 650 },
      { label: "M", name: "Medium", price: 1249 },
      { label: "L", name: "Large", price: 1650 },
    ],
  },

  // ==========================================
  // --- OUR SPECIALS (PIZZAS - Medium & Large) ---
  // ==========================================
  {
    id: "sp-behari-kabab",
    name: "Behari Kabab Pizza",
    category: "special-pizza",
    description: "Loaded with cheese mix, chicken, jalapenos, capsicum, perioti, black olives, onions & authentic melt-in-mouth behari kabab chunks.",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&auto=format&fit=crop&q=80",
    badge: "Chef Special",
    isPopular: true,
    isSpicy: true,
    sizes: [
      { label: "M", name: "Medium", price: 1499 },
      { label: "L", name: "Large", price: 1999 },
    ],
  },
  {
    id: "sp-stuff-crust",
    name: "Stuff Crust Pizza",
    category: "special-pizza",
    description: "Loaded with cheese mix, chicken, jalapenos, capsicum, perioti, black olives, onions & behari kabab with a rich cheese-stuffed outer ring.",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&auto=format&fit=crop&q=80",
    badge: "Cheese Stuffed Rim",
    isPopular: true,
    sizes: [
      { label: "M", name: "Medium", price: 1549 },
      { label: "L", name: "Large", price: 2049 },
    ],
  },
  {
    id: "sp-crown-crust",
    name: "Crown Crust Pizza",
    category: "special-pizza",
    description: "A flavourful blend of special sauce, chicken & smokey tikka, bell peppers, onions, capsicum, olives & black olives on top with appetizing crown edges.",
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&auto=format&fit=crop&q=80",
    badge: "Royal Crown Crust",
    isPopular: true,
    sizes: [
      { label: "M", name: "Medium", price: 1499 },
      { label: "L", name: "Large", price: 1990 },
    ],
  },
  {
    id: "sp-royal-kabab",
    name: "Royal Kabab Pizza",
    category: "special-pizza",
    description: "Special sauce, loaded with Cheese Mix, seekh kabab, capsicums, mushrooms, tikka & onion with our mouth watering flavours of Royal.",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800&auto=format&fit=crop&q=80",
    badge: "Royal Taste",
    isPopular: true,
    isSpicy: true,
    sizes: [
      { label: "M", name: "Medium", price: 1549 },
      { label: "L", name: "Large", price: 2099 },
    ],
  },
  {
    id: "sp-hunger-special-pizza",
    name: "Hunger Special Pizza",
    category: "special-pizza",
    description: "Our ultimate house signature: a flavourful blend of special sauce, chicken & smokey tikka, bell peppers, onions, capsicum, olives & black olives on top with double mozzarella.",
    image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=800&auto=format&fit=crop&q=80",
    badge: "Hunger Spot Signature",
    isPopular: true,
    sizes: [
      { label: "M", name: "Medium", price: 1590 },
      { label: "L", name: "Large", price: 2290 },
    ],
  },

  // ==========================================
  // --- FRYD & CRISPY ---
  // ==========================================
  {
    id: "fryd-hot-wings",
    name: "Hot Wings",
    category: "fryd-crispy",
    description: "Sizzling crispy fried chicken wings coated in hot fiery spices. Golden, crunchy, and packed with bold flavor.",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=80",
    badge: "Spicy Crunch",
    isSpicy: true,
    isPopular: true,
    sizes: [
      { label: "5 Pcs", name: "5 Pieces", price: 370 },
      { label: "10 Pcs", name: "10 Pieces", price: 650 },
    ],
  },
  {
    id: "fryd-injected-nuggets",
    name: "Injected Nuggets (5 Pcs)",
    category: "fryd-crispy",
    description: "Crispy breaded golden nuggets bursting on the inside with melted cheese and delicious savory savory sauce injection.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80",
    badge: "Cheese Burst",
    isPopular: true,
    price: 470,
  },
  {
    id: "fryd-plain-nuggets",
    name: "Plain Nuggets",
    category: "fryd-crispy",
    description: "Classic golden fried tender chicken nuggets. Crunchy on the outside, succulent on the inside.",
    image: "https://images.unsplash.com/photo-1585325701165-351af916e581?w=800&auto=format&fit=crop&q=80",
    sizes: [
      { label: "5 Pcs", name: "5 Pieces", price: 390 },
      { label: "10 Pcs", name: "10 Pieces", price: 710 },
    ],
  },
  {
    id: "fryd-peri-peri-wings",
    name: "Peri Peri Wings",
    category: "fryd-crispy",
    description: "Crispy fried wings tossed in zesty, tangy African peri-peri glaze with fresh herbs.",
    image: "https://images.unsplash.com/photo-1527477378408-1bc49c334b07?w=800&auto=format&fit=crop&q=80",
    badge: "Tangy Peri Peri",
    isSpicy: true,
    sizes: [
      { label: "6 Pcs", name: "6 Pieces", price: 390 },
      { label: "12 Pcs", name: "12 Pieces", price: 710 },
    ],
  },
  {
    id: "fryd-honey-wings",
    name: "Honey Wings",
    category: "fryd-crispy",
    description: "Crunchy fried wings glazed in sweet, glossy honey sauce with a hint of toasted sesame.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=80",
    badge: "Sweet & Savory",
    sizes: [
      { label: "6 Pcs", name: "6 Pieces", price: 449 },
      { label: "12 Pcs", name: "12 Pieces", price: 849 },
    ],
  },
  {
    id: "fryd-chicken-strips",
    name: "Chicken Strips (6 Pcs)",
    category: "fryd-crispy",
    description: "Pure tender chicken breast strips in super crunchy golden crumb coating. Served hot with dip sauce.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80",
    badge: "Tender Strips",
    isPopular: true,
    price: 620,
  },
  {
    id: "fryd-crispy-chicken",
    name: "Crispy Chicken",
    category: "fryd-crispy",
    description: "Traditional American-style deep-fried bone-in chicken piece with unbeatable crunch and juicy meat.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&auto=format&fit=crop&q=80",
    badge: "Golden Fried",
    sizes: [
      { label: "1 Pc", name: "1 Piece", price: 280 },
      { label: "3 Pcs", name: "3 Pieces", price: 699 },
    ],
  },
  {
    id: "fryd-hot-shot",
    name: "Hot Shot",
    category: "fryd-crispy",
    description: "Bite-sized crispy popcorn chicken bites loaded with spicy seasonings. Perfect for snacking on the go.",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&auto=format&fit=crop&q=80",
    badge: "Popcorn Bites",
    sizes: [
      { label: "10 Pcs", name: "10 Pieces", price: 440 },
      { label: "20 Pcs", name: "20 Pieces", price: 849 },
    ],
  },

  // ==========================================
  // --- ROLL & SHAWARMA ---
  // ==========================================
  {
    id: "roll-arabic-roll",
    name: "Arabic Roll",
    category: "roll",
    description: "Middle-Eastern inspired toasted wrap packed with grilled spiced chicken, pickles, crispy fries, and authentic garlic sauce.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80",
    badge: "Arabic Garlic",
    isPopular: true,
    price: 549,
  },
  {
    id: "roll-spin-roll",
    name: "Spin Roll (4 Pcs)",
    category: "roll",
    description: "Four sliced pieces of crispy paratha roll stuffed with spiced chicken tikka chunks, creamy sauce, and fresh salad.",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=80",
    badge: "4 Pcs Platter",
    price: 649,
  },
  {
    id: "roll-chicken-shawarma",
    name: "Chicken Shawarma",
    category: "roll",
    description: "Kasur's favorite 9/10 rated juicy chicken shawarma! Succulent shredded chicken, creamy garlic sauce, and crisp vegetables in soft pita.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&auto=format&fit=crop&q=80",
    badge: "9/10 Rated Bestseller",
    isPopular: true,
    price: 320,
  },

  // ==========================================
  // --- PASTA ---
  // ==========================================
  {
    id: "pasta-bbq",
    name: "BBQ Pasta",
    category: "pasta",
    description: "Oven baked penne pasta baked with smokey BBQ chicken chunks, rich tomato-cream sauce, and golden bubbling mozzarella.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
    badge: "Smokey BBQ",
    sizes: [
      { label: "Half", name: "Half Portion", price: 449 },
      { label: "Full", name: "Full Portion", price: 799 },
    ],
  },
  {
    id: "pasta-crunchy",
    name: "Crunchy Pasta",
    category: "pasta",
    description: "Kasur's famous 10/10 rated sensation! Cheesy baked pasta smothered in creamy sauce and crowned with crispy fried crunchy chicken bites.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?w=800&auto=format&fit=crop&q=80",
    badge: "10/10 Review Favorite",
    isPopular: true,
    sizes: [
      { label: "Half", name: "Half Portion", price: 499 },
      { label: "Full", name: "Full Portion", price: 849 },
    ],
  },

  // ==========================================
  // --- FRIES ---
  // ==========================================
  {
    id: "fries-plain",
    name: "Plain Fries",
    category: "fries",
    description: "Golden, crispy, perfectly salted french fries cooked fresh to order with delicious potato crunch.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=800&auto=format&fit=crop&q=80",
    sizes: [
      { label: "M", name: "Medium", price: 210 },
      { label: "L", name: "Large", price: 349 },
      { label: "Family", name: "Family Pack", price: 449 },
    ],
  },
  {
    id: "fries-bbq",
    name: "BBQ Fries",
    category: "fries",
    description: "Crispy french fries tossed with smoky BBQ seasonings, paprika, and savory barbecue drizzle.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop&q=80",
    badge: "Smoky Crunch",
    price: 649,
  },
  {
    id: "fries-pizza-loaded",
    name: "Pizza Loaded Fries",
    category: "fries",
    description: "Kasur foodies' obsession: golden fries loaded with pizza sauce, seasoned chicken tikka chunks, black olives, jalapenos, and molten baked mozzarella cheese.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop&q=80",
    badge: "Molten Baked Cheese",
    isPopular: true,
    price: 749,
  },

  // ==========================================
  // --- SANDWICHES ---
  // ==========================================
  {
    id: "sandwich-club",
    name: "Club Sandwich",
    category: "sandwiches",
    description: "Triple layered toasted bread filled with spiced shredded chicken, fried egg, cucumber, tomato, cheese, and creamy mayo. Served with fries.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=80",
    badge: "Triple Decker",
    isPopular: true,
    price: 649,
  },
  {
    id: "sandwich-hunger-special",
    name: "Hunger Special Sandwich",
    category: "sandwiches",
    description: "Signature toasted sandwich packed with double spiced chicken, melted cheddar, lettuce, and Hunger Spot's special dressing.",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&auto=format&fit=crop&q=80",
    badge: "Hunger Special",
    price: 699,
  },
  {
    id: "sandwich-mexican",
    name: "Mexican Sandwich",
    category: "sandwiches",
    description: "Zesty Mexican chicken sandwich loaded with jalapenos, bell peppers, chili salsa spread, and molten cheese.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80",
    badge: "Zesty Mexican",
    isSpicy: true,
    price: 799,
  },

  // ==========================================
  // --- BEVERAGES ---
  // ==========================================
  {
    id: "bev-drink-350ml",
    name: "350ml Soft Drink",
    category: "beverages",
    description: "Chilled 350ml bottle (Pepsi, 7Up, Mirinda, Dew).",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop&q=80",
    price: 99,
  },
  {
    id: "bev-drink-500ml",
    name: "500ml Soft Drink",
    category: "beverages",
    description: "Chilled 500ml bottle (Pepsi, 7Up, Mirinda, Dew).",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
    price: 139,
  },
  {
    id: "bev-drink-1-5l",
    name: "1.5 Ltr Family Drink",
    category: "beverages",
    description: "Chilled 1.5 liter family bottle for gatherings and feasts.",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800&auto=format&fit=crop&q=80",
    badge: "Family Size",
    price: 229,
  },
  {
    id: "bev-water-500ml",
    name: "500ml Mineral Water",
    category: "beverages",
    description: "Clean, pure chilled drinking water bottle.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=800&auto=format&fit=crop&q=80",
    price: 70,
  },
  {
    id: "bev-mint-margarita",
    name: "Mint Margarita",
    category: "beverages",
    description: "Icy refreshing blender drink made with fresh garden mint leaves, lemon juice, crushed ice, and sparkling fizz.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
    badge: "Refreshing Frosty",
    isPopular: true,
    price: 249,
  },
  {
    id: "bev-lemonade",
    name: "Lemonade",
    category: "beverages",
    description: "Freshly squeezed citrus lemonade served chilled over ice with a sweet and tangy balance.",
    image: "https://images.unsplash.com/photo-1523371067-1acfe831b539?w=800&auto=format&fit=crop&q=80",
    price: 199,
  },

  // ==========================================
  // --- ADD-ONS ---
  // ==========================================
  {
    id: "addon-extra-topping",
    name: "Extra Topping (Cheese & Chicken)",
    category: "addons",
    description: "Add an extra layer of mozzarella cheese and spiced chicken chunks to any pizza.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
    sizes: [
      { label: "M", name: "Medium Pizza", price: 249 },
      { label: "L", name: "Large Pizza", price: 349 },
    ],
  },
  {
    id: "addon-dip-sauce",
    name: "Dip Sauce",
    category: "addons",
    description: "Creamy garlic mayo or spicy dipping sauce cup.",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=800&auto=format&fit=crop&q=80",
    price: 60,
  },
  {
    id: "addon-special-sauce",
    name: "Special Sauce",
    category: "addons",
    description: "Hunger Spot's signature secret spiced sauce cup.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    badge: "House Secret",
    price: 80,
  },
];

// ==========================================
// --- NUMBERED DEALS FROM OFFICIAL FLYER ---
// ==========================================
export const DEALS: DealItem[] = [
  {
    id: "deal-1",
    dealNumber: 1,
    title: "Deal 1",
    tag: "Solo Classic Combo",
    serves: "1 Person",
    price: 640,
    originalPrice: 750,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80",
    items: [
      "1 Reggy Burger",
      "Medium Fries",
      "350ml Drink",
    ],
  },
  {
    id: "deal-2",
    dealNumber: 2,
    title: "Deal 2",
    tag: "Zingrato Meal Deal",
    serves: "1 Person",
    price: 720,
    originalPrice: 850,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
    items: [
      "1 Zingrato Burger",
      "Medium Fries",
      "350ml Drink",
    ],
  },
  {
    id: "deal-3",
    dealNumber: 3,
    title: "Deal 3",
    tag: "Strips & Dip Combo",
    serves: "1–2 Persons",
    price: 949,
    originalPrice: 1100,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80",
    items: [
      "Chicken Strips 6 Pcs",
      "Medium Fries",
      "500ml Drink",
      "Dip Sauce",
    ],
  },
  {
    id: "deal-4",
    dealNumber: 4,
    title: "Deal 4",
    tag: "Pizza & Wings Feast",
    serves: "3–4 Persons",
    price: 1950,
    originalPrice: 2250,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80",
    items: [
      "1 Medium Pizza (Reg)",
      "Hot Wings 10 Pcs",
      "1.5 Ltr Drink",
    ],
  },
  {
    id: "deal-5",
    dealNumber: 5,
    title: "Deal 5",
    tag: "Large Pizza & Hot Shots",
    serves: "4–5 Persons",
    price: 2300,
    originalPrice: 2650,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&auto=format&fit=crop&q=80",
    items: [
      "1 Large Pizza (Reg)",
      "Hot Shot 10 Pcs",
      "Medium Fries",
      "1.5 Ltr Drink",
    ],
  },
  {
    id: "deal-6",
    dealNumber: 6,
    title: "Deal 6",
    tag: "5 Zingrato Squad Feast",
    serves: "5 Persons",
    price: 2650,
    originalPrice: 3100,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&auto=format&fit=crop&q=80",
    items: [
      "5 Zingrato Burgers",
      "Large Fries",
      "1.5 Ltr Drink",
    ],
  },
  {
    id: "deal-7",
    dealNumber: 7,
    title: "Deal 7",
    tag: "Twin Large Pizza Party",
    serves: "5–6 Persons",
    price: 3299,
    originalPrice: 3800,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
    items: [
      "2 Large Pizzas (Reg)",
      "1.5 Ltr Drink",
    ],
  },
  {
    id: "deal-sooper-big",
    dealNumber: "Mega",
    title: "Sooper Big Deal",
    tag: "Jumbo Family & Friends Mega Feast",
    serves: "7–9 Persons",
    price: 4999,
    originalPrice: 5800,
    isHero: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&auto=format&fit=crop&q=80",
    items: [
      "2 Large Pizzas (Reg)",
      "Hot Wings 10 Pcs",
      "Nuggets 10 Pcs",
      "Family Fries",
      "1.5 Ltr Drink",
    ],
  },
];

// ==========================================
// --- BUSINESS DETAILS ---
// ==========================================
export const BUSINESS_INFO = {
  name: "Hunger Spot",
  nameUrdu: "ہنگر سپاٹ",
  tagline: "One Spot. Every Craving.",
  heroTagline: "Fast • Fresh • Delicious",
  phone: "0303 8023907",
  phoneFormatted: "0303 8023907",
  phoneSecondary: "+92 303 8023907",
  phoneSecondaryFormatted: "+92 303 8023907",
  whatsappNumber: "923038023907",
  address: "Satluj Filling Station (Shell) Kasur Bypass, Kasur, Punjab, Pakistan",
  area: "Kasur Bypass",
  plusCode: "5F33+M3P, Kasur, Pakistan",
  city: "Kasur",
  country: "Pakistan",
  mapsUrl: "https://maps.google.com/?q=5F33%2BM3P,+Kasur,+Pakistan",
  instagramUrl: "https://www.instagram.com/hungerspot.kasur/",
  tiktokHandle: "@hungerspot",
  facebookPage: "Hunger Spot",
  rating: 5.0,
  reviewCount: 3,
  priceRange: "Rs 70 – 4,999",
  hours: "Open Daily • 1:00 PM – 2:00 AM",
  deliveryNote: "Fast Home Delivery Across Kasur",
  minFreeDelivery: 800,
  deliveryEstMinutes: "25–40 mins",
  serviceOptions: ["Takeout", "Dine-in", "Home Delivery"],
  atmosphere: "Modern Air-Conditioned Sitting Area & Family Friendly",
  parking: "Dedicated Fuel Station & Restaurant Parking",
};
