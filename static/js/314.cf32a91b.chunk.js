"use strict";(self.webpackChunkphonebook_organizer=self.webpackChunkphonebook_organizer||[]).push([[314],{8605:(e,o,r)=>{r.r(o),r.d(o,{default:()=>g});var a=r(3050),n=r(5705),t=r(9434),i=r(8007),l=r(5822),s=r(5867);const d=(0,s.zo)(n.l0)`
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
`;var p=r(184);const c=i.Ry({email:i.Z_().email().required("Must be filled"),password:i.Z_().min(8).required("Must be filled")}),b=()=>{const e=(0,t.I0)();return(0,p.jsx)(n.J9,{initialValues:{email:"",password:""},validationSchema:c,onSubmit:async(o,r)=>{try{await e((0,l.Ib)({...o})).unwrap(),r.resetForm()}catch(a){console.error("Failed to login:",a)}},children:(0,p.jsxs)(d,{autoComplete:"off",children:[(0,p.jsxs)("label",{children:["Email",(0,p.jsx)(n.gN,{type:"email",name:"email",placeholder:"Enter your email"}),(0,p.jsx)(n.Bc,{name:"email",component:"b"})]}),(0,p.jsxs)("label",{children:["Password",(0,p.jsx)(n.gN,{type:"password",name:"password",placeholder:"Enter your password"}),(0,p.jsx)(n.Bc,{name:"password",component:"b"})]}),(0,p.jsx)("button",{type:"submit",children:"Log In"})]})})},u=r.p+"static/media/login.5740cd741ba41ee3920b.jpg",x=s.vJ`
body{
    /* background-image: url('https://kartinki.pics/uploads/posts/2021-07/1625655405_50-kartinkin-com-p-biblioteka-art-art-krasivo-55.jpg'); */

    background-image: url(${u});
}`;var m=r(8346);function g(){return(0,p.jsx)(a.B6,{children:(0,p.jsxs)(m.x,{children:[(0,p.jsx)(a.ql,{children:(0,p.jsx)("title",{children:"Login"})}),(0,p.jsx)("h2",{children:"Login Form"}),(0,p.jsx)("h5",{children:"Please sign up and let's work!!!"}),(0,p.jsx)(b,{}),(0,p.jsx)(x,{})]})})}}}]);
//# sourceMappingURL=314.cf32a91b.chunk.js.map