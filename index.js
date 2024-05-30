// closer js 
// function passes argument as Parameters in anather function called closer  

// =======================================>>
// function getCube(number){
//   return (number*number*number)
// }

// console.log(getCube(4))

// =======================================>>

// arrow function
// const add = (x, y) => 5 +3;

// console.log(add())

// =======================================>>

// function sum(...numbres){
//   let  total = 0;
//   for (const num of numbres){
//     total += num;
//   }
//   return total;
// }

// const result = sum (1,2,5)

// ==========================================>>>

// function sum(...numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// }

// const result = sum(1, 2, 3,); // result will be 15

// console.log(result)

// =================================================>>

// function add(){
//   let sum = 0;
//   for (let i =0; i< arguments.length; i++){
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(add(2,3));

// ============================================>>

// showMe ()

// function showMe(){
//   console.log('an hoisting example');
// }

// showMe()

// ===========================================>>

// function add(a, b){
//   return a + b;
// }

// let sum = add;


// console.log(3,5);

// ============================================>>

// const foo = [1,2,3];

// const bar = foo;
// bar[0] = 4;

// console.log(foo);

// ====================================>>

// let price = [100, 200, 300, 30, 40 ,50];

// console.log('sorted_array:')
// price.sort((a-b))

// console.log(price);

// ====================================>>

// let show = function(){
//   console.log("anonymous function")
// };

// show()

// ====================================>>

// setTimeout(function(){
//   console.log('excute after 1 sec later')
// },1000)

// =====================================>>>

// const lang = ["java", "python", "cpp", "dotnet", "js",]

// const value = lang.forEach((item) => {
//   console.log(item);
//   return item
// }) 

// console.log(value)

// =====================================>>

// const myNum = [1,2,3,4,5,6,7,8,9]

// const newNum = myNum.filter( (num ) => num < 7)

// console.log(newNum)
// =======================================>>

// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const num = myNum.map(( num ) => num + 5);

// console.log(num)

// ======================================>>>

// (function(a,b){
//   console.log(a + b)
// } (2,4))

// ========================================>>>

// function milesToKms(miles){
//   var factor = 0.621371;

//   var kms = miles / factor;

//   return kms
// }
// var miles = 5;
// var kilometers = milesToKms(miles);

// console.log(miles + " miles is equal to " + kilometers +" kilometres")

// ======================================>>

// function feherenhietToCelsius(fahareneit){

//   var celsius = (fahareneit-32 ) * 5 /9;
  
//   return celsius;
// }

// var fahareneit = 75;

// var celsius = feherenhietToCelsius(fahareneit);

// console.log(fahareneit + " degrees fahrenheit is equal to " + celsius)

// ======================================>>


// let add = (a , b) => 3 + 4;

// console.log(add())

// ========================================>>


// let userName = 'john';

// function showMessage(){
//   let message = 'hello '+ userName;
//   console.log(message);
// }

// showMessage()
// ==========================================>>

// let userName = 'john';

// function showMessage(){
//   userName = 'bob';

//   let message = 'hello '+ userName;
//   console.log(message)
// }

// console.log(userName)

// showMessage()

// console.log(userName)

// =================================>>


// function showMessage(from, text){
//   console.log(from+ ":"+text)
// }

// showMessage('ann', 'hello');
// showMessage('ann', 'whats up?')

// =====================================>>

// function showMessage (from, text){

//   from = '*' + from + '*';
//   console.log(from + ":" +text)
// }

// let from = 'Anna';

// showMessage(from, "hello")

// console.log(from);

// ===================================>>


// function checkAge(age){
//   if(age >= 18){
//     return true;
//   } else{
//     return confirm('do you have permission')
//   }
// }

// let age = console.log("how old you are", 18);

// if(checkAge (age)){
//   alert('access granted');
// }else{
//   alert('access denied')
// }

// =========================================>>

// function showMovie(age){
//   if(!checkAge(age)){
//     return;
//   }
// }

// console.log("showing the movie");

// ============================================>>

// function doNothing(){
//   return;
// }

// console.log(doNothing() === undefined);

// ============================================>>

// const myNumbers = [1,2,3,4,5,6,7,8,9];

// let myNum = myNumbers.map((num) => num + 2 );

// console.log(myNum);

// =============================================>>

// let user = {
//     name: "sandy",
//     age :  25,
//     add: "Baner, Pune",
//     job: "software developer",
//     email: "sandy@gmail.com"
// } 

// console.log(user.add)
// console.log(user.email)

// =============================================>>

// function ask (que, yes, no){
//   if(confirm(que)) yes();
//   else no()
// }

// ask(
//   "do you agree?",
//   function() {console.log("you agree");},
//   function() {console.log("you canceles the excution");}
// );

// ==========================================>>


// let user = {
//   name: "john",
//   age: 30

// };
// let key= ("what do you want to know", "name")

// console.log(user[key])

// ============================================>>

// let user ={
//   name: "john",
//   age: 30
// };
// let key = "name";
// console.log(user[key])

// ===========================================>>

// let fruit = ("which fruit to bye?","apple");

// let bag = {
//   [fruit]: 5,
// }
// console.log(bag.apple)

// ======================================>>

// let fruit = ("which fruit to bye ?", "apple");

// let bag ={};

// bag[fruit] = 5;

// ====================================>>

// function makeUser(name, age){
//   return{
//     name: name,
//     age: age,
//   };
// }

// let user = makeUser("sandy", 40)
// console.log(user)

// ======================================>>

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// };

// console.log(obj.for + obj.let + obj.return);

// ======================================>>

// let obj = {
  //   0: 'test'
  // }
  
  // console.log(obj["0"]);

// ====================================>>

// let person = {
//   name : 'jane',
//   age: 35, 
// }

// function increaseAge(obj){
//   obj.age += 2;

//   obj = {name: "Jane", age: 22}
// }

// increaseAge(person)
// console.log(person)

// =====================================>>


// function countDown(fromNum){
//   console.log(fromNum)
//   countDown(fromNum - 1)
// }

// countDown(4)

// =======================================>>

// function countDown(fromNum){
//   console.log(fromNum)

//   let nextNum = fromNum - 1;

//   if(nextNum > 0){
//     countDown(nextNum);
//   }
// }

// countDown(3)

// =====================================>>>


// let newYearCountDown = countDown ;
// countDown = null;

// newYearCountDown (10)

// =======================================>>

// let user ={
//   name : "john",
//   age : 30,
//   isAdmin: true
// }

// for (let key in user ){
//   console.log(key)

//   console.log(user[key])
// }
// ========================================>>


// let code ={
//   "49": "gemany",
//   "41": "malta",
//   "44": "finland",

//   "1": "USA"
// };

// for(let code in codes){

//   console.log(code)
// }

// ====================================>>

// class car {
//   constructor(name){
//     this.brand = name;
//   }
//   present (){
//     return 'i have a '+ this.brand;
//   }
// }

// class model extends car {
//   constructor(name, mod){
//     super(name);
//     this.model = mod;
//   }
//   show(){
//     return this.present()+ ', it is '+ this.model
//   }
// }
// const myCar = new model("ford", "mustang");
// myCar.show();

// =========================================>>

