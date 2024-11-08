// アロー関数
let totalAmountArrow = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i];
    }
    return total * (1 + 0.01 * tax);
}

console.log(totalAmountArrow([1,2,3,4], 10));