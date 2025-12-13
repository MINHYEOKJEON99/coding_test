function solution(n, arr1, arr2) {
    var answer = [];
    const parseArr1 = arr1.map((num) => num.toString(2).padStart(n,'0'))
    const parseArr2 = arr2.map((num) => num.toString(2).padStart(n,'0'))
    
    return parseArr1.map((n, idx) => {
        const el = [];
        for(let i = 0; i < n.length; i++) {
            if(n[i] === '1' || parseArr2[idx][i] === '1') {
                el.push('#')
            } else {
                el.push(' ')
            }
        }
        return el.join('')
    })
    
}