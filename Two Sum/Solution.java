class Solution {

/* 
    This solution has an O(n^2) time complexity as it is a brute force approach to solving this.
    Here I'm iterating over all the numbers twice, checking every possible combination of numbers to see if it equals the target.
    A better way to approach this problem would be to use a hashmap which can be seen in Solution.js.
*/
public int[] twoSum(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return new int[] { i, j };
            }
        }
    }
    throw new IllegalArgumentException("No two sum solution");
  }
}
