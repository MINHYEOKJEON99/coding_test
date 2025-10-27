function solution(n) {
    let answer = []
    for(const i of String(n)) {
        answer = [+i, ...answer]
    }
    return answer
}