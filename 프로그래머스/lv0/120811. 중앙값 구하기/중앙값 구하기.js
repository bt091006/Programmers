function solution(array) {
    array.sort(function(a,b){
        return a - b;
    });
    
    let a = Math.floor(array.length / 2);
    
    return array[a];
    
    
}