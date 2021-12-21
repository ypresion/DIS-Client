import React from "react";
import Papers from "./Papers";

class HomePage extends React.Component {

 render() {
     return (
         <Papers randomPaper={true}/>
     )
  }
}

export default HomePage;