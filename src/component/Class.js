import React from "react";
class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
        this.decrease= this.decrease.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   } 

   decrease(){
       if(this.state.count>0){
            this.setState({count: this.state.count - 1});
       }
       else{
           this.setState({count: this.state.count});
       }
   }
 
    render(){
        return (
            <div style={{margin:'50px'}}>
               <h1>CLASS COMPONENT</h1>
               <h3>Counter App using Class Component : </h3>
               <h2> {this.state.count}</h2> 
               <button onClick={this.increase}> Add</button>
               <br/>
               <button onClick={this.decrease}>Substract</button>
            </div>
        )
    }
}

export default ClassComponent;