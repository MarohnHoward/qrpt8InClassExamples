describe("value testing", () => {
    test("strings are string", () => {
      expect("Hello World").toBe("Hello World");
      expect(stringCheck("string")).toBeTruthy();
      expect(stringCheck("wouldnt it be the same thing with quotes around it")).toBeTruthy();
      expect(stringCheck(7528)).toBeFalsy();
    });
    test("numbers are numbers", () => {
      expect(3.14159).toBe(3.14159);
      expect(numberCheck(1.23)).toBeTruthy();
      expect(numberCheck(5 / 6)).toBeTruthy();
      expect(numberCheck("string")).toBeFalsy();
    });
    test("booleans are booleans", () => {
      expect(false).toBe(false);
      expect(booleanCheck(10<20)).toBeTruthy();
      expect(booleanCheck(100<10)).toBeTruthy();
      expect(booleanCheck(3.14159)).toBeFalsy();
    });
  });
  
  function numberCheck(x) {
    return typeof x == "number";
  }
  function stringCheck(x) {
    return typeof x == "string";
  }
  function booleanCheck(x) {
    return typeof x == "boolean";
  }
