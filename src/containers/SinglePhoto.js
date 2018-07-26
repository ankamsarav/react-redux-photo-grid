import React from "react";
import Photo from "../components/photo/Photo";
import Comments from "../components/comments/Comments";


const SinglePhoto = (props) => {
    const postId = props.location.pathname.split("/")[2];
    const i = props.posts.findIndex(((post) => post.code === postId));
    const post = props.posts[i];
    const postComments = props.comments[postId] || [];
    
    return(
        <div className="single-photo">
            <Photo key={i} i={i} post={post} {...props}/>
            <Comments postComments= {postComments} postId={postId} {...props}/>
        </div>
    )
}

export default SinglePhoto;