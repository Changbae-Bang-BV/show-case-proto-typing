(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7353:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7815)}])},7815:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return tH}});var i=n(2696),c=n(5706),r=n(1987);let o=t=>(0,c.css)("height:",t?"".concat(t,"px"):"100vh",";"),a=(t,e)=>{let{children:n,...c}=t,[a,s]=(0,r.useState)(0),l=(0,r.useCallback)(()=>{s(window.innerHeight)},[]);return(0,r.useEffect)(()=>(window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)}),[l]),(0,r.useEffect)(()=>{s(window.innerHeight)},[]),(0,i.tZ)("div",{css:o(a),...c,ref:e,children:n})};var s=(0,r.forwardRef)(a);let l=t=>(0,c.css)("width:",t,"px;"),d=(t,e)=>{let{children:n,...c}=t,[o,a]=(0,r.useState)(!1),[d,p]=(0,r.useState)(0),h=(0,r.useCallback)(()=>{let t=window.innerWidth>window.innerHeight;a(t),p(t?window.innerHeight:0)},[]);return(0,r.useEffect)(()=>(window.addEventListener("resize",h),h(),()=>{window.removeEventListener("resize",h)}),[h]),(0,i.tZ)(s,{css:o&&l(d),...c,ref:e,children:n})};var p=(0,r.forwardRef)(d);let h="normal",g=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"column",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h;return(0,c.css)("display:flex;flex-direction:",t,";gap:",e,"px;align-items:",n,";justify-content:",i,";")},f=t=>{let{children:e,direction:n,spacing:c,alignItems:r,justifyContent:o,...a}=t;return(0,i.tZ)("div",{css:g(n,c,r,o),...a,children:e})},u={h1:(0,c.css)("font-style:normal;font-weight:900;font-size:40px;letter-spacing:-0.2px;line-height:40px;"),h2:(0,c.css)("font-style:normal;font-weight:900;font-size:32px;letter-spacing:-0.2px;line-height:36px;"),h3:(0,c.css)("font-style:normal;font-weight:700;font-size:24px;letter-spacing:-0.2px;line-height:30px;"),h4:(0,c.css)("font-style:normal;font-weight:700;font-size:16px;letter-spacing:-0.2px;line-height:24px;"),title:(0,c.css)("font-style:normal;font-weight:normal;font-size:16px;letter-spacing:-0.2px;line-height:24px;"),subtitle:(0,c.css)("font-style:normal;font-weight:300;font-size:16px;letter-spacing:-0.2px;line-height:24px;"),body:(0,c.css)("font-style:normal;font-weight:normal;font-size:14px;letter-spacing:-0.2px;line-height:20px;"),caption:(0,c.css)("font-style:normal;font-weight:normal;font-size:12px;letter-spacing:-0.2px;line-height:16px;"),badge:(0,c.css)("font-style:normal;font-weight:700;font-size:12px;line-height:14px;letter-spacing:-0.2px;")},w=t=>{let{children:e,variant:n="body",...c}=t;return(0,i.tZ)("span",{css:u[n],...c,children:e})},x="./images";var v=n(4221),y=n.n(v);let b=t=>{let{alt:e="icon-image",src:n,width:c,height:r,...o}=t;return(0,i.tZ)(y(),{alt:e,src:n,width:c,height:r,...o})},m={alt:"arrow-down",src:"".concat(x,"/icon/arrow-down-with-rectangle.svg"),width:32,height:32},Z=()=>(0,i.tZ)(b,{...m}),k={alt:"brand-logo",width:161,height:24},C=t=>{let{src:e}=t;return(0,i.tZ)(b,{...k,src:e})},E={alt:"collaboration-icon",src:"".concat(x,"/icon/x.svg"),width:16,height:16},B=()=>(0,i.tZ)(b,{...E}),j={alt:"hwahea-logo",src:"".concat(x,"/icon/hwahea.svg"),width:55,height:32},T=()=>(0,i.tZ)(b,{...j}),U=t=>{let{...e}=t;return(0,i.BX)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...e,xmlns:"http://www.w3.org/2000/svg",children:[(0,i.tZ)("rect",{width:"24",height:"24",rx:"12",fill:"currentColor"}),(0,i.tZ)("path",{d:"M11.4857 17.4857C11.4857 17.7697 11.716 18 12 18C12.284 18 12.5143 17.7697 12.5143 17.4857V12.5143H17.4857C17.7697 12.5143 18 12.284 18 12C18 11.716 17.7697 11.4857 17.4857 11.4857H12.5143V6.51429C12.5143 6.23025 12.284 6 12 6C11.716 6 11.4857 6.23025 11.4857 6.51429V11.4857H6.51429C6.23025 11.4857 6 11.716 6 12C6 12.284 6.23025 12.5143 6.51429 12.5143H11.4857V17.4857Z",fill:"white"})]})},X=(0,c.css)("position:relative;scroll-snap-stop:always;scroll-snap-align:center;"),z=t=>(0,c.css)(t?" background-image:  url(".concat(t,");\n    background-repeat: no-repeat;\n    background-size: auto 100% ; \n    background-position: center;"):"background: #ffffff;"),L=t=>{let{children:e,backgroundUrl:n,...c}=t,o=(0,r.useRef)(null);return(0,i.tZ)(s,{css:[X,z(n)],...c,ref:o,children:e})};var S=n(2987);let H="mediheal",N=[H],_=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;return N.includes(t)?t:H},I=()=>{var t;let e=(0,S.useRouter)(),n=_(null===(t=e.query)||void 0===t?void 0:t.productName),i="".concat(x,"/").concat(n,"/logo.svg");return{name:n,readableName:"메디힐",logoUrl:i}},R=(0,c.css)("display:flex;flex-direction:column;justify-content:flex-end;"),A=(0,c.css)("padding-bottom:42px;"),P=(0,c.css)("text-align:center;color:#ffffff;"),V=t=>{let{imageUrl:e}=t,{logoUrl:n}=I();return(0,i.tZ)(L,{backgroundUrl:e,css:R,children:(0,i.BX)(f,{spacing:216,css:A,children:[(0,i.BX)(f,{spacing:12,alignItems:"center",children:[(0,i.tZ)(T,{}),(0,i.tZ)(B,{}),(0,i.tZ)(C,{src:n})]}),(0,i.BX)(f,{spacing:6,alignItems:"center",children:[(0,i.tZ)(Z,{}),(0,i.tZ)(w,{variant:"caption",css:P,children:"스크롤을 끝까지 내리면 스탬프를 받을 수 있어요"})]})]})})};var O=n(5964);let W={from:{opacity:0,y:100},to:{opacity:1,y:0},config:{easing:O.Z5.easeInOutBack}},q={from:{opacity:0,x:-100},to:{opacity:1,x:0},config:{easing:O.Z5.easeInOutBack}},D={from:{opacity:.5,x:-100},to:{opacity:1,x:0},config:{easing:O.Z5.easeOutElastic}},M=t=>{let{children:e,options:n=W,...c}=t,[r,o]=(0,O.YD)(()=>n);return(0,i.tZ)(O.q.div,{ref:r,style:o,...c,children:e})},Y=(0,c.css)("border:1px solid #ffffff;border-radius:100px;padding:4px 8px;width:fit-content;"),F=t=>{let{children:e,hasBorder:n=!1,variant:c}=t;return e?(0,i.tZ)("div",{css:n&&Y,children:(0,i.tZ)(w,{variant:c,children:e})}):null},G=t=>(0,c.css)("position:absolute;top:",t,"px;"),J=t=>(0,c.css)("left:",t,"px;"),K=t=>(0,c.css)("right:",t,"px;"),Q=(0,c.css)("color:#5edfdf;"),$=(0,c.css)("color:transparent;"),tt=(0,c.css)("display:contents;color:inherit;"),te=t=>t?Q:$,tn=t=>{let{title:e,description:n}=t;return(0,i.tZ)(M,{options:{...D,config:{...D.config,duration:2e3}},children:(0,i.BX)(f,{children:[(0,i.tZ)(w,{variant:e.variant,children:e.content}),n&&(0,i.tZ)(w,{variant:n.variant,children:n.content})]})})},ti=t=>{let{title:e,description:n,position:c,direction:o,link:a}=t,[s,l]=(0,r.useState)(0),[d,p]=(0,r.useState)(0),h=(0,r.useCallback)(()=>{let t=window.innerHeight-712,e=0===t?0:t*c.top/712,n=c.top+e;p(n);let i=0===t?1:window.innerHeight/712,r=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth,a=r/i-375,s=0===a?0:a/2;if("right"===o){let t=c.left+s;l(t*i)}else{let t=375-c.left-24;l((t+s)*i)}},[l,o,c.top,c.left]);(0,r.useEffect)(()=>(window.addEventListener("resize",h),h(),()=>{window.removeEventListener("resize",h)}),[h]);let g=()=>{a&&(window.location.href=a)};return(0,i.tZ)("button",{type:"button",onClick:g,css:tt,children:(0,i.BX)(f,{direction:"row",alignItems:"center",spacing:8,css:[G(d),"right"===o&&J(s),"left"===o&&K(s)],children:["right"===o&&(0,i.tZ)(U,{css:te(!!a)}),(0,i.tZ)(tn,{title:e,description:n}),"left"===o&&(0,i.tZ)(U,{css:te(!!a)})]})})},tc="hwahae://main-benefit",tr="intro",to="left-bottom",ta="left-up",ts="center",tl="right-bottom",td="center-bottom",tp=t=>{let{productName:e}=t;return[{paperType:tr,imageUrl:"".concat(x,"/").concat(e,"/01.jpg")},{paperType:to,imageUrl:"".concat(x,"/").concat(e,"/02.jpg"),staticContent:{title:{content:"about\n".concat(e),variant:"h1"},description:{content:"독자기술인 티트리카밍바이옴을\n사용한 제품들을 선보이며,\n고민피부를 가진 소비자들이\n사계절 쓸 수 있는 화장품을 만들고 있어요.\n티트리에 진심인 메디힐의 이야기를 들어보세요.",variant:"subtitle"}}},{paperType:ta,imageUrl:"".concat(x,"/").concat(e,"/03.jpg"),staticContent:{badge:{content:"메디힐의 자신감",variant:"badge",hasBorder:!0},title:{content:"초속 진정 티트리",variant:"h2"},description:{content:"줄기를 잘라내도 자랄만큼 생명력이 강한\n티트리는 호주에서 처음 발견되었어요.\n호주 원주민들에게는 약용 허브로,\n제 2차 세계대전에선 피부병 치료제로 활용됐어요.\n\xa0\n피부 진정, 피지 조절, 모공 케어 효능 때문에\n오랜 기간 사랑받고 있죠.",variant:"title"}}},{paperType:ts,imageUrl:"".concat(x,"/").concat(e,"/04.jpg"),staticContent:{badge:{content:"메디힐의 자신감",variant:"badge",hasBorder:!0},title:{content:"독자원료\n티트리카밍바이옴",variant:"h2"},description:{content:"티트리에 바이옴을 더한\n메디힐 개발 독점 조성물이에요.\n청정 제주산 티트리에 특허 유산균을 더해\n200시간동안 추출했어요.\n다양한 자극으로 민감해진 피부를\n초속 진정시킬 수 있어요.",variant:"title"}}},{paperType:tl,imageUrl:"".concat(x,"/").concat(e,"/05.jpg"),staticContent:{badge:{content:"메디힐의 자신감",variant:"badge",hasBorder:!0},title:{content:"리포좀 공법",variant:"h2"},description:{content:"피부 구조와 유사한 리포좀 캡슐에\n유효 성분을 담아 피부 속까지\n자극 없이 전달하는 기술이에요.\n티트리카밍바이옴을 미세입자로 쪼개\n피부 구석구석 흡수시켜주어\n속보습 개선 효과가 매우 뛰어나요.",variant:"title"}}},{paperType:ta,imageUrl:"".concat(x,"/").concat(e,"/06.jpg"),staticContent:{title:{content:"TEATREE\nLINE UP",variant:"h1"}},linkableContents:[{position:{left:48,top:584},direction:"right",title:{variant:"title",content:"티트리 트러블 패드"}},{position:{left:48,top:616},direction:"right",title:{variant:"title",content:"티트리 진정 수분 앰플"}},{position:{left:48,top:648},direction:"right",title:{variant:"title",content:"티트리 에센셜 마스크"}}]},{paperType:ta,imageUrl:"".concat(x,"/").concat(e,"/07.jpg"),staticContent:{badge:{content:"TEATREE LINE UP",variant:"badge"},title:{content:"한 장으로 해결되는 피부 고민",variant:"h3"},description:{content:"티트리 마스크팩을 더 간편하게 사용해보세요.\n확실하고 빠른 진정 효과와 부드러워지는\n피부결을 경험할 수 있어요.",variant:"title"}},linkableContents:[{position:{left:164,top:393},direction:"left",title:{variant:"h4",content:"티트리 트러블 패드"},description:{variant:"caption",content:"170ml(100매) / 26,000원"},link:tc}]},{paperType:tl,imageUrl:"".concat(x,"/").concat(e,"/08.jpg"),staticContent:{badge:{content:"TEATREE LINE UP",variant:"badge"},title:{content:"30초 진정 수분 공식",variant:"h3"},description:{content:"사계절 내내 쓸 수 있는 촉촉한 진정 앰플이에요.\n민감해진 피부에 사용해 초속 진정 뒤에\n꽉찬 수분감이 찾아오는 놀라운 경험을 해보세요.",variant:"title"}},linkableContents:[{position:{left:96,top:354},direction:"right",title:{variant:"h4",content:"티트리 진정 수분 앰플"},description:{variant:"caption",content:"50ml / 32,000원"},link:tc}]},{paperType:td,imageUrl:"".concat(x,"/").concat(e,"/09.jpg"),staticContent:{badge:{content:"TEATREE LINE UP",variant:"badge"},title:{content:"누구나 사랑하는 그 제품",variant:"h3"},description:{content:"메디힐 티트리 마스크가 새롭게 태어났어요.\n티트리 함량을 약 22배 증가시키고\n비건 인증 대나무 시트로 환경까지 생각했어요.",variant:"title"}},linkableContents:[{position:{left:164,top:180},direction:"right",title:{variant:"h4",content:"티트리 진정 수분 앰플"},description:{variant:"caption",content:"50ml / 32,000원"},link:tc}]}]},th={contentLayout:(0,c.css)("padding-left:20px;padding-bottom:40px;justify-content:flex-end;"),titleStyle:(0,c.css)("display:block;"),descriptionStyle:(0,c.css)("display:block;")},tg={contentLayout:(0,c.css)("padding-left:20px;padding-top:40px;justify-content:flex-start;"),titleStyle:(0,c.css)("display:block;"),descriptionStyle:(0,c.css)("display:block;")},tf={contentLayout:(0,c.css)("width:100%;align-items:center;justify-content:center;"),titleStyle:(0,c.css)("display:flex;justify-content:center;"),descriptionStyle:(0,c.css)("display:flex;justify-content:center;")},tu={contentLayout:(0,c.css)("width:100%;padding-right:20px;padding-bottom:40px;justify-content:flex-end;align-items:flex-end;"),titleStyle:(0,c.css)(),descriptionStyle:(0,c.css)("display:flex;justify-content:flex-end;")},tw={contentLayout:(0,c.css)("width:100%;padding-bottom:40px;justify-content:end;align-items:center;"),titleStyle:(0,c.css)("display:flex;justify-content:center;"),descriptionStyle:(0,c.css)("display:flex;justify-content:center;")},tx=t=>{switch(t){case to:return th;case td:return tw;case tl:return tu;case ts:return tf;default:return tg}},tv=t=>{let{contentAndVariant:e,name:n,isUpperCase:c=!1,...r}=t;if(!e)return null;let{content:o,variant:a}=e;return(0,i.tZ)("div",{children:o.split("\n").map((t,e)=>{let o="".concat(n,"-").concat(e);return(0,i.tZ)(w,{variant:a,...r,children:c?t.toUpperCase():t},o)})})},ty=(0,c.css)("display:flex;color:#ffffff;"),tb=t=>{let{imageUrl:e,paperType:n,staticContent:c,linkableContents:r}=t,{contentLayout:o,titleStyle:a,descriptionStyle:s}=tx(n);return(0,i.BX)(L,{backgroundUrl:e,css:ty,children:[(0,i.BX)(f,{css:o,spacing:12,children:[(null==c?void 0:c.badge)&&(0,i.tZ)(M,{options:q,children:(0,i.tZ)(F,{variant:c.badge.variant,hasBorder:c.badge.hasBorder,children:c.badge.content})}),(0,i.tZ)(M,{children:(0,i.tZ)(tv,{name:"title",contentAndVariant:c.title,isUpperCase:!0,css:a})}),(0,i.tZ)(M,{options:{...W,config:{...W.config}},children:(0,i.tZ)(tv,{name:"description",contentAndVariant:null==c?void 0:c.description,css:s})})]}),null==r?void 0:r.map((t,e)=>(0,i.tZ)(ti,{...t},"linker-".concat(e)))]})},tm=(0,c.css)("display:flex;"),tZ=(0,c.css)("width:100%;align-items:stretch;padding:40px 20px;"),tk=(0,c.css)("text-align:center;color:#222222;"),tC=(0,c.css)("display:block;text-align:center;color:#222222;"),tE=(0,c.css)("width:160px;padding:20px 40px;display:flex;align-items:center;background:#edfbee;border-radius:40px;"),tB=(0,c.css)("width:100%;"),tj=(0,c.css)("text-align:center;color:#888888;"),tT=(0,c.css)("height:48px;padding-top:15px;line-height:20px;padding-bottom:13px;border:none;border-radius:8px;color:#ffffff;background:#49ccd5;"),tU=()=>{let{readableName:t}=I(),e={text:"게임존으로 넘어가기",link:"#",description:"브랜드제품존을 모두 구경했다면?"};return(0,i.tZ)(L,{css:tm,children:(0,i.BX)(f,{alignItems:"center",justifyContent:"space-between",css:tZ,children:[(0,i.BX)(f,{alignItems:"center",spacing:80,children:[(0,i.BX)(f,{spacing:12,children:[(0,i.BX)(w,{variant:"h3",css:tk,children:[t,"의 스토리, 어땠나요?"]}),(0,i.BX)("div",{children:[(0,i.BX)(w,{variant:"title",css:tC,children:[t,"과 한층 더 가까워지셨다면"]}),(0,i.tZ)(w,{variant:"title",css:tC,children:"아래 도장을 꾹 눌러서 스탬프를 받아가세요!"})]})]}),(0,i.tZ)("div",{css:[tE],children:(0,i.tZ)(y(),{alt:"stamp",src:"".concat(x,"/showcase/stamp.png"),width:160,height:160})})]}),(0,i.BX)(f,{spacing:12,css:tB,children:[(0,i.tZ)(w,{variant:"body",css:tj,children:e.description}),(0,i.tZ)("button",{css:[tT,tB],type:"button",children:e.text})]})]})})},tX=t=>t.paperType!==tr,tz=(0,c.css)("overflow:scroll;scrollbar-width:none;scroll-snap-type:y mandatory;"),tL=()=>{let t=(0,r.useRef)(null),{name:e}=I(),n=tp({productName:e}),c=n.find(t=>{let{paperType:e}=t;return e===tr}),o=n.filter(tX);return(0,i.BX)(p,{css:tz,ref:t,children:[c&&(0,i.tZ)(V,{imageUrl:null==c?void 0:c.imageUrl}),o.map((t,e)=>{let{paperType:n,imageUrl:c,staticContent:r,linkableContents:o}=t,a="".concat(e,"-").concat(n);return(0,i.tZ)(tb,{imageUrl:c,paperType:n,staticContent:r,linkableContents:o},a)}),(0,i.tZ)(tU,{})]})},tS=()=>(0,i.tZ)(tL,{});var tH=tS}},function(t){t.O(0,[33,774,888,179],function(){return t(t.s=7353)}),_N_E=t.O()}]);