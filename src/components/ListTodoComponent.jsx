import React, { useEffect, useState } from "react";
import TodoDataService from "./TodoDataService";
import { useParams  } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

function ListTodoComponent() {
    let username = AuthenticationService.loggedUserLoggedIn();
    const [todo, setTodo] = useState([ ]); 
    console.log('username:',username)
    useEffect(()=>{
      TodoDataService(username)
        .then((res) => {
        setTodo(res.data)
      });
    },[]);
    
      return <div>
        <h1>List Todo</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Completed?</th>
              </tr>
            </thead>
            <tbody>
            {
                  todo.map((t,i) =>(
              <tr key={i}>
                
                  <td >{t.id}</td>
                  <td>{t.description}</td>
                  <td>{t.done.toString()}</td>
                  <td>{t.targetDate.toString()}</td>
              </tr>
  
                  ))
                }
            </tbody>
          </table>
        </div>
      </div>;
    
  }
  export default ListTodoComponent