"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[717],{717:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a=t(2791),o=t(9434),i=t(4270),s=t(1413),c=t(5705),l=t(6727),d=t(6916),u=function(n){return n.contacts.items},p=function(n){return n.contacts.items.length},x=function(n){return n.filter},m=(0,d.P1)([u,x],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),b=t(3634),f=t(168),h=t(5867),g=(0,h.ZP)(c.l0)(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 13px;\n  background-color: rgba(202, 202, 202, 0.8);\n  width: 480px;\n  margin: auto;\n  border: 2px outset black;\n  border-radius: 13px;\n  padding: 20px 28px;\n  margin-bottom: 28px;\n\n  /* transform: scale(0.5);\n  opacity: 0.3;\n  transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1),\n    opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1);\n    opacity: 1;\n  } */\n\n  button {\n    font-weight: bold;\n    margin-bottom: 28px;\n    padding: 4px 8px;\n    border-radius: 22px;\n    text-transform: uppercase;\n    background-color: rgba(144, 144, 144, 0.8);\n  }\n\n  button:hover,\n  button:focus {\n    background-color: black;\n    color: white;\n  }\n\n  label {\n    font-style: oblique;\n    font-weight: 500;\n    margin-bottom: 13px;\n\n    b {\n      font-size: 13px;\n      font-style: normal;\n      font-weight: 500;\n      color: darkred;\n      text-transform: lowercase;\n    }\n\n    input {\n      margin-top: 8px;\n      width: 100%;\n      padding: 2px 13px;\n      border-radius: 13px;\n      outline: none;\n      text-align: center;\n      /* background-color: rgba(255, 255, 255, 0); */\n    }\n  }\n"]))),j=t(184),v=l.Ry().shape({name:l.Z_().matches(/^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$/,"Wrong name format").required("Must be filled"),number:l.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Wrong number format").required("Must be filled")});function y(){var n=(0,o.I0)(),e=(0,o.v9)(u);return(0,j.jsx)(c.J9,{initialValues:{name:"",number:""},validationSchema:v,onSubmit:function(t,r){var a=t.name;e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contacts.")):(n((0,b.v6)((0,s.Z)({},t))),r.resetForm())},children:(0,j.jsxs)(g,{children:[(0,j.jsxs)("label",{children:["Name",(0,j.jsx)(c.gN,{name:"name",placeholder:"Enter name"}),(0,j.jsx)(c.Bc,{name:"name",component:"b"})]}),(0,j.jsxs)("label",{children:["Number",(0,j.jsx)(c.gN,{type:"tel",name:"number",placeholder:"Enter number"}),(0,j.jsx)(c.Bc,{name:"number",component:"b"})]}),(0,j.jsx)("button",{type:"submit",children:"Add contact"})]})})}var w,k=t(9128);function Z(n){var e=n.contact,t=e.id,r=e.name,a=e.phone,i=(0,o.I0)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k.Vel,{}),(0,j.jsx)("span",{children:r}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("span",{children:[a," "]}),(0,j.jsx)("button",{type:"button",onClick:function(){return i((0,b.in)(t))},children:"Delete"})]})]})}var L=h.ZP.ul(w||(w=(0,f.Z)(["\n  width: 666px;\n  display: flex;\n  flex-direction: column;\n  gap: 13px;\n  margin: auto;\n  font-weight: 500;\n  /* font-style: oblique; */\n\n  li {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: black;\n    border: 2px outset darkgrey;\n    padding: 2px;\n    padding-left: 8px;\n    border-radius: 18px;\n    cursor: pointer;\n    transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n      transform: scale(1.1);\n    }\n\n    span {\n      font-size: 18px;\n      font-weight: 700;\n      margin-left: 13px;\n      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n        'Lucida Sans', Arial, sans-serif;\n      margin-right: auto;\n    }\n\n    div {\n      display: flex;\n      align-items: center;\n    }\n\n    div span {\n      color: whitesmoke;\n      /* padding: 2px; */\n    }\n\n    button {\n      font-size: 13px;\n      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n        'Lucida Sans', Arial, sans-serif;\n      margin-left: 40px;\n      padding: 2px 8px;\n      color: white;\n      background-color: black;\n      border-radius: 13px;\n      transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);\n\n      &:hover {\n        background-color: transparent;\n        color: buttonborder;\n        transform: scale(1.2);\n      }\n    }\n  }\n"])));function S(){var n=(0,o.v9)(m);return(0,j.jsx)(L,{children:n.map((function(n){return(0,j.jsx)("li",{children:(0,j.jsx)(Z,{contact:n})},n.id)}))})}var z,C,A=t(4808),_=h.ZP.div(z||(z=(0,f.Z)(["\n  input {\n    margin-top: 8px;\n    margin-bottom: 22px;\n    width: 480px;\n    padding: 2px 13px;\n    border-radius: 13px;\n    text-align: center;\n    outline: none;\n  }\n\n  ::placeholder {\n    text-align: center;\n  }\n"])));function q(){var n=(0,o.I0)(),e=(0,o.v9)(x);return(0,j.jsx)(_,{children:(0,j.jsx)("input",{type:"text",value:e,onChange:function(e){return t=e.target.value,void n((0,A.y)(t));var t},placeholder:"Search..."})})}var F=h.zo.span(C||(C=(0,f.Z)(["\n  display: inline-flex;\n  justify-content: space-between;\n  /* align-items: center; */\n  width: 333px;\n  margin-bottom: 15px;\n  font-size: 18px;\n  font-weight: 600;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n    'Lucida Sans', Arial, sans-serif;\n"])));function M(){var n=(0,o.v9)(m),e=(0,o.v9)(p);return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(F,{children:[(0,j.jsxs)("div",{children:["Total contacts:",(0,j.jsxs)("b",{children:[" ",e]})]})," ",(0,j.jsxs)("div",{children:["Shown contacts:",(0,j.jsxs)("b",{children:[" ",n.length]})]})]})})}function P(n){var e=n.message;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("b",{children:e})})}var I,N=t(8346),T=(0,h.vJ)(I||(I=(0,f.Z)(["\nbody{\n      background-image: url('https://bogatyr.club/uploads/posts/2023-03/1679420906_bogatyr-club-p-biblioteka-oboi-foni-pinterest-1.jpg');\n\n}"]))),E=t(5218);function G(){var n=(0,o.I0)(),e=(0,o.v9)(p);return(0,a.useEffect)((function(){n((0,b.yF)())}),[n]),(0,j.jsxs)(N.x,{children:[(0,j.jsx)(i.q,{children:(0,j.jsx)("title",{children:"Your contacts"})}),(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)(y,{}),(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(M,{}),(0,j.jsx)(q,{}),0===e?(0,j.jsx)(P,{message:"Oops! Contact's list is empty..."}):(0,j.jsx)(S,{}),(0,j.jsx)(T,{}),(0,j.jsx)(E.x7,{})]})}}}]);
//# sourceMappingURL=717.9de6ecd4.chunk.js.map