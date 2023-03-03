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
