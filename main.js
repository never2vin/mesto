(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},e=".popup_type_edit",n=".popup_type_add",r=".popup_type_update",o=".popup__form";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var a=new(function(){function t(e){var n=e.baseUrl,r=e.cohortId,o=e.token;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl="".concat(n,"/").concat(r),this._token=o}var e,n;return e=t,(n=[{key:"getAllInitialData",value:function(){return Promise.all([this.getUserInfo(),this.getCards()])}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"updateUserInfo",value:function(t){var e=t.name,n=t.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"updateUserAvatar",value:function(t){var e=t.link;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"addCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"removeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}},{key:"handleLikeCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:e,headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1",cohortId:"cohort-66",token:"d8101b3f-044a-4c2d-92e2-9126c915abbf"});function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var s=function(){function t(e,n){var r=e.data,o=e.currentUserId,i=e.handleCardClick,u=e.handleTrashIconClick,a=e.handleLikeIconClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._currentUserId=o,this._templateSelector=n,this._handleCardClick=i,this._handleTrashIconClick=u,this._handleLikeIconClick=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._imageElement.addEventListener("click",(function(){return t._handleCardClick(t._data)})),this._likeIconElement.addEventListener("click",(function(){t._handleLikeIconClick(t._data._id,t._likeIconElement.classList.contains("element__like-icon_active"))}))}},{key:"_toggleLikeIconActivity",value:function(){this._likeIconElement.classList.toggle("element__like-icon_active")}},{key:"getId",value:function(){return this._data._id}},{key:"toggleLike",value:function(t){this._toggleLikeIconActivity(),this._likeCountElement.textContent=t}},{key:"removeCardElement",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"generateCard",value:function(){var t=this;return this._cardElement=this._getTemplate(),this._imageElement=this._cardElement.querySelector(".element__image"),this._imageElement.src=this._data.link,this._imageElement.alt=this._data.name,this._cardElement.querySelector(".element__title").textContent=this._data.name,this._likeIconElement=this._cardElement.querySelector(".element__like-icon"),this._likeCountElement=this._cardElement.querySelector(".element__like-count"),this._data.likes.length>0&&(this._data.likes.some((function(e){return e._id===t._currentUserId}))&&this._toggleLikeIconActivity(),this._likeCountElement.textContent=this._data.likes.length),this._trashIconElement=this._cardElement.querySelector(".element__trash-icon"),this._data.owner._id===this._currentUserId&&(this._trashIconElement.classList.add("element__trash-icon_visible"),this._trashIconElement.addEventListener("click",this._handleTrashIconClick)),this._setEventListeners(),this._cardElement}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function y(t,e,n){return(e=m(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var h=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,"_setEventListeners",(function(){r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._toggleButtonState(),r._checkInputValidity(t)}))}))})),y(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._submitButton.classList.add(r._params.inactiveButtonClass),r._submitButton.disabled=!0):(r._submitButton.classList.remove(r._params.inactiveButtonClass),r._submitButton.disabled=!1)})),y(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),y(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t,r._params):r._showInputError(t,r._params)})),y(this,"_showInputError",(function(t){var e=r._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(r._params.inputErrorClass),e.textContent=t.validationMessage,e.classList.add(r._params.errorClass)})),y(this,"_hideInputError",(function(t){var e=r._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(r._params.inputErrorClass),e.classList.remove(r._params.errorClass),e.textContent=""})),this._params=e,this._formElement=n,this._submitButton=n.querySelector(e.submitButtonSelector),this._inputList=Array.from(n.querySelectorAll(e.inputSelector))}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var d=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,k(r.key),r)}}function S(t,e,n){return(e=k(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}var E=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),S(this,"_closePopupByClickOverlay",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popupCloseIcon=this._popup.querySelector(".popup__close-icon"),this.close=this.close.bind(this)}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._closePopupByClickOverlay),this._popupCloseIcon.addEventListener("click",this.close)}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupCaption=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._popupImage.src=n,this._popupImage.alt=e,this._popupCaption.textContent=e,O(C(u.prototype),"open",this).call(this)}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleFormSubmit=r,e._popupForm=e._popup.querySelector(".popup__form"),e._submitButton=e._popupForm.querySelector(".popup__submit"),e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=new FormData(this._popupForm);return Object.fromEntries(t)}},{key:"setEventListeners",value:function(){var t=this;q(R(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault();var n=t._submitButton.textContent;t._submitButton.textContent="Сохранение...",t._handleFormSubmit(t._getInputValues()).then((function(){return t.close()})).finally((function(){t._submitButton.textContent=n}))}))}},{key:"close",value:function(){this._popupForm.reset(),q(R(u.prototype),"close",this).call(this)}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},F.apply(this,arguments)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupForm=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;F(V(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit()}))}},{key:"open",value:function(t){var e=t.handleFormSubmit;this._handleFormSubmit=e,F(V(u.prototype),"open",this).call(this)}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}var H=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userAvatarElement=document.querySelector(e),this._userNameElement=document.querySelector(n),this._userJobElement=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.innerText,about:this._userJobElement.innerText}}},{key:"getId",value:function(){return this._id}},{key:"setUserInfo",value:function(t){var e=t.avatar,n=t.name,r=t.about,o=t._id;this._userAvatarElement.src=e,this._userNameElement.textContent=n,this._userJobElement.textContent=r,this._id=o}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var $=document.querySelector(".profile"),G=$.querySelector(".profile__avatar"),K=$.querySelector(".profile__edit-button"),Q=$.querySelector(".profile__add-button"),W=document.querySelector(r).querySelector(o),X=document.querySelector(e).querySelector(o),Y=document.querySelector(n).querySelector(o),Z=new I(".popup_type_image");Z.setEventListeners();var tt=new z(".popup_type_confirm");tt.setEventListeners();var et=new B({popupSelector:e,handleFormSubmit:function(t){return a.updateUserInfo(t).then((function(t){ut.setUserInfo(t)}))}});et.setEventListeners();var nt=new B({popupSelector:r,handleFormSubmit:function(t){return a.updateUserAvatar(t).then((function(t){ut.setUserInfo(t)}))}});nt.setEventListeners();var rt=new B({popupSelector:n,handleFormSubmit:function(t){return a.addCard(t).then((function(t){var e=ot(t);it.addItem(e)}))}});function ot(t){var e=new s({data:t,currentUserId:ut.getId(),handleCardClick:function(t){Z.open(t)},handleTrashIconClick:function(){tt.open({handleFormSubmit:function(){var t=e.getId();a.removeCard(t).then((function(t){e.removeCardElement(),tt.close()}))}})},handleLikeIconClick:function(t,n){var r=n?"DELETE":"PUT";a.handleLikeCard(t,r).then((function(t){e.toggleLike(t.likes.length)}))}},"#element-template");return e.generateCard()}rt.setEventListeners();var it=new d({renderer:function(t){var e=ot(t);it.addItem(e)}},".elements"),ut=new H(".profile__image",".profile__name",".profile__job");a.getAllInitialData().then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ut.setUserInfo(o),it.renderItems(i.reverse())}));var at=new h(t,W),ct=new h(t,X),lt=new h(t,Y);at.enableValidation(),ct.enableValidation(),lt.enableValidation(),G.addEventListener("click",(function(){W.reset(),at.resetValidation(),nt.open()})),K.addEventListener("click",(function(){var t=ut.getUserInfo(),e=t.name,n=t.about;X.name.value=e,X.about.value=n,ct.resetValidation(),et.open()})),Q.addEventListener("click",(function(){Y.reset(),lt.resetValidation(),rt.open()}))})();