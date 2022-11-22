// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber 1',()=>{
    expect(functions.isPhoneNumber("123-123-1234")).toBe(true);
});

test('isPhoneNumber 2',()=>{
    expect(functions.isPhoneNumber("858-123-1234")).toBe(true);
});

test('isPhoneNumber 3',()=>{
    expect(functions.isPhoneNumber("858=123=1324")).toBe(false);
});

test('isPhoneNumber 4',()=>{
    expect(functions.isPhoneNumber("858-123-34")).toBe(false);
});

//--------------------------------------------------------------
test('isEmail 1',()=>{
    expect(functions.isEmail("qil016@ucsd.edu")).toBe(true);
});

test('isEmail 2',()=>{
    expect(functions.isEmail("somebody@someth.sth")).toBe(true);
});


test('isEmail 3',()=>{
    expect(functions.isEmail("858-123-34")).toBe(false);
});

test('isEmail 4',()=>{
    expect(functions.isEmail("www.fb.com")).toBe(false);
});
//--------------------------------------------------------------
test('isStrongPassword 1',()=>{
    expect(functions.isStrongPassword("shortButStrong")).toBe(true);
});

test('isStrongPassword 2',()=>{
    expect(functions.isStrongPassword("LoooooooongPw")).toBe(true);
});


test('isStrongPassword 3',()=>{
    expect(functions.isStrongPassword("ThisReturnTrue123")).toBe(false);
});

test('isStrongPassword 4',()=>{
    expect(functions.isStrongPassword("123")).toBe(false);
});

//--------------------------------------------------------------
test('isDate 1',()=>{
    expect(functions.isDate("05/06/2002")).toBe(true);
});

test('isDate 2',()=>{
    expect(functions.isDate("07/10/2002")).toBe(true);
});


test('isDate 3',()=>{
    expect(functions.isDate("this is not a date")).toBe(false);
});

test('isDate 4',()=>{
    expect(functions.isDate("2020.09.18")).toBe(false);
});
//--------------------------------------------------------------
test('isHexColor 1',()=>{
    expect(functions.isHexColor("123456")).toBe(true);
});

test('isHexColor 2',()=>{
    expect(functions.isHexColor("654321")).toBe(true);
});


test('isHexColor 3',()=>{
    expect(functions.isHexColor("this is not a color")).toBe(false);
});

test('isHexColor 4',()=>{
    expect(functions.isHexColor("A1B2")).toBe(false);
});