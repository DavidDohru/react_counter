(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),u=n.n(r),o=n(4),i=n(5),s=n(7),l=n(6),d=n(1),m=n.n(d),f=(m.a.string.isRequired,m.a.func.isRequired,n(15),function(e){var t=e.name,n=e.onCLick;return c.a.createElement("button",{className:"button",type:"button",onClick:n},t)}),h=(n(16),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={count:0},e.addOne=function(){e.setState((function(e){return{count:e.count+1}}))},e.add100=function(){e.setState((function(e){return{count:e.count+100}}))},e.increase=function(){e.state.count%5===0&&e.add100(),e.addOne()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.count;return c.a.createElement("div",{className:"calculate"},c.a.createElement("h1",null,"Count:"," ".concat(e," ")),c.a.createElement("div",{className:"calculate__container-button"},c.a.createElement(f,{onCLick:this.addOne,name:"add one"}),c.a.createElement(f,{onCLick:this.add100,name:"add 100"}),c.a.createElement(f,{onCLick:this.increase,name:"increse"})))}}]),n}(c.a.Component)),b=function(){return c.a.createElement(h,null)};u.a.render(c.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.8f29bc3e.chunk.js.map