function solution(n, m) {
    let answer = []
    const bigN = n > m ? n : m;
    const smallN = n > m ? m : n;
    //최대 공약수
    for(let i = smallN; i > 0; i--) {
        if(smallN % i === 0) {
            if (bigN % i === 0) {
               answer.push(i);
                break;
            }
        }
    }
    
    //최소 공배수
    for(let i = 1; i <= bigN; i++) {
        if((smallN * i) % bigN === 0) {
            answer.push(smallN * i);
            break;
        }
    }
    return answer
        
        
}