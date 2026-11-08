import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";



// Vite config — https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const emitSourcemaps = mode === "development";

  return {
    // user site at the domain root: g3ngi.github.io
    base: "/",
    build: {
      sourcemap: emitSourcemaps ? "inline" : false,
      minify: !emitSourcemaps,
    },
    plugins: [
      react(),
      tailwindcss(),
      // Figma Make plugins removed for deployment:
      //   figmaSiteConfiguration  injected a second <meta description> + favicon
      //   figmaErrorOverlayReplay / figmaReactRefreshBoundaryFallback
      //   figmaMakeKitPlugin / figmaLinkedPackageSourcemaps
      // The <head> is now owned outright by index.html.
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
    server: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "8443"),
      strictPort: true,
    },
    preview: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "8443"),
    },
  };
});
