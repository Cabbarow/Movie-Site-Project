import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  console.log(mode, "mode");
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    build: {
      outDir: "dist",
      sourcemap: false,
      rollupOptions: {
        input: "./index.html",
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    base: mode === "production" ? "/movie-site/" : "/", // Production'da /movie-site/, yerelde /
  };
});
