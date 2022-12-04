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
  }