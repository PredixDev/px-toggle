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

(function() {
  'use strict';

    Polymer({
      is: 'px-toggle',
      behaviors : [Polymer.IronCheckedElementBehavior],
      /* Properties for this component */
      properties: {

          /**
           * The size of the toggle element. Can be one of
           * small, regular (default), large & huge.
           * @type {String}
           */
          size: {
            type: String,
            value: ""
          },

          /**
           * The disabled state attribute for the component.
           * @type {Boolean}
           * @default false
           */
          disabled: {
            type: Boolean,
            value: false,
            reflectToAttribute: true
          }
      },
      listeners : {
        'tap': '_onCheckTap'
      },

      attached() {
        this.setAttribute('role','switch');
      },

      _checkDisabledState(disabled){
        this.setAttribute('aria-disabled',disabled);
        return `${(disabled ? 'toggle--disabled' : '')}`;
      },

      _checkLabelSize(size){
        return `toggle__label--${size}`;
      },

      _checkInputSize(size){
        return `toggle__input--${size}`;
      },

      /**
       * Event fired when the user changes the status of the toggle.
       * `event.detail` will contain the new checked status (true or false)
       *
       * @event px-toggle-check-changed
       */

      _onCheckTap(evt) {
        if(!this.disabled) {
          this.debounce('checkChanged', function() {
            this.checked = !this.checked;
            this.fire('px-toggle-checked-changed', this.checked);
          },50);
        }
      }
    });
  }
)();
