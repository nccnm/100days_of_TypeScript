"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElementManager = (function () {
    function ElementManager(selector) {
        this.elements = document.querySelectorAll(selector);
    }
    ElementManager.prototype.css = function (style, value) {
        if (value === void 0) { value = ""; }
        if (typeof style === 'string') {
            this.setStyle(style, value);
            return this;
        }
        for (var property in style) {
            this.setStyle(property, style[property]);
        }
        return this;
    };
    ElementManager.prototype.setStyle = function (property, value) {
        for (var i = 0; i < this.elements.length; i++) {
            var el = this.elements.item(i);
            el.style[property] = value;
        }
    };
    return ElementManager;
}());
exports.ElementManager = ElementManager;
function $(selector) {
    return new ElementManager(selector);
}
exports.$ = $;
