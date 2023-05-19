import React,{useState} from "react";

function Hook(){
    const[val,setVal]=useState('black')
    const handleClickButton=(type)=>{
        console.log("Clicked",type)
        if(type==="Blue"){
            setVal('Blue');
        }
        else if(type==="Green"){
            setVal('Green');
        }
        else if(type==="Red"){
            setVal('Red');
        }
    }
    return(
        <>
        <div>
        <button type="button" class="btn btn-primary" onClick={()=>handleClickButton("blue")}>Blue</button>
        </div>
        <div>
        <button type="button" class="btn btn-primary" onClick={()=>handleClickButton("green")}>Green</button>
        </div>
        <div>
        <button type="button" class="btn btn-primary" onClick={()=>handleClickButton("red")}>Red</button>
        </div>
        <h2>
            color:{val}
        </h2>
        </>
    )
}
export default Hook;