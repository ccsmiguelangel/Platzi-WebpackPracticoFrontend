(()=>{"use strict";var e,o={7876:(e,o,t)=>{var r;t.d(o,{Z:()=>i}),e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a=function(e){return{type:"ADD_TO_CART",payload:e}},l=function(e){return{type:"REMOVE_FROM_CART",payload:e}},d={addToCart:a,removeFromCart:l},n=d;const i=n;var c,s;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(a,"addToCart","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/actions/index.js"),c.register(l,"removeFromCart","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/actions/index.js"),c.register(d,"actions","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/actions/index.js"),c.register(n,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/actions/index.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},5386:(e,o,t)=>{t.d(o,{Z:()=>n});t(7294);var r,a=t(5893);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(){return(0,a.jsxs)("div",{className:"Footer",children:[(0,a.jsx)("p",{className:"Footer-title",children:"Platzi Store"}),(0,a.jsx)("p",{className:"Footer-copy",children:"Todos los Izquierdos Reservados"})]})},d=l;const n=d;var i,c;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(l,"Footer","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Footer.jsx"),i.register(d,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Footer.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)},9706:(e,o,t)=>{t.d(o,{Z:()=>p});var r=t(7294),a=t(9711),l=t(6841);const d=function(e){var o=e.title;return r.createElement("span",null,o)};var n,i=t(2567),c=t(5893);e=t.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s=function(e){return(0,c.jsxs)("div",{className:"Header",children:[(0,c.jsx)("h1",{className:"Header-title",children:(0,c.jsxs)(a.rU,{to:"/",children:[(0,c.jsx)("img",{src:i,alt:"logo",width:"32"}),(0,c.jsx)(d,{title:"Platzi Store"})]})}),(0,c.jsxs)("div",{className:"Header-checkout",children:[(0,c.jsx)(a.rU,{to:"/checkout",children:(0,c.jsx)("i",{className:"fas fa-shopping-basket"})}),e.cart.length>0&&(0,c.jsx)("div",{className:"Header-alert",children:e.cart.length})]})]})},u=function(e){return{cart:e.cart}},f=(0,l.$j)(u,null)(s);const p=f;var g,m;(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(s,"Header","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Header.jsx"),g.register(u,"mapStateToProps","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Header.jsx"),g.register(f,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Header.jsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)},2230:(e,o,t)=>{t.d(o,{Z:()=>c});t(7294);var r,a=t(9706),l=t(5386),d=t(5893);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n=function(e){var o=e.children;return(0,d.jsxs)("div",{className:"Main",children:[(0,d.jsx)(a.Z,{}),o,(0,d.jsx)(l.Z,{})]})},i=n;const c=i;var s,u;(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(n,"Layout","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Layout.jsx"),s.register(i,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Layout.jsx")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},3217:(e,o,t)=>{t.d(o,{Z:()=>n});t(7294);var r,a=t(5893);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(e){var o=e.product,t=e.handleAddToCart;return(0,a.jsxs)("div",{className:"Products-item",children:[(0,a.jsx)("img",{src:o.image,alt:o.title}),(0,a.jsxs)("div",{className:"Products-item-info",children:[(0,a.jsxs)("h2",{children:[o.title,(0,a.jsxs)("span",{children:["$",o.price]})]}),(0,a.jsx)("p",{children:o.description})]}),(0,a.jsx)("button",{type:"button",onClick:t(o),children:"Comprar"})]})},d=l;const n=d;var i,c;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(l,"Product","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Product.jsx"),i.register(d,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Product.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)},219:(e,o,t)=>{t.d(o,{Z:()=>u});var r,a=t(7294),l=t(744),d=t(3217),n=t(5893);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},c=function(){var e=(0,a.useContext)(l.Z).products,o=function(e){return function(){console.log(e)}};return(0,n.jsx)("div",{className:"Products",children:(0,n.jsx)("div",{className:"Products-items",children:e.map((function(e){return(0,n.jsx)(d.Z,{product:e,handleAddToCart:o},e.id)}))})})};i(c,"useContext{{ products }}");var s=c;const u=s;var f,p;(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(c,"Products","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Products.jsx"),f.register(s,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/components/Products.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},9982:(e,o,t)=>{t.r(o),t.d(o,{default:()=>u});t(7294);var r,a=t(6841),l=t(7876),d=t(5893);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n=function(e){var o=e.cart;return(0,d.jsxs)("div",{className:"Checkout",children:[(0,d.jsxs)("div",{className:"Checkout-content",children:[o.length>0?(0,d.jsx)("h3",{children:"Lista de Pedidos:"}):(0,d.jsx)("h2",{children:"Sin Pedidos"}),o.map((function(o){return(0,d.jsxs)("div",{className:"Checkout-item",children:[(0,d.jsxs)("div",{className:"Checkout-element",children:[(0,d.jsx)("h4",{children:o.title}),(0,d.jsxs)("span",{children:["$",o.price]})]}),(0,d.jsx)("button",{type:"button",onClick:(t=o,function(){e.removeFromCart(t)}),children:(0,d.jsx)("i",{className:"fas fa-trash-alt"})})]},o.title);var t}))]}),o.length>0&&(0,d.jsx)("div",{className:"Checkout-sidebar",children:(0,d.jsx)("h3",{children:"Precio Total: $ ".concat(o.reduce((function(e,o){return e+o.price}),0))})})]})},i=function(e){return{cart:e.cart}},c={removeFromCart:l.Z.removeFromCart},s=(0,a.$j)(i,c)(n);const u=s;var f,p;(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(n,"Checkout","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/containers/Checkout.jsx"),f.register(i,"mapStateToProps","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/containers/Checkout.jsx"),f.register(c,"mapDispatchToProps","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/containers/Checkout.jsx"),f.register(s,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/containers/Checkout.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},8255:(e,o,t)=>{t.d(o,{Z:()=>i});t(7294);var r,a=t(219),l=t(5893);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d=function(){return(0,l.jsx)(a.Z,{})},n=d;const i=n;var c,s;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(d,"Home","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/containers/Home.jsx"),c.register(n,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/containers/Home.jsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},4341:(e,o,t)=>{t.d(o,{Z:()=>n});t(7294);var r,a=t(5893);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(){return(0,a.jsx)("h1",{children:"NotFound"})},d=l;const n=d;var i,c;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(l,"NotFound","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/containers/NotFound.jsx"),i.register(d,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/containers/NotFound.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)},744:(e,o,t)=>{t.d(o,{Z:()=>n});var r,a=t(7294);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=a.createContext({}),d=l;const n=d;var i,c;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(l,"AppContext","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/context/AppContext.js"),i.register(d,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/context/AppContext.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)},2151:(e,o,t)=>{t.d(o,{Z:()=>m});var r,a=t(5861),l=t(3324),d=t(7757),n=t.n(d),i=t(7294),c=t(9669),s=t.n(c);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f="https://us-central1-gndx-fake-api.cloudfunctions.net/api",p=function(){var e=(0,i.useState)([]),o=(0,l.Z)(e,2),t=o[0],r=o[1];return(0,i.useEffect)((0,a.Z)(n().mark((function e(){var o;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()(f);case 2:o=e.sent,r(o.data);case 4:case"end":return e.stop()}}),e)}))),[]),{products:t}};u(p,"useState{[products, setProducts]([])}\nuseEffect{}");var g=p;const m=g;var b,v;(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"API","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/hooks/useInitialState.js"),b.register(p,"useInitialState","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/hooks/useInitialState.js"),b.register(g,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/hooks/useInitialState.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)},5579:(e,o,t)=>{t(7294);var r,a=t(3935),l=t(6841),d=t(4890),n=t(6498),i=t(4322),c=t(4118),s=t(5893);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,f,p=(0,d.MT)(i.Z,c.Z);a.render((0,s.jsx)(l.zt,{store:p,children:(0,s.jsx)(n.Z,{})}),document.getElementById("app")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(p,"store","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/index.js"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},4118:(e,o,t)=>{var r;t.d(o,{Z:()=>l}),e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a={cart:[],products:[{id:"1",image:"https://arepa.s3.amazonaws.com/camiseta.png",title:"Camiseta",price:25,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"3",image:"https://arepa.s3.amazonaws.com/mug.png",title:"Mug",price:10,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"4",image:"https://arepa.s3.amazonaws.com/pin.png",title:"Pin",price:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"5",image:"https://arepa.s3.amazonaws.com/stickers1.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"6",image:"https://arepa.s3.amazonaws.com/stickers2.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"7",image:"https://arepa.s3.amazonaws.com/hoodie.png",title:"Hoodie",price:35,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]};const l=a;var d,n;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(a,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/initialState.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)},4322:(e,o,t)=>{t.d(o,{Z:()=>s});var r,a=t(9062),l=t(4942);function d(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?d(Object(t),!0).forEach((function(o){(0,l.Z)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i=function(e,o){switch(o.type){case"ADD_TO_CART":return n(n({},e),{},{cart:[].concat((0,a.Z)(e.cart),[o.payload])});case"REMOVE_FROM_CART":return n(n({},e),{},{cart:e.cart.filter((function(e){return e.id!==o.payload.id}))});default:return e}},c=i;const s=c;var u,f;(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(i,"reducer","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/reducers/index.js"),u.register(c,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/reducers/index.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},6498:(e,o,t)=>{t.d(o,{Z:()=>h});var r,a=t(7294),l=t(9711),d=t(6974),n=t(8255),i=t(9982),c=t(2230),s=t(4341),u=t(2151),f=t(744),p=t(5893);e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=a.lazy((function(){return Promise.resolve().then(t.bind(t,9982))})),b=function(){var e=(0,u.Z)(),o=Object.keys(e.products).length;return(0,p.jsx)(p.Fragment,{children:o>0?(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(f.Z.Provider,{value:e,children:(0,p.jsx)(l.VK,{children:(0,p.jsx)(c.Z,{children:(0,p.jsxs)(d.Z5,{children:[(0,p.jsx)(d.AW,{exact:!0,path:"/",element:(0,p.jsx)(n.Z,{})}),(0,p.jsx)(d.AW,{exact:!0,path:"/checkout",element:(0,p.jsx)(i.default,{}),component:m}),(0,p.jsx)(d.AW,{path:"*",element:(0,p.jsx)(s.Z,{})})]})})})})}):(0,p.jsx)("h1",{children:"Loading ..."})})};g(b,"useInitialState{initialState}",(function(){return[u.Z]}));var v=b;const h=v;var H,L;(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(m,"AsyncCheckoutContainer","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/routes/App.jsx"),H.register(b,"App","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/routes/App.jsx"),H.register(v,"default","/home/ccsmiguelangel/.knowledge/platzi/desarrollo-web/frontend/src/routes/App.jsx")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)},2567:(e,o,t)=>{e.exports=t.p+"2919f2487ede6b463f58.png"}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var l=t[e]={id:e,loaded:!1,exports:{}};return o[e](l,l.exports,r),l.loaded=!0,l.exports}r.m=o,e=[],r.O=(o,t,a,l)=>{if(!t){var d=1/0;for(s=0;s<e.length;s++){for(var[t,a,l]=e[s],n=!0,i=0;i<t.length;i++)(!1&l||d>=l)&&Object.keys(r.O).every((e=>r.O[e](t[i])))?t.splice(i--,1):(n=!1,l<d&&(d=l));if(n){e.splice(s--,1);var c=a();void 0!==c&&(o=c)}}return o}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[t,a,l]},r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=177,(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var o=r.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var t=o.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={177:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var a,l,[d,n,i]=t,c=0;if(d.some((o=>0!==e[o]))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(i)var s=i(r)}for(o&&o(t);c<d.length;c++)l=d[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(s)},t=self.webpackChunkplatzi_store=self.webpackChunkplatzi_store||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var a=r.O(void 0,[351,216],(()=>r(5579)));a=r.O(a)})();