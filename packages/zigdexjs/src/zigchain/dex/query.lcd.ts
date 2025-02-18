//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetPoolRequest, QueryGetPoolResponseSDKType, QueryAllPoolRequest, QueryAllPoolResponseSDKType, QueryGetPoolsMetaRequest, QueryGetPoolsMetaResponseSDKType, QueryGetPoolUidRequest, QueryGetPoolUidResponseSDKType, QueryAllPoolUidsRequest, QueryAllPoolUidsResponseSDKType, QuerySwapInRequest, QuerySwapInResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.getPool = this.getPool.bind(this);
    this.listPool = this.listPool.bind(this);
    this.getPoolsMeta = this.getPoolsMeta.bind(this);
    this.getPoolUid = this.getPoolUid.bind(this);
    this.listPoolUids = this.listPoolUids.bind(this);
    this.swapIn = this.swapIn.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `zigchain/dex/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Pool items. */
  async getPool(params: QueryGetPoolRequest): Promise<QueryGetPoolResponseSDKType> {
    const endpoint = `zigchain/dex/pool/${params.poolId}`;
    return await this.req.get<QueryGetPoolResponseSDKType>(endpoint);
  }
  /* Queries a list of Pool items. */
  async listPool(params: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `zigchain/dex/pool`;
    return await this.req.get<QueryAllPoolResponseSDKType>(endpoint, options);
  }
  /* Queries a PoolsMeta by index. */
  async getPoolsMeta(_params: QueryGetPoolsMetaRequest = {}): Promise<QueryGetPoolsMetaResponseSDKType> {
    const endpoint = `zigchain/dex/pools_meta`;
    return await this.req.get<QueryGetPoolsMetaResponseSDKType>(endpoint);
  }
  /* Queries a list of PoolUids items. */
  async getPoolUid(params: QueryGetPoolUidRequest): Promise<QueryGetPoolUidResponseSDKType> {
    const endpoint = `zigchain/dex/pool_uids/${params.base}/${params.quote}`;
    return await this.req.get<QueryGetPoolUidResponseSDKType>(endpoint);
  }
  /* Queries a list of PoolUids items. */
  async listPoolUids(params: QueryAllPoolUidsRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolUidsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `zigchain/dex/pool_uids`;
    return await this.req.get<QueryAllPoolUidsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SwapIn items. */
  async swapIn(params: QuerySwapInRequest): Promise<QuerySwapInResponseSDKType> {
    const endpoint = `zigchain/dex/swap_in/${params.poolId}/${params.coinIn}`;
    return await this.req.get<QuerySwapInResponseSDKType>(endpoint);
  }
}