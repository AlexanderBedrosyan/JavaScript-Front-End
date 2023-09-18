function logoInWithCorrectUser(arr){
    let username = arr[0];
    let counter = 0;
    for (let index = 1; index < arr.length; index++){
        if (username === arr[index].split('').reverse().join('')){
            console.log(`User ${username} logged in.`)
            break
        } else {
            if (counter >= 3){
                console.log(`User ${username} blocked!`)
                break
            }
            console.log('Incorrect password. Try again.')
        }
        counter += 1
        if (counter > 3){
            console.log(`User ${username} blocked!`)
            break
        }

    }
}
