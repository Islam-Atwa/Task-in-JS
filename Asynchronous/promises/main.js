

new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        document.getElementById("item1").style.backgroundColor="red";
        resolve()
    }, 1000)
})
.then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.getElementById("item2").style.display="none";
            resolve()
        }, 3000)
    })
})