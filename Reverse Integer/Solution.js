/**
 * @param {number} x
 * @return {number}
 */

function checkLimit( num ) {
    let upper = Math.pow( 2, 31 ) - 1;
    let lower = Math.pow( 2, 31 ) * -1;

    if (
        num > upper ||
        num < lower
    ) {
        return false;
    }

    return true;
} 

var reverse = function(x) {
    let negative = false;

    if ( 0 > x ) {
        negative = true;
    }

    let num = Math.abs( x ).toString();
    let length = num.length;
    let nums = Array.from( num ).map( Number );
    let result = [];

    for ( let i = length - 1; i >= 0; i-- ) {
        result.push( nums[ i ] );
    }

    result = result.join('');
    
    if ( negative ) {
        result *= -1;
    }

    if ( !checkLimit( result ) ) {
        return 0;
    }

    return result;
};
