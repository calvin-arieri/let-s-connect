import React, { useState } from "react";
import './postForm.css'

function PostForm() {
    const [file_upload, setUpload] = useState("")
    const [caption, setCaption] = useState("")
    function getValue(event){
        setUpload(event.target.value)
    }
    function getValue2(event){
        setCaption(event.target.value)        
    }
    function posting(event) {
        event.preventDefault()
        const postInfo= {
            userName : "",            
            caption : caption,
            media : file_upload,
            comment: [],
            likes: 0,
            dislike: 0,
        };

        fetch("https://lets-connect-bryn.onrender.com/posts", {
            method : "POST",
            headers :{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postInfo),
        })
        .then((res) => res.json())
        .then((posts) => console.log(posts))
    }

    return(
        <div className="card" style={{background:"pink"}}>
            <form >
                <input type="file" onChange={getValue} required /><br /><br />
                <input type="text" onChange={getValue2} required /><br /><br />
                <button onClick={posting}>Post</button>
            </form>
        </div>
    )
}

export default PostForm;