import React, { Component, Suspense } from 'react';
// import axios from 'axios';

// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from "react-router-dom"
// import asyncComponent from '../../hoc/aysncComponent';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

// const AsyncNewpost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// })

const AsyncNewpost = React.lazy(() => import('./NewPost/NewPost'));


class Blog extends Component {
    state = {
        auth: true
    }
    // state = {
    //     posts: [],
    //     postselectorId: null,
    //     error: false
    // }

    // componentDidMount() {
    //     axios.get("http://jsonplaceholder.typicode.com/posts")
    //         .then(response => {
    //             const posts = response.data.slice(0, 4);
    //             const updatedpost = posts.map(post => {
    //                return {
    //                 ...post,
    //                 author: "Max"
    //                }
    //             })
    //             this.setState({posts : updatedpost})
    //             // console.log(response);
    //         })
    //         .catch(error => {
    //             this.setState({error: true})
    //         })
    // }

    // postSeelectedhandler = (id) => {
    //     this.setState({postselectorId: id})
    // }

    render () {
        // let posts = <p style={{textAlign: "center"}}>Something went wrong there</p>
        // if (this.state.error !== true) {
        //     posts = this.state.posts.map(post => {
        //         return <Post 
        //         key = {post.id} 
        //         title = {post.title} 
        //         author = {post.author}
        //         clicked = {() => this.postSeelectedhandler(post.id)}/>
        //     })
        // }

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact 
                                activeClassName='my-active' 
                                activeStyle={{color: "blueviolet", textDecoration: "underline"}}>Posts</NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit", //these two atrributes won't work coz they are not doing anything on here
                                search: "?quick-search=submit"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <section className="Posts">
                    {posts}
                </section> */}
                {/* <section>
                    <FullPost id = {this.state.postselectorId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
                {/* <Posts /> */}
                {/* <Route path='/' exact render = {() => console.log("some jsx code you want to render which in our case will be our page")}/> */}
                
                <Switch>
                    { this.state.auth ? 
                    <Route path='/new-post' render={() =>
                        (<Suspense fallback={<div>IzLoading...</div>}>
                            <AsyncNewpost />
                        </Suspense>)} 
                    /> : null }
                    <Route path='/posts'  component={Posts} />
                    <Route render={() => (<hi>Page not found</hi>)} />
                    {/* <Redirect from='/' to="/posts"/>  */}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;