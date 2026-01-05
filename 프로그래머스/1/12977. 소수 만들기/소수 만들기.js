function solution(nums) {
    let answer = 0;
    const len = nums.length;

    // 1. 소수 판별 함수 (별도로 분리하여 가독성 높임)
    const isPrime = (n) => {
        if (n < 2) return false; // 0과 1은 소수가 아님
        // 2부터 n의 제곱근까지만 나누어 보면 됨 (효율성)
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    // 2. 3개의 숫자를 고르는 3중 반복문 (Combination)
    // i는 첫 번째 숫자, j는 두 번째, k는 세 번째 숫자
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                
                const sum = nums[i] + nums[j] + nums[k];
                
                // 합계가 소수라면 카운트 증가
                if (isPrime(sum)) {
                    answer++;
                }
            }
        }
    }

    return answer;
}