import{h as d,d as f}from"./Space-9c9a9c11.js";const s=(t,n,e)=>{const o=t[n];if(d(o))throw new Error(`Interpolation Error: index "${n}" doesn't exists in ${e}`);return o},x=(t,n)=>e=>Math.max(Math.min(e,n),t),m=(t,n)=>{if(n<t[0])return[0,1];const e=t.length-1;for(let o=0;o<=e;o+=1){const u=o+1,r=s(t,o,"range"),a=t[u];if(f(a)&&n>r&&n<a)return[o,u]}return[e-1,e]},N=({inputRange:t,outputRange:n,clamp:e=!0})=>o=>{const[u,r]=m(t,o),a=s(t,u,"inputRange"),i=s(t,r,"inputRange"),l=s(t,t.length-1,"inputRange"),c=s(n,u,"outputRange"),p=s(n,r,"outputRange"),g=i-a,h=p-c,R=(e?x(t[0],l)(o):o)-a;return h*R/g+c},O=({elasticLength:t=100,elasticStrength:n=.008})=>e=>t*(1-Math.exp(-n*e));export{x as c,N as i,O as l};
//# sourceMappingURL=math-b6388423.js.map
