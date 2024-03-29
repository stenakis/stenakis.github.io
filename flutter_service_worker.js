'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "17b8fe07c943d25316e98eed124a66de",
"assets/AssetManifest.bin.json": "d05bdc42970e7d3ac8ecd26c666ead1e",
"assets/AssetManifest.json": "2e0fee7d7ba9f82eb6a71514e2c576a5",
"assets/assets/icons/behance.svg": "47581037075cab1415da7ca527724dd0",
"assets/assets/icons/deviantart.svg": "6639235c637bf4f70871743c3356f46f",
"assets/assets/icons/facebook.svg": "cc2005cd7345c88a127ef072ce5746e5",
"assets/assets/icons/github.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/icons/instagram.svg": "8190dbde6acb058af80b3a9801dc2912",
"assets/assets/icons/linkedin.svg": "66be765d434023c6aeffdbe5c72515be",
"assets/assets/icons/self.jpg": "3e99a49ad6d7cf2cb2411eef088c3455",
"assets/assets/products/klonos/ellinikon_1.jpg": "7a4d5feffe39cb273e6759602049771a",
"assets/assets/products/klonos/ellinikon_2.jpg": "44b1304b6b1cb65d3b4c9d7c3987d4d8",
"assets/assets/products/klonos/ellinikon_3.jpg": "6f7538a290cdbff31725a0aab8b0591b",
"assets/assets/products/klonos/ellinikon_4.jpg": "bc7fe4e5d1293c3afea72b7a70127d33",
"assets/assets/products/klonos/ellinikon_5.jpg": "3003875882d0d7128729d9e7bac269b1",
"assets/assets/products/klonos/ellinikon_6.png": "54fb66e4146b927bf92d319284fe3df2",
"assets/assets/products/klonos/ellinikon_7.png": "456dde813ef53de0964f8f101343d6f1",
"assets/assets/products/klonos/ellinikon_8.png": "77e7aca4814530d40ea1b458e2c57c72",
"assets/assets/products/klonos/ellinikon_9.png": "c32257f7c7c125803a916750c7021a78",
"assets/assets/products/klonos/remvi_1.png": "f79f63edbd116c054217c0adb36988a5",
"assets/assets/products/klonos/remvi_10.jpg": "cd0b8fd13a2ef01b87f9d7bf4a66da9c",
"assets/assets/products/klonos/remvi_2.jpg": "d14868c8554c57c3d25b203f20b62d7a",
"assets/assets/products/klonos/remvi_3.jpg": "1d00c9b4e9b859b1b90a8f996b2bc14d",
"assets/assets/products/klonos/remvi_4.jpg": "b9c508b2de2cebaf8dcd90fa89496129",
"assets/assets/products/klonos/remvi_5.png": "f056daee64188cc12c8ac29c4e4d72b2",
"assets/assets/products/klonos/remvi_6.jpg": "4ac41b704a328fc5c45c2a212a331c1a",
"assets/assets/products/klonos/remvi_7.jpg": "5b636df2d00425f19aa1a16ee5545843",
"assets/assets/products/klonos/remvi_8.jpg": "6ba7a9f415581e34851a60e8914fe974",
"assets/assets/products/klonos/remvi_9.jpg": "d52c64476c3c8743d435cdad66910b25",
"assets/assets/products/main_logo.png": "a434fffdbc3a83807e1c9fbdbf049386",
"assets/assets/products/motion/Comp_1.mp4": "fbe8070d2d683665ced2b24284a48a57",
"assets/assets/products/motion/Comp_2.mp4": "93f66693c97ee46f7519d8f3bbb6bd2b",
"assets/assets/products/motion/Comp_3.mp4": "a714e0f41b5e2bbf09ba53f8eda078d2",
"assets/assets/products/motion/motion.gif": "8da542af9c53f6870e2fe08760467f7e",
"assets/assets/products/motion/uni_motion.jpg": "c454a9d0140aa877e4b1b54c0bd39ee0",
"assets/assets/products/music_festival/back.png": "6b30c43578e4c34e0a0c740bf9e76c8a",
"assets/assets/products/music_festival/banner.jpg": "2b84adedc25e4126505b7e701df103e3",
"assets/assets/products/music_festival/brochure.jpg": "4494ade3b462e7479c36b9a5d605b0fd",
"assets/assets/products/music_festival/colors.svg": "864adfa07f1b2e8e1b6677a44c741911",
"assets/assets/products/music_festival/cover.jpg": "5f9bd82dbde3ebb82cd760ecdb98fd6d",
"assets/assets/products/music_festival/insta.jpg": "f1a6a6daa2e7689bf3c59b17b4260563",
"assets/assets/products/music_festival/logo.svg": "de1aee34840aa34bab512eb7301daa2a",
"assets/assets/products/music_festival/logo_horizontal.svg": "de8ee970052c4f56759fc7c7780aaa8a",
"assets/assets/products/music_festival/Mock1.jpg": "009368ae4fe93da434f6a57fc6b83e4e",
"assets/assets/products/music_festival/Mock2.jpg": "ce8df528b92dfa2f1d3518dc70c78843",
"assets/assets/products/music_festival/Mock3.jpg": "ecdab57c66471e1c7616a6f5f7357d14",
"assets/assets/products/music_festival/Mock4.jpg": "0b209f8f50d82a9bbb8e3565178b2b04",
"assets/assets/products/music_festival/Mock5.jpg": "997ea95fb76c1ea70cfd9448293ff9d0",
"assets/assets/products/music_festival/Mock6.jpg": "20a1c8a9f34f955199c6d6d918cf5ffe",
"assets/assets/products/music_festival/notes.jpg": "db2952b3378a2d77568b1573a16f59a6",
"assets/assets/products/music_festival/photo1.jpg": "129f9feee589a620f47dfcf526a04241",
"assets/assets/products/music_festival/photo2.jpg": "d2b02c3f3ddd8c6963da41497ce6411f",
"assets/assets/products/music_festival/pianist.svg": "7d43ad35b317662c8b729b1d6bdc7d74",
"assets/assets/products/music_festival/poster.jpg": "13746ed118e96957e05bb62a90090b33",
"assets/assets/products/music_festival/poster_new.jpg": "4ed575b685d2017291e5424f34f14af1",
"assets/assets/products/music_festival/poster_old.jpg": "c241e8009d16cc9675a1af92701ad296",
"assets/assets/products/music_festival/poster_old_2.jpg": "abfa4b9441dc0bd24ebe49e821b77558",
"assets/assets/products/music_festival/shirt.jpg": "5f5a205d1c9418784093ebb9eb997434",
"assets/assets/products/music_festival/title.svg": "ebfe1d6a0a4650e10be163dc17eaf0f2",
"assets/assets/products/music_festival/web.jpg": "9d3813a10f37eadead32f4ed71bca4e8",
"assets/assets/products/open_mall/cover.jpg": "01af20de73d1579768cea6ab69fae518",
"assets/assets/products/open_mall/open_mall.jpg": "5d16dc53f1a749659539809591c0a5a7",
"assets/assets/products/open_mall.png": "614a14cc58e737de0301db8a20cce64a",
"assets/assets/products/phase10/2.png": "3fd7c323dc10c6f575cd09be2b89d577",
"assets/assets/products/phase10/3.png": "7e20e1eac99d01e1e5214640c857c3ce",
"assets/assets/products/phase10/cover.jpg": "bfaabbc9e878ca89d2e9d5e51ee6065d",
"assets/assets/products/phase10/cover_horizontal.jpg": "9e518a06065efdd5c7abbe5907e0e8ee",
"assets/assets/products/phase10/flow.png": "c37a1d8c440f195170e1dc8079440db9",
"assets/assets/products/phase10/GameModeLab.png": "db5d9db98e2a53aa475bd4bbb2fd9cca",
"assets/assets/products/phase10/game_expert.png": "24d0a35b35863a84a478e73678e10521",
"assets/assets/products/phase10/google_play_button.png": "309cdf36da349a281e546b0862fc66f1",
"assets/assets/products/phase10/icon_modes.png": "87a551e6247a722af7444a18b4bb62a5",
"assets/assets/products/phase10/moving_desc.png": "c3ad8b722377fe6d2e82cc0a18320aec",
"assets/assets/products/phase10/moving_game.png": "cc96ae163e608719d522278cc7d90b83",
"assets/assets/products/phase10/moving_home.png": "52cd905684f0b6a3b20e206d1011684d",
"assets/assets/products/phase10/moving_shape.png": "f3fe16f56d7ae64cbe6cbd357c45faaa",
"assets/assets/products/phase10/phase-10-card-game.jpg": "ca1d8b8a1727c945c6b74e11f26bf677",
"assets/assets/products/phase10/phone_expert.png": "aa608ae77252958b2cfe2d3696b92425",
"assets/assets/products/phase10/phone_lab.png": "58d8df6ec09c555d9f5ed303125d79d8",
"assets/assets/products/phase10/phone_play.png": "b885efa78cd8344cd5a74dd2e5190742",
"assets/assets/products/phase10/statistics/engagement_time.jpg": "9fc2c7d243afc0d056ab098bd7ff9ea2",
"assets/assets/products/phase10/statistics/screen1.jpg": "fc00505854037331c3e6ce62e8a18a47",
"assets/assets/products/phase10/statistics/screen2.jpg": "ba82f41c906b06a3359d5d86081a5516",
"assets/assets/products/phase10/statistics/screen3.jpg": "3981f3dba942fcad0f8185b8f652a88a",
"assets/assets/products/phase10/statistics/screen4.jpg": "0c22f805d13cd5ebb4c2a1527300227e",
"assets/assets/products/phase10/statistics/screen5.jpg": "f60f03f317eea027be5a02c5ac206893",
"assets/assets/products/phase10/statistics/screen6.jpg": "8934fa182c5e2e718fae99c4730685e5",
"assets/assets/products/phase10/statistics/screen7.jpg": "88afe4c99174f537ad886f3c9976fc52",
"assets/assets/products/phase10/statistics/user_engagement.jpg": "89e0c09f158845479d515c4d6fa482d7",
"assets/assets/products/phase10/web_button.png": "076358dc682abac96cfbc26109d0d844",
"assets/assets/products/pianist.png": "ad00c05144181dcf2e45739f52a26234",
"assets/assets/products/pixel_year/A-year-in-pixels-logo.jpg": "2c08bb8914358d43203d566862b1290d",
"assets/assets/products/placeholder_phase10.png": "07b0924ed94bb197d7e57c8f5ac5d4c6",
"assets/assets/products/placeholder_pianist.gif": "4b12865ac0cffd43c40e74fabbd58acc",
"assets/assets/products/plaka/cover.gif": "6db52bd07a2c958d1fb36fdb136f4383",
"assets/assets/products/rainmeter/badge.png": "73f65c25460d796033f23db75b8973a8",
"assets/assets/products/rainmeter/clockworld.jpg": "8a3c15d87c80e9888e6f73c4efa5c8aa",
"assets/assets/products/rainmeter/cover.png": "aeb66b41cdcacf36e9103bb952ea0d02",
"assets/assets/products/rainmeter/meenimal.jpg": "d0c050374ebc9c305de59d520032fca1",
"assets/assets/products/rainmeter/OffBalanceLogo.png": "bd707b023fbda6b3a375e1088bd2ed90",
"assets/assets/products/rainmeter/sparse.jpg": "377086e0f4877a829b28c11a4bd3a646",
"assets/assets/products/rainmeter.png": "750d22cfd1c848660772942845d4800a",
"assets/assets/products/spotify/2010.jpg": "43e8054375b67b415a8b09be78373d11",
"assets/assets/products/spotify/Epidemic.jpg": "b671e88912af6d6b2a02d19b09b169c7",
"assets/assets/products/spotify/Hirt.jpg": "11d4922095c3648da58afaf56a68fa83",
"assets/assets/products/spotify/Nu_Disco.jpg": "b915c35971b8dce30dcbb9e4f37fc056",
"assets/assets/products/spotify/Piano.jpg": "a9f1614f85df3e9796e8809bbf993c3e",
"assets/assets/products/spotify/Tech.jpg": "11e5fd88f1e071c8d04c2b896e99ac7e",
"assets/assets/products/together/cover.jpg": "82813f7709d9d6b5f0c460fb3aa80e4a",
"assets/assets/products/together/image.jpg": "9d46af038197029f7c84f3347cd79414",
"assets/assets/products/together/logo.svg": "f3f962c66c3f92770709637f265a80bc",
"assets/assets/products/together/meetup.png": "85a413667dfaaafc8b9e40bb36bfee25",
"assets/assets/products/together/placeholder.svg": "884cb46d178c6afd03034d719df9d83b",
"assets/assets/products/together/screen_1.png": "da22cfbac75a68d05273c0ba91e3eb99",
"assets/assets/products/together/top_bar.png": "dc1ac895a056ef0855f2b28ef1ca4cfa",
"assets/assets/products/youtube/1.jpg": "ed4f6e45028d139302ca6e7c4208226f",
"assets/assets/products/youtube/10.jpg": "4956cb2369673efb2546b3911cc07543",
"assets/assets/products/youtube/2.jpg": "a573f4ad53774a7934ff50c2832ec5b0",
"assets/assets/products/youtube/3.jpg": "2f75521ed0f7b8e65903617653927e8e",
"assets/assets/products/youtube/4.jpg": "10324cb871089f513bb63fadf650bf5c",
"assets/assets/products/youtube/5.jpg": "be5457797d05510574f376c4e6e0a686",
"assets/assets/products/youtube/6.jpg": "13d46dc37b189151a9ffdba98f93ddf6",
"assets/assets/products/youtube/7.jpg": "84e6629fa7b13b2368f70d4c863cb502",
"assets/assets/products/youtube/8.jpg": "3a0cb08eacb8741e92108c161abf9e53",
"assets/assets/products/youtube/9.jpg": "f1250d32cd84bd44255b1e66099340fe",
"assets/assets/products/youtube/banner.jpg": "9cf2a9d02d8a17a38ae37406556dc935",
"assets/assets/products/youtube/cover.jpg": "2f4321a7c09e0fb6299c7dfb9f450db1",
"assets/assets/products/youtube/logo.png": "5215b24aa70c282711f9e34e9cb9fe7f",
"assets/assets/products/youtube/title.png": "7df7f33bed95da771faef44b7a9b8184",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0dc536378033d14a8841cd076856c636",
"assets/loading.gif": "e5d301bb2cf604e07dd4fd31d2adad45",
"assets/NOTICES": "9a1ef84beb3a1316c5cbb77ea5a2eed9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "d0b3bf92014e698856d505a65b5f0ee9",
"canvaskit/canvaskit.wasm": "567c5aeda8f673d1b76256d2682fd3b9",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "e3a8db3bea434c929936f69d84e2f2bd",
"canvaskit/chromium/canvaskit.wasm": "e86670fe2af62cbdd3b75e098f393924",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "f1b800f6a9fac877f65a545b9f76c703",
"canvaskit/skwasm.wasm": "5a5c6171d2eed658e3b5fff70c4af82c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "33c9d7ca14ef77f13a3a6398256eb53d",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a269dacac3d410776258f72f23545147",
"/": "a269dacac3d410776258f72f23545147",
"main.dart.js": "c331e6e40eb6eb828ca2d29bdda7b83c",
"manifest.json": "136936b7dd341c6433f45ef52be168ae",
"version.json": "980547175e325fe622a3362b84d55b6a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
