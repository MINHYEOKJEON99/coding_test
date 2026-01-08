function solution(n) {
    // 1. n+1 크기의 배열 생성 (인덱스 0~n), 일단 모두 소수(true)라고 가정
    const isPrime = new Array(n + 1).fill(true);
    
    // 0과 1은 소수가 아님
    isPrime[0] = false;
    isPrime[1] = false;

    // 2. 2부터 n의 제곱근까지만 반복 (그 이후는 이미 처리가 됨)
    for (let i = 2; i * i <= n; i++) {
        // 만약 i가 소수라면 (아직 지워지지 않았다면)
        if (isPrime[i]) {
            // i의 배수들을 모두 false(소수 아님)로 만듦
            // j는 i*i부터 시작해도 됨 (2*i, 3*i 등은 이미 이전 단계에서 지워짐)
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // 3. true인 개수만 세어서 반환
    // filter를 써도 되지만, 반복문이 더 빠를 수 있음
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) count++;
    }
    
    return count;
}