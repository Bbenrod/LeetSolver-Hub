def solution(nums):
    cont = 0
    for i in nums:
        if len(str(i)) % 2 == 0:
            cont +=1
    return cont