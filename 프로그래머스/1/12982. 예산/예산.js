function solution(d, budget) {
    let restBudget = budget;
    let count = 0;
    d.sort((a,b) => a - b).forEach((n, i) => {
        if(restBudget - n >= 0) {
            restBudget -= n;
            count += 1
        }
    })
    return count
}