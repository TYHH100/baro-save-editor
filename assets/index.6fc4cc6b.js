var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{c as l,i,V as m,a as d,b as u,w as c,r as f,o as p,d as g,t as b,e as v,f as h,g as E,h as S,j as y,k as A,l as w,u as _,F as L,m as T,n as x,p as D,q as I,s as B,v as O,x as C,y as R,z as P,A as U,B as j,C as $,D as k,E as N,G as V}from"./vendor.d2dd6a75.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var F=l({theme:{defaultTheme:"customDark",themes:{customDark:{dark:!0,colors:{primary:"#4CAF50",secondary:"#03A9F4"}}}}});const M={computed:{showAlert:{get(){return!!this.$store.state.alert},set(e){this.$store.dispatch("showAlert",e)}},alertData(){return this.$store.state.alert}}},W={elevation:"0",class:"d-flex flex-column justify-start align-center alertDisplayDiv"};M.render=function(e,t,a,s,n,r){const o=f("v-alert");return p(),d("div",W,[u(o,{type:r.alertData.type,closable:"",modelValue:r.showAlert,"onUpdate:modelValue":t[0]||(t[0]=e=>r.showAlert=e),elevation:"1",class:"mb-4"},{default:c((()=>[g(b(r.alertData.text),1)])),_:1},8,["type","modelValue"])])},i(M,"components",{VAlert:m});const G={name:"App",data:()=>({navLinks:[{name:"SaveTools",label:"存档编辑器",url:"/"},{name:"SubTools",label:"潜艇编辑器",url:"/SubTools"},{name:"Decompressor",label:"存档解压缩",url:"/Decompressor"},{name:"About",label:"关于",url:"/About"}]}),computed:{pageName(){return this.$route.meta.title},titleVisible:()=>_().lgAndUp.value,isLoading(){return this.$store.state.isLoading}},components:{AlertBox:M}};G.render=function(e,t,a,s,n,r){const o=f("v-app-bar-title"),l=f("v-btn"),i=f("v-app-bar"),m=f("router-view"),v=f("v-main"),h=f("v-app"),E=f("v-progress-circular"),S=f("v-dialog"),y=f("AlertBox");return p(),d(L,null,[u(h,null,{default:c((()=>[u(i,{color:"primary"},{default:c((()=>[u(o,{text:"",class:"text-black",style:{"font-size":"2em"}},{default:c((()=>[g(b(r.pageName),1)])),_:1}),(p(!0),d(L,null,T(n.navLinks,(t=>(p(),x(l,{key:`navbar-link-${t.label}`,to:t.url,class:D(["mx-2 navbar-button",{"text-secondary":t.name==e.$route.name}])},{default:c((()=>[g(b(t.label),1)])),_:2},1032,["to","class"])))),128))])),_:1}),u(v,null,{default:c((()=>[u(m)])),_:1})])),_:1}),u(S,{persistent:"",modelValue:r.isLoading,"onUpdate:modelValue":t[0]||(t[0]=e=>r.isLoading=e),class:"loader"},{default:c((()=>[u(E,{indeterminate:""})])),_:1},8,["modelValue"]),u(y)],64)},i(G,"components",{VAppBarTitle:v,VBtn:h,VAppBar:E,VMain:S,VApp:y,VProgressCircular:A,VDialog:w});const q={},z=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/baro-save-editor/${e}`)in q)return;q[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},H=[{path:"/",alias:"/index.html",name:"SaveTools",component:()=>z((()=>import("./SaveTools.b74f1454.js")),["assets/SaveTools.b74f1454.js","assets/SaveTools.97bc7b6b.css","assets/vendor.d2dd6a75.js","assets/vendor.e9ddbc1a.css","assets/FileDropper.a2ac22b6.js","assets/FileDropper.72632a15.css","assets/VTooltip.c0af69e3.js","assets/VTooltip.3df7ec5e.css","assets/VRow.93776d3b.js","assets/VRow.e10d04e1.css","assets/VSheet.36660dd1.js","assets/VSheet.c1c258b0.css"]),meta:{title:"Barotrauma Save Editor",keywords:"barotrauma, save editor, save, editor, submarine, decompressor",desc:"Online save and submarine editing tools for Barotrauma. Edit owned submarines, the crew, convert between single-player and multi-player formats, adjust campaign settings. Also includes some submarine editing tools and save decompressor."},beforeEnter:(e,t,a)=>{var s=sessionStorage.redirect;s?(console.log(`Detected redirect to ${s}`),s.endsWith("/")&&(s=s.slice(0,-1)),delete sessionStorage.redirect,a(s)):a()}},{path:"/SubTools",name:"SubTools",component:()=>z((()=>import("./SubTools.2cb74e6c.js")),["assets/SubTools.2cb74e6c.js","assets/SubTools.19f2515d.css","assets/vendor.d2dd6a75.js","assets/vendor.e9ddbc1a.css","assets/FileDropper.a2ac22b6.js","assets/FileDropper.72632a15.css","assets/VTooltip.c0af69e3.js","assets/VTooltip.3df7ec5e.css","assets/VRow.93776d3b.js","assets/VRow.e10d04e1.css","assets/VSheet.36660dd1.js","assets/VSheet.c1c258b0.css"]),meta:{title:"Barotrauma Submarine Editor",keywords:"barotrauma, submarine editor, submarine, editor, tools",desc:"Online submarine tools for Barotrauma. Extract shuttles, preview image, mass hide wires, change price or clean wall stains."}},{path:"/Decompressor",name:"Decompressor",component:()=>z((()=>import("./Decompressor.12dd782c.js")),["assets/Decompressor.12dd782c.js","assets/Decompressor.e4207692.css","assets/VTooltip.c0af69e3.js","assets/VTooltip.3df7ec5e.css","assets/vendor.d2dd6a75.js","assets/vendor.e9ddbc1a.css","assets/VRow.93776d3b.js","assets/VRow.e10d04e1.css"]),meta:{title:"Barotrauma Save Decompressor",keywords:"barotrauma, save, decompressor, compressor",desc:"Online save compressor and decompressor for Barotrauma. Uses experimental file system API: might not work on some browsers and can only access files in specific locations."}},{path:"/About",name:"About",component:()=>z((()=>import("./About.96fd9014.js")),["assets/About.96fd9014.js","assets/About.c0cd0971.css","assets/vendor.d2dd6a75.js","assets/vendor.e9ddbc1a.css","assets/VSheet.36660dd1.js","assets/VSheet.c1c258b0.css","assets/VRow.93776d3b.js","assets/VRow.e10d04e1.css"]),meta:{title:"About This App",keywords:"barotrauma, save editor, save, editor, submarine, decompressor",desc:"Online save and submarine editing tools for Barotrauma. Edit owned submarines, the crew, convert between single-player and multi-player formats, adjust campaign settings. Also includes some submarine editing tools and save decompressor."}}],Y=I({history:B("/baro-save-editor/"),routes:H});function K(e){for(var t={},a=O.Buffer.from(C(e)),s=0;s<a.length;){var n=a.readInt32LE(s);s+=4;var r=a.toString("utf-16le",s,s+2*n);s+=2*n;var o=a.readInt32LE(s);s+=4;var l=a.slice(s,s+o);s+=o,t[r]=l}return t}function J(e){var t=O.Buffer.alloc(0);for(let[o,l]of Object.entries(e)){var a=O.Buffer.from(o,"utf-16le"),s=O.Buffer.alloc(4);s.writeInt32LE(o.length);var n="string"==typeof l?O.Buffer.from(l,"utf-8"):l,r=O.Buffer.alloc(4);r.writeInt32LE(n.length),t=O.Buffer.concat([t,s,a,r,n])}return P(t)}function Q(e){return O.Buffer.from(C(e)).toString("utf-8")}function X(e){return P(O.Buffer.from(e,"utf-8"))}function Z(e,l){return R.js2xml(e,(i=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&o(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&o(e,a,t[a]);return e})({},l),t(i,a({attributeValueFn:e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/\r/g,"&#xD;").replace(/\n/g,"&#xA;")}))));var i}const ee='<?xml version="1.0" encoding="utf-8"?>\n';function te(e){var t,a,s;let n=null==(s=null==(a=null==(t=e.elements)?void 0:t[0])?void 0:a.elements)?void 0:s.find((e=>"MultiPlayerCampaign"===e.name||"SinglePlayerCampaign"===e.name)),r=n.elements.find((e=>"CampaignSettings"===e.name));r&&(r.name="campaignsettings");let o=n.elements.find((e=>"bots"==e.name||"crew"==e.name));o.elements||(o.elements=[])}var ae=U({state:{alert:!1,alertTimout:null,editorSubmarine:{filename:null,data:{}},gamesession:{},isLoading:!1,savefileName:null,subfiles:{},playerCharacters:[]},getters:{campaign:e=>{var t,a,s;return null==(s=null==(a=null==(t=e.gamesession.elements)?void 0:t[0])?void 0:a.elements)?void 0:s.find((e=>"MultiPlayerCampaign"===e.name||"SinglePlayerCampaign"===e.name))},campaignSettings:(e,t)=>t.campaign.elements.find((e=>"campaignsettings"==e.name)),isMultiPlayer:e=>{var t,a,s;return-1!==(null==(s=null==(a=null==(t=e.gamesession.elements)?void 0:t[0])?void 0:a.elements)?void 0:s.findIndex((e=>"MultiPlayerCampaign"===e.name)))},saveLoaded:e=>null!==e.savefileName,sub:e=>{var t,a;return null==(a=null==(t=e.editorSubmarine.data)?void 0:t.elements)?void 0:a[0]},subLoaded:e=>null!==e.editorSubmarine.filename},mutations:{SET_ALERT(e,t){e.alert=t},SET_ALERT_TIMEOUT(e,t){e.alertTimout=setTimeout(t,1e4)},CLEAR_ALERT_TIMEOUT(e){clearTimeout(e.alertTimout)},SET_SAVEFILENAME(e,t){e.savefileName=t},SET_GAMESESSION(e,t){e.gamesession=t},CLEAR_SUBFILES(e){e.subfiles={}},ADD_SUBFILE(e,{name:t,data:a}){e.subfiles[t]=a},SET_SUBFILE(e,{name:t,data:a}){e.editorSubmarine.filename=t,e.editorSubmarine.data=a},ADD_CHARACTERS(e,t){var a;let s=null==(a=e.gamesession.elements[0].elements)?void 0:a.find((e=>"SinglePlayerCampaign"===e.name)).elements.find((e=>"crew"===e.name));for(let n of t)s.elements.push(n)},ADD_BOTS(e,t){var a,s,n;let r=null==(n=null==(s=null==(a=e.gamesession.elements)?void 0:a[0])?void 0:s.elements)?void 0:n.find((e=>"MultiPlayerCampaign"===e.name)).elements.find((e=>"bots"===e.name));"true"!==r.attributes.hasbots&&(r.attributes.hasbots="true"),r.elements||(r.elements=[]);for(let o of t)r.elements.push(o)},SET_LOADING(e,t){e.isLoading=t},CLEAR_PLAYERS(e){e.playerCharacters=[]}},actions:{showAlert({commit:e},t){t||(e("CLEAR_ALERT_TIMEOUT"),e("SET_ALERT",!1)),e("SET_ALERT",t),e("SET_ALERT_TIMEOUT",(()=>{e("SET_ALERT",!1)}))},clearSubFiles({commit:e}){e("CLEAR_SUBFILES")},subUploaded({commit:e,dispatch:t},a){if(a.name.endsWith(".sub")){let t=R.xml2js(Q(O.Buffer.from(a.data)));e("SET_SUBFILE",{name:a.name,data:t})}else a.name.endsWith(".xml")?e("SET_SUBFILE",{name:a.name.slice(0,-4)+".sub",data:R.xml2js(O.Buffer.from(a.data).toString("utf-8"))}):a.name.endsWith(".raw")?e("SET_SUBFILE",{name:a.name.slice(0,-4),data:a.data}):(console.warn(`wrong file type uploaded - ${a.name}`),t("showAlert",{type:"warning",text:`Unrecognized file type: ${a.name}.`}));e("SET_LOADING",!1)},fileUploaded({commit:e,dispatch:t,state:a,getters:s},n){var r,o,l,i,m,d,u;if(n.name.endsWith(".save")){e("CLEAR_SUBFILES"),e("CLEAR_PLAYERS"),e("SET_SAVEFILENAME",n.name);let a=R.xml2js(n.data["gamesession.xml"].toString("utf-8").substring(ee.length));if("Gamesession"!==a.elements[0].name)throw"Failed to parse gamesession.xml";te(a),e("SET_GAMESESSION",a),delete n.data["gamesession.xml"];for(let[s,l]of Object.entries(n.data))if(s.endsWith(".sub")){let a=R.xml2js(Q(l));e("ADD_SUBFILE",{name:s,data:a}),(null==(o=null==(r=null==a?void 0:a.elements[0])?void 0:r.attributes)?void 0:o.name)||(console.warn(`Failed to parse xml from ${s} - file might be invalid`),t("showAlert",{type:"error",text:`Failed to parse xml from ${s} - file might be invalid.`}))}else console.warn(`Unrecognized file type: ${s}`),t("showAlert",{type:"warning",text:`Unrecognized file type: ${s}.`})}else if(a.savefileName)if(n.name.endsWith(".sub")||n.name.endsWith(".raw")){var c;if(console.log(`received ${n.name}`),n.name.endsWith(".raw")?(c=n.data,n.name=n.name.slice(0,-4)):c=R.xml2js(Q(O.Buffer.from(n.data))),console.log(`final: ${n.name}`),a.subfiles[n.name])t("showAlert",{type:"success",text:`Updated owned submarine file "${n.name}"`});else{let e=c.elements[0].attributes.name;(null==(l=a.gamesession.elements)?void 0:l[0].elements.find((e=>"ownedsubmarines"==e.name)).elements).push({type:"element",name:"sub",attributes:{name:e}}),t("showAlert",{type:"success",text:`Added new owned submarine "${e}" and attached "${n.name}" to the save file.`})}e("ADD_SUBFILE",{name:n.name,data:c})}else if("gamesession.xml"===n.name){let a=R.xml2js(n.data.substring(ee.length));if("Gamesession"!==(null==(m=null==(i=a.elements)?void 0:i[0])?void 0:m.name))throw"Failed to parse gamesession.xml";te(a),e("SET_GAMESESSION",a),t("showAlert",{type:"success",text:"Updated gamesession.xml file."})}else if(n.name.endsWith("CharacterData.xml")){let r=R.xml2js(n.data.substring(ee.length)),o=[],l=0;for(let e of null==(u=null==(d=null==r?void 0:r.elements)?void 0:d[0])?void 0:u.elements){let t=e.elements.find((e=>"Character"==e.name)),s=e.elements.find((e=>"inventory"==e.name)),n=e.elements.find((e=>"health"==e.name));t.elements.push(s),t.elements.push(n),o.push(t),l++,a.playerCharacters.push(e.attributes)}0===l?(console.warn("Character import failed - file might be invalid or empty"),t("showAlert",{type:"warning",text:"Character import failed - file might be invalid or empty."})):(s.isMultiPlayer?e("ADD_BOTS",o):e("ADD_CHARACTERS",o),t("showAlert",{type:"success",text:`Succesfully imported ${l} characters.`}))}else console.warn(`Unrecognized file type: ${n.name}`),t("showAlert",{type:"warning",text:`Unrecognized file type: ${n.name}.`});else t("showAlert",{type:"info",text:"No .save file loaded to attach additional files to."}),console.warn("No .save file to attach additional files to");e("SET_LOADING",!1)},convertSaveFile({commit:e,dispatch:t,state:a,getters:s}){if(s.isMultiPlayer){let e=s.campaign.elements.find((e=>"bots"==e.name));e.name="crew",e.attributes.hasbots&&delete e.attributes.hasbots,s.campaign.name="SinglePlayerCampaign",t("showAlert",{type:"success",text:"存档文件转换为 单人 存档."})}else{let e=s.campaign.elements.find((e=>"crew"==e.name));e.name="bots",e.attributes||(e.attributes={}),e.attributes.hasbots="true",s.campaign.name="MultiPlayerCampaign",a.gamesession.elements[0].attributes.campaignid=j(50,100).toString(),t("showAlert",{type:"success",text:"存档文件转换为 多人 存档."})}e("SET_LOADING",!1)},setLoading({commit:e,state:t},a){t.isLoading!==!!a&&e("SET_LOADING",!!a)}},modules:{}});!function(e={}){const{immediate:t=!1,onNeedRefresh:a,onOfflineReady:s,onRegistered:n,onRegisterError:r}=e;let o,l;if("serviceWorker"in navigator){o=new $("/baro-save-editor/sw.js",{scope:"/baro-save-editor/"}),o.addEventListener("activated",(e=>{e.isUpdate||null==s||s()}));{const e=()=>{null==a||a()};o.addEventListener("waiting",e),o.addEventListener("externalwaiting",e)}o.register({immediate:t}).then((e=>{l=e,null==n||n(e)})).catch((e=>{null==r||r(e)}))}}({onNeedRefresh(){},onOfflineReady(){}}),function(){let e=document.referrer;sessionStorage.getItem("referrer")&&(e=sessionStorage.getItem("referrer"),sessionStorage.removeItem("referrer")),sessionStorage.getItem("_swa")||0===e.indexOf(location.protocol+"//"+location.host)||fetch("https://counter.dev/track?"+new URLSearchParams({referrer:e,screen:screen.width+"x"+screen.height,user:"ignis",utcoffset:"2"})),sessionStorage.setItem("_swa","1")}();const se=N(G);se.use(Y),se.use(ae),se.use(F),se.mount("#app");Y.afterEach((function(e){V((()=>{document.title=e.meta.title||"Barotrauma Save Editor",e.meta.desc&&document.querySelector('meta[name="description"]').setAttribute("content",e.meta.desc),e.meta.keywords&&document.querySelector('meta[name="keywords"]').setAttribute("content",e.meta.keywords)}))}));export{X as C,K as D,J as a,Z as d,ee as g};