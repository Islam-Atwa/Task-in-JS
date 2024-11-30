// Here’s the code that creates a pair of objects, then modifies them.

// Which values are shown in the process?

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert( rabbit.jumps ); // ? (1)     
//true becuse taken from rabbit

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)
// 2 -> null 

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
// 3 -> undefind  (animal) او في النموذج الالي  (rabbit)في (jumb)لان جافا سكريبت لم يجد الخاصية 
