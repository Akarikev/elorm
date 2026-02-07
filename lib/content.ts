type contentType = {
  id: number;
  contentName: string;
  contentLink: string;
  contentDescription: string;
  isLive: boolean;
}[];

export const featuredContent: contentType = [
  {
    id: 1,
    contentName: "Bonsai",
    contentLink: "https://www.bonsaijs.site/",
    contentDescription:
      "Bonsai is a flexible state management library for React applications that grows with you. It offers tree state, flat state, built-in middleware, zero dependencies, and TypeScript-first design with developer-friendly APIs and DevTools.",
    isLive: true,
  },
  {
    id: 2,
    contentName: "TinyFolio",
    contentLink: "https://tinyfolio.link",
    contentDescription:
      "A developer-first platform designed to create minimalist, high-performance portfolios in seconds. Built for speed and simplicity, it lets you showcase your work without the overhead.",
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
