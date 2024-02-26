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
    contentName: "rewritething",
    contentLink: "https://rewritething.online",
    contentDescription:
      "Rewrite Thing is a SaaS project currently under development, it is intended to use AI to help rewrite essays and correct grammatical errors. You can join the waitlist with the link below",
    isLive: true,
  },
  {
    id: 2,
    contentName: "Talkee.app",
    contentLink: "https://talkeeapp.netlify.app/",
    contentDescription:
      "Talkee is a platform where users can freely share their thoughts and ideas anonymously with others in a social setting.",
    isLive: true,
  },

  //   {
  //     id: 6,
  //     contentName: "Kira chat",
  //     contentDescription:
  //       "Kira is an integration of ChatGPT on WhatsApp for conversational interactions.",
  //     contentLink: "https://kira-ai.vercel.app/",
  //     isLive: false,
  //   },
];

export const devTools: contentType = [
  {
    id: 3,
    contentName: "reuseonline",
    contentDescription:
      "A custom React hook designed to monitor the online status of a user's device.",
    contentLink: "http://reuseonline.vercel.app",
    isLive: true,
  },
];

export const AITools: contentType = [
  {
    id: 4,
    contentName: "Kira chat",
    contentDescription:
      "Kira is an integration of ChatGPT on WhatsApp for conversational interactions.",
    contentLink: "https://kira-ai.vercel.app/",
    isLive: false,
  },
  {
    id: 5,
    contentName: "Gem Ai",
    contentDescription:
      "Gem AI is an integration of Gemini AI Pro  for conversational interactions.",
    contentLink: "https://gemai.vercel.app/",
    isLive: true,
  },
];
