import React from "react";
import { Link } from 'react-router-dom';

   
class NavBar extends React.Component {

    render() {
           return (
                <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="papers">Papers</Link></li>
                    <li><Link to="authors">Authors</Link></li>
                    </ul>
                </nav>
           )
       }
   }
   
export default NavBar;