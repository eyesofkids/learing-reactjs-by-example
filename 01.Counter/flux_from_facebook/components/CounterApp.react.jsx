import ReactDOM from 'react-dom';
import React from 'react';
import CounterStore from '../stores/CounterStore';
import CounterActions from '../actions/CounterActions';


/**to get the data from the Store
Note: it is outside the React Component(CounterApp)
*/

function getCounterState() {
    return {
        amount: CounterStore.getAll()
    };
}

var CounterApp = React.createClass({

    //init state
    getInitialState: function() {
        return getCounterState();
    },

    componentDidMount: function() {
        //listen the Store 'change' event, and its callback will be this._onChange in this file
        CounterStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        //remove the listen the Store 'change' event, and its callback will be this._onChange in this file
        CounterStore.removeChangeListener(this._onChange);
    },

    render() {
        return (
            <div>
				 Amount: {this.state.amount}
				 {' '}
				 <button onClick={this._onIncrement}>
				  +
        		 </button>
        		 {' '}
				 <button onClick={this._onDecrement}>
				 -
				 </button>
			</div>
            );
    },

    //fire the action, use the good action format in actions/CounterActions
    _onIncrement: function() {
        CounterActions.increment(1);

    },

    //fire the action, use the good action format in actions/CounterActions
    _onDecrement: function() {
        CounterActions.decrement(1);
    },

    //it will be callback for Store emit change event
    _onChange: function() {
        this.setState(getCounterState());
    }

});

module.exports = CounterApp;

