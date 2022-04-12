
import axios from "axios"
function TodoDataService(name){

        return axios.get(`http://localhost:8080/users/${name}/todos`);
}
function DeleteTodo(name,id){
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
}

export {TodoDataService,DeleteTodo}