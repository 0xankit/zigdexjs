//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { MigrationRecords, MigrationRecordsAmino, MigrationRecordsSDKType } from "./shared";
import { Pool, PoolProtoMsg, PoolSDKType } from "./stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/zigchain.gamm.QueryParamsRequest";
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
  typeUrl: "/zigchain.gamm.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/zigchain.gamm.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryPoolsRequest";
  value: Uint8Array;
}
/** =============================== Pools */
export interface QueryPoolsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
  type: "/zigchain.gamm.QueryPoolsRequest";
  value: QueryPoolsRequestAmino;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
  pools: (Pool | Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryPoolsResponse";
  value: Uint8Array;
}
export type QueryPoolsResponseEncoded = Omit<QueryPoolsResponse, "pools"> & {
  pools: (PoolProtoMsg | AnyProtoMsg)[];
};
export interface QueryPoolsResponseAmino {
  pools?: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
  type: "/zigchain.gamm.QueryPoolsResponse";
  value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
  pools: (PoolSDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/** =============================== NumPools */
/** @deprecated */
export interface QueryNumPoolsRequest {}
export interface QueryNumPoolsRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryNumPoolsRequest";
  value: Uint8Array;
}
/** =============================== NumPools */
/** @deprecated */
export interface QueryNumPoolsRequestAmino {}
export interface QueryNumPoolsRequestAminoMsg {
  type: "/zigchain.gamm.QueryNumPoolsRequest";
  value: QueryNumPoolsRequestAmino;
}
/** =============================== NumPools */
/** @deprecated */
export interface QueryNumPoolsRequestSDKType {}
/** @deprecated */
export interface QueryNumPoolsResponse {
  numPools: bigint;
}
export interface QueryNumPoolsResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryNumPoolsResponse";
  value: Uint8Array;
}
/** @deprecated */
export interface QueryNumPoolsResponseAmino {
  num_pools?: string;
}
export interface QueryNumPoolsResponseAminoMsg {
  type: "/zigchain.gamm.QueryNumPoolsResponse";
  value: QueryNumPoolsResponseAmino;
}
/** @deprecated */
export interface QueryNumPoolsResponseSDKType {
  num_pools: bigint;
}
export interface QueryTotalLiquidityRequest {}
export interface QueryTotalLiquidityRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryTotalLiquidityRequest";
  value: Uint8Array;
}
export interface QueryTotalLiquidityRequestAmino {}
export interface QueryTotalLiquidityRequestAminoMsg {
  type: "/zigchain.gamm.QueryTotalLiquidityRequest";
  value: QueryTotalLiquidityRequestAmino;
}
export interface QueryTotalLiquidityRequestSDKType {}
export interface QueryTotalLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryTotalLiquidityResponse";
  value: Uint8Array;
}
export interface QueryTotalLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
export interface QueryTotalLiquidityResponseAminoMsg {
  type: "/zigchain.gamm.QueryTotalLiquidityResponse";
  value: QueryTotalLiquidityResponseAmino;
}
export interface QueryTotalLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/** =============================== PoolsWithFilter */
export interface QueryPoolsWithFilterRequest {
  /**
   * String of the coins in single string separated by comma. Ex)
   * 10uatom,100zmo
   */
  minLiquidity: string;
  poolType: string;
  pagination?: PageRequest;
}
export interface QueryPoolsWithFilterRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryPoolsWithFilterRequest";
  value: Uint8Array;
}
/** =============================== PoolsWithFilter */
export interface QueryPoolsWithFilterRequestAmino {
  /**
   * String of the coins in single string separated by comma. Ex)
   * 10uatom,100zmo
   */
  min_liquidity?: string;
  pool_type?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPoolsWithFilterRequestAminoMsg {
  type: "/zigchain.gamm.QueryPoolsWithFilterRequest";
  value: QueryPoolsWithFilterRequestAmino;
}
/** =============================== PoolsWithFilter */
export interface QueryPoolsWithFilterRequestSDKType {
  min_liquidity: string;
  pool_type: string;
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsWithFilterResponse {
  pools: (Pool | Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPoolsWithFilterResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryPoolsWithFilterResponse";
  value: Uint8Array;
}
export type QueryPoolsWithFilterResponseEncoded = Omit<QueryPoolsWithFilterResponse, "pools"> & {
  pools: (PoolProtoMsg | AnyProtoMsg)[];
};
export interface QueryPoolsWithFilterResponseAmino {
  pools?: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPoolsWithFilterResponseAminoMsg {
  type: "/zigchain.gamm.QueryPoolsWithFilterResponse";
  value: QueryPoolsWithFilterResponseAmino;
}
export interface QueryPoolsWithFilterResponseSDKType {
  pools: (PoolSDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/**
 * =============================== Pool
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryPoolRequest {
  poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryPoolRequest";
  value: Uint8Array;
}
/**
 * =============================== Pool
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryPoolRequestAmino {
  pool_id?: string;
}
export interface QueryPoolRequestAminoMsg {
  type: "/zigchain.gamm.QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
/**
 * =============================== Pool
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryPoolRequestSDKType {
  pool_id: bigint;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryPoolResponse {
  pool?: Pool | Any | undefined;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryPoolResponse";
  value: Uint8Array;
}
export type QueryPoolResponseEncoded = Omit<QueryPoolResponse, "pool"> & {
  pool?: PoolProtoMsg | AnyProtoMsg | undefined;
};
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryPoolResponseAmino {
  pool?: AnyAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "/zigchain.gamm.QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryPoolResponseSDKType {
  pool?: PoolSDKType | AnySDKType | undefined;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequest {
  poolId: bigint;
}
export interface QueryPoolTypeRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryPoolTypeRequest";
  value: Uint8Array;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestAmino {
  pool_id?: string;
}
export interface QueryPoolTypeRequestAminoMsg {
  type: "/zigchain.gamm.QueryPoolTypeRequest";
  value: QueryPoolTypeRequestAmino;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolTypeResponse {
  poolType: string;
}
export interface QueryPoolTypeResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryPoolTypeResponse";
  value: Uint8Array;
}
export interface QueryPoolTypeResponseAmino {
  pool_type?: string;
}
export interface QueryPoolTypeResponseAminoMsg {
  type: "/zigchain.gamm.QueryPoolTypeResponse";
  value: QueryPoolTypeResponseAmino;
}
export interface QueryPoolTypeResponseSDKType {
  pool_type: string;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequest {
  poolId: bigint;
  tokensIn: Coin[];
}
export interface QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryCalcJoinPoolNoSwapSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestAmino {
  pool_id?: string;
  tokens_in?: CoinAmino[];
}
export interface QueryCalcJoinPoolNoSwapSharesRequestAminoMsg {
  type: "/zigchain.gamm.QueryCalcJoinPoolNoSwapSharesRequest";
  value: QueryCalcJoinPoolNoSwapSharesRequestAmino;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestSDKType {
  pool_id: bigint;
  tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolNoSwapSharesResponse {
  tokensOut: Coin[];
  sharesOut: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryCalcJoinPoolNoSwapSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseAmino {
  tokens_out?: CoinAmino[];
  shares_out?: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseAminoMsg {
  type: "/zigchain.gamm.QueryCalcJoinPoolNoSwapSharesResponse";
  value: QueryCalcJoinPoolNoSwapSharesResponseAmino;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseSDKType {
  tokens_out: CoinSDKType[];
  shares_out: string;
}
export interface QueryCalcJoinPoolSharesRequest {
  poolId: bigint;
  tokensIn: Coin[];
}
export interface QueryCalcJoinPoolSharesRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryCalcJoinPoolSharesRequest";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolSharesRequestAmino {
  pool_id?: string;
  tokens_in?: CoinAmino[];
}
export interface QueryCalcJoinPoolSharesRequestAminoMsg {
  type: "/zigchain.gamm.QueryCalcJoinPoolSharesRequest";
  value: QueryCalcJoinPoolSharesRequestAmino;
}
export interface QueryCalcJoinPoolSharesRequestSDKType {
  pool_id: bigint;
  tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolSharesResponse {
  shareOutAmount: string;
  tokensOut: Coin[];
}
export interface QueryCalcJoinPoolSharesResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryCalcJoinPoolSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolSharesResponseAmino {
  share_out_amount?: string;
  tokens_out?: CoinAmino[];
}
export interface QueryCalcJoinPoolSharesResponseAminoMsg {
  type: "/zigchain.gamm.QueryCalcJoinPoolSharesResponse";
  value: QueryCalcJoinPoolSharesResponseAmino;
}
export interface QueryCalcJoinPoolSharesResponseSDKType {
  share_out_amount: string;
  tokens_out: CoinSDKType[];
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequest {
  poolId: bigint;
  shareInAmount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryCalcExitPoolCoinsFromSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestAmino {
  pool_id?: string;
  share_in_amount?: string;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestAminoMsg {
  type: "/zigchain.gamm.QueryCalcExitPoolCoinsFromSharesRequest";
  value: QueryCalcExitPoolCoinsFromSharesRequestAmino;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestSDKType {
  pool_id: bigint;
  share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesResponse {
  tokensOut: Coin[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryCalcExitPoolCoinsFromSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcExitPoolCoinsFromSharesResponseAmino {
  tokens_out?: CoinAmino[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseAminoMsg {
  type: "/zigchain.gamm.QueryCalcExitPoolCoinsFromSharesResponse";
  value: QueryCalcExitPoolCoinsFromSharesResponseAmino;
}
export interface QueryCalcExitPoolCoinsFromSharesResponseSDKType {
  tokens_out: CoinSDKType[];
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
  poolId: bigint;
}
export interface QueryPoolParamsRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryPoolParamsRequest";
  value: Uint8Array;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestAmino {
  pool_id?: string;
}
export interface QueryPoolParamsRequestAminoMsg {
  type: "/zigchain.gamm.QueryPoolParamsRequest";
  value: QueryPoolParamsRequestAmino;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolParamsResponse {
  params?: Any;
}
export interface QueryPoolParamsResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryPoolParamsResponse";
  value: Uint8Array;
}
export interface QueryPoolParamsResponseAmino {
  params?: AnyAmino;
}
export interface QueryPoolParamsResponseAminoMsg {
  type: "/zigchain.gamm.QueryPoolParamsResponse";
  value: QueryPoolParamsResponseAmino;
}
export interface QueryPoolParamsResponseSDKType {
  params?: AnySDKType;
}
/**
 * =============================== PoolLiquidity
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryTotalPoolLiquidityRequest {
  poolId: bigint;
}
export interface QueryTotalPoolLiquidityRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryTotalPoolLiquidityRequest";
  value: Uint8Array;
}
/**
 * =============================== PoolLiquidity
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryTotalPoolLiquidityRequestAmino {
  pool_id?: string;
}
export interface QueryTotalPoolLiquidityRequestAminoMsg {
  type: "/zigchain.gamm.QueryTotalPoolLiquidityRequest";
  value: QueryTotalPoolLiquidityRequestAmino;
}
/**
 * =============================== PoolLiquidity
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryTotalPoolLiquidityRequestSDKType {
  pool_id: bigint;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryTotalPoolLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryTotalPoolLiquidityResponse";
  value: Uint8Array;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryTotalPoolLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
export interface QueryTotalPoolLiquidityResponseAminoMsg {
  type: "/zigchain.gamm.QueryTotalPoolLiquidityResponse";
  value: QueryTotalPoolLiquidityResponseAmino;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryTotalPoolLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
export interface QueryTotalSharesRequest {
  poolId: bigint;
}
export interface QueryTotalSharesRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryTotalSharesRequest";
  value: Uint8Array;
}
export interface QueryTotalSharesRequestAmino {
  pool_id?: string;
}
export interface QueryTotalSharesRequestAminoMsg {
  type: "/zigchain.gamm.QueryTotalSharesRequest";
  value: QueryTotalSharesRequestAmino;
}
export interface QueryTotalSharesRequestSDKType {
  pool_id: bigint;
}
export interface QueryTotalSharesResponse {
  totalShares: Coin;
}
export interface QueryTotalSharesResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryTotalSharesResponse";
  value: Uint8Array;
}
export interface QueryTotalSharesResponseAmino {
  total_shares?: CoinAmino;
}
export interface QueryTotalSharesResponseAminoMsg {
  type: "/zigchain.gamm.QueryTotalSharesResponse";
  value: QueryTotalSharesResponseAmino;
}
export interface QueryTotalSharesResponseSDKType {
  total_shares: CoinSDKType;
}
export interface QuerySpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
  /** DEPRECATED */
  /** @deprecated */
  withSwapFee?: boolean;
}
export interface QuerySpotPriceRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QuerySpotPriceRequest";
  value: Uint8Array;
}
export interface QuerySpotPriceRequestAmino {
  pool_id?: string;
  base_asset_denom?: string;
  quote_asset_denom?: string;
  /** DEPRECATED */
  /** @deprecated */
  withSwapFee?: boolean;
}
export interface QuerySpotPriceRequestAminoMsg {
  type: "/zigchain.gamm.QuerySpotPriceRequest";
  value: QuerySpotPriceRequestAmino;
}
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
  /** @deprecated */
  withSwapFee?: boolean;
}
export interface QuerySpotPriceResponse {
  spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QuerySpotPriceResponse";
  value: Uint8Array;
}
export interface QuerySpotPriceResponseAmino {
  spot_price?: string;
}
export interface QuerySpotPriceResponseAminoMsg {
  type: "/zigchain.gamm.QuerySpotPriceResponse";
  value: QuerySpotPriceResponseAmino;
}
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
/** !!!! todo after merge poolmanager  =============================== EstimateSwapExactAmountIn */
/** @deprecated */
export interface QueryEstimateSwapExactAmountInRequest {
  sender: string;
  poolId: bigint;
  tokenIn: string;
}
export interface QueryEstimateSwapExactAmountInRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryEstimateSwapExactAmountInRequest";
  value: Uint8Array;
}
/** !!!! todo after merge poolmanager  =============================== EstimateSwapExactAmountIn */
/** @deprecated */
export interface QueryEstimateSwapExactAmountInRequestAmino {
  sender?: string;
  pool_id?: string;
  token_in?: string;
}
export interface QueryEstimateSwapExactAmountInRequestAminoMsg {
  type: "/zigchain.gamm.QueryEstimateSwapExactAmountInRequest";
  value: QueryEstimateSwapExactAmountInRequestAmino;
}
/** !!!! todo after merge poolmanager  =============================== EstimateSwapExactAmountIn */
/** @deprecated */
export interface QueryEstimateSwapExactAmountInRequestSDKType {
  sender: string;
  pool_id: bigint;
  token_in: string;
}
/** !!!! todo after merge poolmanager */
/** @deprecated */
export interface QueryEstimateSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface QueryEstimateSwapExactAmountInResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryEstimateSwapExactAmountInResponse";
  value: Uint8Array;
}
/** !!!! todo after merge poolmanager */
/** @deprecated */
export interface QueryEstimateSwapExactAmountInResponseAmino {
  token_out_amount?: string;
}
export interface QueryEstimateSwapExactAmountInResponseAminoMsg {
  type: "/zigchain.gamm.QueryEstimateSwapExactAmountInResponse";
  value: QueryEstimateSwapExactAmountInResponseAmino;
}
/** !!!! todo after merge poolmanager */
/** @deprecated */
export interface QueryEstimateSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** =============================== QueryConcentratedPoolIdLinkFromCFMM */
export interface QueryConcentratedPoolIdLinkFromCfmmRequest {
  cfmmPoolId: bigint;
}
export interface QueryConcentratedPoolIdLinkFromCfmmRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryConcentratedPoolIdLinkFromCfmmRequest";
  value: Uint8Array;
}
/** =============================== QueryConcentratedPoolIdLinkFromCFMM */
export interface QueryConcentratedPoolIdLinkFromCfmmRequestAmino {
  cfmm_pool_id?: string;
}
export interface QueryConcentratedPoolIdLinkFromCfmmRequestAminoMsg {
  type: "/zigchain.gamm.QueryConcentratedPoolIdLinkFromCfmmRequest";
  value: QueryConcentratedPoolIdLinkFromCfmmRequestAmino;
}
/** =============================== QueryConcentratedPoolIdLinkFromCFMM */
export interface QueryConcentratedPoolIdLinkFromCfmmRequestSDKType {
  cfmm_pool_id: bigint;
}
export interface QueryConcentratedPoolIdLinkFromCfmmResponse {
  concentratedPoolId: bigint;
}
export interface QueryConcentratedPoolIdLinkFromCfmmResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryConcentratedPoolIdLinkFromCfmmResponse";
  value: Uint8Array;
}
export interface QueryConcentratedPoolIdLinkFromCfmmResponseAmino {
  concentrated_pool_id?: string;
}
export interface QueryConcentratedPoolIdLinkFromCfmmResponseAminoMsg {
  type: "/zigchain.gamm.QueryConcentratedPoolIdLinkFromCfmmResponse";
  value: QueryConcentratedPoolIdLinkFromCfmmResponseAmino;
}
export interface QueryConcentratedPoolIdLinkFromCfmmResponseSDKType {
  concentrated_pool_id: bigint;
}
/** =============================== QueryCFMMConcentratedPoolLinks */
export interface QueryCfmmconcentratedPoolLinksRequest {}
export interface QueryCfmmconcentratedPoolLinksRequestProtoMsg {
  typeUrl: "/zigchain.gamm.QueryCfmmconcentratedPoolLinksRequest";
  value: Uint8Array;
}
/** =============================== QueryCFMMConcentratedPoolLinks */
export interface QueryCfmmconcentratedPoolLinksRequestAmino {}
export interface QueryCfmmconcentratedPoolLinksRequestAminoMsg {
  type: "/zigchain.gamm.QueryCfmmconcentratedPoolLinksRequest";
  value: QueryCfmmconcentratedPoolLinksRequestAmino;
}
/** =============================== QueryCFMMConcentratedPoolLinks */
export interface QueryCfmmconcentratedPoolLinksRequestSDKType {}
export interface QueryCfmmconcentratedPoolLinksResponse {
  migrationRecords?: MigrationRecords;
}
export interface QueryCfmmconcentratedPoolLinksResponseProtoMsg {
  typeUrl: "/zigchain.gamm.QueryCfmmconcentratedPoolLinksResponse";
  value: Uint8Array;
}
export interface QueryCfmmconcentratedPoolLinksResponseAmino {
  migration_records?: MigrationRecordsAmino;
}
export interface QueryCfmmconcentratedPoolLinksResponseAminoMsg {
  type: "/zigchain.gamm.QueryCfmmconcentratedPoolLinksResponse";
  value: QueryCfmmconcentratedPoolLinksResponseAmino;
}
export interface QueryCfmmconcentratedPoolLinksResponseSDKType {
  migration_records?: MigrationRecordsSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/zigchain.gamm.QueryParamsRequest",
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
      typeUrl: "/zigchain.gamm.QueryParamsRequest",
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
  typeUrl: "/zigchain.gamm.QueryParamsResponse",
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
      typeUrl: "/zigchain.gamm.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  typeUrl: "/zigchain.gamm.QueryPoolsRequest",
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/zigchain.gamm.QueryPoolsResponse",
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v! as Any, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()) as Any);
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => PoolI_FromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolI_ToAmino(e as Any) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNumPoolsRequest(): QueryNumPoolsRequest {
  return {};
}
export const QueryNumPoolsRequest = {
  typeUrl: "/zigchain.gamm.QueryNumPoolsRequest",
  encode(_: QueryNumPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsRequest();
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
  fromPartial(_: Partial<QueryNumPoolsRequest>): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  },
  fromAmino(_: QueryNumPoolsRequestAmino): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  },
  toAmino(_: QueryNumPoolsRequest): QueryNumPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNumPoolsRequestAminoMsg): QueryNumPoolsRequest {
    return QueryNumPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNumPoolsRequestProtoMsg): QueryNumPoolsRequest {
    return QueryNumPoolsRequest.decode(message.value);
  },
  toProto(message: QueryNumPoolsRequest): Uint8Array {
    return QueryNumPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolsRequest): QueryNumPoolsRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryNumPoolsRequest",
      value: QueryNumPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNumPoolsResponse(): QueryNumPoolsResponse {
  return {
    numPools: BigInt(0)
  };
}
export const QueryNumPoolsResponse = {
  typeUrl: "/zigchain.gamm.QueryNumPoolsResponse",
  encode(message: QueryNumPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numPools !== BigInt(0)) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsResponse();
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
  fromPartial(object: Partial<QueryNumPoolsResponse>): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    message.numPools = object.numPools !== undefined && object.numPools !== null ? BigInt(object.numPools.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryNumPoolsResponseAmino): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    if (object.num_pools !== undefined && object.num_pools !== null) {
      message.numPools = BigInt(object.num_pools);
    }
    return message;
  },
  toAmino(message: QueryNumPoolsResponse): QueryNumPoolsResponseAmino {
    const obj: any = {};
    obj.num_pools = message.numPools !== BigInt(0) ? message.numPools?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNumPoolsResponseAminoMsg): QueryNumPoolsResponse {
    return QueryNumPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNumPoolsResponseProtoMsg): QueryNumPoolsResponse {
    return QueryNumPoolsResponse.decode(message.value);
  },
  toProto(message: QueryNumPoolsResponse): Uint8Array {
    return QueryNumPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolsResponse): QueryNumPoolsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryNumPoolsResponse",
      value: QueryNumPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return {};
}
export const QueryTotalLiquidityRequest = {
  typeUrl: "/zigchain.gamm.QueryTotalLiquidityRequest",
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
      typeUrl: "/zigchain.gamm.QueryTotalLiquidityRequest",
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
  typeUrl: "/zigchain.gamm.QueryTotalLiquidityResponse",
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
      typeUrl: "/zigchain.gamm.QueryTotalLiquidityResponse",
      value: QueryTotalLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsWithFilterRequest(): QueryPoolsWithFilterRequest {
  return {
    minLiquidity: "",
    poolType: "",
    pagination: undefined
  };
}
export const QueryPoolsWithFilterRequest = {
  typeUrl: "/zigchain.gamm.QueryPoolsWithFilterRequest",
  encode(message: QueryPoolsWithFilterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minLiquidity !== "") {
      writer.uint32(10).string(message.minLiquidity);
    }
    if (message.poolType !== "") {
      writer.uint32(18).string(message.poolType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLiquidity = reader.string();
          break;
        case 2:
          message.poolType = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolsWithFilterRequest>): QueryPoolsWithFilterRequest {
    const message = createBaseQueryPoolsWithFilterRequest();
    message.minLiquidity = object.minLiquidity ?? "";
    message.poolType = object.poolType ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsWithFilterRequestAmino): QueryPoolsWithFilterRequest {
    const message = createBaseQueryPoolsWithFilterRequest();
    if (object.min_liquidity !== undefined && object.min_liquidity !== null) {
      message.minLiquidity = object.min_liquidity;
    }
    if (object.pool_type !== undefined && object.pool_type !== null) {
      message.poolType = object.pool_type;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestAmino {
    const obj: any = {};
    obj.min_liquidity = message.minLiquidity === "" ? undefined : message.minLiquidity;
    obj.pool_type = message.poolType === "" ? undefined : message.poolType;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsWithFilterRequestAminoMsg): QueryPoolsWithFilterRequest {
    return QueryPoolsWithFilterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsWithFilterRequestProtoMsg): QueryPoolsWithFilterRequest {
    return QueryPoolsWithFilterRequest.decode(message.value);
  },
  toProto(message: QueryPoolsWithFilterRequest): Uint8Array {
    return QueryPoolsWithFilterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryPoolsWithFilterRequest",
      value: QueryPoolsWithFilterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsWithFilterResponse(): QueryPoolsWithFilterResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsWithFilterResponse = {
  typeUrl: "/zigchain.gamm.QueryPoolsWithFilterResponse",
  encode(message: QueryPoolsWithFilterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v! as Any, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()) as Any);
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolsWithFilterResponse>): QueryPoolsWithFilterResponse {
    const message = createBaseQueryPoolsWithFilterResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsWithFilterResponseAmino): QueryPoolsWithFilterResponse {
    const message = createBaseQueryPoolsWithFilterResponse();
    message.pools = object.pools?.map(e => PoolI_FromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolI_ToAmino(e as Any) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsWithFilterResponseAminoMsg): QueryPoolsWithFilterResponse {
    return QueryPoolsWithFilterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsWithFilterResponseProtoMsg): QueryPoolsWithFilterResponse {
    return QueryPoolsWithFilterResponse.decode(message.value);
  },
  toProto(message: QueryPoolsWithFilterResponse): Uint8Array {
    return QueryPoolsWithFilterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryPoolsWithFilterResponse",
      value: QueryPoolsWithFilterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/zigchain.gamm.QueryPoolRequest",
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
      typeUrl: "/zigchain.gamm.QueryPoolRequest",
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
  typeUrl: "/zigchain.gamm.QueryPoolResponse",
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
      typeUrl: "/zigchain.gamm.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolTypeRequest(): QueryPoolTypeRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolTypeRequest = {
  typeUrl: "/zigchain.gamm.QueryPoolTypeRequest",
  encode(message: QueryPoolTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeRequest();
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
  fromPartial(object: Partial<QueryPoolTypeRequest>): QueryPoolTypeRequest {
    const message = createBaseQueryPoolTypeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolTypeRequestAmino): QueryPoolTypeRequest {
    const message = createBaseQueryPoolTypeRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolTypeRequest): QueryPoolTypeRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTypeRequestAminoMsg): QueryPoolTypeRequest {
    return QueryPoolTypeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTypeRequestProtoMsg): QueryPoolTypeRequest {
    return QueryPoolTypeRequest.decode(message.value);
  },
  toProto(message: QueryPoolTypeRequest): Uint8Array {
    return QueryPoolTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTypeRequest): QueryPoolTypeRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryPoolTypeRequest",
      value: QueryPoolTypeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolTypeResponse(): QueryPoolTypeResponse {
  return {
    poolType: ""
  };
}
export const QueryPoolTypeResponse = {
  typeUrl: "/zigchain.gamm.QueryPoolTypeResponse",
  encode(message: QueryPoolTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolType !== "") {
      writer.uint32(10).string(message.poolType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolTypeResponse>): QueryPoolTypeResponse {
    const message = createBaseQueryPoolTypeResponse();
    message.poolType = object.poolType ?? "";
    return message;
  },
  fromAmino(object: QueryPoolTypeResponseAmino): QueryPoolTypeResponse {
    const message = createBaseQueryPoolTypeResponse();
    if (object.pool_type !== undefined && object.pool_type !== null) {
      message.poolType = object.pool_type;
    }
    return message;
  },
  toAmino(message: QueryPoolTypeResponse): QueryPoolTypeResponseAmino {
    const obj: any = {};
    obj.pool_type = message.poolType === "" ? undefined : message.poolType;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTypeResponseAminoMsg): QueryPoolTypeResponse {
    return QueryPoolTypeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTypeResponseProtoMsg): QueryPoolTypeResponse {
    return QueryPoolTypeResponse.decode(message.value);
  },
  toProto(message: QueryPoolTypeResponse): Uint8Array {
    return QueryPoolTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTypeResponse): QueryPoolTypeResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryPoolTypeResponse",
      value: QueryPoolTypeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolNoSwapSharesRequest(): QueryCalcJoinPoolNoSwapSharesRequest {
  return {
    poolId: BigInt(0),
    tokensIn: []
  };
}
export const QueryCalcJoinPoolNoSwapSharesRequest = {
  typeUrl: "/zigchain.gamm.QueryCalcJoinPoolNoSwapSharesRequest",
  encode(message: QueryCalcJoinPoolNoSwapSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesRequest>): QueryCalcJoinPoolNoSwapSharesRequest {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCalcJoinPoolNoSwapSharesRequestAmino): QueryCalcJoinPoolNoSwapSharesRequest {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.tokensIn = object.tokens_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_in = message.tokensIn;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): QueryCalcJoinPoolNoSwapSharesRequest {
    return QueryCalcJoinPoolNoSwapSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): QueryCalcJoinPoolNoSwapSharesRequest {
    return QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array {
    return QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryCalcJoinPoolNoSwapSharesRequest",
      value: QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolNoSwapSharesResponse(): QueryCalcJoinPoolNoSwapSharesResponse {
  return {
    tokensOut: [],
    sharesOut: ""
  };
}
export const QueryCalcJoinPoolNoSwapSharesResponse = {
  typeUrl: "/zigchain.gamm.QueryCalcJoinPoolNoSwapSharesResponse",
  encode(message: QueryCalcJoinPoolNoSwapSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sharesOut !== "") {
      writer.uint32(18).string(message.sharesOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sharesOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesResponse>): QueryCalcJoinPoolNoSwapSharesResponse {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    message.sharesOut = object.sharesOut ?? "";
    return message;
  },
  fromAmino(object: QueryCalcJoinPoolNoSwapSharesResponseAmino): QueryCalcJoinPoolNoSwapSharesResponse {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.shares_out !== undefined && object.shares_out !== null) {
      message.sharesOut = object.shares_out;
    }
    return message;
  },
  toAmino(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseAmino {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_out = message.tokensOut;
    }
    obj.shares_out = message.sharesOut === "" ? undefined : message.sharesOut;
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): QueryCalcJoinPoolNoSwapSharesResponse {
    return QueryCalcJoinPoolNoSwapSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): QueryCalcJoinPoolNoSwapSharesResponse {
    return QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array {
    return QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryCalcJoinPoolNoSwapSharesResponse",
      value: QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolSharesRequest(): QueryCalcJoinPoolSharesRequest {
  return {
    poolId: BigInt(0),
    tokensIn: []
  };
}
export const QueryCalcJoinPoolSharesRequest = {
  typeUrl: "/zigchain.gamm.QueryCalcJoinPoolSharesRequest",
  encode(message: QueryCalcJoinPoolSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolSharesRequest>): QueryCalcJoinPoolSharesRequest {
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCalcJoinPoolSharesRequestAmino): QueryCalcJoinPoolSharesRequest {
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.tokensIn = object.tokens_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_in = message.tokensIn;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolSharesRequestAminoMsg): QueryCalcJoinPoolSharesRequest {
    return QueryCalcJoinPoolSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcJoinPoolSharesRequestProtoMsg): QueryCalcJoinPoolSharesRequest {
    return QueryCalcJoinPoolSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolSharesRequest): Uint8Array {
    return QueryCalcJoinPoolSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryCalcJoinPoolSharesRequest",
      value: QueryCalcJoinPoolSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolSharesResponse(): QueryCalcJoinPoolSharesResponse {
  return {
    shareOutAmount: "",
    tokensOut: []
  };
}
export const QueryCalcJoinPoolSharesResponse = {
  typeUrl: "/zigchain.gamm.QueryCalcJoinPoolSharesResponse",
  encode(message: QueryCalcJoinPoolSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;
        case 2:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolSharesResponse>): QueryCalcJoinPoolSharesResponse {
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    message.shareOutAmount = object.shareOutAmount ?? "";
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCalcJoinPoolSharesResponseAmino): QueryCalcJoinPoolSharesResponse {
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
      message.shareOutAmount = object.share_out_amount;
    }
    message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseAmino {
    const obj: any = {};
    obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_out = message.tokensOut;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolSharesResponseAminoMsg): QueryCalcJoinPoolSharesResponse {
    return QueryCalcJoinPoolSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcJoinPoolSharesResponseProtoMsg): QueryCalcJoinPoolSharesResponse {
    return QueryCalcJoinPoolSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolSharesResponse): Uint8Array {
    return QueryCalcJoinPoolSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryCalcJoinPoolSharesResponse",
      value: QueryCalcJoinPoolSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCalcExitPoolCoinsFromSharesRequest(): QueryCalcExitPoolCoinsFromSharesRequest {
  return {
    poolId: BigInt(0),
    shareInAmount: ""
  };
}
export const QueryCalcExitPoolCoinsFromSharesRequest = {
  typeUrl: "/zigchain.gamm.QueryCalcExitPoolCoinsFromSharesRequest",
  encode(message: QueryCalcExitPoolCoinsFromSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.shareInAmount !== "") {
      writer.uint32(18).string(message.shareInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.shareInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesRequest>): QueryCalcExitPoolCoinsFromSharesRequest {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.shareInAmount = object.shareInAmount ?? "";
    return message;
  },
  fromAmino(object: QueryCalcExitPoolCoinsFromSharesRequestAmino): QueryCalcExitPoolCoinsFromSharesRequest {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.share_in_amount !== undefined && object.share_in_amount !== null) {
      message.shareInAmount = object.share_in_amount;
    }
    return message;
  },
  toAmino(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.share_in_amount = message.shareInAmount === "" ? undefined : message.shareInAmount;
    return obj;
  },
  fromAminoMsg(object: QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): QueryCalcExitPoolCoinsFromSharesRequest {
    return QueryCalcExitPoolCoinsFromSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): QueryCalcExitPoolCoinsFromSharesRequest {
    return QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array {
    return QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryCalcExitPoolCoinsFromSharesRequest",
      value: QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCalcExitPoolCoinsFromSharesResponse(): QueryCalcExitPoolCoinsFromSharesResponse {
  return {
    tokensOut: []
  };
}
export const QueryCalcExitPoolCoinsFromSharesResponse = {
  typeUrl: "/zigchain.gamm.QueryCalcExitPoolCoinsFromSharesResponse",
  encode(message: QueryCalcExitPoolCoinsFromSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesResponse>): QueryCalcExitPoolCoinsFromSharesResponse {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCalcExitPoolCoinsFromSharesResponseAmino): QueryCalcExitPoolCoinsFromSharesResponse {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseAmino {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_out = message.tokensOut;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): QueryCalcExitPoolCoinsFromSharesResponse {
    return QueryCalcExitPoolCoinsFromSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): QueryCalcExitPoolCoinsFromSharesResponse {
    return QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array {
    return QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryCalcExitPoolCoinsFromSharesResponse",
      value: QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolParamsRequest = {
  typeUrl: "/zigchain.gamm.QueryPoolParamsRequest",
  encode(message: QueryPoolParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsRequest();
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
  fromPartial(object: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolParamsRequestAmino): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolParamsRequest): QueryPoolParamsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolParamsRequestAminoMsg): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolParamsRequestProtoMsg): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.decode(message.value);
  },
  toProto(message: QueryPoolParamsRequest): Uint8Array {
    return QueryPoolParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryPoolParamsRequest",
      value: QueryPoolParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return {
    params: undefined
  };
}
export const QueryPoolParamsResponse = {
  typeUrl: "/zigchain.gamm.QueryPoolParamsResponse",
  encode(message: QueryPoolParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Any.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Any.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolParamsResponseAmino): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Any.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryPoolParamsResponse): QueryPoolParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Any.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolParamsResponseAminoMsg): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolParamsResponseProtoMsg): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.decode(message.value);
  },
  toProto(message: QueryPoolParamsResponse): Uint8Array {
    return QueryPoolParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryPoolParamsResponse",
      value: QueryPoolParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryTotalPoolLiquidityRequest = {
  typeUrl: "/zigchain.gamm.QueryTotalPoolLiquidityRequest",
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
      typeUrl: "/zigchain.gamm.QueryTotalPoolLiquidityRequest",
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
  typeUrl: "/zigchain.gamm.QueryTotalPoolLiquidityResponse",
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
      typeUrl: "/zigchain.gamm.QueryTotalPoolLiquidityResponse",
      value: QueryTotalPoolLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSharesRequest(): QueryTotalSharesRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryTotalSharesRequest = {
  typeUrl: "/zigchain.gamm.QueryTotalSharesRequest",
  encode(message: QueryTotalSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesRequest();
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
  fromPartial(object: Partial<QueryTotalSharesRequest>): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTotalSharesRequestAmino): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryTotalSharesRequest): QueryTotalSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSharesRequestAminoMsg): QueryTotalSharesRequest {
    return QueryTotalSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSharesRequestProtoMsg): QueryTotalSharesRequest {
    return QueryTotalSharesRequest.decode(message.value);
  },
  toProto(message: QueryTotalSharesRequest): Uint8Array {
    return QueryTotalSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSharesRequest): QueryTotalSharesRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryTotalSharesRequest",
      value: QueryTotalSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSharesResponse(): QueryTotalSharesResponse {
  return {
    totalShares: Coin.fromPartial({})
  };
}
export const QueryTotalSharesResponse = {
  typeUrl: "/zigchain.gamm.QueryTotalSharesResponse",
  encode(message: QueryTotalSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalSharesResponse>): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalSharesResponseAmino): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = Coin.fromAmino(object.total_shares);
    }
    return message;
  },
  toAmino(message: QueryTotalSharesResponse): QueryTotalSharesResponseAmino {
    const obj: any = {};
    obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSharesResponseAminoMsg): QueryTotalSharesResponse {
    return QueryTotalSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSharesResponseProtoMsg): QueryTotalSharesResponse {
    return QueryTotalSharesResponse.decode(message.value);
  },
  toProto(message: QueryTotalSharesResponse): Uint8Array {
    return QueryTotalSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSharesResponse): QueryTotalSharesResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryTotalSharesResponse",
      value: QueryTotalSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: "",
    withSwapFee: undefined
  };
}
export const QuerySpotPriceRequest = {
  typeUrl: "/zigchain.gamm.QuerySpotPriceRequest",
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
    if (message.withSwapFee !== undefined) {
      writer.uint32(32).bool(message.withSwapFee);
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
        case 4:
          message.withSwapFee = reader.bool();
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
    message.withSwapFee = object.withSwapFee ?? undefined;
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
    if (object.withSwapFee !== undefined && object.withSwapFee !== null) {
      message.withSwapFee = object.withSwapFee;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset_denom = message.baseAssetDenom === "" ? undefined : message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom === "" ? undefined : message.quoteAssetDenom;
    obj.withSwapFee = message.withSwapFee === null ? undefined : message.withSwapFee;
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
      typeUrl: "/zigchain.gamm.QuerySpotPriceRequest",
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
  typeUrl: "/zigchain.gamm.QuerySpotPriceResponse",
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
      typeUrl: "/zigchain.gamm.QuerySpotPriceResponse",
      value: QuerySpotPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateSwapExactAmountInRequest(): QueryEstimateSwapExactAmountInRequest {
  return {
    sender: "",
    poolId: BigInt(0),
    tokenIn: ""
  };
}
export const QueryEstimateSwapExactAmountInRequest = {
  typeUrl: "/zigchain.gamm.QueryEstimateSwapExactAmountInRequest",
  encode(message: QueryEstimateSwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEstimateSwapExactAmountInRequest>): QueryEstimateSwapExactAmountInRequest {
    const message = createBaseQueryEstimateSwapExactAmountInRequest();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
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
    return message;
  },
  toAmino(message: QueryEstimateSwapExactAmountInRequest): QueryEstimateSwapExactAmountInRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
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
      typeUrl: "/zigchain.gamm.QueryEstimateSwapExactAmountInRequest",
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
  typeUrl: "/zigchain.gamm.QueryEstimateSwapExactAmountInResponse",
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
      typeUrl: "/zigchain.gamm.QueryEstimateSwapExactAmountInResponse",
      value: QueryEstimateSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConcentratedPoolIdLinkFromCfmmRequest(): QueryConcentratedPoolIdLinkFromCfmmRequest {
  return {
    cfmmPoolId: BigInt(0)
  };
}
export const QueryConcentratedPoolIdLinkFromCfmmRequest = {
  typeUrl: "/zigchain.gamm.QueryConcentratedPoolIdLinkFromCfmmRequest",
  encode(message: QueryConcentratedPoolIdLinkFromCfmmRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cfmmPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cfmmPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConcentratedPoolIdLinkFromCfmmRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConcentratedPoolIdLinkFromCfmmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cfmmPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryConcentratedPoolIdLinkFromCfmmRequest>): QueryConcentratedPoolIdLinkFromCfmmRequest {
    const message = createBaseQueryConcentratedPoolIdLinkFromCfmmRequest();
    message.cfmmPoolId = object.cfmmPoolId !== undefined && object.cfmmPoolId !== null ? BigInt(object.cfmmPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryConcentratedPoolIdLinkFromCfmmRequestAmino): QueryConcentratedPoolIdLinkFromCfmmRequest {
    const message = createBaseQueryConcentratedPoolIdLinkFromCfmmRequest();
    if (object.cfmm_pool_id !== undefined && object.cfmm_pool_id !== null) {
      message.cfmmPoolId = BigInt(object.cfmm_pool_id);
    }
    return message;
  },
  toAmino(message: QueryConcentratedPoolIdLinkFromCfmmRequest): QueryConcentratedPoolIdLinkFromCfmmRequestAmino {
    const obj: any = {};
    obj.cfmm_pool_id = message.cfmmPoolId !== BigInt(0) ? message.cfmmPoolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConcentratedPoolIdLinkFromCfmmRequestAminoMsg): QueryConcentratedPoolIdLinkFromCfmmRequest {
    return QueryConcentratedPoolIdLinkFromCfmmRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConcentratedPoolIdLinkFromCfmmRequestProtoMsg): QueryConcentratedPoolIdLinkFromCfmmRequest {
    return QueryConcentratedPoolIdLinkFromCfmmRequest.decode(message.value);
  },
  toProto(message: QueryConcentratedPoolIdLinkFromCfmmRequest): Uint8Array {
    return QueryConcentratedPoolIdLinkFromCfmmRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConcentratedPoolIdLinkFromCfmmRequest): QueryConcentratedPoolIdLinkFromCfmmRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryConcentratedPoolIdLinkFromCfmmRequest",
      value: QueryConcentratedPoolIdLinkFromCfmmRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConcentratedPoolIdLinkFromCfmmResponse(): QueryConcentratedPoolIdLinkFromCfmmResponse {
  return {
    concentratedPoolId: BigInt(0)
  };
}
export const QueryConcentratedPoolIdLinkFromCfmmResponse = {
  typeUrl: "/zigchain.gamm.QueryConcentratedPoolIdLinkFromCfmmResponse",
  encode(message: QueryConcentratedPoolIdLinkFromCfmmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.concentratedPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.concentratedPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConcentratedPoolIdLinkFromCfmmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConcentratedPoolIdLinkFromCfmmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.concentratedPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryConcentratedPoolIdLinkFromCfmmResponse>): QueryConcentratedPoolIdLinkFromCfmmResponse {
    const message = createBaseQueryConcentratedPoolIdLinkFromCfmmResponse();
    message.concentratedPoolId = object.concentratedPoolId !== undefined && object.concentratedPoolId !== null ? BigInt(object.concentratedPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryConcentratedPoolIdLinkFromCfmmResponseAmino): QueryConcentratedPoolIdLinkFromCfmmResponse {
    const message = createBaseQueryConcentratedPoolIdLinkFromCfmmResponse();
    if (object.concentrated_pool_id !== undefined && object.concentrated_pool_id !== null) {
      message.concentratedPoolId = BigInt(object.concentrated_pool_id);
    }
    return message;
  },
  toAmino(message: QueryConcentratedPoolIdLinkFromCfmmResponse): QueryConcentratedPoolIdLinkFromCfmmResponseAmino {
    const obj: any = {};
    obj.concentrated_pool_id = message.concentratedPoolId !== BigInt(0) ? message.concentratedPoolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConcentratedPoolIdLinkFromCfmmResponseAminoMsg): QueryConcentratedPoolIdLinkFromCfmmResponse {
    return QueryConcentratedPoolIdLinkFromCfmmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConcentratedPoolIdLinkFromCfmmResponseProtoMsg): QueryConcentratedPoolIdLinkFromCfmmResponse {
    return QueryConcentratedPoolIdLinkFromCfmmResponse.decode(message.value);
  },
  toProto(message: QueryConcentratedPoolIdLinkFromCfmmResponse): Uint8Array {
    return QueryConcentratedPoolIdLinkFromCfmmResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConcentratedPoolIdLinkFromCfmmResponse): QueryConcentratedPoolIdLinkFromCfmmResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryConcentratedPoolIdLinkFromCfmmResponse",
      value: QueryConcentratedPoolIdLinkFromCfmmResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCfmmconcentratedPoolLinksRequest(): QueryCfmmconcentratedPoolLinksRequest {
  return {};
}
export const QueryCfmmconcentratedPoolLinksRequest = {
  typeUrl: "/zigchain.gamm.QueryCfmmconcentratedPoolLinksRequest",
  encode(_: QueryCfmmconcentratedPoolLinksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCfmmconcentratedPoolLinksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCfmmconcentratedPoolLinksRequest();
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
  fromPartial(_: Partial<QueryCfmmconcentratedPoolLinksRequest>): QueryCfmmconcentratedPoolLinksRequest {
    const message = createBaseQueryCfmmconcentratedPoolLinksRequest();
    return message;
  },
  fromAmino(_: QueryCfmmconcentratedPoolLinksRequestAmino): QueryCfmmconcentratedPoolLinksRequest {
    const message = createBaseQueryCfmmconcentratedPoolLinksRequest();
    return message;
  },
  toAmino(_: QueryCfmmconcentratedPoolLinksRequest): QueryCfmmconcentratedPoolLinksRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCfmmconcentratedPoolLinksRequestAminoMsg): QueryCfmmconcentratedPoolLinksRequest {
    return QueryCfmmconcentratedPoolLinksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCfmmconcentratedPoolLinksRequestProtoMsg): QueryCfmmconcentratedPoolLinksRequest {
    return QueryCfmmconcentratedPoolLinksRequest.decode(message.value);
  },
  toProto(message: QueryCfmmconcentratedPoolLinksRequest): Uint8Array {
    return QueryCfmmconcentratedPoolLinksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCfmmconcentratedPoolLinksRequest): QueryCfmmconcentratedPoolLinksRequestProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryCfmmconcentratedPoolLinksRequest",
      value: QueryCfmmconcentratedPoolLinksRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCfmmconcentratedPoolLinksResponse(): QueryCfmmconcentratedPoolLinksResponse {
  return {
    migrationRecords: undefined
  };
}
export const QueryCfmmconcentratedPoolLinksResponse = {
  typeUrl: "/zigchain.gamm.QueryCfmmconcentratedPoolLinksResponse",
  encode(message: QueryCfmmconcentratedPoolLinksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.migrationRecords !== undefined) {
      MigrationRecords.encode(message.migrationRecords, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCfmmconcentratedPoolLinksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCfmmconcentratedPoolLinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.migrationRecords = MigrationRecords.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCfmmconcentratedPoolLinksResponse>): QueryCfmmconcentratedPoolLinksResponse {
    const message = createBaseQueryCfmmconcentratedPoolLinksResponse();
    message.migrationRecords = object.migrationRecords !== undefined && object.migrationRecords !== null ? MigrationRecords.fromPartial(object.migrationRecords) : undefined;
    return message;
  },
  fromAmino(object: QueryCfmmconcentratedPoolLinksResponseAmino): QueryCfmmconcentratedPoolLinksResponse {
    const message = createBaseQueryCfmmconcentratedPoolLinksResponse();
    if (object.migration_records !== undefined && object.migration_records !== null) {
      message.migrationRecords = MigrationRecords.fromAmino(object.migration_records);
    }
    return message;
  },
  toAmino(message: QueryCfmmconcentratedPoolLinksResponse): QueryCfmmconcentratedPoolLinksResponseAmino {
    const obj: any = {};
    obj.migration_records = message.migrationRecords ? MigrationRecords.toAmino(message.migrationRecords) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCfmmconcentratedPoolLinksResponseAminoMsg): QueryCfmmconcentratedPoolLinksResponse {
    return QueryCfmmconcentratedPoolLinksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCfmmconcentratedPoolLinksResponseProtoMsg): QueryCfmmconcentratedPoolLinksResponse {
    return QueryCfmmconcentratedPoolLinksResponse.decode(message.value);
  },
  toProto(message: QueryCfmmconcentratedPoolLinksResponse): Uint8Array {
    return QueryCfmmconcentratedPoolLinksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCfmmconcentratedPoolLinksResponse): QueryCfmmconcentratedPoolLinksResponseProtoMsg {
    return {
      typeUrl: "/zigchain.gamm.QueryCfmmconcentratedPoolLinksResponse",
      value: QueryCfmmconcentratedPoolLinksResponse.encode(message).finish()
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