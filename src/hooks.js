import React,{useState} from "react";

function Hooks(){
    // const[val,setVal]=useState()
    const[num,setNum]=useState(0)
    const handleClickButtoni=(sel)=>{
        console.log("Clicked",sel)
        if(sel==='incr'){
            setNum(num+1)
        }
    }
    const handleClickButtond=(sel)=>{
        console.log("Clicked",sel)
        if(sel==='decr' && num>0){
            setNum(num-1);
        }
    }
    return(
        <>
        <div>
        <button type="button" class="btn btn-primary" onClick={()=>handleClickButtoni("incr")}>Increment</button>
        </div>
        <div>
        <button type="button" class="btn btn-primary" onClick={()=>handleClickButtond("decr")}>Decrement</button>
        </div>
        <h2>
            val:{num>0?num:0}
        </h2>
        </>
    )
}

export default Hooks;