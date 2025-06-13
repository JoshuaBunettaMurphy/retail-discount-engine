let products = [
    { name: "Digital Camera", price: 80, inventory: 45, category: "Electronics" },
    { name: "Bowler Hat", price: 150, inventory: 15, category: "Apparel" },
    { name: "Dragonfruit", price: 10, inventory: 30, category: "Groceries" },
    { name: "Clock", price: 40, inventory: 50, category: "Household" },
    { name: "Chainsaw", price: 300, inventory: 20, category: "Outdoors" },
];

for (const product of products) {
    let discount = 0;
    switch (product.category) {
        case "Apparel":
            discount = 0.15; 
            break;
        case "Electronics":
            discount = 0.20; 
            break;
        case "Groceries":
        case "Household":
            discount = 0.10; 
            break;
        default:
            discount = 0; 
    }
    product.price -= product.price * discount;
}

let customerTypes = ["Common", "Subscribers", "VIP"];

for (let i = 0; i < 3; i++) {
    let cart = [products[i], products[i + 1]];
    let customerType = customerTypes[i];
    let total = 0;

    for (const item of cart) {
        if (item.inventory > 0) {
            total += item.price;
            item.inventory--;
        }
    }

    if (customerType === "Subscribers") {
        total *= 0.95; 
    } else if (customerType === "VIP") {
        total *= 0.93; 
    }
    console.log(`Customer #${i + 1} (${customerType}) - Total: $${total.toFixed(2)}`);
}

console.log("\nSingle product (after discount):");
let exampleProduct = products[0];
for (const key in exampleProduct) {
    console.log(`${key}: ${exampleProduct[key]}`);
}

console.log("\nAll Products (after discount):");
for (const product of products) {
    let entries = Object.entries(product);
    let productInfo = "";
    for (const [key, value] of entries) {
        productInfo += `${key}: ${value}, `;
    }
    console.log(productInfo.slice(0, -2)); 
}