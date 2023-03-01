/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
* This solution has a O(n) time complexity and memory usage.
*/
var twoSum = function(nums, target) {
    let length = nums.length;
    
    if ( 2 === length) {
        return [ 0,  1 ];
    }

    let result;

    const map = {};

    for ( let i = 0; i <= length - 1; i++ ) {
        let difference = target - nums[ i ];

        if ( difference in map ) {
            result = [ map[ difference ], i ];

            break;
        }

        map[ nums[ i ] ] = i;
    }

    return result;
};
