function solution(nums) {
    const po = new Set(nums);
    const max = nums.length / 2;
    
    return po.size >= max ? max : po.size;
}