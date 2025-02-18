//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryAllPoolsRequest, QueryAllPoolsResponse, QueryPoolRequest, QueryPoolResponse, QueryNumPoolRequest, QueryNumPoolResponse, QueryTradingPairTakerFeeRequest, QueryTradingPairTakerFeeResponse, QueryTakerFeeShareDenomsToAccruedValueRequest, QueryTakerFeeShareDenomsToAccruedValueResponse, QueryTakerFeeShareAgreementFromDenomRequest, QueryTakerFeeShareAgreementFromDenomResponse, QueryAllTakerFeeShareAgreementsRequest, QueryAllTakerFeeShareAgreementsResponse, QueryAllTakerFeeShareAccumulatorsRequest, QueryAllTakerFeeShareAccumulatorsResponse, QueryTotalVolumeForPoolRequest, QueryTotalVolumeForPoolResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QueryListPoolsByDenomRequest, QueryListPoolsByDenomResponse, QueryRegisteredAlloyedPoolFromPoolIdRequest, QueryRegisteredAlloyedPoolFromPoolIdResponse, QueryRegisteredAlloyedPoolFromDenomRequest, QueryRegisteredAlloyedPoolFromDenomResponse, QueryAllRegisteredAlloyedPoolsRequest, QueryAllRegisteredAlloyedPoolsResponse, QueryEstimateTradeBasedOnPriceImpactRequest, QueryEstimateTradeBasedOnPriceImpactResponse, QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest, QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse, QueryEstimateSwapExactAmountOutRequest, QueryEstimateSwapExactAmountOutResponse, QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest, QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse, QueryEstimateSwapExactAmountInRequest, QueryEstimateSwapExactAmountInResponse, QueryEstimateSinglePoolSwapExactAmountOutRequest, QueryEstimateSinglePoolSwapExactAmountOutResponse, QueryEstimateSinglePoolSwapExactAmountInRequest, QueryEstimateSinglePoolSwapExactAmountInResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of AllPools items. */
  allPools(request?: QueryAllPoolsRequest): Promise<QueryAllPoolsResponse>;
  /** Queries a Pool item. */
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** Queries a list of NumPool items. */
  numPool(request?: QueryNumPoolRequest): Promise<QueryNumPoolResponse>;
  /** Queries a list of TradingPairTakerFee items. */
  tradingPairTakerFee(request: QueryTradingPairTakerFeeRequest): Promise<QueryTradingPairTakerFeeResponse>;
  /** Queries a list of TakerFeeShareDenomsToAccruedValue items. */
  takerFeeShareDenomsToAccruedValue(request: QueryTakerFeeShareDenomsToAccruedValueRequest): Promise<QueryTakerFeeShareDenomsToAccruedValueResponse>;
  /** Queries a list of TakerFeeShareAgreementFromDenom items. */
  takerFeeShareAgreementFromDenom(request: QueryTakerFeeShareAgreementFromDenomRequest): Promise<QueryTakerFeeShareAgreementFromDenomResponse>;
  /** Queries a list of AllTakerFeeShareAgreements items. */
  allTakerFeeShareAgreements(request?: QueryAllTakerFeeShareAgreementsRequest): Promise<QueryAllTakerFeeShareAgreementsResponse>;
  /** Queries a list of AllTakerFeeShareAccumulators items. */
  allTakerFeeShareAccumulators(request?: QueryAllTakerFeeShareAccumulatorsRequest): Promise<QueryAllTakerFeeShareAccumulatorsResponse>;
  /** Queries a list of TotalVolumeForPool items. */
  totalVolumeForPool(request: QueryTotalVolumeForPoolRequest): Promise<QueryTotalVolumeForPoolResponse>;
  /** Queries a list of TotalPoolLiquidity items. */
  totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
  /** Queries a list of TotalLiquidity items. */
  totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
  /** Queries a list of SpotPrice items. */
  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
  /** Queries a list of ListPoolsByDenom items. */
  listPoolsByDenom(request: QueryListPoolsByDenomRequest): Promise<QueryListPoolsByDenomResponse>;
  /** Queries a list of RegisteredAlloyedPoolFromPoolId items. */
  registeredAlloyedPoolFromPoolId(request: QueryRegisteredAlloyedPoolFromPoolIdRequest): Promise<QueryRegisteredAlloyedPoolFromPoolIdResponse>;
  /** Queries a list of RegisteredAlloyedPoolFromDenom items. */
  registeredAlloyedPoolFromDenom(request: QueryRegisteredAlloyedPoolFromDenomRequest): Promise<QueryRegisteredAlloyedPoolFromDenomResponse>;
  /** Queries a list of AllRegisteredAlloyedPools items. */
  allRegisteredAlloyedPools(request?: QueryAllRegisteredAlloyedPoolsRequest): Promise<QueryAllRegisteredAlloyedPoolsResponse>;
  /** Queries a list of EstimateTradeBasedOnPriceImpact items. */
  estimateTradeBasedOnPriceImpact(request: QueryEstimateTradeBasedOnPriceImpactRequest): Promise<QueryEstimateTradeBasedOnPriceImpactResponse>;
  /** Queries a list of EstimateSwapExactAmountOutWithPrimitiveTypes items. */
  estimateSwapExactAmountOutWithPrimitiveTypes(request: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse>;
  /** Queries a list of EstimateSwapExactAmountOut items. */
  estimateSwapExactAmountOut(request: QueryEstimateSwapExactAmountOutRequest): Promise<QueryEstimateSwapExactAmountOutResponse>;
  /** Queries a list of EstimateSwapExactAmountInWithPrimitiveTypes items. */
  estimateSwapExactAmountInWithPrimitiveTypes(request: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse>;
  /** Queries a list of EstimateSwapExactAmountIn items. */
  estimateSwapExactAmountIn(request: QueryEstimateSwapExactAmountInRequest): Promise<QueryEstimateSwapExactAmountInResponse>;
  /** Queries a list of EstimateSinglePoolSwapExactAmountOut items. */
  estimateSinglePoolSwapExactAmountOut(request: QueryEstimateSinglePoolSwapExactAmountOutRequest): Promise<QueryEstimateSinglePoolSwapExactAmountOutResponse>;
  /** Queries a list of EstimateSinglePoolSwapExactAmountIn items. */
  estimateSinglePoolSwapExactAmountIn(request: QueryEstimateSinglePoolSwapExactAmountInRequest): Promise<QueryEstimateSinglePoolSwapExactAmountInResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  allPools(request: QueryAllPoolsRequest = {}): Promise<QueryAllPoolsResponse> {
    const data = QueryAllPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "AllPools", data);
    return promise.then(data => QueryAllPoolsResponse.decode(new BinaryReader(data)));
  }
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  }
  numPool(request: QueryNumPoolRequest = {}): Promise<QueryNumPoolResponse> {
    const data = QueryNumPoolRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "NumPool", data);
    return promise.then(data => QueryNumPoolResponse.decode(new BinaryReader(data)));
  }
  tradingPairTakerFee(request: QueryTradingPairTakerFeeRequest): Promise<QueryTradingPairTakerFeeResponse> {
    const data = QueryTradingPairTakerFeeRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "TradingPairTakerFee", data);
    return promise.then(data => QueryTradingPairTakerFeeResponse.decode(new BinaryReader(data)));
  }
  takerFeeShareDenomsToAccruedValue(request: QueryTakerFeeShareDenomsToAccruedValueRequest): Promise<QueryTakerFeeShareDenomsToAccruedValueResponse> {
    const data = QueryTakerFeeShareDenomsToAccruedValueRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "TakerFeeShareDenomsToAccruedValue", data);
    return promise.then(data => QueryTakerFeeShareDenomsToAccruedValueResponse.decode(new BinaryReader(data)));
  }
  takerFeeShareAgreementFromDenom(request: QueryTakerFeeShareAgreementFromDenomRequest): Promise<QueryTakerFeeShareAgreementFromDenomResponse> {
    const data = QueryTakerFeeShareAgreementFromDenomRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "TakerFeeShareAgreementFromDenom", data);
    return promise.then(data => QueryTakerFeeShareAgreementFromDenomResponse.decode(new BinaryReader(data)));
  }
  allTakerFeeShareAgreements(request: QueryAllTakerFeeShareAgreementsRequest = {}): Promise<QueryAllTakerFeeShareAgreementsResponse> {
    const data = QueryAllTakerFeeShareAgreementsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "AllTakerFeeShareAgreements", data);
    return promise.then(data => QueryAllTakerFeeShareAgreementsResponse.decode(new BinaryReader(data)));
  }
  allTakerFeeShareAccumulators(request: QueryAllTakerFeeShareAccumulatorsRequest = {}): Promise<QueryAllTakerFeeShareAccumulatorsResponse> {
    const data = QueryAllTakerFeeShareAccumulatorsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "AllTakerFeeShareAccumulators", data);
    return promise.then(data => QueryAllTakerFeeShareAccumulatorsResponse.decode(new BinaryReader(data)));
  }
  totalVolumeForPool(request: QueryTotalVolumeForPoolRequest): Promise<QueryTotalVolumeForPoolResponse> {
    const data = QueryTotalVolumeForPoolRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "TotalVolumeForPool", data);
    return promise.then(data => QueryTotalVolumeForPoolResponse.decode(new BinaryReader(data)));
  }
  totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
    const data = QueryTotalPoolLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "TotalPoolLiquidity", data);
    return promise.then(data => QueryTotalPoolLiquidityResponse.decode(new BinaryReader(data)));
  }
  totalLiquidity(request: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponse> {
    const data = QueryTotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "TotalLiquidity", data);
    return promise.then(data => QueryTotalLiquidityResponse.decode(new BinaryReader(data)));
  }
  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
    const data = QuerySpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "SpotPrice", data);
    return promise.then(data => QuerySpotPriceResponse.decode(new BinaryReader(data)));
  }
  listPoolsByDenom(request: QueryListPoolsByDenomRequest): Promise<QueryListPoolsByDenomResponse> {
    const data = QueryListPoolsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "ListPoolsByDenom", data);
    return promise.then(data => QueryListPoolsByDenomResponse.decode(new BinaryReader(data)));
  }
  registeredAlloyedPoolFromPoolId(request: QueryRegisteredAlloyedPoolFromPoolIdRequest): Promise<QueryRegisteredAlloyedPoolFromPoolIdResponse> {
    const data = QueryRegisteredAlloyedPoolFromPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "RegisteredAlloyedPoolFromPoolId", data);
    return promise.then(data => QueryRegisteredAlloyedPoolFromPoolIdResponse.decode(new BinaryReader(data)));
  }
  registeredAlloyedPoolFromDenom(request: QueryRegisteredAlloyedPoolFromDenomRequest): Promise<QueryRegisteredAlloyedPoolFromDenomResponse> {
    const data = QueryRegisteredAlloyedPoolFromDenomRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "RegisteredAlloyedPoolFromDenom", data);
    return promise.then(data => QueryRegisteredAlloyedPoolFromDenomResponse.decode(new BinaryReader(data)));
  }
  allRegisteredAlloyedPools(request: QueryAllRegisteredAlloyedPoolsRequest = {}): Promise<QueryAllRegisteredAlloyedPoolsResponse> {
    const data = QueryAllRegisteredAlloyedPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "AllRegisteredAlloyedPools", data);
    return promise.then(data => QueryAllRegisteredAlloyedPoolsResponse.decode(new BinaryReader(data)));
  }
  estimateTradeBasedOnPriceImpact(request: QueryEstimateTradeBasedOnPriceImpactRequest): Promise<QueryEstimateTradeBasedOnPriceImpactResponse> {
    const data = QueryEstimateTradeBasedOnPriceImpactRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "EstimateTradeBasedOnPriceImpact", data);
    return promise.then(data => QueryEstimateTradeBasedOnPriceImpactResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountOutWithPrimitiveTypes(request: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse> {
    const data = QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "EstimateSwapExactAmountOutWithPrimitiveTypes", data);
    return promise.then(data => QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountOut(request: QueryEstimateSwapExactAmountOutRequest): Promise<QueryEstimateSwapExactAmountOutResponse> {
    const data = QueryEstimateSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "EstimateSwapExactAmountOut", data);
    return promise.then(data => QueryEstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountInWithPrimitiveTypes(request: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse> {
    const data = QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "EstimateSwapExactAmountInWithPrimitiveTypes", data);
    return promise.then(data => QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountIn(request: QueryEstimateSwapExactAmountInRequest): Promise<QueryEstimateSwapExactAmountInResponse> {
    const data = QueryEstimateSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "EstimateSwapExactAmountIn", data);
    return promise.then(data => QueryEstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  estimateSinglePoolSwapExactAmountOut(request: QueryEstimateSinglePoolSwapExactAmountOutRequest): Promise<QueryEstimateSinglePoolSwapExactAmountOutResponse> {
    const data = QueryEstimateSinglePoolSwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "EstimateSinglePoolSwapExactAmountOut", data);
    return promise.then(data => QueryEstimateSinglePoolSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  estimateSinglePoolSwapExactAmountIn(request: QueryEstimateSinglePoolSwapExactAmountInRequest): Promise<QueryEstimateSinglePoolSwapExactAmountInResponse> {
    const data = QueryEstimateSinglePoolSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.poolmanager.Query", "EstimateSinglePoolSwapExactAmountIn", data);
    return promise.then(data => QueryEstimateSinglePoolSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    allPools(request?: QueryAllPoolsRequest): Promise<QueryAllPoolsResponse> {
      return queryService.allPools(request);
    },
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },
    numPool(request?: QueryNumPoolRequest): Promise<QueryNumPoolResponse> {
      return queryService.numPool(request);
    },
    tradingPairTakerFee(request: QueryTradingPairTakerFeeRequest): Promise<QueryTradingPairTakerFeeResponse> {
      return queryService.tradingPairTakerFee(request);
    },
    takerFeeShareDenomsToAccruedValue(request: QueryTakerFeeShareDenomsToAccruedValueRequest): Promise<QueryTakerFeeShareDenomsToAccruedValueResponse> {
      return queryService.takerFeeShareDenomsToAccruedValue(request);
    },
    takerFeeShareAgreementFromDenom(request: QueryTakerFeeShareAgreementFromDenomRequest): Promise<QueryTakerFeeShareAgreementFromDenomResponse> {
      return queryService.takerFeeShareAgreementFromDenom(request);
    },
    allTakerFeeShareAgreements(request?: QueryAllTakerFeeShareAgreementsRequest): Promise<QueryAllTakerFeeShareAgreementsResponse> {
      return queryService.allTakerFeeShareAgreements(request);
    },
    allTakerFeeShareAccumulators(request?: QueryAllTakerFeeShareAccumulatorsRequest): Promise<QueryAllTakerFeeShareAccumulatorsResponse> {
      return queryService.allTakerFeeShareAccumulators(request);
    },
    totalVolumeForPool(request: QueryTotalVolumeForPoolRequest): Promise<QueryTotalVolumeForPoolResponse> {
      return queryService.totalVolumeForPool(request);
    },
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
      return queryService.totalPoolLiquidity(request);
    },
    totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse> {
      return queryService.totalLiquidity(request);
    },
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
      return queryService.spotPrice(request);
    },
    listPoolsByDenom(request: QueryListPoolsByDenomRequest): Promise<QueryListPoolsByDenomResponse> {
      return queryService.listPoolsByDenom(request);
    },
    registeredAlloyedPoolFromPoolId(request: QueryRegisteredAlloyedPoolFromPoolIdRequest): Promise<QueryRegisteredAlloyedPoolFromPoolIdResponse> {
      return queryService.registeredAlloyedPoolFromPoolId(request);
    },
    registeredAlloyedPoolFromDenom(request: QueryRegisteredAlloyedPoolFromDenomRequest): Promise<QueryRegisteredAlloyedPoolFromDenomResponse> {
      return queryService.registeredAlloyedPoolFromDenom(request);
    },
    allRegisteredAlloyedPools(request?: QueryAllRegisteredAlloyedPoolsRequest): Promise<QueryAllRegisteredAlloyedPoolsResponse> {
      return queryService.allRegisteredAlloyedPools(request);
    },
    estimateTradeBasedOnPriceImpact(request: QueryEstimateTradeBasedOnPriceImpactRequest): Promise<QueryEstimateTradeBasedOnPriceImpactResponse> {
      return queryService.estimateTradeBasedOnPriceImpact(request);
    },
    estimateSwapExactAmountOutWithPrimitiveTypes(request: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse> {
      return queryService.estimateSwapExactAmountOutWithPrimitiveTypes(request);
    },
    estimateSwapExactAmountOut(request: QueryEstimateSwapExactAmountOutRequest): Promise<QueryEstimateSwapExactAmountOutResponse> {
      return queryService.estimateSwapExactAmountOut(request);
    },
    estimateSwapExactAmountInWithPrimitiveTypes(request: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse> {
      return queryService.estimateSwapExactAmountInWithPrimitiveTypes(request);
    },
    estimateSwapExactAmountIn(request: QueryEstimateSwapExactAmountInRequest): Promise<QueryEstimateSwapExactAmountInResponse> {
      return queryService.estimateSwapExactAmountIn(request);
    },
    estimateSinglePoolSwapExactAmountOut(request: QueryEstimateSinglePoolSwapExactAmountOutRequest): Promise<QueryEstimateSinglePoolSwapExactAmountOutResponse> {
      return queryService.estimateSinglePoolSwapExactAmountOut(request);
    },
    estimateSinglePoolSwapExactAmountIn(request: QueryEstimateSinglePoolSwapExactAmountInRequest): Promise<QueryEstimateSinglePoolSwapExactAmountInResponse> {
      return queryService.estimateSinglePoolSwapExactAmountIn(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseAllPoolsQuery<TData> extends ReactQueryParams<QueryAllPoolsResponse, TData> {
  request?: QueryAllPoolsRequest;
}
export interface UsePoolQuery<TData> extends ReactQueryParams<QueryPoolResponse, TData> {
  request: QueryPoolRequest;
}
export interface UseNumPoolQuery<TData> extends ReactQueryParams<QueryNumPoolResponse, TData> {
  request?: QueryNumPoolRequest;
}
export interface UseTradingPairTakerFeeQuery<TData> extends ReactQueryParams<QueryTradingPairTakerFeeResponse, TData> {
  request: QueryTradingPairTakerFeeRequest;
}
export interface UseTakerFeeShareDenomsToAccruedValueQuery<TData> extends ReactQueryParams<QueryTakerFeeShareDenomsToAccruedValueResponse, TData> {
  request: QueryTakerFeeShareDenomsToAccruedValueRequest;
}
export interface UseTakerFeeShareAgreementFromDenomQuery<TData> extends ReactQueryParams<QueryTakerFeeShareAgreementFromDenomResponse, TData> {
  request: QueryTakerFeeShareAgreementFromDenomRequest;
}
export interface UseAllTakerFeeShareAgreementsQuery<TData> extends ReactQueryParams<QueryAllTakerFeeShareAgreementsResponse, TData> {
  request?: QueryAllTakerFeeShareAgreementsRequest;
}
export interface UseAllTakerFeeShareAccumulatorsQuery<TData> extends ReactQueryParams<QueryAllTakerFeeShareAccumulatorsResponse, TData> {
  request?: QueryAllTakerFeeShareAccumulatorsRequest;
}
export interface UseTotalVolumeForPoolQuery<TData> extends ReactQueryParams<QueryTotalVolumeForPoolResponse, TData> {
  request: QueryTotalVolumeForPoolRequest;
}
export interface UseTotalPoolLiquidityQuery<TData> extends ReactQueryParams<QueryTotalPoolLiquidityResponse, TData> {
  request: QueryTotalPoolLiquidityRequest;
}
export interface UseTotalLiquidityQuery<TData> extends ReactQueryParams<QueryTotalLiquidityResponse, TData> {
  request?: QueryTotalLiquidityRequest;
}
export interface UseSpotPriceQuery<TData> extends ReactQueryParams<QuerySpotPriceResponse, TData> {
  request: QuerySpotPriceRequest;
}
export interface UseListPoolsByDenomQuery<TData> extends ReactQueryParams<QueryListPoolsByDenomResponse, TData> {
  request: QueryListPoolsByDenomRequest;
}
export interface UseRegisteredAlloyedPoolFromPoolIdQuery<TData> extends ReactQueryParams<QueryRegisteredAlloyedPoolFromPoolIdResponse, TData> {
  request: QueryRegisteredAlloyedPoolFromPoolIdRequest;
}
export interface UseRegisteredAlloyedPoolFromDenomQuery<TData> extends ReactQueryParams<QueryRegisteredAlloyedPoolFromDenomResponse, TData> {
  request: QueryRegisteredAlloyedPoolFromDenomRequest;
}
export interface UseAllRegisteredAlloyedPoolsQuery<TData> extends ReactQueryParams<QueryAllRegisteredAlloyedPoolsResponse, TData> {
  request?: QueryAllRegisteredAlloyedPoolsRequest;
}
export interface UseEstimateTradeBasedOnPriceImpactQuery<TData> extends ReactQueryParams<QueryEstimateTradeBasedOnPriceImpactResponse, TData> {
  request: QueryEstimateTradeBasedOnPriceImpactRequest;
}
export interface UseEstimateSwapExactAmountOutWithPrimitiveTypesQuery<TData> extends ReactQueryParams<QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse, TData> {
  request: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest;
}
export interface UseEstimateSwapExactAmountOutQuery<TData> extends ReactQueryParams<QueryEstimateSwapExactAmountOutResponse, TData> {
  request: QueryEstimateSwapExactAmountOutRequest;
}
export interface UseEstimateSwapExactAmountInWithPrimitiveTypesQuery<TData> extends ReactQueryParams<QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse, TData> {
  request: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest;
}
export interface UseEstimateSwapExactAmountInQuery<TData> extends ReactQueryParams<QueryEstimateSwapExactAmountInResponse, TData> {
  request: QueryEstimateSwapExactAmountInRequest;
}
export interface UseEstimateSinglePoolSwapExactAmountOutQuery<TData> extends ReactQueryParams<QueryEstimateSinglePoolSwapExactAmountOutResponse, TData> {
  request: QueryEstimateSinglePoolSwapExactAmountOutRequest;
}
export interface UseEstimateSinglePoolSwapExactAmountInQuery<TData> extends ReactQueryParams<QueryEstimateSinglePoolSwapExactAmountInResponse, TData> {
  request: QueryEstimateSinglePoolSwapExactAmountInRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useAllPools = <TData = QueryAllPoolsResponse,>({
    request,
    options
  }: UseAllPoolsQuery<TData>) => {
    return useQuery<QueryAllPoolsResponse, Error, TData>(["allPoolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allPools(request);
    }, options);
  };
  const usePool = <TData = QueryPoolResponse,>({
    request,
    options
  }: UsePoolQuery<TData>) => {
    return useQuery<QueryPoolResponse, Error, TData>(["poolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pool(request);
    }, options);
  };
  const useNumPool = <TData = QueryNumPoolResponse,>({
    request,
    options
  }: UseNumPoolQuery<TData>) => {
    return useQuery<QueryNumPoolResponse, Error, TData>(["numPoolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.numPool(request);
    }, options);
  };
  const useTradingPairTakerFee = <TData = QueryTradingPairTakerFeeResponse,>({
    request,
    options
  }: UseTradingPairTakerFeeQuery<TData>) => {
    return useQuery<QueryTradingPairTakerFeeResponse, Error, TData>(["tradingPairTakerFeeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tradingPairTakerFee(request);
    }, options);
  };
  const useTakerFeeShareDenomsToAccruedValue = <TData = QueryTakerFeeShareDenomsToAccruedValueResponse,>({
    request,
    options
  }: UseTakerFeeShareDenomsToAccruedValueQuery<TData>) => {
    return useQuery<QueryTakerFeeShareDenomsToAccruedValueResponse, Error, TData>(["takerFeeShareDenomsToAccruedValueQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.takerFeeShareDenomsToAccruedValue(request);
    }, options);
  };
  const useTakerFeeShareAgreementFromDenom = <TData = QueryTakerFeeShareAgreementFromDenomResponse,>({
    request,
    options
  }: UseTakerFeeShareAgreementFromDenomQuery<TData>) => {
    return useQuery<QueryTakerFeeShareAgreementFromDenomResponse, Error, TData>(["takerFeeShareAgreementFromDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.takerFeeShareAgreementFromDenom(request);
    }, options);
  };
  const useAllTakerFeeShareAgreements = <TData = QueryAllTakerFeeShareAgreementsResponse,>({
    request,
    options
  }: UseAllTakerFeeShareAgreementsQuery<TData>) => {
    return useQuery<QueryAllTakerFeeShareAgreementsResponse, Error, TData>(["allTakerFeeShareAgreementsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allTakerFeeShareAgreements(request);
    }, options);
  };
  const useAllTakerFeeShareAccumulators = <TData = QueryAllTakerFeeShareAccumulatorsResponse,>({
    request,
    options
  }: UseAllTakerFeeShareAccumulatorsQuery<TData>) => {
    return useQuery<QueryAllTakerFeeShareAccumulatorsResponse, Error, TData>(["allTakerFeeShareAccumulatorsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allTakerFeeShareAccumulators(request);
    }, options);
  };
  const useTotalVolumeForPool = <TData = QueryTotalVolumeForPoolResponse,>({
    request,
    options
  }: UseTotalVolumeForPoolQuery<TData>) => {
    return useQuery<QueryTotalVolumeForPoolResponse, Error, TData>(["totalVolumeForPoolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalVolumeForPool(request);
    }, options);
  };
  const useTotalPoolLiquidity = <TData = QueryTotalPoolLiquidityResponse,>({
    request,
    options
  }: UseTotalPoolLiquidityQuery<TData>) => {
    return useQuery<QueryTotalPoolLiquidityResponse, Error, TData>(["totalPoolLiquidityQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalPoolLiquidity(request);
    }, options);
  };
  const useTotalLiquidity = <TData = QueryTotalLiquidityResponse,>({
    request,
    options
  }: UseTotalLiquidityQuery<TData>) => {
    return useQuery<QueryTotalLiquidityResponse, Error, TData>(["totalLiquidityQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalLiquidity(request);
    }, options);
  };
  const useSpotPrice = <TData = QuerySpotPriceResponse,>({
    request,
    options
  }: UseSpotPriceQuery<TData>) => {
    return useQuery<QuerySpotPriceResponse, Error, TData>(["spotPriceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spotPrice(request);
    }, options);
  };
  const useListPoolsByDenom = <TData = QueryListPoolsByDenomResponse,>({
    request,
    options
  }: UseListPoolsByDenomQuery<TData>) => {
    return useQuery<QueryListPoolsByDenomResponse, Error, TData>(["listPoolsByDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.listPoolsByDenom(request);
    }, options);
  };
  const useRegisteredAlloyedPoolFromPoolId = <TData = QueryRegisteredAlloyedPoolFromPoolIdResponse,>({
    request,
    options
  }: UseRegisteredAlloyedPoolFromPoolIdQuery<TData>) => {
    return useQuery<QueryRegisteredAlloyedPoolFromPoolIdResponse, Error, TData>(["registeredAlloyedPoolFromPoolIdQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.registeredAlloyedPoolFromPoolId(request);
    }, options);
  };
  const useRegisteredAlloyedPoolFromDenom = <TData = QueryRegisteredAlloyedPoolFromDenomResponse,>({
    request,
    options
  }: UseRegisteredAlloyedPoolFromDenomQuery<TData>) => {
    return useQuery<QueryRegisteredAlloyedPoolFromDenomResponse, Error, TData>(["registeredAlloyedPoolFromDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.registeredAlloyedPoolFromDenom(request);
    }, options);
  };
  const useAllRegisteredAlloyedPools = <TData = QueryAllRegisteredAlloyedPoolsResponse,>({
    request,
    options
  }: UseAllRegisteredAlloyedPoolsQuery<TData>) => {
    return useQuery<QueryAllRegisteredAlloyedPoolsResponse, Error, TData>(["allRegisteredAlloyedPoolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allRegisteredAlloyedPools(request);
    }, options);
  };
  const useEstimateTradeBasedOnPriceImpact = <TData = QueryEstimateTradeBasedOnPriceImpactResponse,>({
    request,
    options
  }: UseEstimateTradeBasedOnPriceImpactQuery<TData>) => {
    return useQuery<QueryEstimateTradeBasedOnPriceImpactResponse, Error, TData>(["estimateTradeBasedOnPriceImpactQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateTradeBasedOnPriceImpact(request);
    }, options);
  };
  const useEstimateSwapExactAmountOutWithPrimitiveTypes = <TData = QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountOutWithPrimitiveTypesQuery<TData>) => {
    return useQuery<QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse, Error, TData>(["estimateSwapExactAmountOutWithPrimitiveTypesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountOutWithPrimitiveTypes(request);
    }, options);
  };
  const useEstimateSwapExactAmountOut = <TData = QueryEstimateSwapExactAmountOutResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountOutQuery<TData>) => {
    return useQuery<QueryEstimateSwapExactAmountOutResponse, Error, TData>(["estimateSwapExactAmountOutQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountOut(request);
    }, options);
  };
  const useEstimateSwapExactAmountInWithPrimitiveTypes = <TData = QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountInWithPrimitiveTypesQuery<TData>) => {
    return useQuery<QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse, Error, TData>(["estimateSwapExactAmountInWithPrimitiveTypesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountInWithPrimitiveTypes(request);
    }, options);
  };
  const useEstimateSwapExactAmountIn = <TData = QueryEstimateSwapExactAmountInResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountInQuery<TData>) => {
    return useQuery<QueryEstimateSwapExactAmountInResponse, Error, TData>(["estimateSwapExactAmountInQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountIn(request);
    }, options);
  };
  const useEstimateSinglePoolSwapExactAmountOut = <TData = QueryEstimateSinglePoolSwapExactAmountOutResponse,>({
    request,
    options
  }: UseEstimateSinglePoolSwapExactAmountOutQuery<TData>) => {
    return useQuery<QueryEstimateSinglePoolSwapExactAmountOutResponse, Error, TData>(["estimateSinglePoolSwapExactAmountOutQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSinglePoolSwapExactAmountOut(request);
    }, options);
  };
  const useEstimateSinglePoolSwapExactAmountIn = <TData = QueryEstimateSinglePoolSwapExactAmountInResponse,>({
    request,
    options
  }: UseEstimateSinglePoolSwapExactAmountInQuery<TData>) => {
    return useQuery<QueryEstimateSinglePoolSwapExactAmountInResponse, Error, TData>(["estimateSinglePoolSwapExactAmountInQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSinglePoolSwapExactAmountIn(request);
    }, options);
  };
  return {
    /** Parameters queries the parameters of the module. */useParams,
    /** Queries a list of AllPools items. */useAllPools,
    /** Queries a Pool item. */usePool,
    /** Queries a list of NumPool items. */useNumPool,
    /** Queries a list of TradingPairTakerFee items. */useTradingPairTakerFee,
    /** Queries a list of TakerFeeShareDenomsToAccruedValue items. */useTakerFeeShareDenomsToAccruedValue,
    /** Queries a list of TakerFeeShareAgreementFromDenom items. */useTakerFeeShareAgreementFromDenom,
    /** Queries a list of AllTakerFeeShareAgreements items. */useAllTakerFeeShareAgreements,
    /** Queries a list of AllTakerFeeShareAccumulators items. */useAllTakerFeeShareAccumulators,
    /** Queries a list of TotalVolumeForPool items. */useTotalVolumeForPool,
    /** Queries a list of TotalPoolLiquidity items. */useTotalPoolLiquidity,
    /** Queries a list of TotalLiquidity items. */useTotalLiquidity,
    /** Queries a list of SpotPrice items. */useSpotPrice,
    /** Queries a list of ListPoolsByDenom items. */useListPoolsByDenom,
    /** Queries a list of RegisteredAlloyedPoolFromPoolId items. */useRegisteredAlloyedPoolFromPoolId,
    /** Queries a list of RegisteredAlloyedPoolFromDenom items. */useRegisteredAlloyedPoolFromDenom,
    /** Queries a list of AllRegisteredAlloyedPools items. */useAllRegisteredAlloyedPools,
    /** Queries a list of EstimateTradeBasedOnPriceImpact items. */useEstimateTradeBasedOnPriceImpact,
    /** Queries a list of EstimateSwapExactAmountOutWithPrimitiveTypes items. */useEstimateSwapExactAmountOutWithPrimitiveTypes,
    /** Queries a list of EstimateSwapExactAmountOut items. */useEstimateSwapExactAmountOut,
    /** Queries a list of EstimateSwapExactAmountInWithPrimitiveTypes items. */useEstimateSwapExactAmountInWithPrimitiveTypes,
    /** Queries a list of EstimateSwapExactAmountIn items. */useEstimateSwapExactAmountIn,
    /** Queries a list of EstimateSinglePoolSwapExactAmountOut items. */useEstimateSinglePoolSwapExactAmountOut,
    /** Queries a list of EstimateSinglePoolSwapExactAmountIn items. */useEstimateSinglePoolSwapExactAmountIn
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAllPoolsStore {
    store = new QueryStore<QueryAllPoolsRequest, QueryAllPoolsResponse>(queryService?.allPools);
    allPools(request: QueryAllPoolsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPoolStore {
    store = new QueryStore<QueryPoolRequest, QueryPoolResponse>(queryService?.pool);
    pool(request: QueryPoolRequest) {
      return this.store.getData(request);
    }
  }
  class QueryNumPoolStore {
    store = new QueryStore<QueryNumPoolRequest, QueryNumPoolResponse>(queryService?.numPool);
    numPool(request: QueryNumPoolRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTradingPairTakerFeeStore {
    store = new QueryStore<QueryTradingPairTakerFeeRequest, QueryTradingPairTakerFeeResponse>(queryService?.tradingPairTakerFee);
    tradingPairTakerFee(request: QueryTradingPairTakerFeeRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTakerFeeShareDenomsToAccruedValueStore {
    store = new QueryStore<QueryTakerFeeShareDenomsToAccruedValueRequest, QueryTakerFeeShareDenomsToAccruedValueResponse>(queryService?.takerFeeShareDenomsToAccruedValue);
    takerFeeShareDenomsToAccruedValue(request: QueryTakerFeeShareDenomsToAccruedValueRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTakerFeeShareAgreementFromDenomStore {
    store = new QueryStore<QueryTakerFeeShareAgreementFromDenomRequest, QueryTakerFeeShareAgreementFromDenomResponse>(queryService?.takerFeeShareAgreementFromDenom);
    takerFeeShareAgreementFromDenom(request: QueryTakerFeeShareAgreementFromDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAllTakerFeeShareAgreementsStore {
    store = new QueryStore<QueryAllTakerFeeShareAgreementsRequest, QueryAllTakerFeeShareAgreementsResponse>(queryService?.allTakerFeeShareAgreements);
    allTakerFeeShareAgreements(request: QueryAllTakerFeeShareAgreementsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAllTakerFeeShareAccumulatorsStore {
    store = new QueryStore<QueryAllTakerFeeShareAccumulatorsRequest, QueryAllTakerFeeShareAccumulatorsResponse>(queryService?.allTakerFeeShareAccumulators);
    allTakerFeeShareAccumulators(request: QueryAllTakerFeeShareAccumulatorsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTotalVolumeForPoolStore {
    store = new QueryStore<QueryTotalVolumeForPoolRequest, QueryTotalVolumeForPoolResponse>(queryService?.totalVolumeForPool);
    totalVolumeForPool(request: QueryTotalVolumeForPoolRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTotalPoolLiquidityStore {
    store = new QueryStore<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse>(queryService?.totalPoolLiquidity);
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTotalLiquidityStore {
    store = new QueryStore<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse>(queryService?.totalLiquidity);
    totalLiquidity(request: QueryTotalLiquidityRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySpotPriceStore {
    store = new QueryStore<QuerySpotPriceRequest, QuerySpotPriceResponse>(queryService?.spotPrice);
    spotPrice(request: QuerySpotPriceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryListPoolsByDenomStore {
    store = new QueryStore<QueryListPoolsByDenomRequest, QueryListPoolsByDenomResponse>(queryService?.listPoolsByDenom);
    listPoolsByDenom(request: QueryListPoolsByDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QueryRegisteredAlloyedPoolFromPoolIdStore {
    store = new QueryStore<QueryRegisteredAlloyedPoolFromPoolIdRequest, QueryRegisteredAlloyedPoolFromPoolIdResponse>(queryService?.registeredAlloyedPoolFromPoolId);
    registeredAlloyedPoolFromPoolId(request: QueryRegisteredAlloyedPoolFromPoolIdRequest) {
      return this.store.getData(request);
    }
  }
  class QueryRegisteredAlloyedPoolFromDenomStore {
    store = new QueryStore<QueryRegisteredAlloyedPoolFromDenomRequest, QueryRegisteredAlloyedPoolFromDenomResponse>(queryService?.registeredAlloyedPoolFromDenom);
    registeredAlloyedPoolFromDenom(request: QueryRegisteredAlloyedPoolFromDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAllRegisteredAlloyedPoolsStore {
    store = new QueryStore<QueryAllRegisteredAlloyedPoolsRequest, QueryAllRegisteredAlloyedPoolsResponse>(queryService?.allRegisteredAlloyedPools);
    allRegisteredAlloyedPools(request: QueryAllRegisteredAlloyedPoolsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateTradeBasedOnPriceImpactStore {
    store = new QueryStore<QueryEstimateTradeBasedOnPriceImpactRequest, QueryEstimateTradeBasedOnPriceImpactResponse>(queryService?.estimateTradeBasedOnPriceImpact);
    estimateTradeBasedOnPriceImpact(request: QueryEstimateTradeBasedOnPriceImpactRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateSwapExactAmountOutWithPrimitiveTypesStore {
    store = new QueryStore<QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest, QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponse>(queryService?.estimateSwapExactAmountOutWithPrimitiveTypes);
    estimateSwapExactAmountOutWithPrimitiveTypes(request: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateSwapExactAmountOutStore {
    store = new QueryStore<QueryEstimateSwapExactAmountOutRequest, QueryEstimateSwapExactAmountOutResponse>(queryService?.estimateSwapExactAmountOut);
    estimateSwapExactAmountOut(request: QueryEstimateSwapExactAmountOutRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateSwapExactAmountInWithPrimitiveTypesStore {
    store = new QueryStore<QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest, QueryEstimateSwapExactAmountInWithPrimitiveTypesResponse>(queryService?.estimateSwapExactAmountInWithPrimitiveTypes);
    estimateSwapExactAmountInWithPrimitiveTypes(request: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateSwapExactAmountInStore {
    store = new QueryStore<QueryEstimateSwapExactAmountInRequest, QueryEstimateSwapExactAmountInResponse>(queryService?.estimateSwapExactAmountIn);
    estimateSwapExactAmountIn(request: QueryEstimateSwapExactAmountInRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateSinglePoolSwapExactAmountOutStore {
    store = new QueryStore<QueryEstimateSinglePoolSwapExactAmountOutRequest, QueryEstimateSinglePoolSwapExactAmountOutResponse>(queryService?.estimateSinglePoolSwapExactAmountOut);
    estimateSinglePoolSwapExactAmountOut(request: QueryEstimateSinglePoolSwapExactAmountOutRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateSinglePoolSwapExactAmountInStore {
    store = new QueryStore<QueryEstimateSinglePoolSwapExactAmountInRequest, QueryEstimateSinglePoolSwapExactAmountInResponse>(queryService?.estimateSinglePoolSwapExactAmountIn);
    estimateSinglePoolSwapExactAmountIn(request: QueryEstimateSinglePoolSwapExactAmountInRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Parameters queries the parameters of the module. */QueryParamsStore,
    /** Queries a list of AllPools items. */QueryAllPoolsStore,
    /** Queries a Pool item. */QueryPoolStore,
    /** Queries a list of NumPool items. */QueryNumPoolStore,
    /** Queries a list of TradingPairTakerFee items. */QueryTradingPairTakerFeeStore,
    /** Queries a list of TakerFeeShareDenomsToAccruedValue items. */QueryTakerFeeShareDenomsToAccruedValueStore,
    /** Queries a list of TakerFeeShareAgreementFromDenom items. */QueryTakerFeeShareAgreementFromDenomStore,
    /** Queries a list of AllTakerFeeShareAgreements items. */QueryAllTakerFeeShareAgreementsStore,
    /** Queries a list of AllTakerFeeShareAccumulators items. */QueryAllTakerFeeShareAccumulatorsStore,
    /** Queries a list of TotalVolumeForPool items. */QueryTotalVolumeForPoolStore,
    /** Queries a list of TotalPoolLiquidity items. */QueryTotalPoolLiquidityStore,
    /** Queries a list of TotalLiquidity items. */QueryTotalLiquidityStore,
    /** Queries a list of SpotPrice items. */QuerySpotPriceStore,
    /** Queries a list of ListPoolsByDenom items. */QueryListPoolsByDenomStore,
    /** Queries a list of RegisteredAlloyedPoolFromPoolId items. */QueryRegisteredAlloyedPoolFromPoolIdStore,
    /** Queries a list of RegisteredAlloyedPoolFromDenom items. */QueryRegisteredAlloyedPoolFromDenomStore,
    /** Queries a list of AllRegisteredAlloyedPools items. */QueryAllRegisteredAlloyedPoolsStore,
    /** Queries a list of EstimateTradeBasedOnPriceImpact items. */QueryEstimateTradeBasedOnPriceImpactStore,
    /** Queries a list of EstimateSwapExactAmountOutWithPrimitiveTypes items. */QueryEstimateSwapExactAmountOutWithPrimitiveTypesStore,
    /** Queries a list of EstimateSwapExactAmountOut items. */QueryEstimateSwapExactAmountOutStore,
    /** Queries a list of EstimateSwapExactAmountInWithPrimitiveTypes items. */QueryEstimateSwapExactAmountInWithPrimitiveTypesStore,
    /** Queries a list of EstimateSwapExactAmountIn items. */QueryEstimateSwapExactAmountInStore,
    /** Queries a list of EstimateSinglePoolSwapExactAmountOut items. */QueryEstimateSinglePoolSwapExactAmountOutStore,
    /** Queries a list of EstimateSinglePoolSwapExactAmountIn items. */QueryEstimateSinglePoolSwapExactAmountInStore
  };
};