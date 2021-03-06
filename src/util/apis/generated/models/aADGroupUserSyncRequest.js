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

/**
 * Class representing a AADGroupUserSyncRequest.
 */
class AADGroupUserSyncRequest {
  /**
   * Create a AADGroupUserSyncRequest.
   * @property {uuid} userId user id
   * @property {uuid} aadGroupId The appcenter AAD group id
   * @property {string} role role. Possible values include: 'admin',
   * 'collaborator', 'member'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AADGroupUserSyncRequest
   *
   * @returns {object} metadata of AADGroupUserSyncRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AADGroupUserSyncRequest',
      type: {
        name: 'Composite',
        className: 'AADGroupUserSyncRequest',
        modelProperties: {
          userId: {
            required: true,
            serializedName: 'user_id',
            type: {
              name: 'String'
            }
          },
          aadGroupId: {
            required: true,
            serializedName: 'aad_group_id',
            type: {
              name: 'String'
            }
          },
          role: {
            required: true,
            serializedName: 'role',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AADGroupUserSyncRequest;
