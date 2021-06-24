import './App.css';
import {Component} from 'react'
class App extends Component {
    
  state = {
    posts: [{
      id: 1,
      title: 'O titulo 1',
      body: 'O corpo1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
        }, 
        {
          id: 3,
          title: 'O titulo 3',
          body: 'O corpo 3'
          }
        ],
        counter: 0
    
  }

  timeoutUpdate = null

  componentDidMount(){  
      this.handleSetTimeOut() 

    
  }
  componentDidUpdate(){
    this.handleSetTimeOut()
  }
  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate)
  }
  handleSetTimeOut = () => {
    const {posts, counter} = this.state
    posts[0].title = 'o título mudou'

    this.timeoutUpdate = setTimeout(() =>{
      this.setState({posts, counter: counter +1})
    }, 1500)
  }

  render(){
    const {posts, counter} = this.state
    return(
      <div className= 'App'>
        <p> {counter}</p>
        {posts.map(posts =>
        <div key={posts.id}>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
          </div> 
          )}
      </div>
      
    )

    
  }
}

export default App;
