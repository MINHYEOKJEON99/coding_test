function solution(n, m, section) {
    let count = 0;
    let temp = 0;
    for (let i = 0; i < section.length; i++) {
        if(i === 0) {
            temp = section[i] + m - 1;
            count = 1;
        } else if(section[i] <= temp) {
            continue;
        } else {
            temp = section[i] + m - 1;
            count += 1;
        }
            
    }
    return count;
}