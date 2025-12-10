function solution(name, yearning, photo) {
    const obj = {};
    const answer = [];
    name.forEach((s,i) => {
        obj[s] = yearning[i]
    })
    for(let i = 0; i < photo.length; i++) {
        let score = 0;
        for(let j = 0; j < photo[i].length; j++) {
            if(obj[photo[i][j]]) {
                score +=  Number(obj[photo[i][j]])
            }
        }
        answer.push(score)
    }
    
    return answer
}