function solution(participant, completion) {
    var answer = '';
    const completionMap = new Map();
    for (const name of completion) {
        let count = completionMap.get(name) || 0;
        completionMap.set(name, count + 1);
    }
    for(const name of participant) {
        if(completionMap.has(name) && completionMap.get(name) > 0) {
            completionMap.set(name, completionMap.get(name) - 1)
        } else {
            return name
        }
    }
    return answer
}