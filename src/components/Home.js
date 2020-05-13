import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const add=()=>{
  return {type:"CHANGE",payload:{name:"xp"}};
}
class Home extends Component {
 state={
   name:'yes',
   extra:''
 }
 handleChange1=event=>{
   this.props.dispatch({type:"CHANGE",payload:"xp"});
   // dispatch takes action object as parameter
   this.setState({name:event.target.value});
   this.setState({extra:this.props.name});
   console.log(this.state);
   //this.props.dispatch({type:"CHANGE",payload:"xp"});

 };

  render(){
    //debugger;
    //check parameters in props
   return(
     <div>
     <input
     type="text"
     placeholder="Name"  onChange={this.handleChange1}/>
     <p>HEY</p>
     </div>
   );
       }
     }
const mapStateToProps=(state)=>{
  return {name:state.name}
  // update props from the global redux store(state.name)
}
//mapDispatchToProps is a way to perform dispatch operations
//mapDispatchToProps returns customized dispatch function
export default connect(mapStateToProps)(Home);
