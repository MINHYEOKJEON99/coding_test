function solution(a, b) {
    var answer = '';
    const DAY = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  return DAY[new Date(`2016-${a}-${b}`).getDay()]

}