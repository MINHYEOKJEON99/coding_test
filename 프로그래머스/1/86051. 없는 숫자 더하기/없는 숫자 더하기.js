function solution(numbers) {
    let answer = 0;
    const numSet = new Set(numbers)
    
    for(let i = 0; i < 10; i++) {
        if(!numSet.has(i)) answer += i
    }
    
    return answer
}