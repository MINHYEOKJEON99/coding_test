function solution(a, b) {
    var answer = 0;
    const bigN = a > b ? a : b
    const smallN = a > b ? b : a
    
    for(let i = smallN; i <= bigN; i++) {
     answer += i   
    }
    
    return answer;
}