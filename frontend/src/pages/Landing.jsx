import { CreateUser } from "../Components/CreateUser"
import { useState } from "react"
import { Login } from "../Components/Login"

export function Landing(){
    
    // 0-> Login
    // 1-> Create
    const [view, setView] = useState(0)
    
    return (

        <>
            {!view ? 
            <> 
                <Login/>
                <button onClick={() => setView(!view)}>Create New Account</button>
            </>
             : 
             <>
                <CreateUser/>
                <button onClick={() => setView(!view)}>Already Have an Account</button>
             </>}
             
        </>
    )
}