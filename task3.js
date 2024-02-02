// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let joinedNumbers = '';

for(let i of numbers){
    joinedNumbers = joinedNumbers + i;
}
console.log(joinedNumbers);
console.log(typeof(joinedNumbers));