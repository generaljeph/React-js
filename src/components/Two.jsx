import React from "react";
import { usestate } from React

function Two(){
    const [hy,sethy] = usestate();
    return(
        <div>
        <h1>hello bld</h1>
        <input type="text" placeholder="enter your firstname" value={hy}
        onChange={(e)=> sethy(e.target.value)}/>
          <input type="text" placeholder="enter your lasttname" value={hy}
        onChange={(e)=> sethy(e.target.value)}/>
        <p>welcome</p>
        </div>
    )

}
export default Two