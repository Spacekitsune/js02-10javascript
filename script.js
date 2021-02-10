// // alert('hello');
// // čia yra komentaras
// // prompt('enter your age');
// var a = prompt('enter your age');
// document.write('Hello');
// document.getElementById('head').innerHTML = 'new heading';
// console.log('hello console');
// console.error('error');
// console.warning('warning');
//
// // kintamieji
// var name ='Alex';
// let age = 5;
//
// console.log(name);
// console.log(age);
//
// var name = 'Ana';
// console.log(name);
//
// // let neleidžia priskirti vienam kintamajam besikeičiančių reikšmių.
// let age = 16;
//
//
// const age1=17;
// age1=18;
// // kintamųjų pavadinimai yra case sensitive
//
// // string
// const nameEx ='Vardenis';
// //number
// const number=7.1;
// const number1=7;
// //boolean
// const isTall = false;
// //null (no value)
// const nothing=null;
// //undefined (absence of value)
// const x=undefined;
// let y;
//
// //išspausdina kintamojo tipą
// console.log(typeof(name));
//
// //= (priskyrimas)
// //= (tikrinimas ar atitinka reikšmė)
// //=== (tikrinimas ar atitinka reikšmė ir tipas)
//
// //+ - / * %
// //a++
// // && - and,|| - or, ! - not
//
// let num = 10;
// let num1 = 4.6;
// let num3 = -5;
//
// //Math.PI
// //Math.round
// //ir pn.
//
// let nameJ = 'john';
// let ageJ = 40;
// console.log('My name is'+ name + ', I am '+ age + ' years old.');
// //leidžia atspausdinti vienodas kabutes viduje stringo. Arba reikia naudoti skirtingas kabutes.
// console.log('Mes negalime \'naudoti\' kabučių ');
// // \\ atspausdina pasvirajį brūkšnį stringe.
// // \n perkelia į naują eilutę.
// //patogiausias būdas spausdinti.
// console.log(`My name is ${nameJ}, I am ${ageJ+2} years old.`);
//
// //rodo kiek stringe ženklų
// nameJ.length();
// // atspausdina mažosiomis
// nameJ.toLocaLeLowerCase();
// // išpjauna gabalą stringo
// nameJ.slice(0, 2);
// nameJ.replace('h', 'z');
//
// //masyvai
// let name40='John likes icecream';
// let arr = name. split(' ');
// console.log(arr);
//
// let newArr = arr. join(' ');
// console.log(newArr);
//
// //naujo masyvo kūrimas
// let items = [];
// items[0]='item1';
// items[1]='item2';
// console.log(items[1]);
//
// let items2 =['item', 'item20', 'item30'];
//
// //ideda elementa i masyvo pabaigą
// item2.push('item40');
//
// //prideda elementa pradžioje.
// item2.unshift('item0');
//
// //panaikina pirmaji elementa
// item2.shift();
//
// //panaikina paskutini elementa
// item2.pop();
//
// //apverčia masyvą
// item2.reverse();
//
// //surušiuoja
// item.sort();
//
// // objekto sukurimas (key and value)
// let person = {
//   name: 'John',
//   age: 40,
//   isTall: true
// };
//
// console.log(person);
// console.log(person.name);
// console.log(person.name.length());
//
// person.salary =2000;
//
// console.log(person['name']);
// person['salary'] =2000;
// console.log(person['salary']);

//1
let age1 = 10;
let name1 = 'Rūta';
let hobis1 = 'jodinėjimas';
console.log(`Mano vardas ${name1}, man ${age1} metų. Mano hobis yra ${hobis1}.`);

//2
let dob = 1989;
let future = 2070;
console.log(`${future} metais man bus ${future-dob} arba ${(future-dob)-1} metai / metų. `);

//3

let d = 14;
let r = d/2;
let p = 2 * Math.PI * r;
let s = Math.PI * Math.pow(r, 2);
console.log(`Apskritimo kurio skersmuo yra ${d}, plotas yra ${s.toFixed(2)}.`);

//4
let c = 23;
let f = (c * ( 9 / 5 )) + 32;
console.log(`${c} °C yra  ${f.toFixed(1)} °F.`);

//5
let sakinys = "Mes kalbame mažai, jeigu nekalbame apie save."
console.log(sakinys.length);
console.log(sakinys.toLocaleUpperCase());
console.log(sakinys.slice(0, 35));
let arr1 = sakinys.split(' ');
console.log(arr1);
console.log(arr1[2]);
arr1[1] ="šnekame";
console.log(arr1);

//6
let blogasSakinys = "laBa8s rYta56s, lIEtuva";
console.log(blogasSakinys);
blogasSakinys = blogasSakinys.substring(0, 4) + blogasSakinys.substring(5, 11) + blogasSakinys.substring(13, 23);
blogasSakinys = blogasSakinys.replace('l', 'L');
blogasSakinys = blogasSakinys.replace('B', 'b');
blogasSakinys = blogasSakinys.replace('Y', 'y');
blogasSakinys = blogasSakinys.replace('l', 'L');
blogasSakinys = blogasSakinys.replace('I', 'i');
blogasSakinys = blogasSakinys.replace('E', 'e');
console.log(blogasSakinys);


//7
let arr2 = ["value1", "value2", "value3" ,"value4", "value5", "value6", "value7", "value8", "value9", "value10"];
console.log(arr2.pop());
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);
arr2[5] = "new";
console.log(arr2);
let arr3= ["one", "two"];
let arrNew = arr2.concat(arr3);
console.log(arrNew);
let naujasSakinys = arrNew.join(', ');
console.log(naujasSakinys);

//8
let mokinys = [

  {
    vardas: 'Martynas',
    pavarde: 'Lubys',
    amzius: 17,
    vidurkis: 4.5,
    stipendija: false
  },
  {
    vardas: 'Alina',
    pavarde: 'Alijeva',
    amzius: 16,
    vidurkis: 9,
    stipendija: true
  },
  {
    vardas: 'Kazimieras',
    pavarde: 'Bakštys',
    amzius: 17,
    vidurkis: 9.3,
    stipendija: true
  },
  {
    vardas: 'Algimantas',
    pavarde: 'Petraitis',
    amzius: 16,
    vidurkis: 6.5,
    stipendija: true
  },
  {
    vardas: 'Kotryna',
    pavarde: 'Petraitytė',
    amzius: 16,
    vidurkis: 4,
    stipendija: false
  },

];

//9
console.log(mokinys[1].amzius);
console.log(mokinys[3].vidurkis);
console.log(mokinys[0]);
