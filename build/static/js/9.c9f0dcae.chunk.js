(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{118:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(118),{_origin:"https://api.emailjs.com"}),o=function(e,t,a){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},i=a(7),c=function e(t){Object(i.a)(this,e),this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"},m=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(n,r){var o=new XMLHttpRequest;o.addEventListener("load",function(e){var t=e.target,a=new c(t);200===a.status||"OK"===a.text?n(a):r(a)}),o.addEventListener("error",function(e){var t=e.target;r(new c(t))}),o.open("POST",l._origin+e,!0),Object.keys(a).forEach(function(e){o.setRequestHeader(e,a[e])}),o.send(t)})},s={init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";l._userID=e,l._origin=t},send:function(e,t,a,n){var r=n||l._userID;o(r,e,t);var i={lib_version:"3.12.1",user_id:r,service_id:e,template_id:t,template_params:a};return m("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},sendForm:function(e,t,a,n){var r=n||l._userID,i=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(a);o(r,e,t);var c=new FormData(i);return c.append("lib_version","3.12.1"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",r),m("/api/v1.0/email/send-form",c)}},d=a(22);function u(){var e=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contact-page"},r.a.createElement("div",{className:"title"},r.a.createElement("header",null,r.a.createElement(d.a,{icon:"bitcoin-icons:node-2-connections-outline"})," Contact"),r.a.createElement("hr",{className:"text-white h-100"})),r.a.createElement("div",{className:"contentSection"},r.a.createElement("div",{className:"left_side d-flex justify-content-center flex-column align-items-center"},r.a.createElement("div",{className:"contact_form p-4",style:{width:"90%"}},r.a.createElement("form",{ref:e,onSubmit:function(t){return function(t){var a=t.target[3];t.preventDefault(),console.log(t),a.innerText="Sending..",s.sendForm("service_qufmtrq","template_9gekwvy",e.current,"qK3oBMIVSah8JpT1v").then(function(e){console.log(e),a.classList.add("btn-success"),a.innerHTML="Sent!",a.disabled=!0},function(e){console.log(e),a.classList.add("btn-danger"),a.innerText="ERROR!"})}(t)}},r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("input",{type:"text",className:"form-control",id:"from_name",name:"from_name",placeholder:"Name",autoComplete:"off",required:!0}),r.a.createElement("label",{htmlFor:"from_name"},r.a.createElement(d.a,{icon:"gg:rename"})," Name")),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("input",{type:"email",className:"form-control",id:"from_email",name:"from_email",placeholder:"name@example.com",autoComplete:"off",required:!0}),r.a.createElement("label",{htmlFor:"from_email"},r.a.createElement(d.a,{icon:"line-md:email-twotone"})," Email address")),r.a.createElement("div",{className:"form-floating"},r.a.createElement("textarea",{type:"text",className:"form-control",id:"message",name:"message",placeholder:"Your Message Here...",autoComplete:"off",minLength:10,required:!0}),r.a.createElement("label",{htmlFor:"message"},r.a.createElement(d.a,{icon:"tabler:message-bolt"})," Message")),r.a.createElement("button",{type:"submit",className:"btn btn-primary w-100 mt-4"},"Send ",r.a.createElement(d.a,{icon:"cil:send"})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"contact_details m-4 p-4",style:{width:"90%"}},r.a.createElement("h3",null,r.a.createElement(d.a,{icon:"tabler:message-bolt"})," Contact Details"),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(d.a,{icon:"mdi:super-chat-for-good"})," Thanks a bunch for checking out IEEE-WIE-CRCE! Feel free to reach out to us via email, WhatsApp, or a call. Here are the awesome people you can connect with!"),r.a.createElement("p",null,r.a.createElement(d.a,{icon:"line-md:phone-call-twotone-loop"})," Aditya:"," ",r.a.createElement("a",{href:"tel:7620335644",className:"text-decoration-underline text-dark"},"+917620335644")),r.a.createElement("p",null,r.a.createElement(d.a,{icon:"line-md:phone-call-twotone-loop"})," Shivaprasad:"," ",r.a.createElement("a",{href:"tel:7558220919",className:"text-decoration-underline text-dark"},"+917558220919")),r.a.createElement("p",null,r.a.createElement(d.a,{icon:"line-md:email-twotone"})," Email:",r.a.createElement("a",{href:"mailto:ieeecrce.24@gmail.com",className:"text-decoration-underline text-dark"},"ieeecrce.24@gmail.com")),r.a.createElement("p",null,r.a.createElement(d.a,{icon:"line-md:my-location-loop"})," Fr. Agnel Ashram, Bandstand, Bandra (W), Mumbai 400050. MH, IN"))),r.a.createElement("div",{className:"collegeLocation"},r.a.createElement("iframe",{title:"College Location",src:"https://shorturl.at/moGH4",allowFullScreen:!0,height:450,loading:"lazy",style:{border:0},referrerPolicy:"no-referrer-when-downgrade",className:"rounded-3"}))),r.a.createElement("hr",null),r.a.createElement("p",null,"Developed with \u2764 by IEEE-WIE Team!"),r.a.createElement("p",null,"Copyright ",r.a.createElement(d.a,{icon:"ic:twotone-copyright"}),(new Date).getFullYear(),". All Rights Reserved.")))}a.d(t,"default",function(){return u})}}]);
//# sourceMappingURL=9.c9f0dcae.chunk.js.map