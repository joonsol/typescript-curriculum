type Person={name:string}
type Employee = {employeeId:number}

type Staff =Person & Employee;

const worker :Staff ={
    name:'Alice',
    employeeId:123
}


