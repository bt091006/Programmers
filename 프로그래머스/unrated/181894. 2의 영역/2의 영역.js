function solution(arr) {
    
    let start = 2; 
    let end = 2;   
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 2){
            if(start === 2){
                start = i;
            }
            end = i;
        }
    }
    if(start == 2 && end == 2){
        return [-1];
    }
    return arr.slice(start,end+1);
}