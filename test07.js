const fs = require('fs');
// file system과 관련한 정의

// fs.mkdir('./newNode1',(err)=>{ // 현 경로에 newNode1이라는 폴더를 생성
//     console.log(err);
// })

// const {mkdir} = require('fs'); // fs중에서 mkdir만 가져와라
// mkdir('./newNode2',(err)=>{ // 현 경로에 newNode2이라는 폴더를 생성
//     console.log(err);
// })

if(!fs.existsSync('./newNode3')){
    fs.mkdir('./newNode3',(err)=>{ 
        console.log(err);
    })
}