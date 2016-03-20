import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import CounterConstants from '../constants/CounterConstants';
import assign from 'object-assign';

//Store change event, it is just a word
var CHANGE_EVENT = 'change';

//data is here...and  its init value = 0
var _amount = 0;

/** two function to effect the state(amount)
    Note: these are outside the Store(CounterStore)
**/
function incrementValue(value) {
    _amount = _amount + value;
}

function decrementValue(value) {
    _amount = _amount - value;
}
/** end effect functions **/


/** CounterStore **/

var CounterStore = assign({}, EventEmitter.prototype, {

    /**
     * Get the entire collection of Counter.
     * @return {number}
     */
    getAll: function() {
        return _amount;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

/** end CounterStore  **/

/** register all update to dispatcher **/
AppDispatcher.register(function(action) {
    var value;

    switch (action.actionType) {

	    case CounterConstants.COUNTER_INCREMENT:
	        value = action.value;

	        //use the effect functions above
	        incrementValue(value);

	        //emit Store to change -> view to re-render
	        CounterStore.emitChange();
	        break;

	    case CounterConstants.COUNTER_DECREMENT:
	        value = action.value;

	        //use the effect functions above
	        decrementValue(value);

	        //emit Store to change -> view to re-render
	        CounterStore.emitChange();
	        break;

	    default:
	    // no op
    }
});
/** end register **/


module.exports = CounterStore;