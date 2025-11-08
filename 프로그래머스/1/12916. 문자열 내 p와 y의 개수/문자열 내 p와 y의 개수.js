function solution(s){
    const arr = [...s.toLowerCase()]
    let countP = 0;
    let countY = 0;
    
    arr.forEach((c) => {
        if(c === 'p') countP += 1;
        if(c === 'y') countY += 1;
    })
    
   
    return countP === countY
}