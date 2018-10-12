import React from 'react';
// import {withRouter} from 'react-router-dom';
import './Post.module.css';


const post = (props) => {
    // to get props from nearest parent component we need to use withRouter
    // console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    ); 
}
    
// export default withRouter(post);
export default post;