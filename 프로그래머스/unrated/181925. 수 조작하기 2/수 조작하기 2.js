function solution(numLog) {
    let answer = '';
    let start = numLog[0]   // 초기값
    
    for(let i = 1; i<numLog.length; i++){
        let gap = numLog[i] - start;   // 이전값과 차이
        
        if(gap === 1){
            answer += "w";
        }
        else if (gap === -1){
            answer += "s";
        }
        else if (gap === 10){
            answer += "d";
        }
        else if (gap === -10){
            answer += "a";
        }
        start = numLog[i]
    }
    return answer;
}