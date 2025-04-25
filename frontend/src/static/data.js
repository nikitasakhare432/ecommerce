// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Best Selling",
    url: "/best-selling",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Events",
    url: "/events",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];

// branding data
// branding data
export const brandingData = [
  {
    id: 1,
    title: "Free Home Delivery",
    Description: "On orders above $100",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/9561/9561688.png"
        alt="Free Home Delivery"
        className="w-9 h-9"
      />
    ),
  },
  {
    id: 2,
    title: "Daily Fresh Deals",
    Description: "Up to 25% off on veggies & fruits",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/1202/1202125.png"
        alt="Daily Fresh Deals"
        className="w-9 h-9"
      />
    ),
  },
  {
    id: 3,
    title: "Budget-Friendly Prices",
    Description: "Factory rates on everyday groceries",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/726/726476.png"
        alt="Budget-Friendly Prices"
        className="w-9 h-9"
      />
    ),
  },
  {
    id: 4,
    title: "Secure Online Payments",
    Description: "Safe checkout, trusted by thousands",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/726/726559.png"
        alt="Secure Online Payments"
        className="w-9 h-9"
      />
    ),
  },
];



// categories data
export const categoriesData = [
  {
    id: 1,
    title: "Vegetables",
    subTitle: "",
    image_Url:
      "https://img.freepik.com/free-psd/vibrant-vegetable-harvest-colorful-collection-fresh-produce_191095-79960.jpg",
  },
  {
    id: 2,
    title: "Fruits",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbMOVB8a8wRQ6e-UKZggiu7-edRAN1GolPQ&s",
  },
  {
    id: 3,
    title: "Dairy Products",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7ug5hIZ4iOedrMNimyrfl7igzno0hXQ7eQ&s",
  },
  {
    id: 4,
    title: "Grains, Pulses & Flours",
    subTitle: "",
    image_Url:
      "https://www.bbassets.com/media/uploads/p/m/10000440_17-bb-royal-moong-dal.jpg?tr=w-154,q-80",
  },
  {
    id: 5,
    title: "Oil, Spices & Masala",
    subTitle: "",
    image_Url:
      "https://www.bbassets.com/media/uploads/p/m/40314778_2-bb-royal-active-blended-oil.jpg?tr=w-154,q-80",
  },
  {
    id: 6,
    title: "Snacks",
    subTitle: "",
    image_Url:
      "https://www.bbassets.com/media/uploads/p/m/1201903_1-haldirams-namkeen-khatta-meetha.jpg?tr=w-154,q-80",
  },

];

// product Data
export const productData = [
  {
    id: 1,
    category: "Fruits",
    name: "Fresh Organic Bananas - 1 Dozen",
    description:
      "Enjoy fresh and organic bananas sourced directly from local farms. Rich in potassium, perfect for a healthy snack or adding to your morning smoothie. Naturally ripened and chemical-free.",
    image_Url: [
      {
        public_id: "banana",
        url: "https://img.freepik.com/free-psd/vibrant-vegetable-harvest-colorful-collection-fresh-produce_191095-79960.jpg",
      },
    ],
    shop: {
      name: "Farm Fresh Market",
      shop_avatar: {
        public_id: "farm_logo",
        url: "https://img.freepik.com/free-psd/vibrant-vegetable-harvest-colorful-collection-fresh-produce_191095-79960.jpg",
      },
      ratings: 4.8,
    },
    price: 1.99,
    discount_price: 1.49,
    rating: 4.7,
    total_sell: 120,
    stock: 100,
  },
  {
    id: 2,
    category: "Vegetables",
    name: "Organic Tomatoes - 1 Kg",
    description:
      "Juicy and ripe organic tomatoes ideal for cooking or salads. No pesticides, hand-picked, and farm-fresh. Store in a cool place for longer shelf life.",
    image_Url: [
      {
        public_id: "tomato",
        url: "https://www.bbassets.com/media/uploads/p/m/10000440_17-bb-royal-moong-dal.jpg?tr=w-154,q-80",
      },
    ],
    shop: {
      name: "GreenBasket",
      shop_avatar: {
        public_id: "greenbasket_logo",
        url: "https://www.bbassets.com/media/uploads/p/m/10000440_17-bb-royal-moong-dal.jpg?tr=w-154,q-80",
      },
      ratings: 4.6,
    },
    price: 2.49,
    discount_price: 2.29,
    rating: 4.5,
    total_sell: 80,
    stock: 50,
  },
  {
    id: 3,
    category: "Dairy",
    name: "Amul Full Cream Milk - 1 Liter Pack",
    description:
      "High-quality full cream milk from Amul. Packed with nutrients and perfect for tea, coffee, or drinking directly. Pasteurized and hygienically packed.",
    image_Url: [
      {
        public_id: "milk",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7ug5hIZ4iOedrMNimyrfl7igzno0hXQ7eQ&s",
      },
    ],
    shop: {
      name: "Amul Dairy",
      shop_avatar: {
        public_id: "amul_logo",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7ug5hIZ4iOedrMNimyrfl7igzno0hXQ7eQ&s",
      },
      ratings: 4.9,
    },
    price: 1.2,
    discount_price: 1.1,
    rating: 4.8,
    total_sell: 200,
    stock: 150,
  },
  {
    id: 4,
    category: "Bakery",
    name: "Fresh Whole Wheat Bread - 400g",
    description:
      "Soft and healthy whole wheat bread baked daily. No preservatives, great for sandwiches and toast. Contains natural fibers for better digestion.",
    image_Url: [
      {
        public_id: "bread",
        url: "https://cdn.pixabay.com/photo/2016/02/18/17/49/bread-1209607_1280.jpg",
      },
    ],
    shop: {
      name: "Daily Delights",
      shop_avatar: {
        public_id: "bakery_logo",
        url: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      },
      ratings: 4.4,
    },
    price: 0.99,
    discount_price: 0.79,
    rating: 4.3,
    total_sell: 60,
    stock: 40,
  },
  {
    id: 5,
    category: "Snacks & Beverages",
    name: "Tata Tea Premium - 250g",
    description:
      "Rich taste and strong aroma in every cup. Tata Tea Premium is one of India's most loved teas, ideal for chai lovers. Vacuum-sealed for freshness.",
    image_Url: [
      {
        public_id: "tea",
        url: "https://www.bbassets.com/media/uploads/p/m/1201903_1-haldirams-namkeen-khatta-meetha.jpg?tr=w-154,q-80",
      },
    ],
    shop: {
      name: "Tata Consumer Products",
      shop_avatar: {
        public_id: "tata_logo",
        url: "https://www.bbassets.com/media/uploads/p/m/1201903_1-haldirams-namkeen-khatta-meetha.jpg?tr=w-154,q-80g",
      },
      ratings: 4.7,
    },
    price: 2.99,
    discount_price: 2.5,
    rating: 4.6,
    total_sell: 180,
    stock: 90,
  },
];


export const footerProductLinks = [
  {
    name: "About us",
    link: "/about"
  },
  {
    name: "Careers",
    link: "/carrers"
  },
  {
    name: "Store Locations",
  },
  {
    name: "Our Blog",
  },
  {
    name: "Reviews",
  },
];

export const footercompanyLinks = [
  {
    name: "Vegetables",
  },
  {
    name: "Fruits",
  },
  {
    name: "Dairy Products",
  },
  {
    name: "Snacks",
  },

];

export const footerSupportLinks = [
  {
    name: "FAQ",
  },
  {
    name: "Reviews",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Shipping",
  },
  {
    name: "Live chat",
  },
];
