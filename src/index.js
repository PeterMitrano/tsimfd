'use strict';

console.log("I");

var Alexa = require('alexa-sdk');

var handlers = {

  'WhatIsThisIntent': function () {
    console.log("THIS SHIT IS MOTHERFUCKING DOPE.");
    let initial_prompt =  'this shit is motherfucking dope.' + '<audio src="https://s3.amazonaws.com/tsimfd/tsimfd.mp3" />'
    let reprompt =  'I\'m just saying it how I\'m feeling it.'
    this.emit(':tell', initial_prompt, reprompt);
  },

  'NewSession': function () {
    console.log("new session");
    this.emit('WhatIsThisIntent');
  },

  'Unhandled': function() {
    console.log("unhandled intent");
    this.emit('WhatIsThisIntent');
  }

};

exports.handler = function(event, context) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.APP_ID = 'amzn1.ask.skill.e7d39448-64e6-4c64-8fec-6d525cc36be6';
  alexa.execute();
};
