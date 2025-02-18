//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QueryEstimateSwapExactAmountInRequest, QueryEstimateSwapExactAmountInResponse, QueryConcentratedPoolIdLinkFromCfmmRequest, QueryConcentratedPoolIdLinkFromCfmmResponse, QueryCfmmconcentratedPoolLinksRequest, QueryCfmmconcentratedPoolLinksResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Pools items. */
  pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  /** Queries a list of NumPools items. */
  numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
  /** Queries a list of TotalLiquidity items. */
  totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
  /** Queries a list of PoolsWithFilter items. */
  poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse>;
  /** Queries a list of Pool items. */
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** Queries a list of PoolType items. */
  poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
  /** Queries a list of CalcJoinPoolNoSwapShares items. */
  calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
  /** Queries a list of CalcJoinPoolShares items. */
  calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse>;
  /** Queries a list of CalcExitPoolCoinsFromShares items. */
  calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
  /** Queries a list of PoolParams items. */
  poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
  /** Queries a list of TotalPoolLiquidity items. */
  totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
  /** Queries a list of TotalShares items. */
  totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
  /** !!! TODO Queries a list of SpotPrice items.  rework after merge poolmanager */
  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
  /** Queries a list of EstimateSwapExactAmountIn items. */
  estimateSwapExactAmountIn(request: QueryEstimateSwapExactAmountInRequest): Promise<QueryEstimateSwapExactAmountInResponse>;
  /** Queries a list of ConcentratedPoolIdLinkFromCfmm items. */
  concentratedPoolIdLinkFromCfmm(request: QueryConcentratedPoolIdLinkFromCfmmRequest): Promise<QueryConcentratedPoolIdLinkFromCfmmResponse>;
  /** Queries a list of CfmmconcentratedPoolLinks items. */
  cfmmconcentratedPoolLinks(request?: QueryCfmmconcentratedPoolLinksRequest): Promise<QueryCfmmconcentratedPoolLinksResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.poolsWithFilter = this.poolsWithFilter.bind(this);
    this.pool = this.pool.bind(this);
    this.poolType = this.poolType.bind(this);
    this.calcJoinPoolNoSwapShares = this.calcJoinPoolNoSwapShares.bind(this);
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
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  pools(request: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new BinaryReader(data)));
  }
  numPools(request: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponse> {
    const data = QueryNumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "NumPools", data);
    return promise.then(data => QueryNumPoolsResponse.decode(new BinaryReader(data)));
  }
  totalLiquidity(request: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponse> {
    const data = QueryTotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "TotalLiquidity", data);
    return promise.then(data => QueryTotalLiquidityResponse.decode(new BinaryReader(data)));
  }
  poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse> {
    const data = QueryPoolsWithFilterRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "PoolsWithFilter", data);
    return promise.then(data => QueryPoolsWithFilterResponse.decode(new BinaryReader(data)));
  }
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  }
  poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse> {
    const data = QueryPoolTypeRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "PoolType", data);
    return promise.then(data => QueryPoolTypeResponse.decode(new BinaryReader(data)));
  }
  calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
    const data = QueryCalcJoinPoolNoSwapSharesRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "CalcJoinPoolNoSwapShares", data);
    return promise.then(data => QueryCalcJoinPoolNoSwapSharesResponse.decode(new BinaryReader(data)));
  }
  calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse> {
    const data = QueryCalcJoinPoolSharesRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "CalcJoinPoolShares", data);
    return promise.then(data => QueryCalcJoinPoolSharesResponse.decode(new BinaryReader(data)));
  }
  calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
    const data = QueryCalcExitPoolCoinsFromSharesRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "CalcExitPoolCoinsFromShares", data);
    return promise.then(data => QueryCalcExitPoolCoinsFromSharesResponse.decode(new BinaryReader(data)));
  }
  poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
    const data = QueryPoolParamsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "PoolParams", data);
    return promise.then(data => QueryPoolParamsResponse.decode(new BinaryReader(data)));
  }
  totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
    const data = QueryTotalPoolLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "TotalPoolLiquidity", data);
    return promise.then(data => QueryTotalPoolLiquidityResponse.decode(new BinaryReader(data)));
  }
  totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse> {
    const data = QueryTotalSharesRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "TotalShares", data);
    return promise.then(data => QueryTotalSharesResponse.decode(new BinaryReader(data)));
  }
  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
    const data = QuerySpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "SpotPrice", data);
    return promise.then(data => QuerySpotPriceResponse.decode(new BinaryReader(data)));
  }
  estimateSwapExactAmountIn(request: QueryEstimateSwapExactAmountInRequest): Promise<QueryEstimateSwapExactAmountInResponse> {
    const data = QueryEstimateSwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "EstimateSwapExactAmountIn", data);
    return promise.then(data => QueryEstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  concentratedPoolIdLinkFromCfmm(request: QueryConcentratedPoolIdLinkFromCfmmRequest): Promise<QueryConcentratedPoolIdLinkFromCfmmResponse> {
    const data = QueryConcentratedPoolIdLinkFromCfmmRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "ConcentratedPoolIdLinkFromCfmm", data);
    return promise.then(data => QueryConcentratedPoolIdLinkFromCfmmResponse.decode(new BinaryReader(data)));
  }
  cfmmconcentratedPoolLinks(request: QueryCfmmconcentratedPoolLinksRequest = {}): Promise<QueryCfmmconcentratedPoolLinksResponse> {
    const data = QueryCfmmconcentratedPoolLinksRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.gamm.Query", "CfmmconcentratedPoolLinks", data);
    return promise.then(data => QueryCfmmconcentratedPoolLinksResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    },
    numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse> {
      return queryService.numPools(request);
    },
    totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse> {
      return queryService.totalLiquidity(request);
    },
    poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse> {
      return queryService.poolsWithFilter(request);
    },
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },
    poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse> {
      return queryService.poolType(request);
    },
    calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
      return queryService.calcJoinPoolNoSwapShares(request);
    },
    calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse> {
      return queryService.calcJoinPoolShares(request);
    },
    calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
      return queryService.calcExitPoolCoinsFromShares(request);
    },
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
      return queryService.poolParams(request);
    },
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
      return queryService.totalPoolLiquidity(request);
    },
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse> {
      return queryService.totalShares(request);
    },
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
      return queryService.spotPrice(request);
    },
    estimateSwapExactAmountIn(request: QueryEstimateSwapExactAmountInRequest): Promise<QueryEstimateSwapExactAmountInResponse> {
      return queryService.estimateSwapExactAmountIn(request);
    },
    concentratedPoolIdLinkFromCfmm(request: QueryConcentratedPoolIdLinkFromCfmmRequest): Promise<QueryConcentratedPoolIdLinkFromCfmmResponse> {
      return queryService.concentratedPoolIdLinkFromCfmm(request);
    },
    cfmmconcentratedPoolLinks(request?: QueryCfmmconcentratedPoolLinksRequest): Promise<QueryCfmmconcentratedPoolLinksResponse> {
      return queryService.cfmmconcentratedPoolLinks(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UsePoolsQuery<TData> extends ReactQueryParams<QueryPoolsResponse, TData> {
  request?: QueryPoolsRequest;
}
export interface UseNumPoolsQuery<TData> extends ReactQueryParams<QueryNumPoolsResponse, TData> {
  request?: QueryNumPoolsRequest;
}
export interface UseTotalLiquidityQuery<TData> extends ReactQueryParams<QueryTotalLiquidityResponse, TData> {
  request?: QueryTotalLiquidityRequest;
}
export interface UsePoolsWithFilterQuery<TData> extends ReactQueryParams<QueryPoolsWithFilterResponse, TData> {
  request: QueryPoolsWithFilterRequest;
}
export interface UsePoolQuery<TData> extends ReactQueryParams<QueryPoolResponse, TData> {
  request: QueryPoolRequest;
}
export interface UsePoolTypeQuery<TData> extends ReactQueryParams<QueryPoolTypeResponse, TData> {
  request: QueryPoolTypeRequest;
}
export interface UseCalcJoinPoolNoSwapSharesQuery<TData> extends ReactQueryParams<QueryCalcJoinPoolNoSwapSharesResponse, TData> {
  request: QueryCalcJoinPoolNoSwapSharesRequest;
}
export interface UseCalcJoinPoolSharesQuery<TData> extends ReactQueryParams<QueryCalcJoinPoolSharesResponse, TData> {
  request: QueryCalcJoinPoolSharesRequest;
}
export interface UseCalcExitPoolCoinsFromSharesQuery<TData> extends ReactQueryParams<QueryCalcExitPoolCoinsFromSharesResponse, TData> {
  request: QueryCalcExitPoolCoinsFromSharesRequest;
}
export interface UsePoolParamsQuery<TData> extends ReactQueryParams<QueryPoolParamsResponse, TData> {
  request: QueryPoolParamsRequest;
}
export interface UseTotalPoolLiquidityQuery<TData> extends ReactQueryParams<QueryTotalPoolLiquidityResponse, TData> {
  request: QueryTotalPoolLiquidityRequest;
}
export interface UseTotalSharesQuery<TData> extends ReactQueryParams<QueryTotalSharesResponse, TData> {
  request: QueryTotalSharesRequest;
}
export interface UseSpotPriceQuery<TData> extends ReactQueryParams<QuerySpotPriceResponse, TData> {
  request: QuerySpotPriceRequest;
}
export interface UseEstimateSwapExactAmountInQuery<TData> extends ReactQueryParams<QueryEstimateSwapExactAmountInResponse, TData> {
  request: QueryEstimateSwapExactAmountInRequest;
}
export interface UseConcentratedPoolIdLinkFromCfmmQuery<TData> extends ReactQueryParams<QueryConcentratedPoolIdLinkFromCfmmResponse, TData> {
  request: QueryConcentratedPoolIdLinkFromCfmmRequest;
}
export interface UseCfmmconcentratedPoolLinksQuery<TData> extends ReactQueryParams<QueryCfmmconcentratedPoolLinksResponse, TData> {
  request?: QueryCfmmconcentratedPoolLinksRequest;
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
  const usePools = <TData = QueryPoolsResponse,>({
    request,
    options
  }: UsePoolsQuery<TData>) => {
    return useQuery<QueryPoolsResponse, Error, TData>(["poolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pools(request);
    }, options);
  };
  const useNumPools = <TData = QueryNumPoolsResponse,>({
    request,
    options
  }: UseNumPoolsQuery<TData>) => {
    return useQuery<QueryNumPoolsResponse, Error, TData>(["numPoolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.numPools(request);
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
  const usePoolsWithFilter = <TData = QueryPoolsWithFilterResponse,>({
    request,
    options
  }: UsePoolsWithFilterQuery<TData>) => {
    return useQuery<QueryPoolsWithFilterResponse, Error, TData>(["poolsWithFilterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolsWithFilter(request);
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
  const usePoolType = <TData = QueryPoolTypeResponse,>({
    request,
    options
  }: UsePoolTypeQuery<TData>) => {
    return useQuery<QueryPoolTypeResponse, Error, TData>(["poolTypeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolType(request);
    }, options);
  };
  const useCalcJoinPoolNoSwapShares = <TData = QueryCalcJoinPoolNoSwapSharesResponse,>({
    request,
    options
  }: UseCalcJoinPoolNoSwapSharesQuery<TData>) => {
    return useQuery<QueryCalcJoinPoolNoSwapSharesResponse, Error, TData>(["calcJoinPoolNoSwapSharesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.calcJoinPoolNoSwapShares(request);
    }, options);
  };
  const useCalcJoinPoolShares = <TData = QueryCalcJoinPoolSharesResponse,>({
    request,
    options
  }: UseCalcJoinPoolSharesQuery<TData>) => {
    return useQuery<QueryCalcJoinPoolSharesResponse, Error, TData>(["calcJoinPoolSharesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.calcJoinPoolShares(request);
    }, options);
  };
  const useCalcExitPoolCoinsFromShares = <TData = QueryCalcExitPoolCoinsFromSharesResponse,>({
    request,
    options
  }: UseCalcExitPoolCoinsFromSharesQuery<TData>) => {
    return useQuery<QueryCalcExitPoolCoinsFromSharesResponse, Error, TData>(["calcExitPoolCoinsFromSharesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.calcExitPoolCoinsFromShares(request);
    }, options);
  };
  const usePoolParams = <TData = QueryPoolParamsResponse,>({
    request,
    options
  }: UsePoolParamsQuery<TData>) => {
    return useQuery<QueryPoolParamsResponse, Error, TData>(["poolParamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolParams(request);
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
  const useTotalShares = <TData = QueryTotalSharesResponse,>({
    request,
    options
  }: UseTotalSharesQuery<TData>) => {
    return useQuery<QueryTotalSharesResponse, Error, TData>(["totalSharesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalShares(request);
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
  const useEstimateSwapExactAmountIn = <TData = QueryEstimateSwapExactAmountInResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountInQuery<TData>) => {
    return useQuery<QueryEstimateSwapExactAmountInResponse, Error, TData>(["estimateSwapExactAmountInQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountIn(request);
    }, options);
  };
  const useConcentratedPoolIdLinkFromCfmm = <TData = QueryConcentratedPoolIdLinkFromCfmmResponse,>({
    request,
    options
  }: UseConcentratedPoolIdLinkFromCfmmQuery<TData>) => {
    return useQuery<QueryConcentratedPoolIdLinkFromCfmmResponse, Error, TData>(["concentratedPoolIdLinkFromCfmmQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.concentratedPoolIdLinkFromCfmm(request);
    }, options);
  };
  const useCfmmconcentratedPoolLinks = <TData = QueryCfmmconcentratedPoolLinksResponse,>({
    request,
    options
  }: UseCfmmconcentratedPoolLinksQuery<TData>) => {
    return useQuery<QueryCfmmconcentratedPoolLinksResponse, Error, TData>(["cfmmconcentratedPoolLinksQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.cfmmconcentratedPoolLinks(request);
    }, options);
  };
  return {
    /** Parameters queries the parameters of the module. */useParams,
    /** Queries a list of Pools items. */usePools,
    /** Queries a list of NumPools items. */useNumPools,
    /** Queries a list of TotalLiquidity items. */useTotalLiquidity,
    /** Queries a list of PoolsWithFilter items. */usePoolsWithFilter,
    /** Queries a list of Pool items. */usePool,
    /** Queries a list of PoolType items. */usePoolType,
    /** Queries a list of CalcJoinPoolNoSwapShares items. */useCalcJoinPoolNoSwapShares,
    /** Queries a list of CalcJoinPoolShares items. */useCalcJoinPoolShares,
    /** Queries a list of CalcExitPoolCoinsFromShares items. */useCalcExitPoolCoinsFromShares,
    /** Queries a list of PoolParams items. */usePoolParams,
    /** Queries a list of TotalPoolLiquidity items. */useTotalPoolLiquidity,
    /** Queries a list of TotalShares items. */useTotalShares,
    /** !!! TODO Queries a list of SpotPrice items.  rework after merge poolmanager */useSpotPrice,
    /** Queries a list of EstimateSwapExactAmountIn items. */useEstimateSwapExactAmountIn,
    /** Queries a list of ConcentratedPoolIdLinkFromCfmm items. */useConcentratedPoolIdLinkFromCfmm,
    /** Queries a list of CfmmconcentratedPoolLinks items. */useCfmmconcentratedPoolLinks
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
  class QueryPoolsStore {
    store = new QueryStore<QueryPoolsRequest, QueryPoolsResponse>(queryService?.pools);
    pools(request: QueryPoolsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryNumPoolsStore {
    store = new QueryStore<QueryNumPoolsRequest, QueryNumPoolsResponse>(queryService?.numPools);
    numPools(request: QueryNumPoolsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTotalLiquidityStore {
    store = new QueryStore<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse>(queryService?.totalLiquidity);
    totalLiquidity(request: QueryTotalLiquidityRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPoolsWithFilterStore {
    store = new QueryStore<QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse>(queryService?.poolsWithFilter);
    poolsWithFilter(request: QueryPoolsWithFilterRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPoolStore {
    store = new QueryStore<QueryPoolRequest, QueryPoolResponse>(queryService?.pool);
    pool(request: QueryPoolRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPoolTypeStore {
    store = new QueryStore<QueryPoolTypeRequest, QueryPoolTypeResponse>(queryService?.poolType);
    poolType(request: QueryPoolTypeRequest) {
      return this.store.getData(request);
    }
  }
  class QueryCalcJoinPoolNoSwapSharesStore {
    store = new QueryStore<QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse>(queryService?.calcJoinPoolNoSwapShares);
    calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryCalcJoinPoolSharesStore {
    store = new QueryStore<QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse>(queryService?.calcJoinPoolShares);
    calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryCalcExitPoolCoinsFromSharesStore {
    store = new QueryStore<QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse>(queryService?.calcExitPoolCoinsFromShares);
    calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPoolParamsStore {
    store = new QueryStore<QueryPoolParamsRequest, QueryPoolParamsResponse>(queryService?.poolParams);
    poolParams(request: QueryPoolParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTotalPoolLiquidityStore {
    store = new QueryStore<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse>(queryService?.totalPoolLiquidity);
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTotalSharesStore {
    store = new QueryStore<QueryTotalSharesRequest, QueryTotalSharesResponse>(queryService?.totalShares);
    totalShares(request: QueryTotalSharesRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySpotPriceStore {
    store = new QueryStore<QuerySpotPriceRequest, QuerySpotPriceResponse>(queryService?.spotPrice);
    spotPrice(request: QuerySpotPriceRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateSwapExactAmountInStore {
    store = new QueryStore<QueryEstimateSwapExactAmountInRequest, QueryEstimateSwapExactAmountInResponse>(queryService?.estimateSwapExactAmountIn);
    estimateSwapExactAmountIn(request: QueryEstimateSwapExactAmountInRequest) {
      return this.store.getData(request);
    }
  }
  class QueryConcentratedPoolIdLinkFromCfmmStore {
    store = new QueryStore<QueryConcentratedPoolIdLinkFromCfmmRequest, QueryConcentratedPoolIdLinkFromCfmmResponse>(queryService?.concentratedPoolIdLinkFromCfmm);
    concentratedPoolIdLinkFromCfmm(request: QueryConcentratedPoolIdLinkFromCfmmRequest) {
      return this.store.getData(request);
    }
  }
  class QueryCfmmconcentratedPoolLinksStore {
    store = new QueryStore<QueryCfmmconcentratedPoolLinksRequest, QueryCfmmconcentratedPoolLinksResponse>(queryService?.cfmmconcentratedPoolLinks);
    cfmmconcentratedPoolLinks(request: QueryCfmmconcentratedPoolLinksRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Parameters queries the parameters of the module. */QueryParamsStore,
    /** Queries a list of Pools items. */QueryPoolsStore,
    /** Queries a list of NumPools items. */QueryNumPoolsStore,
    /** Queries a list of TotalLiquidity items. */QueryTotalLiquidityStore,
    /** Queries a list of PoolsWithFilter items. */QueryPoolsWithFilterStore,
    /** Queries a list of Pool items. */QueryPoolStore,
    /** Queries a list of PoolType items. */QueryPoolTypeStore,
    /** Queries a list of CalcJoinPoolNoSwapShares items. */QueryCalcJoinPoolNoSwapSharesStore,
    /** Queries a list of CalcJoinPoolShares items. */QueryCalcJoinPoolSharesStore,
    /** Queries a list of CalcExitPoolCoinsFromShares items. */QueryCalcExitPoolCoinsFromSharesStore,
    /** Queries a list of PoolParams items. */QueryPoolParamsStore,
    /** Queries a list of TotalPoolLiquidity items. */QueryTotalPoolLiquidityStore,
    /** Queries a list of TotalShares items. */QueryTotalSharesStore,
    /** !!! TODO Queries a list of SpotPrice items.  rework after merge poolmanager */QuerySpotPriceStore,
    /** Queries a list of EstimateSwapExactAmountIn items. */QueryEstimateSwapExactAmountInStore,
    /** Queries a list of ConcentratedPoolIdLinkFromCfmm items. */QueryConcentratedPoolIdLinkFromCfmmStore,
    /** Queries a list of CfmmconcentratedPoolLinks items. */QueryCfmmconcentratedPoolLinksStore
  };
};