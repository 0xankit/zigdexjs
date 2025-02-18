//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType, SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType } from "./swap_route";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { TakerFeeShareAgreement, TakerFeeShareAgreementAmino, TakerFeeShareAgreementSDKType, TakerFeeSkimAccumulator, TakerFeeSkimAccumulatorAmino, TakerFeeSkimAccumulatorSDKType, AlloyContractTakerFeeShareState, AlloyContractTakerFeeShareStateAmino, AlloyContractTakerFeeShareStateSDKType } from "./taker_fee_share";
import { Pool, PoolProtoMsg, PoolSDKType } from "../gamm/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** =============================== Params */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.ParamsRequest";
  value: Uint8Array;
}
/** =============================== Params */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/zigchain.poolmanager.ParamsRequest";
  value: ParamsRequestAmino;
}
/** =============================== Params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/zigchain.poolmanager.ParamsResponse";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface EstimateSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface EstimateSwapExactAmountInResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountInResponseAmino {
  token_out_amount?: string;
}
export interface EstimateSwapExactAmountInResponseAminoMsg {
  type: "/zigchain.poolmanager.EstimateSwapExactAmountInResponse";
  value: EstimateSwapExactAmountInResponseAmino;
}
export interface EstimateSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequest {
  /** DEPRECATED */
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  poolId?: bigint;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
export interface EstimateSwapExactAmountOutRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountOutRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestAmino {
  /** DEPRECATED */
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  pool_id?: string;
  routes?: SwapAmountOutRouteAmino[];
  token_out?: string;
}
export interface EstimateSwapExactAmountOutRequestAminoMsg {
  type: "/zigchain.poolmanager.EstimateSwapExactAmountOutRequest";
  value: EstimateSwapExactAmountOutRequestAmino;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestSDKType {
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  pool_id?: bigint;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
  /** @deprecated */
  poolId?: bigint;
  routesPoolId: bigint[];
  routesTokenInDenom: string[];
  tokenOut: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountOutWithPrimitiveTypesRequest";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
  /** @deprecated */
  pool_id?: string;
  routes_pool_id?: string[];
  routes_token_in_denom?: string[];
  token_out?: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg {
  type: "/zigchain.poolmanager.EstimateSwapExactAmountOutWithPrimitiveTypesRequest";
  value: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestSDKType {
  /** @deprecated */
  pool_id?: bigint;
  routes_pool_id: bigint[];
  routes_token_in_denom: string[];
  token_out: string;
}
export interface EstimateSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface EstimateSwapExactAmountOutResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountOutResponseAmino {
  token_in_amount?: string;
}
export interface EstimateSwapExactAmountOutResponseAminoMsg {
  type: "/zigchain.poolmanager.EstimateSwapExactAmountOutResponse";
  value: EstimateSwapExactAmountOutResponseAmino;
}
export interface EstimateSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
/**
 * =============================== EstimateTradeBasedOnPriceImpact
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 */
export interface EstimateTradeBasedOnPriceImpactRequest {
  /** from_coin is the total amount of tokens that the user wants to sell. */
  fromCoin: Coin;
  /**
   * to_coin_denom is the denom identifier of the token that the user wants to
   * buy.
   */
  toCoinDenom: string;
  /**
   * pool_id is the identifier of the liquidity pool that the trade will occur
   * on.
   */
  poolId: bigint;
  /**
   * max_price_impact is the maximum percentage that the user is willing
   * to affect the price of the liquidity pool.
   */
  maxPriceImpact: string;
  /**
   * external_price is an optional external price that the user can enter.
   * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
   * any time.
   */
  externalPrice: string;
}
export interface EstimateTradeBasedOnPriceImpactRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.EstimateTradeBasedOnPriceImpactRequest";
  value: Uint8Array;
}
/**
 * =============================== EstimateTradeBasedOnPriceImpact
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 */
export interface EstimateTradeBasedOnPriceImpactRequestAmino {
  /** from_coin is the total amount of tokens that the user wants to sell. */
  from_coin?: CoinAmino;
  /**
   * to_coin_denom is the denom identifier of the token that the user wants to
   * buy.
   */
  to_coin_denom?: string;
  /**
   * pool_id is the identifier of the liquidity pool that the trade will occur
   * on.
   */
  pool_id?: string;
  /**
   * max_price_impact is the maximum percentage that the user is willing
   * to affect the price of the liquidity pool.
   */
  max_price_impact?: string;
  /**
   * external_price is an optional external price that the user can enter.
   * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
   * any time.
   */
  external_price?: string;
}
export interface EstimateTradeBasedOnPriceImpactRequestAminoMsg {
  type: "/zigchain.poolmanager.EstimateTradeBasedOnPriceImpactRequest";
  value: EstimateTradeBasedOnPriceImpactRequestAmino;
}
/**
 * =============================== EstimateTradeBasedOnPriceImpact
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 */
export interface EstimateTradeBasedOnPriceImpactRequestSDKType {
  from_coin: CoinSDKType;
  to_coin_denom: string;
  pool_id: bigint;
  max_price_impact: string;
  external_price: string;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 */
export interface EstimateTradeBasedOnPriceImpactResponse {
  /**
   * input_coin is the actual input amount that would be tradeable
   * under the specified price impact.
   */
  inputCoin: Coin;
  /**
   * output_coin is the amount of tokens of the ToCoinDenom type
   * that will be received for the actual InputCoin trade.
   */
  outputCoin: Coin;
}
export interface EstimateTradeBasedOnPriceImpactResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.EstimateTradeBasedOnPriceImpactResponse";
  value: Uint8Array;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 */
export interface EstimateTradeBasedOnPriceImpactResponseAmino {
  /**
   * input_coin is the actual input amount that would be tradeable
   * under the specified price impact.
   */
  input_coin?: CoinAmino;
  /**
   * output_coin is the amount of tokens of the ToCoinDenom type
   * that will be received for the actual InputCoin trade.
   */
  output_coin?: CoinAmino;
}
export interface EstimateTradeBasedOnPriceImpactResponseAminoMsg {
  type: "/zigchain.poolmanager.EstimateTradeBasedOnPriceImpactResponse";
  value: EstimateTradeBasedOnPriceImpactResponseAmino;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 */
export interface EstimateTradeBasedOnPriceImpactResponseSDKType {
  input_coin: CoinSDKType;
  output_coin: CoinSDKType;
}
export interface QueryAllPoolsRequest {}
export interface QueryAllPoolsRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryAllPoolsRequest";
  value: Uint8Array;
}
export interface QueryAllPoolsRequestAmino {}
export interface QueryAllPoolsRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryAllPoolsRequest";
  value: QueryAllPoolsRequestAmino;
}
export interface QueryAllPoolsRequestSDKType {}
export interface QueryAllPoolsResponse {
  pools: (Pool | Any)[] | Any[];
}
export interface QueryAllPoolsResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryAllPoolsResponse";
  value: Uint8Array;
}
export type QueryAllPoolsResponseEncoded = Omit<QueryAllPoolsResponse, "pools"> & {
  pools: (PoolProtoMsg | AnyProtoMsg)[];
};
export interface QueryAllPoolsResponseAmino {
  pools?: AnyAmino[];
}
export interface QueryAllPoolsResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryAllPoolsResponse";
  value: QueryAllPoolsResponseAmino;
}
export interface QueryAllPoolsResponseSDKType {
  pools: (PoolSDKType | AnySDKType)[];
}
export interface QueryPoolRequest {
  poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryPoolRequest";
  value: Uint8Array;
}
export interface QueryPoolRequestAmino {
  pool_id?: string;
}
export interface QueryPoolRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
export interface QueryPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolResponse {
  pool?: Pool | Any | undefined;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryPoolResponse";
  value: Uint8Array;
}
export type QueryPoolResponseEncoded = Omit<QueryPoolResponse, "pool"> & {
  pool?: PoolProtoMsg | AnyProtoMsg | undefined;
};
export interface QueryPoolResponseAmino {
  pool?: AnyAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
export interface QueryPoolResponseSDKType {
  pool?: PoolSDKType | AnySDKType | undefined;
}
export interface QueryNumPoolRequest {}
export interface QueryNumPoolRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryNumPoolRequest";
  value: Uint8Array;
}
export interface QueryNumPoolRequestAmino {}
export interface QueryNumPoolRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryNumPoolRequest";
  value: QueryNumPoolRequestAmino;
}
export interface QueryNumPoolRequestSDKType {}
export interface QueryNumPoolResponse {
  numPools: bigint;
}
export interface QueryNumPoolResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryNumPoolResponse";
  value: Uint8Array;
}
export interface QueryNumPoolResponseAmino {
  num_pools?: string;
}
export interface QueryNumPoolResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryNumPoolResponse";
  value: QueryNumPoolResponseAmino;
}
export interface QueryNumPoolResponseSDKType {
  num_pools: bigint;
}
export interface QueryTradingPairTakerFeeRequest {
  denom0: string;
  denom1: string;
}
export interface QueryTradingPairTakerFeeRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTradingPairTakerFeeRequest";
  value: Uint8Array;
}
export interface QueryTradingPairTakerFeeRequestAmino {
  denom_0?: string;
  denom_1?: string;
}
export interface QueryTradingPairTakerFeeRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryTradingPairTakerFeeRequest";
  value: QueryTradingPairTakerFeeRequestAmino;
}
export interface QueryTradingPairTakerFeeRequestSDKType {
  denom_0: string;
  denom_1: string;
}
export interface QueryTradingPairTakerFeeResponse {
  takerFee: string;
}
export interface QueryTradingPairTakerFeeResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTradingPairTakerFeeResponse";
  value: Uint8Array;
}
export interface QueryTradingPairTakerFeeResponseAmino {
  taker_fee?: string;
}
export interface QueryTradingPairTakerFeeResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryTradingPairTakerFeeResponse";
  value: QueryTradingPairTakerFeeResponseAmino;
}
export interface QueryTradingPairTakerFeeResponseSDKType {
  taker_fee: string;
}
export interface QueryTakerFeeShareDenomsToAccruedValueRequest {
  denom: string;
  takerFeeDenom: string;
}
export interface QueryTakerFeeShareDenomsToAccruedValueRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareDenomsToAccruedValueRequest";
  value: Uint8Array;
}
export interface QueryTakerFeeShareDenomsToAccruedValueRequestAmino {
  denom?: string;
  takerFeeDenom?: string;
}
export interface QueryTakerFeeShareDenomsToAccruedValueRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryTakerFeeShareDenomsToAccruedValueRequest";
  value: QueryTakerFeeShareDenomsToAccruedValueRequestAmino;
}
export interface QueryTakerFeeShareDenomsToAccruedValueRequestSDKType {
  denom: string;
  takerFeeDenom: string;
}
export interface QueryTakerFeeShareDenomsToAccruedValueResponse {
  amount: string;
}
export interface QueryTakerFeeShareDenomsToAccruedValueResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareDenomsToAccruedValueResponse";
  value: Uint8Array;
}
export interface QueryTakerFeeShareDenomsToAccruedValueResponseAmino {
  amount?: string;
}
export interface QueryTakerFeeShareDenomsToAccruedValueResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryTakerFeeShareDenomsToAccruedValueResponse";
  value: QueryTakerFeeShareDenomsToAccruedValueResponseAmino;
}
export interface QueryTakerFeeShareDenomsToAccruedValueResponseSDKType {
  amount: string;
}
export interface QueryTakerFeeShareAgreementFromDenomRequest {
  denom: string;
}
export interface QueryTakerFeeShareAgreementFromDenomRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareAgreementFromDenomRequest";
  value: Uint8Array;
}
export interface QueryTakerFeeShareAgreementFromDenomRequestAmino {
  denom?: string;
}
export interface QueryTakerFeeShareAgreementFromDenomRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryTakerFeeShareAgreementFromDenomRequest";
  value: QueryTakerFeeShareAgreementFromDenomRequestAmino;
}
export interface QueryTakerFeeShareAgreementFromDenomRequestSDKType {
  denom: string;
}
export interface QueryTakerFeeShareAgreementFromDenomResponse {
  takerFeeShareAgreement: TakerFeeShareAgreement;
}
export interface QueryTakerFeeShareAgreementFromDenomResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareAgreementFromDenomResponse";
  value: Uint8Array;
}
export interface QueryTakerFeeShareAgreementFromDenomResponseAmino {
  taker_fee_share_agreement?: TakerFeeShareAgreementAmino;
}
export interface QueryTakerFeeShareAgreementFromDenomResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryTakerFeeShareAgreementFromDenomResponse";
  value: QueryTakerFeeShareAgreementFromDenomResponseAmino;
}
export interface QueryTakerFeeShareAgreementFromDenomResponseSDKType {
  taker_fee_share_agreement: TakerFeeShareAgreementSDKType;
}
export interface QueryAllTakerFeeShareAgreementsRequest {}
export interface QueryAllTakerFeeShareAgreementsRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAgreementsRequest";
  value: Uint8Array;
}
export interface QueryAllTakerFeeShareAgreementsRequestAmino {}
export interface QueryAllTakerFeeShareAgreementsRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryAllTakerFeeShareAgreementsRequest";
  value: QueryAllTakerFeeShareAgreementsRequestAmino;
}
export interface QueryAllTakerFeeShareAgreementsRequestSDKType {}
export interface QueryAllTakerFeeShareAgreementsResponse {
  takerFeeShareAgreements: TakerFeeShareAgreement[];
}
export interface QueryAllTakerFeeShareAgreementsResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAgreementsResponse";
  value: Uint8Array;
}
export interface QueryAllTakerFeeShareAgreementsResponseAmino {
  taker_fee_share_agreements?: TakerFeeShareAgreementAmino[];
}
export interface QueryAllTakerFeeShareAgreementsResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryAllTakerFeeShareAgreementsResponse";
  value: QueryAllTakerFeeShareAgreementsResponseAmino;
}
export interface QueryAllTakerFeeShareAgreementsResponseSDKType {
  taker_fee_share_agreements: TakerFeeShareAgreementSDKType[];
}
export interface QueryAllTakerFeeShareAccumulatorsRequest {}
export interface QueryAllTakerFeeShareAccumulatorsRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAccumulatorsRequest";
  value: Uint8Array;
}
export interface QueryAllTakerFeeShareAccumulatorsRequestAmino {}
export interface QueryAllTakerFeeShareAccumulatorsRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryAllTakerFeeShareAccumulatorsRequest";
  value: QueryAllTakerFeeShareAccumulatorsRequestAmino;
}
export interface QueryAllTakerFeeShareAccumulatorsRequestSDKType {}
export interface QueryAllTakerFeeShareAccumulatorsResponse {
  takerFeeSkimAccumulators: TakerFeeSkimAccumulator[];
}
export interface QueryAllTakerFeeShareAccumulatorsResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAccumulatorsResponse";
  value: Uint8Array;
}
export interface QueryAllTakerFeeShareAccumulatorsResponseAmino {
  taker_fee_skim_accumulators?: TakerFeeSkimAccumulatorAmino[];
}
export interface QueryAllTakerFeeShareAccumulatorsResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryAllTakerFeeShareAccumulatorsResponse";
  value: QueryAllTakerFeeShareAccumulatorsResponseAmino;
}
export interface QueryAllTakerFeeShareAccumulatorsResponseSDKType {
  taker_fee_skim_accumulators: TakerFeeSkimAccumulatorSDKType[];
}
export interface QueryTotalVolumeForPoolRequest {
  poolId: bigint;
}
export interface QueryTotalVolumeForPoolRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTotalVolumeForPoolRequest";
  value: Uint8Array;
}
export interface QueryTotalVolumeForPoolRequestAmino {
  pool_id?: string;
}
export interface QueryTotalVolumeForPoolRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryTotalVolumeForPoolRequest";
  value: QueryTotalVolumeForPoolRequestAmino;
}
export interface QueryTotalVolumeForPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryTotalVolumeForPoolResponse {
  volume: Coin[];
}
export interface QueryTotalVolumeForPoolResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTotalVolumeForPoolResponse";
  value: Uint8Array;
}
export interface QueryTotalVolumeForPoolResponseAmino {
  volume?: CoinAmino[];
}
export interface QueryTotalVolumeForPoolResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryTotalVolumeForPoolResponse";
  value: QueryTotalVolumeForPoolResponseAmino;
}
export interface QueryTotalVolumeForPoolResponseSDKType {
  volume: CoinSDKType[];
}
export interface QueryTotalPoolLiquidityRequest {
  poolId: bigint;
}
export interface QueryTotalPoolLiquidityRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTotalPoolLiquidityRequest";
  value: Uint8Array;
}
export interface QueryTotalPoolLiquidityRequestAmino {
  pool_id?: string;
}
export interface QueryTotalPoolLiquidityRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryTotalPoolLiquidityRequest";
  value: QueryTotalPoolLiquidityRequestAmino;
}
export interface QueryTotalPoolLiquidityRequestSDKType {
  pool_id: bigint;
}
export interface QueryTotalPoolLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTotalPoolLiquidityResponse";
  value: Uint8Array;
}
export interface QueryTotalPoolLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
export interface QueryTotalPoolLiquidityResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryTotalPoolLiquidityResponse";
  value: QueryTotalPoolLiquidityResponseAmino;
}
export interface QueryTotalPoolLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
export interface QueryTotalLiquidityRequest {}
export interface QueryTotalLiquidityRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTotalLiquidityRequest";
  value: Uint8Array;
}
export interface QueryTotalLiquidityRequestAmino {}
export interface QueryTotalLiquidityRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryTotalLiquidityRequest";
  value: QueryTotalLiquidityRequestAmino;
}
export interface QueryTotalLiquidityRequestSDKType {}
export interface QueryTotalLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryTotalLiquidityResponse";
  value: Uint8Array;
}
export interface QueryTotalLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
export interface QueryTotalLiquidityResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryTotalLiquidityResponse";
  value: QueryTotalLiquidityResponseAmino;
}
export interface QueryTotalLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
export interface QuerySpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
export interface QuerySpotPriceRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QuerySpotPriceRequest";
  value: Uint8Array;
}
export interface QuerySpotPriceRequestAmino {
  pool_id?: string;
  base_asset_denom?: string;
  quote_asset_denom?: string;
}
export interface QuerySpotPriceRequestAminoMsg {
  type: "/zigchain.poolmanager.QuerySpotPriceRequest";
  value: QuerySpotPriceRequestAmino;
}
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
export interface QuerySpotPriceResponse {
  spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QuerySpotPriceResponse";
  value: Uint8Array;
}
export interface QuerySpotPriceResponseAmino {
  spot_price?: string;
}
export interface QuerySpotPriceResponseAminoMsg {
  type: "/zigchain.poolmanager.QuerySpotPriceResponse";
  value: QuerySpotPriceResponseAmino;
}
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
export interface QueryListPoolsByDenomRequest {
  denom: string;
}
export interface QueryListPoolsByDenomRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryListPoolsByDenomRequest";
  value: Uint8Array;
}
export interface QueryListPoolsByDenomRequestAmino {
  denom?: string;
}
export interface QueryListPoolsByDenomRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryListPoolsByDenomRequest";
  value: QueryListPoolsByDenomRequestAmino;
}
export interface QueryListPoolsByDenomRequestSDKType {
  denom: string;
}
export interface QueryListPoolsByDenomResponse {
  pools: (Pool | Any)[] | Any[];
}
export interface QueryListPoolsByDenomResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryListPoolsByDenomResponse";
  value: Uint8Array;
}
export type QueryListPoolsByDenomResponseEncoded = Omit<QueryListPoolsByDenomResponse, "pools"> & {
  pools: (PoolProtoMsg | AnyProtoMsg)[];
};
export interface QueryListPoolsByDenomResponseAmino {
  pools?: AnyAmino[];
}
export interface QueryListPoolsByDenomResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryListPoolsByDenomResponse";
  value: QueryListPoolsByDenomResponseAmino;
}
export interface QueryListPoolsByDenomResponseSDKType {
  pools: (PoolSDKType | AnySDKType)[];
}
export interface QueryRegisteredAlloyedPoolFromPoolIdRequest {
  poolId: bigint;
}
export interface QueryRegisteredAlloyedPoolFromPoolIdRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromPoolIdRequest";
  value: Uint8Array;
}
export interface QueryRegisteredAlloyedPoolFromPoolIdRequestAmino {
  pool_id?: string;
}
export interface QueryRegisteredAlloyedPoolFromPoolIdRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromPoolIdRequest";
  value: QueryRegisteredAlloyedPoolFromPoolIdRequestAmino;
}
export interface QueryRegisteredAlloyedPoolFromPoolIdRequestSDKType {
  pool_id: bigint;
}
export interface QueryRegisteredAlloyedPoolFromPoolIdResponse {
  contractState: AlloyContractTakerFeeShareState;
}
export interface QueryRegisteredAlloyedPoolFromPoolIdResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromPoolIdResponse";
  value: Uint8Array;
}
export interface QueryRegisteredAlloyedPoolFromPoolIdResponseAmino {
  contract_state?: AlloyContractTakerFeeShareStateAmino;
}
export interface QueryRegisteredAlloyedPoolFromPoolIdResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromPoolIdResponse";
  value: QueryRegisteredAlloyedPoolFromPoolIdResponseAmino;
}
export interface QueryRegisteredAlloyedPoolFromPoolIdResponseSDKType {
  contract_state: AlloyContractTakerFeeShareStateSDKType;
}
export interface QueryRegisteredAlloyedPoolFromDenomRequest {
  denom: string;
}
export interface QueryRegisteredAlloyedPoolFromDenomRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromDenomRequest";
  value: Uint8Array;
}
export interface QueryRegisteredAlloyedPoolFromDenomRequestAmino {
  denom?: string;
}
export interface QueryRegisteredAlloyedPoolFromDenomRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromDenomRequest";
  value: QueryRegisteredAlloyedPoolFromDenomRequestAmino;
}
export interface QueryRegisteredAlloyedPoolFromDenomRequestSDKType {
  denom: string;
}
export interface QueryRegisteredAlloyedPoolFromDenomResponse {
  contractState: AlloyContractTakerFeeShareState;
}
export interface QueryRegisteredAlloyedPoolFromDenomResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromDenomResponse";
  value: Uint8Array;
}
export interface QueryRegisteredAlloyedPoolFromDenomResponseAmino {
  contract_state?: AlloyContractTakerFeeShareStateAmino;
}
export interface QueryRegisteredAlloyedPoolFromDenomResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromDenomResponse";
  value: QueryRegisteredAlloyedPoolFromDenomResponseAmino;
}
export interface QueryRegisteredAlloyedPoolFromDenomResponseSDKType {
  contract_state: AlloyContractTakerFeeShareStateSDKType;
}
export interface QueryAllRegisteredAlloyedPoolsRequest {}
export interface QueryAllRegisteredAlloyedPoolsRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryAllRegisteredAlloyedPoolsRequest";
  value: Uint8Array;
}
export interface QueryAllRegisteredAlloyedPoolsRequestAmino {}
export interface QueryAllRegisteredAlloyedPoolsRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryAllRegisteredAlloyedPoolsRequest";
  value: QueryAllRegisteredAlloyedPoolsRequestAmino;
}
export interface QueryAllRegisteredAlloyedPoolsRequestSDKType {}
export interface QueryAllRegisteredAlloyedPoolsResponse {
  contractStates: AlloyContractTakerFeeShareState[];
}
export interface QueryAllRegisteredAlloyedPoolsResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryAllRegisteredAlloyedPoolsResponse";
  value: Uint8Array;
}
export interface QueryAllRegisteredAlloyedPoolsResponseAmino {
  contract_states?: AlloyContractTakerFeeShareStateAmino[];
}
export interface QueryAllRegisteredAlloyedPoolsResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryAllRegisteredAlloyedPoolsResponse";
  value: QueryAllRegisteredAlloyedPoolsResponseAmino;
}
export interface QueryAllRegisteredAlloyedPoolsResponseSDKType {
  contract_states: AlloyContractTakerFeeShareStateSDKType[];
}
export interface QueryEstimateTradeBasedOnPriceImpactRequest {
  /** from_coin is the total amount of tokens that the user wants to sell. */
  fromCoin: Coin;
  /**
   * to_coin_denom is the denom identifier of the token that the user wants to
   * buy.
   */
  toCoinDenom: string;
  /**
   * pool_id is the identifier of the liquidity pool that the trade will occur
   * on.
   */
  poolId: bigint;
  /**
   * max_price_impact is the maximum percentage that the user is willing
   * to affect the price of the liquidity pool.
   */
  maxPriceImpact: string;
  /**
   * external_price is an optional external price that the user can enter.
   * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
   * any time.
   */
  externalPrice: string;
}
export interface QueryEstimateTradeBasedOnPriceImpactRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateTradeBasedOnPriceImpactRequest";
  value: Uint8Array;
}
export interface QueryEstimateTradeBasedOnPriceImpactRequestAmino {
  /** from_coin is the total amount of tokens that the user wants to sell. */
  from_coin?: CoinAmino;
  /**
   * to_coin_denom is the denom identifier of the token that the user wants to
   * buy.
   */
  to_coin_denom?: string;
  /**
   * pool_id is the identifier of the liquidity pool that the trade will occur
   * on.
   */
  pool_id?: string;
  /**
   * max_price_impact is the maximum percentage that the user is willing
   * to affect the price of the liquidity pool.
   */
  max_price_impact?: string;
  /**
   * external_price is an optional external price that the user can enter.
   * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
   * any time.
   */
  external_price?: string;
}
export interface QueryEstimateTradeBasedOnPriceImpactRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateTradeBasedOnPriceImpactRequest";
  value: QueryEstimateTradeBasedOnPriceImpactRequestAmino;
}
export interface QueryEstimateTradeBasedOnPriceImpactRequestSDKType {
  from_coin: CoinSDKType;
  to_coin_denom: string;
  pool_id: bigint;
  max_price_impact: string;
  external_price: string;
}
export interface QueryEstimateTradeBasedOnPriceImpactResponse {
  /**
   * input_coin is the actual input amount that would be tradeable
   * under the specified price impact.
   */
  inputCoin: Coin;
  /**
   * output_coin is the amount of tokens of the ToCoinDenom type
   * that will be received for the actual InputCoin trade.
   */
  outputCoin: Coin;
}
export interface QueryEstimateTradeBasedOnPriceImpactResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateTradeBasedOnPriceImpactResponse";
  value: Uint8Array;
}
export interface QueryEstimateTradeBasedOnPriceImpactResponseAmino {
  /**
   * input_coin is the actual input amount that would be tradeable
   * under the specified price impact.
   */
  input_coin?: CoinAmino;
  /**
   * output_coin is the amount of tokens of the ToCoinDenom type
   * that will be received for the actual InputCoin trade.
   */
  output_coin?: CoinAmino;
}
export interface QueryEstimateTradeBasedOnPriceImpactResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateTradeBasedOnPriceImpactResponse";
  value: QueryEstimateTradeBasedOnPriceImpactResponseAmino;
}
export interface QueryEstimateTradeBasedOnPriceImpactResponseSDKType {
  input_coin: CoinSDKType;
  output_coin: CoinSDKType;
}
export interface QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest {
  /** @deprecated */
  poolId?: bigint;
  routesPoolId: bigint[];
  routesTokenInDenom: string[];
  tokenOut: string;
}
export interface QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest";
  value: Uint8Array;
}
export interface QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
  /** @deprecated */
  pool_id?: string;
  routes_pool_id?: string[];
  routes_token_in_denom?: string[];
  token_out?: string;
}
export interface QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest";
  value: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino;
}
export interface QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestSDKType {
  /** @deprecated */
  pool_id?: bigint;
  routes_pool_id: bigint[];
  routes_token_in_denom: string[];
  token_out: string;
}
export interface QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse {
  tokenInAmount: string;
}
export interface QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse";
  value: Uint8Array;
}
export interface QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseAmino {
  token_in_amount?: string;
}
export interface QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse";
  value: QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseAmino;
}
export interface QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseSDKType {
  token_in_amount: string;
}
export interface QueryEstimateSwapExactAmountOutRequest {
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  poolId?: bigint;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
export interface QueryEstimateSwapExactAmountOutRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutRequest";
  value: Uint8Array;
}
export interface QueryEstimateSwapExactAmountOutRequestAmino {
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  pool_id?: string;
  routes?: SwapAmountOutRouteAmino[];
  token_out?: string;
}
export interface QueryEstimateSwapExactAmountOutRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutRequest";
  value: QueryEstimateSwapExactAmountOutRequestAmino;
}
export interface QueryEstimateSwapExactAmountOutRequestSDKType {
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  pool_id?: bigint;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
export interface QueryEstimateSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface QueryEstimateSwapExactAmountOutResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface QueryEstimateSwapExactAmountOutResponseAmino {
  token_in_amount?: string;
}
export interface QueryEstimateSwapExactAmountOutResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutResponse";
  value: QueryEstimateSwapExactAmountOutResponseAmino;
}
export interface QueryEstimateSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
export interface QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest {
  /** @deprecated */
  poolId?: bigint;
  tokenIn: string;
  routesPoolId: bigint[];
  routesTokenOutDenom: string[];
}
export interface QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest";
  value: Uint8Array;
}
export interface QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestAmino {
  /** @deprecated */
  pool_id?: string;
  token_in?: string;
  routes_pool_id?: string[];
  routes_token_out_denom?: string[];
}
export interface QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest";
  value: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestAmino;
}
export interface QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestSDKType {
  /** @deprecated */
  pool_id?: bigint;
  token_in: string;
  routes_pool_id: bigint[];
  routes_token_out_denom: string[];
}
export interface QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse {
  tokenOutAmount: string;
}
export interface QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse";
  value: Uint8Array;
}
export interface QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseAmino {
  token_out_amount?: string;
}
export interface QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse";
  value: QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseAmino;
}
export interface QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseSDKType {
  token_out_amount: string;
}
export interface QueryEstimateSwapExactAmountInRequest {
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  poolId?: bigint;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}
export interface QueryEstimateSwapExactAmountInRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInRequest";
  value: Uint8Array;
}
export interface QueryEstimateSwapExactAmountInRequestAmino {
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  pool_id?: string;
  token_in?: string;
  routes?: SwapAmountInRouteAmino[];
}
export interface QueryEstimateSwapExactAmountInRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInRequest";
  value: QueryEstimateSwapExactAmountInRequestAmino;
}
export interface QueryEstimateSwapExactAmountInRequestSDKType {
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  pool_id?: bigint;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
export interface QueryEstimateSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface QueryEstimateSwapExactAmountInResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface QueryEstimateSwapExactAmountInResponseAmino {
  token_out_amount?: string;
}
export interface QueryEstimateSwapExactAmountInResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInResponse";
  value: QueryEstimateSwapExactAmountInResponseAmino;
}
export interface QueryEstimateSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountOutRequest {
  poolId: bigint;
  tokenInDenom: string;
  tokenOut: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountOutRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountOutRequest";
  value: Uint8Array;
}
export interface QueryEstimateSinglePoolSwapExactAmountOutRequestAmino {
  pool_id?: string;
  token_in_denom?: string;
  token_out?: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountOutRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountOutRequest";
  value: QueryEstimateSinglePoolSwapExactAmountOutRequestAmino;
}
export interface QueryEstimateSinglePoolSwapExactAmountOutRequestSDKType {
  pool_id: bigint;
  token_in_denom: string;
  token_out: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountOutResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface QueryEstimateSinglePoolSwapExactAmountOutResponseAmino {
  token_in_amount?: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountOutResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountOutResponse";
  value: QueryEstimateSinglePoolSwapExactAmountOutResponseAmino;
}
export interface QueryEstimateSinglePoolSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountInRequest {
  poolId: bigint;
  tokenIn: string;
  tokenOutDenom: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountInRequestProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountInRequest";
  value: Uint8Array;
}
export interface QueryEstimateSinglePoolSwapExactAmountInRequestAmino {
  pool_id?: string;
  token_in?: string;
  token_out_denom?: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountInRequestAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountInRequest";
  value: QueryEstimateSinglePoolSwapExactAmountInRequestAmino;
}
export interface QueryEstimateSinglePoolSwapExactAmountInRequestSDKType {
  pool_id: bigint;
  token_in: string;
  token_out_denom: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountInResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface QueryEstimateSinglePoolSwapExactAmountInResponseAmino {
  token_out_amount?: string;
}
export interface QueryEstimateSinglePoolSwapExactAmountInResponseAminoMsg {
  type: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountInResponse";
  value: QueryEstimateSinglePoolSwapExactAmountInResponseAmino;
}
export interface QueryEstimateSinglePoolSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/zigchain.poolmanager.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/zigchain.poolmanager.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/zigchain.poolmanager.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/zigchain.poolmanager.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
function createBaseEstimateSwapExactAmountInResponse(): EstimateSwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const EstimateSwapExactAmountInResponse = {
  typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountInResponse",
  encode(message: EstimateSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EstimateSwapExactAmountInResponse>): EstimateSwapExactAmountInResponse {
    const message = createBaseEstimateSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromAmino(object: EstimateSwapExactAmountInResponseAmino): EstimateSwapExactAmountInResponse {
    const message = createBaseEstimateSwapExactAmountInResponse();
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountInResponseAminoMsg): EstimateSwapExactAmountInResponse {
    return EstimateSwapExactAmountInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EstimateSwapExactAmountInResponseProtoMsg): EstimateSwapExactAmountInResponse {
    return EstimateSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountInResponse): Uint8Array {
    return EstimateSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountInResponse",
      value: EstimateSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseEstimateSwapExactAmountOutRequest(): EstimateSwapExactAmountOutRequest {
  return {
    sender: undefined,
    poolId: undefined,
    routes: [],
    tokenOut: ""
  };
}
export const EstimateSwapExactAmountOutRequest = {
  typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountOutRequest",
  encode(message: EstimateSwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== undefined) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EstimateSwapExactAmountOutRequest>): EstimateSwapExactAmountOutRequest {
    const message = createBaseEstimateSwapExactAmountOutRequest();
    message.sender = object.sender ?? undefined;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : undefined;
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: EstimateSwapExactAmountOutRequestAmino): EstimateSwapExactAmountOutRequest {
    const message = createBaseEstimateSwapExactAmountOutRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === null ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountOutRequestAminoMsg): EstimateSwapExactAmountOutRequest {
    return EstimateSwapExactAmountOutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EstimateSwapExactAmountOutRequestProtoMsg): EstimateSwapExactAmountOutRequest {
    return EstimateSwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountOutRequest): Uint8Array {
    return EstimateSwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountOutRequest",
      value: EstimateSwapExactAmountOutRequest.encode(message).finish()
    };
  }
};
function createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest(): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
  return {
    poolId: undefined,
    routesPoolId: [],
    routesTokenInDenom: [],
    tokenOut: ""
  };
}
export const EstimateSwapExactAmountOutWithPrimitiveTypesRequest = {
  typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountOutWithPrimitiveTypesRequest",
  encode(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== undefined) {
      writer.uint32(8).uint64(message.poolId);
    }
    writer.uint32(18).fork();
    for (const v of message.routesPoolId) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.routesTokenInDenom) {
      writer.uint32(26).string(v!);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.routesPoolId.push(reader.uint64());
            }
          } else {
            message.routesPoolId.push(reader.uint64());
          }
          break;
        case 3:
          message.routesTokenInDenom.push(reader.string());
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EstimateSwapExactAmountOutWithPrimitiveTypesRequest>): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : undefined;
    message.routesPoolId = object.routesPoolId?.map(e => BigInt(e.toString())) || [];
    message.routesTokenInDenom = object.routesTokenInDenom?.map(e => e) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.routesPoolId = object.routes_pool_id?.map(e => BigInt(e)) || [];
    message.routesTokenInDenom = object.routes_token_in_denom?.map(e => e) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.routesPoolId) {
      obj.routes_pool_id = message.routesPoolId.map(e => e.toString());
    } else {
      obj.routes_pool_id = message.routesPoolId;
    }
    if (message.routesTokenInDenom) {
      obj.routes_token_in_denom = message.routesTokenInDenom.map(e => e);
    } else {
      obj.routes_token_in_denom = message.routesTokenInDenom;
    }
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Uint8Array {
    return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountOutWithPrimitiveTypesRequest",
      value: EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(message).finish()
    };
  }
};
function createBaseEstimateSwapExactAmountOutResponse(): EstimateSwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const EstimateSwapExactAmountOutResponse = {
  typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountOutResponse",
  encode(message: EstimateSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EstimateSwapExactAmountOutResponse>): EstimateSwapExactAmountOutResponse {
    const message = createBaseEstimateSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromAmino(object: EstimateSwapExactAmountOutResponseAmino): EstimateSwapExactAmountOutResponse {
    const message = createBaseEstimateSwapExactAmountOutResponse();
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    return message;
  },
  toAmino(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountOutResponseAminoMsg): EstimateSwapExactAmountOutResponse {
    return EstimateSwapExactAmountOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EstimateSwapExactAmountOutResponseProtoMsg): EstimateSwapExactAmountOutResponse {
    return EstimateSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountOutResponse): Uint8Array {
    return EstimateSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.EstimateSwapExactAmountOutResponse",
      value: EstimateSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseEstimateTradeBasedOnPriceImpactRequest(): EstimateTradeBasedOnPriceImpactRequest {
  return {
    fromCoin: Coin.fromPartial({}),
    toCoinDenom: "",
    poolId: BigInt(0),
    maxPriceImpact: "",
    externalPrice: ""
  };
}
export const EstimateTradeBasedOnPriceImpactRequest = {
  typeUrl: "/zigchain.poolmanager.EstimateTradeBasedOnPriceImpactRequest",
  encode(message: EstimateTradeBasedOnPriceImpactRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromCoin !== undefined) {
      Coin.encode(message.fromCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.toCoinDenom !== "") {
      writer.uint32(18).string(message.toCoinDenom);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.maxPriceImpact !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.maxPriceImpact, 18).atomics);
    }
    if (message.externalPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.externalPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateTradeBasedOnPriceImpactRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.toCoinDenom = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.maxPriceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.externalPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EstimateTradeBasedOnPriceImpactRequest>): EstimateTradeBasedOnPriceImpactRequest {
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    message.fromCoin = object.fromCoin !== undefined && object.fromCoin !== null ? Coin.fromPartial(object.fromCoin) : undefined;
    message.toCoinDenom = object.toCoinDenom ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.maxPriceImpact = object.maxPriceImpact ?? "";
    message.externalPrice = object.externalPrice ?? "";
    return message;
  },
  fromAmino(object: EstimateTradeBasedOnPriceImpactRequestAmino): EstimateTradeBasedOnPriceImpactRequest {
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    if (object.from_coin !== undefined && object.from_coin !== null) {
      message.fromCoin = Coin.fromAmino(object.from_coin);
    }
    if (object.to_coin_denom !== undefined && object.to_coin_denom !== null) {
      message.toCoinDenom = object.to_coin_denom;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.max_price_impact !== undefined && object.max_price_impact !== null) {
      message.maxPriceImpact = object.max_price_impact;
    }
    if (object.external_price !== undefined && object.external_price !== null) {
      message.externalPrice = object.external_price;
    }
    return message;
  },
  toAmino(message: EstimateTradeBasedOnPriceImpactRequest): EstimateTradeBasedOnPriceImpactRequestAmino {
    const obj: any = {};
    obj.from_coin = message.fromCoin ? Coin.toAmino(message.fromCoin) : undefined;
    obj.to_coin_denom = message.toCoinDenom === "" ? undefined : message.toCoinDenom;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.max_price_impact = message.maxPriceImpact === "" ? undefined : message.maxPriceImpact;
    obj.external_price = message.externalPrice === "" ? undefined : message.externalPrice;
    return obj;
  },
  fromAminoMsg(object: EstimateTradeBasedOnPriceImpactRequestAminoMsg): EstimateTradeBasedOnPriceImpactRequest {
    return EstimateTradeBasedOnPriceImpactRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EstimateTradeBasedOnPriceImpactRequestProtoMsg): EstimateTradeBasedOnPriceImpactRequest {
    return EstimateTradeBasedOnPriceImpactRequest.decode(message.value);
  },
  toProto(message: EstimateTradeBasedOnPriceImpactRequest): Uint8Array {
    return EstimateTradeBasedOnPriceImpactRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateTradeBasedOnPriceImpactRequest): EstimateTradeBasedOnPriceImpactRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.EstimateTradeBasedOnPriceImpactRequest",
      value: EstimateTradeBasedOnPriceImpactRequest.encode(message).finish()
    };
  }
};
function createBaseEstimateTradeBasedOnPriceImpactResponse(): EstimateTradeBasedOnPriceImpactResponse {
  return {
    inputCoin: Coin.fromPartial({}),
    outputCoin: Coin.fromPartial({})
  };
}
export const EstimateTradeBasedOnPriceImpactResponse = {
  typeUrl: "/zigchain.poolmanager.EstimateTradeBasedOnPriceImpactResponse",
  encode(message: EstimateTradeBasedOnPriceImpactResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inputCoin !== undefined) {
      Coin.encode(message.inputCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.outputCoin !== undefined) {
      Coin.encode(message.outputCoin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateTradeBasedOnPriceImpactResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.outputCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EstimateTradeBasedOnPriceImpactResponse>): EstimateTradeBasedOnPriceImpactResponse {
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    message.inputCoin = object.inputCoin !== undefined && object.inputCoin !== null ? Coin.fromPartial(object.inputCoin) : undefined;
    message.outputCoin = object.outputCoin !== undefined && object.outputCoin !== null ? Coin.fromPartial(object.outputCoin) : undefined;
    return message;
  },
  fromAmino(object: EstimateTradeBasedOnPriceImpactResponseAmino): EstimateTradeBasedOnPriceImpactResponse {
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    if (object.input_coin !== undefined && object.input_coin !== null) {
      message.inputCoin = Coin.fromAmino(object.input_coin);
    }
    if (object.output_coin !== undefined && object.output_coin !== null) {
      message.outputCoin = Coin.fromAmino(object.output_coin);
    }
    return message;
  },
  toAmino(message: EstimateTradeBasedOnPriceImpactResponse): EstimateTradeBasedOnPriceImpactResponseAmino {
    const obj: any = {};
    obj.input_coin = message.inputCoin ? Coin.toAmino(message.inputCoin) : undefined;
    obj.output_coin = message.outputCoin ? Coin.toAmino(message.outputCoin) : undefined;
    return obj;
  },
  fromAminoMsg(object: EstimateTradeBasedOnPriceImpactResponseAminoMsg): EstimateTradeBasedOnPriceImpactResponse {
    return EstimateTradeBasedOnPriceImpactResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EstimateTradeBasedOnPriceImpactResponseProtoMsg): EstimateTradeBasedOnPriceImpactResponse {
    return EstimateTradeBasedOnPriceImpactResponse.decode(message.value);
  },
  toProto(message: EstimateTradeBasedOnPriceImpactResponse): Uint8Array {
    return EstimateTradeBasedOnPriceImpactResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateTradeBasedOnPriceImpactResponse): EstimateTradeBasedOnPriceImpactResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.EstimateTradeBasedOnPriceImpactResponse",
      value: EstimateTradeBasedOnPriceImpactResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolsRequest(): QueryAllPoolsRequest {
  return {};
}
export const QueryAllPoolsRequest = {
  typeUrl: "/zigchain.poolmanager.QueryAllPoolsRequest",
  encode(_: QueryAllPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryAllPoolsRequest>): QueryAllPoolsRequest {
    const message = createBaseQueryAllPoolsRequest();
    return message;
  },
  fromAmino(_: QueryAllPoolsRequestAmino): QueryAllPoolsRequest {
    const message = createBaseQueryAllPoolsRequest();
    return message;
  },
  toAmino(_: QueryAllPoolsRequest): QueryAllPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolsRequestAminoMsg): QueryAllPoolsRequest {
    return QueryAllPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolsRequestProtoMsg): QueryAllPoolsRequest {
    return QueryAllPoolsRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolsRequest): Uint8Array {
    return QueryAllPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolsRequest): QueryAllPoolsRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryAllPoolsRequest",
      value: QueryAllPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolsResponse(): QueryAllPoolsResponse {
  return {
    pools: []
  };
}
export const QueryAllPoolsResponse = {
  typeUrl: "/zigchain.poolmanager.QueryAllPoolsResponse",
  encode(message: QueryAllPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v! as Any, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPoolsResponse>): QueryAllPoolsResponse {
    const message = createBaseQueryAllPoolsResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllPoolsResponseAmino): QueryAllPoolsResponse {
    const message = createBaseQueryAllPoolsResponse();
    message.pools = object.pools?.map(e => PoolI_FromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllPoolsResponse): QueryAllPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolI_ToAmino(e as Any) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolsResponseAminoMsg): QueryAllPoolsResponse {
    return QueryAllPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolsResponseProtoMsg): QueryAllPoolsResponse {
    return QueryAllPoolsResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolsResponse): Uint8Array {
    return QueryAllPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolsResponse): QueryAllPoolsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryAllPoolsResponse",
      value: QueryAllPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/zigchain.poolmanager.QueryPoolRequest",
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolRequest): QueryPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryPoolResponse = {
  typeUrl: "/zigchain.poolmanager.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode(message.pool as Any, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PoolI_InterfaceDecoder(reader) as Any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = PoolI_FromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? PoolI_ToAmino(message.pool as Any) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNumPoolRequest(): QueryNumPoolRequest {
  return {};
}
export const QueryNumPoolRequest = {
  typeUrl: "/zigchain.poolmanager.QueryNumPoolRequest",
  encode(_: QueryNumPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryNumPoolRequest>): QueryNumPoolRequest {
    const message = createBaseQueryNumPoolRequest();
    return message;
  },
  fromAmino(_: QueryNumPoolRequestAmino): QueryNumPoolRequest {
    const message = createBaseQueryNumPoolRequest();
    return message;
  },
  toAmino(_: QueryNumPoolRequest): QueryNumPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNumPoolRequestAminoMsg): QueryNumPoolRequest {
    return QueryNumPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNumPoolRequestProtoMsg): QueryNumPoolRequest {
    return QueryNumPoolRequest.decode(message.value);
  },
  toProto(message: QueryNumPoolRequest): Uint8Array {
    return QueryNumPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolRequest): QueryNumPoolRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryNumPoolRequest",
      value: QueryNumPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNumPoolResponse(): QueryNumPoolResponse {
  return {
    numPools: BigInt(0)
  };
}
export const QueryNumPoolResponse = {
  typeUrl: "/zigchain.poolmanager.QueryNumPoolResponse",
  encode(message: QueryNumPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numPools !== BigInt(0)) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryNumPoolResponse>): QueryNumPoolResponse {
    const message = createBaseQueryNumPoolResponse();
    message.numPools = object.numPools !== undefined && object.numPools !== null ? BigInt(object.numPools.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryNumPoolResponseAmino): QueryNumPoolResponse {
    const message = createBaseQueryNumPoolResponse();
    if (object.num_pools !== undefined && object.num_pools !== null) {
      message.numPools = BigInt(object.num_pools);
    }
    return message;
  },
  toAmino(message: QueryNumPoolResponse): QueryNumPoolResponseAmino {
    const obj: any = {};
    obj.num_pools = message.numPools !== BigInt(0) ? message.numPools?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNumPoolResponseAminoMsg): QueryNumPoolResponse {
    return QueryNumPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNumPoolResponseProtoMsg): QueryNumPoolResponse {
    return QueryNumPoolResponse.decode(message.value);
  },
  toProto(message: QueryNumPoolResponse): Uint8Array {
    return QueryNumPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolResponse): QueryNumPoolResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryNumPoolResponse",
      value: QueryNumPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTradingPairTakerFeeRequest(): QueryTradingPairTakerFeeRequest {
  return {
    denom0: "",
    denom1: ""
  };
}
export const QueryTradingPairTakerFeeRequest = {
  typeUrl: "/zigchain.poolmanager.QueryTradingPairTakerFeeRequest",
  encode(message: QueryTradingPairTakerFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradingPairTakerFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradingPairTakerFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTradingPairTakerFeeRequest>): QueryTradingPairTakerFeeRequest {
    const message = createBaseQueryTradingPairTakerFeeRequest();
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    return message;
  },
  fromAmino(object: QueryTradingPairTakerFeeRequestAmino): QueryTradingPairTakerFeeRequest {
    const message = createBaseQueryTradingPairTakerFeeRequest();
    if (object.denom_0 !== undefined && object.denom_0 !== null) {
      message.denom0 = object.denom_0;
    }
    if (object.denom_1 !== undefined && object.denom_1 !== null) {
      message.denom1 = object.denom_1;
    }
    return message;
  },
  toAmino(message: QueryTradingPairTakerFeeRequest): QueryTradingPairTakerFeeRequestAmino {
    const obj: any = {};
    obj.denom_0 = message.denom0 === "" ? undefined : message.denom0;
    obj.denom_1 = message.denom1 === "" ? undefined : message.denom1;
    return obj;
  },
  fromAminoMsg(object: QueryTradingPairTakerFeeRequestAminoMsg): QueryTradingPairTakerFeeRequest {
    return QueryTradingPairTakerFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradingPairTakerFeeRequestProtoMsg): QueryTradingPairTakerFeeRequest {
    return QueryTradingPairTakerFeeRequest.decode(message.value);
  },
  toProto(message: QueryTradingPairTakerFeeRequest): Uint8Array {
    return QueryTradingPairTakerFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTradingPairTakerFeeRequest): QueryTradingPairTakerFeeRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTradingPairTakerFeeRequest",
      value: QueryTradingPairTakerFeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTradingPairTakerFeeResponse(): QueryTradingPairTakerFeeResponse {
  return {
    takerFee: ""
  };
}
export const QueryTradingPairTakerFeeResponse = {
  typeUrl: "/zigchain.poolmanager.QueryTradingPairTakerFeeResponse",
  encode(message: QueryTradingPairTakerFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.takerFee !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.takerFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTradingPairTakerFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradingPairTakerFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTradingPairTakerFeeResponse>): QueryTradingPairTakerFeeResponse {
    const message = createBaseQueryTradingPairTakerFeeResponse();
    message.takerFee = object.takerFee ?? "";
    return message;
  },
  fromAmino(object: QueryTradingPairTakerFeeResponseAmino): QueryTradingPairTakerFeeResponse {
    const message = createBaseQueryTradingPairTakerFeeResponse();
    if (object.taker_fee !== undefined && object.taker_fee !== null) {
      message.takerFee = object.taker_fee;
    }
    return message;
  },
  toAmino(message: QueryTradingPairTakerFeeResponse): QueryTradingPairTakerFeeResponseAmino {
    const obj: any = {};
    obj.taker_fee = message.takerFee === "" ? undefined : message.takerFee;
    return obj;
  },
  fromAminoMsg(object: QueryTradingPairTakerFeeResponseAminoMsg): QueryTradingPairTakerFeeResponse {
    return QueryTradingPairTakerFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradingPairTakerFeeResponseProtoMsg): QueryTradingPairTakerFeeResponse {
    return QueryTradingPairTakerFeeResponse.decode(message.value);
  },
  toProto(message: QueryTradingPairTakerFeeResponse): Uint8Array {
    return QueryTradingPairTakerFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTradingPairTakerFeeResponse): QueryTradingPairTakerFeeResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTradingPairTakerFeeResponse",
      value: QueryTradingPairTakerFeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTakerFeeShareDenomsToAccruedValueRequest(): QueryTakerFeeShareDenomsToAccruedValueRequest {
  return {
    denom: "",
    takerFeeDenom: ""
  };
}
export const QueryTakerFeeShareDenomsToAccruedValueRequest = {
  typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareDenomsToAccruedValueRequest",
  encode(message: QueryTakerFeeShareDenomsToAccruedValueRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.takerFeeDenom !== "") {
      writer.uint32(18).string(message.takerFeeDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTakerFeeShareDenomsToAccruedValueRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTakerFeeShareDenomsToAccruedValueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.takerFeeDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTakerFeeShareDenomsToAccruedValueRequest>): QueryTakerFeeShareDenomsToAccruedValueRequest {
    const message = createBaseQueryTakerFeeShareDenomsToAccruedValueRequest();
    message.denom = object.denom ?? "";
    message.takerFeeDenom = object.takerFeeDenom ?? "";
    return message;
  },
  fromAmino(object: QueryTakerFeeShareDenomsToAccruedValueRequestAmino): QueryTakerFeeShareDenomsToAccruedValueRequest {
    const message = createBaseQueryTakerFeeShareDenomsToAccruedValueRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.takerFeeDenom !== undefined && object.takerFeeDenom !== null) {
      message.takerFeeDenom = object.takerFeeDenom;
    }
    return message;
  },
  toAmino(message: QueryTakerFeeShareDenomsToAccruedValueRequest): QueryTakerFeeShareDenomsToAccruedValueRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.takerFeeDenom = message.takerFeeDenom === "" ? undefined : message.takerFeeDenom;
    return obj;
  },
  fromAminoMsg(object: QueryTakerFeeShareDenomsToAccruedValueRequestAminoMsg): QueryTakerFeeShareDenomsToAccruedValueRequest {
    return QueryTakerFeeShareDenomsToAccruedValueRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTakerFeeShareDenomsToAccruedValueRequestProtoMsg): QueryTakerFeeShareDenomsToAccruedValueRequest {
    return QueryTakerFeeShareDenomsToAccruedValueRequest.decode(message.value);
  },
  toProto(message: QueryTakerFeeShareDenomsToAccruedValueRequest): Uint8Array {
    return QueryTakerFeeShareDenomsToAccruedValueRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTakerFeeShareDenomsToAccruedValueRequest): QueryTakerFeeShareDenomsToAccruedValueRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareDenomsToAccruedValueRequest",
      value: QueryTakerFeeShareDenomsToAccruedValueRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTakerFeeShareDenomsToAccruedValueResponse(): QueryTakerFeeShareDenomsToAccruedValueResponse {
  return {
    amount: ""
  };
}
export const QueryTakerFeeShareDenomsToAccruedValueResponse = {
  typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareDenomsToAccruedValueResponse",
  encode(message: QueryTakerFeeShareDenomsToAccruedValueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTakerFeeShareDenomsToAccruedValueResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTakerFeeShareDenomsToAccruedValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTakerFeeShareDenomsToAccruedValueResponse>): QueryTakerFeeShareDenomsToAccruedValueResponse {
    const message = createBaseQueryTakerFeeShareDenomsToAccruedValueResponse();
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: QueryTakerFeeShareDenomsToAccruedValueResponseAmino): QueryTakerFeeShareDenomsToAccruedValueResponse {
    const message = createBaseQueryTakerFeeShareDenomsToAccruedValueResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: QueryTakerFeeShareDenomsToAccruedValueResponse): QueryTakerFeeShareDenomsToAccruedValueResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: QueryTakerFeeShareDenomsToAccruedValueResponseAminoMsg): QueryTakerFeeShareDenomsToAccruedValueResponse {
    return QueryTakerFeeShareDenomsToAccruedValueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTakerFeeShareDenomsToAccruedValueResponseProtoMsg): QueryTakerFeeShareDenomsToAccruedValueResponse {
    return QueryTakerFeeShareDenomsToAccruedValueResponse.decode(message.value);
  },
  toProto(message: QueryTakerFeeShareDenomsToAccruedValueResponse): Uint8Array {
    return QueryTakerFeeShareDenomsToAccruedValueResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTakerFeeShareDenomsToAccruedValueResponse): QueryTakerFeeShareDenomsToAccruedValueResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareDenomsToAccruedValueResponse",
      value: QueryTakerFeeShareDenomsToAccruedValueResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTakerFeeShareAgreementFromDenomRequest(): QueryTakerFeeShareAgreementFromDenomRequest {
  return {
    denom: ""
  };
}
export const QueryTakerFeeShareAgreementFromDenomRequest = {
  typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareAgreementFromDenomRequest",
  encode(message: QueryTakerFeeShareAgreementFromDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTakerFeeShareAgreementFromDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTakerFeeShareAgreementFromDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTakerFeeShareAgreementFromDenomRequest>): QueryTakerFeeShareAgreementFromDenomRequest {
    const message = createBaseQueryTakerFeeShareAgreementFromDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTakerFeeShareAgreementFromDenomRequestAmino): QueryTakerFeeShareAgreementFromDenomRequest {
    const message = createBaseQueryTakerFeeShareAgreementFromDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTakerFeeShareAgreementFromDenomRequest): QueryTakerFeeShareAgreementFromDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTakerFeeShareAgreementFromDenomRequestAminoMsg): QueryTakerFeeShareAgreementFromDenomRequest {
    return QueryTakerFeeShareAgreementFromDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTakerFeeShareAgreementFromDenomRequestProtoMsg): QueryTakerFeeShareAgreementFromDenomRequest {
    return QueryTakerFeeShareAgreementFromDenomRequest.decode(message.value);
  },
  toProto(message: QueryTakerFeeShareAgreementFromDenomRequest): Uint8Array {
    return QueryTakerFeeShareAgreementFromDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTakerFeeShareAgreementFromDenomRequest): QueryTakerFeeShareAgreementFromDenomRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareAgreementFromDenomRequest",
      value: QueryTakerFeeShareAgreementFromDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTakerFeeShareAgreementFromDenomResponse(): QueryTakerFeeShareAgreementFromDenomResponse {
  return {
    takerFeeShareAgreement: TakerFeeShareAgreement.fromPartial({})
  };
}
export const QueryTakerFeeShareAgreementFromDenomResponse = {
  typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareAgreementFromDenomResponse",
  encode(message: QueryTakerFeeShareAgreementFromDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.takerFeeShareAgreement !== undefined) {
      TakerFeeShareAgreement.encode(message.takerFeeShareAgreement, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTakerFeeShareAgreementFromDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTakerFeeShareAgreementFromDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeeShareAgreement = TakerFeeShareAgreement.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTakerFeeShareAgreementFromDenomResponse>): QueryTakerFeeShareAgreementFromDenomResponse {
    const message = createBaseQueryTakerFeeShareAgreementFromDenomResponse();
    message.takerFeeShareAgreement = object.takerFeeShareAgreement !== undefined && object.takerFeeShareAgreement !== null ? TakerFeeShareAgreement.fromPartial(object.takerFeeShareAgreement) : undefined;
    return message;
  },
  fromAmino(object: QueryTakerFeeShareAgreementFromDenomResponseAmino): QueryTakerFeeShareAgreementFromDenomResponse {
    const message = createBaseQueryTakerFeeShareAgreementFromDenomResponse();
    if (object.taker_fee_share_agreement !== undefined && object.taker_fee_share_agreement !== null) {
      message.takerFeeShareAgreement = TakerFeeShareAgreement.fromAmino(object.taker_fee_share_agreement);
    }
    return message;
  },
  toAmino(message: QueryTakerFeeShareAgreementFromDenomResponse): QueryTakerFeeShareAgreementFromDenomResponseAmino {
    const obj: any = {};
    obj.taker_fee_share_agreement = message.takerFeeShareAgreement ? TakerFeeShareAgreement.toAmino(message.takerFeeShareAgreement) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTakerFeeShareAgreementFromDenomResponseAminoMsg): QueryTakerFeeShareAgreementFromDenomResponse {
    return QueryTakerFeeShareAgreementFromDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTakerFeeShareAgreementFromDenomResponseProtoMsg): QueryTakerFeeShareAgreementFromDenomResponse {
    return QueryTakerFeeShareAgreementFromDenomResponse.decode(message.value);
  },
  toProto(message: QueryTakerFeeShareAgreementFromDenomResponse): Uint8Array {
    return QueryTakerFeeShareAgreementFromDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTakerFeeShareAgreementFromDenomResponse): QueryTakerFeeShareAgreementFromDenomResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTakerFeeShareAgreementFromDenomResponse",
      value: QueryTakerFeeShareAgreementFromDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTakerFeeShareAgreementsRequest(): QueryAllTakerFeeShareAgreementsRequest {
  return {};
}
export const QueryAllTakerFeeShareAgreementsRequest = {
  typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAgreementsRequest",
  encode(_: QueryAllTakerFeeShareAgreementsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTakerFeeShareAgreementsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTakerFeeShareAgreementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryAllTakerFeeShareAgreementsRequest>): QueryAllTakerFeeShareAgreementsRequest {
    const message = createBaseQueryAllTakerFeeShareAgreementsRequest();
    return message;
  },
  fromAmino(_: QueryAllTakerFeeShareAgreementsRequestAmino): QueryAllTakerFeeShareAgreementsRequest {
    const message = createBaseQueryAllTakerFeeShareAgreementsRequest();
    return message;
  },
  toAmino(_: QueryAllTakerFeeShareAgreementsRequest): QueryAllTakerFeeShareAgreementsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllTakerFeeShareAgreementsRequestAminoMsg): QueryAllTakerFeeShareAgreementsRequest {
    return QueryAllTakerFeeShareAgreementsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTakerFeeShareAgreementsRequestProtoMsg): QueryAllTakerFeeShareAgreementsRequest {
    return QueryAllTakerFeeShareAgreementsRequest.decode(message.value);
  },
  toProto(message: QueryAllTakerFeeShareAgreementsRequest): Uint8Array {
    return QueryAllTakerFeeShareAgreementsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTakerFeeShareAgreementsRequest): QueryAllTakerFeeShareAgreementsRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAgreementsRequest",
      value: QueryAllTakerFeeShareAgreementsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTakerFeeShareAgreementsResponse(): QueryAllTakerFeeShareAgreementsResponse {
  return {
    takerFeeShareAgreements: []
  };
}
export const QueryAllTakerFeeShareAgreementsResponse = {
  typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAgreementsResponse",
  encode(message: QueryAllTakerFeeShareAgreementsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.takerFeeShareAgreements) {
      TakerFeeShareAgreement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTakerFeeShareAgreementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTakerFeeShareAgreementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeeShareAgreements.push(TakerFeeShareAgreement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTakerFeeShareAgreementsResponse>): QueryAllTakerFeeShareAgreementsResponse {
    const message = createBaseQueryAllTakerFeeShareAgreementsResponse();
    message.takerFeeShareAgreements = object.takerFeeShareAgreements?.map(e => TakerFeeShareAgreement.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllTakerFeeShareAgreementsResponseAmino): QueryAllTakerFeeShareAgreementsResponse {
    const message = createBaseQueryAllTakerFeeShareAgreementsResponse();
    message.takerFeeShareAgreements = object.taker_fee_share_agreements?.map(e => TakerFeeShareAgreement.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllTakerFeeShareAgreementsResponse): QueryAllTakerFeeShareAgreementsResponseAmino {
    const obj: any = {};
    if (message.takerFeeShareAgreements) {
      obj.taker_fee_share_agreements = message.takerFeeShareAgreements.map(e => e ? TakerFeeShareAgreement.toAmino(e) : undefined);
    } else {
      obj.taker_fee_share_agreements = message.takerFeeShareAgreements;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllTakerFeeShareAgreementsResponseAminoMsg): QueryAllTakerFeeShareAgreementsResponse {
    return QueryAllTakerFeeShareAgreementsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTakerFeeShareAgreementsResponseProtoMsg): QueryAllTakerFeeShareAgreementsResponse {
    return QueryAllTakerFeeShareAgreementsResponse.decode(message.value);
  },
  toProto(message: QueryAllTakerFeeShareAgreementsResponse): Uint8Array {
    return QueryAllTakerFeeShareAgreementsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTakerFeeShareAgreementsResponse): QueryAllTakerFeeShareAgreementsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAgreementsResponse",
      value: QueryAllTakerFeeShareAgreementsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTakerFeeShareAccumulatorsRequest(): QueryAllTakerFeeShareAccumulatorsRequest {
  return {};
}
export const QueryAllTakerFeeShareAccumulatorsRequest = {
  typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAccumulatorsRequest",
  encode(_: QueryAllTakerFeeShareAccumulatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTakerFeeShareAccumulatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTakerFeeShareAccumulatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryAllTakerFeeShareAccumulatorsRequest>): QueryAllTakerFeeShareAccumulatorsRequest {
    const message = createBaseQueryAllTakerFeeShareAccumulatorsRequest();
    return message;
  },
  fromAmino(_: QueryAllTakerFeeShareAccumulatorsRequestAmino): QueryAllTakerFeeShareAccumulatorsRequest {
    const message = createBaseQueryAllTakerFeeShareAccumulatorsRequest();
    return message;
  },
  toAmino(_: QueryAllTakerFeeShareAccumulatorsRequest): QueryAllTakerFeeShareAccumulatorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllTakerFeeShareAccumulatorsRequestAminoMsg): QueryAllTakerFeeShareAccumulatorsRequest {
    return QueryAllTakerFeeShareAccumulatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTakerFeeShareAccumulatorsRequestProtoMsg): QueryAllTakerFeeShareAccumulatorsRequest {
    return QueryAllTakerFeeShareAccumulatorsRequest.decode(message.value);
  },
  toProto(message: QueryAllTakerFeeShareAccumulatorsRequest): Uint8Array {
    return QueryAllTakerFeeShareAccumulatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTakerFeeShareAccumulatorsRequest): QueryAllTakerFeeShareAccumulatorsRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAccumulatorsRequest",
      value: QueryAllTakerFeeShareAccumulatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTakerFeeShareAccumulatorsResponse(): QueryAllTakerFeeShareAccumulatorsResponse {
  return {
    takerFeeSkimAccumulators: []
  };
}
export const QueryAllTakerFeeShareAccumulatorsResponse = {
  typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAccumulatorsResponse",
  encode(message: QueryAllTakerFeeShareAccumulatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.takerFeeSkimAccumulators) {
      TakerFeeSkimAccumulator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTakerFeeShareAccumulatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTakerFeeShareAccumulatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeeSkimAccumulators.push(TakerFeeSkimAccumulator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTakerFeeShareAccumulatorsResponse>): QueryAllTakerFeeShareAccumulatorsResponse {
    const message = createBaseQueryAllTakerFeeShareAccumulatorsResponse();
    message.takerFeeSkimAccumulators = object.takerFeeSkimAccumulators?.map(e => TakerFeeSkimAccumulator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllTakerFeeShareAccumulatorsResponseAmino): QueryAllTakerFeeShareAccumulatorsResponse {
    const message = createBaseQueryAllTakerFeeShareAccumulatorsResponse();
    message.takerFeeSkimAccumulators = object.taker_fee_skim_accumulators?.map(e => TakerFeeSkimAccumulator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllTakerFeeShareAccumulatorsResponse): QueryAllTakerFeeShareAccumulatorsResponseAmino {
    const obj: any = {};
    if (message.takerFeeSkimAccumulators) {
      obj.taker_fee_skim_accumulators = message.takerFeeSkimAccumulators.map(e => e ? TakerFeeSkimAccumulator.toAmino(e) : undefined);
    } else {
      obj.taker_fee_skim_accumulators = message.takerFeeSkimAccumulators;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllTakerFeeShareAccumulatorsResponseAminoMsg): QueryAllTakerFeeShareAccumulatorsResponse {
    return QueryAllTakerFeeShareAccumulatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTakerFeeShareAccumulatorsResponseProtoMsg): QueryAllTakerFeeShareAccumulatorsResponse {
    return QueryAllTakerFeeShareAccumulatorsResponse.decode(message.value);
  },
  toProto(message: QueryAllTakerFeeShareAccumulatorsResponse): Uint8Array {
    return QueryAllTakerFeeShareAccumulatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTakerFeeShareAccumulatorsResponse): QueryAllTakerFeeShareAccumulatorsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryAllTakerFeeShareAccumulatorsResponse",
      value: QueryAllTakerFeeShareAccumulatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalVolumeForPoolRequest(): QueryTotalVolumeForPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryTotalVolumeForPoolRequest = {
  typeUrl: "/zigchain.poolmanager.QueryTotalVolumeForPoolRequest",
  encode(message: QueryTotalVolumeForPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalVolumeForPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalVolumeForPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalVolumeForPoolRequest>): QueryTotalVolumeForPoolRequest {
    const message = createBaseQueryTotalVolumeForPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTotalVolumeForPoolRequestAmino): QueryTotalVolumeForPoolRequest {
    const message = createBaseQueryTotalVolumeForPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryTotalVolumeForPoolRequest): QueryTotalVolumeForPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalVolumeForPoolRequestAminoMsg): QueryTotalVolumeForPoolRequest {
    return QueryTotalVolumeForPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalVolumeForPoolRequestProtoMsg): QueryTotalVolumeForPoolRequest {
    return QueryTotalVolumeForPoolRequest.decode(message.value);
  },
  toProto(message: QueryTotalVolumeForPoolRequest): Uint8Array {
    return QueryTotalVolumeForPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalVolumeForPoolRequest): QueryTotalVolumeForPoolRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTotalVolumeForPoolRequest",
      value: QueryTotalVolumeForPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalVolumeForPoolResponse(): QueryTotalVolumeForPoolResponse {
  return {
    volume: []
  };
}
export const QueryTotalVolumeForPoolResponse = {
  typeUrl: "/zigchain.poolmanager.QueryTotalVolumeForPoolResponse",
  encode(message: QueryTotalVolumeForPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.volume) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalVolumeForPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalVolumeForPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalVolumeForPoolResponse>): QueryTotalVolumeForPoolResponse {
    const message = createBaseQueryTotalVolumeForPoolResponse();
    message.volume = object.volume?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalVolumeForPoolResponseAmino): QueryTotalVolumeForPoolResponse {
    const message = createBaseQueryTotalVolumeForPoolResponse();
    message.volume = object.volume?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalVolumeForPoolResponse): QueryTotalVolumeForPoolResponseAmino {
    const obj: any = {};
    if (message.volume) {
      obj.volume = message.volume.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.volume = message.volume;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalVolumeForPoolResponseAminoMsg): QueryTotalVolumeForPoolResponse {
    return QueryTotalVolumeForPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalVolumeForPoolResponseProtoMsg): QueryTotalVolumeForPoolResponse {
    return QueryTotalVolumeForPoolResponse.decode(message.value);
  },
  toProto(message: QueryTotalVolumeForPoolResponse): Uint8Array {
    return QueryTotalVolumeForPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalVolumeForPoolResponse): QueryTotalVolumeForPoolResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTotalVolumeForPoolResponse",
      value: QueryTotalVolumeForPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryTotalPoolLiquidityRequest = {
  typeUrl: "/zigchain.poolmanager.QueryTotalPoolLiquidityRequest",
  encode(message: QueryTotalPoolLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTotalPoolLiquidityRequestAmino): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalPoolLiquidityRequestAminoMsg): QueryTotalPoolLiquidityRequest {
    return QueryTotalPoolLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalPoolLiquidityRequestProtoMsg): QueryTotalPoolLiquidityRequest {
    return QueryTotalPoolLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryTotalPoolLiquidityRequest): Uint8Array {
    return QueryTotalPoolLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTotalPoolLiquidityRequest",
      value: QueryTotalPoolLiquidityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalPoolLiquidityResponse(): QueryTotalPoolLiquidityResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalPoolLiquidityResponse = {
  typeUrl: "/zigchain.poolmanager.QueryTotalPoolLiquidityResponse",
  encode(message: QueryTotalPoolLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalPoolLiquidityResponseAmino): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalPoolLiquidityResponseAminoMsg): QueryTotalPoolLiquidityResponse {
    return QueryTotalPoolLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalPoolLiquidityResponseProtoMsg): QueryTotalPoolLiquidityResponse {
    return QueryTotalPoolLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryTotalPoolLiquidityResponse): Uint8Array {
    return QueryTotalPoolLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTotalPoolLiquidityResponse",
      value: QueryTotalPoolLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return {};
}
export const QueryTotalLiquidityRequest = {
  typeUrl: "/zigchain.poolmanager.QueryTotalLiquidityRequest",
  encode(_: QueryTotalLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  },
  fromAmino(_: QueryTotalLiquidityRequestAmino): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  },
  toAmino(_: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidityRequestAminoMsg): QueryTotalLiquidityRequest {
    return QueryTotalLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalLiquidityRequestProtoMsg): QueryTotalLiquidityRequest {
    return QueryTotalLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryTotalLiquidityRequest): Uint8Array {
    return QueryTotalLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTotalLiquidityRequest",
      value: QueryTotalLiquidityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidityResponse(): QueryTotalLiquidityResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalLiquidityResponse = {
  typeUrl: "/zigchain.poolmanager.QueryTotalLiquidityResponse",
  encode(message: QueryTotalLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalLiquidityResponseAmino): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidityResponseAminoMsg): QueryTotalLiquidityResponse {
    return QueryTotalLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalLiquidityResponseProtoMsg): QueryTotalLiquidityResponse {
    return QueryTotalLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryTotalLiquidityResponse): Uint8Array {
    return QueryTotalLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryTotalLiquidityResponse",
      value: QueryTotalLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}
export const QuerySpotPriceRequest = {
  typeUrl: "/zigchain.poolmanager.QuerySpotPriceRequest",
  encode(message: QuerySpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  },
  fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset_denom !== undefined && object.base_asset_denom !== null) {
      message.baseAssetDenom = object.base_asset_denom;
    }
    if (object.quote_asset_denom !== undefined && object.quote_asset_denom !== null) {
      message.quoteAssetDenom = object.quote_asset_denom;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset_denom = message.baseAssetDenom === "" ? undefined : message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom === "" ? undefined : message.quoteAssetDenom;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceRequestAminoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotPriceRequestProtoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.decode(message.value);
  },
  toProto(message: QuerySpotPriceRequest): Uint8Array {
    return QuerySpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QuerySpotPriceRequest",
      value: QuerySpotPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const QuerySpotPriceResponse = {
  typeUrl: "/zigchain.poolmanager.QuerySpotPriceResponse",
  encode(message: QuerySpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceResponse): QuerySpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceResponseAminoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotPriceResponseProtoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.decode(message.value);
  },
  toProto(message: QuerySpotPriceResponse): Uint8Array {
    return QuerySpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QuerySpotPriceResponse",
      value: QuerySpotPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListPoolsByDenomRequest(): QueryListPoolsByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryListPoolsByDenomRequest = {
  typeUrl: "/zigchain.poolmanager.QueryListPoolsByDenomRequest",
  encode(message: QueryListPoolsByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPoolsByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPoolsByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryListPoolsByDenomRequest>): QueryListPoolsByDenomRequest {
    const message = createBaseQueryListPoolsByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryListPoolsByDenomRequestAmino): QueryListPoolsByDenomRequest {
    const message = createBaseQueryListPoolsByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryListPoolsByDenomRequest): QueryListPoolsByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryListPoolsByDenomRequestAminoMsg): QueryListPoolsByDenomRequest {
    return QueryListPoolsByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPoolsByDenomRequestProtoMsg): QueryListPoolsByDenomRequest {
    return QueryListPoolsByDenomRequest.decode(message.value);
  },
  toProto(message: QueryListPoolsByDenomRequest): Uint8Array {
    return QueryListPoolsByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListPoolsByDenomRequest): QueryListPoolsByDenomRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryListPoolsByDenomRequest",
      value: QueryListPoolsByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListPoolsByDenomResponse(): QueryListPoolsByDenomResponse {
  return {
    pools: []
  };
}
export const QueryListPoolsByDenomResponse = {
  typeUrl: "/zigchain.poolmanager.QueryListPoolsByDenomResponse",
  encode(message: QueryListPoolsByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v! as Any, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPoolsByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPoolsByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryListPoolsByDenomResponse>): QueryListPoolsByDenomResponse {
    const message = createBaseQueryListPoolsByDenomResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryListPoolsByDenomResponseAmino): QueryListPoolsByDenomResponse {
    const message = createBaseQueryListPoolsByDenomResponse();
    message.pools = object.pools?.map(e => PoolI_FromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryListPoolsByDenomResponse): QueryListPoolsByDenomResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolI_ToAmino(e as Any) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: QueryListPoolsByDenomResponseAminoMsg): QueryListPoolsByDenomResponse {
    return QueryListPoolsByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPoolsByDenomResponseProtoMsg): QueryListPoolsByDenomResponse {
    return QueryListPoolsByDenomResponse.decode(message.value);
  },
  toProto(message: QueryListPoolsByDenomResponse): Uint8Array {
    return QueryListPoolsByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListPoolsByDenomResponse): QueryListPoolsByDenomResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryListPoolsByDenomResponse",
      value: QueryListPoolsByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredAlloyedPoolFromPoolIdRequest(): QueryRegisteredAlloyedPoolFromPoolIdRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryRegisteredAlloyedPoolFromPoolIdRequest = {
  typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromPoolIdRequest",
  encode(message: QueryRegisteredAlloyedPoolFromPoolIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredAlloyedPoolFromPoolIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredAlloyedPoolFromPoolIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRegisteredAlloyedPoolFromPoolIdRequest>): QueryRegisteredAlloyedPoolFromPoolIdRequest {
    const message = createBaseQueryRegisteredAlloyedPoolFromPoolIdRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRegisteredAlloyedPoolFromPoolIdRequestAmino): QueryRegisteredAlloyedPoolFromPoolIdRequest {
    const message = createBaseQueryRegisteredAlloyedPoolFromPoolIdRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryRegisteredAlloyedPoolFromPoolIdRequest): QueryRegisteredAlloyedPoolFromPoolIdRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredAlloyedPoolFromPoolIdRequestAminoMsg): QueryRegisteredAlloyedPoolFromPoolIdRequest {
    return QueryRegisteredAlloyedPoolFromPoolIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredAlloyedPoolFromPoolIdRequestProtoMsg): QueryRegisteredAlloyedPoolFromPoolIdRequest {
    return QueryRegisteredAlloyedPoolFromPoolIdRequest.decode(message.value);
  },
  toProto(message: QueryRegisteredAlloyedPoolFromPoolIdRequest): Uint8Array {
    return QueryRegisteredAlloyedPoolFromPoolIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredAlloyedPoolFromPoolIdRequest): QueryRegisteredAlloyedPoolFromPoolIdRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromPoolIdRequest",
      value: QueryRegisteredAlloyedPoolFromPoolIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredAlloyedPoolFromPoolIdResponse(): QueryRegisteredAlloyedPoolFromPoolIdResponse {
  return {
    contractState: AlloyContractTakerFeeShareState.fromPartial({})
  };
}
export const QueryRegisteredAlloyedPoolFromPoolIdResponse = {
  typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromPoolIdResponse",
  encode(message: QueryRegisteredAlloyedPoolFromPoolIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractState !== undefined) {
      AlloyContractTakerFeeShareState.encode(message.contractState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredAlloyedPoolFromPoolIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredAlloyedPoolFromPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractState = AlloyContractTakerFeeShareState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRegisteredAlloyedPoolFromPoolIdResponse>): QueryRegisteredAlloyedPoolFromPoolIdResponse {
    const message = createBaseQueryRegisteredAlloyedPoolFromPoolIdResponse();
    message.contractState = object.contractState !== undefined && object.contractState !== null ? AlloyContractTakerFeeShareState.fromPartial(object.contractState) : undefined;
    return message;
  },
  fromAmino(object: QueryRegisteredAlloyedPoolFromPoolIdResponseAmino): QueryRegisteredAlloyedPoolFromPoolIdResponse {
    const message = createBaseQueryRegisteredAlloyedPoolFromPoolIdResponse();
    if (object.contract_state !== undefined && object.contract_state !== null) {
      message.contractState = AlloyContractTakerFeeShareState.fromAmino(object.contract_state);
    }
    return message;
  },
  toAmino(message: QueryRegisteredAlloyedPoolFromPoolIdResponse): QueryRegisteredAlloyedPoolFromPoolIdResponseAmino {
    const obj: any = {};
    obj.contract_state = message.contractState ? AlloyContractTakerFeeShareState.toAmino(message.contractState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredAlloyedPoolFromPoolIdResponseAminoMsg): QueryRegisteredAlloyedPoolFromPoolIdResponse {
    return QueryRegisteredAlloyedPoolFromPoolIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredAlloyedPoolFromPoolIdResponseProtoMsg): QueryRegisteredAlloyedPoolFromPoolIdResponse {
    return QueryRegisteredAlloyedPoolFromPoolIdResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredAlloyedPoolFromPoolIdResponse): Uint8Array {
    return QueryRegisteredAlloyedPoolFromPoolIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredAlloyedPoolFromPoolIdResponse): QueryRegisteredAlloyedPoolFromPoolIdResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromPoolIdResponse",
      value: QueryRegisteredAlloyedPoolFromPoolIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredAlloyedPoolFromDenomRequest(): QueryRegisteredAlloyedPoolFromDenomRequest {
  return {
    denom: ""
  };
}
export const QueryRegisteredAlloyedPoolFromDenomRequest = {
  typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromDenomRequest",
  encode(message: QueryRegisteredAlloyedPoolFromDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredAlloyedPoolFromDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredAlloyedPoolFromDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRegisteredAlloyedPoolFromDenomRequest>): QueryRegisteredAlloyedPoolFromDenomRequest {
    const message = createBaseQueryRegisteredAlloyedPoolFromDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryRegisteredAlloyedPoolFromDenomRequestAmino): QueryRegisteredAlloyedPoolFromDenomRequest {
    const message = createBaseQueryRegisteredAlloyedPoolFromDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryRegisteredAlloyedPoolFromDenomRequest): QueryRegisteredAlloyedPoolFromDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredAlloyedPoolFromDenomRequestAminoMsg): QueryRegisteredAlloyedPoolFromDenomRequest {
    return QueryRegisteredAlloyedPoolFromDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredAlloyedPoolFromDenomRequestProtoMsg): QueryRegisteredAlloyedPoolFromDenomRequest {
    return QueryRegisteredAlloyedPoolFromDenomRequest.decode(message.value);
  },
  toProto(message: QueryRegisteredAlloyedPoolFromDenomRequest): Uint8Array {
    return QueryRegisteredAlloyedPoolFromDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredAlloyedPoolFromDenomRequest): QueryRegisteredAlloyedPoolFromDenomRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromDenomRequest",
      value: QueryRegisteredAlloyedPoolFromDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredAlloyedPoolFromDenomResponse(): QueryRegisteredAlloyedPoolFromDenomResponse {
  return {
    contractState: AlloyContractTakerFeeShareState.fromPartial({})
  };
}
export const QueryRegisteredAlloyedPoolFromDenomResponse = {
  typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromDenomResponse",
  encode(message: QueryRegisteredAlloyedPoolFromDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractState !== undefined) {
      AlloyContractTakerFeeShareState.encode(message.contractState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredAlloyedPoolFromDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredAlloyedPoolFromDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractState = AlloyContractTakerFeeShareState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRegisteredAlloyedPoolFromDenomResponse>): QueryRegisteredAlloyedPoolFromDenomResponse {
    const message = createBaseQueryRegisteredAlloyedPoolFromDenomResponse();
    message.contractState = object.contractState !== undefined && object.contractState !== null ? AlloyContractTakerFeeShareState.fromPartial(object.contractState) : undefined;
    return message;
  },
  fromAmino(object: QueryRegisteredAlloyedPoolFromDenomResponseAmino): QueryRegisteredAlloyedPoolFromDenomResponse {
    const message = createBaseQueryRegisteredAlloyedPoolFromDenomResponse();
    if (object.contract_state !== undefined && object.contract_state !== null) {
      message.contractState = AlloyContractTakerFeeShareState.fromAmino(object.contract_state);
    }
    return message;
  },
  toAmino(message: QueryRegisteredAlloyedPoolFromDenomResponse): QueryRegisteredAlloyedPoolFromDenomResponseAmino {
    const obj: any = {};
    obj.contract_state = message.contractState ? AlloyContractTakerFeeShareState.toAmino(message.contractState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredAlloyedPoolFromDenomResponseAminoMsg): QueryRegisteredAlloyedPoolFromDenomResponse {
    return QueryRegisteredAlloyedPoolFromDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredAlloyedPoolFromDenomResponseProtoMsg): QueryRegisteredAlloyedPoolFromDenomResponse {
    return QueryRegisteredAlloyedPoolFromDenomResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredAlloyedPoolFromDenomResponse): Uint8Array {
    return QueryRegisteredAlloyedPoolFromDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredAlloyedPoolFromDenomResponse): QueryRegisteredAlloyedPoolFromDenomResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryRegisteredAlloyedPoolFromDenomResponse",
      value: QueryRegisteredAlloyedPoolFromDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllRegisteredAlloyedPoolsRequest(): QueryAllRegisteredAlloyedPoolsRequest {
  return {};
}
export const QueryAllRegisteredAlloyedPoolsRequest = {
  typeUrl: "/zigchain.poolmanager.QueryAllRegisteredAlloyedPoolsRequest",
  encode(_: QueryAllRegisteredAlloyedPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllRegisteredAlloyedPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRegisteredAlloyedPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryAllRegisteredAlloyedPoolsRequest>): QueryAllRegisteredAlloyedPoolsRequest {
    const message = createBaseQueryAllRegisteredAlloyedPoolsRequest();
    return message;
  },
  fromAmino(_: QueryAllRegisteredAlloyedPoolsRequestAmino): QueryAllRegisteredAlloyedPoolsRequest {
    const message = createBaseQueryAllRegisteredAlloyedPoolsRequest();
    return message;
  },
  toAmino(_: QueryAllRegisteredAlloyedPoolsRequest): QueryAllRegisteredAlloyedPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllRegisteredAlloyedPoolsRequestAminoMsg): QueryAllRegisteredAlloyedPoolsRequest {
    return QueryAllRegisteredAlloyedPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRegisteredAlloyedPoolsRequestProtoMsg): QueryAllRegisteredAlloyedPoolsRequest {
    return QueryAllRegisteredAlloyedPoolsRequest.decode(message.value);
  },
  toProto(message: QueryAllRegisteredAlloyedPoolsRequest): Uint8Array {
    return QueryAllRegisteredAlloyedPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRegisteredAlloyedPoolsRequest): QueryAllRegisteredAlloyedPoolsRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryAllRegisteredAlloyedPoolsRequest",
      value: QueryAllRegisteredAlloyedPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRegisteredAlloyedPoolsResponse(): QueryAllRegisteredAlloyedPoolsResponse {
  return {
    contractStates: []
  };
}
export const QueryAllRegisteredAlloyedPoolsResponse = {
  typeUrl: "/zigchain.poolmanager.QueryAllRegisteredAlloyedPoolsResponse",
  encode(message: QueryAllRegisteredAlloyedPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractStates) {
      AlloyContractTakerFeeShareState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllRegisteredAlloyedPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRegisteredAlloyedPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractStates.push(AlloyContractTakerFeeShareState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllRegisteredAlloyedPoolsResponse>): QueryAllRegisteredAlloyedPoolsResponse {
    const message = createBaseQueryAllRegisteredAlloyedPoolsResponse();
    message.contractStates = object.contractStates?.map(e => AlloyContractTakerFeeShareState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllRegisteredAlloyedPoolsResponseAmino): QueryAllRegisteredAlloyedPoolsResponse {
    const message = createBaseQueryAllRegisteredAlloyedPoolsResponse();
    message.contractStates = object.contract_states?.map(e => AlloyContractTakerFeeShareState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllRegisteredAlloyedPoolsResponse): QueryAllRegisteredAlloyedPoolsResponseAmino {
    const obj: any = {};
    if (message.contractStates) {
      obj.contract_states = message.contractStates.map(e => e ? AlloyContractTakerFeeShareState.toAmino(e) : undefined);
    } else {
      obj.contract_states = message.contractStates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllRegisteredAlloyedPoolsResponseAminoMsg): QueryAllRegisteredAlloyedPoolsResponse {
    return QueryAllRegisteredAlloyedPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRegisteredAlloyedPoolsResponseProtoMsg): QueryAllRegisteredAlloyedPoolsResponse {
    return QueryAllRegisteredAlloyedPoolsResponse.decode(message.value);
  },
  toProto(message: QueryAllRegisteredAlloyedPoolsResponse): Uint8Array {
    return QueryAllRegisteredAlloyedPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRegisteredAlloyedPoolsResponse): QueryAllRegisteredAlloyedPoolsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryAllRegisteredAlloyedPoolsResponse",
      value: QueryAllRegisteredAlloyedPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateTradeBasedOnPriceImpactRequest(): QueryEstimateTradeBasedOnPriceImpactRequest {
  return {
    fromCoin: Coin.fromPartial({}),
    toCoinDenom: "",
    poolId: BigInt(0),
    maxPriceImpact: "",
    externalPrice: ""
  };
}
export const QueryEstimateTradeBasedOnPriceImpactRequest = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateTradeBasedOnPriceImpactRequest",
  encode(message: QueryEstimateTradeBasedOnPriceImpactRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromCoin !== undefined) {
      Coin.encode(message.fromCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.toCoinDenom !== "") {
      writer.uint32(18).string(message.toCoinDenom);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.maxPriceImpact !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.maxPriceImpact, 18).atomics);
    }
    if (message.externalPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.externalPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateTradeBasedOnPriceImpactRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateTradeBasedOnPriceImpactRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.toCoinDenom = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.maxPriceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.externalPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateTradeBasedOnPriceImpactRequest>): QueryEstimateTradeBasedOnPriceImpactRequest {
    const message = createBaseQueryEstimateTradeBasedOnPriceImpactRequest();
    message.fromCoin = object.fromCoin !== undefined && object.fromCoin !== null ? Coin.fromPartial(object.fromCoin) : undefined;
    message.toCoinDenom = object.toCoinDenom ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.maxPriceImpact = object.maxPriceImpact ?? "";
    message.externalPrice = object.externalPrice ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateTradeBasedOnPriceImpactRequestAmino): QueryEstimateTradeBasedOnPriceImpactRequest {
    const message = createBaseQueryEstimateTradeBasedOnPriceImpactRequest();
    if (object.from_coin !== undefined && object.from_coin !== null) {
      message.fromCoin = Coin.fromAmino(object.from_coin);
    }
    if (object.to_coin_denom !== undefined && object.to_coin_denom !== null) {
      message.toCoinDenom = object.to_coin_denom;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.max_price_impact !== undefined && object.max_price_impact !== null) {
      message.maxPriceImpact = object.max_price_impact;
    }
    if (object.external_price !== undefined && object.external_price !== null) {
      message.externalPrice = object.external_price;
    }
    return message;
  },
  toAmino(message: QueryEstimateTradeBasedOnPriceImpactRequest): QueryEstimateTradeBasedOnPriceImpactRequestAmino {
    const obj: any = {};
    obj.from_coin = message.fromCoin ? Coin.toAmino(message.fromCoin) : undefined;
    obj.to_coin_denom = message.toCoinDenom === "" ? undefined : message.toCoinDenom;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.max_price_impact = message.maxPriceImpact === "" ? undefined : message.maxPriceImpact;
    obj.external_price = message.externalPrice === "" ? undefined : message.externalPrice;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateTradeBasedOnPriceImpactRequestAminoMsg): QueryEstimateTradeBasedOnPriceImpactRequest {
    return QueryEstimateTradeBasedOnPriceImpactRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateTradeBasedOnPriceImpactRequestProtoMsg): QueryEstimateTradeBasedOnPriceImpactRequest {
    return QueryEstimateTradeBasedOnPriceImpactRequest.decode(message.value);
  },
  toProto(message: QueryEstimateTradeBasedOnPriceImpactRequest): Uint8Array {
    return QueryEstimateTradeBasedOnPriceImpactRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateTradeBasedOnPriceImpactRequest): QueryEstimateTradeBasedOnPriceImpactRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateTradeBasedOnPriceImpactRequest",
      value: QueryEstimateTradeBasedOnPriceImpactRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateTradeBasedOnPriceImpactResponse(): QueryEstimateTradeBasedOnPriceImpactResponse {
  return {
    inputCoin: Coin.fromPartial({}),
    outputCoin: Coin.fromPartial({})
  };
}
export const QueryEstimateTradeBasedOnPriceImpactResponse = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateTradeBasedOnPriceImpactResponse",
  encode(message: QueryEstimateTradeBasedOnPriceImpactResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inputCoin !== undefined) {
      Coin.encode(message.inputCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.outputCoin !== undefined) {
      Coin.encode(message.outputCoin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateTradeBasedOnPriceImpactResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateTradeBasedOnPriceImpactResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.outputCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateTradeBasedOnPriceImpactResponse>): QueryEstimateTradeBasedOnPriceImpactResponse {
    const message = createBaseQueryEstimateTradeBasedOnPriceImpactResponse();
    message.inputCoin = object.inputCoin !== undefined && object.inputCoin !== null ? Coin.fromPartial(object.inputCoin) : undefined;
    message.outputCoin = object.outputCoin !== undefined && object.outputCoin !== null ? Coin.fromPartial(object.outputCoin) : undefined;
    return message;
  },
  fromAmino(object: QueryEstimateTradeBasedOnPriceImpactResponseAmino): QueryEstimateTradeBasedOnPriceImpactResponse {
    const message = createBaseQueryEstimateTradeBasedOnPriceImpactResponse();
    if (object.input_coin !== undefined && object.input_coin !== null) {
      message.inputCoin = Coin.fromAmino(object.input_coin);
    }
    if (object.output_coin !== undefined && object.output_coin !== null) {
      message.outputCoin = Coin.fromAmino(object.output_coin);
    }
    return message;
  },
  toAmino(message: QueryEstimateTradeBasedOnPriceImpactResponse): QueryEstimateTradeBasedOnPriceImpactResponseAmino {
    const obj: any = {};
    obj.input_coin = message.inputCoin ? Coin.toAmino(message.inputCoin) : undefined;
    obj.output_coin = message.outputCoin ? Coin.toAmino(message.outputCoin) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateTradeBasedOnPriceImpactResponseAminoMsg): QueryEstimateTradeBasedOnPriceImpactResponse {
    return QueryEstimateTradeBasedOnPriceImpactResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateTradeBasedOnPriceImpactResponseProtoMsg): QueryEstimateTradeBasedOnPriceImpactResponse {
    return QueryEstimateTradeBasedOnPriceImpactResponse.decode(message.value);
  },
  toProto(message: QueryEstimateTradeBasedOnPriceImpactResponse): Uint8Array {
    return QueryEstimateTradeBasedOnPriceImpactResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateTradeBasedOnPriceImpactResponse): QueryEstimateTradeBasedOnPriceImpactResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateTradeBasedOnPriceImpactResponse",
      value: QueryEstimateTradeBasedOnPriceImpactResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest(): QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest {
  return {
    poolId: undefined,
    routesPoolId: [],
    routesTokenInDenom: [],
    tokenOut: ""
  };
}
export const QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest",
  encode(message: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== undefined) {
      writer.uint32(8).uint64(message.poolId);
    }
    writer.uint32(18).fork();
    for (const v of message.routesPoolId) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.routesTokenInDenom) {
      writer.uint32(26).string(v!);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.routesPoolId.push(reader.uint64());
            }
          } else {
            message.routesPoolId.push(reader.uint64());
          }
          break;
        case 3:
          message.routesTokenInDenom.push(reader.string());
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest>): QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const message = createBaseQueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : undefined;
    message.routesPoolId = object.routesPoolId?.map(e => BigInt(e.toString())) || [];
    message.routesTokenInDenom = object.routesTokenInDenom?.map(e => e) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino): QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const message = createBaseQueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.routesPoolId = object.routes_pool_id?.map(e => BigInt(e)) || [];
    message.routesTokenInDenom = object.routes_token_in_denom?.map(e => e) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest): QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.routesPoolId) {
      obj.routes_pool_id = message.routesPoolId.map(e => e.toString());
    } else {
      obj.routes_pool_id = message.routesPoolId;
    }
    if (message.routesTokenInDenom) {
      obj.routes_token_in_denom = message.routesTokenInDenom.map(e => e);
    } else {
      obj.routes_token_in_denom = message.routesTokenInDenom;
    }
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg): QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg): QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest.decode(message.value);
  },
  toProto(message: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest): Uint8Array {
    return QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest): QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest",
      value: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse(): QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse {
  return {
    tokenInAmount: ""
  };
}
export const QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse",
  encode(message: QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse>): QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse {
    const message = createBaseQueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseAmino): QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse {
    const message = createBaseQueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse();
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    return message;
  },
  toAmino(message: QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse): QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseAminoMsg): QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse {
    return QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseProtoMsg): QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse {
    return QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse.decode(message.value);
  },
  toProto(message: QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse): Uint8Array {
    return QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse): QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse",
      value: QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSwapExactAmountOutRequest(): QueryEstimateSwapExactAmountOutRequest {
  return {
    sender: undefined,
    poolId: undefined,
    routes: [],
    tokenOut: ""
  };
}
export const QueryEstimateSwapExactAmountOutRequest = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutRequest",
  encode(message: QueryEstimateSwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== undefined) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSwapExactAmountOutRequest>): QueryEstimateSwapExactAmountOutRequest {
    const message = createBaseQueryEstimateSwapExactAmountOutRequest();
    message.sender = object.sender ?? undefined;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : undefined;
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateSwapExactAmountOutRequestAmino): QueryEstimateSwapExactAmountOutRequest {
    const message = createBaseQueryEstimateSwapExactAmountOutRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QueryEstimateSwapExactAmountOutRequest): QueryEstimateSwapExactAmountOutRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === null ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSwapExactAmountOutRequestAminoMsg): QueryEstimateSwapExactAmountOutRequest {
    return QueryEstimateSwapExactAmountOutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSwapExactAmountOutRequestProtoMsg): QueryEstimateSwapExactAmountOutRequest {
    return QueryEstimateSwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: QueryEstimateSwapExactAmountOutRequest): Uint8Array {
    return QueryEstimateSwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSwapExactAmountOutRequest): QueryEstimateSwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutRequest",
      value: QueryEstimateSwapExactAmountOutRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSwapExactAmountOutResponse(): QueryEstimateSwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const QueryEstimateSwapExactAmountOutResponse = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutResponse",
  encode(message: QueryEstimateSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSwapExactAmountOutResponse>): QueryEstimateSwapExactAmountOutResponse {
    const message = createBaseQueryEstimateSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateSwapExactAmountOutResponseAmino): QueryEstimateSwapExactAmountOutResponse {
    const message = createBaseQueryEstimateSwapExactAmountOutResponse();
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    return message;
  },
  toAmino(message: QueryEstimateSwapExactAmountOutResponse): QueryEstimateSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSwapExactAmountOutResponseAminoMsg): QueryEstimateSwapExactAmountOutResponse {
    return QueryEstimateSwapExactAmountOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSwapExactAmountOutResponseProtoMsg): QueryEstimateSwapExactAmountOutResponse {
    return QueryEstimateSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: QueryEstimateSwapExactAmountOutResponse): Uint8Array {
    return QueryEstimateSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSwapExactAmountOutResponse): QueryEstimateSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountOutResponse",
      value: QueryEstimateSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSwapExactAmountInWithPrimitiveTypesRequest(): QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest {
  return {
    poolId: undefined,
    tokenIn: "",
    routesPoolId: [],
    routesTokenOutDenom: []
  };
}
export const QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest",
  encode(message: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== undefined) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    writer.uint32(26).fork();
    for (const v of message.routesPoolId) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.routesTokenOutDenom) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.routesPoolId.push(reader.uint64());
            }
          } else {
            message.routesPoolId.push(reader.uint64());
          }
          break;
        case 4:
          message.routesTokenOutDenom.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest>): QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const message = createBaseQueryEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : undefined;
    message.tokenIn = object.tokenIn ?? "";
    message.routesPoolId = object.routesPoolId?.map(e => BigInt(e.toString())) || [];
    message.routesTokenOutDenom = object.routesTokenOutDenom?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestAmino): QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const message = createBaseQueryEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    message.routesPoolId = object.routes_pool_id?.map(e => BigInt(e)) || [];
    message.routesTokenOutDenom = object.routes_token_out_denom?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest): QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    if (message.routesPoolId) {
      obj.routes_pool_id = message.routesPoolId.map(e => e.toString());
    } else {
      obj.routes_pool_id = message.routesPoolId;
    }
    if (message.routesTokenOutDenom) {
      obj.routes_token_out_denom = message.routesTokenOutDenom.map(e => e);
    } else {
      obj.routes_token_out_denom = message.routesTokenOutDenom;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg): QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg): QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest.decode(message.value);
  },
  toProto(message: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest): Uint8Array {
    return QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest): QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest",
      value: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSwapExactAmountInWithPrimitiveTypesResponse(): QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse {
  return {
    tokenOutAmount: ""
  };
}
export const QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse",
  encode(message: QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSwapExactAmountInWithPrimitiveTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse>): QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse {
    const message = createBaseQueryEstimateSwapExactAmountInWithPrimitiveTypesResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseAmino): QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse {
    const message = createBaseQueryEstimateSwapExactAmountInWithPrimitiveTypesResponse();
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(message: QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse): QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseAminoMsg): QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse {
    return QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseProtoMsg): QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse {
    return QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse.decode(message.value);
  },
  toProto(message: QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse): Uint8Array {
    return QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse): QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse",
      value: QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSwapExactAmountInRequest(): QueryEstimateSwapExactAmountInRequest {
  return {
    sender: undefined,
    poolId: undefined,
    tokenIn: "",
    routes: []
  };
}
export const QueryEstimateSwapExactAmountInRequest = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInRequest",
  encode(message: QueryEstimateSwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== undefined) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSwapExactAmountInRequest>): QueryEstimateSwapExactAmountInRequest {
    const message = createBaseQueryEstimateSwapExactAmountInRequest();
    message.sender = object.sender ?? undefined;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : undefined;
    message.tokenIn = object.tokenIn ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEstimateSwapExactAmountInRequestAmino): QueryEstimateSwapExactAmountInRequest {
    const message = createBaseQueryEstimateSwapExactAmountInRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEstimateSwapExactAmountInRequest): QueryEstimateSwapExactAmountInRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === null ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSwapExactAmountInRequestAminoMsg): QueryEstimateSwapExactAmountInRequest {
    return QueryEstimateSwapExactAmountInRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSwapExactAmountInRequestProtoMsg): QueryEstimateSwapExactAmountInRequest {
    return QueryEstimateSwapExactAmountInRequest.decode(message.value);
  },
  toProto(message: QueryEstimateSwapExactAmountInRequest): Uint8Array {
    return QueryEstimateSwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSwapExactAmountInRequest): QueryEstimateSwapExactAmountInRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInRequest",
      value: QueryEstimateSwapExactAmountInRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSwapExactAmountInResponse(): QueryEstimateSwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const QueryEstimateSwapExactAmountInResponse = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInResponse",
  encode(message: QueryEstimateSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSwapExactAmountInResponse>): QueryEstimateSwapExactAmountInResponse {
    const message = createBaseQueryEstimateSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateSwapExactAmountInResponseAmino): QueryEstimateSwapExactAmountInResponse {
    const message = createBaseQueryEstimateSwapExactAmountInResponse();
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(message: QueryEstimateSwapExactAmountInResponse): QueryEstimateSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSwapExactAmountInResponseAminoMsg): QueryEstimateSwapExactAmountInResponse {
    return QueryEstimateSwapExactAmountInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSwapExactAmountInResponseProtoMsg): QueryEstimateSwapExactAmountInResponse {
    return QueryEstimateSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: QueryEstimateSwapExactAmountInResponse): Uint8Array {
    return QueryEstimateSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSwapExactAmountInResponse): QueryEstimateSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSwapExactAmountInResponse",
      value: QueryEstimateSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSinglePoolSwapExactAmountOutRequest(): QueryEstimateSinglePoolSwapExactAmountOutRequest {
  return {
    poolId: BigInt(0),
    tokenInDenom: "",
    tokenOut: ""
  };
}
export const QueryEstimateSinglePoolSwapExactAmountOutRequest = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountOutRequest",
  encode(message: QueryEstimateSinglePoolSwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSinglePoolSwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSinglePoolSwapExactAmountOutRequest>): QueryEstimateSinglePoolSwapExactAmountOutRequest {
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountOutRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateSinglePoolSwapExactAmountOutRequestAmino): QueryEstimateSinglePoolSwapExactAmountOutRequest {
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountOutRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QueryEstimateSinglePoolSwapExactAmountOutRequest): QueryEstimateSinglePoolSwapExactAmountOutRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSinglePoolSwapExactAmountOutRequestAminoMsg): QueryEstimateSinglePoolSwapExactAmountOutRequest {
    return QueryEstimateSinglePoolSwapExactAmountOutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSinglePoolSwapExactAmountOutRequestProtoMsg): QueryEstimateSinglePoolSwapExactAmountOutRequest {
    return QueryEstimateSinglePoolSwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: QueryEstimateSinglePoolSwapExactAmountOutRequest): Uint8Array {
    return QueryEstimateSinglePoolSwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSinglePoolSwapExactAmountOutRequest): QueryEstimateSinglePoolSwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountOutRequest",
      value: QueryEstimateSinglePoolSwapExactAmountOutRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSinglePoolSwapExactAmountOutResponse(): QueryEstimateSinglePoolSwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const QueryEstimateSinglePoolSwapExactAmountOutResponse = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountOutResponse",
  encode(message: QueryEstimateSinglePoolSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSinglePoolSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSinglePoolSwapExactAmountOutResponse>): QueryEstimateSinglePoolSwapExactAmountOutResponse {
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateSinglePoolSwapExactAmountOutResponseAmino): QueryEstimateSinglePoolSwapExactAmountOutResponse {
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountOutResponse();
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    return message;
  },
  toAmino(message: QueryEstimateSinglePoolSwapExactAmountOutResponse): QueryEstimateSinglePoolSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSinglePoolSwapExactAmountOutResponseAminoMsg): QueryEstimateSinglePoolSwapExactAmountOutResponse {
    return QueryEstimateSinglePoolSwapExactAmountOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSinglePoolSwapExactAmountOutResponseProtoMsg): QueryEstimateSinglePoolSwapExactAmountOutResponse {
    return QueryEstimateSinglePoolSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: QueryEstimateSinglePoolSwapExactAmountOutResponse): Uint8Array {
    return QueryEstimateSinglePoolSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSinglePoolSwapExactAmountOutResponse): QueryEstimateSinglePoolSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountOutResponse",
      value: QueryEstimateSinglePoolSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSinglePoolSwapExactAmountInRequest(): QueryEstimateSinglePoolSwapExactAmountInRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOutDenom: ""
  };
}
export const QueryEstimateSinglePoolSwapExactAmountInRequest = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountInRequest",
  encode(message: QueryEstimateSinglePoolSwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSinglePoolSwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSinglePoolSwapExactAmountInRequest>): QueryEstimateSinglePoolSwapExactAmountInRequest {
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountInRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateSinglePoolSwapExactAmountInRequestAmino): QueryEstimateSinglePoolSwapExactAmountInRequest {
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountInRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
      message.tokenOutDenom = object.token_out_denom;
    }
    return message;
  },
  toAmino(message: QueryEstimateSinglePoolSwapExactAmountInRequest): QueryEstimateSinglePoolSwapExactAmountInRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSinglePoolSwapExactAmountInRequestAminoMsg): QueryEstimateSinglePoolSwapExactAmountInRequest {
    return QueryEstimateSinglePoolSwapExactAmountInRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSinglePoolSwapExactAmountInRequestProtoMsg): QueryEstimateSinglePoolSwapExactAmountInRequest {
    return QueryEstimateSinglePoolSwapExactAmountInRequest.decode(message.value);
  },
  toProto(message: QueryEstimateSinglePoolSwapExactAmountInRequest): Uint8Array {
    return QueryEstimateSinglePoolSwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSinglePoolSwapExactAmountInRequest): QueryEstimateSinglePoolSwapExactAmountInRequestProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountInRequest",
      value: QueryEstimateSinglePoolSwapExactAmountInRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSinglePoolSwapExactAmountInResponse(): QueryEstimateSinglePoolSwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const QueryEstimateSinglePoolSwapExactAmountInResponse = {
  typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountInResponse",
  encode(message: QueryEstimateSinglePoolSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateSinglePoolSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSinglePoolSwapExactAmountInResponse>): QueryEstimateSinglePoolSwapExactAmountInResponse {
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateSinglePoolSwapExactAmountInResponseAmino): QueryEstimateSinglePoolSwapExactAmountInResponse {
    const message = createBaseQueryEstimateSinglePoolSwapExactAmountInResponse();
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(message: QueryEstimateSinglePoolSwapExactAmountInResponse): QueryEstimateSinglePoolSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateSinglePoolSwapExactAmountInResponseAminoMsg): QueryEstimateSinglePoolSwapExactAmountInResponse {
    return QueryEstimateSinglePoolSwapExactAmountInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateSinglePoolSwapExactAmountInResponseProtoMsg): QueryEstimateSinglePoolSwapExactAmountInResponse {
    return QueryEstimateSinglePoolSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: QueryEstimateSinglePoolSwapExactAmountInResponse): Uint8Array {
    return QueryEstimateSinglePoolSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateSinglePoolSwapExactAmountInResponse): QueryEstimateSinglePoolSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.QueryEstimateSinglePoolSwapExactAmountInResponse",
      value: QueryEstimateSinglePoolSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
export const PoolI_InterfaceDecoder = (input: BinaryReader | Uint8Array): Pool | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/zigchain.gamm.Pool":
      return Pool.decode(data.value);
    default:
      return data;
  }
};
export const PoolI_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "zigchain/gamm/StableswapPool":
      return Any.fromPartial({
        typeUrl: "/zigchain.gamm.Pool",
        value: Pool.encode(Pool.fromPartial(Pool.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const PoolI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/zigchain.gamm.Pool":
      return {
        type: "zigchain/gamm/StableswapPool",
        value: Pool.toAmino(Pool.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};