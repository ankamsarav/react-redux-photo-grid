import React from "react";

import {Link} from "react-router-dom";

const PhotoGrid = (props) => {
    console.log("photogrid");
    console.log(props);
    return(
        <div>
            PhotoGrid
            <Link to="/view/123">Check</Link>
        </div>
    )
}

export default PhotoGrid;