// practice questions on implicit coercion
console.log('A' - 1);// NaN
console.log('A' + 1);//A1
console.log(2 + '2' + '2');//helloworld
console.log('hello' + 'world' + 89);//NAN
console.log('hello' - 'world' + 89);//
console.log('hello' + 78);//hello78
console.log('78' - 90 + '2');//-122
console.log(2 - '2' + 90);//90
console.log(89 - '90' / 2);//44
console.log((true == false) > 2);//false