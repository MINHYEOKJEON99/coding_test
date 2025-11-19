function solution(t, p) {
    let answer = 0;
    for(let i = 0; i <= t.length - p.length; i++) {
        if(t[i]) {
            const Num = +(t.slice(i,i+p.length))
            if(Num <= +p) {
                answer +=1
            }
        } else {
            continue;
        }
    }
    return answer
}