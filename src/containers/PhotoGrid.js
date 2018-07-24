import React, {Component} from "react";

import {Link} from "react-router-dom";
import Photo from "../components/photo/Photo";


class PhotoGrid extends Component {
    render() {
        console.log("photogrid");
        console.log(this.props);
        return(
            <div>
                {
                    this.props.posts.map((post, i)=> <Photo key={i} i={i} post={post} {...this.props}/>)
                }
            </div>
        )
    }
}

// const PhotoGrid = (props) => {
    // console.log("photogrid");
    // console.log(props);
//     return(
//         <div>
//             PhotoGrid
//             <Link to="/view/123">Check</Link>
//         </div>
//     )
// }

export default PhotoGrid;