"use strict";(self.webpackChunkphonebook_organizer=self.webpackChunkphonebook_organizer||[]).push([[461],{9193:(e,n,t)=>{t.r(n),t.d(n,{default:()=>G});var o=t(2791),r=t(9434),a=t(3050),i=t(5705),s=t(2946),c=t(3634),l=t(5867);const d=(0,l.ZP)(i.l0)`
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

  /* transform: scale(0.5);
  opacity: 0.3;
  transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1);
    opacity: 1;
  } */

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
`;var p=t(5034),x=t(184);function h(){const e=(0,r.I0)(),n=(0,r.v9)(s.Af);return(0,x.jsx)(i.J9,{initialValues:{name:"",phone:""},validationSchema:p.O,onSubmit:(t,o)=>{const r=t.name;n.some((e=>e.name.toLowerCase()===r.toLowerCase()))?alert(`${r} is already in contacts.`):(e((0,c.v6)({...t})),o.resetForm())},children:(0,x.jsxs)(d,{children:[(0,x.jsxs)("label",{children:["Name",(0,x.jsx)(i.gN,{name:"name",placeholder:"Enter name"}),(0,x.jsx)(i.Bc,{name:"name",component:"b"})]}),(0,x.jsxs)("label",{children:["Phone",(0,x.jsx)(i.gN,{type:"tel",name:"phone",placeholder:"Enter phone number"}),(0,x.jsx)(i.Bc,{name:"phone",component:"b"})]}),(0,x.jsx)("button",{type:"submit",children:"Add contact"})]})})}var u=t(8617),m=t(7689),b=t(1087);const g=l.zo.div`
  display: flex;
  /* align-items: center; */
  color: black;
  border: 2px outset darkgrey;
  padding: 6px;
  border-radius: 18px;
  cursor: pointer;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.04);
  }
`,f=(0,l.zo)(b.rU)`
  display: flex;
  align-items: center;
  padding-left: 2px;
  width: 100%;
  color: black;
  text-decoration: none;

  &:visited {
    color: black;
  }

  img {
    display: block;
    margin: 0;
    padding: 0;
    width: 68px;
    height: 68px;
    border-radius: 13px;
    object-fit: cover;
    background-color: #4e4747;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* justify-content: space-between; */
    /* align-items: center; */
    width: 100%;

    span {
      /* display: inline-block; */
      font-size: 18px;
      font-weight: 700;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
      margin-left: 13px;
      margin-right: auto;
    }

    p {
      display: block;
      color: #4e4747;
      font-weight: 800;
      margin-left: 13px;
      margin-right: auto;
    }

    b {
      /* margin-right: 48px; */
      /* color: whitesmoke; */
      color: midnightblue;
    }
  }
`,j=l.zo.button`
  display: block;
  font-size: 13px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  padding: 2px 8px;
  height: fit-content;
  color: white;
  background-color: black;
  border-radius: 13px;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: transparent;
    color: buttonborder;
    transform: scale(1.08);
  }
`;function v(e){let{contact:n}=e;const{_id:t,name:o,phone:a,email:i,avatarURL:s}=n,l=(0,r.I0)(),d=(0,m.TH)();return(0,x.jsxs)(g,{children:[(0,x.jsxs)(f,{to:`/contacts/${t}`,state:{from:d},children:[(0,x.jsx)("img",{src:s,alt:"Contact's avatar"}),(0,x.jsx)(u.Vel,{size:22}),(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:o}),a&&(0,x.jsxs)("p",{children:["phone: ",(0,x.jsx)("b",{children:a})]}),i&&(0,x.jsxs)("p",{children:["email: ",(0,x.jsx)("b",{children:i})]})]})]}),(0,x.jsx)(j,{type:"button",onClick:()=>l((0,c.in)(t)),children:"Delete"})]})}const y=l.ZP.ul`
  width: 666px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin: auto;
  font-weight: 500;
`;function k(){const e=(0,r.v9)(s.hF).sort(((e,n)=>e.name.localeCompare(n.name)));return(0,x.jsx)(y,{children:e.map((e=>(0,x.jsx)("li",{children:(0,x.jsx)(v,{contact:e})},e._id)))})}var w=t(4808);const z=l.ZP.div`
  input {
    margin-top: 8px;
    margin-bottom: 22px;
    width: 480px;
    padding: 2px 13px;
    border-radius: 13px;
    text-align: center;
    outline: none;
  }

  ::placeholder {
    text-align: center;
  }
`;function L(){const e=(0,r.I0)(),n=(0,r.v9)(s.AD);return(0,x.jsx)(z,{children:(0,x.jsx)("input",{type:"text",value:n,onChange:n=>{return t=n.target.value,void e((0,w.y)(t));var t},placeholder:"Search..."})})}const S=l.zo.span`
  display: inline-flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 333px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;function C(){const e=(0,r.v9)(s.hF),n=(0,r.v9)(s.G$);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(S,{children:[(0,x.jsxs)("div",{children:["Total contacts:",(0,x.jsxs)("b",{children:[" ",n]})]})," ",(0,x.jsxs)("div",{children:["Shown contacts:",(0,x.jsxs)("b",{children:[" ",e.length]})]})]})})}function A(e){let{message:n}=e;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("b",{children:n})})}var Z=t(8346);const F=t.p+"static/media/contacts.10ca8ca6c6494bd8c807.jpg",P=l.vJ`
body{
      background-image: url(${F});
}`,$=l.ZP.div`
  /* @media (min-width: 1280px) {
    display: flex;
    gap: 20px;
  } */
`;function G(){const e=(0,r.I0)(),n=(0,r.v9)(s.G$);return(0,o.useEffect)((()=>{e((0,c.yF)())}),[e]),(0,x.jsx)(a.B6,{children:(0,x.jsxs)(Z.x,{children:[(0,x.jsx)(a.ql,{children:(0,x.jsx)("title",{children:"Your contacts"})}),(0,x.jsx)("h1",{children:"Phonebook-Organizer"}),(0,x.jsxs)($,{children:[(0,x.jsx)(h,{}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(C,{}),(0,x.jsx)(L,{}),0===n?(0,x.jsx)(A,{message:"Oops! Contact's list is empty..."}):(0,x.jsx)(k,{})]})]}),(0,x.jsx)(P,{})]})})}},2946:(e,n,t)=>{t.d(n,{AD:()=>i,Af:()=>r,G$:()=>a,hF:()=>s});var o=t(6916);const r=e=>e.contacts.items,a=e=>e.contacts.items.length,i=e=>e.filter,s=(0,o.P1)([r,i],((e,n)=>e.filter((e=>e.name.toLowerCase().includes(n.toLowerCase())))))},5034:(e,n,t)=>{t.d(n,{O:()=>r});var o=t(8007);const r=o.Ry().shape({name:o.Z_().matches(/^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$/,"Wrong name format").required("Must be filled"),phone:o.Z_()})}}]);
//# sourceMappingURL=461.c73d160c.chunk.js.map