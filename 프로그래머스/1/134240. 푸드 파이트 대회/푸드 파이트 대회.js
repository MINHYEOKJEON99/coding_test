function solution(food) {
    let answer = [];
    for(let i = 1; i < food.length; i++) {
        let foodNum = food[i];
        if(food[i] % 2) {
                foodNum = (foodNum - 1) / 2
            } else {
                foodNum = foodNum / 2
            }
        
        for(let j = 0; j < foodNum; j++) {
            answer.push(i)
        
        }
    }
    let reverse = [...answer].reverse();

    answer.push(0)
    answer.push(...reverse)

    
    return answer.join('')
}