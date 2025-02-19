
export default {
  basePath: 'https://rabblerising.github.io/rabble',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
