function solution(babbling) {
    const arr = ["aya", "ye", "woo", "ma"];
    let totalCount = 0;

    for (const s of babbling) {
        let curStr = [];
        let prevStr = '';
        let isPossible = true; // 이 단어를 끝까지 발음할 수 있는지 체크

        for (const c of s) {
            curStr.push(c);
            const str = curStr.join('');

            if (arr.includes(str)) {
                // 1. 연속된 발음인지 체크
                if (str === prevStr) {
                    isPossible = false;
                    break;
                }
                // 2. 발음 가능하므로 상태 초기화
                prevStr = str;
                curStr = [];
            }
        }

        // 단어를 다 돌았는데 curStr에 남은 글자가 없고, 
        // 중간에 break(연속발음) 걸리지 않았다면 성공!
        if (isPossible && curStr.length === 0) {
            totalCount += 1;
        }
    }

    return totalCount;
}