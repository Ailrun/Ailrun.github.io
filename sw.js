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
    "url": "webpack-runtime-97571dbfcd48ba28a3eb.js"
  },
  {
    "url": "framework-1a1efb3f5c798a012f4a.js"
  },
  {
    "url": "app-d4b80dd0870cf43b13fc.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "17f2ad4d656ee6073219586fa3bcad9c"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js"
  },
  {
    "url": "polyfill-d7fea70136d727099aec.js"
  },
  {
    "url": "e26805320bec8211a902eb8cee02bfb4be486955-dfcd0588592dd509f9dc.js"
  },
  {
    "url": "component---src-pages-ko-about-ts-65977b7f5622b0663c36.js"
  },
  {
    "url": "page-data/ko/about/page-data.json",
    "revision": "473cf2f30c82e8d9c762181ce9f0c4a0"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "ab9855da46ba8e65f0bea587abfc943f"
  },
  {
    "url": "component---src-pages-ko-index-tsx-7cf2f8ad98e2381ecbae.js"
  },
  {
    "url": "page-data/ko/page-data.json",
    "revision": "a87a9aeb3a157962c351adbe34cae151"
  },
  {
    "url": "component---src-pages-ko-posts-ts-cd31102f98ea32a7f67e.js"
  },
  {
    "url": "page-data/ko/posts/page-data.json",
    "revision": "59e6214e0a95620d8a4e0e527bbf5738"
  },
  {
    "url": "component---src-pages-ko-projects-ts-1d737aa58e7325091dc4.js"
  },
  {
    "url": "page-data/ko/projects/page-data.json",
    "revision": "bb731812a21aa69d20d198dbce175eee"
  },
  {
    "url": "component---src-pages-en-about-ts-679d87e9afbc9e377c93.js"
  },
  {
    "url": "page-data/en/about/page-data.json",
    "revision": "61fdbf137a8293eebee86cd509fb5df4"
  },
  {
    "url": "component---src-pages-en-index-tsx-fa2659d55a4a8ffef0db.js"
  },
  {
    "url": "page-data/en/page-data.json",
    "revision": "6e9e99fee2b13d6e64d8c53bf23fe186"
  },
  {
    "url": "component---src-pages-en-projects-ts-acd1477cc410836733ff.js"
  },
  {
    "url": "page-data/en/projects/page-data.json",
    "revision": "7a6abc9793d7f2f1da3f787e75086840"
  },
  {
    "url": "component---src-pages-index-tsx-8b8fe72e36f4c18131eb.js"
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
  if (!resources || !(await caches.match(`/app-d4b80dd0870cf43b13fc.js`))) {
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
