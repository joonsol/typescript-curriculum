let user: any = { name: "Tom" };

console.log(user.age.toFixed(2)); // 런타임 오류 발생! age는 undefined인데도 타입 체크가 되지 않음
