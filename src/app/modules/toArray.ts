export function toArray( length: number ): number[] {
    const newArray = [];
    for ( let index = 0; index < length; index++ ) {
        newArray.push( index );
    }
    return newArray;
}
