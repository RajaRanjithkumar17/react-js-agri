

export const taskarr = {
    tasks: [],
  };

  export const stateReducer = (state, action) => {
    console.log("action", state, action);
  
  
  //log in
     if (action.type === "islogon") {
    console.log("action", state, action);
    return { ...state, islogin:!state.islogin}
     
    }

    else if (action.type === "isselected") {
      console.log("action", state, action);
      return {
        ...state,
          tasks:state.tasks.map((item)=>{
              if(item.id === action.payload){
                  return { ...item, selected:!item.selected}
              }
              return item;
          })
      };
    }

   

    else if(action.type==="addOrder"){
      return{
        ...state,
        tasks:action.payload,
      };

    }
    else if(action.type==="getOrder"){
      return{
        ...state,
        tasks:action.payload,
      };

    }

  }