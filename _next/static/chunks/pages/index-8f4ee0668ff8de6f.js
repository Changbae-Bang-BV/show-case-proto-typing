(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7353:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7815)}])},7815:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return tL}});var i=n(2696),c=n(5706),o=n(1987);let r=t=>(0,c.css)("height:",t?"".concat(t,"px"):"100vh",";"),a=t=>{let{children:e,...n}=t,[c,a]=(0,o.useState)(0),s=(0,o.useCallback)(()=>{a(window.innerHeight)},[]);return(0,o.useEffect)(()=>(window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}),[s]),(0,o.useEffect)(()=>{a(window.innerHeight)},[]),(0,i.tZ)("div",{css:r(c),...n,children:e})},s=t=>(0,c.css)("width:",t,"px;"),l=t=>{let{children:e,...n}=t,[c,r]=(0,o.useState)(!1),[l,d]=(0,o.useState)(0),p=(0,o.useCallback)(()=>{let t=window.innerWidth>window.innerHeight;r(t),d(t?window.innerHeight:0)},[]);return(0,o.useEffect)(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}),[p]),(0,i.tZ)(a,{css:c&&s(l),...n,children:e})},d="normal",p=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"column",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;return(0,c.css)("display:flex;flex-direction:",t,";gap:",e,"px;align-items:",n,";justify-content:",i,";")},h=t=>{let{children:e,direction:n,spacing:c,alignItems:o,justifyContent:r,...a}=t;return(0,i.tZ)("div",{css:p(n,c,o,r),...a,children:e})},g={h1:(0,c.css)("font-style:normal;font-weight:900;font-size:40px;letter-spacing:-0.2px;line-height:40px;"),h2:(0,c.css)("font-style:normal;font-weight:900;font-size:32px;letter-spacing:-0.2px;line-height:36px;"),h3:(0,c.css)("font-style:normal;font-weight:700;font-size:24px;letter-spacing:-0.2px;line-height:30px;"),h4:(0,c.css)("font-style:normal;font-weight:700;font-size:16px;letter-spacing:-0.2px;line-height:24px;"),title:(0,c.css)("font-style:normal;font-weight:normal;font-size:16px;letter-spacing:-0.2px;line-height:24px;"),subtitle:(0,c.css)("font-style:normal;font-weight:300;font-size:16px;letter-spacing:-0.2px;line-height:24px;"),body:(0,c.css)("font-style:normal;font-weight:normal;font-size:14px;letter-spacing:-0.2px;line-height:20px;"),caption:(0,c.css)("font-style:normal;font-weight:normal;font-size:12px;letter-spacing:-0.2px;line-height:16px;"),badge:(0,c.css)("font-style:normal;font-weight:700;font-size:12px;line-height:14px;letter-spacing:-0.2px;")},f=t=>{let{children:e,variant:n="body",...c}=t;return(0,i.tZ)("span",{css:g[n],...c,children:e})},u="./images";var x=n(4221),w=n.n(x);let v=t=>{let{alt:e="icon-image",src:n,width:c,height:o,...r}=t;return(0,i.tZ)(w(),{alt:e,src:n,width:c,height:o,...r})},y={alt:"arrow-down",src:"".concat(u,"/icon/arrow-down-with-rectangle.svg"),width:32,height:32},b=()=>(0,i.tZ)(v,{...y}),m={alt:"brand-logo",width:161,height:24},Z=t=>{let{src:e}=t;return(0,i.tZ)(v,{...m,src:e})},k={alt:"collaboration-icon",src:"".concat(u,"/icon/x.svg"),width:16,height:16},C=()=>(0,i.tZ)(v,{...k}),E={alt:"hwahea-logo",src:"".concat(u,"/icon/hwahea.svg"),width:55,height:32},B=()=>(0,i.tZ)(v,{...E}),j=t=>{let{...e}=t;return(0,i.BX)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...e,xmlns:"http://www.w3.org/2000/svg",children:[(0,i.tZ)("rect",{width:"24",height:"24",rx:"12",fill:"currentColor"}),(0,i.tZ)("path",{d:"M11.4857 17.4857C11.4857 17.7697 11.716 18 12 18C12.284 18 12.5143 17.7697 12.5143 17.4857V12.5143H17.4857C17.7697 12.5143 18 12.284 18 12C18 11.716 17.7697 11.4857 17.4857 11.4857H12.5143V6.51429C12.5143 6.23025 12.284 6 12 6C11.716 6 11.4857 6.23025 11.4857 6.51429V11.4857H6.51429C6.23025 11.4857 6 11.716 6 12C6 12.284 6.23025 12.5143 6.51429 12.5143H11.4857V17.4857Z",fill:"white"})]})},T=(0,c.css)("position:relative;scroll-snap-align:start;"),U=t=>(0,c.css)(t?" background-image:  url(".concat(t,");\n    background-repeat: no-repeat;\n    background-size: auto 100% ; \n    background-position: center;"):"background: #ffffff;"),X=t=>{let{children:e,backgroundUrl:n,...c}=t;return(0,i.tZ)(a,{css:[T,U(n)],...c,children:e})};var z=n(2987);let L="mediheal",S=[L],H=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return S.includes(t)?t:L},N=()=>{var t;let e=(0,z.useRouter)(),n=H(null===(t=e.query)||void 0===t?void 0:t.productName),i="".concat(u,"/").concat(n,"/logo.svg");return{name:n,readableName:"메디힐",logoUrl:i}},_=(0,c.css)("display:flex;flex-direction:column;justify-content:flex-end;"),I=(0,c.css)("padding-bottom:42px;"),A=(0,c.css)("text-align:center;color:#ffffff;"),P=t=>{let{imageUrl:e}=t,{logoUrl:n}=N();return(0,i.tZ)(X,{backgroundUrl:e,css:_,children:(0,i.BX)(h,{spacing:216,css:I,children:[(0,i.BX)(h,{spacing:12,alignItems:"center",children:[(0,i.tZ)(B,{}),(0,i.tZ)(C,{}),(0,i.tZ)(Z,{src:n})]}),(0,i.BX)(h,{spacing:6,alignItems:"center",children:[(0,i.tZ)(b,{}),(0,i.tZ)(f,{variant:"caption",css:A,children:"스크롤을 끝까지 내리면 스탬프를 받을 수 있어요"})]})]})})};var V=n(5964);let O={from:{opacity:0,y:100},to:{opacity:1,y:0},config:{easing:V.Z5.easeInOutBack}},R={from:{opacity:0,x:-100},to:{opacity:1,x:0},config:{easing:V.Z5.easeInOutBack}},W={from:{opacity:.5,x:-100},to:{opacity:1,x:0},config:{easing:V.Z5.easeOutElastic}},q=t=>{let{children:e,options:n=O,...c}=t,[o,r]=(0,V.YD)(()=>n);return(0,i.tZ)(V.q.div,{ref:o,style:r,...c,children:e})},D=(0,c.css)("border:1px solid #ffffff;border-radius:100px;padding:4px 8px;width:fit-content;"),M=t=>{let{children:e,hasBorder:n=!1,variant:c}=t;return e?(0,i.tZ)("div",{css:n&&D,children:(0,i.tZ)(f,{variant:c,children:e})}):null},Y=t=>(0,c.css)("position:absolute;top:",t,"px;"),F=t=>(0,c.css)("left:",t,"px;"),G=t=>(0,c.css)("right:",t,"px;"),J=(0,c.css)("color:#5edfdf;"),K=(0,c.css)("color:transparent;"),Q=(0,c.css)("display:contents;color:inherit;"),$=t=>t?J:K,tt=t=>{let{title:e,description:n}=t;return(0,i.tZ)(q,{options:{...W,config:{...W.config,duration:2e3}},children:(0,i.BX)(h,{children:[(0,i.tZ)(f,{variant:e.variant,children:e.content}),n&&(0,i.tZ)(f,{variant:n.variant,children:n.content})]})})},te=t=>{let{title:e,description:n,position:c,direction:r,link:a}=t,[s,l]=(0,o.useState)(0),[d,p]=(0,o.useState)(0),g=(0,o.useCallback)(()=>{let t=window.innerHeight-712,e=0===t?0:t*c.top/712,n=c.top+e;p(n);let i=0===t?1:window.innerHeight/712,o=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth,a=o/i-375,s=0===a?0:a/2;if("right"===r){let t=c.left+s;l(t*i)}else{let t=375-c.left-24;l((t+s)*i)}},[l,r,c.top,c.left]);(0,o.useEffect)(()=>(window.addEventListener("resize",g),g(),()=>{window.removeEventListener("resize",g)}),[g]);let f=()=>{a&&(window.location.href=a)};return(0,i.tZ)("button",{type:"button",onClick:f,css:Q,children:(0,i.BX)(h,{direction:"row",alignItems:"center",spacing:8,css:[Y(d),"right"===r&&F(s),"left"===r&&G(s)],children:["right"===r&&(0,i.tZ)(j,{css:$(!!a)}),(0,i.tZ)(tt,{title:e,description:n}),"left"===r&&(0,i.tZ)(j,{css:$(!!a)})]})})},tn="hwahae://main-benefit",ti="intro",tc="left-bottom",to="left-up",tr="center",ta="right-bottom",ts="center-bottom",tl=t=>{let{productName:e}=t;return[{paperType:ti,imageUrl:"".concat(u,"/").concat(e,"/01.jpg")},{paperType:tc,imageUrl:"".concat(u,"/").concat(e,"/02.jpg"),staticContent:{title:{content:"about\n".concat(e),variant:"h1"},description:{content:"독자기술인 티트리카밍바이옴을\n사용한 제품들을 선보이며,\n고민피부를 가진 소비자들이\n사계절 쓸 수 있는 화장품을 만들고 있어요.\n티트리에 진심인 메디힐의 이야기를 들어보세요.",variant:"subtitle"}}},{paperType:to,imageUrl:"".concat(u,"/").concat(e,"/03.jpg"),staticContent:{badge:{content:"메디힐의 자신감",variant:"badge",hasBorder:!0},title:{content:"초속 진정 티트리",variant:"h2"},description:{content:"줄기를 잘라내도 자랄만큼 생명력이 강한\n티트리는 호주에서 처음 발견되었어요.\n호주 원주민들에게는 약용 허브로,\n제 2차 세계대전에선 피부병 치료제로 활용됐어요.\n\xa0\n피부 진정, 피지 조절, 모공 케어 효능 때문에\n오랜 기간 사랑받고 있죠.",variant:"title"}}},{paperType:tr,imageUrl:"".concat(u,"/").concat(e,"/04.jpg"),staticContent:{badge:{content:"메디힐의 자신감",variant:"badge",hasBorder:!0},title:{content:"독자원료\n티트리카밍바이옴",variant:"h2"},description:{content:"티트리에 바이옴을 더한\n메디힐 개발 독점 조성물이에요.\n청정 제주산 티트리에 특허 유산균을 더해\n200시간동안 추출했어요.\n다양한 자극으로 민감해진 피부를\n초속 진정시킬 수 있어요.",variant:"title"}}},{paperType:ta,imageUrl:"".concat(u,"/").concat(e,"/05.jpg"),staticContent:{badge:{content:"메디힐의 자신감",variant:"badge",hasBorder:!0},title:{content:"리포좀 공법",variant:"h2"},description:{content:"피부 구조와 유사한 리포좀 캡슐에\n유효 성분을 담아 피부 속까지\n자극 없이 전달하는 기술이에요.\n티트리카밍바이옴을 미세입자로 쪼개\n피부 구석구석 흡수시켜주어\n속보습 개선 효과가 매우 뛰어나요.",variant:"title"}}},{paperType:to,imageUrl:"".concat(u,"/").concat(e,"/06.jpg"),staticContent:{title:{content:"TEATREE\nLINE UP",variant:"h1"}},linkableContents:[{position:{left:48,top:584},direction:"right",title:{variant:"title",content:"티트리 트러블 패드"}},{position:{left:48,top:616},direction:"right",title:{variant:"title",content:"티트리 진정 수분 앰플"}},{position:{left:48,top:648},direction:"right",title:{variant:"title",content:"티트리 에센셜 마스크"}}]},{paperType:to,imageUrl:"".concat(u,"/").concat(e,"/07.jpg"),staticContent:{badge:{content:"TEATREE LINE UP",variant:"badge"},title:{content:"한 장으로 해결되는 피부 고민",variant:"h3"},description:{content:"티트리 마스크팩을 더 간편하게 사용해보세요.\n확실하고 빠른 진정 효과와 부드러워지는\n피부결을 경험할 수 있어요.",variant:"title"}},linkableContents:[{position:{left:164,top:393},direction:"left",title:{variant:"h4",content:"티트리 트러블 패드"},description:{variant:"caption",content:"170ml(100매) / 26,000원"},link:tn}]},{paperType:ta,imageUrl:"".concat(u,"/").concat(e,"/08.jpg"),staticContent:{badge:{content:"TEATREE LINE UP",variant:"badge"},title:{content:"30초 진정 수분 공식",variant:"h3"},description:{content:"사계절 내내 쓸 수 있는 촉촉한 진정 앰플이에요.\n민감해진 피부에 사용해 초속 진정 뒤에\n꽉찬 수분감이 찾아오는 놀라운 경험을 해보세요.",variant:"title"}},linkableContents:[{position:{left:96,top:354},direction:"right",title:{variant:"h4",content:"티트리 진정 수분 앰플"},description:{variant:"caption",content:"50ml / 32,000원"},link:tn}]},{paperType:ts,imageUrl:"".concat(u,"/").concat(e,"/09.jpg"),staticContent:{badge:{content:"TEATREE LINE UP",variant:"badge"},title:{content:"누구나 사랑하는 그 제품",variant:"h3"},description:{content:"메디힐 티트리 마스크가 새롭게 태어났어요.\n티트리 함량을 약 22배 증가시키고\n비건 인증 대나무 시트로 환경까지 생각했어요.",variant:"title"}},linkableContents:[{position:{left:164,top:180},direction:"right",title:{variant:"h4",content:"티트리 진정 수분 앰플"},description:{variant:"caption",content:"50ml / 32,000원"},link:tn}]}]},td={contentLayout:(0,c.css)("padding-left:20px;padding-bottom:40px;justify-content:flex-end;"),titleStyle:(0,c.css)("display:block;"),descriptionStyle:(0,c.css)("display:block;")},tp={contentLayout:(0,c.css)("padding-left:20px;padding-top:40px;justify-content:flex-start;"),titleStyle:(0,c.css)("display:block;"),descriptionStyle:(0,c.css)("display:block;")},th={contentLayout:(0,c.css)("width:100%;align-items:center;justify-content:center;"),titleStyle:(0,c.css)("display:flex;justify-content:center;"),descriptionStyle:(0,c.css)("display:flex;justify-content:center;")},tg={contentLayout:(0,c.css)("width:100%;padding-right:20px;padding-bottom:40px;justify-content:flex-end;align-items:flex-end;"),titleStyle:(0,c.css)(),descriptionStyle:(0,c.css)("display:flex;justify-content:flex-end;")},tf={contentLayout:(0,c.css)("width:100%;padding-bottom:40px;justify-content:end;align-items:center;"),titleStyle:(0,c.css)("display:flex;justify-content:center;"),descriptionStyle:(0,c.css)("display:flex;justify-content:center;")},tu=t=>{switch(t){case tc:return td;case ts:return tf;case ta:return tg;case tr:return th;default:return tp}},tx=t=>{let{contentAndVariant:e,name:n,isUpperCase:c=!1,...o}=t;if(!e)return null;let{content:r,variant:a}=e;return(0,i.tZ)("div",{children:r.split("\n").map((t,e)=>{let r="".concat(n,"-").concat(e);return(0,i.tZ)(f,{variant:a,...o,children:c?t.toUpperCase():t},r)})})},tw=(0,c.css)("display:flex;color:#ffffff;"),tv=t=>{let{imageUrl:e,paperType:n,staticContent:c,linkableContents:o}=t,{contentLayout:r,titleStyle:a,descriptionStyle:s}=tu(n);return(0,i.BX)(X,{backgroundUrl:e,css:tw,children:[(0,i.BX)(h,{css:r,spacing:12,children:[(null==c?void 0:c.badge)&&(0,i.tZ)(q,{options:R,children:(0,i.tZ)(M,{variant:c.badge.variant,hasBorder:c.badge.hasBorder,children:c.badge.content})}),(0,i.tZ)(q,{children:(0,i.tZ)(tx,{name:"title",contentAndVariant:c.title,isUpperCase:!0,css:a})}),(0,i.tZ)(q,{options:{...O,config:{...O.config}},children:(0,i.tZ)(tx,{name:"description",contentAndVariant:null==c?void 0:c.description,css:s})})]}),null==o?void 0:o.map((t,e)=>(0,i.tZ)(te,{...t},"linker-".concat(e)))]})},ty=(0,c.css)("display:flex;"),tb=(0,c.css)("width:100%;align-items:stretch;padding:40px 20px;"),tm=(0,c.css)("text-align:center;color:#222222;"),tZ=(0,c.css)("display:block;text-align:center;color:#222222;"),tk=(0,c.css)("width:160px;padding:20px 40px;display:flex;align-items:center;background:#edfbee;border-radius:40px;"),tC=(0,c.css)("width:100%;"),tE=(0,c.css)("text-align:center;color:#888888;"),tB=(0,c.css)("height:48px;padding-top:15px;line-height:20px;padding-bottom:13px;border:none;border-radius:8px;color:#ffffff;background:#49ccd5;"),tj=()=>{let{readableName:t}=N(),e={text:"게임존으로 넘어가기",link:"#",description:"브랜드제품존을 모두 구경했다면?"};return(0,i.tZ)(X,{css:ty,children:(0,i.BX)(h,{alignItems:"center",justifyContent:"space-between",css:tb,children:[(0,i.BX)(h,{alignItems:"center",spacing:80,children:[(0,i.BX)(h,{spacing:12,children:[(0,i.BX)(f,{variant:"h3",css:tm,children:[t,"의 스토리, 어땠나요?"]}),(0,i.BX)("div",{children:[(0,i.BX)(f,{variant:"title",css:tZ,children:[t,"과 한층 더 가까워지셨다면"]}),(0,i.tZ)(f,{variant:"title",css:tZ,children:"아래 도장을 꾹 눌러서 스탬프를 받아가세요!"})]})]}),(0,i.tZ)("div",{css:[tk],children:(0,i.tZ)(w(),{alt:"stamp",src:"".concat(u,"/showcase/stamp.png"),width:160,height:160})})]}),(0,i.BX)(h,{spacing:12,css:tC,children:[(0,i.tZ)(f,{variant:"body",css:tE,children:e.description}),(0,i.tZ)("button",{css:[tB,tC],type:"button",children:e.text})]})]})})},tT=t=>t.paperType!==ti,tU=(0,c.css)("overflow:scroll;scrollbar-width:none;scroll-snap-type:y mandatory;"),tX=()=>{let{name:t}=N(),e=tl({productName:t}),n=e.find(t=>{let{paperType:e}=t;return e===ti}),c=e.filter(tT);return(0,i.BX)(l,{css:tU,children:[n&&(0,i.tZ)(P,{imageUrl:null==n?void 0:n.imageUrl}),c.map((t,e)=>{let{paperType:n,imageUrl:c,staticContent:o,linkableContents:r}=t,a="".concat(e,"-").concat(n);return(0,i.tZ)(tv,{imageUrl:c,paperType:n,staticContent:o,linkableContents:r},a)}),(0,i.tZ)(tj,{})]})},tz=()=>(0,i.tZ)(tX,{});var tL=tz}},function(t){t.O(0,[33,774,888,179],function(){return t(t.s=7353)}),_N_E=t.O()}]);