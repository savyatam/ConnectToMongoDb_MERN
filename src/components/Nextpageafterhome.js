import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class NextPage extends Component {
 state={
   name:'yes',
   extra:''
 }
 handleChange1=event=>{
   this.setState({name:event.target.value});
   this.setState({extra:this.props.name});
   console.log(this.state);
 };

  render(){
    //debugger;
   return(
     <div>
     <input
     type="text"
     placeholder="Name"  onChange={this.handleChange1}/>
     <p>Hoi</p>
     </div>
   );
       }
     }
const mapStateToProps=(state)=>{
  return {name:state.name}
}

export default connect(mapStateToProps)(NextPage);
