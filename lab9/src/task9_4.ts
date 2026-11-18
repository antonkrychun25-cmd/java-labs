interface Identifiable {
    id: number | string;
}

class DataStorage<T extends Identifiable> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
        console.log(`[Storage] Елемент з ID=${item.id} успішно додано.`);
    }

    getItemById(id: number | string): T | undefined {
        return this.items.find(item => item.id === id);
    }

    removeItem(id: number | string): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    getAllItems(): T[] {
        return [...this.items];
    }
}

interface User extends Identifiable {
    name: string;
    email: string;
}

const userStorage = new DataStorage<User>();
userStorage.addItem({ id: 101, name: "Антон", email: "anton.krychun.25@cnu.edu.ua" });
userStorage.addItem({ id: 102, name: "Максим", email: "maksim@example.com" });

const foundUser = userStorage.getItemById(101);
console.log("Знайдений користувач:", foundUser);

interface AppConfig extends Identifiable {
    key: string;
    value: string | boolean | number;
}

const configStorage = new DataStorage<AppConfig>();
configStorage.addItem({ id: "theme", key: "darkMode", value: true });
configStorage.addItem({ id: "lang", key: "language", value: "uk-UA" });

console.log("Всі налаштування:", configStorage.getAllItems());