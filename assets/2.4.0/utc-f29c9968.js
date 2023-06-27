import{c as P,g as k}from"./_commonjsHelpers-042e6b4d.js";var q={exports:{}};(function(C,j){(function(d,M){C.exports=M()})(P,function(){var d={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},M=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,$=/\d\d/,a=/\d\d?/,Y=/\d*[^-_:/,()\s\d]+/,u={},i=function(t){return(t=+t)+(t>68?1900:2e3)},e=function(t){return function(r){this[t]=+r}},m=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(r){if(!r||r==="Z")return 0;var o=r.match(/([+-]|\d\d)/g),n=60*o[1]+(+o[2]||0);return n===0?0:o[0]==="+"?-n:n}(t)}],p=function(t){var r=u[t];return r&&(r.indexOf?r:r.s.concat(r.f))},D=function(t,r){var o,n=u.meridiem;if(n){for(var s=1;s<=24;s+=1)if(t.indexOf(n(s,0,r))>-1){o=s>12;break}}else o=t===(r?"pm":"PM");return o},U={A:[Y,function(t){this.afternoon=D(t,!1)}],a:[Y,function(t){this.afternoon=D(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[$,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[a,e("seconds")],ss:[a,e("seconds")],m:[a,e("minutes")],mm:[a,e("minutes")],H:[a,e("hours")],h:[a,e("hours")],HH:[a,e("hours")],hh:[a,e("hours")],D:[a,e("day")],DD:[$,e("day")],Do:[Y,function(t){var r=u.ordinal,o=t.match(/\d+/);if(this.day=o[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],M:[a,e("month")],MM:[$,e("month")],MMM:[Y,function(t){var r=p("months"),o=(p("monthsShort")||r.map(function(n){return n.slice(0,3)})).indexOf(t)+1;if(o<1)throw new Error;this.month=o%12||o}],MMMM:[Y,function(t){var r=p("months").indexOf(t)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,e("year")],YY:[$,function(t){this.year=i(t)}],YYYY:[/\d{4}/,e("year")],Z:m,ZZ:m};function T(t){var r,o;r=t,o=u&&u.formats;for(var n=(t=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(g,S,y){var L=y&&y.toUpperCase();return S||o[y]||d[y]||o[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(w,O,H){return O||H.slice(1)})})).match(M),s=n.length,f=0;f<s;f+=1){var c=n[f],h=U[c],l=h&&h[0],v=h&&h[1];n[f]=v?{regex:l,parser:v}:c.replace(/^\[|\]$/g,"")}return function(g){for(var S={},y=0,L=0;y<s;y+=1){var w=n[y];if(typeof w=="string")L+=w.length;else{var O=w.regex,H=w.parser,Z=g.slice(L),F=O.exec(Z)[0];H.call(S,F),g=g.replace(F,"")}}return function(A){var x=A.afternoon;if(x!==void 0){var z=A.hours;x?z<12&&(A.hours+=12):z===12&&(A.hours=0),delete A.afternoon}}(S),S}}return function(t,r,o){o.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(i=t.parseTwoDigitYear);var n=r.prototype,s=n.parse;n.parse=function(f){var c=f.date,h=f.utc,l=f.args;this.$u=h;var v=l[1];if(typeof v=="string"){var g=l[2]===!0,S=l[3]===!0,y=g||S,L=l[2];S&&(L=l[2]),u=this.$locale(),!g&&L&&(u=o.Ls[L]),this.$d=function(Z,F,A){try{if(["x","X"].indexOf(F)>-1)return new Date((F==="X"?1e3:1)*Z);var x=T(F)(Z),z=x.year,E=x.month,R=x.day,tt=x.hours,rt=x.minutes,et=x.seconds,nt=x.milliseconds,W=x.zone,B=new Date,I=R||(z||E?1:B.getDate()),N=z||B.getFullYear(),b=0;z&&!E||(b=E>0?E-1:B.getMonth());var X=tt||0,_=rt||0,G=et||0,V=nt||0;return W?new Date(Date.UTC(N,b,I,X,_,G,V+60*W.offset*1e3)):A?new Date(Date.UTC(N,b,I,X,_,G,V)):new Date(N,b,I,X,_,G,V)}catch{return new Date("")}}(c,v,h),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),y&&c!=this.format(v)&&(this.$d=new Date("")),u={}}else if(v instanceof Array)for(var w=v.length,O=1;O<=w;O+=1){l[1]=v[O-1];var H=o.apply(this,l);if(H.isValid()){this.$d=H.$d,this.$L=H.$L,this.init();break}O===w&&(this.$d=new Date(""))}else s.call(this,f)}}})})(q);var ot=q.exports;const ct=k(ot);var J={exports:{}};(function(C,j){(function(d,M){C.exports=M()})(P,function(){var d={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(M,$,a){var Y=$.prototype,u=Y.format;a.en.formats=d,Y.format=function(i){i===void 0&&(i="YYYY-MM-DDTHH:mm:ssZ");var e=this.$locale().formats,m=function(p,D){return p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(U,T,t){var r=t&&t.toUpperCase();return T||D[t]||d[t]||D[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(o,n,s){return n||s.slice(1)})})}(i,e===void 0?{}:e);return u.call(this,m)}}})})(J);var it=J.exports;const ht=k(it);var K={exports:{}};(function(C,j){(function(d,M){C.exports=M()})(P,function(){return function(d,M,$){d=d||{};var a=M.prototype,Y={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function u(e,m,p,D){return a.fromToBase(e,m,p,D)}$.en.relativeTime=Y,a.fromToBase=function(e,m,p,D,U){for(var T,t,r,o=p.$locale().relativeTime||Y,n=d.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],s=n.length,f=0;f<s;f+=1){var c=n[f];c.d&&(T=D?$(e).diff(p,c.d,!0):p.diff(e,c.d,!0));var h=(d.rounding||Math.round)(Math.abs(T));if(r=T>0,h<=c.r||!c.r){h<=1&&f>0&&(c=n[f-1]);var l=o[c.l];U&&(h=U(""+h)),t=typeof l=="string"?l.replace("%d",h):l(h,m,c.l,r);break}}if(m)return t;var v=r?o.future:o.past;return typeof v=="function"?v(t):v.replace("%s",t)},a.to=function(e,m){return u(e,m,this,!0)},a.from=function(e,m){return u(e,m,this)};var i=function(e){return e.$u?$.utc():$()};a.toNow=function(e){return this.to(i(this),e)},a.fromNow=function(e){return this.from(i(this),e)}}})})(K);var st=K.exports;const lt=k(st);var Q={exports:{}};(function(C,j){(function(d,M){C.exports=M()})(P,function(){var d="minute",M=/[+-]\d\d(?::?\d\d)?/g,$=/([+-]|\d\d)/g;return function(a,Y,u){var i=Y.prototype;u.utc=function(t){var r={date:t,utc:!0,args:arguments};return new Y(r)},i.utc=function(t){var r=u(this.toDate(),{locale:this.$L,utc:!0});return t?r.add(this.utcOffset(),d):r},i.local=function(){return u(this.toDate(),{locale:this.$L,utc:!1})};var e=i.parse;i.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),e.call(this,t)};var m=i.init;i.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else m.call(this)};var p=i.utcOffset;i.utcOffset=function(t,r){var o=this.$utils().u;if(o(t))return this.$u?0:o(this.$offset)?p.call(this):this.$offset;if(typeof t=="string"&&(t=function(c){c===void 0&&(c="");var h=c.match(M);if(!h)return null;var l=(""+h[0]).match($)||["-",0,0],v=l[0],g=60*+l[1]+ +l[2];return g===0?0:v==="+"?g:-g}(t),t===null))return this;var n=Math.abs(t)<=16?60*t:t,s=this;if(r)return s.$offset=n,s.$u=t===0,s;if(t!==0){var f=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(s=this.local().add(n+f,d)).$offset=n,s.$x.$localOffset=f}else s=this.utc();return s};var D=i.format;i.format=function(t){var r=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return D.call(this,r)},i.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var U=i.toDate;i.toDate=function(t){return t==="s"&&this.$offset?u(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():U.call(this)};var T=i.diff;i.diff=function(t,r,o){if(t&&this.$u===t.$u)return T.call(this,t,r,o);var n=this.local(),s=u(t).local();return T.call(n,s,r,o)}}})})(Q);var at=Q.exports;const dt=k(at);export{ct as c,ht as l,lt as r,dt as u};
//# sourceMappingURL=utc-f29c9968.js.map
