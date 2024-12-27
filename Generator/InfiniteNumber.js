//

function* generateInfiniteNumbers() {
    let num = 1; // البداية من الرقم المحدد
    while (true) {
      yield num; // إرجاع الرقم الحالي
      num++;     // زيادة الرقم
    }
  }
  
  // استخدام
  let iterator = generateInfiniteNumbers();
  
  console.log(iterator.next().value); // 1
  console.log(iterator.next().value); // 2
  console.log(iterator.next().value); // 3
  console.log(iterator.next().value); // 4


//   Summary
// Generators can be used to create infinite sequences of numbers efficiently.
// They pause execution at each 'yield' and resume when 'next()' is called.
// The 'while (true)' loop ensures the generator runs indefinitely.
// Flexible starting points and multipliers make the sequence customizable.
// This approach avoids memory issues since only one value is generated at a time.