import React, {Component} from "react";
import { Link } from 'react-router-dom';
import './Comments.scss';

class Comments extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const {postId} = this.props;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    render() {
        const {postComments, postId} = this.props;
        return (
            <div className="comments">
                {
                    postComments.map((comment ,i)=> {
                        return (
                            <div className="comment" key={i}>
                                <p>
                                    <strong>{comment.user}</strong>
                                    {comment.text}
                                    <button onClick={this.props.removeComment.bind(null, postId, i)} className="remove-comment">&times;</button>
                                </p>
                            </div>
                        )
                    })
                }
    
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
}

export default Comments;
