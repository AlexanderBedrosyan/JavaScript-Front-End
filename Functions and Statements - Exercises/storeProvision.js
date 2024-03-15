function solve(arr1, arr2){
    let store = {};
    store = addInStore(arr1, store);
    store = addInStore(arr2, store);
    Object.entries(store).map(([key, value]) => console.log(`${key} -> ${value}`))

    function addInStore(arr, store){
        for (let i = 0; i < arr.length; i += 2){
            let product = arr[i];
            let quantiy = arr[i + 1];
            if (!(product in store)){
                store[product] = 0;
            }
            store[product] += Number(quantiy);
        }
        return store
    };
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )