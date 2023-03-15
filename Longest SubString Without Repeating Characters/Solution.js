/* Here I'm utilizing a sliding window algorithm in order to solve this problem.
*  Utilizing a sliding window allows me to avoid checking the same character multiple times as I iterate through the string.
*  As a result, my time complexity is linear, O(n).
*/
var lengthOfLongestSubstring = function( string ) {
    // I'm setting the start and end of the window at 0 so we can start at the very fist character of the string.
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let window = '';

    // Expand the window until we have a repeated character.
    while ( end < string.length ) {
        window += string.charAt( end );
        end++;

        if ( window.length > maxLength ) {
            maxLength = window.length;
        }

        // Once the algorithm finds a repeated character, start to contract the window unti we no longer have a repeated char
        while (
            start < end &&
            window.includes( string.charAt( end ) )
        ) {
            window = window.slice(1);
            start++;
        }
    }

    return maxLength;
};
