(this["webpackJsonpclient-a"]=this["webpackJsonpclient-a"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(3),r=n.n(a),i=(n(12),n(4)),o=n(5),u=n(7),l=n(6),h=(n(13),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).sendText=function(t){var n=e.state,c=n.recipient,s=n.textmessage;fetch("/send-text?recipient=".concat(c,"&textmessage=").concat(s)).catch((function(e){return console.log(e)})),e.setState({recipient:""}),e.setState({textmessage:""})},e.state={recipient:"",textmessage:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.recipient,c=t.textmessage;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"textheader",children:"Send a message"}),Object(h.jsxs)("form",{action:"",onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsx)("h3",{children:"Send to:"}),Object(h.jsx)("input",{type:"text",placeholder:"enter your number",value:n,onChange:function(t){return e.setState({recipient:t.target.value})}}),Object(h.jsx)("h3",{children:"Message: "}),Object(h.jsx)("textarea",{name:"",id:"",cols:"30",rows:"5",placeholder:"your message",value:c,onChange:function(t){return e.setState({textmessage:t.target.value})}}),Object(h.jsx)("button",{onClick:this.sendText,children:"Send text"})]})]})}}]),n}(c.Component);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.20c17170.chunk.js.map