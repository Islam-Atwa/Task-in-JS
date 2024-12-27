let str = "Islam";

let iterator = str[Symbol.iterator]();   // create Iterator  


// next()  -> تستخدم لتكرار الأحرف 
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
