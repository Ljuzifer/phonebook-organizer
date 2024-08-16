"use strict";(self.webpackChunkphonebook_organizer=self.webpackChunkphonebook_organizer||[]).push([[545],{3255:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var n=o(2791),a=o(3050),r=o(9434),i=o(7689),s=o(5705),c=o(7425),d=o(3634),l=o(2946),p=o(5218),m=o(8346),u=o(1087),x=o(5867);const g=o.p+"static/media/contact_edit.d8226386696e11c1f0c8.jpg",h=x.vJ`
body{
    /* background-image: url('https://kartinki.pics/uploads/posts/2021-07/1625655312_1-kartinkin-com-p-biblioteka-art-art-krasivo-1.jpg'); */

    background-image: url(${g});
}
`,b=(0,x.zo)(s.l0)`
  display: flex;
  flex-direction: column;
  gap: 13px;
  background-color: rgba(202, 202, 202, 0.8);
  width: 480px;
  margin: auto;
  border: 2px outset black;
  border-radius: 13px;
  padding: 20px 28px;
  margin-bottom: 28px;

  button {
    font-weight: bold;
    margin-bottom: 28px;
    padding: 4px 8px;
    border-radius: 22px;
    text-transform: uppercase;
    background-color: rgba(144, 144, 144, 0.8);
  }

  button:hover,
  button:focus {
    background-color: black;
    color: white;
  }

  label {
    font-style: oblique;
    font-weight: 500;
    margin-bottom: 13px;

    b {
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      color: darkred;
      text-transform: lowercase;
    }

    input {
      margin-top: 8px;
      width: 100%;
      padding: 2px 13px;
      border-radius: 13px;
      outline: none;
      text-align: center;
      /* background-color: rgba(255, 255, 255, 0); */
    }
  }
`,f=(0,x.zo)(u.rU)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: midnightblue;
  margin: 22px auto;
  padding: 10px;
  width: 780px;
  height: fit-content;
  border: 4px outset #000;
  border-radius: 13px;
  background-color: rgba(119, 136, 153, 0.8);
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.02em;

  &.active {
    color: midnightblue;
  }

  svg {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    background-color: rgba(119, 136, 153, 0.2);
  }
  /* h3 {
    color: midnightblue;
    border: 4px outset midnightblue;
    background-color: lightgoldenrodyellow;
    max-width: max-content;
    border-radius: 8px;
    padding-left: 8px;
    padding-right: 8px;
    margin: auto;
    margin-bottom: 28px;
  } */
`;var k=o(5034),j=o(184);function w(){var e,t;const o=(0,r.I0)(),u=(0,i.s0)(),x=(0,i.TH)(),g=(0,n.useRef)(null!==(e=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),{contactId:w}=(0,i.UO)(),v=(0,r.v9)(l.Af),y=v.find((e=>e._id===w)),C=v.filter((e=>e.name!==y.name)),z={name:y?y.name:"",phone:y?y.phone:""};return(0,j.jsxs)(a.B6,{children:[(0,j.jsxs)(f,{to:g.current,children:[(0,j.jsx)(c.sxm,{})," Go back"]}),(0,j.jsxs)(m.x,{children:[(0,j.jsx)(a.ql,{children:(0,j.jsx)("title",{children:"Edit contact"})}),(0,j.jsx)("h2",{children:"Let's edit your contact"}),(0,j.jsx)(s.J9,{initialValues:z,validationSchema:k.O,onSubmit:e=>{const t={name:e.name,phone:e.phone,contactId:w},n=e.name;C.some((e=>e.name.toLowerCase()===n.toLowerCase()))?p.Am.success(`Oops! ${n} is already exists!!! Please change it...`,{duration:2e3,position:"top-center"}):(o((0,d.LG)(t)),p.Am.success(`Contact of ${t.name} is updated!`,{duration:2e3,position:"top-center"}),setTimeout((()=>{u(-1)}),2200))},children:(0,j.jsxs)(b,{children:[(0,j.jsxs)("label",{children:["Contact's name",(0,j.jsx)(s.gN,{type:"text",name:"name",placeholder:`${y.name}`}),(0,j.jsx)(s.Bc,{name:"name",component:"b"})]}),(0,j.jsxs)("label",{children:["Contact's phone",(0,j.jsx)(s.gN,{type:"tel",name:"phone",placeholder:`${y.phone}`}),(0,j.jsx)(s.Bc,{name:"phone",component:"b"})]}),(0,j.jsx)("button",{type:"submit",children:"Confirm changes"})]})}),(0,j.jsx)(p.x7,{}),(0,j.jsx)(h,{})]})]})}},2946:(e,t,o)=>{o.d(t,{AD:()=>i,Af:()=>a,G$:()=>r,hF:()=>s});var n=o(6916);const a=e=>e.contacts.items,r=e=>e.contacts.items.length,i=e=>e.filter,s=(0,n.P1)([a,i],((e,t)=>e.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())))))},5034:(e,t,o)=>{o.d(t,{O:()=>a});var n=o(8007);const a=n.Ry().shape({name:n.Z_().matches(/^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$/,"Wrong name format").required("Must be filled"),phone:n.Z_()})}}]);
//# sourceMappingURL=545.1e9dfeff.chunk.js.map