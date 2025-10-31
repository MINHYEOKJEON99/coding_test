function solution(s){
    var answer = true;

    let arr = [];
    for(let i = 0; i < s.length; i++) { 
        if(s[i] === '(') {
            arr.push('(')
        } else if(s[i] === ')') {
            const popc = arr.pop();
            if(popc === undefined) return false
        }
    }
    
    if(arr.length === 0) {
        return true
    } else {
        return false
    }
    
}