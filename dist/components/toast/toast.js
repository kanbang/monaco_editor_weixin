"use strict";function init(){var t,e=require("../../lib/react.js"),s=require("../../cssStr/cssStr.js"),i=require("../../stores/windowStores.js"),o=e.createClass({displayName:"Toast",getInitialState:function(){return{lazyLoaded:!1,msg:"",show:!1,type:""}},_tipsMsg:function(e){var s=this;this.setState({lazyLoaded:!0,msg:e.msg,show:!0,type:e.type||"success"}),t=setTimeout(function(){s.setState({show:!1})},2e3)},componentDidMount:function(){i.on("SHOW_TIPS_MSG",this._tipsMsg)},componentWillUnmount:function(){clearTimeout(t),i.removeListener("SHOW_TIPS_MSG",this._tipsMsg)},render:function(){if(!this.state.lazyLoaded)return null;var t=this.state.show?s.displayBlock:s.displayNone;return t.zIndex=10240,e.createElement("div",{className:"toast toast-"+this.state.type,style:t},e.createElement("i",{className:"icon-info"}),this.state.msg)}});_exports=o}var _exports;init(),module.exports=_exports;