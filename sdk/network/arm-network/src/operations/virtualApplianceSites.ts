/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualApplianceSitesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VirtualApplianceSites. */
export class VirtualApplianceSites {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VirtualApplianceSites.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified site from a Virtual Appliance.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param siteName The name of the site.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, networkVirtualApplianceName: string, siteName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,networkVirtualApplianceName,siteName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified Virtual Appliance Site.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param siteName The name of the site.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualApplianceSitesGetResponse>
   */
  get(resourceGroupName: string, networkVirtualApplianceName: string, siteName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualApplianceSitesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param siteName The name of the site.
   * @param callback The callback
   */
  get(resourceGroupName: string, networkVirtualApplianceName: string, siteName: string, callback: msRest.ServiceCallback<Models.VirtualApplianceSite>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param siteName The name of the site.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, networkVirtualApplianceName: string, siteName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualApplianceSite>): void;
  get(resourceGroupName: string, networkVirtualApplianceName: string, siteName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualApplianceSite>, callback?: msRest.ServiceCallback<Models.VirtualApplianceSite>): Promise<Models.VirtualApplianceSitesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkVirtualApplianceName,
        siteName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualApplianceSitesGetResponse>;
  }

  /**
   * Creates or updates the specified Network Virtual Appliance Site.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param siteName The name of the site.
   * @param parameters Parameters supplied to the create or update Network Virtual Appliance Site
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualApplianceSitesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, networkVirtualApplianceName: string, siteName: string, parameters: Models.VirtualApplianceSite, options?: msRest.RequestOptionsBase): Promise<Models.VirtualApplianceSitesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,networkVirtualApplianceName,siteName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualApplianceSitesCreateOrUpdateResponse>;
  }

  /**
   * Lists all Network Virtual Appliance Sites in a Network Virtual Appliance resource.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualApplianceSitesListResponse>
   */
  list(resourceGroupName: string, networkVirtualApplianceName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualApplianceSitesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param callback The callback
   */
  list(resourceGroupName: string, networkVirtualApplianceName: string, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSiteListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, networkVirtualApplianceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSiteListResult>): void;
  list(resourceGroupName: string, networkVirtualApplianceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkVirtualApplianceSiteListResult>, callback?: msRest.ServiceCallback<Models.NetworkVirtualApplianceSiteListResult>): Promise<Models.VirtualApplianceSitesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkVirtualApplianceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualApplianceSitesListResponse>;
  }

  /**
   * Deletes the specified site from a Virtual Appliance.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param siteName The name of the site.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, networkVirtualApplianceName: string, siteName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        networkVirtualApplianceName,
        siteName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates the specified Network Virtual Appliance Site.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param siteName The name of the site.
   * @param parameters Parameters supplied to the create or update Network Virtual Appliance Site
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, networkVirtualApplianceName: string, siteName: string, parameters: Models.VirtualApplianceSite, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        networkVirtualApplianceName,
        siteName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Lists all Network Virtual Appliance Sites in a Network Virtual Appliance resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualApplianceSitesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualApplianceSitesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSiteListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkVirtualApplianceSiteListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkVirtualApplianceSiteListResult>, callback?: msRest.ServiceCallback<Models.NetworkVirtualApplianceSiteListResult>): Promise<Models.VirtualApplianceSitesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualApplianceSitesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkVirtualAppliances/{networkVirtualApplianceName}/virtualApplianceSites/{siteName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkVirtualApplianceName,
    Parameters.siteName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualApplianceSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkVirtualAppliances/{networkVirtualApplianceName}/virtualApplianceSites",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkVirtualApplianceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkVirtualApplianceSiteListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkVirtualAppliances/{networkVirtualApplianceName}/virtualApplianceSites/{siteName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkVirtualApplianceName,
    Parameters.siteName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkVirtualAppliances/{networkVirtualApplianceName}/virtualApplianceSites/{siteName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkVirtualApplianceName,
    Parameters.siteName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.VirtualApplianceSite,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualApplianceSite
    },
    201: {
      bodyMapper: Mappers.VirtualApplianceSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkVirtualApplianceSiteListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
