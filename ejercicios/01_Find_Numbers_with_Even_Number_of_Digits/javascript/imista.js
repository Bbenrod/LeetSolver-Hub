const solution = nums => nums.filter(
    num => String(num).length % 2 === 0
).length;


module.exports = { solution };
