/*
    Relative paths assume component is being run from inside an app or another component, where dependencies are flat
    siblings. When this component is run from its own repo (e.g. tests, examples), we assume the server is started with
    'gulp serve' (or similar server setup) to enable correct finding of bower dependencies for local runs.
*/
/**

### Usage

    <px-toggle size="large" checked></px-toggle>

@element px-toggle
@blurb Toggle is a simple on/off switch component. Use it to create simple UI elements that enable and disable things.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-label/iron-label.js';
import { IronCheckedElementBehavior } from '@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js';
import './css/px-toggle-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-toggle-styles"></style>
    <input type="checkbox" checked="[[checked]]" aria-checked="[[checked]]" id="checkbox" disabled\$="{{disabled}}" class\$="toggle__input {{_checkInputSize(size)}}">
    <iron-label for="checkbox" class\$="toggle__label {{_checkLabelSize(size)}} {{_checkDisabledState(disabled)}}"></iron-label>
`,

  is:'px-toggle',
  behaviors:[IronCheckedElementBehavior],
  properties:{size:{type:String,value:''},disabled:{type:Boolean,value:false,reflectToAttribute:true}},
  listeners:{'tap':'_onCheckTap'},
  attached:function attached(){this.setAttribute('role','switch')},
  _checkDisabledState:function _checkDisabledState(disabled){this.setAttribute('aria-disabled',disabled);return''+(disabled?'toggle--disabled':'')},
  _checkLabelSize:function _checkLabelSize(size){return'toggle__label--'+size},
  _checkInputSize:function _checkInputSize(size){return'toggle__input--'+size},
  _onCheckTap:function _onCheckTap(evt){if(!this.disabled){this.debounce('checkChanged',function(){this.checked=!this.checked;this.fire('px-toggle-checked-changed',this.checked)},50)}}
})
