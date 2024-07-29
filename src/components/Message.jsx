import { useState } from "react"

function Message(){
const [hello,sethello]= useState();
return(
    <div>
        <h1>hello jeph</h1>
        <input type="text" placeholder="enter any message" value={hello}
    
        onChange={(e)=> sethello(e.target.value)}/>
        <p>welcome {hello}</p>    

    </div>
)
}
export default Message