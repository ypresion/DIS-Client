import React from "react";
  
/**
 * A footer component.
 * 
 * It will render a footer containing author's details.
 * 
 * @author Sylwia Krupa | w18015597
 */
class NavBar extends React.Component {

    render() {
           return (
                <footer className="page-footer bg-light fixed-bottom font-small blue py-2 mt-5 pt-4">
                    <div className="footer-copyright container-fluid text-center">
                        <p>Copyright Sylwia Krupa | w18015597</p>
                        <p>This website is a part of university coursework.</p>
                    </div>
                </footer>
           )
       }
   }
   
export default NavBar;