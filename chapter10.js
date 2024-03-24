// Date 객체와 날짜
// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자

// console.log(date1)

let date2 = new Date("1997-01-07/10:10:10");  // 특정 날짜를 넣고싶을때, 시간은 날짜 뒤에 / 하고 넣는다.
// let date2 = new Date(1997, 1, 7, 23, 59, 59);  // 특정 날짜를 넣고싶을때, 시간은 날짜 뒤에 / 하고 넣는다.
// console.log(date2)


// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났지를 의미하는 숫자값
// 저 시간은 UTC라고 함.세상 모든 나라가 사용하는 시간이 시작되는 시간
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
// console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 0부터 시작하기때문에 +1을 해줘야한다.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds)

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(1);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// console.log(date1)




// 5. 시간을 여러 포멧으로 출력하기
console.log(date1.toDateString()); // 시간은 제외하고
console.log(date1.toLocaleString()); // 우리나라 시간