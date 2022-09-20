import React, { Component } from 'react';
// import axios from 'axios';

// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from "react-router-dom"
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';


class Blog extends Component {
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
                                to="/" 
                                exact 
                                activeClassName='my-active' 
                                activeStyle={{color: "blueviolet", textDecoration: "underline"}}>Home</NavLink>
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
                    <Route path='/' exact component={Posts} />
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts/:id' component={FullPost} />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;