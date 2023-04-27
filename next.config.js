/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    // apikey: "44a39a5b8db0455e840941a206b6bf2e",
    apikey: "0f5408f54a25461eaa597db8e08eb174",
    baseUrl: "https://api.spoonacular.com/recipes",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spoonacular.com",
        port: "",
        pathname: "/recipeImages/**",
      },
    ],
  },
};

module.exports = nextConfig;
