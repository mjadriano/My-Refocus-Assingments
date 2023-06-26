const store_inventory = [
    {
        item: "Shampoo",
        quantity: 1,
        price_$: 3
    },
    {
        item: "Soap",
        quantity: 0,
        price_$: 2
    },
    {
        item: "Toothpaste",
        quantity: 2,
        price_$: 3
    }
]

const new_deliveries = [
    {
        item: "Shampoo",
        quantity: 5,
        price_$: 4,
        inventory_index: 0
    },
    {
        item: "Soap",
        quantity: 10,
        price_$: 2,
        inventory_index: 1
    },
    {
        item: "Toothpaste",
        quantity: 10,
        price_$: 3,
        inventory_index: 2
    }
]

function processDeliveries(items_obj){

    console.log(items_obj.inventory_index);
    store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
    store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
    // items_obj.forEach((obj, index) => {
    //     if (index <= store_inventory.length - 1){
    //         if (obj.item == store_inventory[index].item){
    //             store_inventory[index].quantity += items_obj[index].quantity;
    //             store_inventory[index].price_$ = items_obj[index].price_$;
    //         }
    //     }else
    //     {
    //         store_inventory.push(obj);
    //     }
        
    // })
    
    //console.log("Delivered items have been added to the inventory.");
    //console.log("New inventory summary:")
    //console.log(store_inventory);
}

new_deliveries.forEach(processDeliveries);
// console.log("Delivered items have been added to the inventory.");
// console.log("New inventory summary:")
// console.log(store_inventory);
//console.log(newStoreIventory);

//processDeliveries(new_deliveries);


function productSummary(items_obj){

    let item_id = items_obj.item.slice(0,3).toLowerCase(); 
    var remarks = "good";
    if (items_obj.quantity < 10){
                 remarks = "item stock is low";
        }
            
    let message = `ItemID: ${item_id} | ${items_obj.item} | stocks left: ${items_obj.quantity} | Remarks: `.concat(remarks);
    return message;

    // var reportSummary = [];
    // items_obj.forEach((obj, index) => {
    //     console.log(obj);
    //     console.log(index);
    //     let item_id = items_obj[index].item.slice(0,3).toLowerCase(); 
    //     var remarks = "good";

    //     if (items_obj[index].quantity < 10){
    //         remarks = "item stock is low";
    //     }
        
    //     let message = `ItemID: ${item_id} | ${items_obj[index].item} | stocks left: ${items_obj[index].quantity} | Remarks: `.concat(remarks);

        
    //     reportSummary.push(message);
    //     console.log(message);
        
    // })
    //console.log(reportSummary);
    
    
}



//productSummary(store_inventory);


console.log(store_inventory.map(productSummary));
