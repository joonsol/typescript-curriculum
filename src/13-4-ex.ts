type A = {
    name: string;
    age: number;
  };
  
  type B = {
    id: number;
    group: string;
  };


  type AB = A & B;


  const user:AB ={
    name:'Tom',
    age:25,
    id:1,
    group:'admin'
  }


  