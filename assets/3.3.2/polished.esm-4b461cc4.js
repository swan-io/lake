import{_ as h}from"./extends-98964cd2.js";function B(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function v(r,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},v(r,e)}function D(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,v(r,e)}function $(r){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$(r)}function W(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}function G(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k(r,e,n){return G()?k=Reflect.construct.bind():k=function(a,f,i){var u=[null];u.push.apply(u,f);var o=Function.bind.apply(a,u),d=new o;return i&&v(d,i.prototype),d},k.apply(null,arguments)}function H(r){var e=typeof Map=="function"?new Map:void 0;return H=function(t){if(t===null||!W(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return k(t,arguments,$(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),v(a,t)},H(r)}var c=function(r){D(e,r);function e(n){var t;return t=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,B(t)}return e}(H(Error));function _(r){return Math.round(r*255)}function C(r,e,n){return _(r)+","+_(e)+","+_(n)}function w(r,e,n,t){if(t===void 0&&(t=C),e===0)return t(n,n,n);var a=(r%360+360)%360/60,f=(1-Math.abs(2*n-1))*e,i=f*(1-Math.abs(a%2-1)),u=0,o=0,d=0;a>=0&&a<1?(u=f,o=i):a>=1&&a<2?(u=i,o=f):a>=2&&a<3?(o=f,d=i):a>=3&&a<4?(o=i,d=f):a>=4&&a<5?(u=i,d=f):a>=5&&a<6&&(u=f,d=i);var b=n-f/2,s=u+b,p=o+b,y=d+b;return t(s,p,y)}var q={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function J(r){if(typeof r!="string")return r;var e=r.toLowerCase();return q[e]?"#"+q[e]:r}var K=/^#[a-fA-F0-9]{6}$/,Q=/^#[a-fA-F0-9]{8}$/,U=/^#[a-fA-F0-9]{3}$/,X=/^#[a-fA-F0-9]{4}$/,R=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Y=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Z=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,V=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function g(r){if(typeof r!="string")throw new c(3);var e=J(r);if(e.match(K))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(Q)){var n=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:n}}if(e.match(U))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(X)){var t=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:t}}var a=R.exec(e);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var f=Y.exec(e.substring(0,50));if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])};var i=Z.exec(e);if(i){var u=parseInt(""+i[1],10),o=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,b="rgb("+w(u,o,d)+")",s=R.exec(b);if(!s)throw new c(4,e,b);return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10)}}var p=V.exec(e.substring(0,50));if(p){var y=parseInt(""+p[1],10),N=parseInt(""+p[2],10)/100,E=parseInt(""+p[3],10)/100,L="rgb("+w(y,N,E)+")",x=R.exec(L);if(!x)throw new c(4,e,L);return{red:parseInt(""+x[1],10),green:parseInt(""+x[2],10),blue:parseInt(""+x[3],10),alpha:parseFloat(""+p[4])>1?parseFloat(""+p[4])/100:parseFloat(""+p[4])}}throw new c(5)}function ee(r){var e=r.red/255,n=r.green/255,t=r.blue/255,a=Math.max(e,n,t),f=Math.min(e,n,t),i=(a+f)/2;if(a===f)return r.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:r.alpha}:{hue:0,saturation:0,lightness:i};var u,o=a-f,d=i>.5?o/(2-a-f):o/(a+f);switch(a){case e:u=(n-t)/o+(n<t?6:0);break;case n:u=(t-e)/o+2;break;default:u=(e-n)/o+4;break}return u*=60,r.alpha!==void 0?{hue:u,saturation:d,lightness:i,alpha:r.alpha}:{hue:u,saturation:d,lightness:i}}function T(r){return ee(g(r))}var re=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},j=re;function l(r){var e=r.toString(16);return e.length===1?"0"+e:e}function A(r){return l(Math.round(r*255))}function ne(r,e,n){return j("#"+A(r)+A(e)+A(n))}function I(r,e,n){return w(r,e,n,ne)}function te(r,e,n){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number")return I(r,e,n);if(typeof r=="object"&&e===void 0&&n===void 0)return I(r.hue,r.saturation,r.lightness);throw new c(1)}function ae(r,e,n,t){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?I(r,e,n):"rgba("+w(r,e,n)+","+t+")";if(typeof r=="object"&&e===void 0&&n===void 0&&t===void 0)return r.alpha>=1?I(r.hue,r.saturation,r.lightness):"rgba("+w(r.hue,r.saturation,r.lightness)+","+r.alpha+")";throw new c(2)}function M(r,e,n){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number")return j("#"+l(r)+l(e)+l(n));if(typeof r=="object"&&e===void 0&&n===void 0)return j("#"+l(r.red)+l(r.green)+l(r.blue));throw new c(6)}function F(r,e,n,t){if(typeof r=="string"&&typeof e=="number"){var a=g(r);return"rgba("+a.red+","+a.green+","+a.blue+","+e+")"}else{if(typeof r=="number"&&typeof e=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?M(r,e,n):"rgba("+r+","+e+","+n+","+t+")";if(typeof r=="object"&&e===void 0&&n===void 0&&t===void 0)return r.alpha>=1?M(r.red,r.green,r.blue):"rgba("+r.red+","+r.green+","+r.blue+","+r.alpha+")"}throw new c(7)}var fe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},ie=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},ue=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},oe=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function P(r){if(typeof r!="object")throw new c(8);if(ie(r))return F(r);if(fe(r))return M(r);if(oe(r))return ae(r);if(ue(r))return te(r);throw new c(8)}function z(r,e,n){return function(){var a=n.concat(Array.prototype.slice.call(arguments));return a.length>=e?r.apply(this,a):z(r,e,a)}}function m(r){return z(r,r.length,[])}function O(r,e,n){return Math.max(r,Math.min(e,n))}function de(r,e){if(e==="transparent")return e;var n=T(e);return P(h({},n,{lightness:O(0,1,n.lightness-parseFloat(r))}))}var pe=m(de),_e=pe;function S(r){if(r==="transparent")return 0;var e=g(r),n=Object.keys(e).map(function(i){var u=e[i]/255;return u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4)}),t=n[0],a=n[1],f=n[2];return parseFloat((.2126*t+.7152*a+.0722*f).toFixed(3))}function se(r,e){var n=S(r),t=S(e);return parseFloat((n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)).toFixed(2))}function ce(r,e){if(e==="transparent")return e;var n=T(e);return P(h({},n,{lightness:O(0,1,n.lightness+parseFloat(r))}))}var be=m(ce),Re=be;function Ae(r,e){var n=se(r,e);return{AA:n>=4.5,AALarge:n>=3,AAA:n>=7,AAALarge:n>=4.5}}function le(r,e,n){if(e==="transparent")return n;if(n==="transparent")return e;if(r===0)return n;var t=g(e),a=h({},t,{alpha:typeof t.alpha=="number"?t.alpha:1}),f=g(n),i=h({},f,{alpha:typeof f.alpha=="number"?f.alpha:1}),u=a.alpha-i.alpha,o=parseFloat(r)*2-1,d=o*u===-1?o:o+u,b=1+o*u,s=(d/b+1)/2,p=1-s,y={red:Math.floor(a.red*s+i.red*p),green:Math.floor(a.green*s+i.green*p),blue:Math.floor(a.blue*s+i.blue*p),alpha:a.alpha*parseFloat(r)+i.alpha*(1-parseFloat(r))};return F(y)}var he=m(le),ge=he;function me(r,e){if(e==="transparent")return e;var n=g(e),t=typeof n.alpha=="number"?n.alpha:1,a=h({},n,{alpha:O(0,1,(t*100+parseFloat(r)*100)/100)});return F(a)}var ye=m(me),$e=ye;function ve(r,e){return e==="transparent"?e:P(h({},T(e),{lightness:parseFloat(r)}))}var we=m(ve),He=we;function xe(r,e){return e==="transparent"?e:ge(parseFloat(r),"rgb(0, 0, 0)",e)}var ke=m(xe),je=ke;function Ie(r,e){if(e==="transparent")return e;var n=g(e),t=typeof n.alpha=="number"?n.alpha:1,a=h({},n,{alpha:O(0,1,+(t*100-parseFloat(r)*100).toFixed(2)/100)});return F(a)}var Fe=m(Ie),Me=Fe;export{je as a,_e as b,He as c,Me as d,$e as e,Re as f,Ae as m,F as r};
//# sourceMappingURL=polished.esm-4b461cc4.js.map