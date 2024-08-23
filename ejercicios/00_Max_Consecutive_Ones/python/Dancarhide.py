
def solution(nums):
    Cont1 = 0 
    Cont2 = 0
    for i in nums:
        if i != 1:
            Cont2 = max(Cont2,Cont1)
            Cont1 = 0
        else:
            Cont1 = Cont1 + 1

    Cont2 = max(Cont2,Cont1)

    return Cont2



