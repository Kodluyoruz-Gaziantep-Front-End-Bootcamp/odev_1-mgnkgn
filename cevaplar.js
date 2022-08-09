// let arr1 = ["2", "a", "3", 3, 4, 3, 5, 5];
// let arr2 = ["c", "c", "h", 1, 1, 1, 4];
// let arr3 = [
//   { name: "ali", id: 221 },
//   { name: "veli", id: 343 },
//   { name: "konya", id: 333 },
//   { name: "ali", id: 664 },
//   { name: "selim", id: 112 },
// ];
// let arr4 = [1, 1, 1, 4, 5, 5, 3, 2];

// const cevap1 = arr1.unshift("a");
// console.log(cevap1);
/* 
1- arr1 başına 'a' elemanını ekleyiniz
2- arr1 sonuna 6 elemanını ekleyiniz
3- arr1 sonundaki elemanı siliniz
4- arr1 başındaki elemanı siliniz
5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
6- kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve 
    aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız
    ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız
7- arr2 içindeki 'h' elemanın indexsini bulunuz
8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşrünüz
9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number
    değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız   
10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız    
11- arr3 içindeki id değeri 221 olan elemanı bulunuz
12- arr3 içindeki user değerleri ali olan elemanları bulunuz
13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız

her sorunun cevabını console.log ile yazıdırın*/

///////////////////////////////////////

let arr1 = ["2", "a", "3", 3, 4, 3, 5, 5];
let arr2 = ["c", "c", "h", 1, 1, 1, 4];
let arr3 = [
  { name: "ali", id: 221 },
  { name: "veli", id: 343 },
  { name: "konya", id: 333 },
  { name: "ali", id: 664 },
  { name: "selim", id: 112 },
];
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2];

//cevap 1
arr1.unshift("a");
console.log(arr1);

//cevap 2
arr1.push("6");
console.log(arr1);

//cevap 3
arr1.pop();
console.log(arr1);

//cevap 4
arr1.shift();
console.log(arr1);

//cevap 5
// ilk yöntem
const arrayConcat = arr1.concat(arr2);
console.log(arrayConcat);
// ikinci yöntem
const arraySpread = [...arr1, ...arr2];
console.log(arraySpread);

//cevap 6
const checkElement = function (el, arr) {
  // return arr.includes('el') ? true : false; ?????
  if (arr.includes(el)) return true;
  else return false;
};
const result6 = checkElement("h", arr2);

//cevap 7
const result7 = arr2.indexOf("h");
console.log(result7);

//cevap 8
// ilk yöntem
/*const afterThird = arr2.splice(3,(arr2.length-3));
console.log(afterThird);
console.log(arr2);*/
// ikinci yöntem
const result8 = arr2.slice(0, 3);
console.log(result8);

//cevap 9
const reducing = function (arr) {
  return arr.reduce(
    (prev, next) =>
      typeof prev == "number" && (typeof next == "number" ? prev + next : 0),
    0
  );
};
const result9 = reducing(arr1);
console.log(result9);

//cevap 10
const result10 = arr1.map((el) => el.toString());
console.log(result10);

//cevap 11
const result11 = arr3.filter((el) => el.id === 221);
console.log(result11);

//cevap 12
const result12 = arr3.filter((el) => el.name === "ali");
console.log(result12);

//cevap 13
const result13 = arr3.map((el) => el.id).reduce((prev, next) => prev + next, 0);
console.log(result13);
