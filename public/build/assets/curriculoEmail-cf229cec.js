import{_ as B,T as U,g as I,q as f,r as p,o as _,c as m,b as e,a as u,v as h,x as S,u as i,i as k,O as C,p as D,f as A}from"./app-48203974.js";const o=n=>(D("data-v-00143996"),n=n(),A(),n),T={class:"container-fluid"},V={class:"row"},z={class:"col-6 imgIlustration"},M={class:"col-12 col-lg-6"},L=o(()=>e("h2",null,"Tenha acesso ao meu currículo",-1)),q=o(()=>e("span",null,"Escolha enviar por email ou baixar.",-1)),O={class:"formBtn"},P={key:0},Z=o(()=>e("span",null,"Enviar Email",-1)),H={key:1},N={href:"/Assets/files/Curriculo_Marcelo_Henrique.pdf",target:"_blank"},R={type:"button",class:"btn text-light DownBtn"},F={class:"Btn"},$=o(()=>e("span",{class:"icon2"},null,-1)),j=o(()=>e("span",{class:"tooltip"},"Download",-1)),G={class:"formEmail"},J=o(()=>e("div",{class:"Linkcv"},[e("a",{href:"/Assets/files/Curriculo_Marcelo_Henrique.pdf",target:"_blank"}," Baixar curriculo ")],-1)),K={__name:"curriculoEmail",props:{resposta:String,status:String},setup(n){const a=n,t=U({emailUser:""}),l=I(""),r=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:s=>{s.addEventListener("mouseenter",Swal.stopTimer),s.addEventListener("mouseleave",Swal.resumeTimer)}}),E=f(()=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.emailUser)&&t.emailUser!==""),v=()=>{E.value?b():r.fire({icon:"info",title:"Deve ser um email válido!"})},b=async()=>{try{C.post(route("sendEmail"),t,{onBefore:s=>{},onStart:s=>{},onProgress:s=>{},preserveState:!0,preserveScroll:!0,onSuccess:s=>{r.fire({icon:a.status,title:a.resposta})},onError:s=>{r.fire({icon:a.status,title:a.resposta})},onCancel:()=>{},onFinish:s=>{}})}catch{r.fire({icon:"error",title:"Atualize a página, ocorreu algum erro!"})}},x=f(()=>(l.value=t.emailUser!=="",{marginLeft:l.value?"-250px":"0px",opacity:l.value?"1":"0",width:l.value?"255px":"155px"}));return(s,c)=>{const y=p("imgEfects"),g=p("IconSendSvg"),w=p("iconDownloadSvg");return _(),m("div",T,[e("div",V,[e("div",z,[u(y,{ImgSrc:"/Assets/image/index/dev.png",class:"imgEfects"})]),e("div",M,[L,q,e("div",O,[h(e("input",{type:"email",style:k(x.value),"onUpdate:modelValue":c[0]||(c[0]=d=>i(t).emailUser=d),class:"inputBtn",placeholder:"Digite seu E-mail"},null,4),[[S,i(t).emailUser]]),e("button",{onClick:v,type:"button",class:"btn button shadow-lg bg-body rounded"},[i(t).emailUser!==""?(_(),m("div",P,[u(g,{classes:"svgiconUp"}),Z])):(_(),m("div",H,"Passe o Mouse"))]),e("a",N,[e("button",R,[e("div",F,[u(w,{class:"svgIcon"}),$,j])])])]),e("div",G,[h(e("input",{type:"email","onUpdate:modelValue":c[1]||(c[1]=d=>i(t).emailUser=d),class:"inputBtn",placeholder:"Digite seu E-mail"},null,512),[[S,i(t).emailUser]]),e("button",{onClick:v,type:"button",class:"btn sendbtn"},[u(g,{classes:"svgiconUp"})])]),J])])])}}},W=B(K,[["__scopeId","data-v-00143996"]]);export{W as default};