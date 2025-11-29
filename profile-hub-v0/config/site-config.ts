export type GridItemLayout = "2x1" | "2x2" | "1x1" ; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  description?: string;
  username?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
      layout: "2x1",
      type: "social",
      title: "Tech Blog",
      username:"The Tech Front",
      buttonLink: "https://shrinivas.tech",
  },
  {
      layout: "2x2",
      type: "social",
      title: "My",
      username:"Portfolio",
      image: "/vibrant-banner-background.png",
      description: "Artistry with Innovation",
      buttonLink: "https://portfolio.shrinivas.tech",
  },
  {
      layout: "2x1",
      type: "social",
      title: "ArtStation",
      username: "3D Worlds",
      buttonLink: "https://www.artstation.com/shrinivassesadri",
  },
  {
    layout: "1x1",
    type: "social",
    title: "Instagram",
    username: "@ShrinivasS3",
    buttonLink: "https://instagram.com/ShrinivasS3",
},
{
  layout: "1x1",
  type: "social",
  title: "Instagram",
  username: "@ss3_art",
  buttonLink: "https://instagram.com/ss3_art",
  },
  // {
  //     layout: "2x1",
  //     type: "social",
  //     title: "Behance",
  //     username: "Photography",
  //     buttonLink: "https://www.behance.net/shrinivassesadri",
  // },
  {
      layout: "2x2",
      type: "social",
      title: "LinkedIn",
      username: "@Shrinivas Sesadri",
      image: "/logo.png",
      buttonLink: "https://www.linkedin.com/in/shrinivassesadri",
  },
  {
      layout: "2x2",
      type: "social",
      title: "GitHub",
      image:"/blake-connally-B3l0g6HLxr8-unsplash.jpg",
      username: "Computational Creations",
      description: "Crafting Codes",
      buttonLink: "https://github.com/ShrinivasS3",
  },
  {
    layout: "2x1",
    type: "social",
    title: "Behance",
    username: "Photography",
    buttonLink: "https://www.behance.net/shrinivassesadri",
  },
  {
    layout: "2x1",
    type: "social",
    title: "DevianArt",
    username: "Versatile Illutionist",
    buttonLink: "https://www.deviantart.com/3ss123",
  },
  {
      layout: "1x1",
      type: "social",
      title: "Auditory Alchemist",
      username: "",
      description: "Coming Soon",
      buttonLink: "",
  },
  {
    layout: "1x1",
    type: "social",
    title: "X",
    username: "Twitter",
    buttonLink:"https://twitter.com/ShrinivasSesa3",
  },
  // {
  //     layout: "2x1",
  //     type: "social",
  //     title: "DevianArt",
  //     username: "Versatile Illutionist",
  //     buttonLink: "https://www.deviantart.com/3ss123",
  // },
  // {
  //     layout: "1x1",
  //     type: "social",
  //     title: "Instagram",
  //     username: "@ShrinivasS3",
  //     buttonLink: "https://instagram.com/ShrinivasS3",
  // },
  // {
  //   layout: "1x1",
  //   type: "social",
  //   title: "Instagram",
  //   username: "@ss3_art",
  //   buttonLink: "https://instagram.com/ss3_art",
  // },
];

export const siteConfig = {
  creator: "Shrinivas Sesadri",
  title: "Creative Inovator",
  bio: "Exploring the algorithmic symphony of life through code, color, and creativity.",
  location: "Tamil Nadu, India",
  locationLink: "https://maps.app.goo.gl/2dT3FF91xeqYNZGL8",
  email: "thetechfront@shrinivas.tech",
  items: GridItems,
} as const;
