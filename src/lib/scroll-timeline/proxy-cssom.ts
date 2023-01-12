// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export function installCSSOM(window: Window) {
  // Object for storing details associated with an object which are to be kept
  // private. This approach allows the constructed objects to more closely
  // resemble their native counterparts when inspected.
  const privateDetails = new WeakMap();

  function displayUnit(unit) {
    switch(unit) {
      case 'percent':
        return '%';
      case 'number':
        return '';
      default:
        return unit.toLowerCase();
    }
  }

  function toCssUnitValue(v) {
    if (typeof v === 'number')
      return new CSSUnitValue(v, 'number');
    return v;
  }

  function toCssNumericArray(values) {
    const result = [];
    for (let i = 0; i < values.length; i++) {
      result[i] = toCssUnitValue(values[i]);
    }
    return result;
  }

  class MathOperation {
    constructor(values, operator, opt_name, opt_delimiter) {
      privateDetails.set(this, {
        values: toCssNumericArray(values),
        operator: operator,
        name: opt_name || operator,
        delimiter: opt_delimiter || ', '
      });
    }

    get operator() {
      return privateDetails.get(this).operator;
    }

    get values() {
      return  privateDetails.get(this).values;
    }

    toString() {
      const details = privateDetails.get(this);
      return `${details.name}(${details.values.join(details.delimiter)})`;
    }
  }

  const cssOMTypes = {
    'CSSUnitValue': class {
      constructor(value, unit) {
        privateDetails.set(this, {
          value: value,
          unit: unit
        });
      }

      get value() {
        return privateDetails.get(this).value;
      }

      set value(value) {
        privateDetails.get(this).value = value;
      }

      get unit() {
        return  privateDetails.get(this).unit;
      }

      toString() {
        const details = privateDetails.get(this);
        return `${details.value}${displayUnit(details.unit)}`;
      }
    },

    'CSSKeywordValue': class {
      constructor(value) {
        this.value = value;
      }

      value: string;

      toString() {
        return this.value.toString();
      }
    },

    'CSSMathSum': class extends MathOperation  {
      constructor(values) {
        super(arguments, 'sum', 'calc', ' + ');
      }
    },

    'CSSMathProduct': class extends MathOperation  {
      constructor(values) {
        super(arguments, 'product', 'calc', ' * ');
      }
    },

    'CSSMathNegate': class extends MathOperation {
      constructor(values) {
        super([arguments[0]], 'negate', '-');
      }
    },

    'CSSMathNegate': class extends MathOperation {
      constructor(values) {
        super([1, arguments[0]], 'invert', 'calc', ' / ');
      }
    },

    'CSSMathMax': class extends MathOperation {
      constructor() {
        super(arguments, 'max');
      }
    },

    'CSSMathMin': class extends MathOperation  {
      constructor() {
        super(arguments, 'min');
      }
    }
  };

  if (!window.CSS) {
    if (!Reflect.defineProperty(window, 'CSS', { value: {} }))
      throw Error(`Error installing CSSOM support`);
  }

  if (!window.CSSUnitValue) {
    window.CSSUnitValue = {};
    window.CSSUnitValue.number = (value: number) => new CSSUnitValue(value, 'number');
    window.CSSUnitValue.percent = (value: number) => new CSSUnitValue(value, 'percent');
    window.CSSUnitValue.em = (value: number) => new CSSUnitValue(value, 'em');
    window.CSSUnitValue.ex = (value: number) => new CSSUnitValue(value, 'ex');
    window.CSSUnitValue.px = (value: number) => new CSSUnitValue(value, 'px');
    window.CSSUnitValue.cm = (value: number) => new CSSUnitValue(value, 'cm');
    window.CSSUnitValue.mm = (value: number) => new CSSUnitValue(value, 'mm');
    window.CSSUnitValue.in = (value: number) => new CSSUnitValue(value, 'in');
    window.CSSUnitValue.pt = (value: number) => new CSSUnitValue(value, 'pt');
    window.CSSUnitValue.pc = (value: number) => new CSSUnitValue(value, 'pc');
    window.CSSUnitValue.Q = (value: number) => new CSSUnitValue(value, 'Q');
    window.CSSUnitValue.vw = (value: number) => new CSSUnitValue(value, 'vw');
    window.CSSUnitValue.vh = (value: number) => new CSSUnitValue(value, 'vh');
    window.CSSUnitValue.vmin = (value: number) => new CSSUnitValue(value, 'vmin');
    window.CSSUnitValue.vmax = (value: number) => new CSSUnitValue(value, 'vmax');
    window.CSSUnitValue.rems = (value: number) => new CSSUnitValue(value, 'rems');
    window.CSSUnitValue.ch = (value: number) => new CSSUnitValue(value, 'ch');
    window.CSSUnitValue.deg = (value: number) => new CSSUnitValue(value, 'deg');
    window.CSSUnitValue.rad = (value: number) => new CSSUnitValue(value, 'rad');
    window.CSSUnitValue.grad = (value: number) => new CSSUnitValue(value, 'grad');
    window.CSSUnitValue.turn = (value: number) => new CSSUnitValue(value, 'turn');
    window.CSSUnitValue.ms = (value: number) => new CSSUnitValue(value, 'ms');
    window.CSSUnitValue.s = (value: number) => new CSSUnitValue(value, 's');
    window.CSSUnitValue.Hz = (value: number) => new CSSUnitValue(value, 'Hz');
    window.CSSUnitValue.kHz = (value: number) => new CSSUnitValue(value, 'kHz');
    window.CSSUnitValue.dppx = (value: number) => new CSSUnitValue(value, 'dppx');
    window.CSSUnitValue.dpi = (value: number) => new CSSUnitValue(value, 'dpi');
    window.CSSUnitValue.dpcm = (value: number) => new CSSUnitValue(value, 'dpcm');
    window.CSSUnitValue.fr = (value: number) => new CSSUnitValue(value, 'fr');
  }

  for (const type in cssOMTypes) {
    if (type in window)
      continue;

    window[type] = cssOMTypes[type]
    // if (!Reflect.defineProperty(window, type, { value: cssOMTypes[type] }))
    //   throw Error(`Error installing CSSOM support for ${type}`);
  }
}
  
