
import React from "react";
import { useParams  } from "react-router-dom";


function TodoComponent(){
    let params = useParams();
    return <>
            Component-
            <div className="container">
             {params.id}
            </div>
                          </>;
}

export default TodoComponent