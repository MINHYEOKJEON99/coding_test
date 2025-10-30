function solution(n) {
    var answer = 2;
    while(true) {
        if((n - 1) % answer === 0) {
            return answer
        } else {
            answer +=1
        }
    }
    return answer;
}