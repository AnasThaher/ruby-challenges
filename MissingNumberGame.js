//  Missing Number Game
function MissingNumber(nums){
    nums = nums.sort((a,b) => a-b);
    if (nums[0] !== 1) return 1;
    for(let i =1;i<nums.length;i++){
        let val = nums[i]-nums[i-1];
        if(val>1){
            return nums[i-1]+1;
        }
    }
    return nums[nums.length - 1] + 1;
}

let nums = [3, 7, 1, 2, 8, 4, 5];
let nums2 =  [2, 1, 5, 4, 6, 9, 7, 8, 10];
console.log(MissingNumber(nums2));  
console.log(MissingNumber(nums));  