import{_ as b}from"./extends-CCbyfPlC.js";function C(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function k(r,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},k(r,e)}function D(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,k(r,e)}function R(r){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(r)}function W(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}function q(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(q=function(){return!!r})()}function G(r,e,t){if(q())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,e);var n=new(r.bind.apply(r,a));return t&&k(n,t.prototype),n}function j(r){var e=typeof Map=="function"?new Map:void 0;return j=function(a){if(a===null||!W(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(a))return e.get(a);e.set(a,n)}function n(){return G(a,arguments,R(this).constructor)}return n.prototype=Object.create(a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),k(n,a)},j(r)}var l=function(r){D(e,r);function e(t){var a;return a=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,C(a)}return e}(j(Error));function H(r){return Math.round(r*255)}function J(r,e,t){return H(r)+","+H(e)+","+H(t)}function F(r,e,t,a){if(a===void 0&&(a=J),e===0)return a(t,t,t);var n=(r%360+360)%360/60,f=(1-Math.abs(2*t-1))*e,i=f*(1-Math.abs(n%2-1)),u=0,o=0,d=0;n>=0&&n<1?(u=f,o=i):n>=1&&n<2?(u=i,o=f):n>=2&&n<3?(o=f,d=i):n>=3&&n<4?(o=i,d=f):n>=4&&n<5?(u=i,d=f):n>=5&&n<6&&(u=f,d=i);var h=t-f/2,c=u+h,p=o+h,x=d+h;return a(c,p,x)}var L={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function K(r){if(typeof r!="string")return r;var e=r.toLowerCase();return L[e]?"#"+L[e]:r}var Q=/^#[a-fA-F0-9]{6}$/,U=/^#[a-fA-F0-9]{8}$/,X=/^#[a-fA-F0-9]{3}$/,Y=/^#[a-fA-F0-9]{4}$/,A=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Z=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,V=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,ee=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function v(r){if(typeof r!="string")throw new l(3);var e=K(r);if(e.match(Q))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(U)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(X))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(Y)){var a=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:a}}var n=A.exec(e);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var f=Z.exec(e.substring(0,50));if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])};var i=V.exec(e);if(i){var u=parseInt(""+i[1],10),o=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,h="rgb("+F(u,o,d)+")",c=A.exec(h);if(!c)throw new l(4,e,h);return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10)}}var p=ee.exec(e.substring(0,50));if(p){var x=parseInt(""+p[1],10),E=parseInt(""+p[2],10)/100,B=parseInt(""+p[3],10)/100,P="rgb("+F(x,E,B)+")",I=A.exec(P);if(!I)throw new l(4,e,P);return{red:parseInt(""+I[1],10),green:parseInt(""+I[2],10),blue:parseInt(""+I[3],10),alpha:parseFloat(""+p[4])>1?parseFloat(""+p[4])/100:parseFloat(""+p[4])}}throw new l(5)}function re(r){var e=r.red/255,t=r.green/255,a=r.blue/255,n=Math.max(e,t,a),f=Math.min(e,t,a),i=(n+f)/2;if(n===f)return r.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:r.alpha}:{hue:0,saturation:0,lightness:i};var u,o=n-f,d=i>.5?o/(2-n-f):o/(n+f);switch(n){case e:u=(t-a)/o+(t<a?6:0);break;case t:u=(a-e)/o+2;break;default:u=(e-t)/o+4;break}return u*=60,r.alpha!==void 0?{hue:u,saturation:d,lightness:i,alpha:r.alpha}:{hue:u,saturation:d,lightness:i}}function g(r){return re(v(r))}var te=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},M=te;function y(r){var e=r.toString(16);return e.length===1?"0"+e:e}function $(r){return y(Math.round(r*255))}function ae(r,e,t){return M("#"+$(r)+$(e)+$(t))}function O(r,e,t){return F(r,e,t,ae)}function ne(r,e,t){if(typeof r=="number"&&typeof e=="number"&&typeof t=="number")return O(r,e,t);if(typeof r=="object"&&e===void 0&&t===void 0)return O(r.hue,r.saturation,r.lightness);throw new l(1)}function fe(r,e,t,a){if(typeof r=="number"&&typeof e=="number"&&typeof t=="number"&&typeof a=="number")return a>=1?O(r,e,t):"rgba("+F(r,e,t)+","+a+")";if(typeof r=="object"&&e===void 0&&t===void 0&&a===void 0)return r.alpha>=1?O(r.hue,r.saturation,r.lightness):"rgba("+F(r.hue,r.saturation,r.lightness)+","+r.alpha+")";throw new l(2)}function T(r,e,t){if(typeof r=="number"&&typeof e=="number"&&typeof t=="number")return M("#"+y(r)+y(e)+y(t));if(typeof r=="object"&&e===void 0&&t===void 0)return M("#"+y(r.red)+y(r.green)+y(r.blue));throw new l(6)}function _(r,e,t,a){if(typeof r=="string"&&typeof e=="number"){var n=v(r);return"rgba("+n.red+","+n.green+","+n.blue+","+e+")"}else{if(typeof r=="number"&&typeof e=="number"&&typeof t=="number"&&typeof a=="number")return a>=1?T(r,e,t):"rgba("+r+","+e+","+t+","+a+")";if(typeof r=="object"&&e===void 0&&t===void 0&&a===void 0)return r.alpha>=1?T(r.red,r.green,r.blue):"rgba("+r.red+","+r.green+","+r.blue+","+r.alpha+")"}throw new l(7)}var ie=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},ue=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},oe=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},pe=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function m(r){if(typeof r!="object")throw new l(8);if(ue(r))return _(r);if(ie(r))return T(r);if(pe(r))return fe(r);if(oe(r))return ne(r);throw new l(8)}function z(r,e,t){return function(){var n=t.concat(Array.prototype.slice.call(arguments));return n.length>=e?r.apply(this,n):z(r,e,n)}}function s(r){return z(r,r.length,[])}function se(r,e){if(e==="transparent")return e;var t=g(e);return m(b({},t,{hue:t.hue+parseFloat(r)}))}s(se);function w(r,e,t){return Math.max(r,Math.min(e,t))}function de(r,e){if(e==="transparent")return e;var t=g(e);return m(b({},t,{lightness:w(0,1,t.lightness-parseFloat(r))}))}var be=s(de),Me=be;function ce(r,e){if(e==="transparent")return e;var t=g(e);return m(b({},t,{saturation:w(0,1,t.saturation-parseFloat(r))}))}s(ce);function S(r){if(r==="transparent")return 0;var e=v(r),t=Object.keys(e).map(function(i){var u=e[i]/255;return u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4)}),a=t[0],n=t[1],f=t[2];return parseFloat((.2126*a+.7152*n+.0722*f).toFixed(3))}function le(r,e){var t=S(r),a=S(e);return parseFloat((t>a?(t+.05)/(a+.05):(a+.05)/(t+.05)).toFixed(2))}function he(r,e){if(e==="transparent")return e;var t=g(e);return m(b({},t,{lightness:w(0,1,t.lightness+parseFloat(r))}))}var ge=s(he),Te=ge;function Pe(r,e){var t=le(r,e);return{AA:t>=4.5,AALarge:t>=3,AAA:t>=7,AAALarge:t>=4.5}}function me(r,e,t){if(e==="transparent")return t;if(t==="transparent")return e;if(r===0)return t;var a=v(e),n=b({},a,{alpha:typeof a.alpha=="number"?a.alpha:1}),f=v(t),i=b({},f,{alpha:typeof f.alpha=="number"?f.alpha:1}),u=n.alpha-i.alpha,o=parseFloat(r)*2-1,d=o*u===-1?o:o+u,h=1+o*u,c=(d/h+1)/2,p=1-c,x={red:Math.floor(n.red*c+i.red*p),green:Math.floor(n.green*c+i.green*p),blue:Math.floor(n.blue*c+i.blue*p),alpha:n.alpha*parseFloat(r)+i.alpha*(1-parseFloat(r))};return _(x)}var ye=s(me),N=ye;function ve(r,e){if(e==="transparent")return e;var t=v(e),a=typeof t.alpha=="number"?t.alpha:1,n=b({},t,{alpha:w(0,1,(a*100+parseFloat(r)*100)/100)});return _(n)}var we=s(ve),Le=we;function xe(r,e){if(e==="transparent")return e;var t=g(e);return m(b({},t,{saturation:w(0,1,t.saturation+parseFloat(r))}))}s(xe);function ke(r,e){return e==="transparent"?e:m(b({},g(e),{hue:parseFloat(r)}))}s(ke);function Fe(r,e){return e==="transparent"?e:m(b({},g(e),{lightness:parseFloat(r)}))}var Ie=s(Fe),Se=Ie;function Oe(r,e){return e==="transparent"?e:m(b({},g(e),{saturation:parseFloat(r)}))}s(Oe);function _e(r,e){return e==="transparent"?e:N(parseFloat(r),"rgb(0, 0, 0)",e)}var He=s(_e),qe=He;function Ae(r,e){return e==="transparent"?e:N(parseFloat(r),"rgb(255, 255, 255)",e)}s(Ae);function $e(r,e){if(e==="transparent")return e;var t=v(e),a=typeof t.alpha=="number"?t.alpha:1,n=b({},t,{alpha:w(0,1,+(a*100-parseFloat(r)*100).toFixed(2)/100)});return _(n)}var Re=s($e),ze=Re;export{qe as a,Me as b,Se as c,ze as d,Le as e,Te as f,Pe as m,_ as r};
//# sourceMappingURL=polished.esm-1TDmsf3v.js.map
