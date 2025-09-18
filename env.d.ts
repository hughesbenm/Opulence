export {}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_OPTIONS: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
      VITE_DISCORD_CLIENT_ID: string;
      GOOGLE_ANALYTICS_MEASURE_ID: string;
      GOOGLE_ANALYTICS_SECRET: string;
      PLAUSIBLE_DOMAIN: string;
      PORT: string;
    }
  }
}