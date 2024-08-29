def solution(nums):
    output = []
    mid = 0
    while(mid < len(nums)):
        if nums[mid] < 0:
            mid += 1
        else:
            break
    
    l = mid - 1
    r = mid

    while(l >= 0 and r < len(nums)):
        num_l = nums[l]
        num_r = nums[r]
        
        if(abs(num_l) > num_r):
            output.append(num_r**2)
            r += 1
        else:
            output.append(num_l**2)
            l -= 1

    while(l >= 0):
            output.append(nums[l]**2)
            l -= 1

    while(r < len(nums)):
        output.append(nums[r]**2)
        r += 1

    return output