import{_ as y,g as n,y as x,o as I,c as R,b as i,n as E}from"./app-efa8b7e3.js";const b=["src"],k={__name:"imgEfects",props:["ImgSrc","effect","classes"],setup(s){const{ImgSrc:X,effect:m,classes:Y}=s,o=n(null),a=n(null),c=n(null);return x(()=>{const e=o.value,t=a.value,d=c.value;e.addEventListener("mousemove",r=>{const l=r.clientX/e.offsetWidth,_=r.clientY/e.offsetHeight,g=(l-.9)*2,u=(l+.9)*(_-.9)*2,f=2,v=g*f,p=u*f;t.style.transform=`perspective(1000px) rotateY(${v}deg) rotateX(${p}deg)`,t.style.transition="transform 0s ease",m==="null"&&(d.style.animation="none")}),e.addEventListener("mouseleave",()=>{t.style.transform="perspective(1000px) rotateY(0deg) rotateX(0deg)",t.style.transition="transform 0.3s ease"})}),(e,t)=>(I(),R("div",{id:"container",ref_key:"containerRef",ref:o},[i("div",{id:"element",ref_key:"elementRef",ref:a},[i("img",{src:s.ImgSrc,ref_key:"elementRefImg",ref:c,class:E(["img-fluid",s.classes]),alt:"Potifólio"},null,10,b)],512)],512))}},B=y(k,[["__scopeId","data-v-9937bbd8"]]);export{B as default};