
/**
 * 
 * @param {number} totalPrice El valor total de la compra 
 * @returns {number} Devuelve los euros que le podemos aplicar de descuento 
 */
function calculateDiscount(price) {

    let discount = 0;

    // Implementar Iteración 1A
    if (price >= 1000) {
        discount = price * 0.1;
    } else if (price >= 500 && price < 1000) {
        discount = price * 0.05;
    }

    return discount;
}
console.log(calculateDiscount(1000)); // 100 , pues 100 es el 10% de 1000
console.log(calculateDiscount(100)); // 0, pues no llegamos al mínimo para obtener un descuento
console.log(calculateDiscount(750)); // 0, pues no llegamos al mínimo para obtener un descuento

function calculateTotal(basePrice, voucher) {
    basePrice -= voucher;
    const discount = calculateDiscount(basePrice);
    const transport = 5

    const finalPrice = basePrice - discount + transport;
    return finalPrice;
}

console.log("Compra de 750€ sin cheque descuento se le debería aplicar un 5% de descuento", calculateTotal(750, 0)) // 717.5

console.log("Compra de 1500 con un cheque descuento de 10€. Se le debería aplicar un 10% de descuento", calculateTotal(1500, 10)) // 1346