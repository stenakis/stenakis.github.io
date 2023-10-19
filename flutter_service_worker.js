'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7b537e709770a5f0b5a37ba16a11f3a3",
"assets/AssetManifest.bin.json": "78c8559c75b91cdd7953842e9fd95202",
"assets/AssetManifest.json": "19f423b30d0698554b0681a29e9c06d9",
"assets/assets/fonts/Gabarito-Black.ttf": "8fb447e704de643ca45d0bcd4874dca1",
"assets/assets/fonts/Gabarito-Bold.ttf": "478f0cbda0dca1a407fd4ffa59f8bfa4",
"assets/assets/fonts/Gabarito-ExtraBold.ttf": "3c543e6950d07f6337e32ad940b57640",
"assets/assets/fonts/Gabarito-Medium.ttf": "88a87ca8952a610104880eeb88fae846",
"assets/assets/fonts/Gabarito-Regular.ttf": "bb7d2c29acc3e8e36a4bfcc3c1fe047d",
"assets/assets/icons/behance.svg": "47581037075cab1415da7ca527724dd0",
"assets/assets/icons/deviantart.svg": "6639235c637bf4f70871743c3356f46f",
"assets/assets/icons/facebook.svg": "cc2005cd7345c88a127ef072ce5746e5",
"assets/assets/icons/instagram.svg": "8190dbde6acb058af80b3a9801dc2912",
"assets/assets/icons/linkedin.svg": "66be765d434023c6aeffdbe5c72515be",
"assets/assets/products/klonos/1.jpg": "7a4d5feffe39cb273e6759602049771a",
"assets/assets/products/klonos/2.jpg": "44b1304b6b1cb65d3b4c9d7c3987d4d8",
"assets/assets/products/klonos/3.jpg": "6f7538a290cdbff31725a0aab8b0591b",
"assets/assets/products/klonos/4.jpg": "bc7fe4e5d1293c3afea72b7a70127d33",
"assets/assets/products/klonos/5.jpg": "3003875882d0d7128729d9e7bac269b1",
"assets/assets/products/klonos/6.jpg": "cf4e06a7be405c1d71a08276e3d88535",
"assets/assets/products/main_logo.png": "a434fffdbc3a83807e1c9fbdbf049386",
"assets/assets/products/open_mall.png": "614a14cc58e737de0301db8a20cce64a",
"assets/assets/products/phase_10.png": "96e34e4b2a846a5f9ad4b528f58e2d19",
"assets/assets/products/pianist.png": "ad00c05144181dcf2e45739f52a26234",
"assets/assets/products/placeholder_phase10.png": "07b0924ed94bb197d7e57c8f5ac5d4c6",
"assets/assets/products/placeholder_pianist.gif": "4b12865ac0cffd43c40e74fabbd58acc",
"assets/assets/products/rainmeter/badge.png": "73f65c25460d796033f23db75b8973a8",
"assets/assets/products/rainmeter/clockworld.jpg": "8a3c15d87c80e9888e6f73c4efa5c8aa",
"assets/assets/products/rainmeter/meenimal.jpg": "d0c050374ebc9c305de59d520032fca1",
"assets/assets/products/rainmeter/OffBalanceLogo.png": "bd707b023fbda6b3a375e1088bd2ed90",
"assets/assets/products/rainmeter/sparse.jpg": "377086e0f4877a829b28c11a4bd3a646",
"assets/assets/products/rainmeter.png": "750d22cfd1c848660772942845d4800a",
"assets/assets/products/together.png": "3404009f2c39a326e2cd9c5187280f1f",
"assets/assets/products/typography/2010.jpg": "43e8054375b67b415a8b09be78373d11",
"assets/assets/products/typography/Epidemic.jpg": "b671e88912af6d6b2a02d19b09b169c7",
"assets/assets/products/typography/Hirt.jpg": "11d4922095c3648da58afaf56a68fa83",
"assets/assets/products/typography/Nu_Disco.jpg": "b915c35971b8dce30dcbb9e4f37fc056",
"assets/assets/products/typography/Piano.jpg": "a9f1614f85df3e9796e8809bbf993c3e",
"assets/assets/products/typography/Tech.jpg": "11e5fd88f1e071c8d04c2b896e99ac7e",
"assets/FontManifest.json": "ab16a6f8eb96db13b20e52bf92b973ad",
"assets/fonts/MaterialIcons-Regular.otf": "4a605f5da94f25c87a21ab9601e256e1",
"assets/NOTICES": "d0b84e5d59431f6e0ad280a05a947924",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "33c9d7ca14ef77f13a3a6398256eb53d",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "013589f69425b3796c9cfe4d0e910fe6",
"/": "013589f69425b3796c9cfe4d0e910fe6",
"main.dart.js": "ea9d49d289d7bedefe4016f27f824fab",
"manifest.json": "136936b7dd341c6433f45ef52be168ae",
"version.json": "980547175e325fe622a3362b84d55b6a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
