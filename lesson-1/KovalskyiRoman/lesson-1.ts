type primitives = string | number | boolean | null | symbol;

function isInArray( arr: primitives[], ...args: primitives[] ): boolean {
    return args.every( item => arr.indexOf( item ) !== -1 );
}


/*
const testArray = [1, 'asd', true, null];

console.log('success:', isInArray(testArray, 1));
console.log('success:', isInArray(testArray, 'asd', null));
console.warn('fail:', isInArray(testArray, 3));
console.warn('success:', isInArray(testArray, 'asd', true, 'ccc'));
*/


type stringOrNumber = string | number;

function summator( ...args: stringOrNumber[] ): number {
    let result = 0;

    args.forEach( item => {
        const itemNumber = (typeof item === 'string') ? parseInt( item ) : item;

        result += itemNumber;
    } );

    return result;
}

/*console.log('sum:', summator(0, '1', 2, '3', 4), 'expect 10');*/


function getUnique( ...args: primitives[] ): primitives[] {
    const uniqueArray: primitives[] = [];

    args.forEach( item => {
        if (uniqueArray.indexOf( item ) === -1) {
            uniqueArray.push( item );
        }
    } );

    return uniqueArray;
}

/*
console.log(getUnique(1, '2', true, {}, 2, true));
const testObj = {a: 1};
console.log(getUnique(1, '2', 1, testObj, {a: 2}, false, testObj));*/

function toMatrix( arr: primitives[], rowSize: number ): primitives[][] {
    const mutatedArray = [ ...arr ];
    const resultArray = [];

    while (mutatedArray.length) {
        resultArray.push( mutatedArray.splice( 0, rowSize ) );
    }

    return resultArray;
}

/*

console.log( toMatrix( [ 1, 2, 3, 4, 5, 6, 7 ], 2 ) );
console.log( toMatrix( [ 1, 2, 3, 4, 5, 6, 7 ], 4 ) );
*/
