type Person={name:string}
type Account ={emial:string}


type UserInfo =Person  & Account


const info:UserInfo ={
    name:'kim',
    emial:'eee@exam.com'
}