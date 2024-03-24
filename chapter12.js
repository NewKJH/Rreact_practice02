// 비동기 작업 처리하기 1. 콜백 함수

function add(a, b, callback) {
    
    setTimeout(() => {
        const sum = a + b;
        callback(sum)
    }, 3000)

}

add(1, 2, (value) => {
    // console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food)
    }, 3000);
};


function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownFood = `식은 ${food}`;
        callback(cooldownFood);
    }, 2000)
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezeFood = `냉동된 ${food}`;
        callback(freezeFood)
    }, 1500);
}

// 이 부분 좀 어렵다.
orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownFood) => { // 두번째 인수로 함수를 전달한거임. 화살표함수인데 이름도 생략시킨거
        console.log(cooldownFood)

        freezeFood(cooldownFood, (freezeFood) => {
            console.log(freezeFood);
        });
    });

});