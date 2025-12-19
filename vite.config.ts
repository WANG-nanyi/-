import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  // 由于 HTML 和 TSX 都在根目录，这里保持默认配置即可
  // 确保 vite 能够正确识别入口
});