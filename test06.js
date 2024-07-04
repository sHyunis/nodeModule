// {add, sub, mul, div}
const myMath = require('./math/math');

const sum = myMath.add(30, 40);
console.log(sum);
const sub = myMath.sub(30, 40);
console.log(sub);

// 디스트럭쳐링
const {mul, div} = require('./math/math');
console.log(mul(5,6));
console.log(div(5,6));