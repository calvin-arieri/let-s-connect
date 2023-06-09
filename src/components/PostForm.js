import React, { useState } from "react";
import './postForm.css'

function PostForm({incoming_name, incoming_Id}) {

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
            id: incoming_Id,
            userName : incoming_name,            
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
                <label>Enter image link</label><br />
                <input type="text" onChange={getValue} required /><br /><br />
                <label>Your caption</label>
                <input type="text" onChange={getValue2} required /><br /><br />
                <button onClick={posting}>Post</button>
            </form>
        </div>
    )
}

export default PostForm;