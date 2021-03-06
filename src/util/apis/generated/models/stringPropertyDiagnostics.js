/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * String property.
 *
 * @extends models['CustomPropertyDiagnostics']
 */
class StringPropertyDiagnostics extends models['CustomPropertyDiagnostics'] {
  /**
   * Create a StringPropertyDiagnostics.
   * @property {string} value String property value.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StringPropertyDiagnostics
   *
   * @returns {object} metadata of StringPropertyDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'string',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'CustomPropertyDiagnostics',
        className: 'StringPropertyDiagnostics',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            constraints: {
              MaxLength: 128,
              Pattern: /^[a-zA-Z][a-zA-Z0-9\-_]*$/
            },
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            constraints: {
              MaxLength: 128
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StringPropertyDiagnostics;
