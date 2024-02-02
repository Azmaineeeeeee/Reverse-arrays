let shoppingList = ['Tomatoes', 'Corn', 'Rice', 'Carrot', 'Curry'];
let reversed = [];

let str = '';

for (let lists = shoppingList.length - 1; lists >= 0; lists--) {
    let a = shoppingList[lists];
    for (const i of a) {
        str = i + str;
    }


    console.log(a);
}
console.log(str);


