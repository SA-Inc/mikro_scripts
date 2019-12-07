'use strict';

/*
1. text to array (split text to array)
2. filter array (remove required elements)
3. reduce array (count elements to new object)
4. object to 2d array
5. sort 2d array
*/

// Test Set.
let asciiSet = ` !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`;

let text = `Linux is a free open source operating system (OS) based on UNIX that was created in 1991 by Linus Torvalds. Users can modify and create variations of the source code, known as distributions, for computers and other devices. The most common use is as a server, but Linux is also used in desktop computers, smartphones, e-book readers and gaming consoles, etc.

A distribution of Linux includes the kernel (the central OS component and the bridge between a software application and its data), system utilities, programs and tools for downloading, installing and uninstalling OS updates.`

const getTextStat = (text, exception) => Object.entries(text.split('').filter((elem) => ![...exception].includes(elem)).reduce((acc, cur) => {acc[cur] = acc[cur] ? acc[cur] + 1 : 1; return acc;}, {})).sort((a, b) => b[1] - a[1]);

console.log(getTextStat(text, '\n .,1234567890()'));

// module.exports.getTextStat = getTextStat;
