abstract class CourseModule {
    constructor(public moduleName: string, public credits: number) {}

    abstract getFinalMark(): number;
    abstract getModuleDetails(): string;

    public printSummary(): void {
        console.log(this.getModuleDetails());
        console.log(`Підсумковий бал за модуль: ${this.getFinalMark()} / 100\n`);
    }
}

class ExamModule extends CourseModule {
    constructor(
        moduleName: string,
        credits: number,
        public currentPoints: number,
        public examPoints: number
    ) {
        super(moduleName, credits);
    }

    getFinalMark(): number {
        return this.currentPoints + this.examPoints;
    }

    getModuleDetails(): string {
        return `[Іспит] "${this.moduleName}" (${this.credits} кредити) — Поточні: ${this.currentPoints}, Екзамен: ${this.examPoints}`;
    }
}

class ProjectModule extends CourseModule {
    constructor(
        moduleName: string,
        credits: number,
        public codeQuality: number,
        public defenseScore: number
    ) {
        super(moduleName, credits);
    }

    getFinalMark(): number {
        return Math.round(this.codeQuality * 0.6 + this.defenseScore * 0.4);
    }

    getModuleDetails(): string {
        return `[Курсова робота] "${this.moduleName}" (${this.credits} кредити) — Код: ${this.codeQuality}, Захист: ${this.defenseScore}`;
    }
}

const modules: CourseModule[] = [
    new ExamModule("Веб-програмування та TypeScript", 5, 56, 38),
    new ProjectModule("Об'єктно-орієнтоване проєктування", 4, 95, 90)
];

modules.forEach(mod => mod.printSummary());
