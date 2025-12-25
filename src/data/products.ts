import productJacket from "@/assets/product-jacket.jpg";
import productBreeches from "@/assets/product-breeches.jpg";
import productBaselayer from "@/assets/product-baselayer.jpg";
import productSaddlepad from "@/assets/product-saddlepad.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "classic-riding-jacket",
    name: "Classic Riding Jacket",
    price: 289,
    image: productJacket,
    category: "Jackets",
    description: "A timeless riding jacket crafted from premium technical fabric. Features a tailored silhouette, water-resistant coating, and breathable mesh lining for all-day comfort in the saddle.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Hunter Green"],
    inStock: true,
  },
  {
    id: "high-waist-breeches",
    name: "High Waist Breeches",
    price: 199,
    image: productBreeches,
    category: "Breeches",
    description: "Sophisticated high-waist breeches with superior stretch and recovery. Features silicone grip patches, a flattering fit, and moisture-wicking fabric for optimal performance.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Beige", "Navy"],
    inStock: true,
  },
  {
    id: "performance-base-layer",
    name: "Performance Base Layer",
    price: 89,
    image: productBaselayer,
    category: "Tops",
    description: "An essential base layer designed for temperature regulation and moisture management. Ultra-soft fabric with seamless construction prevents chafing during long rides.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey"],
    inStock: true,
  },
  {
    id: "dressage-saddle-pad",
    name: "Dressage Saddle Pad",
    price: 149,
    image: productSaddlepad,
    category: "Horse",
    description: "Luxurious dressage saddle pad with anatomical cut for freedom of movement. Features shock-absorbing padding, quick-dry fabric, and elegant quilted design.",
    sizes: ["Pony", "Cob", "Full"],
    colors: ["White", "Navy", "Black"],
    inStock: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};
