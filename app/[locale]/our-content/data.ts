export type Category = "nature" | "abstract" | "ocean" | "cosmic" | "calm";

export interface Artwork {
  src: string;
  mockup: string;
  title: string;
  description: string;
  displayType: string;
  runtime: string;
}

export interface CategoryMeta {
  key: Category;
  label: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { key: "nature", label: "Nature" },
  { key: "abstract", label: "Abstract" },
  { key: "ocean", label: "Ocean" },
  { key: "cosmic", label: "Cosmic" },
  { key: "calm", label: "Calm" },
];

export const THUMBNAIL_IMAGES: Record<Category, string> = {
  nature: "/images/our-content/thumbnail/nature.webp",
  abstract: "/images/our-content/thumbnail/abstract.webp",
  ocean: "/images/our-content/thumbnail/ocean.webp",
  cosmic: "/images/our-content/thumbnail/cosmic.webp",
  calm: "/images/our-content/thumbnail/calm.webp",
};

export const ARTWORKS: Record<Category, Artwork[]> = {
  nature: [
    {
      src: "/images/our-content/nature/nature-1.webp",
      mockup: "/images/our-content/nature/nature-1-mockup.webp",
      title: "Walk in Forest",
      description:
        "Journey through untouched tropical forests filled with towering trees and hidden wildlife.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/nature/nature-2.webp",
      mockup: "/images/our-content/nature/nature-2-mockup.webp",
      title: "Ancient Rainforest",
      description:
        "A dense canopy of ancient trees where light barely touches the forest floor.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/nature/nature-3.webp",
      mockup: "/images/our-content/nature/nature-3-mockup.webp",
      title: "Moss Glow",
      description:
        "Experience the tranquility of the forest in a way you’ve never seen before. Bioluminescent light bathes every corner, as if nature were breathing within the liquid glass.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/nature/nature-4.webp",
      mockup: "/images/our-content/nature/nature-4-mockup.webp",
      title: "Crystal Leaf",
      description:
        "A single leaf, which should be fragile, is transformed into a work of transparent architecture. Every angle of light reveals a new color hidden within it.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/nature/nature-5.webp",
      mockup: "/images/our-content/nature/nature-5-mockup.webp",
      title: "Dewweb Glass",
      description:
        "A spiderweb isn’t just a trap it’s a gallery of light woven overnight. Every drop of dew holds a tiny world within it.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/nature/nature-6.webp",
      mockup: "/images/our-content/nature/nature-6-mockup.webp",
      title: "Root System",
      description:
        "Beneath the ground lies a network of life invisible to the eye. Here, we go underground to see what has been sustaining everything all along.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/nature/nature-7.webp",
      mockup: "/images/our-content/nature/nature-7-mockup.webp",
      title: "Jungle Awakening",
      description:
        "First light breaking through the jungle canopy, igniting the forest in gold.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/nature/nature-8.webp",
      mockup: "/images/our-content/nature/nature-8-mockup.webp",
      title: "Seed Burst",
      description:
        "Birth in slow motion. The moment when a seed releases itself into the world not an explosion, but an elegant liberation encased in molten glass.",
      displayType: "Horizontal",
      runtime: "6s",
    },
  ],
  abstract: [
    {
      src: "/images/our-content/abstract/abstract-1.webp",
      mockup: "/images/our-content/abstract/abstract-1-mockup.webp",
      title: "Liquid Dimensions",
      description: "A universe made entirely of flowing light and color.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/abstract/abstract-2.webp",
      mockup: "/images/our-content/abstract/abstract-2-mockup.webp",
      title: "Infinite Waves",
      description: "Endless waves of color and motion.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/abstract/abstract-3.webp",
      mockup: "/images/our-content/abstract/abstract-3-mockup.webp",
      title: "Prism Universe",
      description:
        "A mesmerizing world built from light, reflections, and color.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/abstract/abstract-4.webp",
      mockup: "/images/our-content/abstract/abstract-4-mockup.webp",
      title: "Chromatic Blub",
      description:
        "A living surface. Light interference blends with organic, breathing forms an abstract organism that has no name yet, but already possesses a soul.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/abstract/abstract-5.webp",
      mockup: "/images/our-content/abstract/abstract-5-mockup.webp",
      title: "Chrome Torus",
      description:
        "No beginning, no end. A ribbon of molten metal that continuously wraps around itself is a symbol of eternity in the most modern design language.",
      displayType: "Horizontal",
      runtime: "6s",
    },
  ],
  ocean: [
    {
      src: "/images/our-content/ocean/ocean-1.webp",
      mockup: "/images/our-content/ocean/ocean-1-mockup.webp",
      title: "Whale Odyssey",
      description: "Travel alongside giants of the ocean.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/ocean/ocean-2.webp",
      mockup: "/images/our-content/ocean/ocean-2-mockup.webp",
      title: "Ocean Giants",
      description: "Encounter the largest creatures on Earth.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/ocean/ocean-3.webp",
      mockup: "/images/our-content/ocean/ocean-3-mockup.webp",
      title: "Jellyfish Glass",
      description:
        "The oldest creature on Earth turns out to be the most sincere artist. Every beat of its heart is a rhythm not for survival, but for enjoyment.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/ocean/ocean-4.webp",
      mockup: "/images/our-content/ocean/ocean-4-mockup.webp",
      title: "The Living Sea",
      description: "A celebration of marine biodiversity.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/ocean/ocean-5.webp",
      mockup: "/images/our-content/ocean/ocean-5-mockup.webp",
      title: "Tides Of Infinity",
      description: "Follow the endless rhythm of the sea.",
      displayType: "Horizontal",
      runtime: "6s",
    },
  ],
  cosmic: [
    {
      src: "/images/our-content/cosmic/cosmic-1.webp",
      mockup: "/images/our-content/cosmic/cosmic-1-mockup.webp",
      title: "Nebula Vol.1",
      description:
        "Far out there, gas and dust form something that has no name but possesses beauty. This isn’t a photo of space it’s a dream about space.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/cosmic/cosmic-2.webp",
      mockup: "/images/our-content/cosmic/cosmic-2-mockup.webp",
      title: "Nebula Dreams",
      description:
        "Float through magnificent clouds of cosmic dust and vibrant celestial colors.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/cosmic/cosmic-3.webp",
      mockup: "/images/our-content/cosmic/cosmic-3-mockup.webp",
      title: "Galactic Web",
      description:
        "It turns out that the universe has a gigantic network structure that connects every galaxy. This isn’t science fiction. It is the largest structure that has ever existed.",
      displayType: "Horizontal",
      runtime: "6s",
    },
  ],
  calm: [
    {
      src: "/images/our-content/calm/calm-1.webp",
      mockup: "/images/our-content/calm/calm-1-mockup.webp",
      title: "Lotus Glass",
      description:
        "Calmness is not the absence of movement it is movement that is deeply under control. A single petal, a single surface, a single moment that need not be rushed.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/calm/calm-2.webp",
      mockup: "/images/our-content/calm/calm-2-mockup.webp",
      title: "Fog Orb",
      description:
        "Within every moment of stillness lies a world in constant motion. This glass sphere holds its own universe small enough to hold in your hand, yet deep enough to get lost in.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/calm/calm-3.webp",
      mockup: "/images/our-content/calm/calm-3-mockup.webp",
      title: "Glass Dunes",
      description:
        "Time shapes everything. These sand dunes aren’t about a journey to a destination they’re about how the evening light transforms the world into a painting every day.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/calm/calm-4.webp",
      mockup: "/images/our-content/calm/calm-4-mockup.webp",
      title: "Rain Lens",
      description:
        "Every raindrop is a camera. It captures the world beneath it, turns it upside down, and then falls, carrying the entire scene with it.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/calm/calm-5.webp",
      mockup: "/images/our-content/calm/calm-5-mockup.webp",
      title: "Luminous Lotus",
      description:
        "Glowing lotus flowers gently float across crystal-clear water, creating a peaceful atmosphere of light and serenity.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/calm/calm-6.webp",
      mockup: "/images/our-content/calm/calm-6-mockup.webp",
      title: "Feather Drift",
      description:
        "Watch countless white feathers gracefully floating through a silent atmosphere.",
      displayType: "Horizontal",
      runtime: "6s",
    },
  ],
};
