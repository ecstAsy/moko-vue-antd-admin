import{j as A,q as C,s as U,c as $,w as t,W as R,o as S,a as e,x as o,l,Y as z,Z as B,$ as F,a0 as O,a1 as V,a2 as Z,a3 as I,a4 as N,a5 as L,a6 as T,a7 as W,a8 as Y,a9 as D,aa as E}from"./vendor.a9881912.js";/* empty css              *//* empty css              *//* empty css              */const G=l(" Zone one "),H=l(" Zone two "),J=l(" Online "),K=l(" Promotion "),M=l(" Offline "),Q=l(" Sponsor "),X=l(" Venue "),ee=l(" Create "),te=l(" Reset "),re=A({setup(ae){const i=C(),n=U({name:"",region:void 0,date1:void 0,delivery:!1,type:[],resource:"",desc:""}),v={name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{required:!0,message:"Please pick a date",trigger:"change",type:"object"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]},f=()=>{i.value.validate().then(()=>{console.log("values",n,z(n))}).catch(d=>{console.log("error",d)})},g=()=>{i.value.resetFields()};return(d,s)=>{const y=B,r=F,c=O,x=V,b=Z,h=I,u=N,k=L,p=T,w=W,q=Y,m=D,P=E,j=R;return S(),$(j,null,{default:t(()=>[e(P,{ref:(a,_)=>{_.formRef=a,i.value=a},model:o(n),rules:v,"label-col":{span:4},"wrapper-col":{span:14}},{default:t(()=>[e(r,{ref:(a,_)=>{_.name=a},label:"Activity name",name:"name"},{default:t(()=>[e(y,{value:o(n).name,"onUpdate:value":s[0]||(s[0]=a=>o(n).name=a)},null,8,["value"])]),_:1},512),e(r,{label:"Activity zone",name:"region"},{default:t(()=>[e(x,{value:o(n).region,"onUpdate:value":s[1]||(s[1]=a=>o(n).region=a),placeholder:"please select your zone"},{default:t(()=>[e(c,{value:"shanghai"},{default:t(()=>[G]),_:1}),e(c,{value:"beijing"},{default:t(()=>[H]),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"Activity time",required:"",name:"date1"},{default:t(()=>[e(b,{value:o(n).date1,"onUpdate:value":s[2]||(s[2]=a=>o(n).date1=a),"show-time":"",type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["value"])]),_:1}),e(r,{label:"Instant delivery",name:"delivery"},{default:t(()=>[e(h,{checked:o(n).delivery,"onUpdate:checked":s[3]||(s[3]=a=>o(n).delivery=a)},null,8,["checked"])]),_:1}),e(r,{label:"Activity type",name:"type"},{default:t(()=>[e(k,{value:o(n).type,"onUpdate:value":s[4]||(s[4]=a=>o(n).type=a)},{default:t(()=>[e(u,{value:"1",name:"type"},{default:t(()=>[J]),_:1}),e(u,{value:"2",name:"type"},{default:t(()=>[K]),_:1}),e(u,{value:"3",name:"type"},{default:t(()=>[M]),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"Resources",name:"resource"},{default:t(()=>[e(w,{value:o(n).resource,"onUpdate:value":s[5]||(s[5]=a=>o(n).resource=a)},{default:t(()=>[e(p,{value:"1"},{default:t(()=>[Q]),_:1}),e(p,{value:"2"},{default:t(()=>[X]),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"Activity form",name:"desc"},{default:t(()=>[e(q,{value:o(n).desc,"onUpdate:value":s[6]||(s[6]=a=>o(n).desc=a)},null,8,["value"])]),_:1}),e(r,{"wrapper-col":{span:14,offset:4}},{default:t(()=>[e(m,{type:"primary",onClick:f},{default:t(()=>[ee]),_:1}),e(m,{style:{"margin-left":"10px"},onClick:g},{default:t(()=>[te]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}});export{re as default};