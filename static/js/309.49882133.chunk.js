"use strict";(self.webpackChunkphonebook_organizer=self.webpackChunkphonebook_organizer||[]).push([[309],{2799:(e,r,a)=>{a.r(r),a.d(r,{default:()=>j});var o=a(3050),n=a(5705),t=a(8007),i=a(9434),s=a(5822),l=a(5867);const d=(0,l.zo)(n.l0)`
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
`;var c=a(7689),p=a(1087),m=a(184);const u=t.Ry({name:t.Z_().required("Must be filled"),email:t.Z_().email().required("Must be filled"),password:t.Z_().min(8).required("Must be filled")});function b(){const e=(0,i.I0)(),r=(0,c.s0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{children:"Registration Form"}),(0,m.jsxs)("h5",{children:["Have an account already? ",(0,m.jsx)(p.rU,{to:"/login",children:"Sign Up"})," please!"]}),(0,m.jsx)(n.J9,{initialValues:{name:"",email:"",password:""},validationSchema:u,onSubmit:async(a,o)=>{try{await e((0,s.z2)({...a})).unwrap(),o.resetForm(),r("/login")}catch(n){console.error("Failed to register:",n)}},children:(0,m.jsxs)(d,{autoComplete:"off",children:[(0,m.jsxs)("label",{name:"name",children:["Username",(0,m.jsx)(n.gN,{type:"text",name:"name",placeholder:"Enter your name"}),(0,m.jsx)(n.Bc,{name:"name",component:"b"})]}),(0,m.jsxs)("label",{name:"email",children:["Email",(0,m.jsx)(n.gN,{type:"email",name:"email",placeholder:"Enter your email"}),(0,m.jsx)(n.Bc,{name:"email",component:"b"})]}),(0,m.jsxs)("label",{name:"password",children:["Password",(0,m.jsx)(n.gN,{type:"password",name:"password",placeholder:"Enter your password"}),(0,m.jsx)(n.Bc,{name:"password",component:"b"})]}),(0,m.jsx)("button",{type:"submit",children:"Register"})]})})]})}const x=a.p+"static/media/register.1bc32c8dda66de349989.jpg",g=l.vJ`
body{
    /* background-image: url('https://kartinki.pics/uploads/posts/2021-07/thumbs/1625655412_56-kartinkin-com-p-biblioteka-art-art-krasivo-61.jpg'); */

    background-image: url(${x});
}
`;var h=a(8346);function j(){return(0,m.jsx)(o.B6,{children:(0,m.jsxs)(h.x,{children:[(0,m.jsx)(o.ql,{children:(0,m.jsx)("title",{children:"Registration"})}),(0,m.jsx)(b,{}),(0,m.jsx)(g,{})]})})}}}]);
//# sourceMappingURL=309.49882133.chunk.js.map