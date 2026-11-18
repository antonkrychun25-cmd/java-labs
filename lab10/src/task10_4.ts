function MinLength(length: number) {
    return function (target: any, propertyKey: string) {
        const storage = new WeakMap<object, string>();

        Object.defineProperty(target, propertyKey, {
            get(this: object) {
                return storage.get(this);
            },
            set(this: object, newValue: string) {
                if (!newValue || newValue.trim().length < length) {
                    throw new Error(
                        `Помилка валідації! Поле '${propertyKey}' повинно містити мінімум ${length} символів. Передано: "${newValue}"`
                    );
                }
                storage.set(this, newValue);
            },
            enumerable: true,
            configurable: true
        });
    };
}

class UniversityStudent {
    @MinLength(3)
    public firstName!: string;

    @MinLength(4)
    public lastName!: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

try {
    const validStudent = new UniversityStudent("Антон", "Кричун");
    console.log(`Зареєстровано студента: ${validStudent.firstName} ${validStudent.lastName}`);

    console.log("Спроба зареєструвати студента із закоротким ім'ям...");
    const invalidStudent = new UniversityStudent("Ян", "Лі");
} catch (error: any) {
    console.error("Отримано виключення:", error.message);
}
