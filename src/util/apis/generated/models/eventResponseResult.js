/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the EventResponseResult class.
 * @constructor
 * Object returned in response to accepting an event occurance
 *
 */
function EventResponseResult() {
  EventResponseResult['super_'].call(this);
}

util.inherits(EventResponseResult, models['AlertOperationResult']);

/**
 * Defines the metadata of EventResponseResult
 *
 * @returns {object} metadata of EventResponseResult
 *
 */
EventResponseResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'EventResponseResult',
    type: {
      name: 'Composite',
      className: 'EventResponseResult',
      modelProperties: {
        requestId: {
          required: true,
          serializedName: 'request_id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = EventResponseResult;
