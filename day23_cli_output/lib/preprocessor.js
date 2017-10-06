"use strict";
// Copyright 2004-present Facebook. All Rights Reserved.
var tsc = require("typescript");
var tsConfig = require("./tsconfig");
module.exports = {
    process: function (src, path) {
        if (path.endsWith(".ts") || path.endsWith(".tsx")) {
            return tsc.transpile(src, tsConfig.compilerOptions, path, []);
        }
        return src;
    }
};
