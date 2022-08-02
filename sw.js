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
    "url": "webpack-runtime-a7e3f2aae6b49ab71bcc.js"
  },
  {
    "url": "framework-a4620de0399b10c30110.js"
  },
  {
    "url": "app-727fd93c0edf27de0b50.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f48672594c5eeb3d3279f153555936e3"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js"
  },
  {
    "url": "polyfill-7afc5a082fc82a36a50b.js"
  },
  {
    "url": "4faebe5b8a98bd7a57858ba11f4a80ca25cb4129-c365bd3239d1aa7b7ca7.js"
  },
  {
    "url": "component---src-pages-ko-about-ts-4fd8daa8ab1564fdf39c.js"
  },
  {
    "url": "page-data/ko/about/page-data.json",
    "revision": "473cf2f30c82e8d9c762181ce9f0c4a0"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "10062dbfa89b03432c7d0f8e05bdd49b"
  },
  {
    "url": "component---src-pages-ko-index-tsx-f95d80d8d74c52fe569b.js"
  },
  {
    "url": "page-data/ko/page-data.json",
    "revision": "a87a9aeb3a157962c351adbe34cae151"
  },
  {
    "url": "component---src-pages-ko-posts-ts-3f6e3833b3f64b9755c3.js"
  },
  {
    "url": "page-data/ko/posts/page-data.json",
    "revision": "59e6214e0a95620d8a4e0e527bbf5738"
  },
  {
    "url": "component---src-pages-ko-projects-ts-1eef8804f58542b6430a.js"
  },
  {
    "url": "page-data/ko/projects/page-data.json",
    "revision": "bb731812a21aa69d20d198dbce175eee"
  },
  {
    "url": "component---src-pages-ko-publications-ts-a7880f2611ceb6720702.js"
  },
  {
    "url": "page-data/ko/publications/page-data.json",
    "revision": "446375b210feab35df41185873795296"
  },
  {
    "url": "component---src-pages-en-about-ts-89292d903050480ba3f8.js"
  },
  {
    "url": "page-data/en/about/page-data.json",
    "revision": "61fdbf137a8293eebee86cd509fb5df4"
  },
  {
    "url": "component---src-pages-en-index-tsx-a95c3a219c192dc59238.js"
  },
  {
    "url": "page-data/en/page-data.json",
    "revision": "6e9e99fee2b13d6e64d8c53bf23fe186"
  },
  {
    "url": "component---src-pages-en-projects-ts-c496b3f1141579707fed.js"
  },
  {
    "url": "page-data/en/projects/page-data.json",
    "revision": "7a6abc9793d7f2f1da3f787e75086840"
  },
  {
    "url": "component---src-pages-en-publications-ts-524cb5580dbda3ae767a.js"
  },
  {
    "url": "page-data/en/publications/page-data.json",
    "revision": "5d768025af13ef7a84a8a9c04416c424"
  },
  {
    "url": "component---src-pages-index-tsx-f94ddf353060fe0da6ff.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "072876287d33dc1fefc63e1174d931a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d18d1105bdce3a0fe0a9a6cfb27643bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

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
  if (!resources || !(await caches.match(`/app-727fd93c0edf27de0b50.js`))) {
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
