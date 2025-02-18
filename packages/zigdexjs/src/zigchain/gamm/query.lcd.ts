//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceResponseSDKType, QueryEstimateSwapExactAmountInRequest, QueryEstimateSwapExactAmountInResponseSDKType, QueryConcentratedPoolIdLinkFromCfmmRequest, QueryConcentratedPoolIdLinkFromCfmmResponseSDKType, QueryCfmmconcentratedPoolLinksRequest, QueryCfmmconcentratedPoolLinksResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.poolsWithFilter = this.poolsWithFilter.bind(this);
    this.pool = this.pool.bind(this);
    this.poolType = this.poolType.bind(this);
    this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
    this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalShares = this.totalShares.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.concentratedPoolIdLinkFromCfmm = this.concentratedPoolIdLinkFromCfmm.bind(this);
    this.cfmmconcentratedPoolLinks = this.cfmmconcentratedPoolLinks.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `zigchain/gamm/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Pools items. */
  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `zigchain/gamm/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of NumPools items. */
  async numPools(_params: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponseSDKType> {
    const endpoint = `zigchain/gamm/num_pools`;
    return await this.req.get<QueryNumPoolsResponseSDKType>(endpoint);
  }
  /* Queries a list of TotalLiquidity items. */
  async totalLiquidity(_params: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponseSDKType> {
    const endpoint = `zigchain/gamm/total_liquidity`;
    return await this.req.get<QueryTotalLiquidityResponseSDKType>(endpoint);
  }
  /* Queries a list of PoolsWithFilter items. */
  async poolsWithFilter(params: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.minLiquidity !== "undefined") {
      options.params.min_liquidity = params.minLiquidity;
    }
    if (typeof params?.poolType !== "undefined") {
      options.params.pool_type = params.poolType;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `zigchain/gamm/pools_with_filter`;
    return await this.req.get<QueryPoolsWithFilterResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Pool items. */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `zigchain/gamm/pools/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* Queries a list of PoolType items. */
  async poolType(params: QueryPoolTypeRequest): Promise<QueryPoolTypeResponseSDKType> {
    const endpoint = `zigchain/gamm/pool_type/${params.poolId}`;
    return await this.req.get<QueryPoolTypeResponseSDKType>(endpoint);
  }
  /* Queries a list of CalcJoinPoolShares items. */
  async calcJoinPoolShares(params: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokensIn !== "undefined") {
      options.params.tokens_in = params.tokensIn;
    }
    const endpoint = `zigchain/gamm/pools/${params.poolId}/join_swap_exact_in`;
    return await this.req.get<QueryCalcJoinPoolSharesResponseSDKType>(endpoint, options);
  }
  /* Queries a list of CalcExitPoolCoinsFromShares items. */
  async calcExitPoolCoinsFromShares(params: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.shareInAmount !== "undefined") {
      options.params.share_in_amount = params.shareInAmount;
    }
    const endpoint = `zigchain/gamm/pools/${params.poolId}/exit_swap_share_amount_in`;
    return await this.req.get<QueryCalcExitPoolCoinsFromSharesResponseSDKType>(endpoint, options);
  }
  /* Queries a list of PoolParams items. */
  async poolParams(params: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType> {
    const endpoint = `zigchain/gamm/pools/${params.poolId}/params`;
    return await this.req.get<QueryPoolParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of TotalPoolLiquidity items. */
  async totalPoolLiquidity(params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType> {
    const endpoint = `zigchain/gamm/pools/${params.poolId}/total_pool_liquidity`;
    return await this.req.get<QueryTotalPoolLiquidityResponseSDKType>(endpoint);
  }
  /* Queries a list of TotalShares items. */
  async totalShares(params: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType> {
    const endpoint = `zigchain/gamm/pools/${params.poolId}/total_shares`;
    return await this.req.get<QueryTotalSharesResponseSDKType>(endpoint);
  }
  /* !!! TODO Queries a list of SpotPrice items.  rework after merge poolmanager */
  async spotPrice(params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.baseAssetDenom !== "undefined") {
      options.params.base_asset_denom = params.baseAssetDenom;
    }
    if (typeof params?.quoteAssetDenom !== "undefined") {
      options.params.quote_asset_denom = params.quoteAssetDenom;
    }
    if (typeof params?.withSwapFee !== "undefined") {
      options.params.withSwapFee = params.withSwapFee;
    }
    const endpoint = `zigchain/gamm/pools/${params.poolId}/prices`;
    return await this.req.get<QuerySpotPriceResponseSDKType>(endpoint, options);
  }
  /* Queries a list of EstimateSwapExactAmountIn items. */
  async estimateSwapExactAmountIn(params: QueryEstimateSwapExactAmountInRequest): Promise<QueryEstimateSwapExactAmountInResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    const endpoint = `zigchain/gamm/${params.poolId}/estimate/swap_exact_amount_in`;
    return await this.req.get<QueryEstimateSwapExactAmountInResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ConcentratedPoolIdLinkFromCfmm items. */
  async concentratedPoolIdLinkFromCfmm(params: QueryConcentratedPoolIdLinkFromCfmmRequest): Promise<QueryConcentratedPoolIdLinkFromCfmmResponseSDKType> {
    const endpoint = `zigchain/gamm/concentrated_pool_id_link_from_cfmm/${params.cfmmPoolId}`;
    return await this.req.get<QueryConcentratedPoolIdLinkFromCfmmResponseSDKType>(endpoint);
  }
  /* Queries a list of CfmmconcentratedPoolLinks items. */
  async cfmmconcentratedPoolLinks(_params: QueryCfmmconcentratedPoolLinksRequest = {}): Promise<QueryCfmmconcentratedPoolLinksResponseSDKType> {
    const endpoint = `zigchain/gamm/cfmm_concentrated_pool_links`;
    return await this.req.get<QueryCfmmconcentratedPoolLinksResponseSDKType>(endpoint);
  }
}