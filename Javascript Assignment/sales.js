var isLoggedIn = false;
var userID = null;


var shopInformation = {
    Shop: [
        {
            shopName: "Zara",
            address: "Manhattan Avenue, New York",
            code: "NY656"
        }
    ],
    User: [
        {
            firstName: "Angelina",
            surname: "Jolie",
            age: 47,
            birthday: "04.06.1975"
        }
    ],
    Items: [
        {
            itemName: "Blue jeans",
            category: "Trouser",
            price: 29.99,
            stock: 456
        }
    ]
}


function userControl(callback, data){
    callback(data);
}

// Add user
function addUser(info){

    if (shopInformation.User.some((element) => element.firstName == info.firstName && element.surname == info.surname)){

        console.log("User already exists");
        console.log("=============================");

    } else {
        shopInformation.User.push(info);
        console.log(`${info.firstName} ${info.surname} has been added`);
        console.log("=============================");
    }
}

// add items and item stocks
function addItem(item){

    if(shopInformation.Items.forEach((element, item_index) => element.itemName.toLowerCase() == item.itemName.toLowerCase() && item.stock > 0 )){
        let quantity = shopInformation.Items[item_index].stock += item.stock;
        console.log(`New stock added to the ${item.itemName} | Stock ${quantity}`);
        console.log("=============================");
    } else {
        shopInformation.Items.push(item);
        console.log(`${item.itemName} has been added with a stock of ${item.stock} with a price of $${item.price} per piece.`);
        console.log("=============================");
    }       
}


userControl(addUser,{
    firstName: "Tony",
    surname: "Stark",
    age: 50,
    birthday: "05.26.1978"
})

userControl(addUser,{
    firstName: "Peter",
    surname: "Parker",
    age: 20,
    birthday: "11.20.2000"
})

userControl( addItem, {
    itemName: "Nike",
    category: "shoes",
    price: 29.99,
    stock: 322
})


userControl( addItem, {
    itemName: "LV",
    category: "Bags",
    price: 150,
    stock: 100
})

userControl( addItem, {
    itemName: "Penshoppe",
    category: "Clothes",
    price: 49.99,
    stock: 250
})


// Login User
function loginUser(firstName, surname){

    // console.log("yes");
    shopInformation.User.forEach((element, user_index) => {
        if (element.firstName == firstName && element.surname == surname){
            isLoggedIn = true;
            userID = user_index;

            console.log(`Welcome back ${element.firstName} ${element.surname}`);
            console.log("=============================");
        }
    });

    if(!isLoggedIn){
        userID = null;
        console.log("Invalid!");
        console.log("=============================");
    }
}

// Add to the cart

let cart = [];
function addToCart(item_name, item_quantity){
    if (isLoggedIn){

        // shopInformation.Items.forEach((element) => console.log(element.itemName));
        // console.log(item_name);
        shopInformation.Items.forEach((element, item_index) => {
            if(element.itemName == item_name && element.stock > item_quantity){

            cart.push({item: item_name, quantity: item_quantity, index: item_index});

            
            console.log(`${item_name} with a quantity of ${item_quantity} has beed added to your cart`);
            console.log("=============================");
            
        }});

        if (shopInformation.Items.every((element) => element.itemName != item_name || element.stock < item_quantity)){
            console.log("Something Wrong!");
        }

        
    
    } else {
        console.log("Please log in!");
    }
}

var receipt = []
// Confirmation of an order
function confirmation(data){
    if(isLoggedIn){
        if(data == "confirm"){
            cart.forEach((element) => {
                shopInformation.Items[element.index].stock -= element.quantity;
                let cost = shopInformation.Items[element.index].price * element.quantity;
            receipt.push({Name: element.item, Quantity: element.quantity, Price: cost});
            })
        } else {
            console.log("no");
        }
    } else {
        console.log("Invalid Confirmation");
    }

}

// Recept final
function totalCost(){
    if(isLoggedIn){
        let total = 0;
        for(let i = 0; i < receipt.length; i++){
            // console.log(receipt[i].Price);
            total += receipt[i].Price;
        }
        console.log(`Hello! ${shopInformation.User[userID].firstName} ${shopInformation.User[userID].surname} your summary receipt:`);

        receipt.map((element) => console.log(`Item: ${element.Name} | Quantity: ${element.Quantity} | Price: $${element.Price}`))
        console.log(`Your Total Price is $${total}`)
    }
}



loginUser("Peter", "Parker");
addToCart("Nike", 2);
addToCart("LV", 3);
addToCart("Penshoppe", 1);


confirmation("confirm");
totalCost();