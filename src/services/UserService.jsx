import axios from "axios"
export class UserService{
    static serverUrL='https://jsonplaceholder.typicode.com/users'
static getALluser(){
    return axios.get(this.serverUrL)
}
}