(window["webpackJsonppractice-app"]=window["webpackJsonppractice-app"]||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Frontend_calculator_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Frontend_calculator_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Frontend_calculator_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Frontend_calculator_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),C_Frontend_calculator_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(18),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_component_ResultComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_component_KeyPadComponent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),App=function(_Component){function App(){var _this;return Object(C_Frontend_calculator_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(C_Frontend_calculator_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Frontend_calculator_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this)),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){var checkResult="";checkResult=_this.state.result.includes("--")?_this.state.result.replace("--","+"):_this.state.result;try{_this.setState({result:(eval(checkResult)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(C_Frontend_calculator_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(C_Frontend_calculator_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"card "},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,"Calculator"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_ResultComponent__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_KeyPadComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.onClick})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(4),c=_(3),o=_(5),l=_(0),s=_.n(l),u=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props.result;return s.a.createElement("div",{className:"result bg-dark text-white"},s.a.createElement("p",null,e))}}]),t}(l.Component);t.a=u},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(4),c=_(3),o=_(5),l=_(0),s=_.n(l),u=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"button"},s.a.createElement("button",{className:"btn btn-primary c ",name:"(",onClick:function(t){return e.props.onClick(t.target.name)}},"("),s.a.createElement("button",{className:"btn btn-primary c",name:"CE",onClick:function(t){return e.props.onClick(t.target.name)}},"CE"),s.a.createElement("button",{className:"btn btn-primary c",name:")",onClick:function(t){return e.props.onClick(t.target.name)}},")"),s.a.createElement("button",{className:"btn btn-danger c",name:"C",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),s.a.createElement("br",null),s.a.createElement("button",{name:"1",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),s.a.createElement("button",{name:"2",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),s.a.createElement("button",{name:"3",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),s.a.createElement("button",{name:"+",className:"a",onClick:function(t){return e.props.onClick(t.target.name)}},"+"),s.a.createElement("br",null),s.a.createElement("button",{name:"4",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),s.a.createElement("button",{name:"5",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),s.a.createElement("button",{name:"6",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),s.a.createElement("button",{name:"-",className:"a",onClick:function(t){return e.props.onClick(t.target.name)}},"-"),s.a.createElement("br",null),s.a.createElement("button",{name:"7",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),s.a.createElement("button",{name:"8",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),s.a.createElement("button",{name:"9",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),s.a.createElement("button",{name:"*",className:"a",onClick:function(t){return e.props.onClick(t.target.name)}},"x"),s.a.createElement("br",null),s.a.createElement("button",{name:"0",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),s.a.createElement("button",{name:".",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"."),s.a.createElement("button",{name:"=",className:"c",onClick:function(t){return e.props.onClick(t.target.name)}},"="),s.a.createElement("button",{name:"/",className:"a",onClick:function(t){return e.props.onClick(t.target.name)}},"\xf7"),s.a.createElement("br",null))}}]),t}(l.Component);t.a=u},function(e,t,_){e.exports=_(19)},,,,,function(e,t,_){},,function(e,t,_){},function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),r=_(7),c=_.n(r),o=(_(16),_(17),_(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(o.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.1046859c.chunk.js.map