new Promise((resolve, reject) => {
    resolve(1)
    new Promise((resolve, reject) => {
        resolve(2)
    }).then(data => {
        console.log(data);
    })
}).then(res => {
    console.log(res);
})
console.log(3);