function solution(absolutes, signs) {
    let answer = 0;
    
    absolutes.forEach((n, i) => {
        if(signs[i]) {
            answer += n
        } else {
            answer -= n
        }
    })
    
    return answer
}