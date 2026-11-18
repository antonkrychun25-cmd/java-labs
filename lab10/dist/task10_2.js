"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CourseModule {
    moduleName;
    credits;
    constructor(moduleName, credits) {
        this.moduleName = moduleName;
        this.credits = credits;
    }
    printSummary() {
        console.log(this.getModuleDetails());
        console.log(`Підсумковий бал за модуль: ${this.getFinalMark()} / 100\n`);
    }
}
class ExamModule extends CourseModule {
    currentPoints;
    examPoints;
    constructor(moduleName, credits, currentPoints, examPoints) {
        super(moduleName, credits);
        this.currentPoints = currentPoints;
        this.examPoints = examPoints;
    }
    getFinalMark() {
        return this.currentPoints + this.examPoints;
    }
    getModuleDetails() {
        return `[Іспит] "${this.moduleName}" (${this.credits} кредити) — Поточні: ${this.currentPoints}, Екзамен: ${this.examPoints}`;
    }
}
class ProjectModule extends CourseModule {
    codeQuality;
    defenseScore;
    constructor(moduleName, credits, codeQuality, defenseScore) {
        super(moduleName, credits);
        this.codeQuality = codeQuality;
        this.defenseScore = defenseScore;
    }
    getFinalMark() {
        return Math.round(this.codeQuality * 0.6 + this.defenseScore * 0.4);
    }
    getModuleDetails() {
        return `[Курсова робота] "${this.moduleName}" (${this.credits} кредити) — Код: ${this.codeQuality}, Захист: ${this.defenseScore}`;
    }
}
const modules = [
    new ExamModule("Веб-програмування та TypeScript", 5, 56, 38),
    new ProjectModule("Об'єктно-орієнтоване проєктування", 4, 95, 90)
];
modules.forEach(mod => mod.printSummary());
