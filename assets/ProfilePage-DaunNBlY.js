import{c as g,j as e,r as v,T as l,u as h,a as x,b as y,B as p,d as u,e as R,f as A,g as f,i as j,P as V,L as W,h as O,k as z,G as i,l as b,m as k}from"./index-DViG8mta.js";import{C as E}from"./Contact-Dm7gdNl5.js";import{u as S,c as q,a as B}from"./useData-D85CeD0W.js";import{u as F}from"./useMediaQuery-DAjf2IOO.js";import{C as N,L as Y}from"./Link-QBGjzJxx.js";import{C as G}from"./react-three-fiber.esm-BlRr3uRO.js";import{u as Q}from"./Gltf-Bc1sesdo.js";import{C as U}from"./CanvasWrapper-DjmGaqxV.js";import{O as J}from"./OrbitControls-BCZxL38a.js";import{A as K}from"./Avatar-DD0tZ3vX.js";import"./index-C0cY8Bzn.js";const X=g(e.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Z=g(e.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarHalf"),ee=g(e.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarOutline"),te="/Portfolio-ubb/assets/adrianek-SlMzUNIV.jpg";function re({text:t,delay:r=200,...a}){const[n,o]=v.useState("");function c(s,m){return m/s.length}return v.useEffect(()=>{let s=0;const m=setInterval(()=>{o(t.slice(0,s)),s++,s>t.length&&clearInterval(m)},c(t,r));return()=>{clearTimeout(m)}},[t,r]),e.jsx(l,{...a,children:n})}function ae(){const{badgesData:t}=S(),r=h(),a=F(r.breakpoints.down("sm")),n=x(t.length,{from:{opacity:0,transform:"translateY(20px)"},to:{opacity:1,transform:"translateY(0)"},config:y.wobbly,delay:200});return e.jsx(p,{component:"div",display:"flex",flexWrap:"wrap",gap:2,justifyContent:"center",sx:{padding:2,background:r.palette.background.paper,borderRadius:4,boxShadow:r.shadows[2]},children:n.map((o,c)=>e.jsx(u.div,{style:{width:a?"100%":"auto",...o},children:e.jsx(se,{...t[c]})},c))})}function ne({data:t}){const r=h(),a=parseInt(t.level.replace("%",""),10),n=Math.floor(a/20),o=a%20>=10?1:0,c=5-n-o,s=x(5,{from:{scale:0},to:{scale:1},config:y.stiff});return e.jsxs(p,{component:"div",display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsxs(p,{component:"div",display:"flex",alignItems:"center",mb:1,children:[[...Array(n)].map((m,d)=>e.jsx(u.div,{style:s[d],children:e.jsx(X,{fontSize:"small",sx:{color:r.palette.warning.main}})},`full-${d}`)),[...Array(o)].map((m,d)=>e.jsx(u.div,{style:s[n+d],children:e.jsx(Z,{fontSize:"small",sx:{color:r.palette.warning.main}})},`half-${d}`)),[...Array(c)].map((m,d)=>e.jsx(u.div,{style:s[n+o+d],children:e.jsx(ee,{fontSize:"small",sx:{color:r.palette.text.disabled}})},`empty-${d}`))]}),e.jsx(p,{component:"div",width:"100%",height:1.6,bgcolor:r.palette.primary.main,mb:.8}),e.jsx(l,{variant:"subtitle2",fontWeight:"bold",sx:{color:r.palette.getContrastText(r.palette.background.paper),textTransform:"uppercase",letterSpacing:1},children:t.name})]})}function se(t){const r=h(),[a,n]=v.useState(!1),o=R({transform:a?"scale(1.05) rotate(1deg)":"scale(1) rotate(0deg)",boxShadow:a?r.shadows[6]:r.shadows[2],config:y.gentle});return e.jsx(A,{title:`Proficiency: ${t.level}`,arrow:!0,children:e.jsx(u.div,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),style:o,children:e.jsx(N,{label:e.jsx(ne,{data:t}),variant:"filled",sx:{borderRadius:4,border:`2px solid ${r.palette.primary.main}`,background:`linear-gradient(145deg, ${r.palette.background.paper} 0%, ${r.palette.action.hover} 100%)`,transition:"all 0.3s ease",padding:"2rem",width:"100%","& .MuiChip-label":{padding:"0 1rem"}}})})})}var _={},ie=j;Object.defineProperty(_,"__esModule",{value:!0});var $=_.default=void 0,oe=ie(f()),M=e;$=_.default=(0,oe.default)([(0,M.jsx)("path",{d:"M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7m-8-7h4v2h-4z"},"0"),(0,M.jsx)("path",{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85z"},"1")],"WorkHistory");var w={},le=j;Object.defineProperty(w,"__esModule",{value:!0});var I=w.default=void 0,ce=le(f()),de=e;I=w.default=(0,ce.default)((0,de.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn");var L={},me=j;Object.defineProperty(L,"__esModule",{value:!0});var T=L.default=void 0,ue=me(f()),he=e;T=L.default=(0,ue.default)((0,he.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"}),"CalendarMonth");function P({summary:t,style:r}){const a=h();return e.jsx(u.div,{style:r,children:e.jsx(V,{elevation:2,sx:{mb:1,p:.5},children:e.jsxs(W,{children:[e.jsx(O,{children:t.type==="experience"?e.jsx($,{color:"primary"}):e.jsx(z,{color:"primary"})}),e.jsxs(i,{children:[e.jsx(l,{variant:"h6",component:"h3",fontWeight:"600",color:a.palette.primary.main,children:t.title}),e.jsx(Y,{href:t.link,target:"_blank",rel:"noopener",children:e.jsx(l,{variant:"body1",component:"span",color:a.palette.text.secondary,children:t.subtitle})}),e.jsxs("div",{children:[e.jsx(T,{fontSize:"small",sx:{verticalAlign:"middle",mr:.5}}),e.jsx(l,{color:a.palette.primary.light,variant:"body1",component:"span",children:t.date})]}),e.jsxs("div",{style:{marginTop:a.spacing(.2)},children:[e.jsx(I,{fontSize:"small",sx:{verticalAlign:"middle",mr:.5}}),e.jsx(l,{variant:"body1",component:"span",children:t.location})]})]})]})})})}const D={from:{opacity:0,transform:"translateY(3rem)"},to:{opacity:1,transform:"translateY(0)"},config:{tension:300,friction:30}},pe={...D,delay:400};function xe(){const{educationData:t}=S(),r=x(t.length,pe),a=t.map(q),{t:n}=b();return e.jsxs(e.Fragment,{children:[e.jsxs(i,{container:!0,alignItems:"center",gap:1,children:[e.jsx(z,{color:"primary"}),e.jsx(l,{variant:"h4",sx:{fontWeight:700},children:n("education")})]}),e.jsx(k,{children:r.map((o,c)=>{const s=a[c];return e.jsx(P,{summary:s,style:o},s.title)})})]})}var C={},fe=j;Object.defineProperty(C,"__esModule",{value:!0});var H=C.default=void 0,je=fe(f()),ve=e;H=C.default=(0,je.default)((0,ve.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"Work");const ge={...D,delay:200};function ye(){const{experiences:t}=S(),r=x(t.length,ge),a=t.map(B),{t:n}=b();return e.jsxs(e.Fragment,{children:[e.jsxs(i,{container:!0,alignItems:"center",gap:1,children:[e.jsx(H,{color:"primary"}),e.jsx(l,{variant:"h4",sx:{fontWeight:700},children:n("experience")})]}),e.jsx(k,{children:r.map((o,c)=>{const s=a[c];return e.jsx(P,{summary:s,style:o},s.title)})})]})}const be="/Portfolio-ubb/adrianek_model.glb";function Se({...t}){const{nodes:r}=Q(be);return e.jsx("group",{...t,dispose:null,children:e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:r.mesh_0.geometry,material:r.mesh_0.material})})}function _e({containerProps:t,canvasProps:r}){return e.jsx(U,{...t,children:e.jsxs(G,{style:{position:"absolute",top:0,left:0},...r,children:[e.jsx("ambientLight",{intensity:1}),e.jsx(J,{}),e.jsx(Se,{scale:5})]})})}function He(){const t=h(),{t:r}=b();return e.jsxs(i,{container:!0,gap:3,children:[e.jsxs(i,{container:!0,item:!0,alignItems:"center",gap:3,children:[e.jsx(K,{sx:{width:t.spacing(12),height:t.spacing(12),boxShadow:t.shadows[4]},alt:r("authorName"),src:te}),e.jsxs(i,{item:!0,children:[e.jsx(l,{variant:"h4",fontWeight:700,children:r("authorName")}),e.jsx(l,{variant:"h6",color:"text.secondary",children:r("softwareDeveloper")})]})]}),e.jsx(i,{item:!0,xs:12,sx:{backgroundColor:t.palette.primary.dark,p:2,borderRadius:2,boxShadow:t.shadows[2]},children:e.jsx(re,{text:r("profileDescription"),color:"text.primary"})}),e.jsxs(i,{container:!0,item:!0,spacing:2,xs:12,children:[e.jsx(i,{item:!0,xs:12,md:6,children:e.jsx(ye,{})}),e.jsx(i,{item:!0,xs:12,md:6,children:e.jsx(xe,{})})]}),e.jsx(i,{item:!0,xs:12,children:e.jsx(l,{variant:"h4",textAlign:"center",sx:{fontWeight:700},color:"secondary",children:r("comercialExperience")})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(ae,{})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(E,{})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(_e,{containerProps:{style:{height:400}}})})]})}export{He as default};
