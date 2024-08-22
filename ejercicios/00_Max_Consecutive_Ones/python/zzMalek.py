def solution(nums):
    max_count = 0
    count = 0
    for x in nums:
        if x != 1:
            max_count = max(count, max_count)
            count = 0
        else:
            count += 1

    return 0
