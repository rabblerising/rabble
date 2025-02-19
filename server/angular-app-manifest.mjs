
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://rabblerising.github.io/rabble/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rabble"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 527, hash: '695f9ae4638bd122cbca547bcc0fd9ffff74b9b29991ab8b9421add4bdb0b7f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '9de24aaa98ebbf464d2595ce8895b5ea2bff8cedb1388f2e36eb501bb22eec19', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20865, hash: 'e62d9ae5b44892dc032c413cb6bb811b921d8ee1591e23d6e45a0e399830efe7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
