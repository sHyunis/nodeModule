const name = "a fine fruit"

console.log(name);

const add = (n, m)=>{
    return n + m;
}

const sum = add(3, 4);
console.log(sum);

// module.exports = name; // 외부에서 쓸 수 있게 함
// module.exports = {name : name, add : add};
module.exports = {name , add};