(()=>{var n={757:(n,t,e)=>{n.exports=e(666)},666:n=>{var t=function(n){"use strict";var t,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{c({},"")}catch(n){c=function(n,t,e){return n[t]=e}}function l(n,t,e,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(n,t,e){var r=f;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return O()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var s=N(i,e);if(s){if(s===x)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var c=u(n,t,e);if("normal"===c.type){if(r=e.done?d:p,c.arg===x)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=d,e.method="throw",e.arg=c.arg)}}}(n,e,i),a}function u(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",x={};function m(){}function v(){}function g(){}var b={};c(b,a,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(S([])));w&&w!==e&&r.call(w,a)&&(b=w);var k=g.prototype=m.prototype=Object.create(b);function E(n){["next","throw","return"].forEach((function(t){c(n,t,(function(n){return this._invoke(t,n)}))}))}function L(n,t){function e(o,a,i,s){var c=u(n[o],n,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(n){e("next",n,i,s)}),(function(n){e("throw",n,i,s)})):t.resolve(f).then((function(n){l.value=n,i(l)}),(function(n){return e("throw",n,i,s)}))}s(c.arg)}var o;this._invoke=function(n,r){function a(){return new t((function(t,o){e(n,r,t,o)}))}return o=o?o.then(a,a):a()}}function N(n,e){var r=n.iterator[e.method];if(r===t){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=t,N(n,e),"throw"===e.method))return x;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return x}var o=u(r,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,x;var a=o.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,x):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,x)}function T(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function _(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function j(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(T,this),this.reset(!0)}function S(n){if(n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return v.prototype=g,c(k,"constructor",g),c(g,"constructor",v),v.displayName=c(g,s,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,g):(n.__proto__=g,c(n,s,"GeneratorFunction")),n.prototype=Object.create(k),n},n.awrap=function(n){return{__await:n}},E(L.prototype),c(L.prototype,i,(function(){return this})),n.AsyncIterator=L,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new L(l(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},E(k),c(k,s,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=S,j.prototype={constructor:j,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return s.type="throw",s.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===n||"continue"===n)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=n,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,x):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),x},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),_(e),x}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:S(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),x}},n}(n.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},90:(n,t,e)=>{"use strict";n.exports=e.p+"3d80bf606bbc64d22db3.png"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.p="",(()=>{"use strict";function n(n,t,e,r,o,a,i){try{var s=n[a](i),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(r,o)}function t(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}var r=e(757),o=e.n(r),a=e(90);const i=function(){return location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"};var s="https://api.opensea.io/api/v1/assets?owner=0x68684530991d9d376970a905fa5b7054c5059368&order_direction=desc&offset=0&limit=20";const c=function(){var n=t(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t?"".concat(s).concat(t):s,n.prev=1,n.next=4,fetch(e,{method:"GET"});case 4:return r=n.sent,n.next=7,r.json();case 7:return a=n.sent,n.abrupt("return",a.assets);case 11:n.prev=11,n.t0=n.catch(1),console.log("Fetch Error: ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(t){return n.apply(this,arguments)}}(),l=function(n){return(n=String(n)).charAt(0).toUpperCase()+n.slice(1)},u=function(n){for(var t='<div class="flex w-full justify-center sm:justify-start mt-1 py-2">',e=1;e<=10;e++)e<=n.value?t+='<div class="w-8 h-2 mx-px border-2 border-white rounded-lg bg-white"></div>':t+='<div class="w-8 h-2 mx-px border-2 border-white rounded-lg"></div>';return t+="</div>",'\n        <div class="my-4" id=barContainer>\n            <span class="font-bold">'.concat(n.trait_type,': </span>\n            <span class="font-thin">').concat(n.value," / 10</span>\n            \x3c!-- Placeholder to add bars--\x3e\n            ").concat(t,"\n    ")+"</div>"},f=function(){var n=t(o().mark((function n(){var t,e,r,a,s,f,p;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i(),n.next=3,c();case 3:return e=n.sent,r=e.filter((function(n){return n.id==t}))[0],a=r.traits.filter((function(n){return"Astro"==n.trait_type}))[0].value,s=r.traits.filter((function(n){return["Flavour","Fluffiness","Viscosity"].includes(n.trait_type)})),f=r.traits.filter((function(n){return!["Flavour","Fluffiness","Viscosity"].includes(n.trait_type)})),p='\n\n    \x3c!-- Page container --\x3e\n    <section class="flex flex-col align-center py-8 px-10 bg-nebu-gray">\n\n      \x3c!-- Return to gallery button --\x3e\n      <a class="\n        w-full mx-auto mb-4 text-center text-white bg-nebu-red \n        hover:bg-nebu-red-darker\n        sm:w-48 \n        link-button" \n        href="#/gallery">Return to Gallery</a>\n\n      \x3c!-- Background container --\x3e\n      <div class="w-full mx-auto rounded-2xl bg-choco-planet bg-cover bg-center overflow-hidden">\n\n        \x3c!-- Main content container --\x3e\n\n        <div class="\n          flex flex-wrap \n          p-4 w-full h-full \n          text-white \n          bg-gradient-to-tl from-nebu-purple-darkest to-transparent \n          bg-opacity-100\n          ">\n          \x3c!-- top container for images and nebu\'s name --\x3e\n          <div class="\n            flex flex-col flex-grow w-full items-center\n            sm:flex-row\n            ">\n            <img src="'.concat(r.image_preview_url,'" alt="').concat(r.name,'" \n              class="\n                w-3/4 m-4 rounded-2xl\n                sm:w-48\n              ">\n            <div class="text-center sm:text-left">\n              <h1 class="text-4xl font-bold">').concat(r.name,'</h1>\n              <p class="mt-2 text-2xl font-thin">Astro: ').concat(a,'</p>\n            </div>\n          </div>\n\n          \x3c!-- Middle container for stats --\x3e\n          <div class="flex-1 mx-auto p-4 text-center sm:text-left">\n            <h4 class="text-lg mb-3">Stats</h4>\n            \n            \x3c!-- StatsContainer component --\x3e\n            ').concat(s.map((function(n){return u(n)})).join(""),'\n          </div>\n\n          \x3c!-- Bottom container for traits --\x3e\n          <div class="flex-grow p-4">\n            <p class="mb-4"><strong>Traits: </strong></p>\n\n            \x3c!-- Trait grid container --\x3e\n            <div class="w-full grid grid-cols-auto-small grid-flow-row gap-4">\n              ').concat(f.map((function(n){return'\n                    <div class="p-2 text-center rounded-lg bg-white bg-opacity-20">\n                      <strong>'.concat(l(n.trait_type),"</strong>\n                      <p>").concat(l(n.value),"</p>\n                    </div>\n                  ")})).join(""),"\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  "),n.abrupt("return",p);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(n){return'\n    <article class="\n      flex flex-col mx-auto bg-white shadow-xl card-outline border-black\n      transform-gpu transition-all\n      hover:scale-105\n      ">\n      <figure class="mt-8">\n        <a href="#/'.concat(n.id,'">\n          <img\n            src="').concat(n.image_preview_url,'"\n            alt="').concat(n.name,'"\n            class="mx-auto nebu-item"\n            width="300px"\n          />    \n        </a>\n      </figure>\n      <div class="flex flex-col p-4 text-center">\n        <h4\n          class="\n            flex-1\n            mb-4\n            p-2\n            text-2xl\n            font-bold\n            text-black\n          "\n        >\n          ').concat(n.name,'\n        </h4>\n        <a href="').concat(n.permalink,'"class="text-white link-button bg-nebu-red hover:bg-nebu-red-darker">\n            Buy now\n        </a>\n      </div>\n    </article>\n  ')},h=function(){var n=t(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c();case 2:return t=n.sent,e='\n      <div class="w-full grid grid-cols-auto gap-8 mx-auto px-4">\n        '.concat(t.map((function(n){return p(n)})).join("")," \n      </div>\n  "),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){return"\n    <h1>Not found</h1>\n  "},x=function(n){return n.length>=8?"/"===n?n:"/:id":"/"==n?"/":"/".concat(n)};var m={"/":function(){var n=t(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h();case 2:return t=n.sent,e=' \n    <div class="text-center sm:text-left">\n      \x3c!-- HERO SECTION --\x3e\n      <section\n        class="bg-nebu-purple px-10"\n      >\n        <div class="max-w-6xl flex flex-col sm:flex-row justify-between mx-auto py-10">\n          <figure class="">\n            <img\n              src="./assets/images/nebu_hero.png"\n              alt="Big nebu image"\n              class="\n                w-64\n                sm:w-full\n                mx-auto\n                sm:p-10\n                md:px-20\n                transform-gpu\n                translate-x-5\n                sm:translate-x-0\n              "\n            />\n          </figure>\n          <div class="flex-grow-1 m-auto text-white">\n            <h1 class="mt-8 sm:mt-0 mb-8 text-6xl lg:text-8xl font-black">\n              NEBUS NFTs.\n            </h1>\n            <p class="mb-16 text-2xl">\n              Crypto delicacies from outer space.\n            </p>\n            <a href="https://opensea.io/nebuniverse" class="link-button text-xl  bg-nebu-purple-darkest hover:bg-nebu-red"\n              >Get yours at Open Sea!</a\n            >\n          </div>\n        </div>\n      </section>\n\n      \x3c!-- WHAT IS AN NFT SECTION --\x3e\n\n      <section class="bg-nebu-gray text-nebu-purple-darkest">\n        <div class="max-w-6xl hero flex flex-col justify-between mx-auto py-10 px-10">\n          <h2\n            class="\n              mb-8\n              text-4xl\n              lg:text-6xl\n              font-bold\n              leading-normal\n            "\n          >\n            What is an NFT?\n          </h2>\n          <div>\n            <p class="mb-5 text-2xl leading-loose">\n              NFT stands for "Non-Fungible Token", which mean that each NFT is\n              unique and cannot be replace, they are digital assets secured\n              using the same technology of cryptocurrencies. All NFT are purely\n              digital, and they can take the form of images, music, videos, a\n              picture. They can also be tied to physical assets and make you own\n              something real.\n            </p>\n            <p class="mb-5 text-2xl leading-loose">\n              Using NFTs open new ways for creatives and designers to protect,\n              share and sell their work. Imagine if you create a brand or\n              interior design, you could sell the rights of the design so anyone\n              who buys it can physically replicate it in the real world. Still,\n              you\'ll have proof of ownership / creation for your work.\n            </p>\n          </div>\n        </div>\n      </section>\n\n      \x3c!-- FEATURES SECTION --\x3e\n      <section class="bg-nebu-pink">\n        <div class="max-w-6xl hero flex flex-col justify-between mx-auto py-10 px-10">\n          <h3 class="pb-10 text-4xl font-bold text-nebu-pink-darker">\n            Latest nebus in our collection\n          </h3>\n          '.concat(t,'\n        </div>\n      </section>\n\n      \x3c!-- NEBU HIME ABOUT SECTION --\x3e\n      <section\n        class="bg-nebu-purple"\n      >\n        <div class="max-w-6xl flex flex-col sm:flex-row justify-between mx-auto pt-10 px-10 sm:px-20">\n          <div class="md:w-1/2 md:self-center text-white sm:mb-10">\n            <h3\n              class="\n                mb-8\n                text-4xl\n                lg:text-6xl\n                font-bold\n              "\n            >\n              Hi! I\'m Nebu Hime, creator of the Nebuniverse\n            </h3>\n            <p class="text-2xl">\n              Where I create fantastic, galactically fluffy and delicious NEBUS\n              that you can obtain on my\n            </p>\n            <a\n              href="https://opensea.io/nebuniverse"\n              class="\n                text-4xl\n                font-bold\n                underline\n                hover:text-nebu-red\n              ">\n                Opensea space!\n            </a>\n          </div>\n          \x3c!-- empty div for layout --\x3e\n          <div class="md:w-1/2 flex justify-center items-end">\n            <img\n              src="./assets/images/nebu_hime.png"\n              alt="nebu hime"\n              class="w-3/4 sm:w-auto mx-auto pt-16 px-8 sm:p-10 pb-0 sm:pb-0"\n            />\n          </div>\n        </div>\n      </section>\n    </div>\n  '),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),"/about":function(){return'\n    <div class="h-full mx-auto text-center sm:text-left" style="background-color: #b18fc1">\n      <section class="max-w-6xl mx-auto py-10 px-8 text-white">\n        <h1 class="text-4xl font-bold text-shadow">Concept</h1>\n        <p class="my-4 leading-relaxed">\n          Inspired by Japanese Pop Culture and outer-space themed, NEBU was\n          originaly a commercial project for soda-like ice cream products\n          looking to set itself apart from most ice cream shops.\n          It was actually built as an ice cream shop, operating for around\n          6 months.\n        </p>\n\n        <h2 class="mt-8 text-3xl font-bold text-shadow">\n          But, wait...NFTs? How?\n        </h2>\n        <p class="my-4 leading-relaxed">\n          Since we had all the graphic design files and elements created, we\n          decided to create the \'Nebuniverse\'.\n          The Nebuniverse collection is an NFT collectibles project, to share\n          some of the love we have for this project. We are looking for ways\n          to leverage the power of blockchain in favor of intellectual\n          property for the Industrial / Interior / Brand Design.\n        </p>\n      </section>\n    </div>\n  '},"/gallery":function(){var n=t(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h();case 2:return t=n.sent,e="\n    <div class='max-w-6xl p-8 mx-auto'>".concat(t,"</div>\n    "),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),"/:id":f};const v=function(){var n=t(o().mark((function n(){var t,e,r,s,c,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=document.querySelector("#header"),e=document.querySelector("#app"),r=document.querySelector("#footer"),n.next=5,'\n    <nav\n      class="flex justify-between items-center flex-wrap sm:flex-nowrap h-auto p-4 font-bold bg-nebu-purple text-nebu-purple-darkest"\n    >\n      <a href="#/" class="block h-full">\n        <img src="'.concat(a,'" alt="Nebu logo" class="w-32" />\n      </a>\n      <button class="\n        p-1 header__menu-btn\n        " \n        id="open-menu">\n        <div class="\n          bg-nebu-purple-darkest h-1 mx-0 my-1"></div>\n      </button>\n      <ul class="\n        hidden flex-col align-center flex-grow-1 w-full text-center\n        sm:flex sm:flex-row sm:flex-grow-0 sm:w-auto\n        transform-gpu\n        transition-all\n        " \n        id="link-list">\n        <li class="text-center">\n          <a href="#/" \n            id="#/"\n            class="\n            inline-block w-min mx-auto mt-2 rounded-md px-4 py-2\n            sm:mt-0\n            transition-all\n            hover:text-white hover:bg-nebu-purple-darkest hover:scale-110\n            ">Home</a>\n        </li>\n        <li>\n          <a href="#/about"\n            id="#/about" \n            class="\n            inline-block w-min mx-auto mt-2 rounded-md px-4 py-2\n            sm:mt-0\n            transition-all\n            hover:text-white hover:bg-nebu-purple-darkest hover:scale-110\n            ">About</a>\n        </li>\n        <li>\n          <a href="#/gallery" \n            id="#/gallery"\n            class="\n            inline-block w-min mx-auto mt-2 rounded-md px-4 py-2\n            sm:mt-0\n            transition-all\n            hover:text-white hover:bg-nebu-purple-darkest hover:scale-110\n            ">Gallery</a>\n        </li>\n      </ul>\n    </nav>\n  ');case 5:return t.innerHTML=n.sent,s=i(),n.next=9,x(s);case 9:return c=n.sent,l=m[c]?m[c]:d,n.next=13,l();case 13:return e.innerHTML=n.sent,n.next=16,'\n    <div\n      class="\n        flex-shrink-0 flex flex-col\n        items-center\n        w-full\n        mx-auto\n        px-8\n        pt-8\n        text-center text-white\n        bg-nebu-purple-darkest\n      "\n    >\n      <h3 class="text-center text-lg">\n        Suscribe to our newsletter and get the latest news about our project.\n      </h3>\n      <form action="" class="flex flex-col items-center mt-8">\n        <input\n          type="email"\n          placeholder="example@nebunfts.com"\n          autocomplete="email"\n          class="w-full h-12 mb-5 p-2 rounded-lg text-center text-gray-700"\n        />\n        <button type="submit" class="w-3/4 mt-5 link-button bg-nebu-red hover:bg-nebu-red-darker">\n          Subscribe me\n        </button>\n      </form>\n      <p class="mt-8 mb-1 text-xs">\n        Made it with 💜 by\n        <a href="https://github.com/pihiwatari" class="text-pink-800 text-bold"\n          >pihiwatari</a\n        >, let\'s get in touch.\n      </p>\n    </div>\n  ';case 16:r.innerHTML=n.sent;case 17:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();window.addEventListener("load",v),window.addEventListener("hashchange",v),document.addEventListener("click",(function(n){n.target&&"open-menu"==n.target.id&&document.querySelector("#link-list").classList.toggle("hidden")})),window.addEventListener("hashchange",(function(){var n=document.getElementById("".concat(window.location.hash));null!=n&&n.classList.add("bg-nebu-red","text-white","cursor-default")}))})()})();