(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{21:function(e,a,t){},27:function(e,a,t){e.exports=t(38)},32:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(23),l=t.n(r),s=(t(32),t(24)),c=t(5),i=t(6),m=t(10),h=t(7),d=t(8),u=(t(21),t(15),function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark"},o.a.createElement("a",{className:"navbar-brand",href:"#"},"Logo"),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#"},"Link 1")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#"},"Link 2")),o.a.createElement("li",{className:"nav-item dropdown"},o.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbardrop","data-toggle":"dropdown"},"Dropdown link"),o.a.createElement("div",{className:"dropdown-menu"},o.a.createElement("a",{className:"dropdown-item",href:"#"},"Link 1"),o.a.createElement("a",{className:"dropdown-item",href:"#"},"Link 2"),o.a.createElement("a",{className:"dropdown-item",href:"#"},"Link 3")))))}}]),t}(o.a.Component)),p=t(9),v=t(16),b=new v.a,g=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={token:n.props.token},n}return Object(i.a)(t,[{key:"render",value:function(){return null!=b.get("email")&&null!=this.state.token||(this.setState({token:""}),this.props.history.push("/")),o.a.createElement("div",null,o.a.createElement(u,null),"Wow")}}]),t}(o.a.Component),k=Object(p.e)(g),E=t(13),f=new v.a,w=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleClick=n.handleClick.bind(Object(m.a)(n)),null!=f.get("email")&&n.props.history.push("/home"),n}return Object(i.a)(t,[{key:"handleChange",value:function(e){this.props.onChangeText(e.target.id,e.target.value)}},{key:"handleClick",value:function(){var e=this,a={email:this.props.email,password:this.props.password},t=[];for(var n in a){var o=encodeURIComponent(n),r=encodeURIComponent(a[n]);t.push(o+"="+r)}t=t.join("&"),console.log(t),fetch("http://127.0.0.1:8000/api/login",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t}).then((function(e){return e.json()})).then((function(a){e.props.onChangeText("token",a.success.token),a.success.token,f.set("email",e.props.email,{path:"/"}),e.props.history.push("/home")}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u,null),o.a.createElement("div",{className:"container",style:{marginTop:"80px"}},o.a.createElement("div",{className:"card mx-auto",style:{width:"30%",marginTop:"20%",borderRadius:"10px"}},o.a.createElement("div",{className:"card-body"},o.a.createElement("center",null,o.a.createElement("h3",null,"Login")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Email"),o.a.createElement("input",{type:"email",onChange:this.handleChange,className:"form-control",id:"email",placeholder:"Email",value:this.props.email})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Password"),o.a.createElement("input",{type:"password",onChange:this.handleChange,className:"form-control",id:"password",placeholder:"Password",value:this.props.password})),o.a.createElement("input",{type:"button",onClick:this.handleClick,value:"Login",className:"btn btn-info"})))))}}]),t}(o.a.Component),C=Object(p.e)(w),j=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={email:"",password:"",token:""},n.onChangeText=n.onChangeText.bind(Object(m.a)(n)),n}return Object(i.a)(t,[{key:"onChangeText",value:function(e,a){this.setState(Object(s.a)({},e,a))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E.a,null,o.a.createElement(p.a,{path:"/",exact:!0},o.a.createElement(C,{email:this.state.email,token:this.state.token,password:this.state.password,onChangeText:this.onChangeText,onLogin:this.login,onLocate:this.gologin})),o.a.createElement(p.a,{path:"/home"},o.a.createElement(k,{token:this.state.token}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.47ea7ab6.chunk.js.map