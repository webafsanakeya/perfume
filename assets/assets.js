import gs_logo from "./gs_logo.jpg";
import happy_store from "./happy_store.webp";
import upload_area from "./upload_area.svg";
import hero_model_img from "./hero_model_img.png";
import hero_product_img1 from "./hero_product_img1.png";
import hero_product_img2 from "./hero_product_img2.png";
import product_img1 from "./product_img1.png";
import product_img2 from "./product_img2.png";
import product_img3 from "./product_img3.png";
import product_img4 from "./product_img4.png";
import product_img5 from "./product_img5.png";
import product_img6 from "./product_img6.png";
import product_img7 from "./product_img7.png";
import product_img8 from "./product_img8.png";
import product_img9 from "./product_img9.png";
import product_img10 from "./product_img10.png";
import product_img11 from "./product_img11.png";
import product_img12 from "./product_img12.png";
import { Diamond, Droplet, Feather, Heart, Sparkles, Star, Wind } from "lucide-react";
import profile_pic1 from "./profile_pic1.jpg";
import profile_pic2 from "./profile_pic2.jpg";
import profile_pic3 from "./profile_pic3.jpg";
import product_model_img1 from "./product_model_img1.jpg";
import product_model_img2 from "./product_model_img2.jpg";
import product_model_img3 from "./product_model_img3.jpg";
import product_model_img4 from "./product_model_img4.jpg";
import perfume1 from "./perfume1.jpg";
import perfume2 from "./perfume2.jpg";
import perfume3 from "./perfume3.jpg";

export const assets = {
  upload_area,
  hero_model_img,
  hero_product_img1,
  hero_product_img2,
  gs_logo,
  product_img1,
  product_img2,
  product_img3,
  product_img4,
  product_img5,
  product_img6,
  product_img7,
  product_img8,
  product_img9,
  product_img10,
  product_img11,
  product_img12,
  product_model_img1,
  product_model_img2,
  product_model_img3,
  product_model_img4,
  perfume1,
  perfume2,
  perfume3,
  
};

export const categories = [
  "CHANEL",
  "DIOR",
  "PRADA",
  "BOSS",
  "ARMANI",
  "GUCCI",
  "CANDY",
  "BHARARA",
  "PARK AVENUE",
  "ROBERTO CABALLI",
  "OLYMPEA",
  "RED DIAMOND",
  "GUERLIAN",
  "VERSACE",
  "ESCADA",

];




export const dummyRatingsData = [
  {
    id: "rat_1",
    rating: 4.2,
    review:
      "I was a bit skeptical at first, but this product turned out to be even better than I imagined. The quality feels premium, it's easy to use, and it delivers exactly what was promised. I've already recommended it to friends and will definitely purchase again in the future.",
    user: { name: "Kristin Watson", image: profile_pic1 },
    productId: "prod_1",
    createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    product: {
      name: "Bluetooth Speakers",
      category: "Electronics",
      id: "prod_1",
    },
  },
  {
    id: "rat_2",
    rating: 5.0,
    review:
      "This product is great. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.",
    user: { name: "Jenny Wilson", image: profile_pic2 },
    productId: "prod_2",
    createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    product: {
      name: "Bluetooth Speakers",
      category: "Electronics",
      id: "prod_1",
    },
  },
  {
    id: "rat_3",
    rating: 4.1,
    review:
      "This product is amazing. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.",
    user: { name: "Bessie Cooper", image: profile_pic3 },
    productId: "prod_3",
    createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    product: {
      name: "Bluetooth Speakers",
      category: "Electronics",
      id: "prod_1",
    },
  },
  {
    id: "rat_4",
    rating: 5.0,
    review:
      "This product is great. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.",
    user: { name: "Kristin Watson", image: profile_pic1 },
    productId: "prod_4",
    createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    product: {
      name: "Bluetooth Speakers",
      category: "Electronics",
      id: "prod_1",
    },
  },
  {
    id: "rat_5",
    rating: 4.3,
    review:
      "Overall, I'm very happy with this purchase. It works as described and feels durable. The only reason I didn't give it five stars is because of a small issue (such as setup taking a bit longer than expected, or packaging being slightly damaged). Still, highly recommend it for anyone looking for a reliable option.",
    user: { name: "Jenny Wilson", image: profile_pic2 },
    productId: "prod_5",
    createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    product: {
      name: "Bluetooth Speakers",
      category: "Electronics",
      id: "prod_1",
    },
  },
  {
    id: "rat_6",
    rating: 5.0,
    review:
      "This product is great. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.",
    user: { name: "Bessie Cooper", image: profile_pic3 },
    productId: "prod_6",
    createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    product: {
      name: "Bluetooth Speakers",
      category: "Electronics",
      id: "prod_1",
    },
  },
];

