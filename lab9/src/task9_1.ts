const studentName: string = "Антон Кричун";
const studentAge: number = 19;
const isEnrolled: boolean = true;
const grades: number[] = [95, 88, 92, 90, 96];

function calculateAverage(marks: number[]): number {
    const sum = marks.reduce((acc, curr) => acc + curr, 0);
    return sum / marks.length;
}

const averageGrade = calculateAverage(grades);

console.log(`Студент: ${studentName}, Вік: ${studentAge}`);
console.log(`Активний студент: ${isEnrolled}`);
console.log(`Середній бал: ${averageGrade.toFixed(2)}`);