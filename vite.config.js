<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
=======
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ✅ أضف هذا

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ أضف هذا
  ],
>>>>>>> 13bb5e03651f72d0c5dec5c3b59e346657ef8bd8
})
