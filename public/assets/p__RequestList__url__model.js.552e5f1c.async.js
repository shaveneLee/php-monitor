(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{MN55:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryByUrl=c;var n=a(r("d6i3")),u=a(r("1l/V")),s=a(r("t3Un"));function c(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/?r=api/get-list-by-url",{params:t}));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}},"S/8D":function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("p0pE")),u=a(r("d6i3")),s=r("MN55"),c={namespace:"requestByUrl",state:{},effects:{fetchBasic:u.default.mark(function e(t,r){var a,n,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,e.next=3,a(s.queryByUrl,t.param);case 3:return c=e.sent,e.next=6,n({type:"show",payload:c});case 6:case"end":return e.stop()}},e)})},reducers:{show:function(e,t){var r=t.payload;return(0,n.default)({},e,r)}}},p=c;t.default=p}}]);