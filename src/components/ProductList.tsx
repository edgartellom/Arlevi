//TEMPORARY

import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

const products: ProductsType = [
  {
    id: 1,
    name: "Jaguar 4317",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 41300,
    sizes: [
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
    ],
    colors: ["black", "white_green"],
    images: {
      black: "/products/4317negro.png",
      white_green: "/products/4317blanco_verde.png",
    },
  },
  {
    id: 2,
    name: "Jaguar 4308",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 36900,
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"],
    colors: ["black_white", "white_black"],
    images: {
      black_white: "/products/4308negro.png",
      white_black: "/products/4308blanco_negro.jpg",
    },
  },
  {
    id: 3,
    name: "Jaguar 9216",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 47500,
    sizes: ["29", "30", "31", "32", "33", "34", "35"],
    colors: ["blue", "sand"],
    images: {
      blue: "/products/9216azul.jpg",
      sand: "/products/9216arena.jpg",
    },
  },
  {
    id: 4,
    name: "Jaguar 4318",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 37900,
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["white_gray"],
    images: { white_gray: "/products/4318blanco_gris.jpg" },
  },
  {
    id: 5,
    name: "Jaguar 4328",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 57800,
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: ["white_skyblue", "gray"],
    images: {
      white_skyblue: "/products/4328blanco_celeste.jpg",
      gray: "/products/4328gris.jpg",
    },
  },
  {
    id: 6,
    name: "Jaguar 4321",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 47300,
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: ["white_peach", "black"],
    images: {
      white_peach: "/products/4321blanco_durazno.jpg",
      black: "/products/4321negro.jpg",
    },
  },
  {
    id: 7,
    name: "Jaguar 4320",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 43800,
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["white_green", "black"],
    images: {
      white_green: "/products/4320blanco_verde.png",
      black: "/products/4320negro.jpg",
    },
  },
  {
    id: 8,
    name: "Jaguar 9353",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 52300,
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: ["coral", "pink"],
    images: {
      coral: "/products/9353coral.png",
      pink: "/products/9353rosa.jpg",
    },
  },
];

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        Todos los productos
      </Link>
    </div>
  );
};

export default ProductList;
