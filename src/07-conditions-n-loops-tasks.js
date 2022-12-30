/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 1) return n;
  return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let acc = 0;
  for (let i = n1; i <= n2; i += 1) {
    acc += i;
  }
  return acc;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  const biggestNumber = Math.max(a, b, c);
  return (a + b + c - biggestNumber) > biggestNumber;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  if (rect1.top + rect1.height > rect2.top + rect2.height) {
    if (rect1.left + rect1.width > rect2.left + rect2.width) {
      return ((rect2.top + rect2.height > rect1.top) && (rect2.left + rect2.width > rect1.left));
    }
    return ((rect2.top + rect2.height > rect1.top) && (rect1.left + rect1.width > rect2.left));
  }
  if (rect2.left + rect2.width > rect1.left + rect1.width) {
    return ((rect1.top + rect1.height > rect2.top) && (rect1.left + rect1.width > rect2.left));
  }
  return ((rect1.top + rect1.height > rect2.top) && (rect2.left + rect2.width > rect1.left));
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  return ((point.x - circle.center.x) ** 2) + ((point.y - circle.center.y) ** 2)
   < ((circle.radius) ** 2);
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */

function findFirstSingleChar(str) {
  let result = null;
  const strArr = str.trim().split('');
  for (let i = 0; i < strArr.length && result === null;) {
    if (i === 0 && !strArr.slice(i + 1).includes(strArr[i])) {
      result = strArr[i];
    }
    if (i !== str.length - 1 && !strArr.slice(i + 1).includes(strArr[i])
    && !strArr.slice(0, i).includes(strArr[i])) {
      result = strArr[i];
    }
    if (i === str.length - 1 && !strArr.slice(0, i).includes(strArr[i])) {
      result = strArr[i];
    }
    i += 1;
  }
  return result;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const startBrackets = isStartIncluded ? '[' : '(';
  const endBrackets = isEndIncluded ? ']' : ')';
  const firstNumber = a < b ? a : b;
  const lastNumber = a > b ? a : b;
  return `${startBrackets}${firstNumber}, ${lastNumber}${endBrackets}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return Number(num.toString().split('').reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true 4n 0 1n 4 8n 7 8n 7 8n 7 8n 7 1n 7 8n 2 =>
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const transformArr = ccn.toString().split('').reverse().map((number, index) => {
    if ((index + 1) % 2 !== 0) return +number;
    const transformedNum = number * 2;
    if (transformedNum > 9) {
      const numberStr = transformedNum.toString();
      const firstNum = numberStr[0];
      const secondNum = numberStr[1];
      return +firstNum + +secondNum;
    }
    return +transformedNum;
  });
  return transformArr.reduce((acc, number) => acc + number, 0) % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const numSum = num.toString().split('').reduce((acc, number) => acc + +number, 0);
  if (numSum < 9) return numSum;
  return getDigitalRoot(numSum);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  function check(arr, typeOpen, typeClosed) {
    let counter = 0;
    let flag = true;
    for (let i = 0; i < arr.length;) {
      if (arr[i] === typeOpen) counter += 1;
      if (arr[i] === typeClosed) counter -= 1;
      if (counter < 0) flag = false;
      i += 1;
    }
    return flag;
  }

  const flag = [];
  const strArr = str.split('');
  if (strArr.length === 1 && strArr[0] === '') return true;
  if (strArr.length % 2 !== 0) return false;
  const squareBr = strArr.filter((element) => element === '[' || element === ']');
  const roundBr = strArr.filter((element) => element === '(' || element === ')');
  const curlyBr = strArr.filter((element) => element === '{' || element === '}');
  const triangleBr = strArr.filter((element) => element === '<' || element === '>');
  if (squareBr.length > 0 && squareBr.length % 2 !== 0) return false;
  if (roundBr.length > 0 && roundBr.length % 2 !== 0) return false;
  if (curlyBr.length > 0 && curlyBr.length % 2 !== 0) return false;
  if (triangleBr.length > 0 && triangleBr.length % 2 !== 0) return false;
  if (squareBr.length > 0) flag.push(check(squareBr, '[', ']'));
  if (roundBr.length > 0) flag.push(check(roundBr, '(', ')'));
  if (curlyBr.length > 0) flag.push(check(curlyBr, '{', '}'));
  if (triangleBr.length > 0) flag.push(check(triangleBr, '<', '>'));
  strArr.forEach((element, index) => {
    if (index === strArr.length - 1) return;
    if (element === '[') {
      if (strArr[index + 1] === ')' || strArr[index + 1] === '}' || strArr[index + 1] === '>') flag.push(false);
    }
    if (element === '(') {
      if (strArr[index + 1] === ']' || strArr[index + 1] === '}' || strArr[index + 1] === '>') flag.push(false);
    }
    if (element === '{') {
      if (strArr[index + 1] === ')' || strArr[index + 1] === ']' || strArr[index + 1] === '>') flag.push(false);
    }
    if (element === '<') {
      if (strArr[index + 1] === ')' || strArr[index + 1] === '}' || strArr[index + 1] === ']') flag.push(false);
    }
  });
  if (flag.includes(false)) return false;
  return true;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} paths
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(paths) {
  const resultArr = [];
  const splitted = paths.map((str) => str.split('/'));
  for (let i = 0; i < splitted[0].length;) {
    if (splitted.every((array) => array.includes(splitted[0][i]))) resultArr.push(splitted[0][i]);
    i += 1;
  }
  if (resultArr.length === 1) return '/';
  if (resultArr.length === 0) return '';
  return `${resultArr.join('/')}/`;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const resultArr = [];
  for (let j = 0; j < m1.length;) {
    resultArr[j] = [];
    for (let i = 0; i < m1.length;) {
      resultArr[j][i] = 0;
      for (let n = 0; n < m2.length;) {
        resultArr[j][i] += m1[j][n] * m2[n][i];
        n += 1;
      }
      i += 1;
    }
    j += 1;
  }
  return resultArr;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const container = [];
  const horizontalOne = [];
  const horizontalTwo = [];
  const horizontalThree = [];
  const verticalOne = [];
  const verticalTwo = [];
  const verticalThree = [];
  const leftTopCross = [];
  const topRightCross = [];
  // First row
  horizontalOne.push(position[0][0]);
  horizontalOne.push(position[0][1]);
  horizontalOne.push(position[0][2]);
  verticalOne.push(position[0][0]);
  verticalTwo.push(position[0][1]);
  verticalThree.push(position[0][2]);
  leftTopCross.push(position[0][0]);
  topRightCross.push(position[0][2]);
  // Second row
  horizontalTwo.push(position[1][0]);
  horizontalTwo.push(position[1][1]);
  horizontalTwo.push(position[1][2]);
  verticalOne.push(position[1][0]);
  verticalTwo.push(position[1][1]);
  verticalThree.push(position[1][2]);
  leftTopCross.push(position[1][1]);
  topRightCross.push(position[1][1]);
  // Third row
  horizontalThree.push(position[2][0]);
  horizontalThree.push(position[2][1]);
  horizontalThree.push(position[2][2]);
  verticalOne.push(position[2][0]);
  verticalTwo.push(position[2][1]);
  verticalThree.push(position[2][2]);
  leftTopCross.push(position[2][2]);
  topRightCross.push(position[2][0]);
  container.push(horizontalOne, horizontalTwo, horizontalThree,
    verticalOne, verticalTwo, verticalThree, leftTopCross, topRightCross);
  if (container.some((arr) => arr.every((element) => element === 'X'))) return 'X';
  if (container.some((arr) => arr.every((element) => element === '0'))) return '0';
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
