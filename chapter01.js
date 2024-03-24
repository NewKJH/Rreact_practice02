// 참이나 거짓을 의미하지 않는 값도 , 조건문 내에서 참이나 거짓으로 평가하는 특징
// 이를 이용하면 조건문을 간결하게 만들 수 있음

// 1. Falsy한 값 , 조건문에서는 거짓으로 평가
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = ""
let f7 = 0n; // 아주아주 큰 값을 저장할때 사용?

if (!f1) {
    console.log("falsy")
}

// 2. Truthy 한 값
// 7가지 Falsy 한 값을 제외한 나머지 모든 값은 전부 Truthy한 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
    console.log('Truthy')
}

// 3. 활용 사례
function printName(person) {
    // if (person === undefined || person === null) {
    if (!person) { // Falsy한 값이 들어오면 실행.
        console.log("person의 값이 없음")
        return;
    }

    console.log(person.name);
}

let person = { name: "이정환" };
// let person;
// let person = null;
printName(person);