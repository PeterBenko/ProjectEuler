import {One} from "./1";

describe("One", () => {
    it("should follow the example", () => {
        // Act
        const result = One.sumOfAllMultiplesOf3Or5Below(10);

        // Assert
        expect(result).toEqual(23)
    });

    it("should calculate the challenge", () => {
        // Act
        const result = One.sumOfAllMultiplesOf3Or5Below(1000);

        // Assert
        expect(result).toEqual(233168)
    });
});
