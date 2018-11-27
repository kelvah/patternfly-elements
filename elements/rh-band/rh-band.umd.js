!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../rhelement/rhelement.umd")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd"],e):r.RhBand=e(r.RHElement)}(this,function(n){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n;var t=function(){function t(r,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}return function(r,e,n){return e&&t(r.prototype,e),n&&t(r,n),r}}(),r=function(r){function e(){return function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?r:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,e))}return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}(e,n),t(e,[{key:"html",get:function(){return'\n<style>\n:host {\n  --rh-band--paddingTop:                      calc(var(--rh-theme--container-spacer, 1rem) * 4);\n  --rh-band--paddingRight:                    var(--rh-theme--container-spacer, 1rem);\n  --rh-band--paddingBottom:                   calc(var(--rh-theme--container-spacer, 1rem) * 4);\n  --rh-band--paddingLeft:                     var(--rh-theme--container-spacer, 1rem);\n  --rh-band--backgroundColor:                 var(--rh-theme--color--surface--base, #dfdfdf);\n  --rh-band--backgroundPositionX:             center;\n  --rh-band--backgroundPositionY:             center;\n  --rh-band--borderColor:                     transparent;\n  --rh-band--borderTopWidth:                  var(--rh-theme--surface--border-width, 1px);\n  --rh-band--borderBottomWidth:               var(--rh-theme--surface--border-width, 1px);\n  --rh-band--borderStyle:                     var(--rh-theme--surface--border-style, solid);\n  --rh-band_header--layout:                   1fr;\n  --rh-band_body--layout:                     1fr;\n  --rh-band_footer--layout:                   1fr;\n  --rh-broadcasted--color--text:              var(--rh-theme--color--surface--base--text, #333);\n  --rh-broadcasted--color--ui-link:           var(--rh-theme--color--surface--base--link, #00538c);\n  --rh-broadcasted--color--ui-link--visited:  var(--rh-theme--color--surface--base--link--visited, #7551a6);\n  --rh-broadcasted--color--ui-link--hover:    var(--rh-theme--color--surface--base--link--hover, #00305b);\n  --rh-broadcasted--color--ui-link--focus:    var(--rh-theme--color--surface--base--link--focus, #00305b);\n  --rh-band--width:                           auto; }\n  @media screen and (min-width: 576px) {\n    :host {\n      --rh-band--width: calc(576px - calc(var(--rh-band--paddingRight) * 2)); } }\n  @media screen and (min-width: 768px) {\n    :host {\n      --rh-band--width: calc(768px - calc(var(--rh-band--paddingRight) * 2)); } }\n  @media screen and (min-width: 992px) {\n    :host {\n      --rh-band--width: calc(992px - calc(var(--rh-band--paddingRight) * 2)); } }\n  @media screen and (min-width: 1200px) {\n    :host {\n      --rh-band--width: calc(1200px - calc(var(--rh-band--paddingRight) * 2)); } }\n  @media print {\n    :host {\n      --rh-band--paddingTop:    calc(var(--rh-theme--container-spacer, 1rem) * 2);\n      --rh-band--paddingBottom: calc(var(--rh-theme--container-spacer, 1rem) * 2); } }\n\n:host([color="dark"]) {\n  --rh-band--backgroundColor:                  var(--rh-theme--color--surface--darker, #464646);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--darker--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--darker--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--darker--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--darker--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--darker--link--focus, #cce6ff); }\n\n:host([color="darkest"]) {\n  --rh-band--backgroundColor:                  var(--rh-theme--color--surface--darkest, #131313);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--darkest--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--darkest--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--darkest--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--darkest--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--darkest--link--focus, #cce6ff); }\n\n:host([color="light"]) {\n  --rh-band--backgroundColor:                  var(--rh-theme--color--surface--lighter, #ececec);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--lighter--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--lighter--link, #06c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--lighter--link--visited, rebeccapurple);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--lighter--link--hover, #003366);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--lighter--link--focus, #003366); }\n\n:host([color="lightest"]) {\n  --rh-band--backgroundColor:                  var(--rh-theme--color--surface--lightest, #fff);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--lightest--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--lightest--link, #06c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--lightest--link--visited, rebeccapurple);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--lightest--link--hover, #003366);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--lightest--link--focus, #003366); }\n\n:host([color="complement"]) {\n  --rh-band--backgroundColor:                       var(--rh-theme--color--surface--complement, #0477a4);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--complement--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--complement--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--complement--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--complement--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--complement--link--focus, #cce6ff); }\n\n:host([color="accent"]) {\n  --rh-band--backgroundColor:                       var(--rh-theme--color--surface--accent, #fe460d);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--accent--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--accent--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--accent--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--accent--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--accent--link--focus, #cce6ff); }\n\n:host([size="small"]) {\n  --rh-band--paddingTop:        var(--rh-theme--container-spacer, 1rem);\n  --rh-band--paddingBottom:     var(--rh-theme--container-spacer, 1rem); }\n\na {\n  color: var(--rh-broadcasted--color--ui-link);\n  text-transform: var(--rh-broadcasted--ui-link--textTransform); }\n  a:visited {\n    color: var(--rh-broadcasted--color--ui-link--visited); }\n  a:hover {\n    color: var(--rh-broadcasted--color--ui-link--hover); }\n  a:focus {\n    color: var(--rh-broadcasted--color--ui-link--focus); }\n\n.rh-band__wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  padding-top: var(--rh-band--paddingTop);\n  padding-bottom: var(--rh-band--paddingBottom);\n  border-top-width: var(--rh-band--borderTopWidth);\n  border-bottom-width: var(--rh-band--borderBottomWidth);\n  border-style: var(--rh-band--borderStyle);\n  border-color: var(--rh-band--borderColor);\n  background-color: var(--rh-band--backgroundColor);\n  background-position-x: var(--rh-band--backgroundPositionX);\n  background-position-y: var(--rh-band--backgroundPositionY);\n  color: var(--rh-broadcasted--color--text); }\n  @media print {\n    .rh-band__wrapper {\n      background-color: white !important;\n      background-image: none !important;\n      box-shadow: none !important; } }\n\n.rh-band__container {\n  padding-top: 0;\n  padding-right: var(--rh-band--paddingRight);\n  padding-bottom: 0;\n  padding-left: var(--rh-band--paddingLeft);\n  width: var(--rh-band--width);\n  margin: 0 auto; }\n\n.rh-band__container, .rh-band__content {\n  display: flex;\n  flex-direction: column; }\n  @media (min-width: 768px) {\n    .rh-band__container, .rh-band__content {\n      flex-direction: row; } }\n  .rh-band__container > *, .rh-band__content > * {\n    flex-grow: 1; }\n    @media (min-width: 588px) {\n      .rh-band__container > *, .rh-band__content > * {\n        float: left;\n        width: 100%; } }\n    @media (max-width: 767px) {\n      .rh-band__container > *, .rh-band__content > * {\n        margin-bottom: 2rem;\n        clear: both; } }\n    @media (min-width: 768px) {\n      .rh-band__container > *:first-child, .rh-band__content > *:first-child {\n        width: calc(100% - 250px + 2rem);\n        margin-right: 2.5702331142%; } }\n    @media (min-width: 992px) {\n      .rh-band__container > *:first-child, .rh-band__content > *:first-child {\n        width: calc(100% - 300px + 2rem); } }\n    .rh-band__container > *:last-child, .rh-band__content > *:last-child {\n      margin-bottom: 0; }\n    @media (min-width: 588px) {\n      [aside-position~="left"] .rh-band__container > *, [aside-position~="left"] .rh-band__content > * {\n        float: right; } }\n    @media (min-width: 768px) {\n      [aside-position~="left"] .rh-band__container > *:first-child, [aside-position~="left"] .rh-band__content > *:first-child {\n        margin-left: 2.5702331142%; } }\n    [aside-position~="left"] .rh-band__container > *:last-child, [aside-position~="left"] .rh-band__content > *:last-child {\n      order: -1; }\n\n.rh-band__main > *:not(:last-child) {\n  margin-bottom: var(--rh-theme--container-spacer, 1rem); }\n\n.rh-band__header, .rh-band__body, .rh-band__footer, .rh-band__aside {\n  display: block; }\n  .rh-band__header::slotted(*), .rh-band__body::slotted(*), .rh-band__footer::slotted(*), .rh-band__aside::slotted(*) {\n    margin-top: 0; }\n\n.rh-band__header::slotted([typography="title"]) {\n  font-size: var(--rh-theme--font-size--heading--gamma, 21px);\n  font-weight: 600;\n  line-height: 1;\n  color: var(--rh-theme--color--ui-accent, #fe460d);\n  text-transform: uppercase;\n  margin-top: 0; }\n  .rh-band__header::slotted([typography="title"]):not(:last-child) {\n    margin-bottom: .65em; }\n\n.rh-band__header::slotted([typography="heading"]) {\n  font-size: var(--rh-theme--font-size--heading--alpha, 32px);\n  font-weight: 600;\n  line-height: 1;\n  color: var(--rh-theme--color--heading, );\n  margin-top: 0; }\n  .rh-band__header::slotted([typography="heading"]):not(:last-child) {\n    margin-bottom: .2em; }\n\n.rh-band__header::slotted([typography="summary"]) {\n  font-size: var(--rh-theme--font-size--heading--delta, 18px);\n  font-weight: 300;\n  color: var(--rh-theme--color--text, #333);\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.rh-band__body {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: var(--rh-theme--container-spacer, 1rem); }\n  @media screen and (min-width: 768px) {\n    .rh-band__body {\n      grid-template-columns: var(--rh-band_body--layout); } }\n\n.rh-band__footer {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: var(--rh-theme--container-spacer, 1rem); }\n  @media screen and (min-width: 768px) {\n    .rh-band__footer {\n      grid-template-columns: var(--rh-band_body--layout); } }\n\n.rh-band__aside {\n  max-width: 250px; }\n  @media (min-width: 992px) {\n    .rh-band__aside {\n      width: 300px; } }\n</style>\n<div class="rh-band__wrapper">\n  <div class="rh-band__container">\n    '+(this.has_slot("aside")&&this.asidePosition.includes("full")&&this.asidePosition.includes("top")?'<slot class="rh-band__aside" name="aside"></slot>':"")+'\n    <section class="rh-band__main">\n      '+(this.has_slot("header")&&!(this.has_slot("header_title")||this.has_slot("header_heading")||this.has_slot("header_summary"))?'<slot class="rh-band__header" name="header"></slot>':"")+'\n      <div class="rh-band__content">\n        '+(this.has_slot("aside")&&!this.asidePosition.includes("full")&&this.asidePosition.includes("top")?'<slot class="rh-band__aside" name="aside"></slot>':"")+'\n        <slot class="rh-band__body"></slot>\n        '+(!this.has_slot("aside")||this.asidePosition.includes("full")||this.asidePosition.includes("top")?"":'<slot class="rh-band__aside" name="aside"></slot>')+"\n      </div>\n      "+(this.has_slot("footer")?'<slot class="rh-band__footer" name="footer"></slot>':"")+"\n    </section>\n    "+(this.has_slot("aside")&&this.asidePosition.includes("full")&&!this.asidePosition.includes("top")?'<slot class="rh-band__aside" name="aside"></slot>':"")+"\n  </div>\n</div>"}},{key:"templateUrl",get:function(){return"rh-band.html"}},{key:"styleUrl",get:function(){return"rh-band.scss"}},{key:"asidePosition",get:function(){return this.getAttribute("aside-position").split(" ")}}],[{key:"tag",get:function(){return"rh-band"}},{key:"observedAttributes",get:function(){return["img-src"]}}]),t(e,[{key:"connectedCallback",value:function(){(function r(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:r(a,n,t)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(t):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this._queue.push(this._pushAttributeTo(".rh-band__wrapper","aside-position"))}},{key:"attributeChangedCallback",value:function(r,e,n){var t=n;t&&(this.shadowRoot.querySelector(".rh-band__wrapper").style.backgroundImage="url('"+t+"')")}}]),e}();return n.create(r,{type:"container"}),r});
//# sourceMappingURL=rh-band.umd.js.map
