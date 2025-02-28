'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2a39f93068f9913b2c21f3ab13b0953d",
"assets/AssetManifest.bin.json": "3c869f7926cbeb6d91950d5db22df8c2",
"assets/AssetManifest.json": "798cd160a0bc79860e2965c0d3acb412",
"assets/assets/404.json": "563a689364be261544962dd2ce4fa8f8",
"assets/assets/dummy.jpg": "9ee1e98fc06534915a0e068ed86bd035",
"assets/assets/eyes.json": "97f06556852e0b8c72739bca6ee0685c",
"assets/assets/icons/behance.svg": "47581037075cab1415da7ca527724dd0",
"assets/assets/icons/chapter_1.jpg": "ac88a88aa81a389a3975b1c8aba64502",
"assets/assets/icons/chapter_2.jpg": "ffe02a9f1a3e493a3dc416d9903bb90a",
"assets/assets/icons/deviantart.svg": "6639235c637bf4f70871743c3356f46f",
"assets/assets/icons/facebook.svg": "cc2005cd7345c88a127ef072ce5746e5",
"assets/assets/icons/footer.jpg": "a69f913cd16ebc343cbaf65a7136a4bd",
"assets/assets/icons/github.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/icons/instagram.svg": "8190dbde6acb058af80b3a9801dc2912",
"assets/assets/icons/linkedin.svg": "66be765d434023c6aeffdbe5c72515be",
"assets/assets/icons/logo.svg": "47aa99846a0b0dcef26544fcb782f2a7",
"assets/assets/icons/logo_2.png": "0ab62d55d0c2a72f2a54fccabed5307b",
"assets/assets/icons/mail.svg": "edccfafbec6de4541ba3d0499e66a85f",
"assets/assets/icons/profile.jpg": "1999a5e40583078f683c40d34e8fbdd9",
"assets/assets/icons/title.svg": "c5e2916d5c26a7fe39e6c8ec1be4ff5d",
"assets/assets/logos/logo_kollia.jpg": "ab92c2a9315f6cc937d6bc1238fbead2",
"assets/assets/logos/logo_kollia.svg": "d19b22078cd3278b1ff93b30df05b368",
"assets/assets/logos/logo_mosaic.jpg": "58a16655c008903c7c59f0f846ba1b65",
"assets/assets/logos/logo_mosaic.svg": "95963fe27ffbddabaefdae1ae0db6ed0",
"assets/assets/logos/logo_papilas.jpg": "9beacf770a72803669fca56182edccde",
"assets/assets/logos/logo_papilas.svg": "7cc605451e3ab6f3c61178005ddc8ffb",
"assets/assets/logos/logo_pinakothiki.jpg": "ab64fc6f5bf038e5ab5e45e319d47d6c",
"assets/assets/logos/logo_pinakothiki.svg": "76c24222beb39673609b74131e3977e1",
"assets/assets/logos/logo_shades.jpg": "7a8c03c32fcd022eb483e21cdbfb9543",
"assets/assets/logos/logo_shades.svg": "c044b16c6d4aaa635f50a5c7d714bcbf",
"assets/assets/products/hexa/cover.jpg": "4486e40977d7f091da38c608e03d816b",
"assets/assets/products/klonos/banner_ellinikon.jpg": "381ecc6bab0d655522ecff589740257c",
"assets/assets/products/klonos/banner_remvi.jpg": "b46b36c6692c54228f75f692a73d30a6",
"assets/assets/products/klonos/ellinikon_1.jpg": "7a4d5feffe39cb273e6759602049771a",
"assets/assets/products/klonos/ellinikon_10.jpg": "cbcc64478fe72f49d11a1a657eec6a59",
"assets/assets/products/klonos/ellinikon_11.jpg": "8bcfd2233c1966ce2afaccb74b986370",
"assets/assets/products/klonos/ellinikon_12.jpg": "d3e2d134342f70123bdb502ad5ca76f5",
"assets/assets/products/klonos/ellinikon_2.jpg": "44b1304b6b1cb65d3b4c9d7c3987d4d8",
"assets/assets/products/klonos/ellinikon_3.jpg": "6f7538a290cdbff31725a0aab8b0591b",
"assets/assets/products/klonos/ellinikon_4.jpg": "bc7fe4e5d1293c3afea72b7a70127d33",
"assets/assets/products/klonos/ellinikon_5.jpg": "3003875882d0d7128729d9e7bac269b1",
"assets/assets/products/klonos/ellinikon_6.png": "54fb66e4146b927bf92d319284fe3df2",
"assets/assets/products/klonos/ellinikon_7.png": "77e7aca4814530d40ea1b458e2c57c72",
"assets/assets/products/klonos/ellinikon_8.jpg": "58e0f43f423202b348f197601ed35fb5",
"assets/assets/products/klonos/ellinikon_9.jpg": "7c146c6e389f2df2ddea7e8fc29a9cd7",
"assets/assets/products/klonos/remvi_1.png": "f79f63edbd116c054217c0adb36988a5",
"assets/assets/products/klonos/remvi_10.jpg": "6d4f6a496fe71f135e3bc532a6d09c1b",
"assets/assets/products/klonos/remvi_11.jpg": "1d406ffdd7d1bea9e3a20c0267e54912",
"assets/assets/products/klonos/remvi_12.jpg": "f52dbaa209763527f29ef23510a22740",
"assets/assets/products/klonos/remvi_13.jpg": "3b196ed7a0140e31464a226f0467877c",
"assets/assets/products/klonos/remvi_14.jpg": "b4b40b34ca2fce954ddea5f401a0cf54",
"assets/assets/products/klonos/remvi_2.jpg": "d14868c8554c57c3d25b203f20b62d7a",
"assets/assets/products/klonos/remvi_3.jpg": "1d00c9b4e9b859b1b90a8f996b2bc14d",
"assets/assets/products/klonos/remvi_4.jpg": "b9c508b2de2cebaf8dcd90fa89496129",
"assets/assets/products/klonos/remvi_6.jpg": "4ac41b704a328fc5c45c2a212a331c1a",
"assets/assets/products/klonos/remvi_7.jpg": "5b636df2d00425f19aa1a16ee5545843",
"assets/assets/products/klonos/remvi_8.jpg": "cd0b8fd13a2ef01b87f9d7bf4a66da9c",
"assets/assets/products/klonos/remvi_9.jpg": "ec289ef7dfc1b7281dcce6b9be1684a9",
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
"assets/assets/products/phase10/cover.jpg": "1930c4c296e9df7b5a32adf32f5c6b95",
"assets/assets/products/phase10/GameModeLab.png": "db5d9db98e2a53aa475bd4bbb2fd9cca",
"assets/assets/products/phase10/gameModeLab_1.png": "45e11253d9577213f6c03fc79da0ed2b",
"assets/assets/products/phase10/gameModeLab_2.png": "446e3a9fe442552bfcda48580b3fe6cb",
"assets/assets/products/phase10/game_expert.png": "24d0a35b35863a84a478e73678e10521",
"assets/assets/products/phase10/icon_modes.png": "87a551e6247a722af7444a18b4bb62a5",
"assets/assets/products/phase10/modes.png": "4b15997f882d07d161e24e9832deca4a",
"assets/assets/products/phase10/phase-10-card-game.jpg": "ca1d8b8a1727c945c6b74e11f26bf677",
"assets/assets/products/phase10/players.png": "a9e54792117edacbb31d84284b8c43a7",
"assets/assets/products/phase10/play_store.png": "46dd42de3d0cddcf1269c9d7c64babe9",
"assets/assets/products/phase10/rooms.png": "9605fd073c17c89d7539212b3f7cec77",
"assets/assets/products/phase10/room_screen_1.png": "bd290b056b3d68f6c7e2a56631ecef8c",
"assets/assets/products/phase10/room_screen_2.png": "ac53d830a23a73193d6ef56f722d5216",
"assets/assets/products/phase10/Shot1_Horizontal.jpg": "2d74a96257651b54d71377d932e9dee9",
"assets/assets/products/phase10/Shot2_Horizontal.jpg": "010ca68108d8245190799312b17ad11a",
"assets/assets/products/phase10/Shot3_Horizontal.jpg": "7ae8d4ab088c369a56cbbeb1e6936135",
"assets/assets/products/phase10/Shot4_Horizontal.jpg": "c28d7f60c93aa59154baaa61cbd59437",
"assets/assets/products/phase10/web_button.png": "076358dc682abac96cfbc26109d0d844",
"assets/assets/products/pinakothiki/pinakothiki_logo.jpg": "5c399b1b1a107140a5556f8410ec49c0",
"assets/assets/products/pixel_year/A-year-in-pixels-logo.jpg": "2c08bb8914358d43203d566862b1290d",
"assets/assets/products/plaka/cover.gif": "6db52bd07a2c958d1fb36fdb136f4383",
"assets/assets/products/rainmeter/badge.png": "73f65c25460d796033f23db75b8973a8",
"assets/assets/products/rainmeter/clockworld.jpg": "8a3c15d87c80e9888e6f73c4efa5c8aa",
"assets/assets/products/rainmeter/colors.png": "ff2d9f361141a0e8c47e39c616b5f218",
"assets/assets/products/rainmeter/cover.png": "aeb66b41cdcacf36e9103bb952ea0d02",
"assets/assets/products/rainmeter/Fonts.png": "4e4e0aa75a01bce71e0de72d267bbb0a",
"assets/assets/products/rainmeter/meenimal.jpg": "d0c050374ebc9c305de59d520032fca1",
"assets/assets/products/rainmeter/OffBalanceLogo.png": "bd707b023fbda6b3a375e1088bd2ed90",
"assets/assets/products/rainmeter/OffBalanceXDeviant.png": "6bce13a04d763e467bedfa983e4d6f32",
"assets/assets/products/rainmeter/Settings.png": "822a751c6513a404103b368e6dafce09",
"assets/assets/products/rainmeter/Settings_Single.png": "8dc26504a5aeac569a616047e330d8f1",
"assets/assets/products/rainmeter/Settings_Single_2.png": "8a9e5b8ff26e4033b5e6155e798f98f1",
"assets/assets/products/rainmeter/Settings_Windows.png": "d77f3b89006aeef77ea313b0594519d0",
"assets/assets/products/rainmeter/shortcuts.png": "fa266dd96662ff7a0992dc081944a6d8",
"assets/assets/products/rainmeter/sparse.jpg": "377086e0f4877a829b28c11a4bd3a646",
"assets/assets/products/spotify/2010.jpg": "43e8054375b67b415a8b09be78373d11",
"assets/assets/products/spotify/Epidemic.jpg": "b671e88912af6d6b2a02d19b09b169c7",
"assets/assets/products/spotify/Hirt.jpg": "11d4922095c3648da58afaf56a68fa83",
"assets/assets/products/spotify/Nu_Disco.jpg": "b915c35971b8dce30dcbb9e4f37fc056",
"assets/assets/products/spotify/Piano.jpg": "a9f1614f85df3e9796e8809bbf993c3e",
"assets/assets/products/spotify/Tech.jpg": "11e5fd88f1e071c8d04c2b896e99ac7e",
"assets/assets/products/together/billboard.png": "149e14062c98aa31236a4f7cdf7bce0a",
"assets/assets/products/together/bus.jpg": "778f5ce346c254c19f96963aea9cfce5",
"assets/assets/products/together/check-in.png": "c9a231989ebef62a581819e16ae911c0",
"assets/assets/products/together/cover.gif": "24d96eb434637bd403814e5fd2ad0397",
"assets/assets/products/together/cover.png": "17632c588fc964d95a4cf76b2cc49cd2",
"assets/assets/products/together/dynamic_bar.png": "a9e9e5e88ae45ffa81629c0555714a8d",
"assets/assets/products/together/emojis_1.png": "7088afb86eaa6a3bf46b4465db76989b",
"assets/assets/products/together/emojis_2.png": "8b263effe2787cb195c10df156b15991",
"assets/assets/products/together/fid_high_1.jpg": "729409c185ab1411540f4fa632885c34",
"assets/assets/products/together/fid_high_2.jpg": "7e61f3fb09490dae24198cfb9e2a8436",
"assets/assets/products/together/fid_low_1.jpg": "1444665a08759b8e772f0adb9d8f04ee",
"assets/assets/products/together/fid_low_2.jpg": "6899fe4dbd0e8b543b64b781f66da95f",
"assets/assets/products/together/flowchart.png": "912d7ed8ed34bb9a3dbe6301fedac594",
"assets/assets/products/together/flowchart_1.png": "ecb0bccec98f37efe80e609d5a296369",
"assets/assets/products/together/flowchart_2.png": "b2cb16971b5b7c7d76d460fb313080f3",
"assets/assets/products/together/header.png": "311f9e82ace8616b5dcd47032e8a1a20",
"assets/assets/products/together/logo.png": "ac44340bb6845e55364f56e0809cbc50",
"assets/assets/products/together/map.jpg": "9b019544574c576de68dcd3039f5df31",
"assets/assets/products/together/meetups.png": "91b984d62a17591bf75d3f865dc14072",
"assets/assets/products/together/metro_1.png": "0949b17e24e9b2f0e7ca12f7e24bd78c",
"assets/assets/products/together/metro_2.png": "702d464bcd56ec9cb49b008beb84c42a",
"assets/assets/products/together/moments.png": "dc885d4286447e1e1b47e53079849b58",
"assets/assets/products/together/output_video.mp4": "b8ac35a817e96fdeb80c1ed30bba7e24",
"assets/assets/products/together/persona_1.png": "2d72d1f4cacb6324352b31ac15666c3e",
"assets/assets/products/together/persona_2.png": "01658d808aa1a090e3baa6704fdf7382",
"assets/assets/products/together/persona_3.png": "019de93026f6dea0f7a8f9c1e9ea75b5",
"assets/assets/products/together/PlayStory_1.png": "44074b3e0fa03814862f14159bfba0e1",
"assets/assets/products/together/PlayStory_2.png": "3880ed3e263b4c6a6a120370da8b68d9",
"assets/assets/products/together/PlayStory_3.png": "74c9bf59270eec434856de1edb17f74c",
"assets/assets/products/together/PlayStory_4.png": "1fd5a42a2ec6145a2fa31f7456e10b73",
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
"assets/assets/profile.jpg": "3104861f1075f91af68113deff0c0613",
"assets/FontManifest.json": "b850e95f0f32308487b165f7ea7cf98a",
"assets/fonts/EudoxusSans-Bold.ttf": "6002a71168dc53170fb31750e86a0450",
"assets/fonts/EudoxusSans-ExtraBold.ttf": "a22165748a3d30ce5c29c15469629175",
"assets/fonts/EudoxusSans-ExtraLight.ttf": "8bead1018e546d80e9b082783a181228",
"assets/fonts/EudoxusSans-Light.ttf": "717e9f602612d7fb92f63ac148c072fe",
"assets/fonts/EudoxusSans-Medium.ttf": "9399efd774c7f56dd0c84caae89c27fb",
"assets/fonts/EudoxusSans-Regular.ttf": "fd88cbf3558a9b927154c920eba20046",
"assets/fonts/Helvetica-Bold.ttf": "4ddbdef3e5fc3ca18368e790c4d0296a",
"assets/fonts/Helvetica-BoldOblique.ttf": "bea0009cf691cf7e22439b789b9761ef",
"assets/fonts/Helvetica-Oblique.ttf": "9923679699617dbf2214a91dc9b67734",
"assets/fonts/Helvetica.ttf": "dd2001972f09be440b206d03aac67c9a",
"assets/fonts/MaterialIcons-Regular.otf": "b56b4fdf22ff163c0584e28cbee219d9",
"assets/loading.gif": "e5d301bb2cf604e07dd4fd31d2adad45",
"assets/loading.jpg": "835414bdc1389e4c62cd76a6b9f84f2d",
"assets/NOTICES": "466de93d30fd8af996ab2d8af0f87e78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "8cf6e87eff144e2453a9640bfa1a4ad0",
"canvaskit/canvaskit.js.symbols": "175bd411bd217d6be2b81e6814ba040e",
"canvaskit/canvaskit.wasm": "9c1d5989342561acfecba39e516f1d73",
"canvaskit/chromium/canvaskit.js": "9dc7a140b1f0755e6321e9c61b9bd4d9",
"canvaskit/chromium/canvaskit.js.symbols": "226d130dfe086da9114583db7ab8dca5",
"canvaskit/chromium/canvaskit.wasm": "109a9f1f6d0fcc6b8b17b3cc9cc06b4b",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "d3b3cc22385d4ac873dd2157360155e0",
"canvaskit/skwasm.wasm": "bba3d030323fb4f2e2262a0e90390dd1",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "66594078c390ce22386607adb437f8eb",
"canvaskit/skwasm_st.wasm": "eba51262a05b87a26d420a55481799d3",
"favicon.png": "33c9d7ca14ef77f13a3a6398256eb53d",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a2562c4db50c9daa74ee0b9156ee7f09",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7db884f87fbcef748d6ef9475a56306b",
"/": "7db884f87fbcef748d6ef9475a56306b",
"main.dart.js": "11395fd5695dbe1f8cf1ff8d46061d0c",
"manifest.json": "136936b7dd341c6433f45ef52be168ae",
"version.json": "980547175e325fe622a3362b84d55b6a"};
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
