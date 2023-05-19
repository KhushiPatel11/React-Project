import React,{useState} from "react";
import Login from "./login";
import './sign.css';

function Sign(props){
  console.log(props)
  const handleLogin=()=>{
    props.isLogin()
  }
  const[submit,setSubmit]=useState()
  const handleSubmit=()=>{
    console.log("Clicked",submit)
    localStorage.setItem('username',uname)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
}
    //for firstname
    const [fname,setFname]= useState()
    const handleFname=(e)=>{
      setFname(e.target.value);
        console.log(e.target.value);
    }
    //for lastname
    const [lname,setLname]= useState()
    const handleLname=(e)=>{
      setLname(e.target.value);
        console.log(e.target.value);
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
    //for confirm password
    const [conpw,setConpw]= useState()
    const handleConpw=(e)=>{
      setConpw(e.target.value);
        console.log(e.target.value);
    }
    //for  address
    const [address,setAddress]= useState()
    const handleAddress=(e)=>{
      setAddress(e.target.value);
      console.log(e.target.value);
    }
    //for final address
    const [fadd,setFadd]= useState()
    const handleFadd=(e)=>{
      setFadd(e.target.value);
      console.log(e.target.value);
    }
    //for contact number
    const [conum,setConum]= useState()
    const handleConum=(e)=>{
      setConum(e.target.value);
        console.log(e.target.value);
    }
    //for dob
    const [dob,setDob]= useState()
    const handleDob=(e)=>{
      setDob(e.target.value);
        console.log(e.target.value);
    }
    //for state
    const [state,setState]= useState()
    const handleState=(e)=>{
      setState(e.target.value);
        console.log(e.target.value);
    }
    //for city
    const [city,setCity]= useState()
    const handleCity=(e)=>{
      setCity(e.target.value);
        console.log(e.target.value);
    }
    //for zip
    const [zip,setZip]= useState()
    const handleZip=(e)=>{
      setZip(e.target.value);
        console.log(e.target.value);
    }
    //for checkbox
    const [chbox,setChbox]= useState()
    const handleChbox=(e)=>{
      setChbox(e.target.value);
        console.log(e.target.value);
    }
    return (
        <>
        <div  classs="signup">
        <div class=" container1 ">
    <div class="row">
      <div class="col-md-6">
        
      </div>
        <div class="col-md-6">
          <form class="row g-3">
            <h2>SIGN UP</h2>
            <div class="col-md-6">
              <label for="inputFname" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="inputFname"  onChange={(e)=>handleFname(e)}/>
            </div>
            <div class="col-md-6">
              <label for="inputLname" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="inputLname" onChange={(e)=>handleLname(e)}/>
            </div>
            <div class="col-md-6">
            {/* <ion-icon name="person-outline"></ion-icon> */}
              <label for="inputUname" class="form-label">Username</label>
              <input type="text" class="form-control" id="inputUname" onChange={(e)=>handleUname(e)}/>
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4" onChange={(e)=>handleEmail(e)}/>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword4" onChange={(e)=>handlePassword(e)}/>
            </div>
            <div class="col-md-6">
              <label for="inputPassword" class="form-label">Confirm Password</label>
              <input type="password" class="form-control" id="inputPassword" onChange={(e)=>handleConpw(e)}/>
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Address</label>
              <input type="text" class="form-control" id="inputAddress"  onChange={(e)=>handleAddress(e)}/>
            </div>
            {/* <div class="col-12">
              <label for="inputAddress1" class="form-label">Final Address</label>
              <input type="text" class="form-control" id="inputAddress1"  onChange={(e)=>handleFadd(e)}/>
            </div> */}
            <div class="col-6">
              <label for="connum" class="form-label">Contact Number</label>
              <input type="number" class="form-control" id="connum" onChange={(e)=>handleConum(e)}/>
            </div>
            <div class="col-6">
              <label for="dob" class="form-label">Date of Birth</label>
              <input type="date" class="form-control" id="dob" onChange={(e)=>handleDob(e)}/>
            </div>
            <div class="col-md-6">
              <label for="inputcountry" class="form-label">Country</label>
              <select id="inputcountry" class="form-select">
                <option selected>Choose...</option>
                <option value="india">India</option>
                <option value="japan">Japan</option>
                <option value="canada">Canada</option>
                <option value="russia">Russia</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="inputstate" class="form-label">State</label>
              <input type="text" class="form-control" id="inputCity"  onChange={(e)=>handleState(e)}/>
            </div>
            <div class="col-md-6">
              <label for="inputcity" class="form-label">City</label>
              <input type="text" class="form-control" id="inputCity"  onChange={(e)=>handleCity(e)}/>
            </div>
            <div class="col-md-6">
              <label for="inputZip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="inputZip"  onChange={(e)=>handleZip(e)}/>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" onChange={(e)=>handleChbox(e)}/>
                <label class="form-check-label" for="gridCheck">
                  I have read and accepted terms and conditions.
                </label>
              </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-primary" type="button" onClick={()=>handleSubmit()}>Submit</button>
            </div>
            <label class="extra-line text-center"/>
              <label>Already have an account?</label>
              <button type="button" class="btn btn-secondary" onClick={handleLogin}>Login Here!</button>
          </form>
        </div>
    </div>
  </div>
  </div>
        </>
    )
}
export default Sign;