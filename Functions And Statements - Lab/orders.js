function calculateBills(product, orders){
    let menu = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    };
    console.log((menu[product] * orders).toFixed(2))
}
