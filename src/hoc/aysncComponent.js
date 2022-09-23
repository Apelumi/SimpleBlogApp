// this app allows us to load data asynchronously

import { Component } from "react"

const asyncComponent = (importComponent) => {
    return class extends Component{
        state = {
            component: null
        }

        componentDidMount (){
            importComponent()
            .then(cmp => {
                this.setState({component: cmp.default})
            })
        }
        render(){
            const Constant = this.state.component;

            return Constant? <Constant {...this.props} />: null;
        }
    }
}

export default asyncComponent;