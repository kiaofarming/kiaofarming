import{d as he,f as _e,s as be,e as Ce,b,u as we,l as ke,g as Le,o as c,h as r,i,n as m,k as n,w as a,a as s,j as h,F as D,m as Y,A as I,R as G,G as Be,T as P,p as j,y as C,M as U,c as F,t as k}from"./index-eea4f49e.js";import{_ as X,a as q}from"./delete-3bc6e9da.js";import{_ as J}from"./edit-ad45d112.js";import{D as Ie}from"./DiagnosisPlantContentModal-639b0a13.js";import{e as Re}from"./editorStore-1eb901a4.js";import{r as Qe}from"./StarIcon-6e02cea4.js";import"./prevent.model-62ed6d79.js";import"./viewerStore-51c51fde.js";const Ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB7ZLBCYAwDEV/xAE6Qh3B/Q+OoiN0g9hIBC/mg+bYB20vn/5AHkBQ1d0O/qIOy01IYnzEme3qS9n6U6NgoEATkdUCxV35ylUgj8b60nhPsgQTNTCGkMkeEQ5k4J4VljsBvaBwJ8U2+dMAAAAASUVORK5CYII=",Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7ZK7UQMxEIZ3JZ+HAGbEQAEHJIS4AzqAEugAqADcgV0B0IFdgd0BR0bgQGQEDCM8BDdnS8vqsM0dZwtfjP9Er91vXwL4d8J1DdWxil0mrgDxLL8gMgSQkHMPn9oMawG3D/dvBNLtqndh7a7RxuR7qA/zjv3ZmivlAhbwEGznaO+iDKMuZ3PgrO2s8mlAQEh0yT2bHfDaohjy7lEAxgUzk2qjK0AVK2WlPGdITA4TCXboEE9m5LaHSecGfFDFoETQW56hhwHc+YxQAjiQ8x6ZbNq8b8qsAvOauKhdPP/00FofyRTe1DyDSE4401KZizak+lUvBeZj59IqPkBP3IbTX9fGw8ajt8pwSlMej947QogWb/tc/ktuIFzCgeIFiKib2ai1DPadQED8bQYSbRsaWxrS1Feh4Q81YA2Z53KfQgp+bAT3YadSQQ0FgQSiN4EogY1C+gKpr4xGc/6hfAAAAABJRU5ErkJggg==",De="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHKSURBVHgB3VTBMgNBEO3pCUElMYmocrPEwZEbt9xc4w/4AnwB+QLc3PAF1hfYT8hRlcIeKRWZCsqK3Rk9K2R3EykpLryqrZrqnnn9Xlf3Avx55EoTjUHus35JYQmhOG9ogHUdBO6jKx0YlDAzW9htHyUytml4I+nT5mW9Yg5ZS1Q4gCNdKfsSivkpS7VaJ8DYQjJnlDKthQKYRmCV5lV9JnknlQzI8xs3VyoI6PKiqzylHPXKrzFk11XogW7LVrGMXJ9Fa5DaKqZ8W70ixZn1EccgCBV6ZMxzpdtTYQr8mlJ4TKUkItrg+zXTp1wpb0fIDETA2QkCsiGAPSINCXmS0JOeNyzSJIqB0noFEA/S+dEXhdwmO2sxexol9XG51Xg+7wiKlqQxCTiv0MPDWD8Y2/Z9f3GIc4di5c4L1dXrmEI+mZ1HpZYMN5FMRVIjZH9BUy9jKsnFcGHsNj0+ZrXku0qMEj5d3NWaV/c7CnErWfldmW+O+59BDZInZH25KdnSxFncXjiHDg+CVdqea+PCzOXDZf0oUbgbmdniNjKVb6c3Ykmtt0Jfmlm0NZvwHZhtiShdox+Ejnw2/ARGbW6usAO/hcxcsQz/Cm9yjJ/7V81KNgAAAABJRU5ErkJggg==",Ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEnSURBVHgB7VNRTsMwDLWb/cGmqAOJP6IVpH32COUm2wm4ApwAOMF6BHYCyj02LQegUoB9TLSNcSqKpolmfMDHtD3Jqv3sPMepDLAXOLo8jbtR/8n5nW3FUklpg2DkXBd/WJuutNHrNYGlO4F463zcJtgbhPeAeL1GGSB6IET9Ps/ThjxWMvmdYNRPiYAEwrOLLcCkyb3N8/q8HEpFhUiJm3V8o5YAMRedI1BWVlbX4wkBzI0JK93UlitQS50n3hv2onCBBK88rvkp7xpZrMbLmcnqKTjmJ7hqu53it1uAB5y/cfZ95uIkcd/2v4wou4Nw4tGM2aZNYGYvmV+QmyLiCHwgmm5SAfwxDoL/J2i+zAu3z5tc66bI4ZmCokja8hU35M14hJ3DJw/bX2K1nvCgAAAAAElFTkSuQmCC",Ge={class:"main-filter-bg grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7"},Pe=s("img",{class:"h-4 w-4 mx-1","aria-hidden":"true",src:Ee,width:"6",alt:""},null,-1),je=s("img",{src:Se,alt:"",class:"w-5 h-5"},null,-1),Ue=s("p",{class:"ml-2 text-sm"},"作物",-1),Te=[je,Ue],Ne=s("img",{src:De,alt:"",class:"w-5 h-5"},null,-1),Ke=s("p",{class:"ml-2 text-sm"},"病蟲害",-1),Ze=[Ne,Ke],We=s("img",{src:Ye,alt:"",class:"w-5 h-5"},null,-1),ze=s("p",{class:"ml-2 text-sm"},"資材",-1),Fe=[We,ze],Xe={class:"mx-6 my-5 grid grid-cols-1 shadow rounded-3xl bg-white"},qe={class:"mx-4 my-3 space-y-4"},Je=s("p",{class:"text-lg font-semibold"},"搜尋結果",-1),Ve={class:"relative flex items-start"},Oe={class:"flex h-6 items-center"},He=["checked"],Me=s("div",{class:"ml-3 text-base leading-6"},[s("label",{for:"comments",class:"font-normal text-gray-900"},"作物")],-1),$e={class:"relative flex items-start"},es={class:"flex h-6 items-center"},ss=["checked"],ts=s("div",{class:"ml-3 text-base leading-6"},[s("label",{for:"candidates",class:"font-normal text-gray-900"},"病蟲害")],-1),ls={class:"relative flex items-start"},is={class:"flex h-6 items-center"},os=["checked"],as=s("div",{class:"ml-3 text-base leading-6"},[s("label",{for:"offers",class:"font-normal text-gray-900"},"防治資材")],-1),cs={key:0},ns=s("p",{class:"text-3xl font-semibold text-gray-900"},"作物",-1),rs=s("img",{src:X,alt:"",class:"w-9 h-9"},null,-1),As=["onClick"],ds=s("img",{src:J,alt:"",class:"w-5 h-5"},null,-1),us=s("p",{class:"ml-2 text-sm"},"編輯",-1),gs=[ds,us],ms=["onClick"],fs=s("img",{src:q,alt:"",class:"w-5 h-5"},null,-1),vs=s("p",{class:"ml-2 text-sm"},"刪除",-1),ys=[fs,vs],xs=["onClick"],ps=["src"],hs=["onClick"],_s={class:"pointer-events-none mt-2 block truncate text-lg font-medium text-gray-900"},bs=["onClick"],Cs=s("p",{class:"mt-0.5 mr-2 block text-sm text-gray-500"},"容易種植",-1),ws=["onClick"],ks={class:"px-1 py-0.5 rounded-full bg-gray-300 text-center text-xs text-gray-700",disabled:"true"},Ls={key:1,class:"mt-5"},Bs=s("p",{class:"text-3xl font-semibold text-gray-900"},"病蟲害",-1),Is={class:"relative"},Rs={class:"overflow-hidden prevention-card hover:shadow-xl"},Qs={class:"flex items-end p-2","aria-hidden":"true"},Es={class:"flex flex-1"},Ss={class:"mt-2 w-11/12 flex flex-row items-center"},Ds=["onClick"],Ys=["onClick"],Gs=["onClick"],Ps={class:"flex justify-end"},js=s("img",{src:X,alt:"",class:"w-9 h-9"},null,-1),Us=["onClick"],Ts=s("img",{src:J,alt:"",class:"w-5 h-5"},null,-1),Ns=s("p",{class:"ml-2 text-sm"},"編輯",-1),Ks=[Ts,Ns],Zs=["onClick"],Ws=s("img",{src:q,alt:"",class:"w-5 h-5"},null,-1),zs=s("p",{class:"ml-2 text-sm"},"刪除",-1),Fs=[Ws,zs],Xs=["onClick"],qs=["src"],Js=["src"],Vs={class:"flex -mt-8 h-8"},Os={key:0,class:"ml-3 mb-2 px-1.5 py-0.5 rounded-full text-left text-xs bugfeature-bg"},Hs={key:1,class:"ml-3 mb-2 px-1.5 py-0.5 rounded-full text-left text-xs bugfeature-bg"},Ms={key:2,class:"mt-5"},$s=s("p",{class:"text-3xl font-semibold text-gray-900"},"資材",-1),et={class:"relative"},st={class:"overflow-hidden prevention-card hover:shadow-xl"},tt={class:"flex items-end p-1","aria-hidden":"true"},lt={class:"flex flex-1"},it=["onClick"],ot={class:"mt-1 mx-3 text-lg font-semibold text-left text-gray-900"},at={class:"mt-1 mx-3 text-xs text-gray-700"},ct={class:"flex justify-end"},nt=s("img",{src:X,alt:"",class:"w-9 h-9"},null,-1),rt=["onClick"],At=s("img",{src:J,alt:"",class:"w-5 h-5"},null,-1),dt=s("p",{class:"ml-2 text-sm"},"編輯",-1),ut=[At,dt],gt=["onClick"],mt=s("img",{src:q,alt:"",class:"w-5 h-5"},null,-1),ft=s("p",{class:"ml-2 text-sm"},"刪除",-1),vt=[mt,ft],yt=["onClick"],xt=["src"],pt=["src"],Rt=he({__name:"PreventMainView",setup(ht){const te=_e(),{selectedAccount:x}=be(te),v=Ce(),o=b([]),V=[];v.query.type&&(console.log(v.query),V.push(v.query.type),o.value=V);const _=we(),L=ke(),T=Re(),N=b([]),R=b([]),K=b([]),Z=b([]),d=b(),O=b(),W=b(!1),Q=b(new URL("data:image/png;base64,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",self.location).href),le=e=>{switch(e.class){case"葉菜":return"vegetableLeaves-card-bg vegetableLeaves-card-hover";case"花果菜":return"cauliflower-card-bg cauliflower-card-hover";case"根莖菜":return"rootVegetables-card-bg rootVegetables-card-hover";case"香辛料":return"spices-card-bg spices-card-hover";case"香藥草":return"fragrantHerbs-card-bg fragrantHerbs-card-hover";case"食用花卉":return"dinnerPlateFlowers-card-bg dinnerPlateFlowers-card-hover";case"五穀雜糧":return"wholeGrains-card-bg wholeGrains-card-hover";case"觀葉植物":return"foliagePlants-card-bg foliagePlants-card-hover";case"觀花植物":return"ornamentalPlants-card-bg ornamentalPlants-card-hover";default:return"vegetableLeaves-card-bg vegetableLeaves-card-hover"}};function ie(e){let t="";return(e!=null&&e.includes(3)||e!=null&&e.includes(4)||e!=null&&e.includes(5))&&(t=t+"春"),(e!=null&&e.includes(6)||e!=null&&e.includes(7)||e!=null&&e.includes(8))&&(t=t+"夏"),(e!=null&&e.includes(9)||e!=null&&e.includes(10)||e!=null&&e.includes(11))&&(t=t+"秋"),(e!=null&&e.includes(12)||e!=null&&e.includes(1)||e!=null&&e.includes(2))&&(t=t+"冬"),t=="春夏秋冬"&&(t="全年"),t}function E(e){_.push({name:"vegetable-recommendation",params:{id:e.id}})}function S(e){_.push({name:"bug-information",params:{id:e.id,type:e.type}})}function H(e){console.log(e),O.value=e,W.value=!0}function oe(){W.value=!1}function ae(){L.getDataList(I.GET_LIST_TYPE_PLANTS,0).subscribe(e=>{N.value=e})}function ce(){let e=[];L.getDataList(I.GET_LIST_TYPE_PESTS,0).subscribe(t=>{L.getDataList(I.GET_LIST_TYPE_DISEASES,0).subscribe(A=>{console.log(A),e=[...t,...A],R.value=e,M()})})}function ne(e){console.log(e);for(let t=0;t<Z.value.length;t++){const A=Z.value[t];if(e.type==A.id)return A.name}return""}function M(){L.getDataList(I.GET_LIST_TYPE_MATERIALS,0).subscribe(e=>{K.value=e})}function re(){L.getClassList(I.CLASS_TYPE_CONTROL_MATERIAL_TYPE).subscribe(e=>{Z.value=e})}function $(e){L.getSearchList(e).subscribe(t=>{var A,w;if(console.log(t),d.value=t,d.value){if(((A=d.value)==null?void 0:A.plants.length)!=0&&(o.value.push("plants"),N.value=d.value.plants),d.value.pests.length!=0||d.value.diseases.length!=0){o.value.push("pests");for(let f=0;f<d.value.pests.length;f++)d.value.pests[f].type="pests";for(let f=0;f<d.value.diseases.length;f++)d.value.diseases[f].type="diseases";let p=[];d.value.pests.length!=0&&(console.log(d.value.pests.length),p=[...p,...d.value.pests]),d.value.diseases.length!=0&&(console.log(d.value.diseases.length),p=[...p,...d.value.diseases]),console.log(p),R.value=p,console.log(R.value)}((w=d.value)==null?void 0:w.materials.length)!=0&&(o.value.push("materials"),K.value=d.value.materials)}})}function z(e){if(e=="plants")if(o.value.includes("plants")){let t=o.value;t=t.filter(A=>!A.includes("plants")),o.value=t}else{let t=o.value;t.push("plants"),o.value=t}else if(e=="pests")if(o.value.includes("pests")){let t=o.value;t=t.filter(A=>!A.includes("pests")),o.value=t}else{let t=o.value;t.push("pests"),o.value=t}else if(o.value.includes("materials")){let t=o.value;t=t.filter(A=>!A.includes("materials")),o.value=t}else{let t=o.value;t.push("materials"),o.value=t}B()}function B(){o.value.includes("plants")&&ae(),o.value.includes("pests")&&ce(),o.value.includes("materials")&&M()}function Ae(e,t){_.push({name:"edit-plant",query:{id:t.id,isEdit:e}})}function de(e,t){_.push({name:"edit-pest",query:{id:t.id,type:t.type,isEdit:e}})}function ue(e,t){_.push({name:"edit-material",query:{id:t.id,isEdit:e}})}function ge(){_.push({name:"edit-plant"})}function me(){_.push({name:"edit-pest"})}function fe(){_.push({name:"edit-material"})}function ve(e){T.deletePlantInfo(e.id).subscribe(t=>{B()})}function ye(e){T.deleteDamageProfile(e.type,e.id).subscribe(t=>{B()})}function xe(e){T.deletePlantInfo(e.id).subscribe(t=>{B()})}return Le(()=>{re();const e=[];if(v.query.type=="search"){const A=v.query.keyword;$(A)}else e.push(v.query.type);o.value=e,B(),console.log(v.query)}),_.afterEach((e,t,A)=>{const w=[];if(v.query.type=="search"){const f=v.query.keyword;$(f)}else w.push(v.query.type);o.value=w,B(),console.log(v.query)}),(e,t)=>{var A,w,p,f,ee,se;return c(),r("div",Ge,[(A=i(x))!=null&&A.isAdmin?(c(),r("div",{key:0,class:m(["ml-5",(w=i(x))!=null&&w.isAdmin?"col-span-3 sm:col-span-3 lg:col-span-1 xl:col-span-1":"col-span-0 sm:col-span-0 lg:col-span-0 xl:col-span-0"])},[n(i(U),{as:"div",class:"flex justify-start"},{default:a(()=>[n(i(G),{class:"mx-6 mt-5 px-3 py-1.5 flex items-center rounded-full text-base see-all-button",onClick:t[0]||(t[0]=()=>{})},{default:a(()=>[Pe,Be(" 新增 ")]),_:1}),n(P,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[n(i(j),{class:"absolute z-20 ml-5 mt-16 w-36 origin-top-right rounded-3xl filter-btn-style py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:a(()=>[n(i(C),null,{default:a(({active:l})=>[s("button",{class:"flex px-4 py-2 text-sm w-full text-gray-700",onClick:t[1]||(t[1]=y=>ge())},Te)]),_:1}),n(i(C),null,{default:a(({active:l})=>[s("button",{class:"flex px-4 py-2 text-sm w-full text-gray-700",onClick:t[2]||(t[2]=y=>me())},Ze)]),_:1}),n(i(C),null,{default:a(({active:l})=>[s("button",{class:"flex px-4 py-2 text-sm w-full text-gray-700",onClick:t[3]||(t[3]=y=>fe())},Fe)]),_:1})]),_:1})]),_:1})]),_:1}),s("dl",Xe,[s("fieldset",null,[s("div",qe,[Je,s("div",Ve,[s("div",Oe,[s("input",{id:"plants",checked:o.value.includes("plants"),"aria-describedby":"comments-description",name:"comments",type:"checkbox",class:"h-4 w-4 rounded border-gray-300 accent-[#18A14B] text-main-color focus:main-color",onChange:t[4]||(t[4]=l=>z("plants"))},null,40,He)]),Me]),s("div",$e,[s("div",es,[s("input",{id:"pests",checked:o.value.includes("pests"),"aria-describedby":"comments-description",name:"comments",type:"checkbox",class:"h-4 w-4 rounded border-gray-300 accent-[#18A14B] text-main-color focus:main-color",onChange:t[5]||(t[5]=l=>z("pests"))},null,40,ss)]),ts]),s("div",ls,[s("div",is,[s("input",{id:"materials",checked:o.value.includes("materials"),"aria-describedby":"comments-description",name:"comments",type:"checkbox",class:"h-4 w-4 rounded border-gray-300 accent-[#18A14B] text-main-color focus:main-color",onChange:t[6]||(t[6]=l=>z("materials"))},null,40,os)]),as])])])])],2)):h("",!0),s("div",{class:m(["mx-20 sm:mx-16 lg:mx-20 xl:mx-24 my-8 col-span-6",(p=i(x))!=null&&p.isAdmin?"col-span-3 sm:col-span-3 lg:col-span-5 xl:col-span-6":"col-span-3 sm:col-span-3 lg:col-span-6 xl:col-span-7"])},[o.value.includes("plants")?(c(),r("div",cs,[ns,s("ul",{role:"list",class:m(["mt-10 grid gap-x-4 gap-y-8 sm:gap-x-6 lg:gap-x-8",(f=i(x))!=null&&f.isAdmin?"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ":"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"])},[(c(!0),r(D,null,Y(N.value,l=>{var y,u;return c(),r("li",{class:"relative",onClick:t[8]||(t[8]=()=>{})},[s("div",{class:m([le(l),"aspect-w-10 w-full h-40 overflow-hidden rounded-3xl focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 hover:border hover:shadow-md"])},[(y=i(x))!=null&&y.isAdmin?(c(),F(i(U),{key:0,as:"div",class:"flex justify-end"},{default:a(()=>[n(i(G),{class:"edit-color mx-1 my-1",onClick:t[7]||(t[7]=()=>{})},{default:a(()=>[rs]),_:1}),n(P,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[n(i(j),{class:"absolute z-10 mt-10 w-36 origin-top-right rounded-xl bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:a(()=>[n(i(C),null,{default:a(({active:g})=>[s("button",{class:m([[g?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"],"flex w-full"]),onClick:pe=>Ae("Y",l)},gs,10,As)]),_:2},1024),n(i(C),null,{default:a(({active:g})=>[s("button",{class:m([[g?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"],"flex w-full"]),onClick:pe=>ve(l)},ys,10,ms)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)):h("",!0),s("div",{class:"flex justify-center w-full h-full",onClick:g=>E(l)},[l.image!=null?(c(),r("img",{key:0,src:l.image[0],alt:"",class:m([[(u=i(x))!=null&&u.isAdmin?"-mt-20":"mt-0"],"pointer-events-none w-52 object-contain object-center group-hover:opacity-75"])},null,10,ps)):h("",!0)],8,xs)],2),s("div",{class:"w-full",onClick:g=>E(l)},[s("p",_s,k(l.name),1)],8,hs),s("div",{class:"flex mt-2 w-full",onClick:g=>E(l)},[Cs,(c(),r(D,null,Y([0,1,2],g=>n(i(Qe),{key:g,class:m([l.plantingDifficulty>g?"start-yellow-color":"text-gray-400","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64)),s("div",{class:"flex flex-auto justify-end",onClick:g=>E(l)},[s("button",ks,k(ie(l.plantMonth)),1)],8,ws)],8,bs)])}),256))],2)])):h("",!0),o.value.includes("pests")?(c(),r("div",Ls,[Bs,s("ul",{role:"list",class:m(["mt-10 grid gap-x-1 gap-y-8 sm:gap-x-3",(ee=i(x))!=null&&ee.isAdmin?"grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 ":"grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7"])},[(c(!0),r(D,null,Y(R.value,l=>{var y;return c(),r("li",Is,[s("div",Rs,[s("div",Qs,[s("div",Es,[s("div",Ss,[l.type=="pests"?(c(),r("p",{key:0,class:"px-1.5 py-0.5 rounded-full bugtype-bg text-center text-sm font-semibold text-gray-900",onClick:u=>S(l)},"蟲",8,Ds)):(c(),r("p",{key:1,class:"px-1.5 py-0.5 rounded-full sicktype-bg text-center text-sm font-semibold text-gray-900",onClick:u=>S(l)},"病",8,Ys)),s("p",{class:"ml-1 text-lg font-semibold text-gray-900",onClick:u=>S(l)},k(l.name),9,Gs)]),s("div",Ps,[(y=i(x))!=null&&y.isAdmin?(c(),F(i(U),{key:0,as:"div",class:"flex justify-end w-9 h-9"},{default:a(()=>[n(i(G),{class:"edit-color mx-1 my-1 flex items-center",onClick:t[9]||(t[9]=()=>{})},{default:a(()=>[js]),_:1}),n(P,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[n(i(j),{class:"absolute z-10 mt-10 w-36 origin-top-right rounded-xl bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:a(()=>[n(i(C),null,{default:a(({active:u})=>[s("button",{class:m([[u?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"],"flex w-full"]),onClick:g=>de("Y",l)},Ks,10,Us)]),_:2},1024),n(i(C),null,{default:a(({active:u})=>[s("button",{class:m([[u?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"],"flex w-full"]),onClick:g=>ye(l)},Fs,10,Zs)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)):h("",!0)])])]),s("div",{class:"mt-2 mb-0 bg-[url({{ item.images }})]",onClick:u=>S(l)},[l.image!=null?(c(),r("img",{key:0,src:l.image.length!=0?l.image[0]:Q.value,class:"object-cover object-center h-40 sm:h-44 lg:h-48 w-full"},null,8,qs)):(c(),r("img",{key:1,src:Q.value,class:"object-cover object-center h-40 sm:h-44 lg:h-48 w-full"},null,8,Js)),s("div",Vs,[l.symptoms!=null&&l.symptoms.length>0?(c(),r("button",Os,k(l.symptoms[0].name),1)):h("",!0),l.symptoms!=null&&l.symptoms.length>1?(c(),r("button",Hs,k(l.symptoms[1].name),1)):h("",!0)])],8,Xs)])])}),256))],2)])):h("",!0),o.value.includes("materials")?(c(),r("div",Ms,[$s,s("ul",{role:"list",class:m(["mt-10 grid gap-x-4 gap-y-8 sm:gap-x-6",(se=i(x))!=null&&se.isAdmin?"grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 ":"grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7"])},[(c(!0),r(D,null,Y(K.value,l=>{var y;return c(),r("li",et,[s("div",st,[s("div",tt,[s("div",lt,[s("div",{class:"w-11/12",onClick:u=>H(l)},[s("p",ot,k(l.name),1),s("p",at,k(ne(l)),1)],8,it),s("div",ct,[(y=i(x))!=null&&y.isAdmin?(c(),F(i(U),{key:0,as:"div",class:"flex justify-end w-9 h-9"},{default:a(()=>[n(i(G),{class:"edit-color mx-1 my-1 flex items-center",onClick:t[10]||(t[10]=()=>{})},{default:a(()=>[nt]),_:1}),n(P,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[n(i(j),{class:"absolute z-10 mt-10 w-36 origin-top-right rounded-xl bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:a(()=>[n(i(C),null,{default:a(({active:u})=>[s("button",{class:m([[u?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"],"flex w-full"]),onClick:g=>ue("Y",l)},ut,10,rt)]),_:2},1024),n(i(C),null,{default:a(({active:u})=>[s("button",{class:m([[u?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"],"flex w-full"]),onClick:g=>xe(l)},vt,10,gt)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)):h("",!0)])])]),s("div",{class:"mt-1 mb-0 bg-[url({{ item.images }})]",onClick:u=>H(l)},[l.image!=null?(c(),r("img",{key:0,src:l.image.length!=0?l.image[0]:Q.value,class:"object-cover object-center w-full h-40 sm:h-40 lg:h-44"},null,8,xt)):(c(),r("img",{key:1,src:Q.value,class:"object-cover object-center w-full h-40 sm:h-44 lg:h-44"},null,8,pt))],8,yt)])])}),256))],2)])):h("",!0),n(Ie,{detail:O.value,show:W.value,onClose:t[11]||(t[11]=l=>oe())},null,8,["detail","show"])],2)])}}});export{Rt as default};
