function checkLimit( num ) {
    // calculate upper and lower limits of an integer
    // this is especially important in Javascript since it doesn't use the same data types as other programing languages.
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

    // we get the absolute value of the number so we don't add the negative sign to the end of the number when we reverse it.
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
