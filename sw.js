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
    "url": "webpack-runtime-285a9c211ccebc335dd5.js"
  },
  {
    "url": "commons-9ff5cdabec71c7518def.js"
  },
  {
    "url": "app-2d139caedbb0dde2a147.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-3e7716575694887d639d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e8b18f84bd285b583050b193c455761b"
  },
  {
    "url": "component---src-components-templates-post-template-tsx-f863c980a52a51e1edf4.js"
  },
  {
    "url": "page-data/ko/post/trip-to-make-a-blog/page-data.json",
    "revision": "3792a0ebccebeea1853a2ed70f2053f6"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "64fa5fcdf9834da2dc74dde2f66d3c51"
  },
  {
    "url": "component---src-pages-ko-posts-tsx-2d75cee50f77f684d3f2.js"
  },
  {
    "url": "page-data/ko/posts/page-data.json",
    "revision": "01ee223c2a931e3280b66fb51fe2ca52"
  },
  {
    "url": "component---src-pages-ko-projects-tsx-7eda685beb965046d632.js"
  },
  {
    "url": "page-data/ko/projects/page-data.json",
    "revision": "6e2da0698f70e0a90854e21e44b0ca0c"
  },
  {
    "url": "component---src-pages-ko-about-tsx-dfda944998a5eeca5ad6.js"
  },
  {
    "url": "page-data/ko/about/page-data.json",
    "revision": "f0f271b1b59fffe5f44715fdfa9f1c48"
  },
  {
    "url": "component---src-pages-en-posts-tsx-68c5054b4bf177fda5e8.js"
  },
  {
    "url": "page-data/en/posts/page-data.json",
    "revision": "94845b097dfa9db1a81f6470f7415595"
  },
  {
    "url": "component---src-pages-en-projects-tsx-39ddb35d1562b4326177.js"
  },
  {
    "url": "page-data/en/projects/page-data.json",
    "revision": "3ff90b3046fc26b60eb6332ef6ba37cd"
  },
  {
    "url": "component---src-pages-en-about-tsx-18c82dad8103dbb11a55.js"
  },
  {
    "url": "page-data/en/about/page-data.json",
    "revision": "9131a23d1027d3bd299ccc4e5bb20098"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e7e366483b4aef5a69bb319e2b087c55"
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
  if (!resources || !(await caches.match(`/app-2d139caedbb0dde2a147.js`))) {
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