export const data = [
  {
    imageUrl: "/images/1.jpg",
    tags: ["green", "palm", "plant", "bright", "happy"],
  },
  {
    imageUrl: "/images/2.jpg",
    tags: ["purple", "pink", "plant", "floral", "dark", "moody"],
  },
  {
    imageUrl: "/images/3.jpg",
    tags: ["green", "monstera", "plant", "airy", "happy"],
  },
  {
    imageUrl: "/images/4.jpg",
    tags: ["green", "airy", "plant", "happy"],
  },
  {
    imageUrl: "/images/5.jpg",
    tags: ["green", "moss", "plant", "moody", "dark"],
  },
  {
    imageUrl: "/images/6.jpg",
    tags: ["purple", "floral", "plant"],
  },
  {
    imageUrl: "/images/7.jpg",
    tags: ["grey", "marble", "moody"],
  },
  {
    imageUrl: "/images/8.jpg",
    tags: ["red", "coffee"],
  },
  {
    imageUrl: "/images/9.jpg",
    tags: ["green", "nature", "plant"],
  },
  {
    imageUrl: "/images/10.jpg",
    tags: ["floral", "pink", "plant", "yellow", "happy"],
  },
  {
    imageUrl: "/images/11.jpg",
    tags: ["marble", "purple", "blue"],
  },
  {
    imageUrl: "/images/12.jpg",
    tags: ["pink", "blue", "marble"],
  },
  {
    imageUrl: "/images/13.jpg",
    tags: ["red", "marble"],
  },
  {
    imageUrl: "/images/14.jpg",
    tags: ["orange", "floral", "happy"],
  },
  {
    imageUrl: "/images/15.jpg",
    tags: ["bike", "moody", "orange"],
  },
  {
    imageUrl: "/images/16.jpg",
    tags: ["floral", "yellow", "happy"],
  },
  {
    imageUrl: "/images/17.jpg",
    tags: ["bike", "orange", "happy"],
  },
  {
    imageUrl: "/images/18.jpg",
    tags: ["blue", "marble", "green"],
  },
  {
    imageUrl: "/images/19.jpg",
    tags: ["blue", "marble", "yellow"],
  },
  {
    imageUrl: "/images/20.jpg",
    tags: ["red", "bike", "moody", "dark"],
  },
  {
    imageUrl: "/images/21.jpg",
    tags: ["nature", "oregon", "fall", "blue"],
  },
  {
    imageUrl: "/images/22.jpg",
    tags: ["nature", "moody", "oregon", "brown"],
  },
  {
    imageUrl: "/images/23.jpg",
    tags: ["book", "brown", "oregon"],
  },
  {
    imageUrl: "/images/24.jpg",
    tags: ["bike", "brown"],
  },
  {
    imageUrl: "/images/25.jpg",
    tags: ["nature", "coffee", "plant", "moody", "green"],
  },
  {
    imageUrl: "/images/26.jpg",
    tags: ["nature", "coffee", "plant", "moody", "green"],
  },
  {
    imageUrl: "/images/27.jpg",
    tags: ["nature", "coffee", "plant", "moody", "green"],
  },
  {
    imageUrl: "/images/28.jpg",
    tags: ["nature", "oregon", "water", "grey"],
  },
  {
    imageUrl: "/images/29.jpg",
    tags: ["nature", "oregon", "water", "grey"],
  },
  {
    imageUrl: "/images/30.jpg",
    tags: ["nature", "oregon", "water", "grey"],
  },
];

export const tagsToImages = {};

for (const image of data) {
  const imageName = image.imageUrl;
  for (const tag of image.tags) {
    if (!tagsToImages[tag]) {
      tagsToImages[tag] = [];
    }
    tagsToImages[tag].push(image);
  }
}

export default data;
