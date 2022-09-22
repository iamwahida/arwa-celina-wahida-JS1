//basic exercises
console.log('Hello from Console');
document.write("Hello from the Browser");

let user_age = 20;
let user_name = 'Wahida';
console.log(`Hi I am ${user_name} and I am ${user_age} years old.`);

const players = ['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki'];
console.table(players[3]);
console.log(`The most valuable player of the match is ${players[3]}.`);

//ex 1 / intermeditae
const cars_marks = ['Tesla','Audi','Renault','Volvo','Mazda','Fiat','Ferrari'];
console.log(cars_marks.sort());
// console.table(cars_marks);

//ex 2 / intermediate
const fruits = ['apple', 'banana', 'kiwi'];
fruits.push('oranges');
console.log(fruits);
fruits.pop('oranges');
console.log(fruits);

const animals = ['monkey', 'horse', 'dog'];
animals.sort();
console.log(animals);
animals.unshift('cat');
console.log(animals);


//ex 3 / intermediate
let fruit_names = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
console.log(fruit_names);
let temp = new Array();
temp = fruit_names.split('/');
console.table(temp);
document.write(`${temp.join("<br><br>")}`);


//ex 1 / advanced
let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;
let result = [7+14+21+36+42];
console.log(result);

let f = '1';
let g = 15;
let h = 8;
let i = "1";
let result_= [1*15*8*1];
console.log(result_);

let division = result/result_;
console.log(division);

let difference = result-result_;
console.log(difference);

//ex 2 / advanced

let people = ['Greg', 'Mary', 'Devon','James'];
people.shift([0]);
people.unshift('Matt');
people.pop('James');
people.push('Wahida');
console.table(people);

// console.log(people.slice(2));
let temp1 = people.slice(2);
console.table(temp1);
console.log(temp1.indexOf('Mary'));
console.log(temp1.indexOf('Foo'));

let people2 = ['Greg','Mary','Devon','James'];
// console.table(people2);
people2.splice(2,1,"Elizabeth","Anna")
console.table(people2)

let withBob = people2 + ",Bob";
console.table(withBob); 


//exercise 3 / advanced
const kette = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3]];
//select and output 11, 25, 17, 27,0
console.log(`${kette[1][1]}, ${kette[4][2]}, ${kette[5][3]}, ${kette[2][3]}, ${[0][0]}`);


