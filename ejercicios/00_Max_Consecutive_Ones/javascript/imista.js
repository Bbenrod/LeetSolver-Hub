function solution(nums) {
    let max = 0;
    let count = 0;
    for (let x of nums) {
        if (x != 1) {
            max = Math.max(count, max);
            count = 0;
        } else
            count++;
    }

    return Math.max(count, max);
}

module.exports = { solution };