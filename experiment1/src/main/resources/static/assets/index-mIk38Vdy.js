var we=Object.defineProperty;var Pe=(t,e,l)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l;var ee=(t,e,l)=>Pe(t,typeof e!="symbol"?e+"":e,l);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();function j(){}function ve(t){return t()}function ie(){return Object.create(null)}function L(t){t.forEach(ve)}function be(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ke(t){return Object.keys(t).length===0}function _(t,e){t.appendChild(e)}function k(t,e,l){t.insertBefore(e,l||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function ne(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function g(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function C(){return Y(" ")}function E(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function N(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Ce(t){return Array.from(t.childNodes)}function oe(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e){t.value=e??""}function G(t,e,l){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e){o.selected=!0;return}}(!l||e!==void 0)&&(t.selectedIndex=-1)}function re(t){const e=t.querySelector(":checked");return e&&e.__value}let B;function x(t){B=t}function Oe(){if(!B)throw new Error("Function called outside component initialization");return B}function Se(t){Oe().$$.on_mount.push(t)}const I=[],se=[];let D=[];const ce=[],Ee=Promise.resolve();let le=!1;function Ne(){le||(le=!0,Ee.then(ye))}function J(t){D.push(t)}const te=new Set;let F=0;function ye(){if(F!==0)return;const t=B;do{try{for(;F<I.length;){const e=I[F];F++,x(e),Ue(e.$$)}}catch(e){throw I.length=0,F=0,e}for(x(null),I.length=0,F=0;se.length;)se.pop()();for(let e=0;e<D.length;e+=1){const l=D[e];te.has(l)||(te.add(l),l())}D.length=0}while(I.length);for(;ce.length;)ce.pop()();le=!1,te.clear(),x(t)}function Ue(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function je(t){const e=[],l=[];D.forEach(n=>t.indexOf(n)===-1?e.push(n):l.push(n)),l.forEach(n=>n()),D=e}const X=new Set;let A;function H(){A={r:0,c:[],p:A}}function W(){A.r||L(A.c),A=A.p}function O(t,e){t&&t.i&&(X.delete(t),t.i(e))}function U(t,e,l,n){if(t&&t.o){if(X.has(t))return;X.add(t),A.c.push(()=>{X.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}function V(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Z(t){t&&t.c()}function z(t,e,l){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,l),J(()=>{const r=t.$$.on_mount.map(ve).filter(be);t.$$.on_destroy?t.$$.on_destroy.push(...r):L(r),t.$$.on_mount=[]}),o.forEach(J)}function K(t,e){const l=t.$$;l.fragment!==null&&(je(l.after_update),L(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Te(t,e){t.$$.dirty[0]===-1&&(I.push(t),Ne(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,l,n,o,r,i=null,$=[-1]){const u=B;x(t);const f=t.$$={fragment:null,ctx:[],props:r,update:j,not_equal:o,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:ie(),dirty:$,skip_bound:!1,root:e.target||u.$$.root};i&&i(f.root);let h=!1;if(f.ctx=l?l(t,e.props||{},(a,m,...v)=>{const b=v.length?v[0]:m;return f.ctx&&o(f.ctx[a],f.ctx[a]=b)&&(!f.skip_bound&&f.bound[a]&&f.bound[a](b),h&&Te(t,a)),m}):[],f.update(),h=!0,L(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const a=Ce(e.target);f.fragment&&f.fragment.l(a),a.forEach(w)}else f.fragment&&f.fragment.c();e.intro&&O(t.$$.fragment),z(t,e.target,e.anchor),ye()}x(u)}class R{constructor(){ee(this,"$$");ee(this,"$$set")}$destroy(){K(this,1),this.$destroy=j}$on(e,l){if(!be(l))return j;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const o=n.indexOf(l);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Le);function qe(t){let e,l,n,o,r,i,$,u,f,h;return{c(){e=g("div"),l=g("h2"),l.textContent="Create User",n=C(),o=g("input"),r=C(),i=g("input"),$=C(),u=g("button"),u.textContent="Create User",N(o,"type","text"),N(o,"placeholder","Username"),N(i,"type","email"),N(i,"placeholder","Email")},m(a,m){k(a,e,m),_(e,l),_(e,n),_(e,o),S(o,t[0]),_(e,r),_(e,i),S(i,t[1]),_(e,$),_(e,u),f||(h=[E(o,"input",t[3]),E(i,"input",t[4]),E(u,"click",t[2])],f=!0)},p(a,[m]){m&1&&o.value!==a[0]&&S(o,a[0]),m&2&&i.value!==a[1]&&S(i,a[1])},i:j,o:j,d(a){a&&w(e),f=!1,L(h)}}}function Ae(t,e,l){let n="",o="";async function r(){(await fetch("http://localhost:8080/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,email:o})})).ok?alert("User created!"):alert("Failed to create user")}function i(){n=this.value,l(0,n)}function $(){o=this.value,l(1,o)}return[n,o,r,i,$]}class Fe extends R{constructor(e){super(),Q(this,e,Ae,qe,M,{})}}function Ie(t){let e,l,n,o,r,i,$,u,f,h,a,m;return{c(){e=g("div"),l=g("h2"),l.textContent="Create Poll",n=C(),o=g("input"),r=C(),i=g("input"),$=C(),u=g("input"),f=C(),h=g("button"),h.textContent="Create Poll",N(o,"type","text"),N(o,"placeholder","Poll Question"),N(i,"type","text"),N(i,"placeholder","Option 1"),N(u,"type","text"),N(u,"placeholder","Option 2")},m(v,b){k(v,e,b),_(e,l),_(e,n),_(e,o),S(o,t[0]),_(e,r),_(e,i),S(i,t[1]),_(e,$),_(e,u),S(u,t[2]),_(e,f),_(e,h),a||(m=[E(o,"input",t[4]),E(i,"input",t[5]),E(u,"input",t[6]),E(h,"click",t[3])],a=!0)},p(v,[b]){b&1&&o.value!==v[0]&&S(o,v[0]),b&2&&i.value!==v[1]&&S(i,v[1]),b&4&&u.value!==v[2]&&S(u,v[2])},i:j,o:j,d(v){v&&w(e),a=!1,L(m)}}}function Ve(t,e,l){let n="",o="",r="";async function i(){(await fetch("http://localhost:8080/polls",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:n,voteOptions:[{caption:o},{caption:r}]})})).ok?alert("Poll created!"):alert("Failed to create poll")}function $(){n=this.value,l(0,n)}function u(){o=this.value,l(1,o)}function f(){r=this.value,l(2,r)}return[n,o,r,i,$,u,f]}class De extends R{constructor(e){super(),Q(this,e,Ve,Ie,M,{})}}function ue(t,e,l){const n=t.slice();return n[9]=e[l],n}function fe(t,e,l){const n=t.slice();return n[12]=e[l],n}function ae(t){let e,l=t[12].question+"",n,o;return{c(){e=g("option"),n=Y(l),e.__value=o=t[12].id,S(e,e.__value)},m(r,i){k(r,e,i),_(e,n)},p(r,i){i&1&&l!==(l=r[12].question+"")&&oe(n,l),i&1&&o!==(o=r[12].id)&&(e.__value=o,S(e,e.__value))},d(r){r&&w(e)}}}function pe(t){let e,l=t[9].caption+"",n,o;return{c(){e=g("option"),n=Y(l),e.__value=o=t[9].id,S(e,e.__value)},m(r,i){k(r,e,i),_(e,n)},p(r,i){i&4&&l!==(l=r[9].caption+"")&&oe(n,l),i&4&&o!==(o=r[9].id)&&(e.__value=o,S(e,e.__value))},d(r){r&&w(e)}}}function xe(t){let e,l,n,o,r,i,$,u,f,h,a,m,v,b=V(t[0]),y=[];for(let s=0;s<b.length;s+=1)y[s]=ae(fe(t,b,s));let T=V(t[2]),d=[];for(let s=0;s<T.length;s+=1)d[s]=pe(ue(t,T,s));return{c(){e=g("label"),e.textContent="Select a Poll:",l=C(),n=g("select"),o=g("option"),o.textContent="Select a Poll";for(let s=0;s<y.length;s+=1)y[s].c();r=C(),i=g("label"),i.textContent="Select an Option:",$=C(),u=g("select"),f=g("option"),f.textContent="Select an Option";for(let s=0;s<d.length;s+=1)d[s].c();h=C(),a=g("button"),a.textContent="Vote",N(e,"for","polls"),o.__value="",S(o,o.__value),N(n,"id","polls"),t[1]===void 0&&J(()=>t[6].call(n)),N(i,"for","vote-options"),f.__value="",S(f,f.__value),N(u,"id","vote-options"),t[3]===void 0&&J(()=>t[8].call(u))},m(s,p){k(s,e,p),k(s,l,p),k(s,n,p),_(n,o);for(let c=0;c<y.length;c+=1)y[c]&&y[c].m(n,null);G(n,t[1],!0),k(s,r,p),k(s,i,p),k(s,$,p),k(s,u,p),_(u,f);for(let c=0;c<d.length;c+=1)d[c]&&d[c].m(u,null);G(u,t[3],!0),k(s,h,p),k(s,a,p),m||(v=[E(n,"change",t[6]),E(n,"change",t[7]),E(u,"change",t[8]),E(a,"click",t[5])],m=!0)},p(s,[p]){if(p&1){b=V(s[0]);let c;for(c=0;c<b.length;c+=1){const P=fe(s,b,c);y[c]?y[c].p(P,p):(y[c]=ae(P),y[c].c(),y[c].m(n,null))}for(;c<y.length;c+=1)y[c].d(1);y.length=b.length}if(p&3&&G(n,s[1]),p&4){T=V(s[2]);let c;for(c=0;c<T.length;c+=1){const P=ue(s,T,c);d[c]?d[c].p(P,p):(d[c]=pe(P),d[c].c(),d[c].m(u,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=T.length}p&12&&G(u,s[3])},i:j,o:j,d(s){s&&(w(e),w(l),w(n),w(r),w(i),w($),w(u),w(h),w(a)),ne(y,s),ne(d,s),m=!1,L(v)}}}let Be=1;function Je(t,e,l){let n=[],o=null,r=[],i=null;Se(async()=>{const m=await fetch("http://localhost:8080/polls");m.ok&&l(0,n=await m.json())});async function $(m){if(m){const v=await fetch(`http://localhost:8080/polls/${m}/voteOptions`);v.ok?l(2,r=await v.json()):console.error("Failed to fetch vote options:",v.statusText)}else l(2,r=[])}async function u(){try{const m=await fetch("http://localhost:8080/votes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:Be,pollId:o.id,voteOptionId:i.id})});m.ok?alert("Vote cast successfully"):console.error("Failed to cast vote:",m.statusText)}catch(m){console.error("Error casting vote:",m)}}function f(){o=re(this),l(1,o),l(0,n)}const h=()=>$(o.id);function a(){i=re(this),l(3,i),l(2,r)}return[n,o,r,i,$,u,f,h,a]}class Me extends R{constructor(e){super(),Q(this,e,Je,xe,M,{})}}function de(t,e,l){const n=t.slice();return n[2]=e[l],n}function he(t){let e,l=t[2].question+"",n;return{c(){e=g("li"),n=Y(l)},m(o,r){k(o,e,r),_(e,n)},p(o,r){r&1&&l!==(l=o[2].question+"")&&oe(n,l)},d(o){o&&w(e)}}}function ze(t){let e,l=V(t[0]),n=[];for(let o=0;o<l.length;o+=1)n[o]=he(de(t,l,o));return{c(){e=g("ul");for(let o=0;o<n.length;o+=1)n[o].c()},m(o,r){k(o,e,r);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(o,[r]){if(r&1){l=V(o[0]);let i;for(i=0;i<l.length;i+=1){const $=de(o,l,i);n[i]?n[i].p($,r):(n[i]=he($),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=l.length}},i:j,o:j,d(o){o&&w(e),ne(n,o)}}}function Ke(t,e,l){let n=[];async function o(){try{const r=await fetch("http://localhost:8080/polls");r.ok?l(0,n=await r.json()):console.error(`Failed to fetch polls: ${r.statusText}`)}catch(r){console.error(`Error fetching polls: ${r.message}`)}}return o(),[n]}class Qe extends R{constructor(e){super(),Q(this,e,Ke,ze,M,{})}}function _e(t){let e,l;return e=new Fe({}),{c(){Z(e.$$.fragment)},m(n,o){z(e,n,o),l=!0},i(n){l||(O(e.$$.fragment,n),l=!0)},o(n){U(e.$$.fragment,n),l=!1},d(n){K(e,n)}}}function me(t){let e,l;return e=new De({}),{c(){Z(e.$$.fragment)},m(n,o){z(e,n,o),l=!0},i(n){l||(O(e.$$.fragment,n),l=!0)},o(n){U(e.$$.fragment,n),l=!1},d(n){K(e,n)}}}function ge(t){let e,l;return e=new Me({}),{c(){Z(e.$$.fragment)},m(n,o){z(e,n,o),l=!0},i(n){l||(O(e.$$.fragment,n),l=!0)},o(n){U(e.$$.fragment,n),l=!1},d(n){K(e,n)}}}function $e(t){let e,l;return e=new Qe({}),{c(){Z(e.$$.fragment)},m(n,o){z(e,n,o),l=!0},i(n){l||(O(e.$$.fragment,n),l=!0)},o(n){U(e.$$.fragment,n),l=!1},d(n){K(e,n)}}}function Re(t){let e,l,n,o,r,i,$,u,f,h,a,m,v,b,y,T,d=t[0]==="createUser"&&_e(),s=t[0]==="createPoll"&&me(),p=t[0]==="vote"&&ge(),c=t[0]==="displayPolls"&&$e();return{c(){e=g("nav"),l=g("button"),l.textContent="Create User",n=C(),o=g("button"),o.textContent="Create Poll",r=C(),i=g("button"),i.textContent="Vote on Poll",$=C(),u=g("button"),u.textContent="Display Polls",f=C(),h=g("main"),d&&d.c(),a=C(),s&&s.c(),m=C(),p&&p.c(),v=C(),c&&c.c()},m(P,q){k(P,e,q),_(e,l),_(e,n),_(e,o),_(e,r),_(e,i),_(e,$),_(e,u),k(P,f,q),k(P,h,q),d&&d.m(h,null),_(h,a),s&&s.m(h,null),_(h,m),p&&p.m(h,null),_(h,v),c&&c.m(h,null),b=!0,y||(T=[E(l,"click",t[1]),E(o,"click",t[2]),E(i,"click",t[3]),E(u,"click",t[4])],y=!0)},p(P,[q]){P[0]==="createUser"?d?q&1&&O(d,1):(d=_e(),d.c(),O(d,1),d.m(h,a)):d&&(H(),U(d,1,1,()=>{d=null}),W()),P[0]==="createPoll"?s?q&1&&O(s,1):(s=me(),s.c(),O(s,1),s.m(h,m)):s&&(H(),U(s,1,1,()=>{s=null}),W()),P[0]==="vote"?p?q&1&&O(p,1):(p=ge(),p.c(),O(p,1),p.m(h,v)):p&&(H(),U(p,1,1,()=>{p=null}),W()),P[0]==="displayPolls"?c?q&1&&O(c,1):(c=$e(),c.c(),O(c,1),c.m(h,null)):c&&(H(),U(c,1,1,()=>{c=null}),W())},i(P){b||(O(d),O(s),O(p),O(c),b=!0)},o(P){U(d),U(s),U(p),U(c),b=!1},d(P){P&&(w(e),w(f),w(h)),d&&d.d(),s&&s.d(),p&&p.d(),c&&c.d(),y=!1,L(T)}}}function Ge(t,e,l){let n="home";return[n,()=>l(0,n="createUser"),()=>l(0,n="createPoll"),()=>l(0,n="vote"),()=>l(0,n="displayPolls")]}class He extends R{constructor(e){super(),Q(this,e,Ge,Re,M,{})}}new He({target:document.getElementById("app")});
