import React, { useState } from "react";
import { useEffect } from "react";
import './posts.css'

function Post() {
    const [available_posts , getPost] = useState([])
    useEffect(() =>{
        fetch(`https://lets-connect-bryn.onrender.com/posts`)
        .then(r => r.json())
        .then(posts => getPost(posts))
    }, [])

    const filtered_output = available_posts.filter((post_filter) =>{
        if(post_filter.userName === filter_value){
            return(post_filter)
        }
        else if(post_filter.userName !== filter_value){
            return(available_posts)
        }
    })

    //console.log(available_posts)
    return(
        <div id="post_container">
            {filtered_output.map((one_post) =>{
                const {media, userName, caption, dislike, likes, id ,comment} = one_post
                return(
                    <div className="card" key={id}>
                        <p>{userName}</p>
                        <img src={media} alt={userName}/>
                        <p id="caption">
                        <span>caption</span>
                        <br />
                        {caption}</p>
                        <p><button>likes</button> <span>{likes}  comment </span><input type="text" /> <button>Dislike</button> <span>{dislike}</span></p>
                        <p><button>send</button></p>
                        <p>{comment.map((comment) =>{
                            return(
                                <p key={comment}>
                                {comment}
                                </p>
                            )
                        })}</p>
                    </div>
                )
            })}
        </div>        
    )
}

export default Post;