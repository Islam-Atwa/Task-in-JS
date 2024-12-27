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