export const dummyStoreData = {
  id: "store_1",
  userId: "user_1",
  name: "Happy Shop",
  description:
    "At Happy Shop, we believe shopping should be simple, smart, and satisfying. Whether you're hunting for the latest fashion trends, top-notch electronics, home essentials, or unique lifestyle products — we've got it all under one digital roof.",
  username: "happyshop",
  address:
    "3rd Floor, Happy Shop , New Building, 123 street , c sector , NY, US",
  status: "approved",
  isActive: true,
  logo: happy_store,
  email: "happyshop@example.com",
  contact: "+0 1234567890",
  createdAt: "2025-09-04T09:04:16.189Z",
  updatedAt: "2025-09-04T09:04:44.273Z",
  user: {
    id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
    name: "Great Stack",
    email: "user.greatstack@gmail.com",
    image: gs_logo,
  },
};

export const productDummyData = [
  {
  "id": "prod_1",
  "name": "Luxury Perfume",
  "description": "An elegant fragrance crafted with exquisite notes of jasmine, sandalwood, and citrus. Perfect for any occasion, this long-lasting perfume enhances your aura with a touch of sophistication and charm.",
  "mrp": 40,
  "price": 29,
  "images": [product_img1, product_img2, product_img3, product_img4],
  "category": "Perfumes",
  "storeId": "seller_1",
  "inStock": true,
  "store": dummyStoreData,
  "rating": dummyRatingsData,
  "createdAt": "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
  "updatedAt": "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)"
}
,
  {
    "id": "prod_2",
    "name": "Velour Essence",
    "description": "A rich and velvety fragrance with amber and musk undertones, offering an irresistible aura of mystery and allure.",
    "mrp": 85,
    "price": 59,
    images: [product_img2],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
       "category": "Perfumes",
    rating: dummyRatingsData,
    createdAt: "Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
  {
    "id": "prod_3",
    "name": "Citrus Bloom",
    "description": "A refreshing burst of citrus fruits blended with soft floral notes, perfect for a bright and energetic personality.",
    "mrp": 60,
    "price": 42,
    images: [product_img3],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
      "category": "Perfumes",
    rating: dummyRatingsData,
    createdAt: "Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
  {
    id: "prod_4",
    "name": "Mystic Oud",
    "description": "An intense oriental fragrance with smoky oud and warm spices, designed for those who love bold and exotic scents.",
    "mrp": 120,
    "price": 95,
    images: [product_img4],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
     "category": "Perfumes",
    rating: dummyRatingsData,
    createdAt: "Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
  {
    id: "prod_5",
    "name": "Rose Amour",
    "description": "A romantic blend of fresh roses, peony, and vanilla that captures the essence of timeless love and elegance.",
    "mrp": 75,
    "price": 55,
    images: [product_img5],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
     "category": "Perfumes",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: "Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
  {
    id: "prod_6",
    "name": "Ocean Breeze",
    "description": "A crisp aquatic fragrance with sea salt, driftwood, and cool mint for a refreshing and invigorating feel.",
    "mrp": 65,
    "price": 48,
    images: [product_img6],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    "category": "Perfumes",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: "Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
  {
    id: "prod_7",
    "name": "Golden Spice",
    "description": "A warm blend of cinnamon, saffron, and vanilla with hints of honey, perfect for evening wear.",
    "mrp": 95,
    "price": 72,
    images: [product_img7],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    "category": "Perfumes",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: "Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
  {
    id: "prod_8",
    "name": "Vanilla Dream",
    "description": "A sweet and comforting perfume with rich vanilla, caramel, and tonka bean notes for cozy vibes.",
    "mrp": 55,
    "price": 39,
    images: [product_img8],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    "category": "Perfumes",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: "Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
  {
    id: "prod_9",
      "name": "Lavender Bliss",
    "description": "A calming fragrance infused with lavender, sage, and bergamot to relax your senses and uplift your mood.",
    "mrp": 62,
    "price": 44,
    images: [product_img9],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    "category": "Perfumes",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: "Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
  {
    id: "prod_10",
    "name": "Nightfall Noir",
    "description": "A deep and sensual perfume with blackcurrant, patchouli, and smoky woods, ideal for special evenings.",
    "mrp": 110,
    "price": 85,
    images: [product_img10],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    "category": "Perfumes",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: "Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
  {
    id: "prod_11",
     "name": "Spring Blossom",
    "description": "A light floral fragrance with cherry blossom, magnolia, and lily, bringing the freshness of spring.",
    "mrp": 58,
    "price": 41,
    images: [product_img11],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
     "category": "Perfumes",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: "Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
  {
    id: "prod_12",
   "name": "Celestial Aura",
  "description": "A luminous blend of bergamot, white musk, and star jasmine, evoking the elegance of a starlit evening.",
  "mrp": 105,
  "price": 79,
    images: [product_img12],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    "category": "Perfumes",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
    updatedAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
  },
];

export const ourSpecsData = [
  {
    title: "Long-Lasting Fragrance",
    description:
      "Enjoy a captivating scent that lingers with you all day long.",
     icon: Sparkles,
    accent: "#c49a6c",
  },
  {
     title: "Premium Ingredients",
    description: "Crafted with rare and authentic essences for unmatched quality.",
    icon: Droplet,
    accent: "#c49a6c",
  },
  {
    title: "Luxury Packaging",
    description: "Beautifully designed bottles that embody elegance and class.",
    icon: Diamond,
    accent: "#c49a6c",
  },
  {
    title: "Light & Refreshing",
    description: "A perfect balance of freshness and depth for every occasion.",
    icon: Feather,
    accent: "#c49a6c",
  },
  {
    title: "Unique Signature Scents",
    description: "Stand out with blends created to reflect your individuality.",
    icon: Wind,
    accent: "#c49a6c",
  },
  {
    title: "Sensual & Alluring",
    description: "Fragrances designed to enhance confidence and allure.",
    icon: Heart,
    accent: "#c49a6c",
  },
  {
    title: "Top-Rated Collection",
    description: "Discover bestsellers loved by fragrance enthusiasts worldwide.",
    icon: Star,
    accent: "#c49a6c",
  },
];

export const addressDummyData = {
  id: "addr_1",
  userId: "user_1",
  name: "John Doe",
  email: "johndoe@example.com",
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
  country: "USA",
  phone: "1234567890",
  createdAt: "Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)",
};

export const couponDummyData = [
  {
    code: "NEW20",
    description: "20% Off for New Users",
    discount: 20,
    forNewUser: true,
    forMember: false,
    isPublic: false,
    expiresAt: "2026-12-31T00:00:00.000Z",
    createdAt: "2025-08-22T08:35:31.183Z",
  },
  {
    code: "NEW10",
    description: "10% Off for New Users",
    discount: 10,
    forNewUser: true,
    forMember: false,
    isPublic: false,
    expiresAt: "2026-12-31T00:00:00.000Z",
    createdAt: "2025-08-22T08:35:50.653Z",
  },
  {
    code: "OFF20",
    description: "20% Off for All Users",
    discount: 20,
    forNewUser: false,
    forMember: false,
    isPublic: false,
    expiresAt: "2026-12-31T00:00:00.000Z",
    createdAt: "2025-08-22T08:42:00.811Z",
  },
  {
    code: "OFF10",
    description: "10% Off for All Users",
    discount: 10,
    forNewUser: false,
    forMember: false,
    isPublic: false,
    expiresAt: "2026-12-31T00:00:00.000Z",
    createdAt: "2025-08-22T08:42:21.279Z",
  },
  {
    code: "PLUS10",
    description: "20% Off for Members",
    discount: 10,
    forNewUser: false,
    forMember: true,
    isPublic: false,
    expiresAt: "2027-03-06T00:00:00.000Z",
    createdAt: "2025-08-22T11:38:20.194Z",
  },
];

export const dummyUserData = {
  id: "user_31dQbH27HVtovbs13X2cmqefddM",
  name: "GreatStack",
  email: "greatstack@example.com",
  image: gs_logo,
  cart: {},
};

export const orderDummyData = [
  {
    id: "cmemm75h5001jtat89016h1p3",
    total: 214.2,
    status: "DELIVERED",
    userId: "user_31dQbH27HVtovbs13X2cmqefddM",
    storeId: "cmemkqnzm000htat8u7n8cpte",
    addressId: "cmemm6g95001ftat8omv9b883",
    isPaid: false,
    paymentMethod: "COD",
    createdAt: "2025-08-22T09:15:03.929Z",
    updatedAt: "2025-08-22T09:15:50.723Z",
    isCouponUsed: true,
    coupon: dummyRatingsData[2],
    orderItems: [
      {
        orderId: "cmemm75h5001jtat89016h1p3",
        productId: "cmemlydnx0017tat8h3rg92hz",
        quantity: 1,
        price: 89,
        product: productDummyData[0],
      },
      {
        orderId: "cmemm75h5001jtat89016h1p3",
        productId: "cmemlxgnk0015tat84qm8si5v",
        quantity: 1,
        price: 149,
        product: productDummyData[1],
      },
    ],
    address: addressDummyData,
    user: dummyUserData,
  },
  {
    id: "cmemm6jv7001htat8vmm3gxaf",
    total: 421.6,
    status: "DELIVERED",
    userId: "user_31dQbH27HVtovbs13X2cmqefddM",
    storeId: "cmemkqnzm000htat8u7n8cpte",
    addressId: "cmemm6g95001ftat8omv9b883",
    isPaid: false,
    paymentMethod: "COD",
    createdAt: "2025-08-22T09:14:35.923Z",
    updatedAt: "2025-08-22T09:15:52.535Z",
    isCouponUsed: true,
    coupon: couponDummyData[0],
    orderItems: [
      {
        orderId: "cmemm6jv7001htat8vmm3gxaf",
        productId: "cmemm1f3y001dtat8liccisar",
        quantity: 1,
        price: 229,
        product: productDummyData[2],
      },
      {
        orderId: "cmemm6jv7001htat8vmm3gxaf",
        productId: "cmemm0nh2001btat8glfvhry1",
        quantity: 1,
        price: 99,
        product: productDummyData[3],
      },
      {
        orderId: "cmemm6jv7001htat8vmm3gxaf",
        productId: "cmemlz8640019tat8kz7emqca",
        quantity: 1,
        price: 199,
        product: productDummyData[4],
      },
    ],
    address: addressDummyData,
    user: dummyUserData,
  },
];

export const storesDummyData = [
  {
    id: "cmemkb98v0001tat8r1hiyxhn",
    userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
    name: "GreatStack",
    description:
      "GreatStack is the education marketplace where you can buy goodies related to coding and tech",
    username: "greatstack",
    address: "123 Maplewood Drive Springfield, IL 62704 USA",
    status: "approved",
    isActive: true,
    logo: gs_logo,
    email: "greatstack@example.com",
    contact: "+0 1234567890",
    createdAt: "2025-08-22T08:22:16.189Z",
    updatedAt: "2025-08-22T08:22:44.273Z",
    user: dummyUserData,
  },
  {
    id: "cmemkqnzm000htat8u7n8cpte",
    userId: "user_31dQbH27HVtovbs13X2cmqefddM",
    name: "Happy Shop",
    description:
      "At Happy Shop, we believe shopping should be simple, smart, and satisfying. Whether you're hunting for the latest fashion trends, top-notch electronics, home essentials, or unique lifestyle products — we've got it all under one digital roof.",
    username: "happyshop",
    address:
      "3rd Floor, Happy Shop , New Building, 123 street , c sector , NY, US",
    status: "approved",
    isActive: true,
    logo: happy_store,
    email: "happyshop@example.com",
    contact: "+0 123456789",
    createdAt: "2025-08-22T08:34:15.155Z",
    updatedAt: "2025-08-22T08:34:47.162Z",
    user: dummyUserData,
  },
];

export const dummyAdminDashboardData = {
  orders: 6,
  stores: 2,
  products: 12,
  revenue: "959.10",
  allOrders: [
    { createdAt: "2025-08-20T08:46:58.239Z", total: 145.6 },
    { createdAt: "2025-08-22T08:46:21.818Z", total: 97.2 },
    { createdAt: "2025-08-22T08:45:59.587Z", total: 54.4 },
    { createdAt: "2025-08-23T09:15:03.929Z", total: 214.2 },
    { createdAt: "2025-08-23T09:14:35.923Z", total: 421.6 },
    { createdAt: "2025-08-23T11:44:29.713Z", total: 26.1 },
    { createdAt: "2025-08-24T09:15:03.929Z", total: 214.2 },
    { createdAt: "2025-08-24T09:14:35.923Z", total: 421.6 },
    { createdAt: "2025-08-24T11:44:29.713Z", total: 26.1 },
    { createdAt: "2025-08-24T11:56:29.713Z", total: 36.1 },
    { createdAt: "2025-08-25T11:44:29.713Z", total: 26.1 },
    { createdAt: "2025-08-25T09:15:03.929Z", total: 214.2 },
    { createdAt: "2025-08-25T09:14:35.923Z", total: 421.6 },
    { createdAt: "2025-08-25T11:44:29.713Z", total: 26.1 },
    { createdAt: "2025-08-25T11:56:29.713Z", total: 36.1 },
    { createdAt: "2025-08-25T11:30:29.713Z", total: 110.1 },
  ],
};

export const dummyStoreDashboardData = {
  ratings: dummyRatingsData,
  totalOrders: 2,
  totalEarnings: 636,
  totalProducts: 5,
};
