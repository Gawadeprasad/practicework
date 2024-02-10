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

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

const result = sum(1, 2, 3,); // result will be 15

console.log(result)
