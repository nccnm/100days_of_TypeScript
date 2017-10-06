"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
test('Kolor test', function () {
    var kolor = new _1.default();
    var expected = 'hello world!';
    var result = kolor.bgCyan.underline.black.text("hello world!");
    expect(result).toBeEquals(expected);
});
