(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{174:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(39),r=n.n(c),s=n(16),i=n(0),o=n.n(i),u=n(1),l=n(12),j=n(35),d=n(28),b=n(13),O=n(14),p=n(27),h=n(30),f=n.n(h),m=n(25),_=n(66),v={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_apiKey,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_authDomain,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_projectId,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_storageBucket,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_messagingSenderId,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_appId};Object(_.a)(v);var x=new m.a,g=Object(p.d)(),y=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return" https://api.cloudinary.com/v1_1/de68evi8c/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch(" https://api.cloudinary.com/v1_1/de68evi8c/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),N=n(33),S=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.d)(Object(N.f)(Object(N.a)(g,"".concat(t,"/journal/notes"))));case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(O.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E="[Auth] Login",w="[Auth] Logout",C="[UI] Set Error",T="[UI] Remove Error",P="[UI] Start loading",k="[UI] Finish loading",D="[Notes] New note",R="[Notes] Set active note",A="[Notes] Load notes",L="[Notes] Updated note",I="[Notes] Delete note",K="[Notes] Logout Cleaning",W=function(e,t){return{type:R,payload:Object(O.a)({id:e},t)}},U=function(e,t){return{type:D,payload:Object(O.a)({id:e},t)}},H=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:a=t.sent,n(F(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return{type:A,payload:e}},B=function(e,t){return{type:L,payload:{id:e,note:Object(O.a)({id:e},t)}}},V=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,a){var c,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(O.a)({},e)).id,s=Object(p.c)(g,"".concat(c,"/journal/notes/").concat(e.id)),t.next=7,Object(p.f)(s,r);case 7:n(B(e.id,e)),f.a.fire("Saved",e.title,"success");case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},J=function(e){return{type:I,payload:e}},q=n(4),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(O.a)(Object(O.a)({},c),{},Object(q.a)({},t.name,t.value)))};return[c,i,s]},X=n(6),z=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;return Object(X.jsxs)("div",{className:"notes__appbar",children:[Object(X.jsx)("span",{children:"28 de agosto 2020"}),Object(X.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,a){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,f.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){f.a.showLoading()}}),t.next=4,y(e);case 4:r=t.sent,c.url=r,n(V(c)),f.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(X.jsxs)("div",{children:[Object(X.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(X.jsx)("button",{className:"btn",onClick:function(){e(V(t))},children:"Save"})]})]})},M=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active,n=G(t),c=Object(l.a)(n,3),r=c[0],i=c[1],j=c[2],d=r.body,b=r.title,h=r.id,f=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==f.current&&(j(t),f.current=t.id)}),[t,j]),Object(a.useEffect)((function(){e(W(r.id,Object(O.a)({},r)))}),[r,e]);return Object(X.jsxs)("div",{className:"notes__main-content",children:[Object(X.jsx)(z,{}),Object(X.jsxs)("div",{className:"notes__content",children:[Object(X.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:b,onChange:i}),Object(X.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:d,onChange:i}),t.url&&Object(X.jsx)("div",{className:"notes__image",children:Object(X.jsx)("img",{src:t.url,alt:"imagen"})})]}),Object(X.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,a){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,r=Object(p.c)(g,"".concat(c,"/journal/notes/").concat(e)),t.next=4,Object(p.b)(r);case 4:n(J(e));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(h))},children:"DELETE"})]})},Q=function(){return Object(X.jsxs)("div",{className:"nothing__main-content",children:[Object(X.jsxs)("p",{children:["Select something",Object(X.jsx)("br",{}),"pr create an entry!"]}),Object(X.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},Y=function(e){return{type:C,payload:e}},Z=function(){return{type:k}},$=function(e,t){return function(n){n({type:P});var a=Object(m.c)();Object(m.d)(a,e,t).then((function(e){var t=e.user;n(ee(t.uid,t.displayName)),n(Z())})).catch((function(e){n(Z()),f.a.fire("Error",e.message,"error")}))}},ee=function(e,t){return{type:E,payload:{uid:e,displayName:t}}},te=function(){return{type:w}},ne=n(67),ae=n.n(ne),ce=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,i=ae()(n),o=Object(s.b)();return Object(X.jsxs)("div",{className:"journal__entry pointer",onClick:function(){o(W(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object(X.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(X.jsxs)("div",{className:"journal__entry-body",children:[Object(X.jsx)("p",{className:"journal__entry-title",children:a}),Object(X.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(X.jsxs)("div",{className:"journal__entry-date-box",children:[Object(X.jsx)("span",{children:i.format("dddd")}),Object(X.jsx)("h4",{children:i.format("Do")})]})]})},re=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(X.jsxs)("div",{className:"journal__entries",children:[Object(X.jsx)("h1",{children:"Journal entries"}),Object(X.jsx)("br",{}),e.map((function(e){return Object(X.jsx)(ce,Object(O.a)({},e),e.id)}))]})},se=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(X.jsxs)("aside",{className:"journal__sidebar",children:[Object(X.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(X.jsxs)("h3",{className:"mt-5",children:[Object(X.jsx)("i",{className:"far fa-moon"}),Object(X.jsxs)("span",{children:[" ",t]})]}),Object(X.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(m.c)(),e.next=3,n.signOut();case 3:t(te()),t({type:K});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(X.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,console.log(a),c={title:"",body:"",date:(new Date).getTime()},r=Object(p.c)(Object(p.a)(g,"".concat(a,"/journal/notes"))),e.next=6,Object(p.e)(r,c);case 6:t(W(r.id,c)),t(U(r.id,c));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(X.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(X.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(X.jsx)(re,{})]})},ie=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(X.jsxs)("div",{className:"journal__main-content",children:[Object(X.jsx)(se,{}),Object(X.jsx)("main",{children:e?Object(X.jsx)(M,{}):Object(X.jsx)(Q,{})})]})},oe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=G({email:"jojo@gmail.com",password:"123456"}),a=Object(l.a)(n,2),c=a[0],r=a[1],i=c.email,o=c.password;return Object(X.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(X.jsx)("h3",{className:"auth__title",children:"Login "}),Object(X.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e($(i,o))},children:[Object(X.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(X.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:o,onChange:r}),Object(X.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(X.jsx)("hr",{}),Object(X.jsxs)("div",{className:"auth__social-networks",children:[Object(X.jsx)("p",{children:"Login  whit social networks"}),Object(X.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){var t=Object(m.c)();Object(m.e)(t,x).then((function(t){var n=t.user;e(ee(n.uid,n.displayName))}))}))},children:[Object(X.jsx)("div",{className:"google-icon-wrapper",children:Object(X.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(X.jsx)("p",{className:"btn-text",children:Object(X.jsx)("b",{children:"Sign in with google"})})]})]}),Object(X.jsx)(d.b,{to:"/auth/register",className:"link",children:" Create  new account"})]})]})},ue=n(68),le=n.n(ue),je=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=G({name:"jo",email:"jojo@gmail.com",password:"123456",password2:"123456"}),a=Object(l.a)(n,2),c=a[0],r=a[1],i=c.name,j=c.email,b=c.password,O=c.password2,p=function(){return 0===i.trim().length?(e(Y("Name is required")),!1):le.a.isEmail(j)?b!==O||b.length<5?(e(Y("Password should be at least 6 characters and match each other")),!1):(e({type:T}),!0):(e(Y("Email is not valid")),!1)};return Object(X.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(X.jsx)("h3",{className:"auth__title",children:"Register "}),Object(X.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p()&&e(function(e,t,n){return function(a){var c=Object(m.c)();Object(m.b)(c,e,t).then(function(){var e=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,Object(m.f)(c,{displayName:n});case 3:a(ee(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return f.a.fire("Error",e.message,"error")}))}}(j,b,i))},children:[t&&Object(X.jsx)("div",{className:"auth__alert-error",children:t}),Object(X.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(X.jsx)("input",{type:"text",placeholder:"email",name:"email",className:"auth__input",autoComplete:"off",value:j,onChange:r}),Object(X.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:b,onChange:r}),Object(X.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:O,onChange:r}),Object(X.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(X.jsx)(d.b,{to:"/auth/login",className:"link",children:" Already registered?"})]})]})},de=function(){return Object(X.jsx)("div",{className:"auth__main",children:Object(X.jsx)("div",{className:"auth__box-container",children:Object(X.jsxs)(b.d,{children:[Object(X.jsx)(b.b,{exact:!0,path:"/login",element:Object(X.jsx)(oe,{})}),Object(X.jsx)(b.b,{exact:!0,path:"/register",element:Object(X.jsx)(je,{})}),Object(X.jsx)(b.b,{path:"/*",element:Object(X.jsx)(b.a,{to:"/auth/login"})})]})})})},be=function(e){var t=e.isAuthenticated,n=e.element;return t?n:Object(X.jsx)(b.a,{to:"/auth/login"})},Oe=function(e){var t=e.isAuthenticated,n=e.element;return t?Object(X.jsx)(b.a,{to:"/"}):n},pe=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),O=Object(l.a)(i,2),p=O[0],h=O[1];return Object(a.useEffect)((function(){var t=Object(j.c)();Object(j.d)(t,function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(ee(n.uid,n.displayName)),h(!0),e(H(n.uid))):h(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r]),c?Object(X.jsx)("h1",{children:"Waiting data...."}):Object(X.jsx)(d.a,{children:Object(X.jsx)("div",{children:Object(X.jsxs)(b.d,{children:[Object(X.jsx)(b.b,{path:"/*",element:Object(X.jsx)(be,{isAuthenticated:p,element:Object(X.jsx)(ie,{})})}),Object(X.jsx)(b.b,{path:"/auth/*",element:Object(X.jsx)(Oe,{isAuthenticated:p,element:Object(X.jsx)(de,{})})}),Object(X.jsx)(b.b,{path:"/*",element:Object(X.jsx)(b.a,{to:"/auth/login"})})]})})})},he=n(37),fe=n(69),me={loading:!1,msgError:null},_e=n(18),ve={notes:[],active:null},xe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.c,ge=Object(he.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{uid:t.payload.uid,name:t.payload.displayName};case w:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(O.a)(Object(O.a)({},e),{},{msgError:t.payload});case T:return Object(O.a)(Object(O.a)({},e),{},{msgError:null});case P:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case k:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(O.a)(Object(O.a)({},e),{},{active:Object(O.a)({},t.payload)});case D:return Object(O.a)(Object(O.a)({},e),{},{notes:[t.payload].concat(Object(_e.a)(e.notes))});case A:return Object(O.a)(Object(O.a)({},e),{},{notes:Object(_e.a)(t.payload)});case L:return Object(O.a)(Object(O.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case I:return Object(O.a)(Object(O.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case K:return Object(O.a)(Object(O.a)({},e),{},{active:null,notes:[]});default:return e}}}),ye=Object(he.d)(ge,xe(Object(he.a)(fe.a))),Ne=function(){return Object(X.jsx)(s.a,{store:ye,children:Object(X.jsx)(pe,{})})};n(174);r.a.render(Object(X.jsx)(Ne,{}),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.37ba0962.chunk.js.map