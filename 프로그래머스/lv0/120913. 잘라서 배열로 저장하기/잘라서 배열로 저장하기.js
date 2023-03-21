function solution(my_str, n) {
    let result = [];
    for(let i = 0; i < my_str.length; i += n){
        result.push(my_str.slice(i, i+n))
    }   // slice함수 사용하여 인덱스를 n씩 증가시키면서 문자열을 잘라나가고
    return result;
}