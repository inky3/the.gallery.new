export type GalleryCategory = {
  slug: string;
  title: string;
  blurb: string;
  images: { src: string; caption: string }[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "posters",
    title: "Posters",
    blurb: "Poster and typographic studies — identity, layout, and print-first composition.",
    images: [
      { src: "/img/poster/Alley7.png", caption: "Alley 7" },
      { src: "/img/poster/Art-Nouveau-Poster.png", caption: "Art Nouveau Poster" },
      { src: "/img/poster/Brand-Identity-and-Typography.png", caption: "Brand Identity & Typography" },
      { src: "/img/poster/Watch-Advertisement.jpg", caption: "Watch Advertisement" },
      { src: "/img/poster/alone-in-the-grey.png", caption: "Alone in the Grey" },
    ],
  },
  {
    slug: "photography",
    title: "Photography",
    blurb: "Frames from the field — a Porsche 956 study and standalone shots.",
    images: [
      { src: "/img/photography/casa-lapin.jpg", caption: "Casa Lapin" },
      { src: "/img/photography/porsche956/IMG_9488.JPG", caption: "Porsche 956, no. 1" },
      { src: "/img/photography/porsche956/IMG_9490.JPG", caption: "Porsche 956, no. 2" },
      { src: "/img/photography/porsche956/IMG_9496.JPG", caption: "Porsche 956, no. 3" },
      { src: "/img/photography/porsche956/IMG_9504.JPG", caption: "Porsche 956, no. 4" },
      { src: "/img/photography/porsche956/IMG_9505.JPG", caption: "Porsche 956, no. 5" },
      { src: "/img/photography/porsche956/IMG_9524.JPG", caption: "Porsche 956, no. 6" },
      { src: "/img/photography/porsche956/IMG_9527.JPG", caption: "Porsche 956, no. 7" },
      { src: "/img/photography/porsche956/IMG_9531.JPG", caption: "Porsche 956, no. 8" },
      { src: "/img/photography/porsche956/IMG_9536.JPG", caption: "Porsche 956, no. 9" },
      { src: "/img/photography/porsche956/IMG_9542.JPG", caption: "Porsche 956, no. 10" },
      { src: "/img/photography/porsche956/IMG_9551.JPG", caption: "Porsche 956, no. 11" },
      { src: "/img/photography/porsche956/IMG_9552.JPG", caption: "Porsche 956, no. 12" },
      { src: "/img/photography/porsche956/IMG_9571.JPG", caption: "Porsche 956, no. 13" },
      { src: "/img/photography/porsche956/IMG_9572.JPG", caption: "Porsche 956, no. 14" },
    ],
  },
  {
    slug: "terrariums",
    title: "Terrariums",
    blurb: "Small enclosed worlds — a hands-on break from screens.",
    images: [
      { src: "/img/terrarium/Duck.jpg", caption: "Duck" },
      { src: "/img/terrarium/MiniTerrarium.jpg", caption: "Mini Terrarium" },
    ],
  },
  {
    slug: "blenders",
    title: "Blenders",
    blurb: "3D studies built in Blender — objects, rooms, and one interactive potion model.",
    images: [
      { src: "/img/blender/Bedroom.jpg", caption: "Bedroom" },
      { src: "/img/blender/Kitchen.jpg", caption: "Kitchen" },
      { src: "/img/blender/Room.jpg", caption: "Room" },
      { src: "/img/blender/Mushroom.jpg", caption: "Mushroom" },
      { src: "/img/blender/Healing-Potion.jpg", caption: "Healing Potion" },
      { src: "/img/blender/moon.jpg", caption: "Moon" },
    ],
  },
  {
    slug: "books",
    title: "Books",
    blurb: "Editorial and book-cover design studies.",
    images: [
      { src: "/img/book/creativity-of-aerodynamic.jpg", caption: "Creativity of Aerodynamic" },
      { src: "/img/book/le-mans-book.jpg", caption: "Le Mans" },
    ],
  },
];

export const getCategory = (slug: string) => galleryCategories.find((c) => c.slug === slug);
