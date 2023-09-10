function multiplicationTable(num){
    for (const x of Array(11).keys()) {
        if (x !== 0){
            console.log(`${num} X ${x} = ${x * num}`);
        }
    }    
}
