'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/config": "5ae25dd5a08bcf9173f61d7dddd4f60b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fc351a1d7704271ebc5a717ac15bfa67",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2ac40fa17ceac00b80ea5b67a590c59a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba46e4eb5065f2c68bd966fb81353cc5",
".git/logs/refs/heads/main": "ba46e4eb5065f2c68bd966fb81353cc5",
".git/logs/refs/remotes/origin/HEAD": "721c27cdeaafe19f3e165e3a807d063f",
".git/logs/refs/remotes/origin/main": "f1b4af906cc5a9b8bec497ad59888833",
".git/objects/07/3669cb06cddb97d37cdfb0e1c861866cb5f807": "3f599744cad9eab5fe9723f8ed637c06",
".git/objects/15/b1026f76157a022364a23ae096491b5869ec4a": "c50a8a713010f1a97ef83318e5033991",
".git/objects/1a/cbc56162a99282a398c002784d1e7f166c010c": "63a6ca84f1de81d568362c72c5a26afa",
".git/objects/1a/fee1184c3bd1fff268d7fc16de7204845297c9": "d56a53bfe7df08492abeac364a7e9f74",
".git/objects/28/1bccf60065a39b73f989824ca2b86b47721d64": "26feb0932be5c75c9e95239398ad4fcd",
".git/objects/2b/1221bccd7641e5a25c3089f6db3f5911f562db": "9f6ae93b209324520cbb3c6c1121f60f",
".git/objects/30/3fa4325ef5b8d6449d02e4aec5fb4f7f6dc5bc": "f37b9b9ce38664139c74a8ecafa214ac",
".git/objects/33/dccf45b86cf76af96f4d8df765555370a8d82d": "88dcb95f538c733a159d48e82f7062e2",
".git/objects/3c/686c437d7cd90e85280da09442e51c507a57c3": "3bb0cbb7863eb1cf650d0c4475e1f27d",
".git/objects/56/64311d7ead3591637e4a745f723ce8f8832ef2": "c50a352295906d98eedc0e2cbcf89d5c",
".git/objects/5d/3bdf427d342ec295bdcca8d57faab3c9e9f353": "dbc58a77a6c4625d2a36aba983f4bd09",
".git/objects/62/76cfcd76a21e23653b38b940629db7f41ef42f": "c9dcbb6e1bd2cc393acceeb4d81a05da",
".git/objects/68/6ff0f7f84adba407a65db3e1170376e51062ed": "a69c1487f2c0493d6369f71f7d3efadf",
".git/objects/76/4f058154394003f75cb1e41f44a85c2757fd81": "4110063a6e00097a7ba352fb8828a3da",
".git/objects/7f/4b42056d46632dff7b7c839ba5a883fcf98ce5": "aaafb94ceee5e8c6327c91205c0f6a29",
".git/objects/89/ab7bfc5303c013937032b04b53288aa43a2e79": "b9eb93e7cb760ede49fbb05c3b8caed7",
".git/objects/94/4e320e6eab5d95b1b4021faf9c0030fcf6f675": "ce21abc8c28b484d7bef7fbf875c7df1",
".git/objects/98/13485a254bf5eebbc06e48589c1da1a71ddfea": "0a1655f13bb85aee0c1e315c42b638a1",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/ac/0b49c825d5b9c04f6fe023a1214785dd76473a": "a56f9df3111d19d3d2adb8738270628a",
".git/objects/b0/1141a504ef08eede172668676fa1ea480d00f1": "d9be433a9357b59099576adb90f624b6",
".git/objects/b4/69709b192759a74ca210aa46fba7b68e022fac": "58edb8f1f7e65b92c042705d35458e0e",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/cc/472afaec733e84f3deec43355529d64d21873d": "7b402144ad53449b729fbe5b71abb44c",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/da/5b1c969094508ea5bdb29f96fcec1b830c762a": "003e36aa9014433567380cba2e778148",
".git/objects/de/1d3d11365da86b63f5bdfb7595b1ca4070ac08": "b306e5425273242b223aa1031024f7e7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/416dcde49f83ff75d4777bd0263046068f203b": "c6697b914ecb62d6c04a48f14f7cf885",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/ea/5165ab3c0ea682d70d75886966067a70de2860": "fb551d701f1458651b0648b6479091fc",
".git/objects/ed/4a5aaa04df30f84b782abd538c02cb814602c2": "b3f467c06159fa3afb0ed4256f9e3028",
".git/objects/f8/cd8c9d0f44fe84c3383422895b424098a04ceb": "05240bc042ca459c92b944e2238b936c",
".git/objects/fd/296dd5c5f27b2fc3ac5e7e0ed25b773dfc1eae": "59b7379055a751c6c8d0f5be5bc26423",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/pack/pack-654817618105d6cc1ae30e5153f9a7d269a4a489.idx": "ad8360a7cd4db385d34fba77e8db4eb2",
".git/objects/pack/pack-654817618105d6cc1ae30e5153f9a7d269a4a489.pack": "aec59a8bb934512fe6ca9f5cc5fec7e6",
".git/packed-refs": "b8ec3c4cb1dd5eabf537b2d7510e8933",
".git/refs/heads/main": "48b0d77db49a5347aac30788607b574c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "48b0d77db49a5347aac30788607b574c",
"assets/AssetManifest.bin": "9de7fc9ae333c423ac0ef6bf58bb02f7",
"assets/AssetManifest.json": "fc58ac33e1bc266817e16c82c468a927",
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
"assets/NOTICES": "9c701a1c846849b37e95407b7ba07367",
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
"index.html": "54de703841c96d8a1d88693a3ebb456f",
"/": "54de703841c96d8a1d88693a3ebb456f",
"main.dart.js": "926eeb45dc84f0942c00ac2aa57e322f",
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
