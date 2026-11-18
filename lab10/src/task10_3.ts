function LogExecutionTime(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`[LOG] Початок виконання '${propertyKey}' з аргументами:`, args);
        const start = performance.now();

        const result = originalMethod.apply(this, args);

        const end = performance.now();
        console.log(`[LOG] Метод '${propertyKey}' виконано за ${(end - start).toFixed(3)} мс`);
        return result;
    };

    return descriptor;
}

class RatingCalculator {
    @LogExecutionTime
    public calculateStreamRating(studentsCount: number): number {
        let totalScore = 0;
        for (let i = 1; i <= studentsCount; i++) {
            totalScore += (Math.sin(i) + 1) * 50;
        }
        return Number((totalScore / studentsCount).toFixed(2));
    }
}

const calculator = new RatingCalculator();
const avgStreamRating = calculator.calculateStreamRating(2000000);
console.log(`Середній рейтинговий бал потоку: ${avgStreamRating}`);
