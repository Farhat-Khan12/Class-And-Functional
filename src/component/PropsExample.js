import React from 'react';
import ReactDOM from 'react-dom';
class ParentProps extends React.Component{
	render(){
		return(
				<div>
					<h2>You are inside Parent Component</h2>
					<ChildProps name="ABC" userId = "123456"/>
				</div>
			);
	}
}

class ChildProps extends React.Component{
	render(){
		return(
				<div>
					<h2>Hello, {this.props.name}</h2>
					<h3>You are inside Child Component</h3>
					<h3>Your user id is: {this.props.userId}</h3>
				</div>
			);
	}
}

ReactDOM.render(
	// passing props
	<ParentProps />,
	document.getElementById("root")
);
