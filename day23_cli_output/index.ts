const styles = {
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

interface Options {
  level: number;
}

export default class Kolor {
  private _options: Options = { level: 0 };
  private _styles: number[][] = [];

  constructor(options?: Options) {
    this._options = options || this._options;
  }

  get reset() {
    this._styles.push(styles.modifier.reset);

    return this;
  }

  // 21 isn't widely supported and 22 does the same thing
  get bold() {
    this._styles.push(styles.modifier.bold);

    return this;
  }

  get dim() {
    this._styles.push(styles.modifier.dim);

    return this;
  }

  get italic() {
    this._styles.push(styles.modifier.italic);

    return this;
  }

  get underline() {
    this._styles.push(styles.modifier.underline);

    return this;
  }

  get inverse() {
    this._styles.push(styles.modifier.inverse);

    return this;
  }

  get hidden() {
    this._styles.push(styles.modifier.hidden);

    return this;
  }

  get strikethrough() {
    this._styles.push(styles.modifier.strikethrough);

    return this;
  }

  get black() {
    this._styles.push(styles.color.black);

    return this;
  }

  get red() {
    this._styles.push(styles.color.red);

    return this;
  }

  get green() {
    this._styles.push(styles.color.green);

    return this;
  }

  get yellow() {
    this._styles.push(styles.color.yellow);

    return this;
  }

  get blue() {
    this._styles.push(styles.color.blue);

    return this;
  }

  get magenta() {
    this._styles.push(styles.color.magenta);

    return this;
  }

  get cyan() {
    this._styles.push(styles.color.cyan);

    return this;
  }

  get white() {
    this._styles.push(styles.color.white);

    return this;
  }

  get gray() {
    this._styles.push(styles.color.gray);

    return this;
  }

  // Bright color
  get redBright() {
    this._styles.push(styles.color.redBright);

    return this;
  }

  get greenBright() {
    this._styles.push(styles.color.greenBright);

    return this;
  }

  get yellowBright() {
    this._styles.push(styles.color.yellowBright);

    return this;
  }

  get blueBright() {
    this._styles.push(styles.color.blueBright);

    return this;
  }

  get magentaBright() {
    this._styles.push(styles.color.magentaBright);

    return this;
  }

  get cyanBright() {
    this._styles.push(styles.color.cyanBright);

    return this;
  }

  get whiteBright() {
    this._styles.push(styles.color.whiteBright);

    return this;
  }

  get bgBlack() {
    this._styles.push(styles.bgColor.bgBlack);

    return this;
  }

  get bgRed() {
    this._styles.push(styles.bgColor.bgRed);

    return this;
  }

  get bgGreen() {
    this._styles.push(styles.bgColor.bgGreen);

    return this;
  }

  get bgYellow() {
    this._styles.push(styles.bgColor.bgYellow);

    return this;
  }

  get bgBlue() {
    this._styles.push(styles.bgColor.bgBlue);

    return this;
  }

  get bgMagenta() {
    this._styles.push(styles.bgColor.bgMagenta);

    return this;
  }

  get bgCyan() {
    this._styles.push(styles.bgColor.bgCyan);

    return this;
  }

  get bgWhite() {
    this._styles.push(styles.bgColor.bgWhite);

    return this;
  }

  // Bright color
  get gBlackBright() {
    this._styles.push(styles.bgColor.bgBlackBright);

    return this;
  }

  get bgRedBright() {
    this._styles.push(styles.bgColor.bgRedBright);

    return this;
  }

  get bgGreenBright() {
    this._styles.push(styles.bgColor.bgGreenBright);

    return this;
  }

  get bgYellowBright() {
    this._styles.push(styles.bgColor.bgYellowBright);

    return this;
  }

  get bgBlueBright() {
    this._styles.push(styles.bgColor.bgBlueBright);

    return this;
  }

  get bgCyanBright() {
    this._styles.push(styles.bgColor.bgCyanBright);

    return this;
  }

  get bgWhiteBright() {
    this._styles.push(styles.bgColor.bgWhiteBright);

    return this;
  }

  text(text: string) {
    let _text = text;

    if (this._styles.length === 0) {
      return _text;
    }

    _text = this._styles.reduce(function(text: string, style: number[]) {
      return `\u001B[${style[0]}m${text}\u001B[${style[1]}m`;
    }, text);

    this._styles = [];

    return _text;
  }
}