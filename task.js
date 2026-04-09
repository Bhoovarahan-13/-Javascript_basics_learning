//1) Even or Odd

// const check=(n1) => {
//     if(n1%2==0){
//         return "Even";
//     }
//     else{
//         return "Odd"; 
//     }
// }
// let checks = check(7);
// console.log(checks);


// 2) Result Evaluator — Pass or Fail

// function evaluateResult(n1){
//     let marks = n1;
//     if (marks>=50 && marks<=100){
//         console.log("Pass");
//     }
//     else if(marks<50){
//         console.log("Fail");
//     }
//     else {
//         console.log("Invalid Marks");
        
//     }

// }
// evaluateResult(75);
// evaluateResult(40);
// evaluateResult(120);

// 3) Maximum Finder — Largest of Three Numbers

// const findMax=(n1,n2,n3)=>{
//     if(n1 >= n2 && n1 >= n3){
//         return n1;
//     }
//     else if (n2 >= n1 && n2 >= n3){
//         return n2;
//     }
//     else{
//         return n3;
//     }
// }
// console.log(findMax(10, 25, 15));
// console.log(findMax(5, 3, 8));
// console.log(findMax(9, 9, 2));
 

// 4) Accumulator — Sum from 1 to N

// function Sum(n){
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum+=i;
    
// }
// return sum;
// }

// console.log(Sum(5));

//  5) Multiplication Table Generator
// function Ok(num){
// let result=0;
// for(let i=1;i<=10;i++){
//    result=num*i;    
//     console.log(num +"X" +i+"="+result);
    
// }}
// Ok(3);

// 6) Digit Counter — Number Length Finder
// function Yes(num) {
//     let count=0;
//     while (num>=1) {
//         num=num/10;
//         count++;
//     }
//     return count;
// }   
// console.log(Yes(1234)); 
// 
// 7) Number Reverser
// let num=4321;
// let digit=0;
// let rev=0;
// while(num!=0){
//     digit=num%10;
//     rev = rev*10+digit;
//     num=num/10;
// }
// console.log(rev);

// // 8) Factorial Engine
// const fact = function(num){
//     let factorail = 1;
//     for(let i=1;i<=num;i++){
//         factorail *= i;
//     }
//     return factorail
// }
// console.log(fact(5));

// //9) Prime Validator
// function primeNumber(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//    return true;
// }
// console.log(primeNumber(5)); 

//10) Pattern Builder — Star Triangle

// function patternBuilding(num) {
//     for (let i = 1; i <= num; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// patternBuilding(5);
