(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{68:function(n,t,e){},69:function(n,t,e){},70:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),a=e.n(i),c=e(32),o=e.n(c),u=e(10),s=e(4),l=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:"About"})})},p=e(2),d=e(17),f=e.n(d),j=e(33),x=e(12),g=e(34),b=e.n(g),h=e(3);function m(){var n=Object(p.a)(["\n    margin-right: 10px;\n    font-size: 14px;\n"]);return m=function(){return n},n}function O(){var n=Object(p.a)(["\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-wrap: wrap;\n    margin: 5px 0px;\n"]);return O=function(){return n},n}function v(){var n=Object(p.a)(["\n    margin: 0;\n    font-weight: 300;\n    margin-bottom: 5px;\n    font-size: 24px;\n    color: #ffffff;\n    font-weight:bold;\n"]);return v=function(){return n},n}function y(){var n=Object(p.a)(["\n    position: relative;\n    top: -50px;\n    max-width: 150px;\n    width: 100%;\n    margin-right: 30px;\n    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),\n    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);\n"]);return y=function(){return n},n}function w(){var n=Object(p.a)(["\n    /* background-color: white; */\n    background-color: #404040;\n    margin-bottom: 70px;\n    font-weight: 300;\n    padding: 20px;\n    border-radius: 5px;\n    /* color: #adaeb9; */\n    /* color: #b3b3b3; */\n    color: #ffffff;\n    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\n    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n"]);return w=function(){return n},n}function k(){var n=Object(p.a)(["\n    margin: 0;\n    font-weight: 300;\n    margin-right: 10px;\n    font-size: 14px;\n"]);return k=function(){return n},n}function F(){var n=Object(p.a)(["\n    display: grid;\n    /* grid-template-columns: minmax(150px, 1fr) 2fr; */\n    grid-gap: 20px;\n    text-decoration: none;\n    color: inherit;\n"]);return F=function(){return n},n}var _=Object(h.a)(u.b)(F()),z=h.a.p(k()),S=h.a.div(w()),B=h.a.img(y()),P=h.a.h4(v()),E=h.a.ul(O()),A=h.a.li(m()),J=function(n){var t=n.id,e=n.year,i=n.title,a=n.summary,c=n.poster,o=n.largePoster,u=n.genres,s=n.background,l=n.rating;return Object(r.jsx)(_,{to:{pathname:"/movie/".concat(t),state:{year:e,title:i,summary:a,largePoster:o,genres:u,background:s,rating:l}},children:Object(r.jsxs)(S,{children:[Object(r.jsx)(B,{src:c,alt:"{title}",title:i}),Object(r.jsxs)(P,{children:[i,"  "]}),Object(r.jsxs)(z,{children:["Rating:",l]}),Object(r.jsxs)(z,{children:["Year:",e]}),Object(r.jsx)(E,{children:u.map((function(n,t){return Object(r.jsx)(A,{children:n},t)}))}),Object(r.jsx)(z,{children:a.length<=100?a:a.slice(0,100)+"..."})]})})};function N(){var n=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, minmax(250px, 1fr));\n  grid-gap: 100px;\n  padding: 50px;\n  width: 80%;\n  padding-top: 70px;\n"]);return N=function(){return n},n}function R(){var n=Object(p.a)(["\n  width:90vw;\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  /* overflow:hidden; */\n"]);return R=function(){return n},n}var Y=h.a.section(R()),H=h.a.div(N()),I=function(){var n=Object(i.useState)(!0),t=Object(x.a)(n,2),e=t[0],a=t[1],c=Object(i.useState)([]),o=Object(x.a)(c,2),u=o[0],s=o[1],l=Object(i.useState)(0),p=Object(x.a)(l,2),d=p[0],g=p[1],h="https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=".concat(d),m=function(){var n=Object(j.a)(f.a.mark((function n(){var t,e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g((function(n){return n+1})),n.next=3,b.a.get(h);case 3:t=n.sent,e=t.data.data.movies,s(e),a(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(i.useEffect)((function(){m()}),[e]),Object(r.jsx)(Y,{children:e?Object(r.jsx)("div",{className:"loader",children:Object(r.jsx)("span",{children:"'Loading'"})}):Object(r.jsxs)(H,{children:[console.log(u[0]),u.map((function(n){return 2021<=n.year?null:Object(r.jsx)(J,{id:n.id,title:n.title,year:n.year,summary:n.summary,poster:n.medium_cover_image,largePoster:n.large_cover_image,background:n.background_image,genres:n.genres,rating:n.rating},n.id)}))]})})};e(68);var L=function(){return Object(r.jsxs)("div",{className:"nav",children:[Object(r.jsx)(u.b,{to:"/",children:"Home"}),Object(r.jsx)(u.b,{to:"/about",children:"About"})]})};function M(){var n=Object(p.a)(["\n    margin: 10px 40px;\n    /* padding: 10px; */\n    font-weight: 350;\n    /* margin-right: 10px; */\n    font-size: 17px;\n"]);return M=function(){return n},n}function q(){var n=Object(p.a)(["\n    margin-right: 10px;\n    font-size: 14px;\n    color:#B3B3B3;\n"]);return q=function(){return n},n}function C(){var n=Object(p.a)(["\n    list-style: none;\n    justify-content: center;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-wrap: wrap;\n    margin: 20px;\n"]);return C=function(){return n},n}function D(){var n=Object(p.a)(["\n    display:flex;\n    justify-content: center;\n    margin: 0;\n    font-weight: 300;\n    margin-bottom: 5px;\n    font-size: 2rem;\n    color: #ffffff;\n    font-weight:bold;\n"]);return D=function(){return n},n}function G(){var n=Object(p.a)(["\n    flex:1;\n    /* display: flex; */\n    /* flex-direction:row; */\n    /* align-items: center; */\n    /* justify-content: center; */\n    background:#404040;\n    color:#FFFFFF;\n    margin-right: 40px;\n    height:80%;\n"]);return G=function(){return n},n}function K(){var n=Object(p.a)(["\n    flex:1;\n    /* display: flex; */\n    /* flex-direction:row; */\n    /* align-items: center; */\n    justify-content: center;\n    background:#404040;\n    color:#FFFFFF;\n    margin: 40px;\n    padding-top: 5vh;\n    height:80%;\n"]);return K=function(){return n},n}function Q(){var n=Object(p.a)(["\n    flex:0;\n    position:relative;\n    margin-left: 50px;\n    /* position:relative;\n    background-image: url(",");\n    width:50vw;\n    height:200px; */\n"]);return Q=function(){return n},n}function T(){var n=Object(p.a)(["\n    position:absolute;\n    top:0;\n    background-image: url(",");\n    width: 100vw;\n    height: 30vh;\n    background-repeat:no-repeat;\n    background-size:cover;\n    z-index:-1;\n"]);return T=function(){return n},n}function U(){var n=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top:20vh;\n    width:90vw;\n    height:70vh;\n    padding:30px;\n"]);return U=function(){return n},n}function V(){var n=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width:85vw;\n    height:85vh;\n    margin:5vh auto;\n"]);return V=function(){return n},n}var W=h.a.div(V()),X=h.a.div(U()),Z=h.a.div(T(),(function(n){return n.url})),$=h.a.img(Q(),(function(n){return n.url})),nn=h.a.div(K()),tn=h.a.div(G()),en=h.a.h4(D()),rn=h.a.ul(C()),an=h.a.li(q()),cn=h.a.p(M()),on=function(n){var t=Object(i.useState)({}),e=Object(x.a)(t,2),a=e[0],c=e[1];return Object(i.useEffect)((function(){var t=n.history,e=n.location;void 0===e.state&&t.push("/"),c(e.state)}),[n]),Object(r.jsxs)(W,{children:[console.log(a),Object(r.jsx)(Z,{url:a.background}),Object(r.jsx)(Z,{url:a.background}),Object(r.jsxs)(X,{children:[Object(r.jsx)($,{src:a.largePoster}),Object(r.jsxs)(nn,{children:[Object(r.jsxs)(en,{children:[a.title,"  "]}),Object(r.jsx)(rn,{children:a.genres&&a.genres.map((function(n,t){return Object(r.jsx)(an,{children:n},t)}))}),Object(r.jsxs)(cn,{children:["Rating:",a.rating]}),Object(r.jsxs)(cn,{children:["Year:",a.year]}),Object(r.jsx)(cn,{children:" "+a.summary})]}),Object(r.jsx)(tn,{children:"hello"})]})]})},un=(e(69),function(){return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(L,{}),Object(r.jsx)(s.a,{path:"/",exact:!0,component:I}),Object(r.jsx)(s.a,{path:"/about",component:l}),Object(r.jsx)(s.a,{path:"/movie/:id",component:on})]})});o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(un,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.60e470d0.chunk.js.map