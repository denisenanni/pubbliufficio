(this.webpackJsonppubbliufficio=this.webpackJsonppubbliufficio||[]).push([[0],{35:function(e,i,t){},53:function(e,i,t){"use strict";t.r(i);var c=t(1),a=t.n(c),o=t(17),n=t.n(o),r=(t(35),t(12)),s=t.p+"static/media/pubbliufficio-logo.e870ffa3.png",l=t.p+"static/media/pubbliufficio-logo-mobile.82e4426f.png",u=t.p+"static/media/inverted-pubbliufficio-logo.ccdee2a7.png",m=t(6),b=t(28),d=t(29),j=t(21),p=Object(j.a)({name:"pubbliufficio",initialState:{isMobile:/Mobi/i.test(window.navigator.userAgent),isMenuOpen:!1,isFormSubmitted:!1,formValues:null},reducers:{setIsMenuOpen:function(e,i){e.isMenuOpen=i.payload},setIsFormSubmitted:function(e,i){e.isFormSubmitted=i.payload}}}),h=p.actions,f=h.setIsMenuOpen,O=h.setIsFormSubmitted,g=p.reducer,x=t(2);var v=function(){return Object(x.jsx)("div",{className:"Header",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsx)(N,{})})})};function N(){var e=Object(m.c)((function(e){return e.isMobile})),i=Object(m.c)((function(e){return e.isMenuOpen})),t=Object(m.b)();return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"row Menu",children:[e&&!i?Object(x.jsx)("div",{className:"col-2",children:Object(x.jsx)(b.a,{onClick:function(){return t(f(!i))},size:40})}):null,e&&i?Object(x.jsx)("div",{className:"col-2",children:Object(x.jsx)(d.a,{onClick:function(){return t(f(!i))},size:40})}):null,Object(x.jsx)(r.b,{className:"col Logo",to:"/",children:Object(x.jsx)(z,{})}),Object(x.jsxs)(r.b,{className:e?"Home ":"col Home",to:"/",onClick:function(){return t(f(!1))},children:[" ","Pubbliufficio"," "]}),Object(x.jsxs)(r.b,{className:e?i?"Menu-item-mobile":"Menu-item-mobile-closed":"col Menu-item",to:"/contattaci",onClick:function(){return t(f(!1))},children:[" ","Contattaci"]}),Object(x.jsxs)(r.b,{className:e?i?"Menu-item-mobile":"Menu-item-mobile-closed":"col Menu-item",to:"/le-nostre-lavorazioni",onClick:function(){return t(f(!1))},children:[" ","Le nostre lavorazioni"]}),Object(x.jsxs)(r.b,{className:e?i?"Menu-item-mobile":"Menu-item-mobile-closed":"col Menu-item",to:"/dove-siamo",onClick:function(){return t(f(!1))},children:[" ","Dove siamo"]})]})})}function z(){var e=Object(m.c)((function(e){return e.isMobile}));return Object(x.jsx)("img",{className:"Logo-image",alt:"logo",src:e?l:s,onMouseOver:e?null:function(e){return e.currentTarget.src=u},onMouseLeave:e?null:function(e){return e.currentTarget.src=s}})}var w=t(30),M=t.n(w),S=t(16),F=t(25);var C=function(e){var i=e.content,t=e.reverse,a=Object(m.c)((function(e){return e.isMobile})),o=Object(c.useState)(!1),n=Object(S.a)(o,2),r=n[0],s=n[1];return Object(x.jsxs)("div",{onClick:a?function(){return s(!r)}:null,children:[!a&&Object(x.jsxs)("div",{className:t?"row text-left mb-4 mt-4 Row-reverse":"row text-left mb-4 mt-4",children:[Object(x.jsx)("div",{className:"col-5",children:Object(x.jsx)("img",{alt:"pubbliufficio-spiralatura",className:"img-fluid img-thumbnail rounded-circle Home-image",src:i.image})}),Object(x.jsxs)("div",{className:a?r?"col mobile":"col mobile title":"col-7 Align-self-flex-end",children:[Object(x.jsx)("h3",{className:a?r?"title-hidden":"title":"",children:i.title}),Object(x.jsx)("p",{className:a?r?"card-open":"card-closed":"",children:i.description}),a&&Object(x.jsx)("div",{className:"arrow",children:Object(x.jsxs)("span",{children:[" ",Object(x.jsx)(F.a,{size:45})]})})]})]}),a&&Object(x.jsxs)("div",{className:"Mobile-card-container container-fluid mt-4",style:{backgroundImage:"url('".concat(i.image,"')")},children:[Object(x.jsx)("div",{className:"mobile row",children:Object(x.jsxs)("div",{className:r?"col mobile":"col mobile title",children:[Object(x.jsx)("h3",{className:r?"title-hidden":"title",children:i.title}),Object(x.jsx)("p",{className:r?"card-open":"card-closed",children:i.description})]})}),Object(x.jsx)("div",{className:"arrow mobile row",children:Object(x.jsxs)("span",{children:[" ",Object(x.jsx)(F.a,{size:45})]})})]})]})},T=[{original:"https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/paper.jpg"},{original:"https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/paper2.jpg"},{original:"https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/particolare-calendario.jpg"}];var E=function(){var e=Object(m.c)((function(e){return e.isMobile})),i=[{title:"Spiralatura",description:"Siamo specializzati nella rilegatura a spirale di qualsiasi articolo, calendari da tavolo, calendari da muro con gancetto, quaderni, blocchi, planning",image:"https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/dorsetti-opaca.jpg"},{title:"Allestimento",description:"Eseguiamo anche lavoro di allestimento su calendari, blocchi e qualsiasi altro articolo che lo richiede",image:"https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/libro-ministero-opaca.jpg"},{title:"Foratura",description:"Utilizziamo Foratrici Rilecart F-500 per bucare gli articoli e prepararli poi infine alla rilegatura",image:"https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/rilegatrice-opaca.jpg"}],t=[{title:"Spiralatura",description:"Siamo specializzati nella rilegatura a spirale di qualsiasi articolo, calendari da tavolo, calendari da muro con gancetto, quaderni, blocchi, planning",image:"https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/dorsetti.jpg"},{title:"Allestimento",description:"Eseguiamo anche lavoro di allestimento su calendari, blocchi e qualsiasi altro articolo che lo richiede",image:"https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/libro-ministero.jpg"},{title:"Foratura",description:"Utilizziamo Foratrici Rilecart F-500 per bucare gli articoli e prepararli poi infine alla rilegatura",image:"https://images-pubbliufficio.s3.eu-south-1.amazonaws.com/rilegatrice.jpg"}];return Object(x.jsxs)("div",{className:e?"":"container",children:[Object(x.jsx)("div",{className:e?"":"mb-4",children:Object(x.jsx)(M.a,{items:T,showThumbnails:!1,showFullscreenButton:!1,autoPlay:!0,showPlayButton:!1})}),Object(x.jsx)("div",{className:"row Main",children:function(){var c=(e?i:t).map((function(e,i){return Object(x.jsx)(C,{content:e,reverse:i%2!==0},i)}));return Object(x.jsx)("div",{className:"col-12",children:c})}()})]})},A=t(5);var D=function(){var e=Object(m.c)((function(e){return e.isMobile}));return Object(x.jsxs)("div",{className:"container-fluid Main-page text-center",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("h3",{children:"Dove siamo"}),Object(x.jsx)("p",{children:"Via Pezze di Ninfa 13, Cori (LT)"}),Object(x.jsx)("p",{children:"Contatti:"}),Object(x.jsxs)("p",{children:["Telefono:\xa0",Object(x.jsx)("a",{href:"tel:0039069677116",children:"069677116"})]}),Object(x.jsxs)("p",{children:["Cellulare:",Object(x.jsx)("a",{href:"tel:00393382681254",children:"\xa0338 2681254"})]}),Object(x.jsxs)("p",{children:["Email:\xa0",Object(x.jsx)("a",{href:"mailto:info@pubbliufficio.com",children:"info@pubbliufficio.com"})]})]}),!e&&Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("iframe",{title:"pubblufficio-map",src:"https://maps.google.com/maps?q=via%20pezze%20di%20ninfa%2013,%20Cori&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",marginheight:"0",marginwidth:"0"})})]}),e&&Object(x.jsx)("div",{className:"row mb-2",children:Object(x.jsx)("iframe",{title:"pubblufficio-map",src:"https://maps.google.com/maps?q=via%20pezze%20di%20ninfa%2013,%20Cori&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no"})})]})};var R=function(){return Object(x.jsx)("div",{className:"container Main-page",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("h3",{children:"Le nostre lavorazioni"}),Object(x.jsx)("h4",{children:"Allestimento"}),Object(x.jsx)("p",{children:"Eseguiamo lavoro di allestimento su calendari, blocchi e qualsiasi altro articolo che lo richiede."}),Object(x.jsx)("p",{children:"Utilizziamo intercalatrici automatiche per i formati pi\xf9 comuni."}),Object(x.jsx)("p",{children:"Dove la macchina non pu\xf2 ci siamo noi che eseguiamo anche il lavoro di allestimento manuale per i formati pi\xf9 piccoli o pi\xf9 grandi."}),Object(x.jsx)("h4",{children:"Foratura"}),Object(x.jsx)("p",{children:"Utilizziamo Foratrici Rilecart F-500 per bucare gli articoli e prepararli poi infine alla rilegatura."}),Object(x.jsx)("h4",{children:"Rilegatura a spirale"}),Object(x.jsx)("p",{children:"Siamo specializzati nella rilegatura a spirale di qualsiasi articolo, calendari da tavolo, calendari da muro con gancetto, quaderni, blocchi, planning."}),Object(x.jsx)("p",{children:"Possiamo eseguire rilegatura su articoli vari fino a uno spessore di 30 mm, disponiamo inoltre di vari colori di spirale per personalizzare come volete i vostri articoli."}),Object(x.jsx)("p",{children:"Utilizziamo rilegatrici Rilecart automatiche e semiautomatiche."}),Object(x.jsx)("h4",{children:"Ritiro e consegna"}),Object(x.jsx)("p",{children:"Se il cliente necessita ritiriamo e consegnamo il lavoro noi stessi."})]})})})};var q=function(){return Object(x.jsx)("div",{className:"Footer container-fluid",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col"})})})};var y=function(){t(50).config();var e=Object(m.b)(),i=Object(m.c)((function(e){return e.isFormSubmitted})),a=Object(c.useState)(""),o=Object(S.a)(a,2),n=o[0],r=o[1],s=Object(c.useState)(""),l=Object(S.a)(s,2),u=l[0],b=l[1],d=function(e){"contatto"===e.currentTarget.name?r(e.currentTarget.value):b(e.currentTarget.value)};return Object(c.useEffect)((function(){e(O(!1)),function(){var i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ADDRESS:"https://script.google.com/macros/s/AKfycbzKMWPwRAbAT5nci6iB8G9l-ho2ZvhSsy1eQx8DXGMmKZ9c7iQwNt19_V6mLfquVV1Fqw/exec"}).ADDRESS,t=document.forms["pubbliufficio-form"];t.addEventListener("submit",(function(c){c.preventDefault(),fetch(i,{method:"POST",body:new FormData(t)}).then((function(i){console.log("Success!",i),e(O(!0)),b(""),r("")})).catch((function(e){return console.error("Error!",e.message)}))}))}()}),[]),Object(x.jsxs)("div",{className:"container Main-page",children:[!i&&Object(x.jsxs)("form",{name:"pubbliufficio-form",children:[Object(x.jsx)("label",{children:"Contatto"}),Object(x.jsx)("input",{required:!0,name:"contatto",type:"text",value:n,onChange:d}),Object(x.jsx)("label",{children:"Messaggio"}),Object(x.jsx)("textarea",{name:"messaggio",type:"text",value:u,onChange:d}),Object(x.jsx)("input",{className:"submit-button mt-4",type:"submit",value:"Invia"})]}),i&&Object(x.jsxs)("div",{className:"Form-submitted",children:[Object(x.jsx)("div",{className:"Form-submitted-message mb-4",children:"Grazie per averci conttattati, verrai ricontattato al pi\xf9 presto"}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"Back-to-form mt-4",onClick:function(){return e(O(!1))},children:"Torna al form"})})]})]})};var P=function(){var e=Object(m.c)((function(e){return e.isMobile}));return Object(x.jsx)(r.a,{children:Object(x.jsxs)("div",{className:"container-fluid App",children:[Object(x.jsx)("div",{className:e?"row":"row mb-4",children:Object(x.jsx)(v,{})}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)(A.c,{children:[Object(x.jsx)(A.a,{path:"/dove-siamo",component:D}),Object(x.jsx)(A.a,{path:"/contattaci",component:y}),Object(x.jsx)(A.a,{path:"/le-nostre-lavorazioni",component:R}),Object(x.jsx)(A.a,{path:"/",component:E})]})}),Object(x.jsx)("div",{className:"row mt-4",children:Object(x.jsx)(q,{})})]})})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(i){var t=i.getCLS,c=i.getFID,a=i.getFCP,o=i.getLCP,n=i.getTTFB;t(e),c(e),a(e),o(e),n(e)}))},L=t(11),_=t(15),B=function(e){return function(i,t,c){return e((function(e,t){var c,a=performance.now(),o=i(e,t),n=performance.now(),r=(c=n-a,Math.round(100*c)/100);return console.log("reducer process time: ",r),o}),t,c)}},I=function(e){return function(i){return function(t){console.group(t),console.info("dispatching",t);var c=i(t);return console.log("next state",e.getState()),console.groupEnd(),c}}};var U=function(e){var i=[I,_.a],t=[L.a.apply(void 0,i),B],c=L.d.apply(void 0,t);return Object(L.e)(g,e,c)}();n.a.render(Object(x.jsx)(m.a,{store:U,children:Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(P,{})})}),document.getElementById("root")),k()}},[[53,1,2]]]);
//# sourceMappingURL=main.8ea9580f.chunk.js.map