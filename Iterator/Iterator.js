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



// Implementation Example
// تعريف كائن someString باستخدام كائن String المدمج
var someString = new String('hi');

// إعادة تعريف طريقة Symbol.iterator للتحكم في عملية التكرار الخاصة بالكائن
someString[Symbol.iterator] = function () {
    return {
        // دالة next تقوم بإرجاع الكائنات التي تحتوي على قيمة (value) وحالة الانتهاء (done)
        next: function () {
            if (this._first) { // في أول استدعاء
                this._first = false; // تغيير الحالة إلى false لتجنب الإرجاع في الاستدعاءات التالية
                return { value: 'bye', done: false }; // إرجاع القيمة 'bye' مع حالة done: false
            } else {
                return { done: true }; // إنهاء التكرار بعد أول استدعاء
            }
        },
        _first: true // خاصية لتحديد إذا كان هذا هو أول استدعاء
    };
};

// إنشاء iterator باستخدام الطريقة Symbol.iterator
let Iterator = someString[Symbol.iterator]();

// استدعاء دالة next للطباعة في كل مرة
console.log(Iterator.next()); // { value: 'bye', done: false }
console.log(Iterator.next()); // { done: true }
console.log(Iterator.next()); // { done: true }

