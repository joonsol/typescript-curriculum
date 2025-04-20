function identity<T>(value:T):T{
    return value;
}

identity<string>("hello")
identity<boolean>(true)
identity<number>(123)