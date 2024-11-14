import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
// https://vite.dev/config/
const manifestForPlugin: Partial<VitePWAOptions> = {
  manifest: {
    name: "Mat Meny",
    short_name: "Mat Meny",
    description: "Mat Meny",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "food-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "food-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  registerType: "autoUpdate",
  devOptions: {
    enabled: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
