def solution(nums):
    return len([1 for x in nums if not len(str(x)) % 2])
