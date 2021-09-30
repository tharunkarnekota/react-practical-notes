import React from 'react'

class Container extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      show: true,
      count: 0
    };
  }

  delHeader = () =>{
    this.setState({show: false});
  }

  componentDidMount(){
    console.log("ComponentDidMount method");
  }

  componentDidUpdate(){
    console.log("compoentDidUpdate method");
  }

  
  render() {
    let myheader;
    if (this.state.show){
      myheader = <Child />;
    };
    return (
      <div>
        <center>
          {myheader}
          <button type="button" onClick={this.delHeader}>Delete Header</button><hr /><hr />
          <h3>count : {this.state.count}</h3>
          <button type="button" onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        </center>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount(){
    console.log("componentwillUnmount method")
  }
  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

export default Container;
