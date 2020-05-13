const initialstate={
  name:'previous'
}
 const rootReducer=(state=initialstate,action)=>{
   if(action.type=="CHANGE")
   state.name=action.payload;
   console.log(state.name);
  return state;
}

export default rootReducer
