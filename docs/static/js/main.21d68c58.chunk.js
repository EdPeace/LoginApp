(this.webpackJsonploginapp=this.webpackJsonploginapp||[]).push([[0],[,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),o=n.n(c),s=(n(13),n.p,n(14),n(5),n(0));var i=function(e){var t=e.type,n=e.text,r=e.click;return Object(s.jsx)("button",{className:["w-full","flex","items-center","justify-center","px-8","py-4","border","border-transparent","text-base","font-medium","rounded-md","text-white","text-indigo-700","bg-indigo-100","hover:bg-indigo-200","md:py-4","md:text-lg","md:px-10","my-2"].join(" "),type:t,onClick:r,children:n})};var l=function(e){var t=e.label,n=e.uri;return Object(s.jsx)("li",{children:Object(s.jsx)("a",{alt:t,href:n,children:t})})};n(16);var u=function(){var e=[{label:"Home",uri:"#home"},{label:"Tarjetas",uri:"#cards"},{label:"Acerca",uri:"#about"}].map((function(e,t){return Object(s.jsx)(l,{label:e.label,uri:e.uri},t)}));return Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{children:e})})};var j=function(e){var t=e.title;return Object(s.jsx)("h1",{className:["text-xl","font-semibold"].join(" "),children:t})};n(17);var d=function(e){return e.children,Object(s.jsxs)("header",{children:[Object(s.jsx)(j,{title:"Mi App con react."}),Object(s.jsx)(u,{})]})},b=n(2),f=n(7);var p=function(e){var t=e.children;return Object(s.jsx)("form",{className:["inline-block","m-5","space-y-2","clear-both","text-center","p-5","bg-gray-400","rounded-2xl"].join(" "),children:t})},x=n(4),m=n(8);var h=function(e){var t=e.value,n=e.type,r=e.id,a=e.fname,c=e.onChange,o=e.caption,i=e.error,l=Object(m.a)(e,["value","type","id","fname","onChange","caption","error"]);return Object(s.jsxs)("section",{className:"w-full",children:[Object(s.jsx)("label",{className:["text-xl","font-semibold"].join(" "),children:o}),Object(s.jsx)("input",Object(x.a)(Object(x.a)({type:n,id:r,name:a,onChange:c,value:t},l),{},{className:["w-full","rounded-lg"].join(" ")})),i?Object(s.jsx)("section",{children:i}):null]})};var O=function(){var e=Object(r.useState)({username:"",password:"",usernameError:"",passwordError:""}),t=Object(f.a)(e,2),n=t[0],a=t[1],c=function(e){var t=e.currentTarget,r=t.name,c=t.value,o=null;"password"==r&&(o=/^(?=.*\d)(?=.*A-Z)(?=.*a-z)(?=.*^\w\d\s:)(^\s){8,32}$/.test(c)?null:"Contrase\xf1a Invalida"),a(Object(b.a)({formData:n},r,c),Object(b.a)({},r+"Error",o))};return Object(s.jsxs)(p,{children:[Object(s.jsx)("img",{src:"https://www.flaticon.com/svg/vstatic/svg/1077/1077012.svg?token=exp=1614472741~hmac=15d0ffff37931bf9551327db9afd08f8"}),Object(s.jsx)("h2",{className:["font-bold","text-2xl"].join(" "),children:"Inicia Sesion"}),Object(s.jsx)(h,{type:"text",id:"username",fname:"username",onChange:c,caption:"Correo Electr\xf3nico",value:n.username,error:n.usernameError,placeholder:"Tu correo"}),Object(s.jsx)(h,{type:"password",id:"password",fname:"Contrase\xf1a",onChange:c,caption:"Contrase\xf1a",value:n.password,error:n.passwordError,placeholder:"Contrase\xf1a"}),Object(s.jsx)(i,{text:"Iniciar Sesi\xf3n",click:function(e){e.preventDefault(),e.stopPropagation(),alert("Usuario:".concat(n.username," Psswd:").concat(n.password))}})]})};var v=function(){return Object(s.jsxs)("section",{children:[Object(s.jsx)(d,{}),Object(s.jsx)("section",{className:["text-center","border","border-gray-400","bg-gradient-to-b","from-green-200","to-blue-300"].join(" "),children:Object(s.jsx)(O,{})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.21d68c58.chunk.js.map