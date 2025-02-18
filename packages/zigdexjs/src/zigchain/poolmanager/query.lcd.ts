//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAllPoolsRequest, QueryAllPoolsResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryNumPoolRequest, QueryNumPoolResponseSDKType, QueryTradingPairTakerFeeRequest, QueryTradingPairTakerFeeResponseSDKType, QueryTakerFeeShareDenomsToAccruedValueRequest, QueryTakerFeeShareDenomsToAccruedValueResponseSDKType, QueryTakerFeeShareAgreementFromDenomRequest, QueryTakerFeeShareAgreementFromDenomResponseSDKType, QueryAllTakerFeeShareAgreementsRequest, QueryAllTakerFeeShareAgreementsResponseSDKType, QueryAllTakerFeeShareAccumulatorsRequest, QueryAllTakerFeeShareAccumulatorsResponseSDKType, QueryTotalVolumeForPoolRequest, QueryTotalVolumeForPoolResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceResponseSDKType, QueryListPoolsByDenomRequest, QueryListPoolsByDenomResponseSDKType, QueryRegisteredAlloyedPoolFromPoolIdRequest, QueryRegisteredAlloyedPoolFromPoolIdResponseSDKType, QueryRegisteredAlloyedPoolFromDenomRequest, QueryRegisteredAlloyedPoolFromDenomResponseSDKType, QueryAllRegisteredAlloyedPoolsRequest, QueryAllRegisteredAlloyedPoolsResponseSDKType, QueryEstimateTradeBasedOnPriceImpactRequest, QueryEstimateTradeBasedOnPriceImpactResponseSDKType, QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest, QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseSDKType, QueryEstimateSwapExactAmountOutRequest, QueryEstimateSwapExactAmountOutResponseSDKType, QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest, QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseSDKType, QueryEstimateSwapExactAmountInRequest, QueryEstimateSwapExactAmountInResponseSDKType, QueryEstimateSinglePoolSwapExactAmountOutRequest, QueryEstimateSinglePoolSwapExactAmountOutResponseSDKType, QueryEstimateSinglePoolSwapExactAmountInRequest, QueryEstimateSinglePoolSwapExactAmountInResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.allPools = this.allPools.bind(this);
    this.pool = this.pool.bind(this);
    this.numPool = this.numPool.bind(this);
    this.tradingPairTakerFee = this.tradingPairTakerFee.bind(this);
    this.takerFeeShareDenomsToAccruedValue = this.takerFeeShareDenomsToAccruedValue.bind(this);
    this.takerFeeShareAgreementFromDenom = this.takerFeeShareAgreementFromDenom.bind(this);
    this.allTakerFeeShareAgreements = this.allTakerFeeShareAgreements.bind(this);
    this.allTakerFeeShareAccumulators = this.allTakerFeeShareAccumulators.bind(this);
    this.totalVolumeForPool = this.totalVolumeForPool.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.listPoolsByDenom = this.listPoolsByDenom.bind(this);
    this.registeredAlloyedPoolFromPoolId = this.registeredAlloyedPoolFromPoolId.bind(this);
    this.registeredAlloyedPoolFromDenom = this.registeredAlloyedPoolFromDenom.bind(this);
    this.allRegisteredAlloyedPools = this.allRegisteredAlloyedPools.bind(this);
    this.estimateTradeBasedOnPriceImpact = this.estimateTradeBasedOnPriceImpact.bind(this);
    this.estimateSwapExactAmountOutWithPrimitiveTypes = this.estimateSwapExactAmountOutWithPrimitiveTypes.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    this.estimateSwapExactAmountInWithPrimitiveTypes = this.estimateSwapExactAmountInWithPrimitiveTypes.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSinglePoolSwapExactAmountOut = this.estimateSinglePoolSwapExactAmountOut.bind(this);
    this.estimateSinglePoolSwapExactAmountIn = this.estimateSinglePoolSwapExactAmountIn.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `zigchain/poolmanager/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of AllPools items. */
  async allPools(_params: QueryAllPoolsRequest = {}): Promise<QueryAllPoolsResponseSDKType> {
    const endpoint = `zigchain/poolmanager/all_pools`;
    return await this.req.get<QueryAllPoolsResponseSDKType>(endpoint);
  }
  /* Queries a Pool item. */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    const endpoint = `zigchain/poolmanager/pool`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint, options);
  }
  /* Queries a list of NumPool items. */
  async numPool(_params: QueryNumPoolRequest = {}): Promise<QueryNumPoolResponseSDKType> {
    const endpoint = `zigchain/poolmanager/num_pool`;
    return await this.req.get<QueryNumPoolResponseSDKType>(endpoint);
  }
  /* Queries a list of TradingPairTakerFee items. */
  async tradingPairTakerFee(params: QueryTradingPairTakerFeeRequest): Promise<QueryTradingPairTakerFeeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom0 !== "undefined") {
      options.params.denom_0 = params.denom0;
    }
    if (typeof params?.denom1 !== "undefined") {
      options.params.denom_1 = params.denom1;
    }
    const endpoint = `zigchain/poolmanager/trading_pair_taker_fee`;
    return await this.req.get<QueryTradingPairTakerFeeResponseSDKType>(endpoint, options);
  }
  /* Queries a list of TakerFeeShareDenomsToAccruedValue items. */
  async takerFeeShareDenomsToAccruedValue(params: QueryTakerFeeShareDenomsToAccruedValueRequest): Promise<QueryTakerFeeShareDenomsToAccruedValueResponseSDKType> {
    const endpoint = `zigchain/poolmanager/${params.takerFeeDenom}/${params.denom}/taker_fee_share_denoms_to_accrued_value`;
    return await this.req.get<QueryTakerFeeShareDenomsToAccruedValueResponseSDKType>(endpoint);
  }
  /* Queries a list of TakerFeeShareAgreementFromDenom items. */
  async takerFeeShareAgreementFromDenom(params: QueryTakerFeeShareAgreementFromDenomRequest): Promise<QueryTakerFeeShareAgreementFromDenomResponseSDKType> {
    const endpoint = `zigchain/poolmanager/${params.denom}/taker_fee_share_agreement_from_denom`;
    return await this.req.get<QueryTakerFeeShareAgreementFromDenomResponseSDKType>(endpoint);
  }
  /* Queries a list of AllTakerFeeShareAgreements items. */
  async allTakerFeeShareAgreements(_params: QueryAllTakerFeeShareAgreementsRequest = {}): Promise<QueryAllTakerFeeShareAgreementsResponseSDKType> {
    const endpoint = `zigchain/poolmanager/all_taker_fee_share_agreements`;
    return await this.req.get<QueryAllTakerFeeShareAgreementsResponseSDKType>(endpoint);
  }
  /* Queries a list of AllTakerFeeShareAccumulators items. */
  async allTakerFeeShareAccumulators(_params: QueryAllTakerFeeShareAccumulatorsRequest = {}): Promise<QueryAllTakerFeeShareAccumulatorsResponseSDKType> {
    const endpoint = `zigchain/poolmanager/all_taker_fee_share_accumulators`;
    return await this.req.get<QueryAllTakerFeeShareAccumulatorsResponseSDKType>(endpoint);
  }
  /* Queries a list of TotalVolumeForPool items. */
  async totalVolumeForPool(params: QueryTotalVolumeForPoolRequest): Promise<QueryTotalVolumeForPoolResponseSDKType> {
    const endpoint = `zigchain/poolmanager/pools/${params.poolId}/total_volume_for_pool`;
    return await this.req.get<QueryTotalVolumeForPoolResponseSDKType>(endpoint);
  }
  /* Queries a list of TotalPoolLiquidity items. */
  async totalPoolLiquidity(params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType> {
    const endpoint = `zigchain/poolmanager/pools/${params.poolId}/total_pool_liquidity`;
    return await this.req.get<QueryTotalPoolLiquidityResponseSDKType>(endpoint);
  }
  /* Queries a list of TotalLiquidity items. */
  async totalLiquidity(_params: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponseSDKType> {
    const endpoint = `zigchain/poolmanager/total_liquidity`;
    return await this.req.get<QueryTotalLiquidityResponseSDKType>(endpoint);
  }
  /* Queries a list of SpotPrice items. */
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
    const endpoint = `zigchain/poolmanager/pools/${params.poolId}/spot_price`;
    return await this.req.get<QuerySpotPriceResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ListPoolsByDenom items. */
  async listPoolsByDenom(params: QueryListPoolsByDenomRequest): Promise<QueryListPoolsByDenomResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `zigchain/poolmanager/list_pools_by_denom`;
    return await this.req.get<QueryListPoolsByDenomResponseSDKType>(endpoint, options);
  }
  /* Queries a list of RegisteredAlloyedPoolFromPoolId items. */
  async registeredAlloyedPoolFromPoolId(params: QueryRegisteredAlloyedPoolFromPoolIdRequest): Promise<QueryRegisteredAlloyedPoolFromPoolIdResponseSDKType> {
    const endpoint = `zigchain/poolmanager/${params.poolId}/registered_alloyed_pool_from_pool_id`;
    return await this.req.get<QueryRegisteredAlloyedPoolFromPoolIdResponseSDKType>(endpoint);
  }
  /* Queries a list of RegisteredAlloyedPoolFromDenom items. */
  async registeredAlloyedPoolFromDenom(params: QueryRegisteredAlloyedPoolFromDenomRequest): Promise<QueryRegisteredAlloyedPoolFromDenomResponseSDKType> {
    const endpoint = `zigchain/poolmanager/${params.denom}/registered_alloyed_pool_from_denom`;
    return await this.req.get<QueryRegisteredAlloyedPoolFromDenomResponseSDKType>(endpoint);
  }
  /* Queries a list of AllRegisteredAlloyedPools items. */
  async allRegisteredAlloyedPools(_params: QueryAllRegisteredAlloyedPoolsRequest = {}): Promise<QueryAllRegisteredAlloyedPoolsResponseSDKType> {
    const endpoint = `zigchain/poolmanager/all_registered_alloyed_pools`;
    return await this.req.get<QueryAllRegisteredAlloyedPoolsResponseSDKType>(endpoint);
  }
  /* Queries a list of EstimateTradeBasedOnPriceImpact items. */
  async estimateTradeBasedOnPriceImpact(params: QueryEstimateTradeBasedOnPriceImpactRequest): Promise<QueryEstimateTradeBasedOnPriceImpactResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromCoin !== "undefined") {
      options.params.from_coin = params.fromCoin;
    }
    if (typeof params?.toCoinDenom !== "undefined") {
      options.params.to_coin_denom = params.toCoinDenom;
    }
    if (typeof params?.maxPriceImpact !== "undefined") {
      options.params.max_price_impact = params.maxPriceImpact;
    }
    if (typeof params?.externalPrice !== "undefined") {
      options.params.external_price = params.externalPrice;
    }
    const endpoint = `zigchain/poolmanager/${params.poolId}/estimate_trade_based_on_price_impact`;
    return await this.req.get<QueryEstimateTradeBasedOnPriceImpactResponseSDKType>(endpoint, options);
  }
  /* Queries a list of EstimateSwapExactAmountOutWithPrimitiveTypes items. */
  async estimateSwapExactAmountOutWithPrimitiveTypes(params: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.routesPoolId !== "undefined") {
      options.params.routes_pool_id = params.routesPoolId;
    }
    if (typeof params?.routesTokenInDenom !== "undefined") {
      options.params.routes_token_in_denom = params.routesTokenInDenom;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `zigchain/poolmanager/${params.poolId}/estimate/estimate_swap_exact_amount_out_with_primitive_types`;
    return await this.req.get<QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseSDKType>(endpoint, options);
  }
  /* Queries a list of EstimateSwapExactAmountOut items. */
  async estimateSwapExactAmountOut(params: QueryEstimateSwapExactAmountOutRequest): Promise<QueryEstimateSwapExactAmountOutResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `zigchain/poolmanager/${params.poolId}/estimate_swap_exact_amount_out`;
    return await this.req.get<QueryEstimateSwapExactAmountOutResponseSDKType>(endpoint, options);
  }
  /* Queries a list of EstimateSwapExactAmountInWithPrimitiveTypes items. */
  async estimateSwapExactAmountInWithPrimitiveTypes(params: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.routesPoolId !== "undefined") {
      options.params.routes_pool_id = params.routesPoolId;
    }
    if (typeof params?.routesTokenOutDenom !== "undefined") {
      options.params.routes_token_out_denom = params.routesTokenOutDenom;
    }
    const endpoint = `zigchain/poolmanager/${params.poolId}/estimate/estimate_swap_exact_amount_in_with_primitive_types`;
    return await this.req.get<QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseSDKType>(endpoint, options);
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
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    const endpoint = `zigchain/poolmanager/${params.poolId}/estimate/estimate_swap_exact_amount_in`;
    return await this.req.get<QueryEstimateSwapExactAmountInResponseSDKType>(endpoint, options);
  }
  /* Queries a list of EstimateSinglePoolSwapExactAmountOut items. */
  async estimateSinglePoolSwapExactAmountOut(params: QueryEstimateSinglePoolSwapExactAmountOutRequest): Promise<QueryEstimateSinglePoolSwapExactAmountOutResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenInDenom !== "undefined") {
      options.params.token_in_denom = params.tokenInDenom;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `zigchain/poolmanager/${params.poolId}/estimate_out/estimate_single_pool_swap_exact_amount_out`;
    return await this.req.get<QueryEstimateSinglePoolSwapExactAmountOutResponseSDKType>(endpoint, options);
  }
  /* Queries a list of EstimateSinglePoolSwapExactAmountIn items. */
  async estimateSinglePoolSwapExactAmountIn(params: QueryEstimateSinglePoolSwapExactAmountInRequest): Promise<QueryEstimateSinglePoolSwapExactAmountInResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOutDenom !== "undefined") {
      options.params.token_out_denom = params.tokenOutDenom;
    }
    const endpoint = `zigchain/poolmanager/${params.poolId}/estimate/estimate_single_pool_swap_exact_amount_in`;
    return await this.req.get<QueryEstimateSinglePoolSwapExactAmountInResponseSDKType>(endpoint, options);
  }
}