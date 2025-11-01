function solution(progresses, speeds) {
    var answer = [];
    let arr = [];
    let count = 0;
    let pivot = 0;
    for (let i = 0; i < speeds.length; i++) {
        let progressRate = 100 - progresses[i]
        let deployPeriod = Math.ceil(progressRate / speeds[i])
        arr.push(deployPeriod)
    }
    
    //[7,3,9]
    
    for(let i = 0; i < arr.length; i++) {
        if(!i) {
            count += 1
            pivot = arr[i]
        } else if(arr[i] <= pivot) { 
            count += 1
        } else {
            answer.push(count)
            count = 1;
            pivot = arr[i]
        } 
    }
    
    answer.push(count)
    return answer;
}