import React, { useState } from "react";
import { useEffect } from "react";
import './posts.css'

function Post() {
    const [available_posts , getPost] = useState([])
    const [user_comment, updatedComment] = useState("")
    const [increase_likes, update_likes] = useState(0)
    const [decrease_likes, update_dislikes] = useState(0)

    const url =`https://lets-connect-bryn.onrender.com/posts`
    useEffect(() =>{
        fetch(url)
        .then(r => r.json())
        .then(posts => getPost(posts))
    }, [])
    const filter_value = "calvin_arieri"

    const filtered_output = available_posts.filter((post_filter) =>{
        if(post_filter.userName === filter_value){
            return(post_filter)
        }
        else if(post_filter.userName !== filter_value){
            return(available_posts)
        }
    })
    function get_comment(event) {
        updatedComment(event.target.value)
    }

    function handle_patchComment(event) {
        const new_comment={
            name:"peter james",
            say: user_comment
        }

        const updated_Comment_patch =[ new_comment]

        console.log(updated_Comment_patch)
    }
    //console.log(available_posts)
    return(
        <div className="post_container" id="post">
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
                        <p><button>likes</button> <span>{likes}  comment </span><input type="text" onChange={get_comment}/> <button>Dislike</button> <span>{dislike}</span></p>
                        <p><button onClick={handle_patchComment}>send</button></p>
                        <p>{comment.map((comment) =>{
                            return(
                                <p key={comment.say}>
                                <strong>{comment.name}</strong>:{"  "}
                                {comment.say}
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