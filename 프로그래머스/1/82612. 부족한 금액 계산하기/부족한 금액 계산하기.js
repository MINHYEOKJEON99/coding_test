function solution(price, money, count) {
    let answer = money;
    for(let i = 0; i < count; i++) {
        answer -= price * (i+1)
    }
    return answer > 0 ? 0 : Math.abs(answer)
}