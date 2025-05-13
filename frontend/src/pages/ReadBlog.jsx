import { getPost } from "../api"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"


export function ReadBlog(){

    const [post, setPost] = useState({})

    let params = useParams()
    let id = params.id
    const navigate = useNavigate()
    

    useEffect(() => {
        async function loadPost(){
            let data = await getPost(id)
            let date = new Date(data.dateCreated)
            data.dateCreated = date.toString().slice(4,15)
            setPost(data)
        }

        loadPost()
    }, [])

    return (
        <div className="postPage">
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>{post.title}</h1>
            <h2>{post.description}</h2>
            <h3>{post.dateCreated}</h3>
            <p>{post.content}</p>
        </div>
    )
}