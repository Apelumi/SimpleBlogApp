import { Component } from "react";

import Post from "../../../components/Post/Post"
import axios from "../../../axios"
import "./Posts.css"

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
        this.setState({postselectorId: id})
    }

    render(){
        let posts = <p style={{textAlign: "center"}}>Something went wrong there</p>
        if (this.state.error !== true) {
            posts = this.state.posts.map(post => {
                return <Post 
                key = {post.id} 
                title = {post.title} 
                author = {post.author}
                clicked = {() => this.postSeelectedhandler(post.id)}/>
            })
        }
        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;