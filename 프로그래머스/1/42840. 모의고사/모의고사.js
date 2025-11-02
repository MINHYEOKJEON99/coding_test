function solution(answers) {
    const pattern = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    let answer = [];
    let counts = [0,0,0]
    for (let i = 0; i < answers.length; i++) {
        if(answers[i] === pattern[0][i % pattern[0].length]) {
            counts[0] = counts[0] + 1
        }
        if(answers[i] === pattern[1][i % pattern[1].length]) {
            counts[1] = counts[1] + 1
        }
        if(answers[i] === pattern[2][i % pattern[2].length]) {
            counts[2] = counts[2] + 1
        }
    }
    
    
    for(let i = 0; i <counts.length; i++) {
        const maxScore = Math.max(...counts)
        if(counts[i] === maxScore) {
            answer.push(i+1)
        }
    }
    return answer
}