function solution(s) {
    // 1. 스택으로 사용할 배열 (이름을 stack으로 바꾸면 더 명확합니다)
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}