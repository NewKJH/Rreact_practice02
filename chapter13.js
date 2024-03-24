// 비동기 작업 처리하기 2. Promise 중요한 내용임. API를 불러오거나 작업을 할때 사용됨
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// Promise는 비동기 작업을 감싸는 객체이다.

// Promise의 가지 상태, 대기 -> 성공
//                          -> 실패

function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수 => executor
    
        setTimeout(() => {
            // const num = 10;
            // const num = null;
    
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.")
            }
    
            // console.log("안녕");
            // // resolve("안녕"); // 성공 상태로 바꾸는 함수
            // reject("실패한 이유"); // 실패 상태로 바꾸는 함수
        }, 2000);
    });

    return promise;
}

add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);

        // const newP = add10(result);
        // newP.then((result) => {
        //     console.log(result)
        // });

        // return newP; //새로운 promise 객체를 반환할 수 있다.
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })


// then 메서드, promise의 비동기 작업이 성공했을때 실행
// 그 후에
// promise를 한번 더 반환한다
// promise.then((value) => {
//     console.log(value)
// }).catch((error) => { // promise를 한번 더 반환하기때문에 연결해서 사용가능. promise 체이닝이라고 함
//     console.log(error)
// })

// catch 메서드, promise의 비동기 작업이 실패했을때 실행
// promise.catch((error) => {
//     console.log(error);
// })



// setTimeout(() => {
//     console.log(promise);
// }, 3000)