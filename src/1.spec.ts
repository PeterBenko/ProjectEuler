import {One} from "./1";

describe("One", () => {
    it("should follow the example", () => {
            const result = One.run(10);

            expect(result).toEqual(23)
        }
    )
})