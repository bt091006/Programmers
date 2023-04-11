function solution(sizes) {
    let wmax = 0;  
    let hmax = 0;   
    
    for(let i = 0; i < sizes.length; i++){
        const w = sizes[i][0];
        const h = sizes[i][1];
        

        wmax = Math.max(wmax, Math.max(w,h));
        hmax = Math.max(hmax, Math.min(w,h));
    }
    return wmax * hmax;
}