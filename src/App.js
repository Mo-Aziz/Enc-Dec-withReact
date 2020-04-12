 import React, { Component } from"react"

 class App extends Component{
constructor(){
  super()
  this.state ={
    count: 0
  }
//Binding this
  this.handleIncrement= this.handleIncrement.bind(this)
  this.handleDecrement=this.handleDecrement.bind(this)

}
 handleIncrement(){
this.setState(prevState => {return{count: prevState.count + 1}})
 }
// handl decriment.
handleDecrement(){
  this.setState(prevState => {return{count: prevState.count - 1}})
}
render(){
  return(
    <div>
<h1>{this.state.count}</h1>
<button onClick={this.handleIncrement}>increase count </button>
<br />
<button onClick={this.handleDecrement}> decrease count</button>
       </div>
  )
}
 }

 export default App