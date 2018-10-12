import React, { Component } from 'react';
// import { Route, Link, Redirect } from 'react-router-dom';
//NavLink can be styled by adding active
import { Route, NavLink, Switch,Redirect } from 'react-router-dom';

import './Blog.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

//FOR LAZY LOADING LL
// import asyncComponent from './../../hoc/asyncComponent';
// const AsyncNewPost=asyncComponent(()=>{
//     console.log('LAZY LOADING')
//     return import('./NewPost/NewPost')
// })


class Blog extends Component {

    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* a reload all application to rerender only the ne component use Link */}

                            {/* <li><a href='/'>Home</a></li>
                            <li><a href='/new-post'>New Post</a></li> */}
                            {/* Link 'to=' prevent default reloading */}
                            {/* react router treat path as prefix to distinguish which is active we need to add exact
                            or we can add activeClassName  or use activeStyle={}*/}
                            <li><NavLink
                                to='/posts/'                                
                                activeClassName='active'
                                activeStyle={{ textDecoration: 'underline' }} >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post'
                            }} exact>New Post</NavLink></li>
                            {/* turn absolute path to relative path */}
                            {/* pathname:this.props.match.url+'/new-post' */}
                        </ul>
                    </nav>
                </header>
                
                <Switch>                  
                    <Route path='/new-post' component={NewPost} />
                    
                    {/* LL */}
                    {/* <Route path='/new-post' component={AsyncNewPost} /> */}

                    <Route path='/posts'  component={Posts} />
                    {/* <Route path='/'  component={Posts} /> */}
                    <Redirect from='/' to='/posts'/>
                
                </Switch>

            </div>
        );
    }
}

export default Blog;