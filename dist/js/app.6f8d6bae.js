(function(t){function e(e){for(var a,r,c=e[0],l=e[1],s=e[2],d=0,m=[];d<c.length;d++)r=c[d],i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"46f9":function(t,e,n){"use strict";var a=n("76cc"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("button",{staticClass:"button add-marker",style:{"background-color":t.addMode?"#66f13d":"#3d66f1"},on:{click:function(e){t.addMode=!0}}},[t._v(t._s(t.addMode?"Click on the map":"+ Add marker"))]),n("button",{staticClass:"button weather add-marker",style:{"background-color":t.addWeather?"#6f163d":"#6d63f1"},on:{click:function(e){t.addWeather=!t.addWeather}}},[t._v(t._s(t.addWeather?"Weather marker":"★ Icon Marker"))]),n("table",{staticClass:"alignment"},[n("tr",[n("td",{attrs:{colspan:"3"}},[n("center",[t._v("Marker alignment : "+t._s(t.alignment))])],1)]),n("tr",[n("td",[n("button",{on:{click:function(e){t.alignment="topleft"}}},[t._v("topleft")])]),n("td",[n("button",{on:{click:function(e){t.alignment="top"}}},[t._v("top")])]),n("td",[n("button",{on:{click:function(e){t.alignment="topright"}}},[t._v("topright")])])]),n("tr",[n("td",[n("button",{on:{click:function(e){t.alignment="left"}}},[t._v("left")])]),n("td",[n("button",{on:{click:function(e){t.alignment="center"}}},[t._v("center")])]),n("td",[n("button",{on:{click:function(e){t.alignment="right"}}},[t._v("right")])])]),n("tr",[n("td",[n("button",{on:{click:function(e){t.alignment="bottomleft"}}},[t._v("bottomleft")])]),n("td",[n("button",{on:{click:function(e){t.alignment="bottom"}}},[t._v("bottom")])]),n("td",[n("button",{on:{click:function(e){t.alignment="bottomright"}}},[t._v("bottomright")])])])]),n("div",{staticClass:"animate-panel"},[n("center",[n("label",[n("a",{attrs:{href:"https://daneden.github.io/animate.css/"}},[t._v("Animate.css")]),t._v(" type\n      ")]),n("br"),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedAnimation,expression:"selectedAnimation"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedAnimation=e.target.multiple?n:n[0]}}},t._l(t.animations,function(e){return n("option",{key:e},[t._v(t._s(e))])}),0),n("br"),n("br"),n("label",[t._v("infinite animation")]),n("button",{on:{click:function(e){t.infinite=!t.infinite}}},[t.infinite?n("span",[t._v("ON")]):n("span",[t._v("OFF")])])])],1),n("div",{staticClass:"live-editor"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.html,expression:"html"}],domProps:{value:t.html},on:{input:function(e){e.target.composing||(t.html=e.target.value)}}})]),n("vue-gmap",{staticStyle:{width:"100%"},attrs:{center:t.markerCenter,zoom:10},on:{click:t.onMapClick}},[n("cluster",t._l(t.markers,function(e,a){return n("gmap-custom-marker",{key:e._id,attrs:{delayRepaint:e.weather?250:0,marker:e,alignment:e.alignment},nativeOn:{click:function(e){return t.deleteMarker(a)}}},[e.weather?n("weather",{attrs:{coords:e}}):n("img",{staticClass:"icon-sm",class:t.animation,attrs:{title:JSON.stringify(e),src:t.src,height:"45"}})],1)}),1),n("gmap-custom-marker",{key:"supermarker",attrs:{alignment:"bottomright",marker:t.markerCenter}},[n("div",{staticClass:"card",on:{click:function(t){return t.stopPropagation()}}},[n("center",[n("h3",[t._v("This is a marker")]),n("p",[t._v("Lat : "+t._s(t.markerCenter.lat)+", Lng : "+t._s(t.markerCenter.lng))])]),n("img",{staticClass:"icon",class:t.animation,attrs:{src:t.src,height:"75"}}),n("div",{staticClass:"input-group"},[n("center",[n("label",[t._v("Set marker image urls")])]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.testText,expression:"testText"}],attrs:{type:"input"},domProps:{value:t.testText},on:{input:function(e){e.target.composing||(t.testText=e.target.value)}}})],1)],1)]),n("gmap-custom-marker",{attrs:{"z-index":t.zA,marker:{lat:50.4272265,lng:2.95}}},[n("div",{staticClass:"zindex zindex-a"},[n("center",[n("p",[t._v("z-index live edit A")]),n("p",[n("b",[t._v(t._s(t.zA))])]),n("button",{on:{click:function(e){t.zA++}}},[t._v("+")]),n("button",{on:{click:function(e){t.zA--}}},[t._v("-")])])],1)]),n("gmap-custom-marker",{attrs:{"z-index":t.zB,marker:{lat:50.4272265,lng:2.8}}},[n("div",{staticClass:"zindex zindex-b"},[n("center",[n("p",[t._v("z-index live edit B")]),n("p",[n("b",[t._v(t._s(t.zB))])]),n("button",{on:{click:function(e){t.zB++}}},[t._v("+")]),n("button",{on:{click:function(e){t.zB--}}},[t._v("-")])])],1)]),n("gmap-custom-marker",{attrs:{alignment:"center",marker:{lat:50.7,lng:3.8}}},[n("div",{staticClass:"live-html",domProps:{innerHTML:t._s(t.html)}})])],1)],1)},o=[],r=n("755e"),c=n("6cee"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",{staticClass:"weather-card"},[n("label",[n("b",[t._v(t._s(t.data.name))])]),n("br"),n("img",{attrs:{src:t.icon}}),n("p",[t._v(t._s(t.data.weather[0].description))]),n("p",[n("i",[t._v(t._s(t.data.main.temp.toFixed(0))+"°C")])])]):t._e()},s=[],u=n("bc3a"),d={props:{coords:{type:Object,default:void 0}},data:function(){return{data:void 0}},created:function(){var t=this;Object(u["get"])("https://api.openweathermap.org/data/2.5/weather?lat="+this.coords.latitude+"&lon="+this.coords.longitude+"&APPID=59b0d37a8bb62db251652e421b20342a&units=metric").then(function(e){t.data=e.data})},computed:{icon:function(){return"http://openweathermap.org/img/w/"+this.data.weather[0].icon+".png"}}},m=d,f=(n("46f9"),n("2877")),p=Object(f["a"])(m,l,s,!1,null,null,null),g=p.exports,h={name:"app",components:{GmapCustomMarker:c["a"],"vue-gmap":r["Map"],Weather:g},data:function(){return{html:"<center><h2>This is <u>live</u> html marker 🔥</h2></center>",infinite:!0,selectedAnimation:"",zA:50,zB:51,testText:"",markerCenter:{lat:50.6272265,lng:3.0571581},addWeather:!1,addMode:!1,markers:[],ids:0,alignment:"top",animations:n("d6c6")}},computed:{animation:function(){var t=this.infinite?"infinite":"";return"animated ".concat(t," ").concat(this.selectedAnimation)},src:function(){return this.testText?this.testText:"https://vuejs.org/images/logo.png"}},methods:{deleteMarker:function(t){this.markers.splice(t,1)},onMapClick:function(t){this.addMode&&(this.markers.push({_id:this.ids++,latitude:t.latLng.lat(),longitude:t.latLng.lng(),weather:this.addWeather,alignment:this.alignment}),this.addMode=!1)}}},v=h,b=(n("034f"),Object(f["a"])(v,i,o,!1,null,null,null)),k=b.exports,_=n("ae66"),O=n.n(_);a["a"].component("cluster",O.a),a["a"].use(r,{load:{key:"AIzaSyBkOdVJktw6m9OoVMcX1ZU_yU54ODDfFlA",v:"3.26"},installComponents:!1}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(k)}}).$mount("#app")},"64a9":function(t,e,n){},"76cc":function(t,e,n){},d6c6:function(t){t.exports=["bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","jackInTheBox","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp"]}});
//# sourceMappingURL=app.6f8d6bae.js.map