export const copy = <T>( p: T ): T => JSON.parse( JSON.stringify( p ) );
