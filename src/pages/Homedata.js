import { casio_watch, iphone12, brown_jacket, hd_monitor, sneaker, men_clothes, ladies_dress, win_kitchen, stores } from "../assets";

export const Trending = [
  {
    imageUrl: casio_watch,
    name: "Casio watch",
    price: "$10",
    tag: "free delivery",
  },
  {
    imageUrl: iphone12,
    name: "iphone",
    price: "$20",
    tag: "free delivery",
  },
  {
    imageUrl: brown_jacket,
    name: "Brown Jacket",
    price: "$15",
    tag: "free delivery",
  },
  {
    imageUrl: hd_monitor,
    name: "HD IPD Display",
    price: "$25",
    tag: "free delivery",
  },
];

export const categoriesData = [
  {
    name: "Sneakers",
    image: sneaker,
  },
  {
    name: "Mens clothes",
    image: men_clothes,
  },
  {
    name: "Ladies Dress",
    image: ladies_dress,
  },
  {
    name: "Casio watch",
    image: sneaker,
  },
  {
    name: "Win Kitchen",
    image: win_kitchen,
  },
  {
    name: "Stores",
    image: stores,
  },
];

export const categories = [
  {
    name: "Company",
    links: [
      { label: "About", url: "/about" },
      { label: "Contact us", url: "/contact" },
      { label: "Support", url: "/support" },
      { label: "Careers", url: "/careers" },
    ],
  },
  {
    name: "Quick link",
    links: [
      { label: "Order Tracking", url: "/Tracking" },
      { label: "FAQs", url: "/FaQs" },
    ],
  },
  {
    name: "Legal",
    links: [
      { label: "Terms & Conditions", url: "/T&C" },
      { label: "Privacy Policy", url: "/privacypolicy" },
    ],
  },
];