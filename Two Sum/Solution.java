class Solution {

/* note from creator: 
*   This solution has an O(n^2) time complexity. A better way to approach this problem would be to use a hashmap.
    A solution using hashmaps can been seen in Solution.js.
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
