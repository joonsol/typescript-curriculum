type Info = {
    name: string;
  };
  
  type Role = {
    role: string;
  };

  type User =Info & Role

  function print(user:User):void{
    console.log(`${user.name} / ${user.role}`)
  }


  print({
    name:'Alice',
    role:'text'
  })