function longestConsecutiveChain(nums) {
    if (nums.length === 0) {
        return 0;
    }
    const numSet = new Set(nums);
    let longestChain = 0;
    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentChain = 1; 
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentChain += 1; 
            longestChain = Math.max(longestChain, currentChain);
        }
    }
    return longestChain;
}
}