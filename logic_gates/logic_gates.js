'use strict';

// Include the Module:
// const { and, or, not, nand, nor, xor, xnor, imp, eql } = require('./logic_gates.js');

// Usage:
// and(0, 0)
// and(true, false)

module.exports.and = (a, b) => a && b;
module.exports.or = (a, b) => a || b;
module.exports.not = (a) => !a;
module.exports.nand = (a, b) => !(a && b);
module.exports.nor = (a, b) => !(a || b);
module.exports.xor = (a, b) => (!(a && b) && (a || b));
module.exports.xnor = (a, b) => !(!(a && b) && (a || b));
module.exports.imp = (a, b) => !a || b;
module.exports.nimp = (a, b) => a && !b;
module.exports.eql = (a, b) => a === b;

module.exports.gates = () => {
  console.log(`
    and     or      eql
    a|b|r   a|b|r   a|b|r
    -+-+-   -+-+-   -+-+-
    0|0|0   0|0|0   0|0|1
    0|1|0   0|1|1   0|1|0
    1|0|0   1|0|1   1|0|0
    1|1|1   1|1|1   1|1|1

    nand    nor     xor
    a|b|r   a|b|r   a|b|r
    -+-+-   -+-+-   -+-+-
    0|0|1   0|0|1   0|0|0
    0|1|1   0|1|0   0|1|1
    1|0|1   1|0|0   1|0|1
    1|1|0   1|1|0   1|1|0

    xnor    imp     nimp
    a|b|r   a|b|r   a|b|r
    -+-+-   -+-+-   -+-+-
    0|0|1   0|0|1   0|0|0
    0|1|0   0|1|1   0|1|0
    1|0|0   1|0|0   1|0|1
    1|1|1   1|1|1   1|1|0

    not
    a|r
    -+-
    0|1
    1|0
  `);
};
