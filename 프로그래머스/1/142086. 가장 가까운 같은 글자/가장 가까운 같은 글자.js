function solution(s) {
    let obj = {}
    return [...s].map((c, i) => {
        if(obj[c] || obj[c] === 0) {
            const n = i - obj[c];
            obj[c] = i
            return n
        } else {
            obj[c] = i;
            return -1
        }
    })
}