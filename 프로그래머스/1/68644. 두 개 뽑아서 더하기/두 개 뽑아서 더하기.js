function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length; i++) {
      for(let j = i; j < numbers.length; j++) {
        if(i >= j) continue;
        answer.push(numbers[i]+numbers[j])
      }   
    }
return [...new Set(answer)].sort((a,b) => a - b)
}