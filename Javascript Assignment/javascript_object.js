//Customer

let  customer = 
    {
        customer_name: "Johnny Manggo",
        points: 12300,
        cart: [
            {
                item: "Shampoo",
                quantity: 2,
                price_$: 3
            },
            {
                item: "Soap",
                quantity: 2,
                price_$:2
            },
            {
                item: "Toothpaste",
                quantity: 1,
                price_$: 3
            }
        ]
    };

console.log(`Hi, ${customer.customer_name}! We are happy to see you today`);
console.log(`Your current points are: ${customer.points}`);


//Purchased Items
console.log("Purchased Items:")

let total_bill = 0;
var i = 0;
var newPoints = customer.points;

while(i < customer.cart.length){
    price = customer.cart[i].quantity * customer.cart[i].price_$;
    console.log(`${customer.cart[i].quantity}x ${customer.cart[i].item}--- $${price}`);
    total_bill = total_bill + price;
    newPoints = newPoints + customer.cart[i].quantity;
    i++;
}

console.log(`Total Bill: $${total_bill}`);
console.log(`New Current Points: ${newPoints}`);