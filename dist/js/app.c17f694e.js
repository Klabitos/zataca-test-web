(function(){"use strict";var t={3333:function(t,e,a){var i=a(144),o=function(){var t=this,e=t._self._c;return e("main-layout")},r=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-layout"},[e("div",{staticClass:"top-menu"},[e("top-menu")],1),e("div",{staticClass:"main-content-page"},[e("div",{staticClass:"main-content-page__centered"},[e("router-view")],1)]),e("div",{staticClass:"footer-info"},[e("div",[e("footer-info")],1)])])},s=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-menu-layout"},[e("div",{staticClass:"top-menu-layout--img"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:a(6949),alt:"logo",width:"150",height:"50"}})])],1),e("div",{staticClass:"top-menu-search-bar"},[e("SearchBar")],1),e("div",{staticClass:"top-menu-dark-mode",on:{click:t.changeToDarkMode}},[e("h2",[t.isLightOff?e("i",{staticClass:"fa-solid fa-sun"}):e("i",{staticClass:"fa-solid fa-moon"})])]),e("div",{staticClass:"top-menu-language",on:{click:t.changeLanguage}},[e("h2",[t._v(t._s(this.$i18n.locale.toUpperCase()))])]),t._m(0)])},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-menu-profile"},[e("h2",[t._v("Pablo Cruz")])])}],d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-bar-container"},[e("div",{staticClass:"search-bar-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],staticClass:"search-bar",attrs:{type:"text",placeholder:t.$t("components.search-bar.placeholder")},domProps:{value:t.inputText},on:{keyup:t.filterTextChanged,input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),t.isRouteHome?e("i",{staticClass:"fa-solid fa-lg fa-eraser icon-input-bar",on:{click:t.cleanFilter}}):e("i",{staticClass:"fa-solid fa-lg fa-magnifying-glass icon-input-bar",on:{click:t.goHome}})]),e("div",{staticClass:"search-bar-options"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isTitleActive,expression:"isTitleActive"}],attrs:{disabled:"",type:"checkbox"},domProps:{checked:Array.isArray(t.isTitleActive)?t._i(t.isTitleActive,null)>-1:t.isTitleActive},on:{change:function(e){var a=t.isTitleActive,i=e.target,o=!!i.checked;if(Array.isArray(a)){var r=null,n=t._i(a,r);i.checked?n<0&&(t.isTitleActive=a.concat([r])):n>-1&&(t.isTitleActive=a.slice(0,n).concat(a.slice(n+1)))}else t.isTitleActive=o}}}),t._v(" "+t._s(t.$t("components.search-bar.title"))+" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.isDescriptionActive,expression:"isDescriptionActive"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isDescriptionActive)?t._i(t.isDescriptionActive,null)>-1:t.isDescriptionActive},on:{change:[function(e){var a=t.isDescriptionActive,i=e.target,o=!!i.checked;if(Array.isArray(a)){var r=null,n=t._i(a,r);i.checked?n<0&&(t.isDescriptionActive=a.concat([r])):n>-1&&(t.isDescriptionActive=a.slice(0,n).concat(a.slice(n+1)))}else t.isDescriptionActive=o},()=>this.$globals.isDescriptionActive=t.isDescriptionActive]}}),t._v(" "+t._s(t.$t("components.search-bar.description"))+" ")])])},u=[],p=(a(7658),{name:"SearchBar",data(){return{inputText:"",isTitleActive:!0,isDescriptionActive:!1}},created(){i.ZP.prototype.$globals=i.ZP.observable({filter:"",isDescriptionActive:!1})},methods:{filterTextChanged(){this.$globals.filter=this.inputText},cleanFilter(){this.$globals.filter="",this.inputText=""},goHome(){this.$router.push("/")}},computed:{isRouteHome(){return"/"==this.$route.path}}}),m=p,f=a(1001),h=(0,f.Z)(m,d,u,!1,null,"055df486",null),v=h.exports,g={components:{SearchBar:v},data(){return{isLightOff:!1}},methods:{changeLanguage(){"en"==this.$i18n.locale?this.$i18n.locale="es":this.$i18n.locale="en"},changeToDarkMode(){document.body.classList.toggle("dark-mode"),this.isLightOff=!this.isLightOff}},computed:{}},b=g,C=(0,f.Z)(b,l,c,!1,null,"05f1f1aa",null),_=C.exports,y=function(){var t=this;t._self._c;return t._m(0)},k=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-layout"},[e("div",{staticClass:"footer-layout--item"},[t._v(" cruzrodripablo@gmail.com "),e("span",{staticClass:"beutiful-icon"},[t._v("||")])]),e("div",{staticClass:"footer-layout--item"},[t._v(" Pablo Cruz Rodríguez "),e("span",{staticClass:"beutiful-icon"},[t._v("||")])]),e("div",{staticClass:"footer-layout--item"},[e("i",{staticClass:"fa-brands fa-github"}),t._v(" Klabitos ")])])}],A={},x=A,D=(0,f.Z)(x,y,k,!1,null,"bf38d1e0",null),$=D.exports,T={name:"main-layout",components:{TopMenu:_,FooterInfo:$}},w=T,I=(0,f.Z)(w,n,s,!1,null,"231e4237",null),Z=I.exports,O={name:"App",components:{mainLayout:Z}},P=O,B=(0,f.Z)(P,o,r,!1,null,null,null),L=B.exports,S=a(8345),F=function(){var t=this,e=t._self._c;return e("div",[e("StardardCardGallery",{attrs:{items:t.getFilteredItems}})],1)},j=[],z=a(6154),H={BACK_IP:" https://jsonplaceholder.typicode.com/"};function N(){return z.Z.get(H.BACK_IP+"posts").then((t=>t)).catch((t=>console.log(t)))}function U(t){return z.Z.get(H.BACK_IP+`posts/${t}`).then((t=>t)).catch((t=>console.log(t)))}var M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"standard-gallery"},[e("h1",[t._v(t._s(t.$t("components.home.faq")))]),null==t.items?e("div",[e("h2",[t._v(t._s(t.$t("components.data.error-fetching")))])]):t.items.length>0?e("div",{staticClass:"standard-gallery-cards"},t._l(t.items,(function(t){return e("StandardCard",{key:t.id,attrs:{itemInfo:t}})})),1):e("div",[e("h2",[t._v(t._s(t.$t("components.data.no-data")))])])])},q=[],E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",style:{backgroundColor:`${t.backgroundColorCard}`}},[e("div",[e("h1",[t._v(t._s(t.itemInfo.title))])]),e("div",{staticClass:"card-body"},[e("p",[t._v(t._s(t.itemInfo.body))])]),e("div",{staticClass:"card-link",on:{mouseover:()=>t.backgroundColorCard="#FFC857",mouseleave:()=>t.backgroundColorCard=""}},[e("router-link",{attrs:{to:`/detail/${t.itemInfo.id}`}},[e("h2",{staticClass:"card-link-text"},[t._v(t._s(t.$t("components.cards.more-information")))])])],1)])},K=[],G={name:"StandardCard",props:{itemInfo:{type:Object,default(){return{id:"0",title:"Lorem",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}}}},data(){return{backgroundColorCard:""}}},R=G,J=(0,f.Z)(R,E,K,!1,null,"30f961ad",null),Q=J.exports,V={name:"StardardCardGallery",components:{StandardCard:Q},props:{items:{type:Array,default(){return[]}}}},W=V,X=(0,f.Z)(W,M,q,!1,null,"433de0b1",null),Y=X.exports,tt={name:"Home-View",components:{StardardCardGallery:Y},data(){return{allItemsData:[],itemsFiltered:[]}},created(){N().then((t=>{this.allItemsData=t.data})).catch((()=>{this.allItemsData=null}))},computed:{getFilteredItems(){if(null==this.allItemsData)return this.allItemsData;const t=this.allItemsData.map((t=>(t.body=t.body.replace("\n"," "),t)));return this.$globals.isDescriptionActive?t.filter((t=>t.body.toUpperCase().includes(this.$globals.filter.toUpperCase())||t.title.toUpperCase().includes(this.$globals.filter.toUpperCase()))):t.filter((t=>t.title.toUpperCase().includes(this.$globals.filter.toUpperCase())))}}},et=tt,at=(0,f.Z)(et,F,j,!1,null,"af1e3f6a",null),it=at.exports,ot=function(){var t=this,e=t._self._c;return e("div",[e("BackArrowBtn"),"loading"==t.item?e("h3",[t._v(t._s(t.$t("components.data.being-loaded")))]):""!=t.item?e("DetailCard",{attrs:{itemInfo:t.item}}):t._e(),null==t.item?e("h3",[t._v(t._s(t.$t("components.data.no-detail-data")))]):t._e()],1)},rt=[],nt=function(){var t=this,e=t._self._c;return e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"go-back-container"},[e("button",{staticClass:"go-back-container--btn"},[e("i",{staticClass:"fa-sharp fa-solid fa-arrow-left"})]),e("h4",{staticClass:"go-back-message"},[t._v(t._s(t.$t("components.home.home")))])])])},st=[],lt={name:"BackArrowBtn"},ct=lt,dt=(0,f.Z)(ct,nt,st,!1,null,"6edc9175",null),ut=dt.exports,pt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",style:{backgroundColor:`${t.backgroundColorCard}`}},[e("div",{staticClass:"card-header"},[e("h1",[t._v(t._s(t.itemInfo.title))])]),e("div",{staticClass:"card-body"},[e("p",[t._v(t._s(t.itemInfo.body))])])])},mt=[],ft={name:"StandardCard",props:{itemInfo:{type:Object,default(){return{id:"0",title:"Lorem",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}}}},data(){return{backgroundColorCard:""}}},ht=ft,vt=(0,f.Z)(ht,pt,mt,!1,null,"1015e930",null),gt=vt.exports,bt={name:"CardDetail",components:{DetailCard:gt,BackArrowBtn:ut},data(){return{item:"loading"}},created(){U(this.$route.params.id).then((t=>{this.item=t.data})).catch((()=>{this.item=null}))}},Ct=bt,_t=(0,f.Z)(Ct,ot,rt,!1,null,"2b33817e",null),yt=_t.exports;const kt=[{path:"/",name:"Home",component:it},{path:"/detail/:id",name:"Detail",component:yt}],At=new S.Z({mode:"history",base:"/zataca-test-web/",routes:kt});var xt=At,Dt=a(7152),$t=JSON.parse('{"components":{"search-bar":{"title":"Title","description":"Description","placeholder":"Search by title or description..."},"cards":{"more-information":"More Information"},"home":{"home":"Home","faq":"Frequently Asked Questions"},"data":{"error-fetching":"Error while fetching the data. Try again later.","being-loaded":"Data is being loaded. Wait a minute please.","no-data":"No data avaible.","no-detail-data":"No detail information avaible"}}}'),Tt=JSON.parse('{"components":{"search-bar":{"title":"Título","description":"Descripción","placeholder":"Buscar por título o descripción..."},"cards":{"more-information":"Más información"},"home":{"home":"Inicio","faq":"Preguntas Frecuentes"},"data":{"error-fetching":"Error al obtener los datos. Prueba más tarde por favor.","being-loaded":"Obteniendo información. Espere un segundo por favor.","no-data":"Información no disponible.","no-detail-data":"Detalles no disponibles."}}}');i.ZP.use(Dt.Z);const wt=new Dt.Z({locale:"en",fallbackLocale:"en",messages:{en:$t,es:Tt}});var It=wt;i.ZP.config.productionTip=!1,i.ZP.use(S.Z),new i.ZP({router:xt,i18n:It,render:t=>t(L)}).$mount("#app")},6949:function(t,e,a){t.exports=a.p+"img/logo.8db5d722.png"}},e={};function a(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,i,o,r){if(!i){var n=1/0;for(d=0;d<t.length;d++){i=t[d][0],o=t[d][1],r=t[d][2];for(var s=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(s=!1,r<n&&(n=r));if(s){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[i,o,r]}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/zataca-test-web/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,n=i[0],s=i[1],l=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var d=l(a)}for(e&&e(i);c<n.length;c++)r=n[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(d)},i=self["webpackChunkzacata"]=self["webpackChunkzacata"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(3333)}));i=a.O(i)})();
//# sourceMappingURL=app.c17f694e.js.map