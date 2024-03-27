'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "46b73951093604d734aae668d12f9149",
".git/config": "fdfb00c41e310a92d29702547f3b79e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "09bd5e6eb20c5cab7ed56807d9d79104",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "86ff03cc66830d5217e55cc242dbbe3c",
".git/logs/refs/heads/main": "46c2cd29c4773835348cf19c88f928b5",
".git/logs/refs/remotes/origin/main": "e605140e2cb47e71a40f43c246744cfa",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/8edd070bec185bf2b34de9de274756062e81f9": "a4d2519fac327e287d6d181bcb1eed8f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/77dd832c8ece3eafd2f0822c9782b81109536f": "ad63868b7a74814dc5be1b4d782c9af0",
".git/objects/29/d70aea8a752826967a05a2be3bea657557ea8b": "36a77f6269f03b0b86ba684e91910cfa",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/43/93193f2d17e6078b23745e7b102be9a11479af": "56d4eabd559b81aabff5854dcd3a1752",
".git/objects/45/31c01f21a5b46e79ba689ea050eb6b8cfd91e8": "0b1e96d75da50627ce730a5c13d163b1",
".git/objects/4b/e0c86718d5ead6b843f92528dbfb16876bb106": "c1b63eb5b3dc63ba6a5f3aeabfbab439",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/58/ee800cc8e869efbe763b5378156853fa951ebb": "fa0bc591ea83c3e2382f7ff4ae5cab3b",
".git/objects/64/c3e875af2513304eeb82e8546553b84e6364b0": "9a2ddb8078cf77308c81ba5e89630fb7",
".git/objects/65/7e9d5d8df6b1ad3d4a171b899379a5e867b156": "d847981f6d274fc02b7e0b9173824a45",
".git/objects/68/994269fbefc872df67d1dbfc990e32e8a2227a": "283d56a7de7c9f156170cd06e9ddc811",
".git/objects/6e/f450e8a74a469961b9e3a01ce4e9ead77f9ba4": "b0ce4f92c7dcc7a28fafb93b0eaee141",
".git/objects/70/fbdd5914c8727600a9b8cdbab4b74b2fa87dec": "5b0d4767edf7ec1178a8b5585702c0a4",
".git/objects/73/098a2f24642f3d1c008dccae71003619971f41": "9ca145bdb824f42927e75b75b09a5808",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/267daa4dedeee599ae51f45501dd0896c52ea1": "88cb78f5a8d9685bed0f96a1e103dd16",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/54e46f6ada9d6c3bf0a45d1e252d6722da91ad": "373a98f2232682ef22e1fd6ccbcf665e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/2a432379498ff06b98f58931f205f3eddaa9cd": "0a418d8c0a71a02eedfcb13e9675d174",
".git/objects/93/8472e0d88ed9e31aab812ed87a5200998ecb0b": "fe5a9d6b03e3f67f61d59939516bc8f7",
".git/objects/97/8d264ccd4b081b1457084608fea46002ecb9ab": "01c68b723f8825d4c38e6862cd224814",
".git/objects/97/e845643181498c9d9ff755c18cfba323ba8e13": "13ba65812f528dc241c5656309542503",
".git/objects/98/28168d14500b7205aa11eb0f6c6009284cef54": "ae30597787c41b8a28b80e1f338c85e8",
".git/objects/a0/fb2607d4e15f3baa24eae83aa4f506e4494f5a": "5ef9bc10f1340f2205eaa9aa3fbbf55b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/d56125edba00253cfbf6103e1dd9cb5f9692b0": "b2a06eb40ba7f856cd8d8df0994dd111",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/a62343d7b028568e299917a5d41490ce937680": "d4e852db5d21723831a6c8478b1c6cf8",
".git/objects/af/cb38e23230dc45ba1c9482b774699b55798fe7": "99bc6d07aee266e5def6e51518bde6ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/fb397b3d11911bca233726fca8ea602418b652": "b597db948bb410205582c592c9efebf1",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c0/ffc32c27f329ad1cd9d487d16857e753ee072f": "38abc1e7221d0b9c9af3c183e3c4efc4",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c7/70653e8156928a0638f088565babb5502ebc38": "c18216c020ccf824734b0fd656fb5d04",
".git/objects/ce/cdefdf65234f3cb85573961ad36520bad61e30": "cfe6f28cad486688c0ac395b00c03026",
".git/objects/d4/6f96ee476f0156d448f089f2b331589e897fed": "6830ff4893b016fd8008107b7af669a2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/b6fab404879f30ea489387b39c7f057d45bfa8": "db1a839bd87e6f4f39615b7b6e0604f1",
".git/objects/e1/88cd93b06f9449287338128ef44b932f8e183a": "3cade6da1c3b0706575b488e6a420983",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/cab63ceb8b343e5cadbf02afd4b08af788fa82": "08b3ce099f1d07f188dd1d02efdbfd56",
".git/objects/f9/47414e9a97a03a76c05adc7c28333f2dd44c7d": "69586f0f65e1ed17f0ff5e977ac31b4a",
".git/refs/heads/main": "f4228e403de6c7de1d594c87c928eaf1",
".git/refs/remotes/origin/main": "f4228e403de6c7de1d594c87c928eaf1",
"assets/AssetManifest.json": "5eb3ea26bdf6e6f96c89f82803a60fab",
"assets/assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/assets/images/dravya_abt.PNG": "f6b4db2ad0cce23b59a3c641c977332e",
"assets/assets/images/dravya_logo.png": "6184ad6206f8efdd2beaad26424a025e",
"assets/assets/images/nesto_abt.jpg": "c183c58cd7e08235f79b9bbd3b759578",
"assets/assets/images/nesto_logo.png": "dfebf9ac74e3e1831431d9533600e292",
"assets/assets/images/profile_memoji.jpeg": "cfaeb4938aa529049971f48fe3a56610",
"assets/assets/images/zenotiHome.jpg": "5d3356216ce6a2385f9f57e94fb83650",
"assets/assets/images/ZenotiHome.png": "fbb673ba92a22d0b9f144a65ab56f75f",
"assets/assets/images/zenotiLogo.png": "17c14523e006a363507fb2f6ba1f2c0f",
"assets/assets/images/zymmo.jpg": "01e42cded8856d4b90cd3111443fbc31",
"assets/assets/images/zymmo_abt.png": "91470af33e46a36c7273a87aebc4acb4",
"assets/assets/images/zymmo_chef.jpg": "8326d27a66716e4f81cfd89772c6b589",
"assets/assets/images/zymmo_chef_abt.jpeg": "9db274898bd16c8b496b669669daefe1",
"assets/FontManifest.json": "607384d961f5233189f711abb7b64d28",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "89b8c5f50e4303dc53b7f5dbf36f3256",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"dev_icon.png": "5be994f175dc41b3d315ee873f155e1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9aacdaa5cb55bd7d50b5cdef8808db4e",
"/": "9aacdaa5cb55bd7d50b5cdef8808db4e",
"main.dart.js": "1460b731dc29ddeaf0c187a91951268e",
"manifest.json": "8e20b154de3672bab981f418d939c2d4",
"styles.css": "678f7fdc0163c77aa3473b33f72b1b5c",
"version.json": "8c530df21a02321eb533308b87b53392"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
