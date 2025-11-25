function solution(s, n) {
    var answer = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // 1. 공백 처리: 공백이면 그대로 붙이고 넘어감
        if (char === ' ') {
            answer += ' ';
            continue; 
        }

        // 현재 문자의 아스키 코드 값 가져오기
        let ascii = char.charCodeAt(0);

        // 2. 대문자(A-Z)인 경우: 아스키 코드 65 ~ 90
        if (ascii >= 65 && ascii <= 90) {
            // (현재값 - 'A' + n) % 26 + 'A'
            let shifted = (ascii - 65 + n) % 26 + 65;
            answer += String.fromCharCode(shifted);
        }
        // 3. 소문자(a-z)인 경우: 아스키 코드 97 ~ 122
        else if (ascii >= 97 && ascii <= 122) {
            // (현재값 - 'a' + n) % 26 + 'a'
            let shifted = (ascii - 97 + n) % 26 + 97;
            answer += String.fromCharCode(shifted);
        }
    }

    return answer;
}