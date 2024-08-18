"use strict";(self.webpackChunkphonebook_organizer=self.webpackChunkphonebook_organizer||[]).push([[825],{4881:(t,e,r)=>{r.r(e),r.d(e,{default:()=>y});var o=r(2791),n=r(9434),i=r(3050),a=r(5867);const s=a.zo.div`
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
`,c=a.zo.b`
  text-align: initial;
  margin-top: 0;
  margin-bottom: 0;
`,d=a.zo.button`
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
`,p=a.zo.input`
  margin-left: 8px;
  width: 13px;
  height: 13px;
  cursor: pointer;
`;var l=r(8427),u=r(184);function x(t){let{id:e,text:r,completed:o}=t;const i=(0,n.I0)();return(0,u.jsxs)(s,{children:[(0,u.jsx)(p,{type:"checkbox",checked:o,onChange:()=>i((0,l.Bl)({taskId:e,completed:o}))}),(0,u.jsx)(c,{children:r}),(0,u.jsx)(d,{type:"button",onClick:()=>{i((0,l.ZK)(e))},children:"Delete"})]})}const b=a.zo.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
`,g=t=>t.tasks.items;function m(){const t=(0,n.v9)(g);return(0,u.jsx)(b,{children:t.map((t=>{let{_id:e,text:r,completed:o}=t;return(0,u.jsx)("li",{children:(0,u.jsx)(x,{id:e,text:r,completed:o})},e)}))})}const h=a.zo.form`
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
`;function k(){const t=(0,n.I0)();return(0,u.jsxs)(h,{onSubmit:e=>{e.preventDefault();const r=e.currentTarget,o=r.elements.text.value;if(""!==o)return t((0,l.cb)({text:o})),void r.reset();alert("Task cannot be empty. Enter some text!")},children:[(0,u.jsx)("input",{id:"task",name:"text",placeholder:"Enter your task"}),(0,u.jsx)("button",{type:"submit",children:"Add task"})]})}const f=r.p+"static/media/tasks.21e2dc3d93441c04fce3.jpg",j=a.vJ`
body{
    /* background-image: url('https://kartinki.pics/uploads/posts/2021-07/1625655357_41-kartinkin-com-p-biblioteka-art-art-krasivo-46.jpg'); */

    background-image: url(${f});
}
`;var v=r(8346);function y(){const t=(0,n.I0)();return(0,o.useEffect)((()=>{t((0,l.Jv)())}),[t]),(0,u.jsx)(i.B6,{children:(0,u.jsxs)(v.x,{children:[(0,u.jsx)(i.ql,{children:(0,u.jsx)("title",{children:"Your tasks"})}),(0,u.jsx)(k,{}),(0,u.jsx)(m,{}),(0,u.jsx)(j,{})]})})}}}]);
//# sourceMappingURL=825.73ca0b20.chunk.js.map