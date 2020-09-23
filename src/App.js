import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';
import AddComment from './components/AddComment';

class App extends Component {
  state = {
  }
  constructor(props) {
    super(props)
    this.state = {comments: []}
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
    .then(response => response.json())
    .then(result => this.setState({comments: result}))
}

delComment = (id) => {
  console.log('id',id)
  fetch('https://jsonplaceholder.typicode.com/comments/1', {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(result => this.setState({comments: [...this.state.comments.filter(
      item => item.id !== id)]}))
}

addBody = (body) => {
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify({
      title: body,
      body: body,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(result => this.setState({comments: [...this.state.comments,result]}))
  .catch(e => console.log('erros',e))
}

  render() {
    return (
      <div className = 'App'>
        <header>
          <h1>Comments</h1>
          <AddComment addBody = {this.addBody}/>
        </header>
          <Comment comments = {this.state.comments} delComment = {this.delComment}/>
      </div>
    );
  }
}

export default App;
