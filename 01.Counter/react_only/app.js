import ReactDOM from 'react-dom';
import React from 'react';

var  Counter = React.createClass({
	getInitialState: function() {
       return { amount: 0};
  	},
	onIncrement: function(){
		this.setState({amount: this.state.amount+1});
	},
	onDecrement: function(){
		this.setState({amount: this.state.amount-1});
	},
	render() {
		return (
			<div>
				 Amount: {this.state.amount}
				 {' '}
				 <button onClick={this.onIncrement}>
				  +
        		 </button>
        		 {' '}
				 <button onClick={this.onDecrement}>
				 -
				 </button>
			</div>
		);
	}
});


ReactDOM.render(
    <Counter />,
    document.getElementById('container')
);
