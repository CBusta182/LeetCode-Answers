// Solution utilizing built in JavaScript functions.
var strStr = function( haystack, needle ) {
    if ( !haystack.includes( needle ) ) {
        return -1;
    }

    return haystack.indexOf( needle );
};

// Solution without utilizing built in JavaScript Functions.
var strStr = function(haystack, needle) {
    let hayLength = haystack.length;
    let needleLength = needle.length;

    if ( hayLength < needleLength ) {
        return -1;
    }

    let result = -1;

    for ( let i = 0; i <= hayLength - 1; i++ ) {
        // check if the letter of the haystack at index i is the same as the first letter of the needle
        // if it isn't the same, move onto the next letter.
        if ( haystack[ i ] !== needle[0] ) {
            continue; 
        }

        // we are starting at i + 1 and at 1 since we already checked if the first letters are the same.
        let hayIndex = i + 1;
        let needleIndex = 1;

        // while haystack and the needle still have letters, itterate through them.
        while ( haystack[ hayIndex ] && needle[ needleIndex ] ) {
            // if letter in the haystack does not equal the letter in the needle, break out of the while loop
            if ( haystack[ hayIndex ] != needle[ needleIndex ] ){
                break;
            }

            needleIndex++;
            hayIndex++;
        }

        // break out of the for loop if the needleIndex and the needleLength are the same because that means we have found a match.
        if ( needleIndex === needleLength ) {
            result = i;

            break;
        }
    }

    return result;
};
