interface Person {
    name:string
}

interface Employee extends Person {
    emplyeeId :number
}

const emp:Employee={
    name:'Jin',
    emplyeeId:101
}