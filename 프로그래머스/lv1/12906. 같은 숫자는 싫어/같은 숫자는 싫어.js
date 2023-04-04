function solution(arr){
// const newArray = arr.filter(callbackFunction(element, index, array), thisArg);
    return arr.filter((num, index) => num !== arr[index -1])
}