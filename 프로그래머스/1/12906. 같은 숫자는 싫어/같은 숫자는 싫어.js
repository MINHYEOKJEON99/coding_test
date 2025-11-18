function solution(arr)
{
    let answer = [];

    return arr.filter((n,i) => {
        if(i === 0) return true
        if(n === arr[i-1]) return false
        return true
    })
}