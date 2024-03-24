// Spread 연산자와 Rest 매개변수



// 1. Spread 연산자 , 흩뿌리다, 펼치다 라는 뜻, ...배열이름
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
// 배열에 사용하기
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

// console.log(arr2)

// 객체에 사용하기
let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
}

// console.log(obj2)

// 함수에 사용하기
function funcA(p1, p2, p3) {
    console.log(p1, p2, p3)
}

funcA(...arr1)


// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// ...rest , rest 매개변수 뒤에는 추가적인 매개변수가 올 수 없다. 모든 나머지를 가져오기 때문에 rest 매개변수는 제일 마지막에 적어줘야한다.
// ...만 붙으면 상관없어서 이름은 자유롭게 작성해도 된다.
function funcB(one, two, ...rest) { // 모든 매개변수를 모두 가져올 수 있다 (배열 형태로)
    console.log(one) // 첫번째 인수는 여기
    console.log(two) // 두번째 인수는 여기로
    console.log(rest) // 세번째를 여기
}

funcB(...arr1)

