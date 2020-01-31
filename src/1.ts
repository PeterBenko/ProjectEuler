/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * https://projecteuler.net/problem=1
 */
export class One {
    public static sumOfAllMultiplesOf3Or5Below(magicNumber: number) {
        const allNumbers = [...Array(magicNumber).keys()];
        const applicableNumbers = allNumbers.filter(x => this.isMultipleOf(x, 3) || this.isMultipleOf(x, 5));
        return applicableNumbers.reduce((aggregate, current) => aggregate + current, 0);
    }

    private static isMultipleOf(x: number, multiplier: number): boolean {
        return (x % multiplier) === 0;
    }
}