class Student {
    public readonly studentId: string;
    private _gpa: number;
    protected fullName: string;

    constructor(studentId: string, fullName: string, initialGpa: number = 0) {
        this.studentId = studentId;
        this.fullName = fullName;
        this._gpa = initialGpa >= 0 && initialGpa <= 100 ? initialGpa : 0;
    }

    get gpa(): number {
        return this._gpa;
    }

    set gpa(value: number) {
        if (value < 0 || value > 100) {
            console.log(`[Помилка] Некоректний середній бал (${value}). Допустимі межі: 0–100.`);
            return;
        }
        this._gpa = value;
    }

    public addGrade(grade: number): void {
        if (grade < 0 || grade > 100) {
            console.log(`[Помилка] Оцінка ${grade} поза межами 0–100.`);
            return;
        }
        this._gpa = this._gpa === 0 ? grade : Number(((this._gpa + grade) / 2).toFixed(2));
        console.log(`[${this.studentId}] ${this.fullName} отримав(ла) оцінку ${grade}. Оновлений GPA: ${this._gpa}`);
    }
}

const student = new Student("ST-34113", "Антон Кричун", 90);
student.addGrade(96);
student.gpa = 120;
student.gpa = 94.5;
console.log(`Підсумковий GPA студента (${student.studentId}): ${student.gpa}`);
