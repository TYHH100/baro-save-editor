if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const o=e=>a(e,r),f={module:{uri:r},exports:i,require:o};s[r]=Promise.all(c.map((e=>f[e]||o(e)))).then((e=>(d(...e),i)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"c7a9625f116b041d637c55efb17f3aa8"},{url:"About.html",revision:"fbbb9e21658bd52bcd617605aa70b3e5"},{url:"assets/About.b81182cd.js",revision:"b0930757cd798efbcb502eaacf72124d"},{url:"assets/About.c02592e0.css",revision:"1a663e734df2f7d4626a3ac1de35b406"},{url:"assets/Decompressor.4e8cdc3c.js",revision:"182669c34c773ee7fe524b7485e9f33b"},{url:"assets/Decompressor.67738c0d.css",revision:"9282b6337b5ffc24728e856f791d74fe"},{url:"assets/FileDropper.8f95ad15.css",revision:"38a069c29dad6a1e5fc10b211321f61f"},{url:"assets/FileDropper.8fc66d05.js",revision:"cd15edf24a5f340d26aeb0f08322e5d8"},{url:"assets/index.13653037.js",revision:"d40387c1341ae3e6a05ad7db3ba45f78"},{url:"assets/index.e32c88b2.css",revision:"81707b61aafa872863d7dfd9e557cdd8"},{url:"assets/SaveTools.6ea25238.css",revision:"093c0fcfe08c99b2118b92eebce47561"},{url:"assets/SaveTools.dd241507.js",revision:"1d23c7af54f58e95e1501133d3b5d6be"},{url:"assets/SubTools.29d9e669.css",revision:"a8f7f423511128336eee04be722cf33b"},{url:"assets/SubTools.d93924aa.js",revision:"eaf232e5e56a5f4015a45fcfc36d57d6"},{url:"assets/vendor.6119329f.js",revision:"d79152d67a9ae4d7922a6540d214ef30"},{url:"assets/vendor.e9ddbc1a.css",revision:"2e91ee1c430445c241fddd6c9dd9db15"},{url:"assets/VRow.a47e2044.js",revision:"97603aa21463bf49a4b890e7b1a1c885"},{url:"assets/VRow.e10d04e1.css",revision:"aec8ddb95c05bbd8902fd626aa0f80cd"},{url:"assets/VSheet.bf08dac1.js",revision:"18ca544ef00f13560dbb8cb56a9dad1c"},{url:"assets/VSheet.c1c258b0.css",revision:"2fc8d4c30aac911440ba8dd927c52612"},{url:"assets/VTooltip.3df7ec5e.css",revision:"82313d60d1204957c3c0a4d84afb0ea8"},{url:"assets/VTooltip.a2067bd7.js",revision:"e554d55f948c61ffe9010e4349711b2b"},{url:"Decompressor.html",revision:"2b0ee0c1494ed863378fa6f734ea6e5a"},{url:"howto/addSubForPurchase.html",revision:"a597962fb6a8eaf284f5acd9833c69a6"},{url:"howto/editOwnedSubmarine.html",revision:"cc52412922fc4a2ecd0205210eec6c84"},{url:"index.html",revision:"f0ca50d2f03c751ada8429579634ab7c"},{url:"SubTools.html",revision:"d5bc72657cf33efbae4ab5a73b4262b2"},{url:"pwa-192x192.png",revision:"a8ac7ec9414dccd8f171eeb3bfb6e15b"},{url:"pwa-512x512.png",revision:"679b09ad5f1f8745902b2222baac86a9"},{url:"manifest.webmanifest",revision:"04aabe678ba4501f5319f5b966a45637"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
