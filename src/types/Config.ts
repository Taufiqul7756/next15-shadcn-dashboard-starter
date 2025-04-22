export interface Config {
  apiUrl: string;

  makeApiUrl: (path: string, base?: string) => string; // updated for multiple url support
}

// const apiUrl = process.env.API_BASE_URL || "https://dummyjson.com";
const apiUrl = "https://apindanai.taldev.xyz";

const config: Config = {
  apiUrl,
  makeApiUrl: (path: string, base: string = apiUrl) => {
    return base + path;
  },
};

export default config;
