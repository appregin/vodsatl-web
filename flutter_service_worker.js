'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c13d94a982df8d03de0e48c52b2779bd",
"version.json": "2607ef3edc3a871247ac1835b4b55a3c",
"index.html": "b89065df08618149d9a2a2dc48728846",
"/": "b89065df08618149d9a2a2dc48728846",
"CNAME": "edf9104d8ea06c00041dc4ba0fd7a759",
"main.dart.js": "b56bed617f97973559952b9f313bb492",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "652eafc91edacc6e0ad4e8ebfc74c00f",
".git/config": "dae3d3942cb9f917ccd90a77f563ed13",
".git/objects/0c/808f5cb7ba10637080a49fbd2b3fce8e653f87": "b42acbafa2acef41ce1a5cb93cbf7029",
".git/objects/68/853d44d0a9a41aca3a232124f67209bea44cc1": "da316e78fd66032f7a83dccf99297fe5",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "dc1d3b6ac68817e26c52a2b7aca98a10",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "24deb07a93d7e0dcc8e55b7be1f11989",
".git/objects/33/0a8f26dcfadcafad14bfa821284c6523d6470f": "68db4bcd1c2c451fe637c1d87521c768",
".git/objects/b5/adb92717d3d3937a20b27787cc281d9247d7bf": "483d5ae75635e9ed30b1d7e720082fc9",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "1f4decf6bd1e79e74c383dd9dbcf3d4b",
".git/objects/bd/1d58d5201f1ed65fbf2834cee9b465fdb6c247": "c11e9772680d406bf01b994fa98cdabc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/f4/c9f747cc24fbde7279a847e8b61b8380c5cdd8": "39bc81c62711644b71c2a58266ea439d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c9/c0c755db5204682381a2fb9615ebd6a2699715": "e200c6d661803127688ef8ea4e895b64",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "6d9279f777bb9f4a4d82d12aa6126867",
".git/objects/fc/d6f641b7e4aafbef3bad2cd7bb89149cf4b7e8": "a752a26274d3cb3715a9556d1030d1da",
".git/objects/fd/aa87a985218006d2eee9311d14b6254cfc133f": "26674be7138b7d09fd55130761f85cab",
".git/objects/e3/d55551d775bdd5137a580c30f83586ed74089c": "a545f4e90698f4ca92d09cbbf2c13609",
".git/objects/e3/c6d29f9c1ace4a48c9654b6c9b070c6d08d0e2": "56cefb7ce19bb926014a9c49fcf89685",
".git/objects/c6/a7a0f3db171f97f9cccefa11120d97004c1fee": "b823ef6b11051e2e859a632ae78f4528",
".git/objects/89/b8c859858607376a99464523166d19d18a6d48": "c9dd5a87ee6aa039d9817ec89ddbd6ba",
".git/objects/80/8a40c834ba356feb24fd5567abd7006db72c6d": "48619c8d6722194d3960c193bf753ea7",
".git/objects/74/64f0d3bdc64fd3996361d59e0802c5e82f9c61": "9f3711357fcc596ac5f9c1510b529ce6",
".git/objects/74/e9ed0230ddd1ae3e23d4ec79ad02a7685beac0": "72f7bf8b7efb173ac6e1d6813535d3d9",
".git/objects/7b/968c345f9e9ff5062a3d9505c9fd9729e07875": "b08071c81038cba3ec6e32947d219117",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "c90089055a4f7117fb58f15dd50973a0",
".git/objects/86/38468611e87a16a2d711998d3a23da2ab5fb8a": "8f6daa67b0d2dee885db4701537c844a",
".git/objects/2a/90f2162fcb1b7e3849ea306a87cbbf0228b236": "82e81f5426c93ec8ef2d50cf056fd078",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "a285976a30d9d9853ec76d45237be835",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "abaee217f18e544d20dc0cdba473ddc5",
".git/objects/09/7580b0badbfc4335cd1bf6d66200468a8ab19d": "dad442dc445a4b74be6454dc50396982",
".git/objects/0f/cc7b285a8bac8b35c4613e234e5c8acfebbec8": "a825e9c3f51aa152d93bffc1b30a3e3f",
".git/objects/90/952fc8c23a4f86e9eea1f81e3be41607d12efc": "83a4ed263af2ec13c63835544146e30b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/9bfd958d1948a57263445ba081b985a4b63253": "0e05b0067954d16fb0248c8c8c759802",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "6a4baf0ee5d7f24d01892e880c87e9b5",
".git/objects/a9/0f6b68500c5b142ae22e9f9fb9a4d6525401fe": "e310d8cee5d852cb281d5a762de11de8",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "719b91b3b0c9c9c1b12187af557fd8cf",
".git/objects/d2/eebd14cf0851ca97ce81602c2bbf7a33eee9e0": "20885d8a2e550c8974f78229a74b97da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/b3cc60226b8c1009f34dd6d0533e1e23f98651": "9d896259e9cd52a54a51d97a47e8abdb",
".git/objects/db/4263083bb6556d8a5e73d7899675585203a78e": "45a7f3992eeb9ef032028172822b681f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "a488dd5b768f3e95bb3ded676201c413",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "ff0540ff2ad01de40a8a51b854e31e72",
".git/objects/fa/9e12774110834e5674facfc7e840fc5beee460": "0ed8946c669447de11e36c5876991a74",
".git/objects/c2/d46358e2502e576f80f844a58078bba52b9ba1": "85bf2ed960702855ea18002aba729a2a",
".git/objects/e7/cfd8d5618c306c7a7a522a0928ec44ed02c0ab": "f5a7689dd5085f65ef0849e0569ac130",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "54f8ff0d387380c0b9c25486e6bb6bce",
".git/objects/83/e5ba7f5ab9b06544d2146fef52aec4053fd64f": "5afc08a18829a1f909554931e7f94544",
".git/objects/48/66056688175d29a7005a760b34f77a1f21c7b0": "9a5df51c28d38d674060e5b89848e9be",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "b1ef66f3885813d266e0413975db0a56",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "6dc767ec6498faa598b6dd7d00386498",
".git/objects/8d/2d5f127600173d17ca6ac83b7e05de754a007e": "be58c8751dc36d6da3c0ccd7b9cfb1c6",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "e33c70e0eae492a795d978ed34591073",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "81eb5686768718a01892b81166ee3cd0",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "4cd8e95b87d7bb2b2c3e8979aff35223",
".git/objects/7f/9714dd391717a9bb7808dccad8473afbba116a": "730e016cb527299ebc5d1568bad93124",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93629ddef72fb41e555cb9a1e95c8182",
".git/logs/refs/heads/main": "93629ddef72fb41e555cb9a1e95c8182",
".git/logs/refs/remotes/origin/main": "4b650df2ae64e4a3d2b41c6c0ad0ff85",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7e497d4f1a309254f603ecf0ef8792b8",
".git/refs/remotes/origin/main": "7e497d4f1a309254f603ecf0ef8792b8",
".git/index": "c64c2ab36b5a9f99c3c4359f98716885",
".git/COMMIT_EDITMSG": "249284c1d080e9ce53ee74ae08770aa8",
"assets/AssetManifest.json": "492f5fe24adc56075fa8bb64434e8d37",
"assets/NOTICES": "a75f910200df7f52bcf0a91d4b87ff09",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d884d3c9884e58c3937c53361e9f808c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/masked_scroll_noise.frag": "403172cd1ae8ac68a104170879a28192",
"assets/shaders/scroll_noise.frag": "e5e7cc5cb02b865b8f2e9ab9e4768b47",
"assets/shaders/black_to_alpha.frag": "efc53f159f446732accec9412f9ec409",
"assets/shaders/fire_scroll.frag": "96c2ed10722fe75705469ea27e65770e",
"assets/AssetManifest.bin": "4f5a095ef521584e64afc20145cafb3e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/logo.jpg": "51608e1deb87a2baa3792bb6c08936bb",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
