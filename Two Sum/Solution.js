/*
* This solution has a O(n) time complexity and memory usage.
*/
var twoSum = function(nums, target) {
    let length = nums.length;
    
    if ( 2 === length) {
        return [ 0,  1 ];
    }

    let result;

    // Initiate the hash map.
    const map = {};

    for ( let i = 0; i <= length - 1; i++ ) {
        // We are caluclating the difference here because we are treating this like an equation.
        // IE: nums[ i ] + x = target. 
        // Since we already know what nums[ i ] is, all we have to do is find x ( aka the difference ) and see if it is in our hash map.
        let difference = target - nums[ i ];

        // If the difference is in our hashmap, return the index of the difference and the index we are currently at. 
        if ( difference in map ) {
            result = [ map[ difference ], i ];

            break;
        }

        // If the difference is not in our hashmap, add the current value to our hashmap and assign it the index we are currently at.
        map[ nums[ i ] ] = i;
    }

    return result;
};
