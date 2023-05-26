import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

//* https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      // root
      '@': path.resolve(__dirname, './src/'),

      // assets
      '@/assets': path.resolve(__dirname, './src/assets/'),
      '@/docs': path.resolve(__dirname, './src/assets/shared/docs/'),
      '@/fonts': path.resolve(__dirname, './src/assets/shared/fonts/'),
      '@/icons': path.resolve(__dirname, './src/assets/shared/icons/'),
      '@/images': path.resolve(__dirname, './src/assets/shared/images/'),
      '@/logos': path.resolve(__dirname, './src/assets/shared/logos/'),
      '@/videos': path.resolve(__dirname, './src/assets/shared/videos/'),

      // modules
      '@/modules': path.resolve(__dirname, './src/modules/'),
      '@/domain': path.resolve(__dirname, './src/modules/shared/domain/'),
      '@/infrastructure': path.resolve(__dirname, './src/modules/shared/infrastructure/'),

      // ui
      '@/ui': path.resolve(__dirname, './src/ui/'),
      '@/components': path.resolve(__dirname, './src/ui/shared/components/'),
      '@/config': path.resolve(__dirname, './src/ui/shared/config/'),
      '@/hooks': path.resolve(__dirname, './src/ui/shared/hooks/'),
      '@/layouts': path.resolve(__dirname, './src/ui/shared/layouts/'),
      '@/routes': path.resolve(__dirname, './src/ui/shared/routes/'),
      '@/styles': path.resolve(__dirname, './src/ui/shared/styles/'),
      '@/utils': path.resolve(__dirname, './src/ui/shared/utils/')
    }
  },
  plugins: [react(), svgr()],
  server: {
    host: true
  }
})
