import { verifyUser } from "../api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export function Login(){

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        let response = await verifyUser(user)
        if(response){
            sessionStorage.setItem("User", response)
            axios.defaults.headers.common["Authorization"] = `Bearer ${response}`
            navigate("/home")
        } else{
            alert("Login Failed")
        }
        
    }

    return (
        <div className="createUserForm">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} >
            <input placeholder={"Email"} onChange={handleChange} name="email" required maxLength={50}/>
            <input placeholder={"Password"} onChange={handleChange} name="password" required maxLength={20}/>
            <button type="submit">Login</button>
            </form>
        </div>
        
    )
}