(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=c(5),l=c(7),r=c(6),i=c(1),d=(c(12),c(13),c(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(d.jsxs)("main",{className:"section container",children:[t?Object(d.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(d.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){e.setState({selectedGood:""})}})]}):Object(d.jsx)("h1",{className:"title",children:"No goods selected"}),Object(d.jsx)("table",{className:"table",children:Object(d.jsx)("tbody",{children:u.map((function(c){return Object(d.jsxs)("tr",{"data-cy":"Good",className:t===c?"has-background-success-light":"",children:[Object(d.jsx)("td",{children:t===c?Object(d.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){e.setState({selectedGood:""})},children:"-"}):Object(d.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.setState({selectedGood:c})},children:"+"})}),Object(d.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.Component);n.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f9c3a048.chunk.js.map