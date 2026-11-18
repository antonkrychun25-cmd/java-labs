"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog = [
    { id: 1, title: "Ноутбук", price: 28000, isAvailable: true, category: "Електроніка" },
    { id: 2, title: "Мишка", price: 650, isAvailable: true },
    { id: 3, title: "Клавіатура", price: 1800, isAvailable: false, category: "Периферія" },
    { id: 4, title: "Монітор", price: 7500, isAvailable: true, category: "Електроніка" }
];
function getAvailableAffordableProducts(products, maxPrice) {
    return products.filter(product => product.isAvailable && product.price <= maxPrice);
}
const budgetProducts = getAvailableAffordableProducts(catalog, 8000);
console.log("Доступні товари у вашому бюджеті:", budgetProducts);
