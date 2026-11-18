"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    studentId;
    _gpa;
    fullName;
    constructor(studentId, fullName, initialGpa = 0) {
        this.studentId = studentId;
        this.fullName = fullName;
        this._gpa = initialGpa >= 0 && initialGpa <= 100 ? initialGpa : 0;
    }
    get gpa() {
        return this._gpa;
    }
    set gpa(value) {
        if (value < 0 || value > 100) {
            console.log(`[Помилка] Некоректний середній бал (${value}). Допустимі межі: 0–100.`);
            return;
        }
        this._gpa = value;
    }
    addGrade(grade) {
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
