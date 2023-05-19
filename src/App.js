import Sign from './sign';
import Login from './login';
import Hook from './hook';
import Hooks from './hooks';
import { useState } from 'react';



function App() {
  const[isSign,setIsSign]=useState(true)
  const isLogin=()=>{
    setIsSign(false)
  }
  // const[login,setIsLogin]=useState(true)
  // const Sign=()=>{
  //   setIsLogin(false)
  // }
  return (
    <div className="App">
    {isSign?<Sign isLogin={isLogin}/>:(<Login/>)}
    {/* {Login?<Login Sign={Sign}/>:(<Sign/>)} */}
    {/* <Hook/>
    <Hooks/> */}
    </div>
  );
}
export default App;

