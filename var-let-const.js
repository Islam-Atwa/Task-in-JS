// الفرق بين var , const, let 

// مثال على var (Function Scope)
function exampleVar() {
    if (true) {

        var x = 10;
    }
    console.log(x); // 10 (x متاح داخل الدالة كلها)
}
  // مثال على let (Block Scope)
  function exampleLet() {
    if (true) {
      let y = 20;
    }
    console.log('sdlkfns')
    console.log(y); // خطأ: y غير معرّف خارج البلوك
  }
  