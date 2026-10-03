export interface MemoryNode {
  id: string;
  title: string;
  caption: string;
  mediaUrl: string;
  type: 'image' | 'video';
  poster?: string;
}

export interface PhotoMemory {
  id: string;
  mediaUrl: string;
  caption: string;
  type: 'image' | 'video';
  aspect?: 'portrait' | 'landscape' | 'square';
}

export const loveStoryConfig = {
  girlfriendNickname: "Pondati",

  audio: {
    ambientMusicUrl: "/audio/bgm.mp3",
    title: "Othaiyadi Pathayila"
  },

  memories: [
    {
      id: "first-date",
      title: "Our first date (Date 01)",
      caption: "The magic moment where our universe officially began.",
      mediaUrl: "/date-1/WhatsApp Video 2026-09-13 at 09.42.04.mp4",
      type: "video"
    },
    {
      id: "second-date",
      title: "Our second date (Date 02)",
      caption: "Getting lost in your eyes and forgetting all of time.",
      mediaUrl: "/date-2/WhatsApp Image 2026-08-22 at 12.53.07.jpeg",
      type: "image"
    },
    {
      id: "third-date",
      title: "Our third date (Date 03)",
      caption: "Every single date with you feels like a beautiful dream.",
      mediaUrl: "/date-3/cover-1.jpeg",
      type: "image"
    },
    {
      id: "fourth-date",
      title: "Our fourth date (Date 04)",
      caption: "That smile of yours that brightens my whole world.",
      mediaUrl: "/date-4/WhatsApp Image 2026-09-13 at 09.42.02.jpeg",
      type: "image"
    },
    {
      id: "stupid-fight",
      title: "That stupid fight",
      caption: "Even when we quarrel, I still love you more than life itself.",
      mediaUrl: "/general/cover-1.jpeg",
      type: "image"
    },
    {
      id: "endless-laughter",
      title: "The moments we couldn't stop laughing",
      caption: "Your laugh is my absolute favorite sound in the universe.",
      mediaUrl: "/general/WhatsApp Video 2026-09-13 at 09.47.28.mp4",
      type: "video"
    },
    {
      id: "missed-each-other",
      title: "The moments we missed each other",
      caption: "Distance only proved how deeply attached my soul is to yours.",
      mediaUrl: "/date-4/WhatsApp Image 2026-09-13 at 09.42.02 (1).jpeg",
      type: "image"
    },
    {
      id: "chose-again",
      title: "The moments we chose each other again",
      caption: "Over and over, in every lifetime, it will always be you.",
      mediaUrl: "/general/cover-2.jpeg",
      type: "image"
    }
  ] as MemoryNode[],

  promises: [
    "I'll choose you.",
    "I'll listen to you.",
    "I'll care for you.",
    "I'll grow with you.",
    "I'll stand beside you.",
    "I'll keep falling for you."
  ],

  galleryPhotos: [
    {
      id: "photo-1",
      mediaUrl: "/general/cover-2.jpeg",
      caption: "Us.",
      type: "image",
      aspect: "landscape"
    },
    {
      id: "photo-2",
      mediaUrl: "/date-2/WhatsApp Image 2026-08-22 at 12.53.07.jpeg",
      caption: "My favorite person.",
      type: "image",
      aspect: "portrait"
    },
    {
      id: "photo-3",
      mediaUrl: "/date-4/WhatsApp Image 2026-09-13 at 09.42.02.jpeg",
      caption: "That smile.",
      type: "image",
      aspect: "square"
    },
    {
      id: "photo-4",
      mediaUrl: "/date-3/cover-1.jpeg",
      caption: "My safe place.",
      type: "image",
      aspect: "portrait"
    },
    {
      id: "photo-5",
      mediaUrl: "/general/cover-1.jpeg",
      caption: "My home.",
      type: "image",
      aspect: "landscape"
    },
    {
      id: "video-1",
      mediaUrl: "/date-1/WhatsApp Video 2026-09-13 at 09.41.56.mp4",
      caption: "Date 01 magic.",
      type: "video",
      aspect: "portrait"
    },
    {
      id: "video-2",
      mediaUrl: "/date-2/WhatsApp Video 2026-09-13 at 09.42.03 (2).mp4",
      caption: "Pure happiness.",
      type: "video",
      aspect: "portrait"
    },
    {
      id: "video-3",
      mediaUrl: "/date-3/WhatsApp Video 2026-09-13 at 09.42.03.mp4",
      caption: "Forever moments.",
      type: "video",
      aspect: "landscape"
    },
    {
      id: "video-4",
      mediaUrl: "/date-4/WhatsApp Video 2026-09-13 at 09.53.34.mp4",
      caption: "My world.",
      type: "video",
      aspect: "portrait"
    },
    {
      id: "video-5",
      mediaUrl: "/general/WhatsApp Video 2026-09-13 at 09.47.31.mp4",
      caption: "Laughter & love.",
      type: "video",
      aspect: "landscape"
    }
  ] as PhotoMemory[],

  floatingWords: [
    "Your smile.",
    "Your voice.",
    "Your laugh.",
    "Your anger.",
    "Your silence.",
    "Your little habits.",
    "Your happiness.",
    "Your sadness."
  ]
};
