import{ac as d,d as p,k as l,j as e,G as i,T as a,r as c,u}from"./index-Z4hmC4Rg.js";import{C as h,a as j}from"./CardHeader-Bo71XeJS.js";import{U as g}from"./ubb-BdaF8BZi.js";import{u as x,C as b}from"./react-three-fiber.esm-DeZoR0rv.js";import{u as y}from"./useGLTF-BJLYd4pW.js";import{E as f}from"./Environment-C5oTgFCw.js";import{O as v}from"./OrbitControls-DbNXsZ4D.js";const S=d("div")(({theme:t})=>({marginTop:t.spacing(2),marginBottom:t.spacing(2),backgroundColor:t.palette.secondary.dark,padding:t.spacing(1),borderRadius:5}));function w({education:t}){const r=p(),{t:s}=l(),n=new Date().getFullYear();return e.jsx(i,{item:!0,xs:12,md:6,flexWrap:"wrap",children:e.jsx("a",{href:t.url,children:e.jsxs(h,{children:[e.jsx(j,{title:t.schoolName}),e.jsx(i,{display:"flex",justifyContent:"center",children:e.jsx("img",{style:{borderRadius:5},width:r.spacing(20),height:r.spacing(20),src:t.image})}),e.jsxs(i,{sx:{padding:2},children:[e.jsxs(i,{children:[e.jsxs(a,{variant:"subtitle2",component:"span",children:[s("universitySpecialization"),": "]}),e.jsx(a,{variant:"subtitle2",color:r.palette.primary.main,component:"span",children:t.specialization})]}),e.jsx(S,{children:t.description}),e.jsxs(i,{container:!0,alignItems:"center",gap:1,children:[e.jsxs(a,{variant:"subtitle2",color:r.palette.text.disabled,component:"span",children:[t.start," - ",t.end]}),+t.end>=n&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{backgroundColor:r.palette.primary.main},className:"pulse"}),e.jsx(a,{variant:"caption",color:r.palette.primary.main,component:"span",children:s("now")})]})]})]})]})})})}function C({educationList:t}){return e.jsx(i,{container:!0,spacing:3,children:t.map((r,s)=>e.jsx(w,{education:r},s))})}const G="/Portfolio-ubb/assets/zseeim-CI_NA-DA.jpg",E="/Portfolio-ubb/school_building.glb";function O(){const{nodes:t,materials:r}=y(E),s=c.useRef(null);return x(()=>{s.current!==null&&(s.current.rotation.y+=.005)}),e.jsx("group",{ref:s,dispose:null,children:e.jsxs("group",{rotation:[-Math.PI/2,0,0],scale:.1,children:[e.jsx("mesh",{geometry:t.Object_2.geometry,material:r.lambert21SG}),e.jsx("mesh",{geometry:t.Object_3.geometry,material:r.lambert25SG}),e.jsx("mesh",{geometry:t.Object_4.geometry,material:r.lambert35SG}),e.jsx("mesh",{geometry:t.Object_5.geometry,material:r.lambert38SG}),e.jsx("mesh",{geometry:t.Object_6.geometry,material:r.lambert42SG}),e.jsx("mesh",{geometry:t.Object_7.geometry,material:r.lambert44SG}),e.jsx("mesh",{geometry:t.Object_8.geometry,material:r.lambert47SG}),e.jsx("mesh",{geometry:t.Object_9.geometry,material:r.lambert48SG}),e.jsx("mesh",{geometry:t.Object_10.geometry,material:r.lambert51SG})]})})}function _(){return e.jsxs(b,{camera:{position:[0,0,1]},children:[e.jsx("ambientLight",{intensity:1}),e.jsx(f,{preset:"sunset",background:!0}),e.jsx(v,{}),e.jsx("group",{position:[0,-80,0],children:e.jsx(O,{})})]})}function F(){const{t}=l(),{getViewWidth:r}=u(),[s,n]=c.useState(0),m=[{schoolName:t("technicalSchool"),specialization:t("mechatronics"),start:"2016",end:"2020",image:G,url:"https://zseeim.edu.pl/",description:t("technicalSchoolDescription")},{schoolName:t("university"),specialization:t("softwareDeveloper"),start:"2021",end:"2025",image:g,url:"https://ubb.edu.pl/",description:t("universityDescription")}];function o(){n(r())}return c.useEffect(()=>(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,children:e.jsx(C,{educationList:m})}),e.jsx(i,{item:!0,xs:12,width:s,height:600,children:e.jsx(_,{})})]})}export{F as default};
