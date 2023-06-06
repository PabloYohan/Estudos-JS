function* geradora1(){
  yield 1;
  yield 2;
  yield 3;
}

function* geradora2(){
  yield* geradora1();
  yield 4;
  yield 5;
  yield 6;
}

const g2 = geradora2();
for(let i of g2){
  console.log(i);
}

function* geradora3() {
  yield function(){
    console.log("primeiro");
  }

  yield function(){
      console.log("segundo");
    }
}
const g3 = geradora3();

const func1 = g3.next();
const func2 = g3.next();

func1.value();
func2.value();