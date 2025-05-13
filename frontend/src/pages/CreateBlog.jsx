import { useState } from "react"
import { createPost } from "../api"


export function CreateBlog(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")

    async function handleSubmit(){
        let submitObject = {
            title: title,
            description: description,
            content: content,
            author: null,
            dateCreated: new Date()
        }

        await createPost(submitObject)
    }

    return (
        <div className="createBlog">
            <form onSubmit={handleSubmit}>
                <label>Blog Post Title</label>
                <input onChange={(e) => setTitle(e.target.value)} name="title" maxLength={100} required/>

                <label>Blog Description</label>
                <input onChange={(e) => setDescription(e.target.value)} name="description" maxLength={200} required/>

                <label>Blog Content</label>
                <input onChange={(e) => setContent(e.target.value)} name="content" maxLength={5000} required/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}