/*
    Date And Time

new Date(timestamp)
new Date(Date String)
new Date(Numeric Values)

Format
"Oct 25 1982"
"10/25/1982"
"1982-10-25" --> ISO International Standard
"1982-10"
"1982"
1982, 9, 25, 2, 10, 0
1982, 9, 25
"1982-10-25T06:10:00Z"

Date.parse("String") // Read Date From A String



*/


// 1. إنشاء كائن تاريخ جديد يعرض الوقت والتاريخ الحالي
let now = new Date();
console.log("التاريخ والوقت الحالي:", now);

// 2. إنشاء كائن تاريخ بتحديد التفاصيل (السنة، الشهر، اليوم، الساعة، الدقيقة)
let specificDate = new Date(2024, 11, 25, 12, 30); // 25 ديسمبر 2024، الساعة 12:30
console.log("تاريخ محدد:", specificDate);

// 3. الحصول على أجزاء التاريخ:
console.log("السنة:", now.getFullYear()); // السنة
console.log("الشهر (0-11):", now.getMonth()); // الشهر (0 = يناير)
console.log("اليوم في الشهر:", now.getDate()); // اليوم
console.log("اليوم في الأسبوع (0-6):", now.getDay()); // الأحد = 0
console.log("الساعة:", now.getHours()); // الساعة
console.log("الدقيقة:", now.getMinutes()); // الدقيقة
console.log("الثانية:", now.getSeconds()); // الثانية

// 4. تعديل أجزاء التاريخ:
let updatedDate = new Date();
updatedDate.setFullYear(2025); // تغيير السنة إلى 2025
updatedDate.setMonth(6); // تغيير الشهر إلى يوليو
updatedDate.setDate(15); // تغيير اليوم إلى 15
console.log("التاريخ بعد التعديل:", updatedDate);

// 5. حساب الفارق الزمني باستخدام الطابع الزمني (Timestamp):
let timestamp = Date.now(); // الوقت الحالي بالميلي ثانية منذ 1 يناير 1970
console.log("الطابع الزمني الحالي:", timestamp);

// 6. تنسيق التاريخ:
console.log("التنسيق الافتراضي:", now.toString()); // التنسيق الافتراضي
console.log("التاريخ فقط:", now.toDateString()); // عرض التاريخ فقط
console.log("الوقت فقط:", now.toTimeString()); // عرض الوقت فقط
console.log("صيغة ISO:", now.toISOString()); // صيغة ISO

// 7. العمليات الحسابية على التاريخ (إضافة 7 أيام):
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7); // إضافة 7 أيام
console.log("تاريخ بعد 7 أيام:", futureDate);

// 8. التوقيت المحلي والعالمي:
console.log("السنة بالتوقيت المحلي:", now.getFullYear());
console.log("السنة بالتوقيت العالمي:", now.getUTCFullYear());
console.log("الساعة بالتوقيت المحلي:", now.getHours());
console.log("الساعة بالتوقيت العالمي:", now.getUTCHours());
