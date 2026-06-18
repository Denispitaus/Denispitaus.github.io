import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
  },
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.js' // или 'index.html' если нужны SPA-роуты
    }),
    files: {
      routes: 'src/app/routes',
      appTemplate: 'src/app/index.html'
    },
    paths: {
      base: process.env.NODE_ENV === 'production'
        ? '/name-вашего-репозитория'
        : ''
    },
    prerender: {
      handleHttpError: (event) => {
        // event может быть объектом или строкой
        if (event && typeof event === 'object' && event.url) {
          const pathname = event.url.pathname;
          if (pathname.startsWith('/img/') || pathname.startsWith('/svg/')) {
            return; // Подавить ошибку
          }
        }
        // Для остальных ошибок —Throw или игнорировать
        return; // ✅ Подавить все 404
      }
    }
  }
};

export default config;
