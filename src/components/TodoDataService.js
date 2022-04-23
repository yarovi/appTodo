
import axios from "axios"
const TodoDataService=(name)=>{

        return axios.get(`http://localhost:8080/users/${name}/todos`);
}
const DeleteTodo=(name,id)=>{
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
}
const  RetriveTodo= async(name,id) =>{

    return await axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
}

const  UpdateTodo= async(name,id,todo) =>{

    return await axios.put(`http://localhost:8080/users/${name}/todos/${id}`,todo);
}

const  NewTodo= async(name,todo) =>{

    return await axios.post(`http://localhost:8080/users/${name}/todos`,todo);
}
export {TodoDataService,DeleteTodo,RetriveTodo,UpdateTodo,NewTodo}