"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[181],{6181:function(s,e,a){a.r(e),a.d(e,{default:function(){return m}});var i=a(2706),n={dialogs:"Dialogs_dialogs__DtIRT","dialogs-list":"Dialogs_dialogs-list__VBiFh",dialog:"Dialogs_dialog__6NNSC","dialog-link":"Dialogs_dialog-link__-HD2t",active:"Dialogs_active__V+9i9","messages-list":"Dialogs_messages-list__TsWK7",avatar:"Dialogs_avatar__Jwkg0"},t=a(2734),l=(a(8381),a(9343)),r=function(s){var e="/dialogs/".concat(s.id);return(0,l.jsx)("li",{className:"".concat(n.dialog),children:(0,l.jsxs)(t.OL,{to:e,activeClassName:n.active,className:n["dialog-link"],children:[(0,l.jsx)("div",{className:n.avatar,children:(0,l.jsx)("img",{src:s.avatar})}),(0,l.jsx)("span",{children:s.name})]})})},g=function(s){return(0,l.jsx)("li",{className:n.message,children:s.message})},o=a(5783),d=function(s){return(0,l.jsx)(o.J9,{initialValues:{newMessageText:""},validate:function(s){var e={};return s.newMessageText||(e.newMessageText="Required"),e},onSubmit:function(e,a){var i=a.setSubmitting;console.log(e),s.onSubmit(e),i(!1)},children:function(s){var e=s.isSubmitting,a=s.errors,i=s.touched;return(0,l.jsxs)(o.l0,{children:[(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"new-message",children:(0,l.jsx)(o.gN,{component:"textarea",name:"newMessageText",placeholder:"Enter your message...",className:"new-message__textarea"})})}),a.newMessageText&&i.newMessageText&&a.newMessageText,(0,l.jsx)("button",{type:"submit",disabled:e,children:"Add post"})]})}})},c=a(440),u=a(3726),m=(0,a(4479).qC)((0,c.$j)((function(s){return{dialogs:s.dialogsPage.dialogs,messages:s.dialogsPage.messages,isAuth:s.auth.isAuth}}),{addMessage:i.H}),u.D)((function(s){var e=s.dialogs.map((function(s){return(0,l.jsx)(r,{name:s.name,id:s.id,avatar:s.avatar},s.id)})),a=s.messages.map((function(s){return(0,l.jsx)(g,{message:s.message},s.id)}));return(0,l.jsxs)("div",{className:n.dialogs,children:[(0,l.jsx)("ul",{className:n["dialogs-list"],children:e}),(0,l.jsx)("ul",{className:n["messages-list"],children:a}),(0,l.jsx)(d,{onSubmit:function(e){s.addMessage(e.newMessageText)}})]})}))}}]);
//# sourceMappingURL=181.73855132.chunk.js.map