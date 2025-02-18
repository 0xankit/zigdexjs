//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryGetPoolsMetaRequest, QueryGetPoolsMetaResponse, QueryGetPoolUidRequest, QueryGetPoolUidResponse, QueryAllPoolUidsRequest, QueryAllPoolUidsResponse, QuerySwapInRequest, QuerySwapInResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Pool items. */
  getPool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  /** Queries a list of Pool items. */
  listPool(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  /** Queries a PoolsMeta by index. */
  getPoolsMeta(request?: QueryGetPoolsMetaRequest): Promise<QueryGetPoolsMetaResponse>;
  /** Queries a list of PoolUids items. */
  getPoolUid(request: QueryGetPoolUidRequest): Promise<QueryGetPoolUidResponse>;
  /** Queries a list of PoolUids items. */
  listPoolUids(request?: QueryAllPoolUidsRequest): Promise<QueryAllPoolUidsResponse>;
  /** Queries a list of SwapIn items. */
  swapIn(request: QuerySwapInRequest): Promise<QuerySwapInResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getPool = this.getPool.bind(this);
    this.listPool = this.listPool.bind(this);
    this.getPoolsMeta = this.getPoolsMeta.bind(this);
    this.getPoolUid = this.getPoolUid.bind(this);
    this.listPoolUids = this.listPoolUids.bind(this);
    this.swapIn = this.swapIn.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  getPool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Query", "GetPool", data);
    return promise.then(data => QueryGetPoolResponse.decode(new BinaryReader(data)));
  }
  listPool(request: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Query", "ListPool", data);
    return promise.then(data => QueryAllPoolResponse.decode(new BinaryReader(data)));
  }
  getPoolsMeta(request: QueryGetPoolsMetaRequest = {}): Promise<QueryGetPoolsMetaResponse> {
    const data = QueryGetPoolsMetaRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Query", "GetPoolsMeta", data);
    return promise.then(data => QueryGetPoolsMetaResponse.decode(new BinaryReader(data)));
  }
  getPoolUid(request: QueryGetPoolUidRequest): Promise<QueryGetPoolUidResponse> {
    const data = QueryGetPoolUidRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Query", "GetPoolUid", data);
    return promise.then(data => QueryGetPoolUidResponse.decode(new BinaryReader(data)));
  }
  listPoolUids(request: QueryAllPoolUidsRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolUidsResponse> {
    const data = QueryAllPoolUidsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Query", "ListPoolUids", data);
    return promise.then(data => QueryAllPoolUidsResponse.decode(new BinaryReader(data)));
  }
  swapIn(request: QuerySwapInRequest): Promise<QuerySwapInResponse> {
    const data = QuerySwapInRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Query", "SwapIn", data);
    return promise.then(data => QuerySwapInResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getPool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
      return queryService.getPool(request);
    },
    listPool(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse> {
      return queryService.listPool(request);
    },
    getPoolsMeta(request?: QueryGetPoolsMetaRequest): Promise<QueryGetPoolsMetaResponse> {
      return queryService.getPoolsMeta(request);
    },
    getPoolUid(request: QueryGetPoolUidRequest): Promise<QueryGetPoolUidResponse> {
      return queryService.getPoolUid(request);
    },
    listPoolUids(request?: QueryAllPoolUidsRequest): Promise<QueryAllPoolUidsResponse> {
      return queryService.listPoolUids(request);
    },
    swapIn(request: QuerySwapInRequest): Promise<QuerySwapInResponse> {
      return queryService.swapIn(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseGetPoolQuery<TData> extends ReactQueryParams<QueryGetPoolResponse, TData> {
  request: QueryGetPoolRequest;
}
export interface UseListPoolQuery<TData> extends ReactQueryParams<QueryAllPoolResponse, TData> {
  request?: QueryAllPoolRequest;
}
export interface UseGetPoolsMetaQuery<TData> extends ReactQueryParams<QueryGetPoolsMetaResponse, TData> {
  request?: QueryGetPoolsMetaRequest;
}
export interface UseGetPoolUidQuery<TData> extends ReactQueryParams<QueryGetPoolUidResponse, TData> {
  request: QueryGetPoolUidRequest;
}
export interface UseListPoolUidsQuery<TData> extends ReactQueryParams<QueryAllPoolUidsResponse, TData> {
  request?: QueryAllPoolUidsRequest;
}
export interface UseSwapInQuery<TData> extends ReactQueryParams<QuerySwapInResponse, TData> {
  request: QuerySwapInRequest;
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
  const useGetPool = <TData = QueryGetPoolResponse,>({
    request,
    options
  }: UseGetPoolQuery<TData>) => {
    return useQuery<QueryGetPoolResponse, Error, TData>(["getPoolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getPool(request);
    }, options);
  };
  const useListPool = <TData = QueryAllPoolResponse,>({
    request,
    options
  }: UseListPoolQuery<TData>) => {
    return useQuery<QueryAllPoolResponse, Error, TData>(["listPoolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.listPool(request);
    }, options);
  };
  const useGetPoolsMeta = <TData = QueryGetPoolsMetaResponse,>({
    request,
    options
  }: UseGetPoolsMetaQuery<TData>) => {
    return useQuery<QueryGetPoolsMetaResponse, Error, TData>(["getPoolsMetaQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getPoolsMeta(request);
    }, options);
  };
  const useGetPoolUid = <TData = QueryGetPoolUidResponse,>({
    request,
    options
  }: UseGetPoolUidQuery<TData>) => {
    return useQuery<QueryGetPoolUidResponse, Error, TData>(["getPoolUidQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.getPoolUid(request);
    }, options);
  };
  const useListPoolUids = <TData = QueryAllPoolUidsResponse,>({
    request,
    options
  }: UseListPoolUidsQuery<TData>) => {
    return useQuery<QueryAllPoolUidsResponse, Error, TData>(["listPoolUidsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.listPoolUids(request);
    }, options);
  };
  const useSwapIn = <TData = QuerySwapInResponse,>({
    request,
    options
  }: UseSwapInQuery<TData>) => {
    return useQuery<QuerySwapInResponse, Error, TData>(["swapInQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.swapIn(request);
    }, options);
  };
  return {
    /** Parameters queries the parameters of the module. */useParams,
    /** Queries a list of Pool items. */useGetPool,
    /** Queries a list of Pool items. */useListPool,
    /** Queries a PoolsMeta by index. */useGetPoolsMeta,
    /** Queries a list of PoolUids items. */useGetPoolUid,
    /** Queries a list of PoolUids items. */useListPoolUids,
    /** Queries a list of SwapIn items. */useSwapIn
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
  class QueryGetPoolStore {
    store = new QueryStore<QueryGetPoolRequest, QueryGetPoolResponse>(queryService?.getPool);
    getPool(request: QueryGetPoolRequest) {
      return this.store.getData(request);
    }
  }
  class QueryListPoolStore {
    store = new QueryStore<QueryAllPoolRequest, QueryAllPoolResponse>(queryService?.listPool);
    listPool(request: QueryAllPoolRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetPoolsMetaStore {
    store = new QueryStore<QueryGetPoolsMetaRequest, QueryGetPoolsMetaResponse>(queryService?.getPoolsMeta);
    getPoolsMeta(request: QueryGetPoolsMetaRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGetPoolUidStore {
    store = new QueryStore<QueryGetPoolUidRequest, QueryGetPoolUidResponse>(queryService?.getPoolUid);
    getPoolUid(request: QueryGetPoolUidRequest) {
      return this.store.getData(request);
    }
  }
  class QueryListPoolUidsStore {
    store = new QueryStore<QueryAllPoolUidsRequest, QueryAllPoolUidsResponse>(queryService?.listPoolUids);
    listPoolUids(request: QueryAllPoolUidsRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySwapInStore {
    store = new QueryStore<QuerySwapInRequest, QuerySwapInResponse>(queryService?.swapIn);
    swapIn(request: QuerySwapInRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Parameters queries the parameters of the module. */QueryParamsStore,
    /** Queries a list of Pool items. */QueryGetPoolStore,
    /** Queries a list of Pool items. */QueryListPoolStore,
    /** Queries a PoolsMeta by index. */QueryGetPoolsMetaStore,
    /** Queries a list of PoolUids items. */QueryGetPoolUidStore,
    /** Queries a list of PoolUids items. */QueryListPoolUidsStore,
    /** Queries a list of SwapIn items. */QuerySwapInStore
  };
};