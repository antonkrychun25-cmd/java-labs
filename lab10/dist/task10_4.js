"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
function MinLength(length) {
    return function (target, propertyKey) {
        const storage = new WeakMap();
        Object.defineProperty(target, propertyKey, {
            get() {
                return storage.get(this);
            },
            set(newValue) {
                if (!newValue || newValue.trim().length < length) {
                    throw new Error(`Помилка валідації! Поле '${propertyKey}' повинно містити мінімум ${length} символів. Передано: "${newValue}"`);
                }
                storage.set(this, newValue);
            },
            enumerable: true,
            configurable: true
        });
    };
}
class UniversityStudent {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
__decorate([
    MinLength(3),
    __metadata("design:type", String)
], UniversityStudent.prototype, "firstName", void 0);
__decorate([
    MinLength(4),
    __metadata("design:type", String)
], UniversityStudent.prototype, "lastName", void 0);
try {
    const validStudent = new UniversityStudent("Антон", "Кричун");
    console.log(`Зареєстровано студента: ${validStudent.firstName} ${validStudent.lastName}`);
    console.log("Спроба зареєструвати студента із закоротким ім'ям...");
    const invalidStudent = new UniversityStudent("Ян", "Лі");
}
catch (error) {
    console.error("Отримано виключення:", error.message);
}
