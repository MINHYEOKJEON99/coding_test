function solution(num) {
    var answer = 0;
    let currentNum = num;
    while(true) {
        
        if(currentNum === 1) {
            break;
        }
        
        if(answer > 500) {
            return -1
        }
        if (currentNum % 2 === 0) {
            currentNum = currentNum / 2
            answer += 1
        } else {
            currentNum = currentNum * 3 + 1
            answer += 1
        }
        
    }
    return answer;
}