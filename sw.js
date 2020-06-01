/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-5d25176611d680bec6fb.js"
  },
  {
    "url": "framework-f2b1673255104281184a.js"
  },
  {
    "url": "app-b0af8a1cbbdb627bbee0.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e955b315f6b335643d9ffd0e079df7c6"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c25716df4fbb2532700a.js"
  },
  {
    "url": "c8ad9dfaf40d8412ecdb5e986d4ca4c77af55947-4be3a4c79a341b0957ca.js"
  },
  {
    "url": "component---src-pages-ko-about-ts-1cfec196040f729fc5a5.js"
  },
  {
    "url": "page-data/ko/about/page-data.json",
    "revision": "2210eb5223ad5a5035ee9c42f91de2d5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "b2bbbf1c8a5c05a9ee572de64b8358fd"
  },
  {
    "url": "component---src-pages-ko-index-tsx-6e6daaaaea955411ec48.js"
  },
  {
    "url": "page-data/ko/page-data.json",
    "revision": "c538e7bf47d722ba5802a3d1a8f8c927"
  },
  {
    "url": "component---src-pages-ko-posts-ts-164f4ca4d68410d49222.js"
  },
  {
    "url": "page-data/ko/posts/page-data.json",
    "revision": "a084a9a1ee3c7edd848c9a925943b3a3"
  },
  {
    "url": "component---src-pages-ko-projects-ts-944ded2e1313212addc8.js"
  },
  {
    "url": "page-data/ko/projects/page-data.json",
    "revision": "65c1c63da00eb375d7ce78b50ade14f6"
  },
  {
    "url": "component---src-pages-en-about-ts-bbb8d5aac913551cd9e7.js"
  },
  {
    "url": "page-data/en/about/page-data.json",
    "revision": "8229740b3ab500075bb60abc0175d8e8"
  },
  {
    "url": "component---src-pages-en-index-tsx-79d42a0ea83b91b64ab6.js"
  },
  {
    "url": "page-data/en/page-data.json",
    "revision": "f8b42bbf8a4437b9823190f2474f77f9"
  },
  {
    "url": "component---src-pages-en-projects-ts-9c577011e2eb1bac98ef.js"
  },
  {
    "url": "page-data/en/projects/page-data.json",
    "revision": "930c465f746515ecd3cf2c90798d8e40"
  },
  {
    "url": "component---src-pages-index-tsx-cbcc21556cb46ab247ff.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "d4d23fdcf0f2516ae9301876127f80b7"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "0935faf312cb3b97feaeb888c1a63023"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-b0af8a1cbbdb627bbee0.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
