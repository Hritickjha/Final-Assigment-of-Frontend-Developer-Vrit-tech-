function countSmaller(nums) {
    const result = new Array(nums.length).fill(0);
    const sorted = [];
    function binarySearch(target) {
        let left = 0; 
        let right = sorted.length; 
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (sorted[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left; 
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        const idx = binarySearch(nums[i]);
        result[i] = idx;
        sorted.splice(idx, 0, nums[i]);
    }
    return result;
}
const nums = [5, 2, 6, 1];
console.log(countSmaller(nums)); 
