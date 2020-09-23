import React, { Component } from 'react'

export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }
    }

    handleChange = (event) => this.setState({body:event.target.value});
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addBody(this.state.body);
        this.setState({body:''})
    };
    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
                <input type= 'text' name= 'body' placeholder= 'Add comment' onChange= {this.handleChange}></input>
                <input type="Submit" value="Submit"/>
            </form>
        )
    }
}
