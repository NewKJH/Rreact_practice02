// 구조분해할당 : 배열이나 객체에 저장된 값들을 분해해서 다른 변수에 저장?

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // 1, 2, 3이 각각 할당됨 , 추가 / 기본값 설정도 가능
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
};

let { name, age:myAge, hobby, extra = "hello" } = person; // key값을 기준으로 가져올 수 있음.
console.log(name, myAge, hobby, extra);

// 3. 개체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age , hobby, extra)
}

func(person);