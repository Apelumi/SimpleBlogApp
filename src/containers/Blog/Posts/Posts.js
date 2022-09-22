import { Component } from "react";

import Post from "../../../components/Post/Post"
import axios from "../../../axios"
import "./Posts.css"
import { Route } from "react-router-dom"
import FullPost from "../FullPost/FullPost";
// import post from "../../../components/Post/Post";
// import { Link } from "react-router-dom"

class Posts extends Component{
    state = {
        posts: [],
        // postselectorId: null,
        // error: false
    }

    componentDidMount() {
        console.log(this.props);
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedpost = posts.map(post => {
                   return {
                    ...post,
                    author: "Max"
                   }
                })
                this.setState({posts : updatedpost})
                // console.log(response);
            })
            .catch(error => {
                // this.setState({error: true})
                console.log(error);
            })
    }

    postSeelectedhandler = (id) => {
        this.props.history.push({pathname: "/posts/" + id})
        // this.props.history.push("/" + id)
        // this.setState({postselectorId: id})
    }

    render(){
        let posts = <p style={{textAlign: "center"}}>Something went wrong there</p>
        if (this.state.error !== true) {
            posts = this.state.posts.map(post => {
                return (
                // <Link to={'/posts' + post.id} key = {post.id} >
                    <Post 
                    key = {post.id}
                    title = {post.title} 
                    author = {post.author}
                    clicked = {() => this.postSeelectedhandler(post.id)}/>
                // </Link> 
                );
            })
        }
        return(
            <div>
                <section className="Posts">
                {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />    
            </div>
            
        );
    }
}

export default Posts;