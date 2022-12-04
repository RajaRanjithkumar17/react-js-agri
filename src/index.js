import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Loginform from "./components/Loginform";
import Home from "./components/Home";
import { stateContext} from './context/context';
import { stateReducer ,taskarr} from './context/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './components/Order';


function Routecomponents(){
  const [state, dispatch] = useReducer(stateReducer,taskarr);
  return(
    
    <stateContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      {
        state?.islogin?<Routes>
        
      <Route path='/' element={<Home />}></Route>
      <Route path='*' element={<Navigate to ="/" />}></Route>
 
      </Routes>:<Routes>
      <Route path='order' element={<Order />}></Route>
      <Route path='/loginform' element={<Loginform />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='*' element={<Navigate to ="/" />}></Route>

      </Routes>
       }
    </BrowserRouter>
    </stateContext.Provider>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Routecomponents />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
