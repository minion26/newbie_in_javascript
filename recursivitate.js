function rec(a)
{
    
    if( a == 0 )
    return("even")
    else
    if ( a == 1 )
        return("odd")
        else
        if( a >= 2)
            return (rec(a-2))
            else
            if( a < 0 )
                return (rec(a+2))
}
