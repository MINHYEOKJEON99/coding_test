function solution(cards1, cards2, goal) {
    // 1. 각 카드 뭉치를 가리킬 포인터(인덱스) 초기화
    let idx1 = 0;
    let idx2 = 0;

    // 2. goal의 단어를 순서대로 확인 (forEach 대신 for...of 사용)
    for (const word of goal) {
        
        // 3. cards1의 현재 인덱스 단어와 일치하는지 확인
        // (idx1 < cards1.length는 인덱스 초과 방지용)
        if (idx1 < cards1.length && cards1[idx1] === word) {
            idx1++; // 일치하면 다음 카드로 넘어감
            
        // 4. cards1에 없으면 cards2의 현재 인덱스 단어와 확인
        } else if (idx2 < cards2.length && cards2[idx2] === word) {
            idx2++; // 일치하면 다음 카드로 넘어감
            
        // 5. 둘 다 일치하지 않으면 바로 실패 처리
        } else {
            return "No";
        }
    }

    // 6. 모든 goal 단어를 통과했다면 성공
    return "Yes";
}