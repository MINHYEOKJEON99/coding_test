function solution(N, stages) {
  const result = [];
  let users = stages.length;

  for (let i = 1; i <= N; i++) {
    const count = stages.filter(stage => stage === i).length;
    const failRate = users === 0 ? 0 : count / users;

    result.push({ stage: i, failRate });
    users -= count;
  }

  return result
    .sort((a, b) => {
      if (b.failRate === a.failRate) {
        return a.stage - b.stage; // 번호 오름차순
      }
      return b.failRate - a.failRate; // 실패율 내림차순
    })
    .map(el => el.stage);
}
