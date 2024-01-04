console.log("%cWorking with String and Numbers",'color: red; background: white; font-size: 16px')
let num1=100;
let num2=num1;
console.log(`num1: ${num1}  & num2: ${num2}`)
console.log('Now num1=200');
num1=200;
console.log(`num1: ${num1}  & num2: ${num2}`)
console.log('%cSee num2 doesn\'t get affected as it was defined as "let num2=num1;"','color: lightblue; font-size: 12px')
console.log("Same goes for string also")

console.log("%cWorking with Arrays",'color: red; background: white; font-size: 16px')
let array1=[1,2,3,4,5];
let array2=array1;
console.log(`array1: [${array1}]  & array2: [${array2}]`)
console.log('Now array1[2]=10');
array1[2]=10
console.log(`array1: [${array1}]  & array2: [${array2}]`)
console.log('%cSee array2 also get changed as it was defined as "let array2=array1;" \nthis is because these are references to the array and they point to same array','color: lightblue; font-size: 12px')

console.log("%cFixing this Arrays",'color: red; background: white; font-size: 16px')
let array3=array2.slice(); //here we are taking a copy
console.log(`array2: [${array2}]  & array3: [${array3}]`)
array2[2]=100;
console.log('Now array2[2]=100');
console.log(`array2: [${array2}]  & array3: [${array3}]`)
console.log('%cSee array3 doesn\'t get affected as it was defined as "let array3=array2.slice();"\nWe can also use let array3=[...array2] this is spread operator that created a copy ','color: lightblue; font-size: 12px')

console.log("%cWorking with objects",'color: red; background: white; font-size: 16px')
let obj1={
    name: 'Fardaan',
    age: 20
}
let obj2=obj1;
console.log('Now obj1.number=100');
obj1.number=100;
console.log(`object1.number: ${obj1.number}  & object2.number: ${obj2.number} ==> see both get the number object so it is reference assignment`)
let obj3=Object.assign({},obj1,{title:'mahdi', number:80});
console.log('creating object3 as "let obj3=Object.assign({},obj1,{title:\'mahdi\', number:80});" ==> this create a copy')
console.log(`object1.number: ${obj1.number} & object3.number: ${obj3.number}`);
console.log(`object3.title: ${obj3.title}`);
console.log(`object1.title: ${obj1.title}`);
console.log('%cSee object1 doesn\'t get affected from object 3 as it is a copy','color: lightblue; font-size: 12px')