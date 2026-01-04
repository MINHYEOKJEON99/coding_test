function solution(k, m, score) {
    let answer = 0;
    let count = m;
    const sortedScore = score.sort((a, b) => a - b).reverse();
    sortedScore.forEach((n) => {
        count = count - 1;
        if(count === 0) {
            count = m;
            answer += n * m
        } 
    })
    return answer   
}