import React , { useState }from "react";
function Test(){
    const [hello,sethello] = useState();
    const [hi,sethi] =useState();
    return(
        <div>
        <h1>hello bld</h1>
        <input type="text"
        placeholder="enter your firstname" 
        value={hello}
        onChange={(e)=> sethello(e.target.value)}/>

          <input type="text"
          placeholder="enter your lasttname"
          value={hi}
        onChange={(e)=> sethi(e.target.value)}/>
        <p>{hello} {hi}</p>
        </div>
    )
}
export default Test