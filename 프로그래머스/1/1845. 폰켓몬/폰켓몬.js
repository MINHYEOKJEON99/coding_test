function solution(nums) {
    const unique = new Set(nums);
    const n = nums.length / 2;
    
    return unique.size >= n ? n : unique.size
}