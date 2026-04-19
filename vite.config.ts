import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Must match your GitHub repository name for GitHub Pages (https://user.github.io/REPO/)
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio_Aamir/",
});
