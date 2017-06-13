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
 * Initializes a new instance of the AlertWebhooksResult class.
 * @constructor
 * List of alerting webhooks wrapped as operation result
 *
 * @member {array} [webhookEntries]
 * 
 */
function AlertWebhooksResult() {
  AlertWebhooksResult['super_'].call(this);
}

util.inherits(AlertWebhooksResult, models['AlertOperationResult']);

/**
 * Defines the metadata of AlertWebhooksResult
 *
 * @returns {object} metadata of AlertWebhooksResult
 *
 */
AlertWebhooksResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AlertWebhooksResult',
    type: {
      name: 'Composite',
      className: 'AlertWebhooksResult',
      modelProperties: {
        requestId: {
          required: true,
          serializedName: 'request_id',
          type: {
            name: 'String'
          }
        },
        webhookEntries: {
          required: false,
          serializedName: 'webhookEntries',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'AlertWebhookEntryElementType',
                type: {
                  name: 'Composite',
                  className: 'AlertWebhookEntry'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = AlertWebhooksResult;
