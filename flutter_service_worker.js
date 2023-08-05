'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5d0ed7f2b0392ac41719a762fb0fbba6",
"assets/AssetManifest.json": "7abb83fccfa2a5520ab202c718c5d14b",
"assets/assets/backgrounds/ClockWorld.jpg": "20bba934d28d2ca90859178c9cc4f4f4",
"assets/assets/backgrounds/Meenimal.jpg": "6040c97eb66df1ec229cdd6709a040ed",
"assets/assets/backgrounds/Phase10.jpg": "dfab2ba577b4b2c01a4bfdf071fe8524",
"assets/assets/backgrounds/Sparse.jpg": "bba9f1997caf183839d5740565154312",
"assets/assets/backgrounds/Together.jpg": "8b27de20be422c18a58076a64ed9aef6",
"assets/assets/fonts/Lufga-Black.ttf": "b9752220c09f69872de74ee3173f26d5",
"assets/assets/fonts/Lufga-BlackItalic.ttf": "25fc4be833ac3dbf682ea2c543277721",
"assets/assets/fonts/Lufga-Bold.ttf": "adecc4bca5b2a9687481c342a4fe9f40",
"assets/assets/fonts/Lufga-BoldItalic.ttf": "a818526e213cad1ab89ad23b7da355fc",
"assets/assets/fonts/Lufga-ExtraBold.ttf": "c75c443b141cd41d4c93ebf9e4b9c4db",
"assets/assets/fonts/Lufga-ExtraBoldItalic.ttf": "7f6a56a09034eefe59d7879e6d30ca6f",
"assets/assets/fonts/Lufga-ExtraLight.ttf": "40e1d2ea9bd0e6f6145c471b8d2258d8",
"assets/assets/fonts/Lufga-ExtraLightItalic.ttf": "7df43127232ea7f51629d0656e41e695",
"assets/assets/fonts/Lufga-Italic.ttf": "d8f169e34feae34deafd580f227a3e9f",
"assets/assets/fonts/Lufga-Light.ttf": "1ddf17687f8773fda121f4ef0e6a9885",
"assets/assets/fonts/Lufga-LightItalic.ttf": "089d17df7fd5a9b1c68e7fd7c2169ae7",
"assets/assets/fonts/Lufga-Medium.ttf": "9ab833326b202fb55eb336db57aa3508",
"assets/assets/fonts/Lufga-MediumItalic.ttf": "9d9c7b7114cd7ffaea39d8dcbff15df2",
"assets/assets/fonts/Lufga-Regular.ttf": "9df35b2045f6e32dcfa5bbc421ed05b1",
"assets/assets/fonts/Lufga-SemiBold.ttf": "1e053b4805d075f403dd3e44a3d4ec31",
"assets/assets/fonts/Lufga-SemiBoldItalic.ttf": "2b78ffbc04cd7dffa5cacbed005271f6",
"assets/assets/fonts/Lufga-Thin.ttf": "d5d5c39332e5a1d490334bf508cb80f5",
"assets/assets/fonts/Lufga-ThinItalic.ttf": "1249eb2dece0bb0a22298a1f84ef1eea",
"assets/assets/icons/deviantart.svg": "6639235c637bf4f70871743c3356f46f",
"assets/assets/icons/facebook.svg": "cc2005cd7345c88a127ef072ce5746e5",
"assets/assets/icons/instagram.svg": "8190dbde6acb058af80b3a9801dc2912",
"assets/assets/icons/linkedin.svg": "66be765d434023c6aeffdbe5c72515be",
"assets/assets/profile.jpg": "cd7795f53dfa75680ca5c8d4460e707d",
"assets/FontManifest.json": "e5c4afb2361728e9896227eb553efe52",
"assets/fonts/MaterialIcons-Regular.otf": "3895b881d466653636dbf9611945f6f4",
"assets/NOTICES": "dcdeb1da66dbe4f4a6f3bf01cebfdf82",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "33c9d7ca14ef77f13a3a6398256eb53d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e76bc47884361ab39dc76514fc58a3de",
"/": "e76bc47884361ab39dc76514fc58a3de",
"main.dart.js": "293f80d088a8d105c38ea4134f6ebcef",
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
