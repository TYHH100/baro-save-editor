if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const b=e=>a(e,c),o={module:{uri:c},exports:i,require:b};s[c]=Promise.all(d.map((e=>o[e]||b(e)))).then((e=>(r(...e),i)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"c7a9625f116b041d637c55efb17f3aa8"},{url:"About.html",revision:"fbbb9e21658bd52bcd617605aa70b3e5"},{url:"assets/About.94bd82da.js",revision:"20238c14d6cdb9ba28d233494a4d528f"},{url:"assets/About.a76c7f59.css",revision:"722a7bb01dde1db25361190b4f6382f7"},{url:"assets/Decompressor.5291c480.js",revision:"24be212a868c67459fd3d87a40d05b19"},{url:"assets/Decompressor.67738c0d.css",revision:"9282b6337b5ffc24728e856f791d74fe"},{url:"assets/FileDropper.73d1d497.js",revision:"fb3f8ec0702f46191cbaf2113a4d0806"},{url:"assets/FileDropper.9955e26d.css",revision:"437d725b5ba4e5f23944a37aa5368b70"},{url:"assets/index.40754ba3.js",revision:"f9ba3e57e10f163bd87c87547593d555"},{url:"assets/index.e32c88b2.css",revision:"81707b61aafa872863d7dfd9e557cdd8"},{url:"assets/SaveTools.3006e934.css",revision:"70a0936bad3cf6617f8cb57f6c7c6ed0"},{url:"assets/SaveTools.8f9b5174.js",revision:"2b349819a3e11d785ae1b6ef03105401"},{url:"assets/SubTools.1eac9245.css",revision:"2e242c82f5f060b2af5782a5a80485db"},{url:"assets/SubTools.7beba2d8.js",revision:"ce4f0fb0f423929f7eb7c305c3ada918"},{url:"assets/vendor.6119329f.js",revision:"d79152d67a9ae4d7922a6540d214ef30"},{url:"assets/vendor.e9ddbc1a.css",revision:"2e91ee1c430445c241fddd6c9dd9db15"},{url:"assets/VRow.a47e2044.js",revision:"97603aa21463bf49a4b890e7b1a1c885"},{url:"assets/VRow.e10d04e1.css",revision:"aec8ddb95c05bbd8902fd626aa0f80cd"},{url:"assets/VSheet.bf08dac1.js",revision:"18ca544ef00f13560dbb8cb56a9dad1c"},{url:"assets/VSheet.c1c258b0.css",revision:"2fc8d4c30aac911440ba8dd927c52612"},{url:"assets/VTooltip.3df7ec5e.css",revision:"82313d60d1204957c3c0a4d84afb0ea8"},{url:"assets/VTooltip.a2067bd7.js",revision:"e554d55f948c61ffe9010e4349711b2b"},{url:"Decompressor.html",revision:"2b0ee0c1494ed863378fa6f734ea6e5a"},{url:"howto/addSubForPurchase.html",revision:"a597962fb6a8eaf284f5acd9833c69a6"},{url:"howto/editOwnedSubmarine.html",revision:"cc52412922fc4a2ecd0205210eec6c84"},{url:"index.html",revision:"cddfb2e8bf65cec1da91271cd632659d"},{url:"SubTools.html",revision:"d5bc72657cf33efbae4ab5a73b4262b2"},{url:"pwa-192x192.png",revision:"a8ac7ec9414dccd8f171eeb3bfb6e15b"},{url:"pwa-512x512.png",revision:"679b09ad5f1f8745902b2222baac86a9"},{url:"manifest.webmanifest",revision:"04aabe678ba4501f5319f5b966a45637"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
