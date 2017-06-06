'use strict';

console.log('Loading function');


'use strict';
     
    // Close dialog with the customer, reporting fulfillmentState of Failed or Fulfilled ("Thanks, your pizza will arrive in 20 minutes")
    function close(sessionAttributes, fulfillmentState, message) {
        return {
            sessionAttributes,
            dialogAction: {
                type: 'Close',
                fulfillmentState,
                message,
            },
        };
    }
     
    // --------------- Events -----------------------
     
    function dispatch(intentRequest, callback) {
        console.log('request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.intentName}');
        const sessionAttributes = intentRequest.sessionAttributes;
        const slots = intentRequest.currentIntent.slots;
        const slotOne = slots.slotOne;
        console.log(`request received for Slots=${slotOne}`);
         callback(close(sessionAttributes, 'Fulfilled',
        {'contentType': 'PlainText', 'content': `Received a Response , slot is ${slotOne}`}));
        
        
    }
     
    // --------------- Main handler -----------------------
     
    
    exports.handler = (event, context, callback) => {
        try {
            dispatch(event,
                (response) => {
                    callback(null, response);
                });
        } catch (err) {
            callback(err);
        }
    };