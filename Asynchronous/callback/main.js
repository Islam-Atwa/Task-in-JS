const fetch = require('node-fetch');
const fs = require('fs');

fs.readFile('./test.txt', {encoding:'utf-8'}, (err, data)=>{
    if(err){
        console.error('ERROR');
        console.error(err);
    }else{
            console.error('GOT DATA');
            console.log(data);
        }
    
});