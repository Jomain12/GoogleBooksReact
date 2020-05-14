(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(58)},33:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(24),c=n.n(r),o=n(8),u=n(6),i=n(12),s=n(25),m=n(10);n(33);var E=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var d=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},f=n(11),h=n.n(f),b={getBooks:function(){return h.a.get("/api/books")},getBook:function(e){return h.a.get("/api/books/"+e)},deleteBook:function(e){return h.a.delete("/api/books/"+e)},saveBook:function(e){return h.a.post("/api/books",e)}};function p(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function v(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function g(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(52);function k(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function j(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function N(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function O(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function y(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var B=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),u=Object(m.a)(c,2),f=u[0],h=u[1];function B(){b.getBooks().then(function(e){return r(e.data)}).catch(function(e){return console.log(e)})}function w(e){var t=e.target,n=t.name,a=t.value;h(Object(s.a)({},f,Object(i.a)({},n,a)))}return Object(a.useEffect)(function(){B()},[]),l.a.createElement(p,{fluid:!0},l.a.createElement(v,null,l.a.createElement(g,{size:"md-6"},l.a.createElement(d,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(N,{onChange:w,name:"title",placeholder:"Title (required)"}),l.a.createElement(N,{onChange:w,name:"author",placeholder:"Author (required)"}),l.a.createElement(O,{onChange:w,name:"synopsis",placeholder:"Synopsis (Optional)"}),l.a.createElement(y,{disabled:!(f.author&&f.title),onClick:function(e){e.preventDefault(),f.title&&f.author&&b.saveBook({title:f.title,author:f.author,synopsis:f.synopsis}).then(function(e){return B()}).catch(function(e){return console.log(e)})}},"Submit Book"))),l.a.createElement(g,{size:"md-6 sm-12"},l.a.createElement(d,null,l.a.createElement("h1",null,"Books On My List")),n.length?l.a.createElement(k,null,n.map(function(e){return l.a.createElement(j,{key:e._id},l.a.createElement(o.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(E,{onClick:function(){return t=e._id,void b.deleteBook(t).then(function(e){return B()}).catch(function(e){return console.log(e)});var t}}))})):l.a.createElement("h3",null,"No Results to Display"))))};var w=function(e){var t=Object(a.useState)({}),n=Object(m.a)(t,2),r=n[0],c=n[1],i=Object(u.f)().id;return Object(a.useEffect)(function(){b.getBook(i).then(function(e){return c(e.data)}).catch(function(e){return console.log(e)})},[]),l.a.createElement(p,{fluid:!0},l.a.createElement(v,null,l.a.createElement(g,{size:"md-12"},l.a.createElement(d,null,l.a.createElement("h1",null,r.title," by ",r.author)))),l.a.createElement(v,null,l.a.createElement(g,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,r.synopsis)))),l.a.createElement(v,null,l.a.createElement(g,{size:"md-2"},l.a.createElement(o.b,{to:"/"},"\u2190 Back to Authors"))))};var x=function(){return l.a.createElement(p,{fluid:!0},l.a.createElement(v,null,l.a.createElement(g,{size:"md-12"},l.a.createElement(d,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var z=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var S=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:["/","/books"]},l.a.createElement(B,null)),l.a.createElement(u.a,{exact:!0,path:"/books/:id"},l.a.createElement(w,null)),l.a.createElement(u.a,null,l.a.createElement(x,null)))))};c.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3287525b.chunk.js.map