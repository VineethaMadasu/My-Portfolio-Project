import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/My-Portfolio-Project",
  server: {
    host: true, // Allows access from the network
    port: 5175, // Optional: ensure the port is correct
  },
})
