
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName); // 출력: John Doe


function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  let userName: string = "Alice";
  console.log(greet(userName)); // 출력: Hello, Alice!
  