function solution(s) {
    let nums = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9
    };
    let firstSlide = 0;
    let secondSlide = 1;
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        if(!isNaN(+s[i])) {
            
            answer.push(s[i]);
            firstSlide += 1;
            secondSlide += 1;
        } else {
            
            if(!isNaN(nums[`${s.slice(firstSlide, secondSlide)}`])) {
                
                answer.push(nums[`${s.slice(firstSlide, secondSlide)}`])
                firstSlide = secondSlide
                secondSlide += 1
            } else {
                secondSlide += 1    
            }
            
        }
    }
    return +answer.join('')
}