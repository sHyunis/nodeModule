const fs = require('fs');
// built-in module (내장모듈)

// fs.rmdir('./newNode', (err)=>{
//     console.log(err);
// })

const {rmdir} = fs; // fs에서 rmdir만 가져온다.

// 한개 삭제
if(fs.existsSync('./newNode1')){
    rmdir('./newNode1',(err)=>console.log(err));
}

//여러개 지우기
for(let a=0; a<5; a++){
    if(fs.existsSync(`./newNode${a}`)){
        rmdir(`./newNode${a}`, (err)=>console.log(err));
    }
}