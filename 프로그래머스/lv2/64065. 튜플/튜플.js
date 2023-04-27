function solution(s) {
  const arr = s
    .slice(2, s.length - 2)  // 앞뒤의 중괄호 제거
    .split('},{')  // },{를 기준으로 문자열 분리
    .map(str => str.split(',').map(num => parseInt(num)))  // 숫자 배열로 변환

  arr.sort((a, b) => a.length - b.length);  // 길이 오름차순으로 정렬

  const answer = [];

  for (let nums of arr) {
    for (let num of nums) {
      if (!answer.includes(num)) {  // answer 배열에 없는 수만 추가
        answer.push(num);
        break;
      }
    }
  }

  return answer;
}
