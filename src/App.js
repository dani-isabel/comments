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
  fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    .then(response => response.json())
    .then(result => this.setState({comments: result}))
    .then(json => console.log('componentDidMount',json))
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
  console.log('hola',body);
  const newComment = {
    id: 200,
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }

  this.setState({
    comments: [...this.state.comments,newComment]
  });

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
