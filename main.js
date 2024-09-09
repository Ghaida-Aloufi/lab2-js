let numbers = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10, 25, 30];
let sortedNumbers = numbers.toSorted();
console.log(sortedNumbers);


//Q2
let squaredNumbers = numbers * numbers
console.log(squaredNumbers);

//Q3


const el = numbers.find(function (element) {
  return element > 25
})
console.log(el);




//Q4

if(numbers.length>5){

  console.log("allGreaterThan5 ");
}
else{
  console.log("not allGreaterThan5");
}

//Q5

console.log(numbers.includes(3));


//Q6

let count = 0
for (let i = 0; i <= numbers.length; i++) {
  if (i % 2 == 0) {
    count += i

  }
}
console.log(count);

//Q7


let y = splice(3, numbers, 4, 6)
console.log(y);

//Q8



//Q10


let c = numbers.pop()
console.log(c);

//Q11

numbers.push(10)







///Q1-2

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];


const words = names.split(/\s+/);

const filteredWords = words.filter(word => word.startsWith(char));
if (filteredWords.length > 0) {
  console.log(filteredWords);
}


///Q2-2



const s = names.join('-')
console.log(s)




///Q3-1


let fruits = ['apple', 'banana', 'cherry', 'date', 'elephant', 'bird', 'lion'];
let q = fruits.some(name => name.startsWith('b'));
console.log(q);

//Q3-2

let r = slice(2, 4);
console.log(r);

//Q3-3
console.log(fruits.unshift("yellow"));


////Q4-1
let wordsn = ['hello', 'world', 'javascript', 'array', 'function'];
 let g=wordsn.map(word => word.length);
console.log(g);

////Q4-2


if(words.find('javascript')){
  console.log('javascript');
}else{
  console.log("is not find");
}


