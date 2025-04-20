type X = {
    id: number;
  };
  
  type Y = {
    created: Date;
  };
  



  function showInfo(data:X&Y):void{
    console.log(`ID: ${data.id} ,Created:${data.created}`)
  }


  showInfo({
    id:123,
    created:new Date()
  })