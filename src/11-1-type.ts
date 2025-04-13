type Status ='success'| 'error'| 'loading';
type ApiResponse={
    status :Status;
    data?:any;
    error?:string
}


function handleResponse (response:ApiResponse):void {
    if(response.status ==="success"){
        console.log("Data: ", response.data)
    }else{
        console.log("Error: ", response.error)

    }
}


handleResponse({status:"success",data:{
    id:1,
    name:'Alice'
}})


handleResponse({status:"error",error :"Something went wrong"})