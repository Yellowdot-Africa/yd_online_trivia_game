// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

// })






import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example: Bundle all node_modules into a 'vendor' chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }

          // Example: Create separate chunks for specific libraries
          if (id.includes('react')) {
            return 'react';
          }
          
        }
      }
    }
  }
})






