import AppDispatcher from '../dispatcher/AppDispatcher';
import CounterConstants from '../constants/CounterConstants';

var CounterActions = {

  /**
   * @param  {number} value
   */
  increment: function(value) {
    AppDispatcher.dispatch({
      actionType: CounterConstants.COUNTER_INCREMENT,
      value: value
    });
  },

  /**
   * @param  {number} value
   */
  decrement: function(value) {
    AppDispatcher.dispatch({
      actionType: CounterConstants.COUNTER_DECREMENT,
      value: value
    });
  },


};

module.exports = CounterActions;
