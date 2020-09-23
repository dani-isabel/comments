import React, { Component } from 'react'

export default class AddComponent extends Component {
    getStyleTextInput = () => {
        return {
            width: '30%',
            borderRadius: '10px',
            height: '25px',
            textAlign: 'center'
        }
    }
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
                <input style = {this.getStyleTextInput()} type= 'text' name= 'body' placeholder= 'Add comment' onChange= {this.handleChange}></input>
                <input className= "submit" type="Submit" value="Submit"/>
            </form>
        )
    }
}
