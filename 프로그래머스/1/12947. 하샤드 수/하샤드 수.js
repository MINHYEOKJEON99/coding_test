function solution(x) {
   const y = String(x);
    let z = 0;
    for(let i = 0; i < y.length; i++) {
        z += +y[i];
    }
    return !(x % z)
}