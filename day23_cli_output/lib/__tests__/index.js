"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
test('Kolor test', function () {
    var kolor = new _1.default();
    var expected = '\u001B[4m\u001B[46mhello world!\u001B[49m\u001B[24m';
    var result = kolor.bgCyan.underline.black.text("hello world!");
    expect(result).toBe(expected);
});
