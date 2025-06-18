import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 新增静态资源处理配置
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  // 可以根据需要调整 base 配置
  base: '/', 
  server: {
    proxy: {
      '/api': {
        // target: 'https://m1.apifoxmock.com/m1/6338926-6034417-default/api',
        target:'http://103.68.194.195:8000/api',  //代理地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  },
  build: {
    outDir: 'dist', // 显式指定输出目录为 dist
  }
});
