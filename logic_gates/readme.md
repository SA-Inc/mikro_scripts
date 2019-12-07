*Include the Module:*
```const { and, or, not, nand, nor, xor, xnor, imp, eql } = require('./logic_gates.js');```

*Usage:*
```and(0, 0)```
```and(true, false)```

```
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
```
