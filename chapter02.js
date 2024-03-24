// 단락평가 , 논리연산에서 첫번째 피연산자 값만으로도 값을 확정지을 수 있을때
// 두번째 피연산자에는 접근조차 안함.


// function retrunFalse() {
//     console.log("False 함수")
//     // return false;
//     return undefined;
// }

// function returnTrue() {
//     console.log("True 함수")
//     // return true;
//     return 10;
// }

// // 첫번째 returnFalse 까지만 접근을 함 . false라서, 단락평가가 적용됨
// // console.log(retrunFalse() && returnTrue());

// // 첫번째 피연산자로 연산의 결과가 확정이 안나면 두번째 피연산자도 호출함
// // console.log(returnTrue() && retrunFalse());

// // 어차피 true라서 두번째 피연산자는 호출 안함
// // Truthy한 값과 Falsy값이 들어오면 그대로 적용됨
// console.log(returnTrue() || retrunFalse());


// 단락 평가 활용 사례

function printName(person) {
    
    // if (!person) {
    //     console.log("person에 값이 없음");
    //     return;
    // }
    
    // 이렇게 줄일 수 있음
    // console.log(person && person.name)
    
    const name = person && person.name; // 값이 전달안되면 undefined 
    console.log(name || "person의 값이 없음")
}

printName();
printName({name : "이정환"});