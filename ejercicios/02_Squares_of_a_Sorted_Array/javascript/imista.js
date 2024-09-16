const solution = (nums) => {
    const SIZE = nums.length;
    const output = new Array(SIZE);
    let left = 0;
    let right = SIZE - 1;
    for (let i = SIZE - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right]))
            output[i] = nums[right--] ** 2;
        else
            output[i] = nums[left++] ** 2;
    }
    return output;
}

module.exports = { solution }