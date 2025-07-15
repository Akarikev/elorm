type contentType = {
  id: number;
  contentName: string;
  contentLink: string;
  contentDescription: string;
  isLive: boolean;
}[];

export const featuredContent: contentType = [
  {
    id: 2,
    contentName: "Talkee.app",
    contentLink: "https://talkeeapp.netlify.app/",
    contentDescription:
      "Talkee is a platform where users can freely share their thoughts and ideas anonymously with others in a social setting.",
    isLive: true,
  },
  {
    id: 3,
    contentName: "Tiny - Reminders",
    contentLink: "https://github.com/elormdev/tiny-reminders",
    contentDescription:
      "A React Native app built with Expo that helps users stay on track with task reminders. Currently in development and available for early testers on Android only.",
    isLive: false,
  },
  {
    id: 4,
    contentName: "Tune Tribe",
    contentLink: "https://github.com/elormdev/tune-tribe",
    contentDescription:
      "A Spotify-powered community app that lets you create tribes where you can share playlists and discover new music together. In development with exclusive early access available.",
    isLive: false,
  },
];

export const devTools: contentType = [
  {
    id: 1,
    contentName: "Bonsai",
    contentLink: "https://www.bonsaijs.site/",
    contentDescription:
      "Bonsai is a flexible state management library for React applications that grows with you. It offers tree state, flat state, built-in middleware, zero dependencies, and TypeScript-first design with developer-friendly APIs and DevTools.",
    isLive: true,
  },
  {
    id: 5,
    contentName: "reuseonline",
    contentDescription:
      "A custom React hook designed to monitor the online status of a user's device.",
    contentLink: "http://reuseonline.vercel.app",
    isLive: true,
  },
];

export const AITools: contentType = [
  {
    id: 6,
    contentName: "Kira chat",
    contentDescription:
      "Kira is an integration of ChatGPT on WhatsApp for conversational interactions.",
    contentLink: "https://kira-ai.vercel.app/",
    isLive: false,
  },
  {
    id: 7,
    contentName: "Gem Ai",
    contentDescription:
      "Gem AI is an integration of Gemini AI Pro  for conversational interactions.",
    contentLink: "https://gemai.vercel.app/",
    isLive: true,
  },
];
