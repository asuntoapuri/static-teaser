const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/lottie-CjHvD-B5.js","assets/jsx-runtime-d4vcKfGz.js"])))=>i.map(i=>d[i]);
import{r as d,j as s}from"./jsx-runtime-d4vcKfGz.js";const y="modulepreload",j=function(n){return"/"+n},f={},v=function(l,r,i){let c=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),t=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.allSettled(r.map(a=>{if(a=j(a),a in f)return;f[a]=!0;const u=a.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const o=document.createElement("link");if(o.rel=u?"stylesheet":y,u||(o.as="script"),o.crossOrigin="",o.href=a,t&&o.setAttribute("nonce",t),document.head.appendChild(o),u)return new Promise((x,p)=>{o.addEventListener("load",x),o.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}function m(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return c.then(e=>{for(const t of e||[])t.status==="rejected"&&m(t.reason);return l().catch(m)})};function E(){const[n,l]=d.useState(!1);return d.useEffect(()=>{l(!0)},[]),n}function w(){const n=d.useRef(null),l=E();return d.useEffect(()=>{let r=null;async function i(){if(n.current&&l)try{r=(await v(()=>import("./lottie-CjHvD-B5.js").then(e=>e.l),__vite__mapDeps([0,1]))).default.loadAnimation({container:n.current,renderer:"svg",loop:!0,autoplay:!0,path:"/animations/lottie/beaver.json"})}catch(c){console.error("Error loading Lottie:",c)}}return i(),()=>{r&&r.destroy()}},[l]),s.jsx("main",{className:"min-h-screen flex flex-col items-center justify-center p-8",children:s.jsxs("div",{className:"max-w-2xl mx-auto text-center",children:[s.jsx("div",{ref:n,className:"w-64 h-64 mx-auto mb-8"}),s.jsx("h1",{className:"text-4xl font-bold text-blue-600 mb-6",children:"Jotain Upeaa on Tulossa"}),s.jsx("p",{className:"text-xl text-blue-900 mb-8",children:"Asuntoapuri helpottaa asuntolainojen kilpailutusta ja kodin etsimistä. Pian saat parhaat lainatarjoukset ja unelmakotisi yhdellä vaivattomalla ratkaisulla!"}),s.jsx("div",{className:"flex justify-center gap-2",children:[...Array(3)].map((r,i)=>s.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-400 animate-pulse",style:{animationDelay:`${i*200}ms`}},i))})]})})}export{w as default};
