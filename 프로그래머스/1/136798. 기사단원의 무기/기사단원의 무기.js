function solution(number, limit, power) {
    //약수의 개수
    let arr = [];
    for(let i = 1; i <= number; i++) {
        let count = 0;
        for(let j = 1; j * j <= i; j++) {
            if(j * j === i) {
                count += 1
            } else if(i % j === 0) {
                count += 2
            }
        }
        arr.push(count)
    }
    
    //공격력
    let totalPower = 0;
    arr.forEach((p) => {
        if(p <= limit) {
            totalPower += p
        } else {
            totalPower += power
        }
    })
    return totalPower
}