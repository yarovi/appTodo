import React, { useEffect, useState } from "react";
import {DeleteTodo, TodoDataService }from "./TodoDataService";
import AuthenticationService from "./AuthenticationService";
import {useNavigate   } from "react-router-dom";
import moment from "moment";


function ListTodoComponent() {
    let navigation = useNavigate();
    let username = AuthenticationService.loggedUserLoggedIn();
    const [todo, setTodo] = useState([]); 
    const [message,SetMessage]=useState(null);
    let isMounted=true;
    
    useEffect(()=>{
      TodoDataService(username)
        .then((res) => {
        setTodo(res.data)
      });
      return () => {
        isMounted=false;
      }
    },[todo]);
    
    function deleteClicked (id) {
      let username = AuthenticationService.loggedUserLoggedIn();
      console.log('data a eliminar es :',id + ' '+ username);
      DeleteTodo(username,id).then(res =>{
        SetMessage(`Delete of Todo ${id} Successful.`);
      })
    };
    function updateClicked (id) {

      navigation(`/todos/${id}`);
     
    };

    function addTodo(){
      navigation(`/todos/-1`);
    }
      return <div>
        <h1>List Todo</h1>
        {message && <div className="alert alert-success">
          {message}
        </div>}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Completed?</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
            {
                  todo.map((t,i) =>(
              <tr key={i}>
                
                  <td >{t.id}</td>
                  <td>{t.description}</td>
                  <td>{t.done.toString()}</td>
                  <td>{moment(t.targetDate).format('YYYY-MM-DD')}</td>
                  <td><button className="btn btn-success" onClick={() => updateClicked(t.id)}>Update</button></td>
                  <td><button className="btn btn-warning" onClick={() => deleteClicked(t.id)}>Delete</button></td>
              </tr>
  
                  ))
                }
            </tbody>
          </table>
          <div className="row">
                <button className="btn btn-success" onClick={addTodo}>Add</button>
          </div>
        </div>
      </div>;
    
  }
  export default ListTodoComponent