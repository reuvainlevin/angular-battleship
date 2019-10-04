export function copy<T>( p: T ): T {
    return JSON.parse( JSON.stringify( p ) );
}
