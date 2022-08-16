import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers:[AntDesignVueResolver()]
    }),
    AutoImport({
      resolvers:[AntDesignVueResolver()],
      dts: true,
      include:[
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.md%/
      ],
      imports:[
        'vue',
        'vue-router',
        {
          '@/utils/index':[
            'getCookie',
            'setCookie'
          ]
        }
      ]
    })
  ],
  resolve:{
    alias:{
      '@':resolve(__dirname,'src'),
      'components':resolve(__dirname,'src/components')
    }
  }
})
