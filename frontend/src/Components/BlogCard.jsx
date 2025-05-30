import { Link } from "react-router-dom"

export function BlogCard({post}){

    let date = new Date(post.dateCreated)
    let stringDate = date.toString().slice(4,15)

    return(
        <Link to={`/readblog/${post._id}`} className="post">
            <h1>{post.title}</h1>
            <h2>{post.description}</h2>
            <p>{stringDate}</p>
        </Link>
    )
}