def solution(nums):
    counter = 0
    maxNumber = 0
    for num in nums:
        if num == 1:
            counter += 1
            if counter > maxNumber:
                maxNumber = counter
        else:
            counter = 0
    return maxNumber
