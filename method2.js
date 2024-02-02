let shoppingList = ['Tomatoes','Corn','Rice','Carrot','Curry']
reversedList = [];

for(let list of shoppingList){
    reversedList.unshift(list)
}
console.log(reversedList);

// UNSHIFT ADDS AN ELEMENT FROM THE shoppingList ARRAY AND STORED IT REPEATEDLY BEFORE ANOTHER ARRAY ELEMENT IN THE reversedList VARIABLE.