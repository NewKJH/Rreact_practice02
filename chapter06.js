// 반복문으로 배열이나 객체를 순회하기
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함.


// 1. 배열 순회
let arr = [1, 2, 3,];

// 1.1 배열 인덱스, for문
for (let i = 0; i < arr.length; i++){ // arr.length : 배열의 길이를 가지고 있는 property
    // console.log(arr[i]);
};

let arr2 = [4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++){
    // console.log(arr2[i]);
};

// 1.2 for of 반복문, 배열을 순회하기 위한 반복문
for (let item of arr) { // of 뒤에 있는 배열을 하나씩 꺼내서 item에 저장
    // console.log(item);
};

// 2. 객체 순회
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
}

// 2.1 Object.keys 사용
// 객체에서 key 값들만 가져와서 새로운 배열로 반환
let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++){
    // console.log(keys[i])
}

for (let key of keys) {
    const value  = person[key]
    // console.log(key, value)
}

// 2.2 Object.values
// 객체에서 value 값들만 가져와서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
    // console.log(value);
}

// 2.3 for in 객체만을 위해 존재하는 반복문
for (let key in person) { // person안에 있는 key를 key에 넣어준다.
    const value = person[key]
    console.log(key, value)
}

