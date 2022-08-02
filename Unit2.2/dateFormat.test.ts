function dateFormat(shortDate: string):string {
     // this function will accept a numeric short date:
    // MM-DD-YYYY
    // and will return a long date, for example:
    // "2-5-2019" => "February 5, 2019"
    // "11-12-2022" => "November 12, 2022"
    return "";
 }

 describe ("dateFormat", ()=> {
    it("should format shorter dates correctly", () =>{
        expect (dateFormat('1-1-1990')).toBe("January 1, 1990");
        expect (dateFormat("3-3-2022")).toBe("March 3, 2022")
    });
    it("should not format dates with only two year digits", () => {
        expect(dateFormat('01-30-60')).not.toBe("January 30, 1960")
    });
 })