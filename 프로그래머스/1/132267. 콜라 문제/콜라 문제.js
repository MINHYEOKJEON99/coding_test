function solution(a, b, n) {
    let hasBottle = n;
    let answer = 0;
    while(true) {
        if(hasBottle < a) break;
        const remain = hasBottle % a
        hasBottle = Math.floor(hasBottle / a) * b
        answer += hasBottle
        hasBottle += remain
    }
    
    return answer
}