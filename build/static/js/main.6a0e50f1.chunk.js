(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,n){t.exports=n(37)},37:function(t,e,n){"use strict";n.r(e);var a=n(0),u=n.n(a),o=n(11),c=n.n(o),i=n(2),r=n(3),l=n.n(r),s="/api/persons",m=function(){return l.a.get(s).then(function(t){return t.data})},f=function(t){return l.a.post(s,t).then(function(t){return t.data})},d=function(t,e){return l.a.put("".concat(s,"/").concat(t),e).then(function(t){return t.data})},p=function(t){return l.a.delete("".concat(s,"/").concat(t)).then(function(t){return t.data})},h=function(t){return t.preventDefault()},b=function(t,e){return u.a.createElement("form",{onSubmit:h},"Rajaa n\xe4ytett\xe4vi\xe4:",u.a.createElement("input",{value:t,onChange:e}))},v=function(t,e,n,a,o){return u.a.createElement(u.a.Fragment,null,u.a.createElement("form",{onSubmit:t},u.a.createElement("div",null,"nimi: ",u.a.createElement("input",{value:e,onChange:n})),u.a.createElement("div",null,"numero: ",u.a.createElement("input",{value:a,onChange:o})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))))},j=function(t,e,n){var a=e.toUpperCase();return t.filter(function(t){return t.name.toUpperCase().includes(a)}).map(function(t){return u.a.createElement("div",{key:t.name},t.id," ",t.name," ",t.number,u.a.createElement("button",{onClick:function(){return n(t)}},"poista"))})},g={success:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},fail:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},y=function(t,e){return null===t?null:e?u.a.createElement("div",{className:"success",style:g.success},t):u.a.createElement("div",{className:"success",style:g.fail},t)},E=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),r=Object(i.a)(c,2),l=r[0],s=r[1],h=Object(a.useState)(""),g=Object(i.a)(h,2),E=g[0],O=g[1],w=Object(a.useState)(""),S=Object(i.a)(w,2),k=S[0],C=S[1],K=Object(a.useState)(null),N=Object(i.a)(K,2),R=N[0],B=N[1],D=Object(a.useState)(null),P=Object(i.a)(D,2),z=P[0],J=P[1];Object(a.useEffect)(function(){T()},[]);var T=function(){m().then(function(t){o(t)}).catch(function(t){return U("Tietojen haku ep\xe4onnistui")},!1)},U=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];B(t),J(e),setTimeout(function(){B(null),J(null)},5e3)};return u.a.createElement("div",null,u.a.createElement("h1",null,"Puhelinluettelo"),u.a.createElement("div",null,y(R,z)),b(k,function(t){C(t.target.value)}),u.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),v(function(t){t.preventDefault();var e={name:l,number:E};if(n.some(function(t){return t.name===l})){var a=n.find(function(t){return t.name===l}),u=Object.assign(a,e);window.confirm("Do you want to update ".concat(l," with number ").concat(E,"?"))&&d(a.id,e).then(function(){o(n.map(function(t){return t.name===l?u:t})),s(""),O(""),U("K\xe4ytt\xe4j\xe4n ".concat(l," puhelinnumero p\xe4ivitetty"))}).catch(function(t){U("P\xe4ivitys ep\xe4onnistui. K\xe4ytt\xe4j\xe4 ".concat(l," on jo poistettu puhelinluettelosta."),!1),o(n.filter(function(t){return t.name!==l}))})}else n.some(function(t){return t.number===E})?U("Numero ".concat(E," on jo puhelinluettelossa."),!1):""===l||""===E?U("Nimi ja numero eiv\xe4t saa olla tyhji\xe4",!1):(f(e).then(function(t){o(n.concat(t)),s(""),O(""),U("K\xe4ytt\xe4j\xe4 ".concat(l," on lis\xe4tty puhelinluetteloon"))}).catch(function(t){U("K\xe4ytt\xe4j\xe4n ".concat(l," lis\xe4ys luetteloon ep\xe4onnistui"),!1)}),T())},l,function(t){s(t.target.value)},E,function(t){O(t.target.value)}),u.a.createElement("h2",null,"Numerot"),j(n,k,function(t){window.confirm("Remove ".concat(t.name,"?"))&&p(t.id).then(function(){o(n.filter(function(e){return e.id!==t.id})),U("K\xe4ytt\xe4j\xe4 ".concat(t.name," on poistettu puhelinluettelosta"))}).catch(function(e){U("Poisto ep\xe4onnistui. K\xe4ytt\xe4j\xe4 ".concat(t.name," on jo poistettu puhelinluettelosta."),!1),console.log("id already removed (or other problem)"),T()})}))};c.a.render(u.a.createElement(E,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.6a0e50f1.chunk.js.map