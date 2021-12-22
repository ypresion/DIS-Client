import React from "react";
   
class SearchBox extends React.Component {

    render() {
           return (
               <label>
                   {this.props.label}
                   <input type='text' placeholder='search' value={this.props.search} onChange={this.props.handleSearch} />
               </label>
           )
       }
   }
   
export default SearchBox;