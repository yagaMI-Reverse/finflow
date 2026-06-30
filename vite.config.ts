import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// base must match the GitHub Pages repo name: https://<user>.github.io/finflow/
export default defineConfig({
  base: "/finflow/",
  server: { port: 5175 },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
