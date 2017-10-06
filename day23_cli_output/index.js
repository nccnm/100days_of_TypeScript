"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = {
    modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
    },
    color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        // Bright color
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
    },
    bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
    }
};
var Kolor = /** @class */ (function () {
    function Kolor(options) {
        this._options = { level: 0 };
        this._styles = [];
        this._options = options || this._options;
    }
    Object.defineProperty(Kolor.prototype, "reset", {
        get: function () {
            this._styles.push(styles.modifier.reset);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bold", {
        // 21 isn't widely supported and 22 does the same thing
        get: function () {
            this._styles.push(styles.modifier.bold);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "dim", {
        get: function () {
            this._styles.push(styles.modifier.dim);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "italic", {
        get: function () {
            this._styles.push(styles.modifier.italic);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "underline", {
        get: function () {
            this._styles.push(styles.modifier.underline);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "inverse", {
        get: function () {
            this._styles.push(styles.modifier.inverse);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "hidden", {
        get: function () {
            this._styles.push(styles.modifier.hidden);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "strikethrough", {
        get: function () {
            this._styles.push(styles.modifier.strikethrough);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "black", {
        get: function () {
            this._styles.push(styles.color.black);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "red", {
        get: function () {
            this._styles.push(styles.color.red);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "green", {
        get: function () {
            this._styles.push(styles.color.green);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "yellow", {
        get: function () {
            this._styles.push(styles.color.yellow);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "blue", {
        get: function () {
            this._styles.push(styles.color.blue);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "magenta", {
        get: function () {
            this._styles.push(styles.color.magenta);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "cyan", {
        get: function () {
            this._styles.push(styles.color.cyan);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "white", {
        get: function () {
            this._styles.push(styles.color.white);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "gray", {
        get: function () {
            this._styles.push(styles.color.gray);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "redBright", {
        // Bright color
        get: function () {
            this._styles.push(styles.color.redBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "greenBright", {
        get: function () {
            this._styles.push(styles.color.greenBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "yellowBright", {
        get: function () {
            this._styles.push(styles.color.yellowBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "blueBright", {
        get: function () {
            this._styles.push(styles.color.blueBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "magentaBright", {
        get: function () {
            this._styles.push(styles.color.magentaBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "cyanBright", {
        get: function () {
            this._styles.push(styles.color.cyanBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "whiteBright", {
        get: function () {
            this._styles.push(styles.color.whiteBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgBlack", {
        get: function () {
            this._styles.push(styles.bgColor.bgBlack);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgRed", {
        get: function () {
            this._styles.push(styles.bgColor.bgRed);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgGreen", {
        get: function () {
            this._styles.push(styles.bgColor.bgGreen);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgYellow", {
        get: function () {
            this._styles.push(styles.bgColor.bgYellow);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgBlue", {
        get: function () {
            this._styles.push(styles.bgColor.bgBlue);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgMagenta", {
        get: function () {
            this._styles.push(styles.bgColor.bgMagenta);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgCyan", {
        get: function () {
            this._styles.push(styles.bgColor.bgCyan);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgWhite", {
        get: function () {
            this._styles.push(styles.bgColor.bgWhite);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "gBlackBright", {
        // Bright color
        get: function () {
            this._styles.push(styles.bgColor.bgBlackBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgRedBright", {
        get: function () {
            this._styles.push(styles.bgColor.bgRedBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgGreenBright", {
        get: function () {
            this._styles.push(styles.bgColor.bgGreenBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgYellowBright", {
        get: function () {
            this._styles.push(styles.bgColor.bgYellowBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgBlueBright", {
        get: function () {
            this._styles.push(styles.bgColor.bgBlueBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgCyanBright", {
        get: function () {
            this._styles.push(styles.bgColor.bgCyanBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kolor.prototype, "bgWhiteBright", {
        get: function () {
            this._styles.push(styles.bgColor.bgWhiteBright);
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Kolor.prototype.text = function (text) {
        var _text = text;
        if (this._styles.length === 0) {
            return _text;
        }
        _text = this._styles.reduce(function (text, style) {
            return "\u001B[" + style[0] + "m" + text + "\u001B[" + style[1] + "m";
        }, text);
        this._styles = [];
        return _text;
    };
    return Kolor;
}());
exports.default = Kolor;
