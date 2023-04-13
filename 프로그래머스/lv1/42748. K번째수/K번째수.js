function solution(array, commands) {
    const answer = [];
    
    for(let i=0; i< commands.length; i++){
        const [start, end, k] = commands[i];
        const sortArr = array.slice(start-1, end).sort((a,b) => a-b);
        answer.push(sortArr[k-1])
    }
    return answer;
}