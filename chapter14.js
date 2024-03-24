// 비동기 작업 처리하기 3. async/await



// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변형해주는 그런 키워드

// async 키워드에 의해서 비동기 함수로 바뀜, promise를 반환함
async function getData() {
    // return {
    //     name: "이정환",
    //     id: "winterlood",
    // };

    // 애초에 promise를 반환한다면 async는 별다른 기능안하고 promise를 반환하게 그냥 둔다
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환",
                id: "winterlood"
            });
        },1500)
    })
};

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    // getData().then((result) => {
    //     console.log(result);
    // });

    // await를 함수 호출앞에 사용하면 promise를 기다려준다.
    const data = await getData();
    console.log(data)
}

printData();