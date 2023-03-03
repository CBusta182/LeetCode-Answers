/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

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
        if ( haystack[ i ] !== needle[0] ) {
            continue; 
        }

        let hayIndex = i + 1;
        let needleIndex = 1;

        while ( haystack[ hayIndex ] && needle[ needleIndex ] ) {
            if ( haystack[ hayIndex ] != needle[ needleIndex ] ){
                break;
            }

            needleIndex++;
            hayIndex++;
        }

        if ( needleIndex === needleLength ) {
            result = i;

            break;
        }
    }

    return result;
};
