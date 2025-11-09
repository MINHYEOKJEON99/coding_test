function solution(arr, divisor) {
    const sortArr = arr.sort((a, b) => a - b).filter((n) => !(n % divisor))
    return  sortArr.length ? sortArr : [-1]
    
}