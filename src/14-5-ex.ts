function wrap<T>(value: T): T {
    return value;
  }
  
  const result1 = wrap("hello"); // string
  const result2 = wrap(123);     // number
  