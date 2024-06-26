interface Ingredient {
  id: string;
  name: string;
  message: string;
  img: string;
}

const ingredents: Ingredient[] = [
  {
    id: "1",
    name: "Sylimarin",
    message: "Supports liver cell regeneration",
    img: "/liv-pure 02.webp",
  },
  {
    id: "2",
    name: "Betaine",
    message: "Maintain optimal liver health",
    img: "/liv-pure 03.webp",
  },
  {
    id: "3",
    name: "Berberine",
    message: "Supports liver detoxification",
    img: "/liv-pure 04.webp",
  },
  {
    id: "4",
    name: "Glutathione",
    message: "Supports liver regeneration",
    img: "/liv-pure 05.webp",
  },
  {
    id: "5",
    name: "Molybdenum",
    message: "Helps flush out enviromental pollutants",
    img: "/liv-pure 06.webp",
  },
  {
    id: "6",
    name: "Camellia Sinensis",
    message: "Supports cardiovascular health",
    img: "/liv-pure 07.webp",
  },
  {
    id: "7",
    name: "Resveratrol",
    message: "Helps boost metabolism",
    img: "/liv-pure 08.webp",
  },
  {
    id: "8",
    name: "Genistein",
    message: "Supports fat-burning",
    img: "/liv-pure 09.webp",
  },
];

export { ingredents };
