import React from "react";
import { useParams,Link  } from "react-router-dom";

function WelcomeComponent() {
    let params = useParams();
      return <>
              <h1>Welcome!</h1>
              <div className="container">
              Welcome {params.name}. you can manager todos <Link to="/todos">here</Link>
  
              </div>
                            </>;
    
  }
  export default WelcomeComponent
