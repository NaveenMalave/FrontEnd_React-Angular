import { render } from "@testing-library/react"
import { Component } from "react";
import './AppContent.css';

class Counter extends Component{
    // constructor(){
    //     super();
    //     this.count=0;
    // }
    state={count:0};
    increment=()=>{
//    this.state.count= this.state.count+1;//wrong way
this.setState({count:this.state.count+1});
   console.log('counter',this.state.count);
   }
    decrement=()=>{
    // this.state.count=this.state.count-1;
    this.setState({count:this.state.count-1});
   console.log('counter',this.state.count);
    // this.render();
   }
  render(){
console.log('state',this.state);
        return(
           <div>
            <h3 className="cl">Counter:{this.state.count}</h3>
            <button className="btn btn-primary" onClick={this.increment}>+</button><span>   </span>     
            <button className="btn btn-success" onClick={this.decrement}>-</button>
          
           </div> 
        );
    }
    
}
export default Counter;