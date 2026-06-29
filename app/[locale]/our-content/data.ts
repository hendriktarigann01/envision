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
  { key: "nature",   label: "Nature"   },
  { key: "abstract", label: "Abstract" },
  { key: "ocean",    label: "Ocean"    },
  { key: "cosmic",   label: "Cosmic"   },
  { key: "calm",     label: "Calm"     },
];

export const THUMBNAIL_IMAGES: Record<Category, string> = {
  nature:   "/images/our-content/thumbnail/nature.webp",
  abstract: "/images/our-content/thumbnail/abstract.webp",
  ocean:    "/images/our-content/thumbnail/ocean.webp",
  cosmic:   "/images/our-content/thumbnail/cosmic.webp",
  calm:     "/images/our-content/thumbnail/calm.webp",
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
      runtime: "8s",
    },
    {
      src: "/images/our-content/nature/nature-3.webp",
      mockup: "/images/our-content/nature/nature-3-mockup.webp",
      title: "Moss Bloom",
      description:
        "Intricate moss colonies thriving in the cool, humid embrace of a mountain stream.",
      displayType: "Vertical",
      runtime: "5s",
    },
    {
      src: "/images/our-content/nature/nature-4.webp",
      mockup: "/images/our-content/nature/nature-4-mockup.webp",
      title: "Crystal Leaf",
      description:
        "Morning dew crystallized on the delicate surface of a single tropical leaf.",
      displayType: "Square",
      runtime: "4s",
    },
    {
      src: "/images/our-content/nature/nature-5.webp",
      mockup: "/images/our-content/nature/nature-5-mockup.webp",
      title: "Dewdrop Glass",
      description:
        "Macro view of a dewdrop acting as a magnifying lens over a lush green landscape.",
      displayType: "Square",
      runtime: "4s",
    },
    {
      src: "/images/our-content/nature/nature-6.webp",
      mockup: "/images/our-content/nature/nature-6-mockup.webp",
      title: "Root System",
      description:
        "The sprawling root network of ancient trees, a silent infrastructure beneath the soil.",
      displayType: "Horizontal",
      runtime: "7s",
    },
    {
      src: "/images/our-content/nature/nature-7.webp",
      mockup: "/images/our-content/nature/nature-7-mockup.webp",
      title: "Jungle Awakening",
      description:
        "First light breaking through the jungle canopy, igniting the forest in gold.",
      displayType: "Horizontal",
      runtime: "9s",
    },
    {
      src: "/images/our-content/nature/nature-8.webp",
      mockup: "/images/our-content/nature/nature-8-mockup.webp",
      title: "Seed Burst",
      description:
        "A single seed pod erupting in slow motion, releasing life across the wind.",
      displayType: "Square",
      runtime: "5s",
    },
  ],
  abstract: [
    {
      src: "/images/our-content/abstract/abstract-1.webp",
      mockup: "/images/our-content/abstract/abstract-1-mockup.webp",
      title: "Refraction I",
      description:
        "Light bending through invisible layers, revealing spectrums hidden to the naked eye.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/abstract/abstract-2.webp",
      mockup: "/images/our-content/abstract/abstract-2-mockup.webp",
      title: "Refraction II",
      description:
        "A continuation of the refraction series, deeper into the geometry of light.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/abstract/abstract-3.webp",
      mockup: "/images/our-content/abstract/abstract-3-mockup.webp",
      title: "Chromatic Flow",
      description:
        "Color as fluid — moving, mixing, and dissolving in an endless chromatic dance.",
      displayType: "Horizontal",
      runtime: "8s",
    },
    {
      src: "/images/our-content/abstract/abstract-4.webp",
      mockup: "/images/our-content/abstract/abstract-4-mockup.webp",
      title: "Void Sphere",
      description:
        "A perfect sphere suspended in absolute darkness — the shape of silence.",
      displayType: "Square",
      runtime: "5s",
    },
    {
      src: "/images/our-content/abstract/abstract-5.webp",
      mockup: "/images/our-content/abstract/abstract-5-mockup.webp",
      title: "Prism Burst",
      description:
        "A prism fractures a single beam into an explosion of rainbow geometry.",
      displayType: "Square",
      runtime: "4s",
    },
    {
      src: "/images/our-content/abstract/abstract-6.webp",
      mockup: "/images/our-content/abstract/abstract-6-mockup.webp",
      title: "Liquid Light",
      description:
        "Photons behaving like water — rippling, pooling, and cascading across surfaces.",
      displayType: "Horizontal",
      runtime: "7s",
    },
  ],
  ocean: [
    {
      src: "/images/our-content/ocean/ocean-1.webp",
      mockup: "/images/our-content/ocean/ocean-1-mockup.webp",
      title: "Deep Current",
      description:
        "The invisible rivers beneath the sea — cold, dark, and immeasurably powerful.",
      displayType: "Horizontal",
      runtime: "8s",
    },
    {
      src: "/images/our-content/ocean/ocean-2.webp",
      mockup: "/images/our-content/ocean/ocean-2-mockup.webp",
      title: "Bioluminescent",
      description:
        "Microscopic creatures illuminating the deep ocean with their natural glow.",
      displayType: "Horizontal",
      runtime: "7s",
    },
    {
      src: "/images/our-content/ocean/ocean-3.webp",
      mockup: "/images/our-content/ocean/ocean-3-mockup.webp",
      title: "Coral Drift",
      description:
        "A slow drift through a coral garden, teeming with color and quiet life.",
      displayType: "Horizontal",
      runtime: "9s",
    },
    {
      src: "/images/our-content/ocean/ocean-4.webp",
      mockup: "/images/our-content/ocean/ocean-4-mockup.webp",
      title: "Surface Break",
      description:
        "The moment between worlds — water and air colliding in slow motion.",
      displayType: "Square",
      runtime: "5s",
    },
    {
      src: "/images/our-content/ocean/ocean-5.webp",
      mockup: "/images/our-content/ocean/ocean-5-mockup.webp",
      title: "Abyss",
      description:
        "Into the unreachable — a descent into the ocean's deepest, most silent zone.",
      displayType: "Vertical",
      runtime: "10s",
    },
  ],
  cosmic: [
    {
      src: "/images/our-content/cosmic/cosmic-1.webp",
      mockup: "/images/our-content/cosmic/cosmic-1-mockup.webp",
      title: "Nebula Core",
      description:
        "The fiery birthplace of stars — a nebula condensing into radiant new worlds.",
      displayType: "Horizontal",
      runtime: "10s",
    },
    {
      src: "/images/our-content/cosmic/cosmic-2.webp",
      mockup: "/images/our-content/cosmic/cosmic-2-mockup.webp",
      title: "Starfield",
      description:
        "An infinite expanse of stars stretching beyond time and comprehension.",
      displayType: "Horizontal",
      runtime: "8s",
    },
    {
      src: "/images/our-content/cosmic/cosmic-3.webp",
      mockup: "/images/our-content/cosmic/cosmic-3-mockup.webp",
      title: "Pulsar Wave",
      description:
        "A neutron star pulsing with electromagnetic energy across the galaxy.",
      displayType: "Horizontal",
      runtime: "7s",
    },
  ],
  calm: [
    {
      src: "/images/our-content/calm/calm-1.webp",
      mockup: "/images/our-content/calm/calm-1-mockup.webp",
      title: "Still Water",
      description:
        "A perfectly mirrored lake surface holding the sky in absolute stillness.",
      displayType: "Horizontal",
      runtime: "6s",
    },
    {
      src: "/images/our-content/calm/calm-2.webp",
      mockup: "/images/our-content/calm/calm-2-mockup.webp",
      title: "Morning Haze",
      description:
        "Soft light diffused through morning fog — the world before it wakes.",
      displayType: "Horizontal",
      runtime: "7s",
    },
    {
      src: "/images/our-content/calm/calm-3.webp",
      mockup: "/images/our-content/calm/calm-3-mockup.webp",
      title: "Soft Gradient",
      description:
        "Pure color transitioning in silence — a meditation in light.",
      displayType: "Square",
      runtime: "5s",
    },
    {
      src: "/images/our-content/calm/calm-4.webp",
      mockup: "/images/our-content/calm/calm-4-mockup.webp",
      title: "Silence",
      description:
        "Nothing but space, light, and the quiet hum of the atmosphere.",
      displayType: "Square",
      runtime: "5s",
    },
    {
      src: "/images/our-content/calm/calm-5.webp",
      mockup: "/images/our-content/calm/calm-5-mockup.webp",
      title: "Dusk",
      description:
        "The final exhale of day, as the sky softens into violet and amber.",
      displayType: "Horizontal",
      runtime: "8s",
    },
    {
      src: "/images/our-content/calm/calm-6.webp",
      mockup: "/images/our-content/calm/calm-6-mockup.webp",
      title: "Echo",
      description:
        "A sound rendered visible — the resonance of space made tangible.",
      displayType: "Horizontal",
      runtime: "6s",
    },
  ],
};
