import {describe, it} from "@jest/globals"

describe("testing math", () => {
    it("should do some simple math", () => {
        expect(10).toBeGreaterThan(5)
        expect(5).toBeLessThan(10)
        expect(5).toEqual(5)
        expect(5 === 5).toBeTruthy()
    })
})