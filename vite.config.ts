import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      layout: "/src/layout",
      styles: "/src/styles",
      pages: "/src/pages",
      assets: "/src/assets",
      utils: "/src/utils",
      public: "/public",
    },
  },
});
