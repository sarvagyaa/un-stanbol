(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(403)},168:function(e,t,a){},233:function(e,t){},235:function(e,t){},296:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(156),c=a.n(o),i=(a(168),a(94)),l=a.n(i),s=a(157),u=a(95),f=a(96),d=a(98),m=a(97),h=a(99),p=a(162),b=a(159),v=a.n(b),w=a(160),E=a.n(w),y=(a(296),a(161)),g=a.n(y),j={Accept:"application/json","Content-type":"text/plain"},k=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-body"},r.a.createElement("h1",null,"Stanbol based enhancer"),r.a.createElement(O,null)))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={data:null},a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"onFileRead",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a,n,r,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.extractRawText({arrayBuffer:t});case 2:return a=e.sent,n=a.value,e.next=6,E()({headers:j,url:"http://wit.istc.cnr.it:9090/enhancer",method:"post",data:n});case 6:r=e.sent,o=r.data,console.log(o),this.setState({data:o});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getDocData",value:function(e){var t=this,a=new FileReader;a.readAsArrayBuffer(e[0]),a.onload=function(e){var a=e.target.result;t.onFileRead(a)}}},{key:"render",value:function(){var e=this,t=this.state.data,a=r.a.createElement("div",null,r.a.createElement(g.a,{data:t,theme:x,invertTheme:!1,hideRoot:!0}),r.a.createElement("h3",null,"Raw output: "),r.a.createElement("textarea",{className:"rawDataArea"},JSON.stringify(t,null,2)));return r.a.createElement("div",null,r.a.createElement(p.a,{onDrop:function(t){return e.getDocData(t)}},function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("section",null,r.a.createElement("div",t(),r.a.createElement("input",a()),r.a.createElement("p",null,"Click here and upload a Word Document")))}),r.a.createElement("div",null,r.a.createElement("h2",null,"Annotations: "),t&&a))}}]),t}(n.Component),x={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"#272822",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#a6e22e",base0C:"#a1efe4",base0D:"#66d9ef",base0E:"#ae81ff",base0F:"#cc6633"};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,1,2]]]);
//# sourceMappingURL=main.81fbea4f.chunk.js.map