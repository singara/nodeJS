const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is my error!', undefined)
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})

/*********PROMISES***********/

const doWorkPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([7, 4, 1])
        reject('error!!!')
    }, 2000)
})

doWorkPromises.then((result) => {
    console.log('sucess', result)
}).catch((error) => {
    console.log('Error!', error)
})


/**********PROMISE CHAINING*** */

const add = (a, b) => {
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then((sum) => {
    console.log(sum)
    add(sum, 5).then((sum2) => {
        console.log(sum2)
    }).catch((e) => {
        console.log(e)
    })
}).catch((e) => {
    console.log(e)
})

add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 3)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})