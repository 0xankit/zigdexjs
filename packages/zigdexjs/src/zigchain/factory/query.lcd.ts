//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetDenomRequest, QueryDenomResponseSDKType, QueryAllDenomRequest, QueryAllDenomResponseSDKType, QueryDenomByAdminRequest, QueryDenomByAdminResponseSDKType, QueryGetDenomAuthRequest, QueryDenomAuthResponseSDKType, QueryAllDenomAuthRequest, QueryAllDenomAuthResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.denom = this.denom.bind(this);
    this.denomAll = this.denomAll.bind(this);
    this.denomsByAdmin = this.denomsByAdmin.bind(this);
    this.denomAuth = this.denomAuth.bind(this);
    this.listDenomAuth = this.listDenomAuth.bind(this);
  }
  /* QueryParams Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `zigchain/factory/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* QueryDenom Queries a list of Denom items. */
  async denom(params: QueryGetDenomRequest): Promise<QueryDenomResponseSDKType> {
    const endpoint = `zigchain/factory/denom/${params.denom}`;
    return await this.req.get<QueryDenomResponseSDKType>(endpoint);
  }
  /* Queries a list of Denom items. */
  async denomAll(params: QueryAllDenomRequest = {
    pagination: undefined
  }): Promise<QueryAllDenomResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `zigchain/factory/denom`;
    return await this.req.get<QueryAllDenomResponseSDKType>(endpoint, options);
  }
  /* QueryDenomsByAdmin Queries a list of Denom items. */
  async denomsByAdmin(params: QueryDenomByAdminRequest): Promise<QueryDenomByAdminResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `zigchain/factory/denomByAdmin/${params.admin}`;
    return await this.req.get<QueryDenomByAdminResponseSDKType>(endpoint, options);
  }
  /* QueryGetDenomAuth a denom DenomAuth items. */
  async denomAuth(params: QueryGetDenomAuthRequest): Promise<QueryDenomAuthResponseSDKType> {
    const endpoint = `zigchain/factory/denom_auth/${params.denom}`;
    return await this.req.get<QueryDenomAuthResponseSDKType>(endpoint);
  }
  /* QueryListDenomAuth queries a list of DenomAuth items.
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME */
  async listDenomAuth(params: QueryAllDenomAuthRequest = {
    pagination: undefined
  }): Promise<QueryAllDenomAuthResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `zigchain/factory/denom_auth`;
    return await this.req.get<QueryAllDenomAuthResponseSDKType>(endpoint, options);
  }
}