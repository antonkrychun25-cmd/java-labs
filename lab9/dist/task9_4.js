"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStorage {
    items = [];
    addItem(item) {
        this.items.push(item);
        console.log(`[Storage] Елемент з ID=${item.id} успішно додано.`);
    }
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
    removeItem(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
    getAllItems() {
        return [...this.items];
    }
}
const userStorage = new DataStorage();
userStorage.addItem({ id: 101, name: "Антон", email: "anton.krychun.25@cnu.edu.ua" });
userStorage.addItem({ id: 102, name: "Максим", email: "maksim@example.com" });
const foundUser = userStorage.getItemById(101);
console.log("Знайдений користувач:", foundUser);
const configStorage = new DataStorage();
configStorage.addItem({ id: "theme", key: "darkMode", value: true });
configStorage.addItem({ id: "lang", key: "language", value: "uk-UA" });
console.log("Всі налаштування:", configStorage.getAllItems());
