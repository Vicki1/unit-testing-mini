const fun = require('./functions');

test(`returnTwo() should return 2`, ()=>{
    expect(fun.returnTwo() ).toEqual(2);
});

test(`greeting() should return 2`, ()=>{
    expect(fun.greeting('Jill') ).toEqual('Hello Jill.');
     expect(fun.greeting('James') ).toEqual('Hello James.');
});



describe("math functions", ()=>{
    test(`add(1,2) should return 3`, ()=>{
    expect(fun.add(1,2) ).toEqual(3);
     expect(fun.add(5,9) ).toEqual(14);
});
test(`subtract(2,1) should return 1`, ()=>{
    expect(fun.subtract(2,1) ).toEqual(1);
    ;
});
test(`multiply(1,2) should return 2`, ()=>{
    expect(fun.multiply(1,2) ).toEqual(2);
     
});
test(`divide(3,1) should return 1`, ()=>{
    expect(fun.divide(3,1) ).toEqual(3);
  
});
});

