
import axios from "axios"
function TodoDataService(name){


        return axios.get(`http://localhost:8080/users/${name}/todos`);
}
export default TodoDataService