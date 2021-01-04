!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).graphre={})}(this,(function(e){"use strict";class r{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,r=e._prev;if(r!==e)return n(r),r}enqueue(e){var r=this._sentinel,t=e;t._prev&&t._next&&n(t),t._next=r._next,r._next._prev=t,r._next=t,t._prev=r}toString(){for(var e=[],r=this._sentinel,n=r._prev;n!==r;)e.push(JSON.stringify(n,t)),n=n._prev;return"["+e.join(", ")+"]"}}function n(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function t(e,r){if("_next"!==e&&"_prev"!==e)return r}var o=Object.freeze({__proto__:null,List:r});const i={};function a(e){var r=[];for(var n of e)r.push(...n);return r}function s(e,r){return null!=e&&e.hasOwnProperty(r)}function d(e){const r=null==e?0:e.length;return r?e[r-1]:void 0}function u(e,r){e=Object(e);const n={};return Object.keys(e).forEach((t=>{n[t]=r(e[t],t)})),n}function f(e,r){var n=Number.POSITIVE_INFINITY,t=void 0;for(var o of e){var i=r(o);i<n&&(n=i,t=o)}return t}function h(e,r){var n=e<r?1:-1;let t=-1,o=Math.max(Math.ceil((r-e)/(n||1)),0);const i=new Array(o);for(;o--;)i[++t]=e,e+=n;return i}function c(e,r){return e.slice().sort(((e,n)=>r(e)-r(n)))}function v(e){i[e]||(i[e]=0);return`${e}${++i[e]}`}function l(e){return e?Object.keys(e).map((r=>e[r])):[]}function g(e,r){for(var n=[],t=0;t<e;t++)n.push(r());return n}function p(e){return void 0===e}function m(e,r){for(var n of Object.keys(e))r(e[n],n)}function w(e){return 0===Object.keys(e).length}function _(e){var r={},n=e.nodes().filter((r=>!e.children(r).length)),t=g(Math.max(...n.map((r=>e.node(r).rank)))+1,(()=>[]));return c(n,(r=>e.node(r).rank)).forEach((function n(o){if(!s(r,o)){r[o]=!0;var i=e.node(o);t[i.rank].push(o),e.successors(o).forEach(n)}})),t}function b(e,r){for(var n=0,t=1;t<r.length;++t)n+=y(e,r[t-1],r[t]);return n}function y(e,r,n){for(var t={},o=0;o<n.length;o++)t[n[o]]=o;for(var i=a(r.map((function(r){return c(e.outEdges(r).map((function(r){return{pos:t[r.w],weight:e.edge(r).weight}})),(e=>e.pos))}))),s=1;s<n.length;)s<<=1;var d=2*s-1;s-=1;var u=g(d,(()=>0)),f=0;return i.forEach((function(e){var r=e.pos+s;u[r]+=e.weight;for(var n=0;r>0;)r%2&&(n+=u[r+1]),u[r=r-1>>1]+=e.weight;f+=e.weight*n})),f}function k(e,r){return r?r.map((function(r){var n=e.inEdges(r);if(n.length){var t=n.reduce((function(r,n){var t=e.edge(n),o=e.node(n.v);return{sum:r.sum+t.weight*o.order,weight:r.weight+t.weight}}),{sum:0,weight:0});return{v:r,barycenter:t.sum/t.weight,weight:t.weight}}return{v:r}})):[]}function E(e,r){for(var n={},t=0;t<e.length;t++){var o=e[t],i=n[o.v]={indegree:0,in:[],out:[],vs:[o.v],i:t};void 0!==o.barycenter&&(i.barycenter=o.barycenter,i.weight=o.weight)}for(var a of r.edges()){var s=n[a.v],d=n[a.w];void 0!==s&&void 0!==d&&(d.indegree++,s.out.push(n[a.w]))}return function(e){var r=[];function n(e){return function(r){r.merged||(void 0===r.barycenter||void 0===e.barycenter||r.barycenter>=e.barycenter)&&function(e,r){var n=0,t=0;e.weight&&(n+=e.barycenter*e.weight,t+=e.weight);r.weight&&(n+=r.barycenter*r.weight,t+=r.weight);e.vs=r.vs.concat(e.vs),e.barycenter=n/t,e.weight=t,e.i=Math.min(r.i,e.i),r.merged=!0}(e,r)}}function t(r){return function(n){n.in.push(r),0==--n.indegree&&e.push(n)}}for(;e.length;){var o=e.pop();r.push(o),o.in.reverse().forEach(n(o)),o.out.forEach(t(o))}return r.filter((e=>!e.merged)).map((function(e){var r={vs:e.vs,i:e.i};return"barycenter"in e&&(r.barycenter=e.barycenter),"weight"in e&&(r.weight=e.weight),r}))}(l(n).filter((e=>!e.indegree)))}var N="\0";class x{constructor(e={}){this._label=void 0,this._nodeCount=0,this._edgeCount=0,this._isDirected=!s(e,"directed")||e.directed,this._isMultigraph=!!s(e,"multigraph")&&e.multigraph,this._isCompound=!!s(e,"compound")&&e.compound,this._defaultNodeLabelFn=()=>{},this._defaultEdgeLabelFn=()=>{},this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children["\0"]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){var r;return r=e,this._defaultNodeLabelFn="function"!=typeof r?()=>e:e,this}nodeCount(){return this._nodeCount}nodes(){return Object.keys(this._nodes)}sources(){var e=this;return this.nodes().filter((function(r){return w(e._in[r])}))}sinks(){var e=this;return this.nodes().filter((r=>w(e._out[r])))}setNodes(e,r){for(var n of e)void 0!==r?this.setNode(n,r):this.setNode(n);return this}setNode(e,r){return s(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=r),this):(this._nodes[e]=arguments.length>1?r:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=N,this._children[e]={},this._children["\0"][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return s(this._nodes,e)}removeNode(e){var r=this;if(s(this._nodes,e)){var n=e=>{r.removeEdge(this._edgeObjs[e])};if(delete this._nodes[e],this._isCompound){for(var t of(this._removeFromParentsChildList(e),delete this._parent[e],this.children(e)))r.setParent(t);delete this._children[e]}for(var o of Object.keys(this._in[e]))n(o);for(var o of(delete this._in[e],delete this._preds[e],Object.keys(this._out[e])))n(o);delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,r){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(void 0===r)r=N;else{for(var n=r+="";!p(n);n=this.parent(n))if(n===e)throw new Error(`Setting ${r} as parent of ${e} would create a cycle`);this.setNode(r)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=r,this._children[r][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var r=this._parent[e];if(r!==N)return r}}children(e){if(p(e)&&(e=N),this._isCompound){var r=this._children[e];return r?Object.keys(r):void 0}return e===N?this.nodes():this.hasNode(e)?[]:void 0}predecessors(e){var r=this._preds[e];if(r)return Object.keys(r)}successors(e){var r=this._sucs[e];if(r)return Object.keys(r)}neighbors(e){var r=this.predecessors(e);if(r)return function(e,r){var n=[...e];for(var t of r)-1===n.indexOf(t)&&n.push(t);return n}(r,this.successors(e))}isLeaf(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length}filterNodes(e){var r=new x({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});r.setGraph(this.graph());var n=this;m(this._nodes,(function(n,t){e(t)&&r.setNode(t,n)})),m(this._edgeObjs,(function(e){r.hasNode(e.v)&&r.hasNode(e.w)&&r.setEdge(e,n.edge(e))}));var t={};function o(e){var i=n.parent(e);return void 0===i||r.hasNode(i)?(t[e]=i,i):i in t?t[i]:o(i)}if(this._isCompound)for(var i of r.nodes())r.setParent(i,o(i));return r}setDefaultEdgeLabel(e){var r;return r=e,this._defaultEdgeLabelFn="function"!=typeof r?()=>e:e,this}edgeCount(){return this._edgeCount}edges(){return Object.values(this._edgeObjs)}setPath(e,r){var n=this,t=arguments;return e.reduce((function(e,o){return t.length>1?n.setEdge(e,o,r):n.setEdge(e,o),o})),this}setEdge(e,r,n,t){var o=!1,i=e;"object"==typeof i&&null!==i&&"v"in i?(e=i.v,r=i.w,t=i.name,2===arguments.length&&(n=arguments[1],o=!0)):(e=i,r=arguments[1],t=arguments[3],arguments.length>2&&(n=arguments[2],o=!0)),e=""+e,r=""+r,p(t)||(t=""+t);var a=j(this._isDirected,e,r,t);if(s(this._edgeLabels,a))return o&&(this._edgeLabels[a]=n),this;if(!p(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(r),this._edgeLabels[a]=o?n:this._defaultEdgeLabelFn(e,r,t);var d=function(e,r,n,t){var o=""+r,i=""+n;if(!e&&o>i){var a=o;o=i,i=a}var s={v:o,w:i};t&&(s.name=t);return s}(this._isDirected,e,r,t);return e=d.v,r=d.w,Object.freeze(d),this._edgeObjs[a]=d,C(this._preds[r],e),C(this._sucs[e],r),this._in[r][a]=d,this._out[e][a]=d,this._edgeCount++,this}edge(e,r,n){var t="object"==typeof e?M(this._isDirected,e):j(this._isDirected,e,r,n);return this._edgeLabels[t]}hasEdge(e,r,n){var t=1===arguments.length?M(this._isDirected,arguments[0]):j(this._isDirected,e,r,n);return s(this._edgeLabels,t)}removeEdge(e,r,n){var t="object"==typeof e?M(this._isDirected,e):j(this._isDirected,e,r,n),o=this._edgeObjs[t];return o&&(e=o.v,r=o.w,delete this._edgeLabels[t],delete this._edgeObjs[t],O(this._preds[r],e),O(this._sucs[e],r),delete this._in[r][t],delete this._out[e][t],this._edgeCount--),this}inEdges(e,r){var n=this._in[e];if(n){var t=Object.values(n);return r?t.filter((function(e){return e.v===r})):t}}outEdges(e,r){var n=this._out[e];if(n){var t=Object.values(n);return r?t.filter((function(e){return e.w===r})):t}}nodeEdges(e,r){var n=this.inEdges(e,r);if(n)return n.concat(this.outEdges(e,r))}}class I extends x{}function C(e,r){e[r]?e[r]++:e[r]=1}function O(e,r){--e[r]||delete e[r]}function j(e,r,n,t){var o=""+r,i=""+n;if(!e&&o>i){var a=o;o=i,i=a}return o+""+i+""+(p(t)?"\0":t)}function M(e,r){return j(e,r.v,r.w,r.name)}function L(e,r,n,t){var o;do{o=v(t)}while(e.hasNode(o));return n.dummy=r,e.setNode(o,n),o}function T(e){var r=(new x).setGraph(e.graph());for(var n of e.nodes())r.setNode(n,e.node(n));for(var t of e.edges()){var o=r.edge(t.v,t.w)||{weight:0,minlen:1},i=e.edge(t);r.setEdge(t.v,t.w,{weight:o.weight+i.weight,minlen:Math.max(o.minlen,i.minlen)})}return r}function S(e){var r=new x({multigraph:e.isMultigraph()}).setGraph(e.graph());for(var n of e.nodes())e.children(n).length||r.setNode(n,e.node(n));for(var t of e.edges())r.setEdge(t,e.edge(t));return r}function P(e,r){var n,t,o=e.x,i=e.y,a=r.x-o,s=r.y-i,d=e.width/2,u=e.height/2;if(!a&&!s)throw new Error("Not possible to find intersection inside of the rectangle");return Math.abs(s)*d>Math.abs(a)*u?(s<0&&(u=-u),n=u*a/s,t=u):(a<0&&(d=-d),n=d,t=d*s/a),{x:o+n,y:i+t}}function R(e){var r=g(G(e)+1,(()=>[]));for(var n of e.nodes()){var t=e.node(n),o=t.rank;void 0!==o&&(r[o][t.order]=n)}return r}function F(e){var r=Math.min(...e.nodes().map((r=>e.node(r).rank)).filter((e=>void 0!==e)));for(var n of e.nodes()){var t=e.node(n);s(t,"rank")&&(t.rank-=r)}}function D(e){var r=Math.min(...e.nodes().map((r=>e.node(r).rank)).filter((e=>void 0!==e))),n=[];for(var t of e.nodes()){var o=e.node(t).rank-r;n[o]||(n[o]=[]),n[o].push(t)}for(var i=0,a=e.graph().nodeRankFactor,s=0;s<n.length;s++){var d=n[s];if(void 0===d&&s%a!=0)--i;else if(i&&null!=d)for(var t of d)e.node(t).rank+=i}}function z(e,r,n,t){var o={width:0,height:0};return arguments.length>=4&&(o.rank=n,o.order=t),L(e,"border",o,r)}function G(e){var r=e.nodes().map((r=>e.node(r).rank)).filter((e=>void 0!==e));return Math.max(...r)}function V(e,r){var n=[],t=[];for(var o of e)r(o)?n.push(o):t.push(o);return{lhs:n,rhs:t}}function Y(e,r){var n=Date.now();try{return r()}finally{console.log(e+" time: "+(Date.now()-n)+"ms")}}function B(e,r){return r()}var A=Object.freeze({__proto__:null,addDummyNode:L,simplify:T,asNonCompoundGraph:S,successorWeights:function(e){var r={};for(var n of e.nodes()){var t={};for(var o of e.outEdges(n))t[o.w]=(t[o.w]||0)+e.edge(o).weight;r[n]=t}return r},predecessorWeights:function(e){var r={};for(var n of e.nodes()){var t={};for(var o of e.inEdges(n))t[o.v]=(t[o.v]||0)+e.edge(o).weight;r[n]=t}return r},intersectRect:P,buildLayerMatrix:R,normalizeRanks:F,removeEmptyRanks:D,addBorderNode:z,maxRank:G,partition:V,time:Y,notime:B});function q(e,r){var n,t=V(e,(function(e){return s(e,"barycenter")})),o=t.lhs,i=c(t.rhs,(e=>-e.i)),d=[],u=0,f=0,h=0;for(var v of(o.sort((n=!!r,function(e,r){return e.barycenter<r.barycenter?-1:e.barycenter>r.barycenter?1:n?r.i-e.i:e.i-r.i})),h=W(d,i,h),o))h+=v.vs.length,d.push(v.vs),u+=v.barycenter*v.weight,f+=v.weight,h=W(d,i,h);var l={vs:a(d)};return f&&(l.barycenter=u/f,l.weight=f),l}function W(e,r,n){for(var t;r.length&&(t=d(r)).i<=n;)r.pop(),e.push(t.vs),n++;return n}function $(e,r,n,t){var o=e.children(r),i=e.node(r),d=i?i.borderLeft:void 0,u=i?i.borderRight:void 0,f={};d&&(o=o.filter((e=>e!==d&&e!==u)));var h=k(e,o);for(var c of h)if(e.children(c.v).length){var v=$(e,c.v,n,t);f[c.v]=v,s(v,"barycenter")&&J(c,v)}var l=E(h,n);!function(e,r){for(var n of e)n.vs=a(n.vs.map((function(e){return r[e]?r[e].vs:[e]})))}(l,f);var g=q(l,t);if(d&&(g.vs=[d,...g.vs,u],e.predecessors(d).length)){var p=e.node(e.predecessors(d)[0]),m=e.node(e.predecessors(u)[0]);s(g,"barycenter")||(g.barycenter=0,g.weight=0),g.barycenter=(g.barycenter*g.weight+p.order+m.order)/(g.weight+2),g.weight+=2}return g}function J(e,r){void 0!==e.barycenter?(e.barycenter=(e.barycenter*e.weight+r.barycenter*r.weight)/(e.weight+r.weight),e.weight+=r.weight):(e.barycenter=r.barycenter,e.weight=r.weight)}function Q(e,r,n){var t=function(e){var r;for(;e.hasNode(r=v("_root")););return r}(e),o=new x({compound:!0}).setGraph({root:t}).setDefaultNodeLabel((r=>e.node(r)));for(var i of e.nodes()){var a=e.node(i),d=e.parent(i);if(a.rank===r||a.minRank<=r&&r<=a.maxRank){for(var u of(o.setNode(i),o.setParent(i,d||t),e[n](i))){var f=u.v===i?u.w:u.v,h=o.edge(f,i),c=void 0!==h?h.weight:0;o.setEdge(f,i,{weight:e.edge(u).weight+c})}s(a,"minRank")&&o.setNode(i,{borderLeft:a.borderLeft[r],borderRight:a.borderRight[r]})}}return o}function K(e,r,n){var t,o={};for(var i of n)!function(){for(var n,a=e.parent(i);a;){var s=e.parent(a);if(s?(n=o[s],o[s]=a):(n=t,t=a),n&&n!==a)return void r.setEdge(n,a);a=s}}()}function X(e){var r=G(e),n=H(e,h(1,r+1),"inEdges"),t=H(e,h(r-1,-1),"outEdges"),o=_(e);Z(e,o);for(var i,a=Number.POSITIVE_INFINITY,s=0,d=0;d<4;++s,++d){U(s%2?n:t,s%4>=2);var u=b(e,o=R(e));u<a&&(d=0,i=o.map((e=>e.slice(0))),a=u)}Z(e,i)}function H(e,r,n){return r.map((r=>Q(e,r,n)))}function U(e,r){var n=new x;for(var t of e){var o=t.graph().root,i=$(t,o,n,r);i.vs.map((function(e,r){t.node(e).order=r})),K(t,n,i.vs)}}function Z(e,r){for(var n of r)n.map((function(r,n){e.node(r).order=n}))}var ee=Object.freeze({__proto__:null,order:X,addSubgraphConstraints:K,barycenter:k,buildLayerGraph:Q,crossCount:b,initOrder:_,resolveConflicts:E,sortSubgraph:$,sort:q});function re(e,r){var n={};return r.reduce((function(r,t){for(var o=0,i=0,a=r.length,s=d(t),u=0;u<t.length;u++){var f=t[u],h=te(e,f),c=h?e.node(h).order:a;if(h||f===s){for(var v of t.slice(i,u+1))for(var l of e.predecessors(v)){var g=e.node(l),p=g.order;!(p<o||c<p)||g.dummy&&e.node(v).dummy||oe(n,l,v)}i=u+1,o=c}}return t})),n}function ne(e,r){var n={};function t(r,t,o,i,a){var s;for(var d of h(t,o))if(s=r[d],e.node(s).dummy)for(var u of e.predecessors(s)){var f=e.node(u);f.dummy&&(f.order<i||f.order>a)&&oe(n,u,s)}}return r.reduce((function(r,n){for(var o,i=-1,a=0,s=0;s<n.length;s++){var d=s,u=n[s];if(void 0!==u){if("border"===e.node(u).dummy){var f=e.predecessors(u);f.length&&(t(n,a,d,i,o=e.node(f[0]).order),a=d,i=o)}t(n,a,n.length,o,r.length)}}return n})),n}function te(e,r){if(e.node(r).dummy)for(var n of e.predecessors(r))if(e.node(n).dummy)return n}function oe(e,r,n){if(r>n){var t=r;r=n,n=t}var o=e[r];o||(e[r]=o={}),o[n]=!0}function ie(e,r,n){if(r>n){var t=r;r=n,n=t}return s(e[r],n)}function ae(e,r,n,t){var o={},i={},a={};for(var s of r)for(var d=0;d<s.length;d++){o[f=s[d]]=f,i[f]=f,a[f]=d}for(var s of r){var u=-1;for(var f of s){var h=t(f);if(h.length)for(var v=((h=c(h,(e=>a[e]))).length-1)/2,l=Math.floor(v),g=Math.ceil(v);l<=g;++l){var p=h[l];i[f]===f&&u<a[p]&&!ie(n,f,p)&&(i[p]=f,i[f]=o[f]=o[p],u=a[p])}}}return{root:o,align:i}}function se(e,r,n,t,o){var i={},a=function(e,r,n,t){var o=new x,i=e.graph(),a=ce(i.nodesep,i.edgesep,t);for(var s of r){var d=null;for(var u of s){var f=n[u];if(o.setNode(f),d){var h=n[d],c=o.edge(h,f);o.setEdge(h,f,Math.max(a(e,u,d),c||0))}d=u}}return o}(e,r,n,o),s=o?"borderLeft":"borderRight";function d(e,r){for(var n=a.nodes(),t=n.pop(),o={};t;)o[t]?e(t):(o[t]=!0,n.push(t),n=n.concat(r(t))),t=n.pop()}for(var u of(d((function(e){i[e]=a.inEdges(e).reduce((function(e,r){return Math.max(e,i[r.v]+a.edge(r))}),0)}),(e=>a.predecessors(e))),d((function(r){var n=a.outEdges(r).reduce((function(e,r){return Math.min(e,i[r.w]-a.edge(r))}),Number.POSITIVE_INFINITY),t=e.node(r);n!==Number.POSITIVE_INFINITY&&t.borderType!==s&&(i[r]=Math.max(i[r],n))}),(e=>a.successors(e))),Object.keys(t))){var f=t[u];i[f]=i[n[f]]}return i}function de(e,r){return f(l(r),(function(r){var n=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY;for(var o in r){var i=r[o],a=ve(e,o)/2;n=Math.max(i+a,n),t=Math.min(i-a,t)}return n-t}))}function ue(e,r){var n=l(r),t=Math.min(...n),o=Math.max(...n);for(var i of["ul","ur","dl","dr"]){var a=i[1],s=e[i];if(s!==r){var d=l(s),f="l"===a?t-Math.min(...d):o-Math.max(...d);f&&(e[i]=u(s,(e=>e+f)))}}}function fe(e,r){return u(e.ul,(function(n,t){if(r)return e[r.toLowerCase()][t];var o=c([e.ul[t],e.ur[t],e.dl[t],e.dr[t]],(e=>e));return(o[1]+o[2])/2}))}function he(e){var r,n=R(e),t=Object.assign(Object.assign({},re(e,n)),ne(e,n)),o={ul:{},ur:{},dl:{},dr:{}};for(var i of["u","d"])for(var a of(r="u"===i?n:n.map((e=>e)).reverse(),["l","r"])){"r"===a&&(r=r.map((e=>e.map((e=>e)).reverse())));var s=ae(0,r,t,("u"===i?e.predecessors:e.successors).bind(e)),d=se(e,r,s.root,s.align,"r"===a);"r"===a&&(d=u(d,(e=>-e))),o[i+a]=d}return ue(o,de(e,o)),fe(o,e.graph().align)}function ce(e,r,n){return function(t,o,i){var a,d=t.node(o),u=t.node(i),f=0;if(f+=d.width/2,s(d,"labelpos"))switch(d.labelpos.toLowerCase()){case"l":a=-d.width/2;break;case"r":a=d.width/2}if(a&&(f+=n?a:-a),a=0,f+=(d.dummy?r:e)/2,f+=(u.dummy?r:e)/2,f+=u.width/2,s(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":a=u.width/2;break;case"r":a=-u.width/2}return a&&(f+=n?a:-a),a=0,f}}function ve(e,r){return e.node(r).width}var le=Object.freeze({__proto__:null,findType1Conflicts:re,findType2Conflicts:ne,findOtherInnerSegmentNode:te,addConflict:oe,hasConflict:ie,verticalAlignment:ae,horizontalCompaction:se,findSmallestWidthAlignment:de,alignCoordinates:ue,balance:fe,positionX:he,sep:ce,width:ve});function ge(e){!function(e){var r=R(e),n=e.graph().ranksep,t=0;for(var o of r){var i=Math.max(...o.map((r=>e.node(r).height)));for(var a of o)e.node(a).y=t+i/2;t+=i+n}}(e=S(e));var r=he(e);for(var n in r)e.node(n).x=r[n]}var pe=Object.freeze({__proto__:null,bk:le,position:ge});function me(e){var r={};e.sources().forEach((function n(t){var o=e.node(t);if(s(r,t))return o.rank;r[t]=!0;var i=Math.min(...e.outEdges(t).map((r=>n(r.w)-e.edge(r).minlen)));return i!==Number.POSITIVE_INFINITY&&null!=i||(i=0),o.rank=i}))}function we(e,r){return e.node(r.w).rank-e.node(r.v).rank-e.edge(r).minlen}function _e(e){var r,n=new x({directed:!1}),t=e.nodes()[0],o=e.nodeCount();for(n.setNode(t,{});i(e)<o;)r=a(e),s(e,n.hasNode(r.v)?we(e,r):-we(e,r));return n;function i(e){return n.nodes().forEach((function r(t){for(var o of e.nodeEdges(t)){var i=o.v,a=t===i?o.w:i;n.hasNode(a)||we(e,o)||(n.setNode(a,{}),n.setEdge(t,a,{}),r(a))}})),n.nodeCount()}function a(e){return f(e.edges(),(function(r){if(n.hasNode(r.v)!==n.hasNode(r.w))return we(e,r)}))}function s(e,r){for(var t of n.nodes())e.node(t).rank+=r}}class be{constructor(){this._arr=[],this._keyIndices={}}size(){return this._arr.length}keys(){return this._arr.map((function(e){return e.key}))}has(e){return e in this._keyIndices}priority(e){var r=this._keyIndices[e];if(void 0!==r)return this._arr[r].priority}min(){if(0===this.size())throw new Error("Queue underflow");return this._arr[0].key}add(e,r){var n=this._keyIndices;if(!((e=String(e))in n)){var t=this._arr,o=t.length;return n[e]=o,t.push({key:e,priority:r}),this._decrease(o),!0}return!1}removeMin(){this._swap(0,this._arr.length-1);var e=this._arr.pop();return delete this._keyIndices[e.key],this._heapify(0),e.key}decrease(e,r){var n=this._keyIndices[e];if(r>this._arr[n].priority)throw new Error("New priority is greater than current priority. Key: "+e+" Old: "+this._arr[n].priority+" New: "+r);this._arr[n].priority=r,this._decrease(n)}_heapify(e){var r=this._arr,n=2*e,t=n+1,o=e;n<r.length&&(o=r[n].priority<r[o].priority?n:o,t<r.length&&(o=r[t].priority<r[o].priority?t:o),o!==e&&(this._swap(e,o),this._heapify(o)))}_decrease(e){for(var r,n=this._arr,t=n[e].priority;0!==e&&!(n[r=e>>1].priority<t);)this._swap(e,r),e=r}_swap(e,r){var n=this._arr,t=this._keyIndices,o=n[e],i=n[r];n[e]=i,n[r]=o,t[i.key]=e,t[o.key]=r}}var ye=()=>1;function ke(e,r,n,t){return function(e,r,n,t){var o,i,a={},s=new be,d=function(e){var r=e.v!==o?e.v:e.w,t=a[r],d=n(e),u=i.distance+d;if(d<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+e+" Weight: "+d);u<t.distance&&(t.distance=u,t.predecessor=o,s.decrease(r,u))};e.nodes().forEach((function(e){var n=e===r?0:Number.POSITIVE_INFINITY;a[e]={distance:n},s.add(e,n)}));for(;s.size()>0&&(o=s.removeMin(),(i=a[o]).distance!==Number.POSITIVE_INFINITY);)t(o).forEach(d);return a}(e,String(r),n||ye,t||function(r){return e.outEdges(r)})}function Ee(e){var r=0,n=[],t={},o=[];function i(a){var s=t[a]={onStack:!0,lowlink:r,index:r++};if(n.push(a),e.successors(a).forEach((function(e){e in t?t[e].onStack&&(s.lowlink=Math.min(s.lowlink,t[e].index)):(i(e),s.lowlink=Math.min(s.lowlink,t[e].lowlink))})),s.lowlink===s.index){var d,u=[];do{d=n.pop(),t[d].onStack=!1,u.push(d)}while(a!==d);o.push(u)}}return e.nodes().forEach((function(e){e in t||i(e)})),o}var Ne=()=>1;class xe extends Error{}function Ie(e){var r={},n={},t=[];function o(i){if(i in n)throw new xe;if(!(i in r)){for(var a of(n[i]=!0,r[i]=!0,e.predecessors(i)))o(a);delete n[i],t.push(i)}}for(var i of e.sinks())o(i);if(Object.keys(r).length!==e.nodeCount())throw new xe;return t}function Ce(e,r,n){var t=Array.isArray(r)?r:[r],o=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],a={};for(var s of t){if(!e.hasNode(s))throw new Error("Graph does not have node: "+s);Oe(e,s,"post"===n,a,o,i)}return i}function Oe(e,r,n,t,o,i){if(!(r in t)){for(var a of(t[r]=!0,n||i.push(r),o(r)))Oe(e,a,n,t,o,i);n&&i.push(r)}}function je(e,r){return Ce(e,r,"post")}function Me(e,r){return Ce(e,r,"pre")}var Le=Object.freeze({__proto__:null,components:function(e){var r,n={},t=[];function o(t){if(!(t in n)){for(var i of(n[t]=!0,r.push(t),e.successors(t)))o(i);for(var a of e.predecessors(t))o(a)}}for(var i of e.nodes())r=[],o(i),r.length&&t.push(r);return t},dijkstra:ke,dijkstraAll:function(e,r,n){var t={};for(var o of e.nodes())t[o]=ke(e,o,r,n);return t},findCycles:function(e){return Ee(e).filter((function(r){return r.length>1||1===r.length&&e.hasEdge(r[0],r[0])}))},floydWarshall:function(e,r,n){return function(e,r,n){var t={},o=e.nodes();return o.forEach((function(e){t[e]={},t[e][e]={distance:0},o.forEach((function(r){e!==r&&(t[e][r]={distance:Number.POSITIVE_INFINITY})})),n(e).forEach((function(n){var o=n.v===e?n.w:n.v,i=r(n);t[e][o]={distance:i,predecessor:e}}))})),o.forEach((function(e){var r=t[e];o.forEach((function(n){var i=t[n];o.forEach((function(n){var t=i[e],o=r[n],a=i[n],s=t.distance+o.distance;s<a.distance&&(a.distance=s,a.predecessor=o.predecessor)}))}))})),t}(e,r||Ne,n||function(r){return e.outEdges(r)})},isAcyclic:function(e){try{Ie(e)}catch(e){if(e instanceof xe)return!1;throw e}return!0},postorder:je,preorder:Me,prim:function(e,r){var n,t=new I({}),o={},i=new be;function a(e){var t=e.v===n?e.w:e.v,a=i.priority(t);if(void 0!==a){var s=r(e);s<a&&(o[t]=n,i.decrease(t,s))}}if(0===e.nodeCount())return t;for(n of e.nodes())i.add(n,Number.POSITIVE_INFINITY),t.setNode(n);i.decrease(e.nodes()[0],0);for(var s=!1;i.size()>0;){if((n=i.removeMin())in o)t.setEdge(n,o[n]);else{if(s)throw new Error("Input graph is not connected: "+e);s=!0}e.nodeEdges(n).forEach(a)}return t},tarjan:Ee,topsort:Ie});function Te(e){me(e=T(e));var r,n=_e(e);for(Fe(n),Se(n,e);r=ze(n);)Ve(n,e,r,Ge(n,e,r))}function Se(e,r){var n=je(e,e.nodes());for(var t of n=n.slice(0,n.length-1))Pe(e,r,t)}function Pe(e,r,n){var t=e.node(n).parent;e.edge(n,t).cutvalue=Re(e,r,n)}function Re(e,r,n){var t,o,i=e.node(n).parent,a=!0,s=r.edge(n,i),d=0;for(var u of(s||(a=!1,s=r.edge(i,n)),d=s.weight,r.nodeEdges(n))){var f=u.v===n,h=f?u.w:u.v;if(h!==i){var c=f===a,v=r.edge(u).weight;if(d+=c?v:-v,t=n,o=h,e.hasEdge(t,o)){var l=e.edge(n,h).cutvalue;d+=c?-l:l}}}return d}function Fe(e,r){arguments.length<2&&(r=e.nodes()[0]),De(e,{},1,r)}function De(e,r,n,t,o){var i=n,a=e.node(t);for(var d of(r[t]=!0,e.neighbors(t)))s(r,d)||(n=De(e,r,n,d,t));return a.low=i,a.lim=n++,o?a.parent=o:delete a.parent,n}function ze(e){for(var r of e.edges())if(e.edge(r).cutvalue<0)return r}function Ge(e,r,n){var t=n.v,o=n.w;r.hasEdge(t,o)||(t=n.w,o=n.v);var i=e.node(t),a=e.node(o),s=i,d=!1;return i.lim>a.lim&&(s=a,d=!0),f(r.edges().filter((function(r){return d===Ye(e,e.node(r.v),s)&&d!==Ye(e,e.node(r.w),s)})),(e=>we(r,e)))}function Ve(e,r,n,t){var o=n.v,i=n.w;e.removeEdge(o,i),e.setEdge(t.v,t.w,{}),Fe(e),Se(e,r),function(e,r){var n=function(e,r){for(var n of e.nodes())if(!r.node(n).parent)return n;return}(e,r),t=Me(e,n);for(var o of t=t.slice(1)){var i=e.node(o).parent,a=r.edge(o,i),s=!1;a||(a=r.edge(i,o),s=!0),r.node(o).rank=r.node(i).rank+(s?a.minlen:-a.minlen)}}(e,r)}function Ye(e,r,n){return n.low<=r.lim&&r.lim<=n.lim}function Be(e){switch(e.graph().ranker){case"network-simplex":We(e);break;case"tight-tree":qe(e);break;case"longest-path":Ae(e);break;default:We(e)}}Te.initLowLimValues=Fe,Te.initCutValues=Se,Te.calcCutValue=Re,Te.leaveEdge=ze,Te.enterEdge=Ge,Te.exchangeEdges=Ve;var Ae=me;function qe(e){me(e),_e(e)}function We(e){Te(e)}var $e=Object.freeze({__proto__:null,rank:Be,tightTreeRanker:qe,networkSimplexRanker:We,networkSimplex:Te,feasibleTree:_e,longestPath:me}),Je=e=>1;function Qe(e,n){if(e.nodeCount()<=1)return[];var t=function(e,n){var t=new x,o=0,i=0;for(var a of e.nodes())t.setNode(a,{v:a,in:0,out:0});for(var s of e.edges()){var d=t.edge(s.v,s.w)||0,u=n(s),f=d+u;t.setEdge(s.v,s.w,f),i=Math.max(i,t.node(s.v).out+=u),o=Math.max(o,t.node(s.w).in+=u)}var h=g(i+o+3,(()=>new r)),c=o+1;for(var a of t.nodes())Xe(h,c,t.node(a));return{graph:t,buckets:h,zeroIdx:c}}(e,n||Je);return a(function(e,r,n){var t,o=[],i=r[r.length-1],a=r[0];for(;e.nodeCount();){for(;t=a.dequeue();)Ke(e,r,n,t);for(;t=i.dequeue();)Ke(e,r,n,t);if(e.nodeCount())for(var s=r.length-2;s>0;--s)if(t=r[s].dequeue()){o=o.concat(Ke(e,r,n,t,!0));break}}return o}(t.graph,t.buckets,t.zeroIdx).map((r=>e.outEdges(r.v,r.w))))}function Ke(e,r,n,t,o){var i=o?[]:void 0;for(var a of e.inEdges(t.v)){var s=e.edge(a),d=e.node(a.v);o&&i.push({v:a.v,w:a.w}),d.out-=s,Xe(r,n,d)}for(var a of e.outEdges(t.v)){s=e.edge(a);var u=a.w,f=e.node(u);f.in-=s,Xe(r,n,f)}return e.removeNode(t.v),i}function Xe(e,r,n){n.out?n.in?e[n.out-n.in+r].enqueue(n):e[e.length-1].enqueue(n):e[0].enqueue(n)}var He={run:function(e){var r="greedy"===e.graph().acyclicer?Qe(e,function(e){return function(r){return e.edge(r).weight}}(e)):function(e){var r=[],n={},t={};function o(i){if(!s(t,i)){for(var a of(t[i]=!0,n[i]=!0,e.outEdges(i)))s(n,a.w)?r.push(a):o(a.w);delete n[i]}}return e.nodes().forEach(o),r}(e);for(var n of r){var t=e.edge(n);e.removeEdge(n),t.forwardName=n.name,t.reversed=!0,e.setEdge(n.w,n.v,t,v("rev"))}},undo:function(e){for(var r of e.edges()){var n=e.edge(r);if(n.reversed){e.removeEdge(r);var t=n.forwardName;delete n.reversed,delete n.forwardName,e.setEdge(r.w,r.v,n,t)}}}};function Ue(e){e.children().forEach((function r(n){var t=e.children(n),o=e.node(n);if(t.length&&t.forEach(r),s(o,"minRank")){o.borderLeft=[],o.borderRight=[];for(var i=o.minRank,a=o.maxRank+1;i<a;++i)Ze(e,"borderLeft","_bl",n,o,i),Ze(e,"borderRight","_br",n,o,i)}}))}function Ze(e,r,n,t,o,i){var a={width:0,height:0,rank:i,borderType:r},s=o[r][i-1],d=L(e,"border",a,n);o[r][i]=d,e.setParent(d,t),s&&e.setEdge(s,d,{weight:1})}var er={adjust:function(e){var r=e.graph().rankdir.toLowerCase();"lr"!==r&&"rl"!==r||rr(e)},undo:function(e){var r=e.graph().rankdir.toLowerCase();"bt"!==r&&"rl"!==r||function(e){for(var r of e.nodes())tr(e.node(r));for(var n of e.edges()){var t=e.edge(n);t.points.forEach(tr),s(t,"y")&&tr(t)}}(e);"lr"!==r&&"rl"!==r||(!function(e){for(var r of e.nodes())or(e.node(r));for(var n of e.edges()){var t=e.edge(n);t.points.forEach(or),s(t,"x")&&or(t)}}(e),rr(e))}};function rr(e){for(var r of e.nodes())nr(e.node(r));for(var n of e.edges())nr(e.edge(n))}function nr(e){var r=e.width;e.width=e.height,e.height=r}function tr(e){e.y=-e.y}function or(e){var r=e.x;e.x=e.y,e.y=r}var ir=Object.freeze({__proto__:null,debugOrdering:function(e){var r=R(e),n=new x({compound:!0,multigraph:!0}).setGraph({});for(var t of e.nodes())n.setNode(t,{label:t}),n.setParent(t,"layer"+e.node(t).rank);for(var o of e.edges())n.setEdge(o.v,o.w,{},o.name);var i=0;for(var a of r){var s="layer"+i;i++,n.setNode(s,{rank:"same"}),a.reduce((function(e,r){return n.setEdge(e.toString(),r,{style:"invis"}),r}))}return n}}),ar={run:function(e){for(var r of(e.graph().dummyChains=[],e.edges()))sr(e,r)},undo:function(e){for(var r of e.graph().dummyChains){var n,t=e.node(r),o=t.edgeLabel;for(e.setEdge(t.edgeObj,o);t.dummy;)n=e.successors(r)[0],e.removeNode(r),o.points.push({x:t.x,y:t.y}),"edge-label"===t.dummy&&(o.x=t.x,o.y=t.y,o.width=t.width,o.height=t.height),r=n,t=e.node(r)}}};function sr(e,r){var n=r.v,t=e.node(n).rank,o=r.w,i=e.node(o).rank,a=r.name,s=e.edge(r),d=s.labelRank;if(i!==t+1){var u,f,h;for(e.removeEdge(r),h=0,++t;t<i;++h,++t)s.points=[],u=L(e,"edge",f={width:0,height:0,edgeLabel:s,edgeObj:r,rank:t},"_d"),t===d&&(f.width=s.width,f.height=s.height,f.dummy="edge-label",f.labelpos=s.labelpos),e.setEdge(n,u,{weight:s.weight},a),0===h&&e.graph().dummyChains.push(u),n=u;e.setEdge(n,o,{weight:s.weight},a)}}function dr(e){var r=function(e){var r={},n=0;function t(o){var i=n;e.children(o).forEach(t),r[o]={low:i,lim:n++}}return e.children().forEach(t),r}(e);for(var n of e.graph().dummyChains)for(var t=e.node(n),o=t.edgeObj,i=ur(e,r,o.v,o.w),a=i.path,s=i.lca,d=0,u=a[d],f=!0;n!==o.w;){if(t=e.node(n),f){for(;(u=a[d])!==s&&e.node(u).maxRank<t.rank;)d++;u===s&&(f=!1)}if(!f){for(;d<a.length-1&&e.node(u=a[d+1]).minRank<=t.rank;)d++;u=a[d]}e.setParent(n,u),n=e.successors(n)[0]}}function ur(e,r,n,t){var o,i,a=[],s=[],d=Math.min(r[n].low,r[t].low),u=Math.max(r[n].lim,r[t].lim);o=n;do{o=e.parent(o),a.push(o)}while(o&&(r[o].low>d||u>r[o].lim));for(i=o,o=t;(o=e.parent(o))!==i;)s.push(o);return{path:a.concat(s.reverse()),lca:i}}var fr={run:function(e){var r=L(e,"root",{},"_root"),n=function(e){var r={};function n(t,o){var i=e.children(t);if(i&&i.length)for(var a of i)n(a,o+1);r[t]=o}for(var t of e.children())n(t,1);return r}(e),t=Math.max(...l(n))-1,o=2*t+1;for(var i of(e.graph().nestingRoot=r,e.edges()))e.edge(i).minlen*=o;var a=function(e){return e.edges().reduce(((r,n)=>r+e.edge(n).weight),0)}(e)+1;for(var s of e.children())hr(e,r,o,a,t,n,s);e.graph().nodeRankFactor=o},cleanup:function(e){var r=e.graph();for(var n of(e.removeNode(r.nestingRoot),delete r.nestingRoot,e.edges())){e.edge(n).nestingEdge&&e.removeEdge(n)}}};function hr(e,r,n,t,o,i,a){var s=e.children(a);if(s.length){var d=z(e,"_bt"),u=z(e,"_bb"),f=e.node(a);for(var h of(e.setParent(d,a),f.borderTop=d,e.setParent(u,a),f.borderBottom=u,s)){hr(e,r,n,t,o,i,h);var c=e.node(h),v=c.borderTop?c.borderTop:h,l=c.borderBottom?c.borderBottom:h,g=c.borderTop?t:2*t,p=v!==l?1:o-i[a]+1;e.setEdge(d,v,{weight:g,minlen:p,nestingEdge:!0}),e.setEdge(l,u,{weight:g,minlen:p,nestingEdge:!0})}e.parent(a)||e.setEdge(r,d,{weight:0,minlen:o+i[a]})}else a!==r&&e.setEdge(r,a,{weight:0,minlen:n})}function cr(e){return"edge-proxy"==e.dummy}function vr(e){return"selfedge"==e.dummy}var lr=50,gr=20,pr=50,mr="tb",wr=1,_r=1,br=0,yr=0,kr=10,Er="r";function Nr(e={}){var r={};for(var n of Object.keys(e))r[n.toLowerCase()]=e[n];return r}function xr(e){return e.nodes().map((function(r){var n=e.node(r),t=e.parent(r),o={v:r};return void 0!==n&&(o.value=n),void 0!==t&&(o.parent=t),o}))}function Ir(e){return e.edges().map((function(r){var n=e.edge(r),t={v:r.v,w:r.w};return void 0!==r.name&&(t.name=r.name),void 0!==n&&(t.value=n),t}))}var Cr=Object.freeze({__proto__:null,write:function(e){var r={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:xr(e),edges:Ir(e)};return void 0!==e.graph()&&(r.value=JSON.parse(JSON.stringify(e.graph()))),r},read:function(e){var r=new x(e.options).setGraph(e.value);for(var n of e.nodes)r.setNode(n.v,n.value),n.parent&&r.setParent(n.v,n.parent);for(var n of e.edges)r.setEdge({v:n.v,w:n.w,name:n.name},n.value);return r}}),Or={Graph:x,GraphLike:I,alg:Le,json:Cr,PriorityQueue:be};e.Graph=x,e.GraphLike=I,e.PriorityQueue=be,e.acyclic=He,e.addBorderSegments=Ue,e.alg=Le,e.coordinateSystem=er,e.data=o,e.debug=ir,e.graphlib=Or,e.greedyFAS=Qe,e.json=Cr,e.layout=function(e,r){var n=r&&r.debugTiming?Y:B;n("layout",(function(){var r=n("  buildLayoutGraph",(function(){return function(e){var r,n,t,o,i,a,s,d,u,f,h,c,v,l,g,p=new x({multigraph:!0,compound:!0}),m=Nr(e.graph()),w={nodesep:null!==(r=m.nodesep)&&void 0!==r?r:pr,edgesep:null!==(n=m.edgesep)&&void 0!==n?n:gr,ranksep:null!==(t=m.ranksep)&&void 0!==t?t:lr,marginx:+(null!==(o=m.marginx)&&void 0!==o?o:0),marginy:+(null!==(i=m.marginy)&&void 0!==i?i:0),acyclicer:m.acyclicer,ranker:null!==(a=m.ranker)&&void 0!==a?a:"network-simplex",rankdir:null!==(s=m.rankdir)&&void 0!==s?s:mr,align:m.align};for(var _ of(p.setGraph(w),e.nodes())){var b=Nr(e.node(_)),y={width:+(null!==(d=b&&b.width)&&void 0!==d?d:0),height:+(null!==(u=b&&b.height)&&void 0!==u?u:0)};p.setNode(_,y),p.setParent(_,e.parent(_))}for(var k of e.edges()){var E=Nr(e.edge(k)),N={minlen:null!==(f=E.minlen)&&void 0!==f?f:wr,weight:null!==(h=E.weight)&&void 0!==h?h:_r,width:null!==(c=E.width)&&void 0!==c?c:br,height:null!==(v=E.height)&&void 0!==v?v:yr,labeloffset:null!==(l=E.labeloffset)&&void 0!==l?l:kr,labelpos:null!==(g=E.labelpos)&&void 0!==g?g:Er};p.setEdge(k,N)}return p}(e)}));n("  runLayout",(function(){!function(e,r){r("    makeSpaceForEdgeLabels",(function(){!function(e){var r=e.graph();for(var n of(r.ranksep/=2,e.edges())){var t=e.edge(n);t.minlen*=2,"c"!==t.labelpos.toLowerCase()&&("TB"===r.rankdir||"BT"===r.rankdir?t.width+=t.labeloffset:t.height+=t.labeloffset)}}(e)})),r("    removeSelfEdges",(function(){!function(e){for(var r of e.edges())if(r.v===r.w){var n=e.node(r.v);n.selfEdges||(n.selfEdges=[]),n.selfEdges.push({e:r,label:e.edge(r)}),e.removeEdge(r)}}(e)})),r("    acyclic",(function(){He.run(e)})),r("    nestingGraph.run",(function(){fr.run(e)})),r("    rank",(function(){Be(S(e))})),r("    injectEdgeLabelProxies",(function(){!function(e){for(var r of e.edges()){var n=e.edge(r);if(n.width&&n.height){var t=e.node(r.v),o=e.node(r.w);L(e,"edge-proxy",{rank:(o.rank-t.rank)/2+t.rank,e:r},"_ep")}}}(e)})),r("    removeEmptyRanks",(function(){D(e)})),r("    nestingGraph.cleanup",(function(){fr.cleanup(e)})),r("    normalizeRanks",(function(){F(e)})),r("    assignRankMinMax",(function(){!function(e){var r=0;for(var n of e.nodes()){var t=e.node(n);t.borderTop&&(t.minRank=e.node(t.borderTop).rank,t.maxRank=e.node(t.borderBottom).rank,r=Math.max(r,t.maxRank))}e.graph().maxRank=r}(e)})),r("    removeEdgeLabelProxies",(function(){!function(e){for(var r of e.nodes()){var n=e.node(r);cr(n)&&(e.edge(n.e).labelRank=n.rank,e.removeNode(r))}}(e)})),r("    normalize.run",(function(){ar.run(e)})),r("    parentDummyChains",(function(){dr(e)})),r("    addBorderSegments",(function(){Ue(e)})),r("    order",(function(){X(e)})),r("    insertSelfEdges",(function(){!function(e){var r,n=R(e);for(var t of n)for(var o=0,i=0;i<t.length;i++){var a=t[i],s=e.node(a);for(var d of(s.order=i+o,null!==(r=s.selfEdges)&&void 0!==r?r:[]))L(e,"selfedge",{width:d.label.width,height:d.label.height,rank:s.rank,order:i+ ++o,e:d.e,label:d.label},"_se");delete s.selfEdges}}(e)})),r("    adjustCoordinateSystem",(function(){er.adjust(e)})),r("    position",(function(){ge(e)})),r("    positionSelfEdges",(function(){!function(e){for(var r of e.nodes()){var n=e.node(r);if(vr(n)){var t=e.node(n.e.v),o=t.x+t.width/2,i=t.y,a=n.x-o,s=t.height/2;e.setEdge(n.e,n.label),e.removeNode(r),n.label.points=[{x:o+2*a/3,y:i-s},{x:o+5*a/6,y:i-s},{x:o+a,y:i},{x:o+5*a/6,y:i+s},{x:o+2*a/3,y:i+s}],n.label.x=n.x,n.label.y=n.y}}}(e)})),r("    removeBorderNodes",(function(){!function(e){for(var r of e.nodes())if(e.children(r).length){var n=e.node(r),t=e.node(n.borderTop),o=e.node(n.borderBottom),i=e.node(d(n.borderLeft)),a=e.node(d(n.borderRight));n.width=Math.abs(a.x-i.x),n.height=Math.abs(o.y-t.y),n.x=i.x+n.width/2,n.y=t.y+n.height/2}for(var r of e.nodes())"border"===e.node(r).dummy&&e.removeNode(r)}(e)})),r("    normalize.undo",(function(){ar.undo(e)})),r("    fixupEdgeLabelCoords",(function(){!function(e){for(var r of e.edges()){var n=e.edge(r);if(s(n,"x"))switch("l"!==n.labelpos&&"r"!==n.labelpos||(n.width-=n.labeloffset),n.labelpos){case"l":n.x-=n.width/2+n.labeloffset;break;case"r":n.x+=n.width/2+n.labeloffset}}}(e)})),r("    undoCoordinateSystem",(function(){er.undo(e)})),r("    translateGraph",(function(){!function(e){var r,n,t,o=Number.POSITIVE_INFINITY,i=0,a=Number.POSITIVE_INFINITY,d=0,u=e.graph(),f=null!==(r=u.marginx)&&void 0!==r?r:0,h=null!==(n=u.marginy)&&void 0!==n?n:0;function c(e){var r=e.x,n=e.y,t=e.width,s=e.height;o=Math.min(o,r-t/2),i=Math.max(i,r+t/2),a=Math.min(a,n-s/2),d=Math.max(d,n+s/2)}for(var v of e.nodes())c(e.node(v));for(var l of e.edges()){s(p=e.edge(l),"x")&&c(p)}for(var v of(o-=f,a-=h,e.nodes())){var g=e.node(v);g.x-=o,g.y-=a}for(var l of e.edges()){var p=e.edge(l);for(var m of null!==(t=p.points)&&void 0!==t?t:[])m.x-=o,m.y-=a;p.hasOwnProperty("x")&&(p.x-=o),p.hasOwnProperty("y")&&(p.y-=a)}u.width=i-o+f,u.height=d-a+h}(e)})),r("    assignNodeIntersects",(function(){!function(e){for(var r of e.edges()){var n,t,o=e.edge(r),i=e.node(r.v),a=e.node(r.w);o.points?(n=o.points[0],t=o.points[o.points.length-1]):(o.points=[],n=a,t=i),o.points.unshift(P(i,n)),o.points.push(P(a,t))}}(e)})),r("    reversePoints",(function(){!function(e){for(var r of e.edges()){var n=e.edge(r);n.reversed&&n.points.reverse()}}(e)})),r("    acyclic.undo",(function(){He.undo(e)}))}(r,n)})),n("  updateInputGraph",(function(){!function(e,r){for(var n of e.nodes()){var t=e.node(n),o=r.node(n);t&&(t.x=o.x,t.y=o.y,r.children(n).length&&(t.width=o.width,t.height=o.height))}for(var i of e.edges()){var a=e.edge(i),d=r.edge(i);a.points=d.points,s(d,"x")&&(a.x=d.x,a.y=d.y)}e.graph().width=r.graph().width,e.graph().height=r.graph().height}(e,r)}))}))},e.nestingGraph=fr,e.normalize=ar,e.order=ee,e.parentDummyChains=dr,e.position=pe,e.rank=$e,e.util=A,e.version="0.1.3",Object.defineProperty(e,"__esModule",{value:!0})}));
;(function (factoryFn) {
    if (typeof module === 'object' && module.exports)
        module.exports = factoryFn(require('graphre'));
    else window.nomnoml = factoryFn(graphre);
  })(function (graphre) {
    var nomnoml;
  (function (nomnoml) {
      function buildStyle(conf, title, body) {
          if (body === void 0) { body = {}; }
          return {
              title: {
                  bold: title.bold || false,
                  underline: title.underline || false,
                  italic: title.italic || false,
                  center: title.center || false,
              },
              body: {
                  bold: body.bold || false,
                  underline: body.underline || false,
                  italic: body.italic || false,
                  center: body.center || false,
              },
              dashed: conf.dashed || false,
              empty: conf.empty || false,
              fill: conf.fill || undefined,
              stroke: conf.stroke || undefined,
              visual: conf.visual || 'class',
              direction: conf.direction || undefined,
          };
      }
      nomnoml.buildStyle = buildStyle;
      var Compartment = (function () {
          function Compartment(lines, nodes, relations) {
              this.lines = lines;
              this.nodes = nodes;
              this.relations = relations;
          }
          return Compartment;
      }());
      nomnoml.Compartment = Compartment;
      var Relation = (function () {
          function Relation() {
          }
          return Relation;
      }());
      nomnoml.Relation = Relation;
      var Classifier = (function () {
          function Classifier(type, name, compartments) {
              this.type = type;
              this.name = name;
              this.compartments = compartments;
              this.dividers = [];
          }
          return Classifier;
      }());
      nomnoml.Classifier = Classifier;
  })(nomnoml || (nomnoml = {}));
  var __spreadArrays = (this && this.__spreadArrays) || function () {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  };
  var nomnoml;
  (function (nomnoml) {
      function layout(measurer, config, ast) {
          function measureLines(lines, fontWeight) {
              if (!lines.length)
                  return { width: 0, height: config.padding };
              measurer.setFont(config, fontWeight, 'normal');
              return {
                  width: Math.round(Math.max.apply(Math, lines.map(measurer.textWidth)) + 2 * config.padding),
                  height: Math.round(measurer.textHeight() * lines.length + 2 * config.padding)
              };
          }
          function layoutCompartment(c, compartmentIndex, style) {
              var _a;
              var textSize = measureLines(c.lines, compartmentIndex ? 'normal' : 'bold');
              if (!c.nodes.length && !c.relations.length) {
                  c.width = textSize.width;
                  c.height = textSize.height;
                  c.offset = { x: config.padding, y: config.padding };
                  return;
              }
              c.nodes.forEach(layoutClassifier);
              var g = new graphre.graphlib.Graph();
              g.setGraph({
                  rankdir: style.direction || config.direction,
                  nodesep: config.spacing,
                  edgesep: config.spacing,
                  ranksep: config.spacing,
                  acyclicer: config.acyclicer,
                  ranker: config.ranker
              });
              for (var _i = 0, _b = c.nodes; _i < _b.length; _i++) {
                  var e = _b[_i];
                  g.setNode(e.name, { width: e.layoutWidth, height: e.layoutHeight });
              }
              for (var _c = 0, _d = c.relations; _c < _d.length; _c++) {
                  var r = _d[_c];
                  if (r.assoc.indexOf('_') > -1) {
                      g.setEdge(r.start, r.end, { id: r.id, minlen: 0 });
                  }
                  else if (((_a = config.gravity) !== null && _a !== void 0 ? _a : 1) != 1) {
                      g.setEdge(r.start, r.end, { id: r.id, minlen: config.gravity });
                  }
                  else {
                      g.setEdge(r.start, r.end, { id: r.id });
                  }
              }
              graphre.layout(g);
              var rels = nomnoml.skanaar.indexBy(c.relations, 'id');
              var nodes = nomnoml.skanaar.indexBy(c.nodes, 'name');
              g.nodes().forEach(function (name) {
                  var node = g.node(name);
                  nodes[name].x = node.x;
                  nodes[name].y = node.y;
              });
              var left = 0;
              var right = 0;
              var top = 0;
              var bottom = 0;
              g.edges().forEach(function (edgeObj) {
                  var edge = g.edge(edgeObj);
                  var start = nodes[edgeObj.v];
                  var end = nodes[edgeObj.w];
                  var rel = rels[edge.id];
                  rel.path = __spreadArrays([start], edge.points, [end]).map(toPoint);
                  var startP = rel.path[1];
                  var endP = rel.path[rel.path.length - 2];
                  layoutLabel(rel.startLabel, startP, adjustQuadrant(quadrant(startP, start, 4), start, end));
                  layoutLabel(rel.endLabel, endP, adjustQuadrant(quadrant(endP, end, 2), end, start));
                  left = Math.min.apply(Math, __spreadArrays([left, rel.startLabel.x, rel.endLabel.x], edge.points.map(function (e) { return e.x; }), edge.points.map(function (e) { return e.x; })));
                  right = Math.max.apply(Math, __spreadArrays([right, rel.startLabel.x + rel.startLabel.width, rel.endLabel.x + rel.endLabel.width], edge.points.map(function (e) { return e.x; })));
                  top = Math.min.apply(Math, __spreadArrays([top, rel.startLabel.y, rel.endLabel.y], edge.points.map(function (e) { return e.y; })));
                  bottom = Math.max.apply(Math, __spreadArrays([bottom, rel.startLabel.y + rel.startLabel.height, rel.endLabel.y + rel.endLabel.height], edge.points.map(function (e) { return e.y; })));
              });
              var graph = g.graph();
              var width = Math.max(graph.width, right - left);
              var height = Math.max(graph.height, bottom - top);
              var graphHeight = height ? height + 2 * config.gutter : 0;
              var graphWidth = width ? width + 2 * config.gutter : 0;
              c.width = Math.max(textSize.width, graphWidth) + 2 * config.padding;
              c.height = textSize.height + graphHeight + config.padding;
              c.offset = { x: config.padding - left, y: config.padding - top };
          }
          function toPoint(o) {
              return { x: o.x, y: o.y };
          }
          function layoutLabel(label, point, quadrant) {
              if (!label.text) {
                  label.width = 0;
                  label.height = 0;
                  label.x = point.x;
                  label.y = point.y;
              }
              else {
                  var fontSize = config.fontSize;
                  var lines = label.text.split('`');
                  label.width = Math.max.apply(Math, lines.map(function (l) { return measurer.textWidth(l); })),
                      label.height = fontSize * lines.length;
                  label.x = point.x + ((quadrant == 1 || quadrant == 4) ? config.padding : -label.width - config.padding),
                      label.y = point.y + ((quadrant == 3 || quadrant == 4) ? config.padding : -label.height - config.padding);
              }
          }
          function quadrant(point, node, fallback) {
              if (point.x < node.x && point.y < node.y)
                  return 1;
              if (point.x > node.x && point.y < node.y)
                  return 2;
              if (point.x > node.x && point.y > node.y)
                  return 3;
              if (point.x < node.x && point.y > node.y)
                  return 4;
              return fallback;
          }
          function adjustQuadrant(quadrant, point, opposite) {
              if ((opposite.x == point.x) || (opposite.y == point.y))
                  return quadrant;
              var flipHorizontally = [4, 3, 2, 1];
              var flipVertically = [2, 1, 4, 3];
              var oppositeQuadrant = (opposite.y < point.y) ?
                  ((opposite.x < point.x) ? 2 : 1) :
                  ((opposite.x < point.x) ? 3 : 4);
              if (oppositeQuadrant === quadrant) {
                  if (config.direction === 'LR')
                      return flipHorizontally[quadrant - 1];
                  if (config.direction === 'TB')
                      return flipVertically[quadrant - 1];
              }
              return quadrant;
          }
          function layoutClassifier(clas) {
              var style = config.styles[clas.type] || nomnoml.styles.CLASS;
              clas.compartments.forEach(function (co, i) { layoutCompartment(co, i, style); });
              nomnoml.layouters[style.visual](config, clas);
              clas.layoutWidth = clas.width + 2 * config.edgeMargin;
              clas.layoutHeight = clas.height + 2 * config.edgeMargin;
          }
          layoutCompartment(ast, 0, nomnoml.styles.CLASS);
          return ast;
      }
      nomnoml.layout = layout;
  })(nomnoml || (nomnoml = {}));
  var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var nomnoml;
  (function (nomnoml) {
      var ImportDepthError = (function (_super) {
          __extends(ImportDepthError, _super);
          function ImportDepthError() {
              return _super.call(this, 'max_import_depth exceeded') || this;
          }
          return ImportDepthError;
      }(Error));
      nomnoml.ImportDepthError = ImportDepthError;
      function compileFile(filepath, maxImportDepth) {
          var fs = require('fs');
          var path = require('path');
          var directory = path.dirname(filepath);
          var rootFileName = filepath.substr(directory.length);
          function loadFile(filename) {
              return fs.readFileSync(path.join(directory, filename), { encoding: 'utf8' });
          }
          return nomnoml.processImports(loadFile(rootFileName), loadFile, maxImportDepth);
      }
      nomnoml.compileFile = compileFile;
  })(nomnoml || (nomnoml = {}));
  var nomnoml;
  (function (nomnoml) {
      nomnoml.version = '1.3.1';
      function fitCanvasSize(canvas, rect, zoom) {
          canvas.width = rect.width * zoom;
          canvas.height = rect.height * zoom;
      }
      function Measurer(config, graphics) {
          return {
              setFont: function (conf, bold, ital) {
                  graphics.setFont(conf.font, bold, ital, config.fontSize);
              },
              textWidth: function (s) { return graphics.measureText(s).width; },
              textHeight: function () { return config.leading * config.fontSize; }
          };
      }
      ;
      function parseAndRender(code, graphics, canvas, scale) {
          var parsedDiagram = nomnoml.parse(code);
          var config = parsedDiagram.config;
          var measurer = Measurer(config, graphics);
          var layout = nomnoml.layout(measurer, config, parsedDiagram.root);
          if (canvas) {
              fitCanvasSize(canvas, layout, config.zoom * scale);
          }
          config.zoom *= scale;
          nomnoml.render(graphics, config, layout, measurer.setFont);
          return { config: config, layout: layout };
      }
      function draw(canvas, code, scale) {
          return parseAndRender(code, nomnoml.skanaar.Canvas(canvas), canvas, scale || 1);
      }
      nomnoml.draw = draw;
      function renderSvg(code, document) {
          var skCanvas = nomnoml.skanaar.Svg('', document);
          var _a = parseAndRender(code, skCanvas, null, 1), config = _a.config, layout = _a.layout;
          return skCanvas.serialize({
              width: layout.width,
              height: layout.height
          }, code, config.title);
      }
      nomnoml.renderSvg = renderSvg;
      function processImports(source, loadFile, maxImportDepth) {
          if (maxImportDepth === void 0) { maxImportDepth = 10; }
          if (maxImportDepth == -1) {
              throw new nomnoml.ImportDepthError();
          }
          function lenientLoadFile(key) {
              try {
                  return loadFile(key) || '';
              }
              catch (e) {
                  return '';
              }
          }
          return source.replace(/#import: *(.*)/g, function (a, file) {
              return processImports(lenientLoadFile(file), loadFile, maxImportDepth - 1);
          });
      }
      nomnoml.processImports = processImports;
  })(nomnoml || (nomnoml = {}));
  var nomnoml;
  (function (nomnoml) {
      var Line = (function () {
          function Line() {
          }
          return Line;
      }());
      function parse(source) {
          function onlyCompilables(line) {
              var ok = line[0] !== '#' && line.trim().substring(0, 2) !== '//';
              return ok ? line.trim() : '';
          }
          function isDirective(line) { return line.text[0] === '#'; }
          var lines = source.split('\n').map(function (s, i) {
              return { text: s, index: i };
          });
          var pureDirectives = lines.filter(isDirective);
          var directives = {};
          pureDirectives.forEach(function (line) {
              try {
                  var tokens = line.text.substring(1).split(':');
                  directives[tokens[0].trim()] = tokens[1].trim();
              }
              catch (e) {
                  throw new Error('line ' + (line.index + 1) + ': Malformed directive');
              }
          });
          var pureDiagramCode = lines.map(function (e) { return onlyCompilables(e.text); }).join('\n');
          if (pureDiagramCode == '') {
              return {
                  root: new nomnoml.Compartment([], [], []),
                  config: getConfig(directives)
              };
          }
          var parseTree = nomnoml.intermediateParse(pureDiagramCode);
          return {
              root: nomnoml.transformParseIntoSyntaxTree(parseTree),
              config: getConfig(directives)
          };
          function directionToDagre(word) {
              if (word == 'down')
                  return 'TB';
              if (word == 'right')
                  return 'LR';
              else
                  return 'TB';
          }
          function parseRanker(word) {
              if (word == 'network-simplex' || word == 'tight-tree' || word == 'longest-path') {
                  return word;
              }
              return 'network-simplex';
          }
          function parseCustomStyle(styleDef) {
              var contains = nomnoml.skanaar.hasSubstring;
              var floatingKeywords = styleDef.replace(/[a-z]*=[^ ]+/g, '');
              var titleDef = nomnoml.skanaar.last(styleDef.match('title=([^ ]*)') || ['']);
              var bodyDef = nomnoml.skanaar.last(styleDef.match('body=([^ ]*)') || ['']);
              return {
                  title: {
                      bold: contains(titleDef, 'bold') || contains(floatingKeywords, 'bold'),
                      underline: contains(titleDef, 'underline') || contains(floatingKeywords, 'underline'),
                      italic: contains(titleDef, 'italic') || contains(floatingKeywords, 'italic'),
                      center: !(contains(titleDef, 'left') || contains(styleDef, 'align=left')),
                  },
                  body: {
                      bold: contains(bodyDef, 'bold'),
                      underline: contains(bodyDef, 'underline'),
                      italic: contains(bodyDef, 'italic'),
                      center: contains(bodyDef, 'center'),
                  },
                  dashed: contains(styleDef, 'dashed'),
                  empty: contains(styleDef, 'empty'),
                  fill: nomnoml.skanaar.last(styleDef.match('fill=([^ ]*)') || []),
                  stroke: nomnoml.skanaar.last(styleDef.match('stroke=([^ ]*)') || []),
                  visual: (nomnoml.skanaar.last(styleDef.match('visual=([^ ]*)') || []) || 'class'),
                  direction: directionToDagre(nomnoml.skanaar.last(styleDef.match('direction=([^ ]*)') || [])),
              };
          }
          function getConfig(d) {
              var _a;
              var userStyles = {};
              for (var key in d) {
                  if (key[0] != '.')
                      continue;
                  var styleDef = d[key];
                  userStyles[key.substring(1).toUpperCase()] = parseCustomStyle(styleDef);
              }
              return {
                  arrowSize: +d.arrowSize || 1,
                  bendSize: +d.bendSize || 0.3,
                  direction: directionToDagre(d.direction),
                  gutter: +d.gutter || 5,
                  edgeMargin: (+d.edgeMargin) || 0,
                  gravity: +((_a = d.gravity) !== null && _a !== void 0 ? _a : 1),
                  edges: d.edges == 'hard' ? 'hard' : 'rounded',
                  fill: (d.fill || '#eee8d5;#fdf6e3;#eee8d5;#fdf6e3').split(';'),
                  background: d.background || 'transparent',
                  fillArrows: d.fillArrows === 'true',
                  font: d.font || 'Helvetica',
                  fontSize: (+d.fontSize) || 12,
                  leading: (+d.leading) || 1.25,
                  lineWidth: (+d.lineWidth) || 3,
                  padding: (+d.padding) || 8,
                  spacing: (+d.spacing) || 40,
                  stroke: d.stroke || '#33322E',
                  title: d.title || '',
                  zoom: +d.zoom || 1,
                  acyclicer: d.acyclicer === 'greedy' ? 'greedy' : undefined,
                  ranker: parseRanker(d.ranker),
                  styles: nomnoml.skanaar.merged(nomnoml.styles, userStyles)
              };
          }
      }
      nomnoml.parse = parse;
      function intermediateParse(source) {
          return nomnomlCoreParser.parse(source);
      }
      nomnoml.intermediateParse = intermediateParse;
      function transformParseIntoSyntaxTree(entity) {
          function isAstClassifier(obj) {
              return obj.parts !== undefined;
          }
          function isAstRelation(obj) {
              return obj.assoc !== undefined;
          }
          function isAstCompartment(obj) {
              return Array.isArray(obj);
          }
          var relationId = 0;
          function transformCompartment(slots) {
              var lines = [];
              var rawClassifiers = [];
              var relations = [];
              slots.forEach(function (p) {
                  if (typeof p === 'string')
                      lines.push(p);
                  if (isAstRelation(p)) {
                      rawClassifiers.push(p.start);
                      rawClassifiers.push(p.end);
                      relations.push({
                          id: relationId++,
                          assoc: p.assoc,
                          start: p.start.parts[0][0],
                          end: p.end.parts[0][0],
                          startLabel: { text: p.startLabel },
                          endLabel: { text: p.endLabel }
                      });
                  }
                  if (isAstClassifier(p)) {
                      rawClassifiers.push(p);
                  }
              });
              var allClassifiers = rawClassifiers
                  .map(transformClassifier)
                  .sort(function (a, b) {
                  return b.compartments.length - a.compartments.length;
              });
              var uniqClassifiers = nomnoml.skanaar.uniqueBy(allClassifiers, 'name');
              var uniqRelations = relations.filter(function (a) {
                  for (var _i = 0, relations_1 = relations; _i < relations_1.length; _i++) {
                      var b = relations_1[_i];
                      if (a === b)
                          return true;
                      if (b.start == a.start && b.end == a.end)
                          return false;
                  }
                  return true;
              });
              return new nomnoml.Compartment(lines, uniqClassifiers, uniqRelations);
          }
          function transformClassifier(entity) {
              var compartments = entity.parts.map(transformCompartment);
              return new nomnoml.Classifier(entity.type, entity.id, compartments);
          }
          return transformCompartment(entity);
      }
      nomnoml.transformParseIntoSyntaxTree = transformParseIntoSyntaxTree;
  })(nomnoml || (nomnoml = {}));
  var nomnoml;
  (function (nomnoml) {
      function render(graphics, config, compartment, setFont) {
          var g = graphics;
          var vm = nomnoml.skanaar.vector;
          function renderCompartment(compartment, color, style, level) {
              g.save();
              g.translate(compartment.offset.x, compartment.offset.y);
              g.fillStyle(color || config.stroke);
              compartment.lines.forEach(function (text, i) {
                  g.textAlign(style.center ? 'center' : 'left');
                  var x = style.center ? compartment.width / 2 - config.padding : 0;
                  var y = (0.5 + (i + 0.5) * config.leading) * config.fontSize;
                  if (text) {
                      g.fillText(text, x, y);
                  }
                  if (style.underline) {
                      var w = g.measureText(text).width;
                      y += Math.round(config.fontSize * 0.2) + 0.5;
                      if (style.center) {
                          g.path([{ x: x - w / 2, y: y }, { x: x + w / 2, y: y }]).stroke();
                      }
                      else {
                          g.path([{ x: x, y: y }, { x: x + w, y: y }]).stroke();
                      }
                      g.lineWidth(config.lineWidth);
                  }
              });
              g.translate(config.gutter, config.gutter);
              compartment.relations.forEach(function (r) { renderRelation(r); });
              compartment.nodes.forEach(function (n) { renderNode(n, level); });
              g.restore();
          }
          function renderNode(node, level) {
              var x = Math.round(node.x - node.width / 2);
              var y = Math.round(node.y - node.height / 2);
              var style = config.styles[node.type] || nomnoml.styles.CLASS;
              g.fillStyle(style.fill || config.fill[level] || nomnoml.skanaar.last(config.fill));
              g.strokeStyle(style.stroke || config.stroke);
              if (style.dashed) {
                  var dash = Math.max(4, 2 * config.lineWidth);
                  g.setLineDash([dash, dash]);
              }
              var drawNode = nomnoml.visualizers[style.visual] || nomnoml.visualizers.class;
              g.setData('name', node.name);
              drawNode(node, x, y, config, g);
              g.setLineDash([]);
              g.save();
              g.translate(x, y);
              node.compartments.forEach(function (part, i) {
                  var textStyle = i == 0 ? style.title : style.body;
                  if (style.empty)
                      return;
                  g.save();
                  g.translate(part.x, part.y);
                  setFont(config, textStyle.bold ? 'bold' : 'normal', textStyle.italic ? 'italic' : undefined);
                  renderCompartment(part, style.stroke, textStyle, level + 1);
                  g.restore();
              });
              for (var _i = 0, _a = node.dividers; _i < _a.length; _i++) {
                  var divider = _a[_i];
                  g.path(divider).stroke();
              }
              g.restore();
          }
          function strokePath(p) {
              if (config.edges === 'rounded') {
                  var radius = config.spacing * config.bendSize;
                  g.beginPath();
                  g.moveTo(p[0].x, p[0].y);
                  for (var i = 1; i < p.length - 1; i++) {
                      g.arcTo(p[i].x, p[i].y, p[i + 1].x, p[i + 1].y, radius);
                  }
                  g.lineTo(nomnoml.skanaar.last(p).x, nomnoml.skanaar.last(p).y);
                  g.stroke();
              }
              else
                  g.path(p).stroke();
          }
          var empty = false, filled = true, diamond = true;
          function renderLabel(label) {
              if (!label || !label.text)
                  return;
              var fontSize = config.fontSize;
              var lines = label.text.split('`');
              lines.forEach(function (l, i) { return g.fillText(l, label.x, label.y + fontSize * (i + 1)); });
          }
          function renderRelation(r) {
              var start = r.path[1];
              var end = r.path[r.path.length - 2];
              var path = r.path.slice(1, -1);
              g.fillStyle(config.stroke);
              setFont(config, 'normal');
              renderLabel(r.startLabel);
              renderLabel(r.endLabel);
              if (r.assoc !== '-/-' && r.assoc !== '_/_') {
                  if (nomnoml.skanaar.hasSubstring(r.assoc, '--') || nomnoml.skanaar.hasSubstring(r.assoc, '__')) {
                      var dash = Math.max(4, 2 * config.lineWidth);
                      g.setLineDash([dash, dash]);
                      strokePath(path);
                      g.setLineDash([]);
                  }
                  else
                      strokePath(path);
              }
              function drawArrowEnd(id, path, end) {
                  if (id === '>' || id === '<')
                      drawArrow(path, filled, end, false);
                  else if (id === ':>' || id === '<:')
                      drawArrow(path, empty, end, false);
                  else if (id === '+')
                      drawArrow(path, filled, end, diamond);
                  else if (id === 'o')
                      drawArrow(path, empty, end, diamond);
              }
              var tokens = r.assoc.split(/[-_]/);
              drawArrowEnd(nomnoml.skanaar.last(tokens), path, end);
              drawArrowEnd(tokens[0], path.reverse(), start);
          }
          function drawArrow(path, isOpen, arrowPoint, diamond) {
              var size = config.spacing * config.arrowSize / 30;
              var v = vm.diff(path[path.length - 2], nomnoml.skanaar.last(path));
              var nv = vm.normalize(v);
              function getArrowBase(s) { return vm.add(arrowPoint, vm.mult(nv, s * size)); }
              var arrowBase = getArrowBase(diamond ? 7 : 10);
              var t = vm.rot(nv);
              var arrowButt = (diamond) ? getArrowBase(14)
                  : (isOpen && !config.fillArrows) ? getArrowBase(5) : arrowBase;
              var arrow = [
                  vm.add(arrowBase, vm.mult(t, 4 * size)),
                  arrowButt,
                  vm.add(arrowBase, vm.mult(t, -4 * size)),
                  arrowPoint
              ];
              g.fillStyle(isOpen ? config.stroke : config.fill[0]);
              g.circuit(arrow).fillAndStroke();
          }
          function snapToPixels() {
              if (config.lineWidth % 2 === 1)
                  g.translate(0.5, 0.5);
          }
          function setBackground() {
              g.clear();
              g.save();
              g.strokeStyle('transparent');
              g.fillStyle(config.background);
              g.rect(0, 0, compartment.width, compartment.height).fill();
              g.restore();
          }
          g.save();
          g.scale(config.zoom, config.zoom);
          setBackground();
          setFont(config, 'bold');
          g.lineWidth(config.lineWidth);
          g.lineJoin('round');
          g.lineCap('round');
          g.strokeStyle(config.stroke);
          snapToPixels();
          renderCompartment(compartment, undefined, nomnoml.buildStyle({}, {}).title, 0);
          g.restore();
      }
      nomnoml.render = render;
  })(nomnoml || (nomnoml = {}));
  var nomnoml;
  (function (nomnoml) {
      var skanaar;
      (function (skanaar) {
          function Canvas(canvas, callbacks) {
              var ctx = canvas.getContext('2d');
              var mousePos = { x: 0, y: 0 };
              var twopi = 2 * 3.1416;
              function mouseEventToPos(event) {
                  var e = canvas;
                  return {
                      x: event.clientX - e.getBoundingClientRect().left - e.clientLeft + e.scrollLeft,
                      y: event.clientY - e.getBoundingClientRect().top - e.clientTop + e.scrollTop
                  };
              }
              if (callbacks) {
                  canvas.addEventListener('mousedown', function (event) {
                      if (callbacks.mousedown)
                          callbacks.mousedown(mouseEventToPos(event));
                  });
                  canvas.addEventListener('mouseup', function (event) {
                      if (callbacks.mouseup)
                          callbacks.mouseup(mouseEventToPos(event));
                  });
                  canvas.addEventListener('mousemove', function (event) {
                      mousePos = mouseEventToPos(event);
                      if (callbacks.mousemove)
                          callbacks.mousemove(mouseEventToPos(event));
                  });
              }
              var chainable = {
                  stroke: function () {
                      ctx.stroke();
                      return chainable;
                  },
                  fill: function () {
                      ctx.fill();
                      return chainable;
                  },
                  fillAndStroke: function () {
                      ctx.fill();
                      ctx.stroke();
                      return chainable;
                  }
              };
              function tracePath(path, offset, s) {
                  s = s === undefined ? 1 : s;
                  offset = offset || { x: 0, y: 0 };
                  ctx.beginPath();
                  ctx.moveTo(offset.x + s * path[0].x, offset.y + s * path[0].y);
                  for (var i = 1, len = path.length; i < len; i++)
                      ctx.lineTo(offset.x + s * path[i].x, offset.y + s * path[i].y);
                  return chainable;
              }
              return {
                  mousePos: function () { return mousePos; },
                  width: function () { return canvas.width; },
                  height: function () { return canvas.height; },
                  clear: function () {
                      ctx.clearRect(0, 0, canvas.width, canvas.height);
                  },
                  circle: function (p, r) {
                      ctx.beginPath();
                      ctx.arc(p.x, p.y, r, 0, twopi);
                      return chainable;
                  },
                  ellipse: function (center, rx, ry, start, stop) {
                      if (start === undefined)
                          start = 0;
                      if (stop === undefined)
                          stop = twopi;
                      ctx.beginPath();
                      ctx.save();
                      ctx.translate(center.x, center.y);
                      ctx.scale(1, ry / rx);
                      ctx.arc(0, 0, rx / 2, start, stop);
                      ctx.restore();
                      return chainable;
                  },
                  arc: function (x, y, r, start, stop) {
                      ctx.beginPath();
                      ctx.moveTo(x, y);
                      ctx.arc(x, y, r, start, stop);
                      return chainable;
                  },
                  roundRect: function (x, y, w, h, r) {
                      ctx.beginPath();
                      ctx.moveTo(x + r, y);
                      ctx.arcTo(x + w, y, x + w, y + r, r);
                      ctx.lineTo(x + w, y + h - r);
                      ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
                      ctx.lineTo(x + r, y + h);
                      ctx.arcTo(x, y + h, x, y + h - r, r);
                      ctx.lineTo(x, y + r);
                      ctx.arcTo(x, y, x + r, y, r);
                      ctx.closePath();
                      return chainable;
                  },
                  rect: function (x, y, w, h) {
                      ctx.beginPath();
                      ctx.moveTo(x, y);
                      ctx.lineTo(x + w, y);
                      ctx.lineTo(x + w, y + h);
                      ctx.lineTo(x, y + h);
                      ctx.closePath();
                      return chainable;
                  },
                  path: tracePath,
                  circuit: function (path, offset, s) {
                      tracePath(path, offset, s);
                      ctx.closePath();
                      return chainable;
                  },
                  setFont: function (font, bold, ital, fontSize) {
                      ctx.font = bold + " " + (ital || '') + " " + fontSize + "pt " + font + ", Helvetica, sans-serif";
                  },
                  fillStyle: function (s) { ctx.fillStyle = s; },
                  strokeStyle: function (s) { ctx.strokeStyle = s; },
                  textAlign: function (a) { ctx.textAlign = a; },
                  lineCap: function (cap) { ctx.lineCap = cap; },
                  lineJoin: function (join) { ctx.lineJoin = join; },
                  lineWidth: function (w) { ctx.lineWidth = w; },
                  arcTo: function () { return ctx.arcTo.apply(ctx, arguments); },
                  beginPath: function () { return ctx.beginPath.apply(ctx, arguments); },
                  fillText: function () { return ctx.fillText.apply(ctx, arguments); },
                  lineTo: function () { return ctx.lineTo.apply(ctx, arguments); },
                  measureText: function () { return ctx.measureText.apply(ctx, arguments); },
                  moveTo: function () { return ctx.moveTo.apply(ctx, arguments); },
                  restore: function () { return ctx.restore.apply(ctx, arguments); },
                  setData: function (name, value) { },
                  save: function () { return ctx.save.apply(ctx, arguments); },
                  scale: function () { return ctx.scale.apply(ctx, arguments); },
                  setLineDash: function () { return ctx.setLineDash.apply(ctx, arguments); },
                  stroke: function () { return ctx.stroke.apply(ctx, arguments); },
                  translate: function () { return ctx.translate.apply(ctx, arguments); }
              };
          }
          skanaar.Canvas = Canvas;
      })(skanaar = nomnoml.skanaar || (nomnoml.skanaar = {}));
  })(nomnoml || (nomnoml = {}));
  var nomnoml;
  (function (nomnoml) {
      var skanaar;
      (function (skanaar) {
          function xmlEncode(str) {
              return (str !== null && str !== void 0 ? str : '').toString()
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&apos;');
          }
          skanaar.charWidths = { "0": 10, "1": 10, "2": 10, "3": 10, "4": 10, "5": 10, "6": 10, "7": 10, "8": 10, "9": 10, " ": 5, "!": 5, "\"": 6, "#": 10, "$": 10, "%": 15, "&": 11, "'": 4, "(": 6, ")": 6, "*": 7, "+": 10, ",": 5, "-": 6, ".": 5, "/": 5, ":": 5, ";": 5, "<": 10, "=": 10, ">": 10, "?": 10, "@": 17, "A": 11, "B": 11, "C": 12, "D": 12, "E": 11, "F": 10, "G": 13, "H": 12, "I": 5, "J": 9, "K": 11, "L": 10, "M": 14, "N": 12, "O": 13, "P": 11, "Q": 13, "R": 12, "S": 11, "T": 10, "U": 12, "V": 11, "W": 16, "X": 11, "Y": 11, "Z": 10, "[": 5, "\\": 5, "]": 5, "^": 8, "_": 10, "`": 6, "a": 10, "b": 10, "c": 9, "d": 10, "e": 10, "f": 5, "g": 10, "h": 10, "i": 4, "j": 4, "k": 9, "l": 4, "m": 14, "n": 10, "o": 10, "p": 10, "q": 10, "r": 6, "s": 9, "t": 5, "u": 10, "v": 9, "w": 12, "x": 9, "y": 9, "z": 9, "{": 6, "|": 5, "}": 6, "~": 10 };
          function Svg(globalStyle, document) {
              var initialState = {
                  x: 0,
                  y: 0,
                  stroke: 'none',
                  strokeWidth: 1,
                  dashArray: 'none',
                  fill: 'none',
                  textAlign: 'left',
                  font: 'Helvetica, Arial, sans-serif',
                  fontSize: 12,
                  attributes: {}
              };
              var states = [initialState];
              var elements = [];
              var measurementCanvas = document ? document.createElement('canvas') : null;
              var ctx = measurementCanvas ? measurementCanvas.getContext('2d') : null;
              var Element = (function () {
                  function Element(name, attr, content) {
                      this.name = name;
                      this.attr = attr;
                      this.content = content || undefined;
                  }
                  Element.prototype.stroke = function () {
                      var base = this.attr.style || '';
                      this.attr.style = base +
                          'stroke:' + lastDefined('stroke') +
                          ';fill:none' +
                          ';stroke-dasharray:' + lastDefined('dashArray') +
                          ';stroke-width:' + lastDefined('strokeWidth') + ';';
                      return this;
                  };
                  Element.prototype.fill = function () {
                      var base = this.attr.style || '';
                      this.attr.style = base + 'stroke:none; fill:' + lastDefined('fill') + ';';
                      return this;
                  };
                  Element.prototype.fillAndStroke = function () {
                      var base = this.attr.style || '';
                      this.attr.style = base +
                          'stroke:' + lastDefined('stroke') +
                          ';fill:' + lastDefined('fill') +
                          ';stroke-dasharray:' + lastDefined('dashArray') +
                          ';stroke-width:' + lastDefined('strokeWidth') + ';';
                      return this;
                  };
                  return Element;
              }());
              function State(dx, dy) {
                  return {
                      x: dx,
                      y: dy,
                      stroke: null,
                      strokeWidth: null,
                      fill: null,
                      textAlign: null,
                      dashArray: 'none',
                      font: null,
                      fontSize: null,
                      attributes: null
                  };
              }
              function trans(coord, axis) {
                  states.forEach(function (t) { coord += t[axis]; });
                  return coord;
              }
              function tX(coord) { return Math.round(10 * trans(coord, 'x')) / 10; }
              function tY(coord) { return Math.round(10 * trans(coord, 'y')) / 10; }
              function lastDefined(property) {
                  for (var i = states.length - 1; i >= 0; i--)
                      if (states[i][property])
                          return states[i][property];
                  return undefined;
              }
              function last(list) { return list[list.length - 1]; }
              function tracePath(path, offset, s) {
                  s = s === undefined ? 1 : s;
                  offset = offset || { x: 0, y: 0 };
                  var d = path.map(function (e, i) {
                      return (i ? 'L' : 'M') + tX(offset.x + s * e.x) + ' ' + tY(offset.y + s * e.y);
                  }).join(' ');
                  return newElement('path', { d: d });
              }
              function newElement(type, attr, content) {
                  var element = new Element(type, attr, content);
                  var extraData = lastDefined('attributes');
                  for (var key in extraData) {
                      element.attr['data-' + key] = extraData[key];
                  }
                  elements.push(element);
                  return element;
              }
              return {
                  width: function () { return 0; },
                  height: function () { return 0; },
                  clear: function () { },
                  circle: function (p, r) {
                      return newElement('circle', { r: r, cx: tX(p.x), cy: tY(p.y) });
                  },
                  ellipse: function (center, w, h, start, stop) {
                      if (stop) {
                          var y = tY(center.y);
                          return newElement('path', { d: 'M' + tX(center.x - w / 2) + ' ' + y +
                                  'A' + w / 2 + ' ' + h / 2 + ' 0 1 0 ' + tX(center.x + w / 2) + ' ' + y
                          });
                      }
                      else {
                          return newElement('ellipse', { cx: tX(center.x), cy: tY(center.y), rx: w / 2, ry: h / 2 });
                      }
                  },
                  arc: function (x, y, r) {
                      return newElement('ellipse', { cx: tX(x), cy: tY(y), rx: r, ry: r });
                  },
                  roundRect: function (x, y, w, h, r) {
                      return newElement('rect', { x: tX(x), y: tY(y), rx: r, ry: r, height: h, width: w });
                  },
                  rect: function (x, y, w, h) {
                      return newElement('rect', { x: tX(x), y: tY(y), height: h, width: w });
                  },
                  path: tracePath,
                  circuit: function (path, offset, s) {
                      var element = tracePath(path, offset, s);
                      element.attr.d += ' Z';
                      return element;
                  },
                  setFont: function (font, bold, ital, fontSize) {
                      var font = bold + " " + (ital || '') + " " + fontSize + "pt " + font + ", Helvetica, sans-serif";
                      last(states).font = font;
                      last(states).fontSize = fontSize;
                  },
                  strokeStyle: function (stroke) {
                      last(states).stroke = stroke;
                  },
                  fillStyle: function (fill) {
                      last(states).fill = fill;
                  },
                  arcTo: function (x1, y1, x2, y2) {
                      last(elements).attr.d += ('L' + tX(x1) + ' ' + tY(y1) + ' L' + tX(x2) + ' ' + tY(y2) + ' ');
                  },
                  beginPath: function () {
                      return newElement('path', { d: '' });
                  },
                  fillText: function (text, x, y) {
                      var attr = { x: tX(x), y: tY(y), style: 'fill: ' + last(states).fill + ';' };
                      var font = lastDefined('font');
                      if (font) {
                          attr.style += 'font:' + font + ';';
                      }
                      if (lastDefined('textAlign') === 'center') {
                          attr.style += 'text-anchor: middle;';
                      }
                      return newElement('text', attr, text);
                  },
                  lineCap: function (cap) { globalStyle += ';stroke-linecap:' + cap; },
                  lineJoin: function (join) { globalStyle += ';stroke-linejoin:' + join; },
                  lineTo: function (x, y) {
                      last(elements).attr.d += ('L' + tX(x) + ' ' + tY(y) + ' ');
                      return last(elements);
                  },
                  lineWidth: function (w) {
                      last(states).strokeWidth = w;
                  },
                  measureText: function (s) {
                      if (ctx) {
                          ctx.font = lastDefined('font') || 'normal 12pt Helvetica';
                          return ctx.measureText(s);
                      }
                      else {
                          return {
                              width: skanaar.sum(s, function (c) {
                                  var scale = lastDefined('fontSize') / 12;
                                  if (skanaar.charWidths[c]) {
                                      return skanaar.charWidths[c] * scale;
                                  }
                                  return 16 * scale;
                              })
                          };
                      }
                  },
                  moveTo: function (x, y) {
                      last(elements).attr.d += ('M' + tX(x) + ' ' + tY(y) + ' ');
                  },
                  restore: function () {
                      states.pop();
                  },
                  save: function () {
                      states.push(State(0, 0));
                  },
                  setData: function (name, value) {
                      lastDefined('attributes')[name] = value;
                  },
                  scale: function () { },
                  setLineDash: function (d) {
                      last(states).dashArray = (d.length === 0) ? 'none' : d[0] + ' ' + d[1];
                  },
                  stroke: function () {
                      last(elements).stroke();
                  },
                  textAlign: function (a) {
                      last(states).textAlign = a;
                  },
                  translate: function (dx, dy) {
                      last(states).x += dx;
                      last(states).y += dy;
                  },
                  serialize: function (size, desc, title) {
                      function toAttr(obj) {
                          return Object.keys(obj).map(function (key) { return key + "=\"" + xmlEncode(obj[key]) + "\""; }).join(' ');
                      }
                      function toHtml(e) {
                          return "<" + e.name + " " + toAttr(e.attr) + ">" + xmlEncode(e.content) + "</" + e.name + ">";
                      }
                      var elementsToSerialize = elements;
                      if (desc) {
                          elementsToSerialize.unshift(new Element('desc', {}, desc));
                      }
                      if (title) {
                          elementsToSerialize.unshift(new Element('title', {}, title));
                      }
                      var innerSvg = elementsToSerialize.map(toHtml).join('\n  ');
                      var attrs = {
                          version: '1.1',
                          baseProfile: 'full',
                          width: size.width,
                          height: size.height,
                          viewbox: '0 0 ' + size.width + ' ' + size.height,
                          xmlns: 'http://www.w3.org/2000/svg',
                          'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                          'xmlns:ev': 'http://www.w3.org/2001/xml-events',
                          style: 'font:' + lastDefined('font') + ';' + globalStyle,
                      };
                      return '<svg ' + toAttr(attrs) + '>\n  ' + innerSvg + '\n</svg>';
                  }
              };
          }
          skanaar.Svg = Svg;
      })(skanaar = nomnoml.skanaar || (nomnoml.skanaar = {}));
  })(nomnoml || (nomnoml = {}));
  var nomnoml;
  (function (nomnoml) {
      var skanaar;
      (function (skanaar) {
          function range(_a, count) {
              var min = _a[0], max = _a[1];
              var output = [];
              for (var i = 0; i < count; i++)
                  output.push(min + (max - min) * i / (count - 1));
              return output;
          }
          skanaar.range = range;
          function sum(list, transform) {
              for (var i = 0, summation = 0, len = list.length; i < len; i++)
                  summation += transform(list[i]);
              return summation;
          }
          skanaar.sum = sum;
          function find(list, predicate) {
              for (var i = 0; i < list.length; i++)
                  if (predicate(list[i]))
                      return list[i];
              return undefined;
          }
          skanaar.find = find;
          function last(list) {
              return list[list.length - 1];
          }
          skanaar.last = last;
          function hasSubstring(haystack, needle) {
              if (needle === '')
                  return true;
              if (!haystack)
                  return false;
              return haystack.indexOf(needle) !== -1;
          }
          skanaar.hasSubstring = hasSubstring;
          function merged(a, b) {
              function assign(target, data) {
                  for (var key in data)
                      target[key] = data[key];
              }
              var obj = {};
              assign(obj, a);
              assign(obj, b);
              return obj;
          }
          skanaar.merged = merged;
          function indexBy(list, key) {
              var obj = {};
              for (var i = 0; i < list.length; i++)
                  obj[list[i][key]] = list[i];
              return obj;
          }
          skanaar.indexBy = indexBy;
          function uniqueBy(list, property) {
              var seen = {};
              var out = [];
              for (var i = 0; i < list.length; i++) {
                  var key = list[i][property];
                  if (!seen[key]) {
                      seen[key] = true;
                      out.push(list[i]);
                  }
              }
              return out;
          }
          skanaar.uniqueBy = uniqueBy;
      })(skanaar = nomnoml.skanaar || (nomnoml.skanaar = {}));
  })(nomnoml || (nomnoml = {}));
  var nomnoml;
  (function (nomnoml) {
      var skanaar;
      (function (skanaar) {
          skanaar.vector = {
              dist: function (a, b) { return skanaar.vector.mag(skanaar.vector.diff(a, b)); },
              add: function (a, b) { return { x: a.x + b.x, y: a.y + b.y }; },
              diff: function (a, b) { return { x: a.x - b.x, y: a.y - b.y }; },
              mult: function (v, factor) { return { x: factor * v.x, y: factor * v.y }; },
              mag: function (v) { return Math.sqrt(v.x * v.x + v.y * v.y); },
              normalize: function (v) { return skanaar.vector.mult(v, 1 / skanaar.vector.mag(v)); },
              rot: function (a) { return { x: a.y, y: -a.x }; }
          };
      })(skanaar = nomnoml.skanaar || (nomnoml.skanaar = {}));
  })(nomnoml || (nomnoml = {}));
  var nomnoml;
  (function (nomnoml) {
      nomnoml.styles = {
          ABSTRACT: nomnoml.buildStyle({ visual: 'class' }, { center: true, italic: true }),
          ACTOR: nomnoml.buildStyle({ visual: 'actor' }, { center: true }, { center: true }),
          CHOICE: nomnoml.buildStyle({ visual: 'rhomb' }, { center: true }, { center: true }),
          CLASS: nomnoml.buildStyle({ visual: 'class' }, { center: true, bold: true }),
          DATABASE: nomnoml.buildStyle({ visual: 'database' }, { center: true, bold: true }, { center: true }),
          END: nomnoml.buildStyle({ visual: 'end', empty: true }, {}),
          FRAME: nomnoml.buildStyle({ visual: 'frame' }, {}),
          HIDDEN: nomnoml.buildStyle({ visual: 'hidden', empty: true }, {}),
          INPUT: nomnoml.buildStyle({ visual: 'input' }, { center: true }),
          INSTANCE: nomnoml.buildStyle({ visual: 'class' }, { center: true, underline: true }),
          LABEL: nomnoml.buildStyle({ visual: 'none' }, {}),
          NOTE: nomnoml.buildStyle({ visual: 'note' }, {}),
          PACKAGE: nomnoml.buildStyle({ visual: 'package' }, {}),
          RECEIVER: nomnoml.buildStyle({ visual: 'receiver' }, {}),
          REFERENCE: nomnoml.buildStyle({ visual: 'class', dashed: true }, { center: true }),
          SENDER: nomnoml.buildStyle({ visual: 'sender' }, {}),
          START: nomnoml.buildStyle({ visual: 'start', empty: true }, {}),
          STATE: nomnoml.buildStyle({ visual: 'roundrect' }, { center: true }),
          TABLE: nomnoml.buildStyle({ visual: 'table' }, { center: true, bold: true }),
          TRANSCEIVER: nomnoml.buildStyle({ visual: 'transceiver' }, {}),
          USECASE: nomnoml.buildStyle({ visual: 'ellipse' }, { center: true }, { center: true }),
      };
      function box(config, clas) {
          clas.width = Math.max.apply(Math, clas.compartments.map(function (e) { return e.width; }));
          clas.height = nomnoml.skanaar.sum(clas.compartments, function (e) { return e.height; });
          clas.dividers = [];
          var y = 0;
          for (var _i = 0, _a = clas.compartments; _i < _a.length; _i++) {
              var comp = _a[_i];
              comp.x = 0;
              comp.y = y;
              comp.width = clas.width;
              y += comp.height;
              if (comp != nomnoml.skanaar.last(clas.compartments))
                  clas.dividers.push([{ x: 0, y: y }, { x: clas.width, y: y }]);
          }
      }
      function icon(config, clas) {
          clas.dividers = [];
          clas.compartments = [];
          clas.width = config.fontSize * 2.5;
          clas.height = config.fontSize * 2.5;
      }
      nomnoml.layouters = {
          actor: function (config, clas) {
              clas.width = Math.max.apply(Math, __spreadArrays([config.padding * 2], clas.compartments.map(function (e) { return e.width; })));
              clas.height = config.padding * 3 + nomnoml.skanaar.sum(clas.compartments, function (e) { return e.height; });
              clas.dividers = [];
              var y = config.padding * 3;
              for (var _i = 0, _a = clas.compartments; _i < _a.length; _i++) {
                  var comp = _a[_i];
                  comp.x = 0;
                  comp.y = y;
                  comp.width = clas.width;
                  y += comp.height;
                  if (comp != nomnoml.skanaar.last(clas.compartments))
                      clas.dividers.push([{ x: config.padding, y: y }, { x: clas.width - config.padding, y: y }]);
              }
          },
          class: box,
          database: function (config, clas) {
              clas.width = Math.max.apply(Math, clas.compartments.map(function (e) { return e.width; }));
              clas.height = nomnoml.skanaar.sum(clas.compartments, function (e) { return e.height; }) + config.padding * 2;
              clas.dividers = [];
              var y = config.padding * 1.5;
              for (var _i = 0, _a = clas.compartments; _i < _a.length; _i++) {
                  var comp = _a[_i];
                  comp.x = 0;
                  comp.y = y;
                  comp.width = clas.width;
                  y += comp.height;
                  if (comp != nomnoml.skanaar.last(clas.compartments)) {
                      var path = nomnoml.skanaar.range([0, Math.PI], 16).map(function (a) { return ({
                          x: clas.width * 0.5 * (1 - Math.cos(a)),
                          y: y + config.padding * (0.75 * Math.sin(a) - 0.5),
                      }); });
                      clas.dividers.push(path);
                  }
              }
          },
          ellipse: function (config, clas) {
              var width = Math.max.apply(Math, clas.compartments.map(function (e) { return e.width; }));
              var height = nomnoml.skanaar.sum(clas.compartments, function (e) { return e.height; });
              clas.width = width * 1.25;
              clas.height = height * 1.25;
              clas.dividers = [];
              var y = height * 0.125;
              var sq = function (x) { return x * x; };
              var rimPos = function (y) { return Math.sqrt(sq(0.5) - sq(y / clas.height - 0.5)) * clas.width; };
              for (var _i = 0, _a = clas.compartments; _i < _a.length; _i++) {
                  var comp = _a[_i];
                  comp.x = width * 0.125;
                  comp.y = y;
                  comp.width = width;
                  y += comp.height;
                  if (comp != nomnoml.skanaar.last(clas.compartments))
                      clas.dividers.push([
                          { x: clas.width / 2 + rimPos(y) - 1, y: y },
                          { x: clas.width / 2 - rimPos(y) + 1, y: y }
                      ]);
              }
          },
          end: icon,
          frame: function (config, clas) {
              var w = clas.compartments[0].width;
              var h = clas.compartments[0].height;
              box(config, clas);
              if (clas.dividers.length)
                  clas.dividers.shift();
              clas.dividers.unshift([
                  { x: 0, y: h },
                  { x: w - h / 4, y: h },
                  { x: w + h / 4, y: h / 2 },
                  { x: w + h / 4, y: 0 }
              ]);
          },
          hidden: function (config, clas) {
              clas.dividers = [];
              clas.compartments = [];
              clas.width = 1;
              clas.height = 1;
          },
          input: box,
          none: box,
          note: box,
          package: box,
          receiver: box,
          rhomb: function (config, clas) {
              var width = Math.max.apply(Math, clas.compartments.map(function (e) { return e.width; }));
              var height = nomnoml.skanaar.sum(clas.compartments, function (e) { return e.height; });
              clas.width = width * 1.5;
              clas.height = height * 1.5;
              clas.dividers = [];
              var y = height * 0.25;
              for (var _i = 0, _a = clas.compartments; _i < _a.length; _i++) {
                  var comp = _a[_i];
                  comp.x = width * 0.25;
                  comp.y = y;
                  comp.width = width;
                  y += comp.height;
                  var slope = clas.width / clas.height;
                  if (comp != nomnoml.skanaar.last(clas.compartments))
                      clas.dividers.push([
                          { x: clas.width / 2 + (y < clas.height / 2 ? y * slope : (clas.height - y) * slope), y: y },
                          { x: clas.width / 2 - (y < clas.height / 2 ? y * slope : (clas.height - y) * slope), y: y }
                      ]);
              }
          },
          roundrect: box,
          sender: box,
          start: icon,
          table: function (config, clas) {
              if (clas.compartments.length == 1) {
                  box(config, clas);
                  return;
              }
              var gridcells = clas.compartments.slice(1);
              var rows = [[]];
              function isRowBreak(e) {
                  return !e.lines.length && !e.nodes.length && !e.relations.length;
              }
              function isRowFull(e) {
                  var current = nomnoml.skanaar.last(rows);
                  return rows[0] != current && rows[0].length == current.length;
              }
              function isEnd(e) {
                  return comp == nomnoml.skanaar.last(gridcells);
              }
              for (var _i = 0, gridcells_1 = gridcells; _i < gridcells_1.length; _i++) {
                  var comp = gridcells_1[_i];
                  if (!isEnd(comp) && isRowBreak(comp) && nomnoml.skanaar.last(rows).length) {
                      rows.push([]);
                  }
                  else if (isRowFull(comp)) {
                      rows.push([comp]);
                  }
                  else {
                      nomnoml.skanaar.last(rows).push(comp);
                  }
              }
              var header = clas.compartments[0];
              var cellW = Math.max.apply(Math, __spreadArrays([header.width / rows[0].length], gridcells.map(function (e) { return e.width; })));
              var cellH = Math.max.apply(Math, gridcells.map(function (e) { return e.height; }));
              clas.width = cellW * rows[0].length;
              clas.height = header.height + cellH * rows.length;
              var hh = header.height;
              clas.dividers = __spreadArrays([
                  [{ x: 0, y: header.height }, { x: 0, y: header.height }]
              ], rows.map(function (e, i) { return [{ x: 0, y: hh + i * cellH }, { x: clas.width, y: hh + i * cellH }]; }), rows[0].map(function (e, i) { return [{ x: (i + 1) * cellW, y: hh }, { x: (i + 1) * cellW, y: clas.height }]; }));
              header.x = 0;
              header.y = 0;
              header.width = clas.width;
              for (var i = 0; i < rows.length; i++) {
                  for (var j = 0; j < rows[i].length; j++) {
                      var cell = rows[i][j];
                      cell.x = j * cellW;
                      cell.y = hh + i * cellH;
                      cell.width = cellW;
                  }
              }
          },
          transceiver: box,
      };
      nomnoml.visualizers = {
          actor: function (node, x, y, config, g) {
              var a = config.padding / 2;
              var yp = y + a * 4;
              var faceCenter = { x: node.x, y: yp - a };
              g.circle(faceCenter, a).fillAndStroke();
              g.path([{ x: node.x, y: yp }, { x: node.x, y: yp + 2 * a }]).stroke();
              g.path([{ x: node.x - a, y: yp + a }, { x: node.x + a, y: yp + a }]).stroke();
              g.path([{ x: node.x - a, y: yp + a + config.padding },
                  { x: node.x, y: yp + config.padding },
                  { x: node.x + a, y: yp + a + config.padding }]).stroke();
          },
          class: function (node, x, y, config, g) {
              g.rect(x, y, node.width, node.height).fillAndStroke();
          },
          database: function (node, x, y, config, g) {
              var pad = config.padding;
              var cy = y - pad / 2;
              var pi = 3.1416;
              g.rect(x, y + pad, node.width, node.height - pad * 1.5).fill();
              g.path([{ x: x, y: cy + pad * 1.5 }, { x: x, y: cy - pad * 0.5 + node.height }]).stroke();
              g.path([
                  { x: x + node.width, y: cy + pad * 1.5 },
                  { x: x + node.width, y: cy - pad * 0.5 + node.height }
              ]).stroke();
              g.ellipse({ x: node.x, y: cy + pad * 1.5 }, node.width, pad * 1.5).fillAndStroke();
              g.ellipse({ x: node.x, y: cy - pad * 0.5 + node.height }, node.width, pad * 1.5, 0, pi)
                  .fillAndStroke();
          },
          ellipse: function (node, x, y, config, g) {
              g.ellipse({ x: node.x, y: node.y }, node.width, node.height).fillAndStroke();
          },
          end: function (node, x, y, config, g) {
              g.circle({ x: node.x, y: y + node.height / 2 }, node.height / 3).fillAndStroke();
              g.fillStyle(config.stroke);
              g.circle({ x: node.x, y: y + node.height / 2 }, node.height / 3 - config.padding / 2).fill();
          },
          frame: function (node, x, y, config, g) {
              g.rect(x, y, node.width, node.height).fillAndStroke();
          },
          hidden: function (node, x, y, config, g) {
          },
          input: function (node, x, y, config, g) {
              g.circuit([
                  { x: x + config.padding, y: y },
                  { x: x + node.width, y: y },
                  { x: x + node.width - config.padding, y: y + node.height },
                  { x: x, y: y + node.height }
              ]).fillAndStroke();
          },
          none: function (node, x, y, config, g) {
          },
          note: function (node, x, y, config, g) {
              g.circuit([
                  { x: x, y: y },
                  { x: x + node.width - config.padding, y: y },
                  { x: x + node.width, y: y + config.padding },
                  { x: x + node.width, y: y + node.height },
                  { x: x, y: y + node.height },
                  { x: x, y: y }
              ]).fillAndStroke();
              g.path([
                  { x: x + node.width - config.padding, y: y },
                  { x: x + node.width - config.padding, y: y + config.padding },
                  { x: x + node.width, y: y + config.padding }
              ]).stroke();
          },
          package: function (node, x, y, config, g) {
              var headHeight = node.compartments[0].height;
              g.rect(x, y + headHeight, node.width, node.height - headHeight).fillAndStroke();
              var w = g.measureText(node.name).width + 2 * config.padding;
              g.circuit([
                  { x: x, y: y + headHeight },
                  { x: x, y: y },
                  { x: x + w, y: y },
                  { x: x + w, y: y + headHeight }
              ]).fillAndStroke();
          },
          receiver: function (node, x, y, config, g) {
              g.circuit([
                  { x: x - config.padding, y: y },
                  { x: x + node.width, y: y },
                  { x: x + node.width, y: y + node.height },
                  { x: x - config.padding, y: y + node.height },
                  { x: x, y: y + node.height / 2 },
              ]).fillAndStroke();
          },
          rhomb: function (node, x, y, config, g) {
              g.circuit([
                  { x: node.x, y: y },
                  { x: x + node.width, y: node.y },
                  { x: node.x, y: y + node.height },
                  { x: x, y: node.y }
              ]).fillAndStroke();
          },
          roundrect: function (node, x, y, config, g) {
              var r = Math.min(config.padding * 2 * config.leading, node.height / 2);
              g.roundRect(x, y, node.width, node.height, r).fillAndStroke();
          },
          sender: function (node, x, y, config, g) {
              g.circuit([
                  { x: x, y: y },
                  { x: x + node.width - config.padding, y: y },
                  { x: x + node.width, y: y + node.height / 2 },
                  { x: x + node.width - config.padding, y: y + node.height },
                  { x: x, y: y + node.height }
              ]).fillAndStroke();
          },
          start: function (node, x, y, config, g) {
              g.fillStyle(config.stroke);
              g.circle({ x: node.x, y: y + node.height / 2 }, node.height / 2.5).fill();
          },
          table: function (node, x, y, config, g) {
              g.rect(x, y, node.width, node.height).fillAndStroke();
          },
          transceiver: function (node, x, y, config, g) {
              g.circuit([
                  { x: x - config.padding, y: y },
                  { x: x + node.width, y: y },
                  { x: x + node.width + config.padding, y: y + node.height / 2 },
                  { x: x + node.width, y: y + node.height },
                  { x: x - config.padding, y: y + node.height },
                  { x: x, y: y + node.height / 2 }
              ]).fillAndStroke();
          },
      };
  })(nomnoml || (nomnoml = {}));
  ;
  /* parser generated by jison 0.4.18 */
  /*
    Returns a Parser object of the following structure:
  
    Parser: {
      yy: {}
    }
  
    Parser.prototype: {
      yy: {},
      trace: function(),
      symbols_: {associative list: name ==> number},
      terminals_: {associative list: number ==> name},
      productions_: [...],
      performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
      table: [...],
      defaultActions: {...},
      parseError: function(str, hash),
      parse: function(input),
  
      lexer: {
          EOF: 1,
          parseError: function(str, hash),
          setInput: function(input),
          input: function(),
          unput: function(str),
          more: function(),
          less: function(n),
          pastInput: function(),
          upcomingInput: function(),
          showPosition: function(),
          test_match: function(regex_match_array, rule_index),
          next: function(),
          lex: function(),
          begin: function(condition),
          popState: function(),
          _currentRules: function(),
          topState: function(),
          pushState: function(condition),
  
          options: {
              ranges: boolean           (optional: true ==> token location info will include a .range[] member)
              flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
              backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
          },
  
          performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
          rules: [...],
          conditions: {associative list: name ==> set},
      }
    }
  
  
    token location info (@$, _$, etc.): {
      first_line: n,
      last_line: n,
      first_column: n,
      last_column: n,
      range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
    }
  
  
    the parseError function receives a 'hash' object with these members for lexer and parser errors: {
      text:        (matched text)
      token:       (the produced terminal token, if any)
      line:        (yylineno)
    }
    while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
      loc:         (yylloc)
      expected:    (string describing the set of expected tokens)
      recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
    }
  */
  var nomnomlCoreParser = (function(){
  var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,8],$V2=[5,6,12,14],$V3=[12,14],$V4=[1,22];
  var parser = {trace: function trace () { },
  yy: {},
  symbols_: {"error":2,"root":3,"compartment":4,"EOF":5,"SEP":6,"slot":7,"IDENT":8,"class":9,"association":10,"parts":11,"|":12,"[":13,"]":14,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",6:"SEP",8:"IDENT",12:"|",13:"[",14:"]"},
  productions_: [0,[3,2],[3,3],[3,4],[3,3],[7,1],[7,1],[7,1],[4,1],[4,3],[11,1],[11,3],[11,2],[10,3],[9,3]],
  performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
  /* this == yyval */
  
  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: case 2:
   return $$[$0-1] 
  break;
  case 3: case 4:
   return $$[$0-2] 
  break;
  case 5:
  this.$ = $$[$0].trim().replace(/\\(\[|\]|\|)/g, '$'+'1');
  break;
  case 6: case 7:
  this.$ = $$[$0];
  break;
  case 8: case 10:
  this.$ = [$$[$0]];
  break;
  case 9:
  this.$ = $$[$0-2].concat($$[$0]);
  break;
  case 11:
  this.$ = $$[$0-2].concat([$$[$0]]);
  break;
  case 12:
  this.$ = $$[$0-1].concat([[]]);
  break;
  case 13:
  
             var t = $$[$0-1].trim().replace(/\\(\[|\]|\|)/g, '$'+'1').match('^(.*?)([<:o+]*[-_]/?[-_]*[:o+>]*)(.*)$');
             if (!t) {
               throw new Error('line '+_$[$0].first_line+': Classifiers must be separated by a relation or a line break')
             }
             this.$ = {assoc:t[2], start:$$[$0-2], end:$$[$0], startLabel:t[1].trim(), endLabel:t[3].trim()};
    
  break;
  case 14:
  
             var type = 'CLASS';
             var id = $$[$0-1][0][0];
             var typeMatch = $$[$0-1][0][0].match('<([a-z]*)>(.*)');
             if (typeMatch) {
                 type = typeMatch[1].toUpperCase();
                 id = typeMatch[2].trim();
             }
             $$[$0-1][0][0] = id;
             this.$ = {type:type, id:id, parts:$$[$0-1]};
    
  break;
  }
  },
  table: [{3:1,4:2,6:[1,3],7:4,8:$V0,9:6,10:7,13:$V1},{1:[3]},{5:[1,9],6:[1,10]},{4:11,7:4,8:$V0,9:6,10:7,13:$V1},o($V2,[2,8]),o($V2,[2,5]),o($V2,[2,6],{8:[1,12]}),o($V2,[2,7]),{4:14,7:4,8:$V0,9:6,10:7,11:13,13:$V1},{1:[2,1]},{5:[1,15],7:16,8:$V0,9:6,10:7,13:$V1},{5:[1,17],6:[1,18]},{9:19,13:$V1},{12:[1,21],14:[1,20]},o($V3,[2,10],{6:$V4}),{1:[2,4]},o($V2,[2,9]),{1:[2,2]},{5:[1,23],7:16,8:$V0,9:6,10:7,13:$V1},o($V2,[2,13]),o([5,6,8,12,14],[2,14]),o($V3,[2,12],{7:4,9:6,10:7,4:24,8:$V0,13:$V1}),{7:16,8:$V0,9:6,10:7,13:$V1},{1:[2,3]},o($V3,[2,11],{6:$V4})],
  defaultActions: {9:[2,1],15:[2,4],17:[2,2],23:[2,3]},
  parseError: function parseError (str, hash) {
      if (hash.recoverable) {
          this.trace(str);
      } else {
          var error = new Error(str);
          error.hash = hash;
          throw error;
      }
  },
  parse: function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
              sharedState.yy[k] = this.yy[k];
          }
      }
      lexer.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer;
      sharedState.yy.parser = this;
      if (typeof lexer.yylloc == 'undefined') {
          lexer.yylloc = {};
      }
      var yyloc = lexer.yylloc;
      lstack.push(yyloc);
      var ranges = lexer.options && lexer.options.ranges;
      if (typeof sharedState.yy.parseError === 'function') {
          this.parseError = sharedState.yy.parseError;
      } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      _token_stack:
          var lex = function () {
              var token;
              token = lexer.lex() || EOF;
              if (typeof token !== 'number') {
                  token = self.symbols_[token] || token;
              }
              return token;
          };
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == 'undefined') {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
                      if (typeof action === 'undefined' || !action.length || !action[0]) {
                  var errStr = '';
                  expected = [];
                  for (p in table[state]) {
                      if (this.terminals_[p] && p > TERROR) {
                          expected.push('\'' + this.terminals_[p] + '\'');
                      }
                  }
                  if (lexer.showPosition) {
                      errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                  } else {
                      errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                  }
                  this.parseError(errStr, {
                      text: lexer.match,
                      token: this.terminals_[symbol] || symbol,
                      line: lexer.yylineno,
                      loc: yyloc,
                      expected: expected
                  });
              }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(lexer.yytext);
              lstack.push(lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = lexer.yyleng;
                  yytext = lexer.yytext;
                  yylineno = lexer.yylineno;
                  yyloc = lexer.yylloc;
                  if (recovering > 0) {
                      recovering--;
                  }
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {
                  first_line: lstack[lstack.length - (len || 1)].first_line,
                  last_line: lstack[lstack.length - 1].last_line,
                  first_column: lstack[lstack.length - (len || 1)].first_column,
                  last_column: lstack[lstack.length - 1].last_column
              };
              if (ranges) {
                  yyval._$.range = [
                      lstack[lstack.length - (len || 1)].range[0],
                      lstack[lstack.length - 1].range[1]
                  ];
              }
              r = this.performAction.apply(yyval, [
                  yytext,
                  yyleng,
                  yylineno,
                  sharedState.yy,
                  action[1],
                  vstack,
                  lstack
              ].concat(args));
              if (typeof r !== 'undefined') {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }};
  /* generated by jison-lex 0.3.4 */
  var lexer = (function(){
  var lexer = ({
  
  EOF:1,
  
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  
  // resets the lexer, sets new input
  setInput:function (input, yy) {
          this.yy = yy || this.yy || {};
          this._input = input;
          this._more = this._backtrack = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0
          };
          if (this.options.ranges) {
              this.yylloc.range = [0,0];
          }
          this.offset = 0;
          return this;
      },
  
  // consumes and returns one char from the input
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) {
              this.yylloc.range[1]++;
          }
  
          this._input = this._input.slice(1);
          return ch;
      },
  
  // unshifts one char (or a string) into the input
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);
  
          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
  
          if (lines.length - 1) {
              this.yylineno -= lines.length - 1;
          }
          var r = this.yylloc.range;
  
          this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: lines ?
                  (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                   + oldLines[oldLines.length - lines.length].length - lines[0].length :
                this.yylloc.first_column - len
          };
  
          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          this.yyleng = this.yytext.length;
          return this;
      },
  
  // When called from action, caches matched text and appends it on next action
  more:function () {
          this._more = true;
          return this;
      },
  
  // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
  reject:function () {
          if (this.options.backtrack_lexer) {
              this._backtrack = true;
          } else {
              return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                  text: "",
                  token: null,
                  line: this.yylineno
              });
  
          }
          return this;
      },
  
  // retain first n characters of the match
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  
  // displays already matched input, i.e. for error messages
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  
  // displays upcoming input, i.e. for error messages
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
      },
  
  // displays the character position where the lexing error occurred, i.e. for error messages
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c + "^";
      },
  
  // test the lexed token: return FALSE when not a match, otherwise return token
  test_match:function(match, indexed_rule) {
          var token,
              lines,
              backup;
  
          if (this.options.backtrack_lexer) {
              // save context
              backup = {
                  yylineno: this.yylineno,
                  yylloc: {
                      first_line: this.yylloc.first_line,
                      last_line: this.last_line,
                      first_column: this.yylloc.first_column,
                      last_column: this.yylloc.last_column
                  },
                  yytext: this.yytext,
                  match: this.match,
                  matches: this.matches,
                  matched: this.matched,
                  yyleng: this.yyleng,
                  offset: this.offset,
                  _more: this._more,
                  _input: this._input,
                  yy: this.yy,
                  conditionStack: this.conditionStack.slice(0),
                  done: this.done
              };
              if (this.options.ranges) {
                  backup.yylloc.range = this.yylloc.range.slice(0);
              }
          }
  
          lines = match[0].match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno += lines.length;
          }
          this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: lines ?
                           lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                           this.yylloc.last_column + match[0].length
          };
          this.yytext += match[0];
          this.match += match[0];
          this.matches = match;
          this.yyleng = this.yytext.length;
          if (this.options.ranges) {
              this.yylloc.range = [this.offset, this.offset += this.yyleng];
          }
          this._more = false;
          this._backtrack = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
          if (this.done && this._input) {
              this.done = false;
          }
          if (token) {
              return token;
          } else if (this._backtrack) {
              // recover context
              for (var k in backup) {
                  this[k] = backup[k];
              }
              return false; // rule action called reject() implying the next rule should be tested instead.
          }
          return false;
      },
  
  // return next match in input
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) {
              this.done = true;
          }
  
          var token,
              match,
              tempMatch,
              index;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i = 0; i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (this.options.backtrack_lexer) {
                      token = this.test_match(tempMatch, rules[i]);
                      if (token !== false) {
                          return token;
                      } else if (this._backtrack) {
                          match = false;
                          continue; // rule action called reject() implying a rule MISmatch.
                      } else {
                          // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                          return false;
                      }
                  } else if (!this.options.flex) {
                      break;
                  }
              }
          }
          if (match) {
              token = this.test_match(match, rules[index]);
              if (token !== false) {
                  return token;
              }
              // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
              return false;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                  text: "",
                  token: null,
                  line: this.yylineno
              });
          }
      },
  
  // return next match that has a token
  lex:function lex () {
          var r = this.next();
          if (r) {
              return r;
          } else {
              return this.lex();
          }
      },
  
  // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
  begin:function begin (condition) {
          this.conditionStack.push(condition);
      },
  
  // pop the previously active lexer condition state off the condition stack
  popState:function popState () {
          var n = this.conditionStack.length - 1;
          if (n > 0) {
              return this.conditionStack.pop();
          } else {
              return this.conditionStack[0];
          }
      },
  
  // produce the lexer rule set which is active for the currently active lexer condition state
  _currentRules:function _currentRules () {
          if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
              return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          } else {
              return this.conditions["INITIAL"].rules;
          }
      },
  
  // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
  topState:function topState (n) {
          n = this.conditionStack.length - 1 - Math.abs(n || 0);
          if (n >= 0) {
              return this.conditionStack[n];
          } else {
              return "INITIAL";
          }
      },
  
  // alias for begin(condition)
  pushState:function pushState (condition) {
          this.begin(condition);
      },
  
  // return the number of states currently on the stack
  stateStackSize:function stateStackSize() {
          return this.conditionStack.length;
      },
  options: {},
  performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
  var YYSTATE=YY_START;
  switch($avoiding_name_collisions) {
  case 0:return 12
  break;
  case 1:return 8
  break;
  case 2:return 13
  break;
  case 3:return 14
  break;
  case 4:return 6
  break;
  case 5:return 5
  break;
  case 6:return 'INVALID'
  break;
  }
  },
  rules: [/^(?:\s*\|\s*)/,/^(?:(\\(\[|\]|\|)|[^\]\[|;\n])+)/,/^(?:\[)/,/^(?:\s*\])/,/^(?:[ ]*(;|\n)+[ ]*)/,/^(?:$)/,/^(?:.)/],
  conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6],"inclusive":true}}
  });
  return lexer;
  })();
  parser.lexer = lexer;
  function Parser () {
    this.yy = {};
  }
  Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();;
    return nomnoml;
  });

  class UML extends HTMLElement {
    
    static myself = undefined;
    constructor() {
        super();
        UML.myself = this;
        this._root = this.attachShadow({ mode: "open" });
        this._root.innerHTML = `
         <div>
           <canvas></canvas>
          </div>
          <style>
            canvas {
                border:solid red 1px;
            }
          </style>
        `;
        // see if we have any textarea
        
        setTimeout(() => {
            const txta = document.querySelector("textarea");
            if (txta) {
                txta.addEventListener("click", UML.paint);
                txta.addEventListener("keydown", UML.enterPaint);
            }
            UML.paint();
        }, 200);
        
      }

      static enterPaint(e) {
          if (e.key === 'Enter') {
              UML.paint();
          }
      }

      static paint() {
          const txta = document.querySelector("textarea");
          if (txta) {
              const canvas = UML.myself._root.querySelector("canvas");
              const uml = txta.value;
              txta.style.boxShadow = '2px 2px 2px green';
              try {
                  nomnoml.draw(canvas, uml);
              } catch (e) {
                  txta.title = e.message;
                  txta.style.boxShadow = '2px 2px 2px red';
              }
          }
      }

      static get observedAttributes() {
          return ["uml",];
      }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "uml") {
            const canvas = this._root.querySelector("canvas");
            const uml = newValue.replace(/;/g,"\n");
            nomnoml.draw(canvas,uml);
        }
    }

}

window.customElements.define("uml-diagram", UML);