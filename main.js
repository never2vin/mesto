(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},e=".popup_type_edit",n=".popup_type_add",r=".popup_type_update",o=".popup__form",i="Сохранение...";function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=new(function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"_request",value:function(t,e){return fetch("".concat(this._baseUrl,"/").concat(t),e).then(this._getResponseData)}},{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getAllInitialData",value:function(){return Promise.all([this.getUserInfo(),this.getCards()])}},{key:"getUserInfo",value:function(){return this._request("users/me",{headers:this._headers})}},{key:"updateUserInfo",value:function(t){var e=t.name,n=t.about;return this._request("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:n})})}},{key:"updateUserAvatar",value:function(t){var e=t.link;return this._request("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"getCards",value:function(){return this._request("cards",{headers:this._headers})}},{key:"addCard",value:function(t){var e=t.name,n=t.link;return this._request("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:n})})}},{key:"removeCard",value:function(t){return this._request("cards/".concat(t),{method:"DELETE",headers:this._headers})}},{key:"handleLikeCard",value:function(t,e){return this._request("cards/".concat(t,"/likes"),{method:e,headers:this._headers})}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"d8101b3f-044a-4c2d-92e2-9126c915abbf","Content-Type":"application/json"}});function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.data,o=e.currentUserId,i=e.handleCardClick,u=e.handleTrashIconClick,a=e.handleLikeIconClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._currentUserId=o,this._templateSelector=n,this._handleCardClick=i,this._handleTrashIconClick=u,this._handleLikeIconClick=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._imageElement.addEventListener("click",(function(){return t._handleCardClick(t._data)})),this._likeIconElement.addEventListener("click",(function(){t._handleLikeIconClick(t._data._id,t._likeIconElement.classList.contains("element__like-icon_active"))}))}},{key:"_toggleLikeIconActivity",value:function(){this._likeIconElement.classList.toggle("element__like-icon_active")}},{key:"getId",value:function(){return this._data._id}},{key:"toggleLike",value:function(t){this._toggleLikeIconActivity(),this._likeCountElement.textContent=t}},{key:"removeCardElement",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"generateCard",value:function(){var t=this;return this._cardElement=this._getTemplate(),this._imageElement=this._cardElement.querySelector(".element__image"),this._imageElement.src=this._data.link,this._imageElement.alt=this._data.name,this._cardElement.querySelector(".element__title").textContent=this._data.name,this._likeIconElement=this._cardElement.querySelector(".element__like-icon"),this._likeCountElement=this._cardElement.querySelector(".element__like-count"),this._data.likes.length>0&&(this._data.likes.some((function(e){return e._id===t._currentUserId}))&&this._toggleLikeIconActivity(),this._likeCountElement.textContent=this._data.likes.length),this._trashIconElement=this._cardElement.querySelector(".element__trash-icon"),this._data.owner._id===this._currentUserId&&(this._trashIconElement.classList.add("element__trash-icon_visible"),this._trashIconElement.addEventListener("click",this._handleTrashIconClick)),this._setEventListeners(),this._cardElement}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function m(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var h=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,"_setEventListeners",(function(){r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._toggleButtonState(),r._checkInputValidity(t)}))}))})),m(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._submitButton.classList.add(r._params.inactiveButtonClass),r._submitButton.disabled=!0):(r._submitButton.classList.remove(r._params.inactiveButtonClass),r._submitButton.disabled=!1)})),m(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),m(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t,r._params):r._showInputError(t,r._params)})),m(this,"_showInputError",(function(t){var e=r._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(r._params.inputErrorClass),e.textContent=t.validationMessage,e.classList.add(r._params.errorClass)})),m(this,"_hideInputError",(function(t){var e=r._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(r._params.inputErrorClass),e.classList.remove(r._params.errorClass),e.textContent=""})),this._params=e,this._formElement=n,this._submitButton=n.querySelector(e.submitButtonSelector),this._inputList=Array.from(n.querySelectorAll(e.inputSelector))}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var _=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,w(r.key),r)}}function E(t,e,n){return(e=w(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===S(e)?e:String(e)}var k=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),E(this,"_closePopupByClickOverlay",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popupCloseIcon=this._popup.querySelector(".popup__close-icon"),this.close=this.close.bind(this)}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._closePopupByClickOverlay),this._popupCloseIcon.addEventListener("click",this.close)}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupCaption=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._popupImage.src=n,this._popupImage.alt=e,this._popupCaption.textContent=e,P(I(u.prototype),"open",this).call(this)}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleFormSubmit=r,e._popupForm=e._popup.querySelector(".popup__form"),e._submitButton=e._popupForm.querySelector(".popup__submit"),e._submitButtonText=e._submitButton.textContent,e}return e=u,n=[{key:"_getInputValues",value:function(){var t=new FormData(this._popupForm);return Object.fromEntries(t)}},{key:"setEventListeners",value:function(){var t=this;B(x(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"setSubmitButtonText",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._submitButtonText;this._submitButton.textContent=t}},{key:"close",value:function(){this._popupForm.reset(),B(x(u.prototype),"close",this).call(this)}}],n&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function V(t,e){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},V(t,e)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupForm=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;D(N(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit()}))}},{key:"open",value:function(t){var e=t.handleFormSubmit;this._handleFormSubmit=e,D(N(u.prototype),"open",this).call(this)}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}var z=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userAvatarElement=document.querySelector(e),this._userNameElement=document.querySelector(n),this._userJobElement=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.innerText,about:this._userJobElement.innerText}}},{key:"getId",value:function(){return this._id}},{key:"setUserInfo",value:function(t){var e=t.avatar,n=t.name,r=t.about,o=t._id;this._userAvatarElement.src=e,this._userNameElement.textContent=n,this._userJobElement.textContent=r,this._id=o}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var G=document.querySelector(".profile"),K=G.querySelector(".profile__avatar"),Q=G.querySelector(".profile__edit-button"),W=G.querySelector(".profile__add-button"),X=document.querySelector(r).querySelector(o),Y=document.querySelector(e).querySelector(o),Z=document.querySelector(n).querySelector(o),tt=document.querySelector(".content__spinner"),et=new L(".popup_type_image");et.setEventListeners();var nt=new J(".popup_type_confirm");nt.setEventListeners();var rt=new U({popupSelector:e,handleFormSubmit:function(t){rt.setSubmitButtonText(i),c.updateUserInfo(t).then((function(t){ct.setUserInfo(t),rt.close()})).catch((function(t){return console.error(t,", при редактировании профиля пользователя.")})).finally((function(){return rt.setSubmitButtonText()}))}});rt.setEventListeners();var ot=new U({popupSelector:r,handleFormSubmit:function(t){ot.setSubmitButtonText(i),c.updateUserAvatar(t).then((function(t){ct.setUserInfo(t),ot.close()})).catch((function(t){return console.error(t,", при обновлении аватара пользователя.")})).finally((function(){return rt.setSubmitButtonText()}))}});ot.setEventListeners();var it=new U({popupSelector:n,handleFormSubmit:function(t){it.setSubmitButtonText(i),c.addCard(t).then((function(t){var e=ut(t);at.addItem(e),it.close()})).catch((function(t){return console.error(t,", при добавлении новой карточки.")})).finally((function(){return rt.setSubmitButtonText()}))}});function ut(t){var e=new f({data:t,currentUserId:ct.getId(),handleCardClick:function(t){et.open(t)},handleTrashIconClick:function(){nt.open({handleFormSubmit:function(){var t=e.getId();c.removeCard(t).then((function(t){e.removeCardElement(),nt.close()})).catch((function(t){return console.error(t,", при удалении карточки.")}))}})},handleLikeIconClick:function(t,n){var r=n?"DELETE":"PUT";c.handleLikeCard(t,r).then((function(t){e.toggleLike(t.likes.length)})).catch((function(t){return console.error(t,", при постановке и снятии лайка карточки.")}))}},"#element-template");return e.generateCard()}it.setEventListeners();var at=new _({renderer:function(t){var e=ut(t);at.addItem(e)}},".elements"),ct=new z(".profile__image",".profile__name",".profile__job");function lt(t){t?(tt.classList.add("spinner_visible"),G.classList.add("profile_hidden")):(tt.classList.remove("spinner_visible"),G.classList.remove("profile_hidden"))}lt(!0),c.getAllInitialData().then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ct.setUserInfo(o),at.renderItems(i.reverse())})).catch((function(t){return console.error(t,", при получении информации о пользователе и карточках.")})).finally((function(){return lt(!1)}));var st=new h(t,X),ft=new h(t,Y),pt=new h(t,Z);st.enableValidation(),ft.enableValidation(),pt.enableValidation(),K.addEventListener("click",(function(){X.reset(),st.resetValidation(),ot.open()})),Q.addEventListener("click",(function(){var t=ct.getUserInfo(),e=t.name,n=t.about;Y.name.value=e,Y.about.value=n,ft.resetValidation(),rt.open()})),W.addEventListener("click",(function(){Z.reset(),pt.resetValidation(),it.open()}))})();