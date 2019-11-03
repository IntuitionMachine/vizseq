(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(162);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={id:"web_app_example",title:"Web App Example",sidebar_label:"Web App Example"},p=[],i={rightToc:p},c="wrapper";function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Example data is provided to test the VizSeq Web App, which can be acquired by:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ bash get_example_data.sh\n")),Object(a.b)("p",null,"The data will be available in ",Object(a.b)("inlineCode",{parentName:"p"},"examples/data"),", including the use cases for (multimodal) machine translation,\ntext summarization and speech translation."),Object(a.b)("p",null,"To view these examples in the web App, first launch the backend server:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ python -m vizseq.server --port 9001 --data-root examples/data\n")),Object(a.b)("p",null,"And then, navigate to the following URL in your web browser:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"http://localhost:9001\n")),Object(a.b)("p",null,"To view your data instead, just point ",Object(a.b)("inlineCode",{parentName:"p"},"--data-root")," to the corresponding data root path."))}l.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,b=u[i+"."+s]||u[s]||l[s]||o;return n?r.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);