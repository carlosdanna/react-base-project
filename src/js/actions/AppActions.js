var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
   actionExample: function(data){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ACTION_EXAMPLE,
            data: data
        });
    } 
}

module.exports = AppActions;
