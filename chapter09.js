// 배열 메서드 3. 변형



// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환
let arr1 = [
    { name: "이정환", hobby: "테니스" },
    { name: "김효빈", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스")

// console.log(tennisPeople)

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    // console.log(idx, item)
    return item * 2; // map은 return이 가능하다
})

let names = arr1.map((item) => item.name)

// console.log(names)

// 3. sort
// 배열을 사전순으로 정렬하는 메서드 , 원본 자체를 정렬함
// let arr3 = ["b", "a", "c"];
let arr3 = [10, 3, 5]; // sort() 메서드는 사전순이기때문에 숫자의 대소 관계는 정렬 안해준다.
arr3.sort((a, b) => { // sort 메서드에서 숫자들도 정렬하고 싶다면 비교를 해줘야함
    if (a > b) {
        // b가 a 앞에 와라
        return 1; // 양수로 설정하면 둘 중에 더 작은 값이 앞으로 오게 된다
    } else if (a < b) {
        // a가 b 앞에 와라
        return -1;
    } else {
        // 같다면 두 값의 자리를 바꾸지 마라
        return 0;
    }

    // 현재는 오름차순 이지만 내림차순은 반대로 진행해주면 된다
});

// console.log(arr3);

// 4. toSorted (가장 치근에 추가된 최신 함수)
// sort 메서드와 같지만 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"]
const joined = arr6.join(" "); // , 말고 넣고싶으면 join("여기에 넣어준다")
console.log(joined)