import React,{useState} from "react";
import './login.css'


function Login(){
  const[login,setLogin]=useState()
  const handleLogin=()=>{
    console.log("Clicked",login)
    let uname= localStorage.getItem('uname')
    let email= localStorage.getItem('email')
    let password= localStorage.getItem('password')
    if(uname===uname && email===email && password===password){
      alert('Login is Successfully')
    }
    else{
      alert('login Failed')
    }
  }
  //for username
  const [uname,setUname]= useState()
  const handleUname=(e)=>{
    setUname(e.target.value);
      console.log(e.target.value);
  }
  //for email
  const [email,setEmail]= useState()
  const handleEmail=(e)=>{
    setEmail(e.target.value);
      console.log(e.target.value);
  }
  //for password
  const [password,setPassword]= useState()
  const handlePassword=(e)=>{
    setPassword(e.target.value);
      console.log(e.target.value);
  }
    return(
        <>
        <div class="login">
        <div class="container">
        <form>
            <h3>Welcome</h3>
            {/* <p>Log in to eBook Author to continue to website.</p> */}
            <div class="form-outline mb-2">
            <ion-icon name="person-outline"></ion-icon>
                <label class="form-label" for="inputuname">Username</label>
                <input type="text" id="inputuname" class="form-control"  onChange={(e)=>handleUname(e)}/>
              </div>
              <div class="form-outline mb-2">
              <ion-icon name="mail-outline"></ion-icon>
                <label class="form-label" for="inputemail">Email</label>
                <input type="email" id="inputemail" class="form-control" onChange={(e)=>handleEmail(e)}/>
              </div>
              <div class="form-outline mb-2">
              <ion-icon name="lock-closed-outline"></ion-icon>
                <label class="form-label" for="inputpw">Password</label>
                <input type="password" id="inputpw" class="form-control" onChange={(e)=>handlePassword(e)}/>
              </div>
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example31"  />
                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                  </div>
                </div>
                <div class="col">

                    <a href="signup.html">Forgot password?</a>
                  </div>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button" onClick={()=>handleLogin()}>Login</button>
                  </div>
                <div class="text-center">
                    <p>Don't have an account? <a href="#">Signup Here!!</a></p>
                </div>
          </form>
    </div>
        </div>
        </>
    )
}
export default Login