function randomNumber(min = 1000, max = 3000) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, randomNumber());
}
function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, randomNumber());
}
function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, randomNumber());
}

f1(() => f2(() => f3(() => console.log("hello world!"))));
