"use strict";(self.webpackChunkphonebook_organizer=self.webpackChunkphonebook_organizer||[]).push([[825],{4881:(t,e,r)=>{r.r(e),r.d(e,{default:()=>y});var o=r(3050),n=r(9434),i=r(5867);const a=i.zo.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 2px outset darkgrey;
  padding: 2px;
  border-radius: 18px;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.08);
  }
`,s=i.zo.b`
  text-align: initial;
  margin-top: 0;
  margin-bottom: 0;
`,c=i.zo.button`
  font-size: 13px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-left: auto;
  padding: 2px 8px;
  color: white;
  background-color: black;
  border-radius: 13px;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: transparent;
    color: buttonborder;
    transform: scale(1.1);
  }
`,d=i.zo.input`
  margin-left: 8px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;var l=r(8427),p=r(184);function u(t){let{id:e,text:r,completed:o}=t;const i=(0,n.I0)();return(0,p.jsxs)(a,{children:[(0,p.jsx)(d,{type:"checkbox",checked:o,onChange:()=>i((0,l.Bl)({taskId:e,completed:o}))}),(0,p.jsx)(s,{children:r}),(0,p.jsx)(c,{type:"button",onClick:()=>{i((0,l.ZK)(e))},children:"Delete"})]})}const x=i.zo.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
`,b=t=>t.tasks.items;function g(){const t=(0,n.v9)(b);return console.log(t),(0,p.jsx)(x,{children:t.map((t=>{let{_id:e,text:r,completed:o}=t;return(0,p.jsx)("li",{children:(0,p.jsx)(u,{id:e,text:r,completed:o})},e)}))})}const m=i.zo.form`
  display: flex;
  gap: 13px;
  background-color: rgba(202, 202, 202, 0.8);
  width: 100%;
  margin: auto;
  border: 2px outset black;
  border-radius: 13px;
  padding: 20px;
  margin-bottom: 28px;

  button {
    font-weight: bold;
    width: 120px;
    height: 48px;
    padding: 4px 8px;
    border-radius: 13px;
    text-transform: uppercase;
    background-color: rgba(144, 144, 144, 0.8);
  }

  button:hover,
  button:focus {
    background-color: black;
    color: white;
  }

  input {
    /* margin-top: 8px; */
    width: 100%;
    padding: 2px 13px;
    border-radius: 13px;
    outline: none;
    /* text-align: center; */
    /* background-color: rgba(255, 255, 255, 0); */
  }
`;function h(){const t=(0,n.I0)();return(0,p.jsxs)(m,{onSubmit:e=>{e.preventDefault();const r=e.currentTarget,o=r.elements.text.value;if(""!==o)return t((0,l.cb)({text:o})),void r.reset();alert("Task cannot be empty. Enter some text!")},children:[(0,p.jsx)("input",{id:"task",name:"text",placeholder:"Enter your task"}),(0,p.jsx)("button",{type:"submit",children:"Add task"})]})}const k=r.p+"static/media/tasks.21e2dc3d93441c04fce3.jpg",f=i.vJ`
body{
    /* background-image: url('https://kartinki.pics/uploads/posts/2021-07/1625655357_41-kartinkin-com-p-biblioteka-art-art-krasivo-46.jpg'); */

    background-image: url(${k});
}
`;var j=r(8346),v=r(2791);function y(){const t=(0,n.I0)();return(0,v.useEffect)((()=>{t((0,l.Jv)())}),[t]),(0,p.jsx)(o.B6,{children:(0,p.jsxs)(j.x,{children:[(0,p.jsx)(o.ql,{children:(0,p.jsx)("title",{children:"Your tasks"})}),(0,p.jsx)(h,{}),(0,p.jsx)(g,{}),(0,p.jsx)(f,{})]})})}}}]);
//# sourceMappingURL=825.fe4ec78a.chunk.js.map