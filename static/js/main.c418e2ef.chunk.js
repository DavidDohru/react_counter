(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),u=n.n(r),l=n(4),i=n(5),o=n(7),s=n(6),d=n(1),m=n.n(d),f=(m.a.string.isRequired,m.a.func.isRequired,n(15),function(e){var t=e.name,n=e.callback;return c.a.createElement("button",{className:"button",type:"button",onClick:n},t)}),b=(n(16),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={x:0},e.addOne=function(){e.setState((function(e){return{x:e.x+1}}))},e.add100=function(){e.setState((function(e){return{x:e.x+100}}))},e.increase=function(){e.state.x%5===0?(e.addOne(),e.add100()):e.addOne()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.x;return c.a.createElement("div",{className:"calculate"},c.a.createElement("h1",null,"Count:",e),c.a.createElement("div",{className:"calculate__container-button"},c.a.createElement(f,{callback:this.addOne,name:"add one"}),c.a.createElement(f,{callback:this.add100,name:"add 100"}),c.a.createElement(f,{callback:this.increase,name:"increse"})))}}]),n}(c.a.Component)),h=function(){return c.a.createElement(b,null)};u.a.render(c.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.c418e2ef.chunk.js.map