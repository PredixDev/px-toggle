'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}(function(){'use strict';var PxToggle=function(){function PxToggle(){_classCallCheck(this,PxToggle)}_createClass(PxToggle,[{key:'beforeRegister',value:function beforeRegister(){this.is='px-toggle';this.properties=this.properties||{}}},{key:'_checkLabelSize',value:function _checkLabelSize(size){return'toggle__label--'+size}},{key:'_checkInputSize',value:function _checkInputSize(size){return'toggle__input--'+size}},{key:'_onCheckTap',value:function _onCheckTap(evt){this.checked=!this.checked}},{key:'behaviors',get:function get(){return this._behaviors||(this._behaviors=[Polymer.IronCheckedElementBehavior])},set:function set(value){this._behaviors=value}},{key:'properties',set:function set(value){this._properties=value},get:function get(){return{size:{type:String,value:'small'}}}},{key:'listeners',get:function get(){return{'tap':'_onCheckTap'}}}]);return PxToggle}();Polymer(PxToggle)})();
//# sourceMappingURL=px-toggle.js.map
