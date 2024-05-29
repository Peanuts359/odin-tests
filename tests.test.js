import {capitalise, createCalculator, reverseString, caesarCipher, analyseArray} from "./test";

test("Capitalise generic example", () => {
    expect(capitalise("word")).toEqual("Word")
});

test("Capitalise on capitalised word", () => {
    expect(capitalise("Word")).toEqual("Word")
});

test("Reverse word", () => {
    expect(reverseString("Reverse")).toEqual("esreveR")
});

test("Addition", () => {
    expect(createCalculator().add(2,3)).toBe(5)
});

test("Subtraction", () => {
    expect(createCalculator().subtract(2,3)).toBe(-1)
});

test("Multiplication", () => {
    expect(createCalculator().multiply(2,3)).toBe(6)
});

test("Division", () => {
    expect(createCalculator().divide(2,3)).toBe(2/3)
});

test("Division by zero", () => {
    expect(createCalculator().divide(2,0)).toBe(undefined)
});

test("Analyse array", ()=>{
    expect(analyseArray([1,8,3,4,2,6])).toEqual({average: 4,min: 1,max: 8,length: 6})
});

test("Caesar on generic word", ()=>{
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr")
});

test("Caesar with non-letters", ()=>{
    expect(caesarCipher("HeLLo :)",3)).toBe("KhOOr :)")
});

test("Caesar wih wrap-around", ()=>{
    expect(caesarCipher("xyz",3)).toBe("abc")
});