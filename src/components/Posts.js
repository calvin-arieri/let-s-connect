import React, { useState } from "react";
import { useEffect } from "react";

function Post() {
    const [available_posts , getPost] = useState([])
    useEffect(() =>{
        fetch(`https://lets-connect-bryn.onrender.com/posts`)
        .then(r => r.json())
        .then(posts => getPost(posts))
    }, [])

    //console.log(available_posts)
    return(
        <div>
            {available_posts.map((one_post) =>{
                const {media, userName, caption, dislike, like} = one_post
                return(
                    <div className="card">
                        <p>{userName}</p>
                        <img src={media} alt={userName}/>
                        <p>{caption}</p>
                        <p><span>{like}</span><span>{dislike}</span></p>
                    </div>
                )
            })}
        </div>        
    )
}

export default Post;