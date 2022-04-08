import React, { useState } from "react";


function ListTodoComponent() {
    const [todo, setTodo] = useState([
      {
        id: 1,
        description: 'Learn React',
        done: false,
        targetDate: new Date()
      },
      {
        id: 2,
        description: 'Learn AWS',
        done: true,
        targetDate: new Date()
      },
      {
        id: 3,
        description: 'Learn Reat',
        done: false,
        targetDate: new Date()
      }
    ]); 
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