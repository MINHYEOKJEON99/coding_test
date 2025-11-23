function solution(sizes) {
    let bigArr = [];
    let smallArr = [];
    
    sizes.forEach((arr) => {
        if(arr[0] > arr[1]) {
            bigArr.push(arr[0]);
            smallArr.push(arr[1]);
        } else {
            bigArr.push(arr[1]);
            smallArr.push(arr[0]);
        }
    })
    
    return Math.max(...bigArr) * Math.max(...smallArr)
}