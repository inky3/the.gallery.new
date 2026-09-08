export type GalleryEntry =
  | {
      kind: "single";
      slug: string;
      title: string;
      image: string;
      date?: string;
      idea?: string;
    }
  | {
      kind: "collection";
      slug: string;
      title: string;
      cover: string;
      blurb: string;
      pieces: { src: string; caption: string }[];
    };

export type GalleryCategory = {
  slug: string;
  title: string;
  blurb: string;
  entries: GalleryEntry[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "posters",
    title: "Posters",
    blurb: "Poster and typographic studies — identity, layout, and print-first composition.",
    entries: [
      {
        kind: "single",
        slug: "alley7",
        title: "Alley7",
        image: "/img/poster/Alley7.png",
        date: "Feb 12, 2024",
        idea: "A poster for Alley7 at Siam Square, in a dark, moody style — a red header, grey handwritten-style body copy, and a barcode marking the date it was made.",
      },
      {
        kind: "single",
        slug: "alone-in-the-grey",
        title: "Alone in the Grey",
        image: "/img/poster/alone-in-the-grey.png",
        date: "Sep 6, 2025",
        idea: "A poster about people who still have to work through the weekend, set at a BTS station — green retro tones with red header and body type, and a barcode marking the date it was made.",
      },
      {
        kind: "single",
        slug: "brand-identity-and-typography",
        title: "Brand Identity and Typography",
        image: "/img/poster/Brand-Identity-and-Typography.png",
        date: "Aug 30, 2025",
        idea: "An event poster summarising the details, date, and speaker lineup — a typography and identity exercise as much as an announcement.",
      },
      {
        kind: "single",
        slug: "watch-advertisement",
        title: "Watch Advertisement",
        image: "/img/poster/Watch-Advertisement.jpg",
        date: "Mar 18, 2024",
        idea: "A poster for the realme Watch 2 — minimal text, product-first composition, white ground, key copy only.",
      },
      {
        kind: "single",
        slug: "art-nouveau-poster",
        title: "Art Nouveau Poster",
        image: "/img/poster/Art-Nouveau-Poster.png",
        idea: "A study in Art Nouveau motifs — ornamental linework and a period-accurate type treatment over a flowing, organic layout.",
      },
    ],
  },
  {
    slug: "photography",
    title: "Photography",
    blurb: "Frames from the field — a dedicated study and a few standalone shots.",
    entries: [
      {
        kind: "single",
        slug: "casa-lapin",
        title: "Casa Lapin",
        image: "/img/photography/casa-lapin.jpg",
      },
      {
        kind: "collection",
        slug: "porsche-956",
        title: "Porsche 956",
        cover: "/img/photography/porsche956/IMG_9488.JPG",
        blurb: "A set of 14 shots from a Porsche 956 — bodywork, livery, and detail studies.",
        pieces: [
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
    ],
  },
  {
    slug: "terrariums",
    title: "Terrariums",
    blurb: "Small enclosed worlds — a hands-on break from screens.",
    entries: [
      { kind: "single", slug: "duck", title: "Duck", image: "/img/terrarium/Duck.jpg" },
      { kind: "single", slug: "mini-terrarium", title: "Mini Terrarium", image: "/img/terrarium/MiniTerrarium.jpg" },
    ],
  },
  {
    slug: "blenders",
    title: "Blenders",
    blurb: "3D studies built in Blender — objects, rooms, and one interactive potion model.",
    entries: [
      { kind: "single", slug: "bedroom", title: "Bedroom", image: "/img/blender/Bedroom.jpg" },
      { kind: "single", slug: "kitchen", title: "Kitchen", image: "/img/blender/Kitchen.jpg" },
      { kind: "single", slug: "room", title: "Room", image: "/img/blender/Room.jpg" },
      { kind: "single", slug: "mushroom", title: "Mushroom", image: "/img/blender/Mushroom.jpg" },
      { kind: "single", slug: "healing-potion", title: "Healing Potion", image: "/img/blender/Healing-Potion.jpg" },
      { kind: "single", slug: "moon", title: "Moon", image: "/img/blender/moon.jpg" },
    ],
  },
  {
    slug: "books",
    title: "Books",
    blurb: "Editorial and book-cover design studies.",
    entries: [
      {
        kind: "single",
        slug: "creativity-of-aerodynamic",
        title: "Creativity of Aerodynamic",
        image: "/img/book/creativity-of-aerodynamic.jpg",
      },
      { kind: "single", slug: "le-mans", title: "Le Mans", image: "/img/book/le-mans-book.jpg" },
    ],
  },
];

export const getCategory = (slug: string) => galleryCategories.find((c) => c.slug === slug);
export const getEntry = (categorySlug: string, entrySlug: string) =>
  getCategory(categorySlug)?.entries.find((e) => e.slug === entrySlug);
export const coverOf = (e: GalleryEntry) => (e.kind === "single" ? e.image : e.cover);
