// 배열 메서드 2. 순회와 탐색
// 5가지 요소 순회 및 탐색 메서드


// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
    // console.log(idx, item * 2)
})

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2)
})

// console.log(doubledArr)

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude)

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 얕은 비교로 동작함, 단순한 원시 타입의 값만 찾을 때
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 몇번째 인덱스에 있는지 , 존재하지 않으면 -1 반환
// console.log(index);

let objectArr = [
    {name:"이정환"},
    {name:"홍길동"},
]

// indexOf는 못 찾음
// console.log(objectArr.indexOf({name:"이정환"}))

// findIndex는 복잡한 객체 값도 찾을 수 있음
// console.log(objectArr.findIndex((item) => item.name === "이정환"))

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드, 존재하지 않으면 -1 반환
let arr4 = [1, 2, 3];
const findexIndex = arr4.findIndex((item) => item % 2 !== 0)
// console.log(findexIndex)


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    {name:"이정환"},
    {name:"홍길동"},
]

// 인덱스를 반환하는게 아니라 객체 자체가 반환됨
const finded = arr5.find((item) => item.name === "이정환")
console.log(finded)

