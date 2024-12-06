import{r as i,j as e}from"./jsx-runtime-d4vcKfGz.js";import{l as h,n as y,o as x,p as S,_ as g,M as w,L as f,O as j,S as k}from"./components-0D8jGJiv.js";/**
 * @remix-run/react v2.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:r,...l}){let{isSpaMode:c}=h(),n=y(),u=x();S({getKey:r,storageKey:a});let m=i.useMemo(()=>{if(!r)return null;let t=r(n,u);return t!==n.key?t:null},[]);if(c)return null;let p=((t,d)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let o=JSON.parse(sessionStorage.getItem(t)||"{}")[d||window.history.state.key];typeof o=="number"&&window.scrollTo(0,o)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return i.createElement("script",g({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(a)}, ${JSON.stringify(m)})`}}))}const R=()=>[{rel:"stylesheet",href:"/app/styles/tailwind.css"}],_=()=>[{title:"Something Amazing is Coming"},{name:"description",content:"We're working on something extraordinary"}];function v(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(w,{}),e.jsx(f,{})]}),e.jsxs("body",{suppressHydrationWarning:!0,children:[e.jsx(j,{}),e.jsx(M,{}),e.jsx(k,{})]})]})}export{v as default,R as links,_ as meta};
