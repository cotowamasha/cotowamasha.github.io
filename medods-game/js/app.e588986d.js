(function(t){function e(e){for(var a,r,l=e[0],o=e[1],c=e[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,l=1;l<n.length;l++){var o=n[l];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v(" Simon The Game ")]),n("div",{staticClass:"game"},[n("field-component"),n("settings-component",{ref:"settings"})],1)])])},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-field"},[n("div",{staticClass:"game-field--flex"},t._l(t.field,(function(e,a){return n("v-btn",{key:a,attrs:{"class-el":["game-field--btn","btn","btn--"+e.color,{active:e.active}],disabled:"waiting"!==t.status},on:{click:function(e){return t.clickButton(a+1)}}})})),1)])},l=[],o=n("5530"),c=n("2f62"),u={name:"FieldComponent",computed:Object(o["a"])({},Object(c["c"])(["game","user","field","status"])),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["PUSH_VALUE","SET_GAME_STATUS","CLEAR"])),{},{clickButton:function(t){return this.$parent.$refs.settings.playAudio(t),this.PUSH_VALUE({type:"user",number:t}),this.user[this.user.length-1]!==this.game[this.user.length-1]?(this.SET_GAME_STATUS("lose"),this.CLEAR({type:"game"}),this.CLEAR({type:"user"}),!1):this.user.length===this.game.length?(this.CLEAR({type:"user"}),setTimeout(this.$parent.$refs.settings.startCycle,200),!1):void 0}})},d=u,f=n("2877"),p=Object(f["a"])(d,r,l,!1,null,null,null),m=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-settings"},[n("h3",{staticClass:"game-settings__round"},[t._v(" Round: "+t._s(t.game.length)+" ")]),"lose"===t.status?n("p",{staticClass:"game-settings__lose"},[t._v(' Вы проиграли. Нажмите "START", чтобы начать заново ')]):t._e(),n("v-btn",{attrs:{"class-el":"btn--start"},on:{click:t.startGame}},[t._v(" Start ")]),n("h3",{staticClass:"game-settings__round"},[t._v(" Game Options: ")]),t._l(t.levels,(function(e){return n("v-radio",{key:e.id,attrs:{id:e.id,value:e.value,checked:e.checked,"radio-name":"level"},on:{changeRadio:function(n){return t.changeLevel(e)}}},[t._v(" "+t._s(e.value)+" ")])}))],2)},v=[],_={name:"SettingsComponent",data:function(){return{levels:[{id:"1",value:"easy",time:1500,checked:!0},{id:"2",value:"medium",time:1e3,checked:!1},{id:"3",value:"hard",time:400,checked:!1}],time:0}},computed:Object(o["a"])({},Object(c["c"])(["game","level","status"])),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["CLEAR","PUSH_VALUE","SET_BUTTON_STATUS","CHANGE_GAME_LEVEL","SET_GAME_STATUS"])),{},{getRandomNumber:function(){var t=1,e=4;return Math.floor(Math.random()*(e-t+1))+t},changeLevel:function(t){this.CHANGE_GAME_LEVEL(t)},startGame:function(){this.CLEAR({type:"game"}),this.CLEAR({type:"user"}),this.startCycle()},playAudio:function(t){var e=new Audio;e.src="sounds/".concat(t,".mp3"),e.play()},startCycle:function(){this.PUSH_VALUE({type:"game",number:this.getRandomNumber()}),this.SET_GAME_STATUS("cycle"),this.time=0;for(var t=0;t<this.game.length;t++)setTimeout(this.setActiveStatus,this.time,this.game[t]-1),this.time+=this.level.time-100,setTimeout(this.setPassiveStatus,this.time,this.game[t]-1,t),this.time+=this.level.time+100},setActiveStatus:function(t){this.SET_BUTTON_STATUS(t),this.playAudio(+t+1)},setPassiveStatus:function(t,e){this.SET_BUTTON_STATUS(t),e===this.game.length-1&&this.SET_GAME_STATUS("waiting")}})},g=_,b=Object(f["a"])(g,h,v,!1,null,null,null),S=b.exports,y={name:"App",components:{SettingsComponent:S,FieldComponent:m}},E=y,T=(n("cf25"),Object(f["a"])(E,i,s,!1,null,null,null)),A=T.exports;n("a434");a["a"].use(c["a"]);var C=new c["a"].Store({state:{game:[],user:[],level:{time:1500},status:"before",field:[{color:"blue",active:!1},{color:"red",active:!1},{color:"yellow",active:!1},{color:"green",active:!1}]},mutations:{CLEAR:function(t,e){t[e.type].splice(0)},PUSH_VALUE:function(t,e){t[e.type].push(e.number)},CHANGE_GAME_LEVEL:function(t,e){t.level.time=e.time},SET_BUTTON_STATUS:function(t,e){t.field[e].active=!t.field[e].active},SET_GAME_STATUS:function(t,e){t.status=e}},actions:{},modules:{}}),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:["btn",t.classEl],attrs:{type:t.type,disabled:t.disabled},on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[t._t("default")],2)},j=[],U={name:"ButtonComponent",props:{type:{type:String,default:"button"},disabled:{type:Boolean,default:!1},classEl:{type:[String,Array],default:""}}},L=U,k=Object(f["a"])(L,O,j,!1,null,null,null),w=k.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"radio"},[n("label",{staticClass:"radio__label",attrs:{for:t.id}},[n("input",{class:""===t.classEl?"radio__input":t.classEl,attrs:{id:t.id,name:t.radioName,type:"radio"},domProps:{value:t.value,checked:t.checked},on:{change:function(e){return t.$emit("changeRadio",e.target.checked)}}}),n("span",{staticClass:"radio__text"},[t._t("default")],2)])])},M=[],P=(n("b0c0"),{name:"RadioComponent",props:{classEl:{type:String,default:""},value:{type:String,required:!0},id:{type:String,required:!0},radioName:{type:String,default:""},checked:{type:Boolean,default:!1}},data:function(){return{name:this.value}},watch:{value:function(t){this.name=t}}}),R=P,x=Object(f["a"])(R,G,M,!1,null,null,null),$=x.exports;a["a"].config.productionTip=!1,a["a"].config.devtools=!0,a["a"].component("v-btn",w),a["a"].component("v-radio",$),new a["a"]({store:C,render:function(t){return t(A)}}).$mount("#app")},cf25:function(t,e,n){"use strict";var a=n("fea6"),i=n.n(a);i.a},fea6:function(t,e,n){}});
//# sourceMappingURL=app.e588986d.js.map
