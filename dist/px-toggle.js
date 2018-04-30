/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';(function(){'use strict';Polymer({is:'px-toggle',behaviors:[Polymer.IronCheckedElementBehavior],properties:{size:{type:String,value:''},disabled:{type:Boolean,value:false,reflectToAttribute:true}},listeners:{'tap':'_onCheckTap'},attached:function attached(){this.setAttribute('role','switch')},_checkDisabledState:function _checkDisabledState(disabled){this.setAttribute('aria-disabled',disabled);return''+(disabled?'toggle--disabled':'')},_checkLabelSize:function _checkLabelSize(size){return'toggle__label--'+size},_checkInputSize:function _checkInputSize(size){return'toggle__input--'+size},_onCheckTap:function _onCheckTap(evt){if(!this.disabled){this.debounce('checkChanged',function(){this.checked=!this.checked;this.fire('px-toggle-checked-changed',this.checked)},50)}}})})();
//# sourceMappingURL=px-toggle.js.map
