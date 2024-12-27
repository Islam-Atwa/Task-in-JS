// Generatoe a question interview

// what would be the result in console for this code snippet ? 

function* genTask() {
    console.log('hi');
    yield 123;

    console.log('Bye');
}

let iterator = genTask();
iterator.next();
iterator.next();
iterator.next();

// output : hi , Bye


function* genTask() {
    console.log('hi'); // يتم طباعة 'hi' في أول استدعاء لـ next()
    yield 123; // يتم إرجاع 123 ويتم إيقاف التنفيذ هنا مؤقتًا

    console.log('Bye'); // يتم طباعة 'Bye' عند استدعاء next() التالي
}

// d