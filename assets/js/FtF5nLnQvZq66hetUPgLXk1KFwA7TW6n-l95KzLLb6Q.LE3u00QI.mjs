import{t as e}from"./rolldown-runtime.C4p97ucE.mjs";import{C as t,E as n,F as r,L as i,M as a,N as o,O as s,c,g as l,j as u,k as d,l as f,o as p,v as ee}from"./react.Bspf97ZA.mjs";import{C as m,a as te,r as ne,t as h}from"./motion.B9K4_fYS.mjs";import{$ as g,C as _,M as v,Q as re,R as y,Y as ie,Z as ae,_ as b,a as x,at as oe,b as S,ct as C,et as se,h as w,j as ce,n as le,p as ue,r as T,t as de,tt as fe,y as pe}from"./framer.Dfq1XUbq.mjs";import{i as me,n as he,r as ge,t as _e}from"./vi_z06lZo.01eftLEf.mjs";import{n as ve,r as ye}from"./QliFsaDI2.CdScVAVK.mjs";var E,D,O=e((()=>{y(),E={position:`relative`,width:`100%`,height:`100%`,display:`flex`,justifyContent:`center`,alignItems:`center`},D={...E,borderRadius:6,background:`rgba(136, 85, 255, 0.3)`,color:`#85F`,border:`1px dashed #85F`,flexDirection:`column`},T.EventHandler,T.EventHandler,T.EventHandler,T.Number,T.Boolean,T.String,T.Enum})),be=e((()=>{y(),t()})),k=e((()=>{t()})),xe=e((()=>{y()})),A=e((()=>{y()})),Se=e((()=>{t()})),Ce=e((()=>{y()})),we=e((()=>{r(),t()})),Te=e((()=>{t(),A()})),Ee=e((()=>{t(),y(),A(),k()})),De=e((()=>{y(),t(),O()}));function Oe(){return d(()=>w.current()===w.canvas,[])}var ke=e((()=>{t(),y()})),Ae=e((()=>{t()})),je=e((()=>{t(),y(),T.FusedNumber,T.FusedNumber})),Me=e((()=>{O(),be(),k(),xe(),A(),Se(),Ce(),we(),Te(),Ee(),De(),ke(),Ae(),je()})),Ne=e((()=>{Me()}));function j({type:e,url:t,html:n,zoom:r,radius:i,border:a,style:o={}}){return e===`url`&&t?c(Fe,{url:t,zoom:r,radius:i,border:a,style:o}):e===`html`&&n?c(Le,{html:n,style:o}):c(Pe,{style:o})}function Pe({style:e}){return c(`div`,{style:{minHeight:P(e),...D,overflow:`hidden`,...e},children:c(`div`,{style:L,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function Fe({url:e,zoom:t,radius:n,border:r,style:i}){let a=!i.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let s=Oe(),[l,d]=o(s?void 0:!1);return u(()=>{if(!s)return;let t=!0;d(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&d(e)}else{let e=await n.text();console.error(e),d(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),d(e)}),()=>{t=!1}},[e]),s&&a?c(N,{message:`URL embeds do not support auto height.`,style:i}):e.startsWith(`https://`)?l===void 0?c(Ve,{}):l instanceof Error?c(N,{message:l.message,style:i}):l===!0?c(N,{message:`Can’t embed ${e} due to its content security policy.`,style:i}):c(`iframe`,{src:e,style:{...F,...i,...r,zoom:t,borderRadius:n,transformOrigin:`top center`},loading:`lazy`,fetchPriority:s?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:Ie(s),allowFullScreen:!0,allow:`presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write`}):c(N,{message:`Unsupported protocol.`,style:i})}function Ie(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function Le({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return c(n||r?ze:Re,{html:e,...t})}return c(Be,{html:e,...t})}function Re({html:e,style:t}){let r=n(),[a,s]=o(0);u(()=>{let e=r.current?.contentWindow;function t(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&s(r)}return i.addEventListener(`message`,t),e?.postMessage(`getEmbedHeight`,`*`),()=>{i.removeEventListener(`message`,t)}},[]);let l=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,d={...F,...t};return t.height||(d.height=a+`px`),c(`iframe`,{ref:r,style:d,srcDoc:l})}function ze({html:e,style:t}){let r=n();return u(()=>{let t=r.current;if(t)return t.innerHTML=e,M(t),()=>{t.innerHTML=``}},[e]),c(`div`,{ref:r,style:{...I,...t}})}function Be({html:e,style:t}){return c(`div`,{style:{...I,...t},dangerouslySetInnerHTML:{__html:e}})}function M(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)M(t)}function Ve(){return c(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...E,overflow:`hidden`},children:c(`div`,{style:L,children:`Loading…`})})}function N({message:e,style:t}){return c(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:P(t),...E,overflow:`hidden`,...t},children:c(`div`,{style:L,children:e})})}function P(e){if(!e.height)return 200}var F,I,L,He=e((()=>{r(),p(),t(),y(),Ne(),S(j,{type:{type:T.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:T.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:T.String,displayTextArea:!0,hidden(e){return e.type!==`html`}},border:{title:`Border`,type:T.Border,optional:!0,hidden(e){return e.type!==`url`}},radius:{type:T.BorderRadius,title:`Radius`,hidden(e){return e.type!==`url`}},zoom:{title:`Zoom`,defaultValue:1,type:T.Number,hidden(e){return e.type!==`url`},min:.1,max:1,step:.1,displayStepper:!0}}),F={width:`100%`,height:`100%`,border:`none`},I={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},L={textAlign:`center`,minWidth:140}})),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),y(),h(),t(),He(),me(),ve(),R=C(b),z=ce(j),B=C(le),V={dWv3xOhPf:`(max-width: 809.98px)`,j5hYC5OdA:`(min-width: 1200px)`,M_uVe3oj7:`(min-width: 810px) and (max-width: 1199.98px)`},H=[],U=`framer-ZDDgw`,W={dWv3xOhPf:`framer-v-vhyu5y`,j5hYC5OdA:`framer-v-grsp9l`,M_uVe3oj7:`framer-v-1rtomrx`},G=(e,t,n)=>e&&t?`position`:n,K={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{bounce:.2,delay:1,duration:.8,type:`spring`},x:0,y:0},q={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:20},J={Desktop:`j5hYC5OdA`,Phone:`dWv3xOhPf`,Tablet:`M_uVe3oj7`},Y=({value:e})=>g()?null:c(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),X=({height:e,id:t,width:n,...r})=>({...r,variant:J[r.variant]??r.variant??`j5hYC5OdA`}),Z=oe(l(function(e,t){let r=n(null),i=t??r,o=ee(),{activeLocale:l,setLocale:u}=se();ie();let{style:p,className:h,layoutId:g,variant:v,...y}=X(e);fe(d(()=>ye({},l),[l]));let[b,oe]=re(v,V,!1),S=_(U,_e),C=s(x)?.isLayoutTemplate,w=G(C,!!s(te)?.transition?.layout);return ae({}),c(x.Provider,{value:{activeVariantId:b,humanReadableVariantMap:J,primaryVariantId:`j5hYC5OdA`,variantClassNames:W},children:f(ne,{id:g??o,children:[c(Y,{value:`html body { background: rgb(249, 249, 249); }`}),c(m.div,{...y,className:_(S,`framer-grsp9l`,h),ref:i,style:{...p},children:f(m.div,{className:`framer-lmohhp`,layout:w,children:[c(ue,{breakpoint:b,overrides:{dWv3xOhPf:{children:c(a,{children:c(`h1`,{className:`framer-styles-preset-1ias46d`,"data-styles-preset":`vi_z06lZo`,dir:`auto`,style:{"--framer-text-alignment":`center`},children:`Let's get you live in 14 days`})})}},children:c(R,{__fromCanvasComponent:!0,animate:K,children:c(a,{children:c(`h1`,{className:`framer-styles-preset-1ias46d`,"data-styles-preset":`vi_z06lZo`,dir:`auto`,children:`Let's get you live in 14 days`})}),className:`framer-1e4orjd`,"data-framer-appear-id":`1e4orjd`,fonts:[`Inter`],initial:q,optimized:!0,verticalAlignment:`top`,withExternalLayout:!0})}),c(de,{children:c(B,{animate:K,className:`framer-3fywsy-container`,"data-framer-appear-id":`3fywsy`,initial:q,isAuthoredByUser:!0,isModuleExternal:!0,nodeId:`oYoZF1Iz8`,optimized:!0,rendersWithMotion:!0,scopeId:`QliFsaDI2`,children:c(j,{height:`100%`,html:`<!-- Cal inline embed code begins -->
<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline-sprint-call"></div>
<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "sprint-call", {origin:"https://app.cal.com"});

  Cal.ns["sprint-call"]("inline", {
    elementOrSelector:"#my-cal-inline-sprint-call",
    config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"},
    calLink: "michaelkirk/sprint-call",
  });

  Cal.ns["sprint-call"]("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#111214"}},"hideEventTypeDetails":false,"layout":"month_view"});
  <\/script>
  <!-- Cal inline embed code ends -->`,id:`oYoZF1Iz8`,layoutId:`oYoZF1Iz8`,radius:`0px`,style:{width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})]})}),c(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-ZDDgw.framer-12wkoxz, .framer-ZDDgw .framer-12wkoxz { display: block; }`,`.framer-ZDDgw.framer-grsp9l { align-content: center; align-items: center; background-color: #f9f9f9; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-ZDDgw .framer-lmohhp { align-content: center; align-items: center; background-color: var(--token-28d21c18-0fa7-4a39-8727-636fc79ae338, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1080px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 32px 100px 32px; position: relative; width: 100%; }`,`.framer-ZDDgw .framer-1e4orjd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,`.framer-ZDDgw .framer-3fywsy-container { flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,...he,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ZDDgw.framer-grsp9l { width: 810px; }}`,`@media (max-width: 809.98px) { .framer-ZDDgw.framer-grsp9l { width: 390px; } .framer-ZDDgw .framer-1e4orjd { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }}`],`framer-ZDDgw`),Q=Z,Z.displayName=`Page`,Z.defaultProps={height:1e3,width:1200},pe(Z,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`assets/fonts/inter-regular-1.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`assets/fonts/inter-regular-2.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`assets/fonts/inter-regular-3.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`assets/fonts/inter-regular-4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`assets/fonts/inter-regular-5.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`assets/fonts/inter-regular-6.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`assets/fonts/inter-regular-7.woff2`,weight:`400`}]},...z,...v(ge)],{supportsExplicitInterCodegen:!0}),$={exports:{default:{type:`reactComponent`,name:`FramerQliFsaDI2`,slots:[],annotations:{framerScrollSections:`false`,framerIntrinsicHeight:`1000`,framerDisplayContentsDiv:`false`,framerImmutableVariables:`true`,framerResponsiveScreen:`true`,framerLayoutTemplateFlowEffect:`true`,framerAutoSizeImages:`true`,framerContractVersion:`1`,framerIntrinsicWidth:`1200`,framerAcceptsLayoutTemplate:`true`,framerComponentViewportWidth:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"M_uVe3oj7":{"layout":["fixed","fixed"]},"dWv3xOhPf":{"layout":["fixed","fixed"]}}}`,framerColorSyntax:`true`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{$ as __FramerMetadata__,Q as default,H as queryParamNames};
//# sourceMappingURL=FtF5nLnQvZq66hetUPgLXk1KFwA7TW6n-l95KzLLb6Q.LE3u00QI.mjs.map