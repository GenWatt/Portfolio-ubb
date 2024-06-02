import react from '@vitejs/plugin-react'
// @ts-ignore
import { ConfigEnv, defineConfig, loadEnv } from 'vite';


export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.glb', '**/*.gltf'],
    // @ts-ignore
    base: mode === 'production' ? '/Portfolio-ubb/' : '/',
  })
}

// https://vitejs.dev/config/
