(this["webpackJsonppokemon-pages"]=this["webpackJsonppokemon-pages"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),u=n(3),i=n(1),l=n.n(i),m=n(2),s=function(){var e=Object(m.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0",e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,a=n.results,r=a.map(function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a,r,c,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.id,o=r.name,u=r.sprites.front_default,e.abrupt("return",{id:c,name:o,pokeImg:u});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(r));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),i=Object(u.a)(o,2),l=i[0],m=i[1];return Object(a.useEffect)((function(){s().then((function(e){return e.map((function(e){return{id:e.id,name:e.name,pokeImg:e.pokeImg}}))})).then((function(e){return m((function(){return e}))}))}),[m]),r.a.createElement("div",null,r.a.createElement("h1",null,"Pokedex"),r.a.createElement("hr",null),r.a.createElement("div",{id:"poke-container"},r.a.createElement("div",null,r.a.createElement("h2",null,"ID"),r.a.createElement("h2",null,"Name"),r.a.createElement("h2",null,"Image")),l.slice(n,n+5).map((function(e){return r.a.createElement("div",{className:"animate__animated animate__bounceInUp",key:e.id},r.a.createElement("p",{id:"poke-id"},e.id),r.a.createElement("p",{id:"poke-name"},e.name),e.pokeImg?r.a.createElement("img",{src:e.pokeImg,alt:e.name}):r.a.createElement("small",null,"Couldn't find an image for this pokemon :("))}))),r.a.createElement("button",{onClick:function(){return c(n-5)},disabled:0===n},"Go back"),r.a.createElement("button",{onClick:function(){return c(n+5)},disabled:n>=1115},"Load more..."))};n(12);o.a.render(r.a.createElement(p,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.25cef96f.chunk.js.map