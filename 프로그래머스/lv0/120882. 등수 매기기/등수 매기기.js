function solution(score) {
    let n = score.length;
    let rank = new Array(n).fill(1);
    
    let avg = score.map((score)=> (score[0]+score[1]) / 2);
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(avg[i] < avg[j]){
               rank[i]++; 
            }
        }
    }
    
    return rank;
}