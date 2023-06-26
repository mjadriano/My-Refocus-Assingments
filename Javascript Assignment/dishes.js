let dishes = [
    {
        "dishesID" : 12345,
        "dishesName" : "Pizza",
        "dishPrice" : 500,
        "ingredient" : ["tomato", "cheese", "flour"]
    },
    {
        "dishesID" : 11111,
        "dishesName" : "Sinigang",
        "dishPrice" : 300,
        "ingredient" : ["tamarind", "kangkong", "pork"]
    },
    {
        "dishesID" : 20022,
        "dishesName" : "Kare Kare",
        "dishPrice" : 400,
        "ingredient" : ["peanut", "pork", "string beans"]
    }

]

var menu = {
    "restaurantName" : "Ima",
    "dishes" : dishes,
    "displayName" : function(){
        console.log(this.restaurantName);
    },
    "displayMenu" : function(){
        for(dish of this.dishes){
            console.log(" ");
            console.log(`${dish.dishesName}, ${dish.dishPrice}`);
            console.log(`Contains: ${dish.ingredient}.`);
        }
    }
}
    
menu.displayName();
menu.displayMenu();