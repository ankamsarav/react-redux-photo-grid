import React from "react";
import Photo from "../components/photo/Photo";
import Comments from "../components/comments/Comments";


const SinglePhoto = (props) => {
    const postId = props.location.pathname.split("/")[2];
    const i = props.posts.findIndex(((post) => post.code === postId));
    const post = props.posts[i];
    console.log(post);
    return(
        <div className="single-photo">
            <Photo key={i} i={i} post={post} {...props}/>
            <Comments />
        </div>
    )
}

export default SinglePhoto;