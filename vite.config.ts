import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import babel from "vite-plugin-babel";

export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      react(),
      isDev &&
        babel({
          filter: /src\/.*\.[jt]sx?$/,
          babelConfig: {
            presets: [
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
            ],
            plugins: [path.resolve(__dirname, "babel-plugin-markers.cjs")],
          },
        }),
    ].filter(Boolean),
  };
});