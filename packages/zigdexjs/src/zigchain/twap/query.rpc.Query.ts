//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryArithmeticTwapRequest, QueryArithmeticTwapResponse, QueryArithmeticTwapToNowRequest, QueryArithmeticTwapToNowResponse, QueryGeometricTwapRequest, QueryGeometricTwapResponse, QueryGeometricTwapToNowRequest, QueryGeometricTwapToNowResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ArithmeticTwap items. */
  arithmeticTwap(request: QueryArithmeticTwapRequest): Promise<QueryArithmeticTwapResponse>;
  /** Queries a list of ArithmeticTwapToNow items. */
  arithmeticTwapToNow(request: QueryArithmeticTwapToNowRequest): Promise<QueryArithmeticTwapToNowResponse>;
  /** Queries a list of GeometricTwap items. */
  geometricTwap(request: QueryGeometricTwapRequest): Promise<QueryGeometricTwapResponse>;
  /** Queries a list of GeometricTwapToNow items. */
  geometricTwapToNow(request: QueryGeometricTwapToNowRequest): Promise<QueryGeometricTwapToNowResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.arithmeticTwap = this.arithmeticTwap.bind(this);
    this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
    this.geometricTwap = this.geometricTwap.bind(this);
    this.geometricTwapToNow = this.geometricTwapToNow.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.twap.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  arithmeticTwap(request: QueryArithmeticTwapRequest): Promise<QueryArithmeticTwapResponse> {
    const data = QueryArithmeticTwapRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.twap.Query", "ArithmeticTwap", data);
    return promise.then(data => QueryArithmeticTwapResponse.decode(new BinaryReader(data)));
  }
  arithmeticTwapToNow(request: QueryArithmeticTwapToNowRequest): Promise<QueryArithmeticTwapToNowResponse> {
    const data = QueryArithmeticTwapToNowRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.twap.Query", "ArithmeticTwapToNow", data);
    return promise.then(data => QueryArithmeticTwapToNowResponse.decode(new BinaryReader(data)));
  }
  geometricTwap(request: QueryGeometricTwapRequest): Promise<QueryGeometricTwapResponse> {
    const data = QueryGeometricTwapRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.twap.Query", "GeometricTwap", data);
    return promise.then(data => QueryGeometricTwapResponse.decode(new BinaryReader(data)));
  }
  geometricTwapToNow(request: QueryGeometricTwapToNowRequest): Promise<QueryGeometricTwapToNowResponse> {
    const data = QueryGeometricTwapToNowRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.twap.Query", "GeometricTwapToNow", data);
    return promise.then(data => QueryGeometricTwapToNowResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    arithmeticTwap(request: QueryArithmeticTwapRequest): Promise<QueryArithmeticTwapResponse> {
      return queryService.arithmeticTwap(request);
    },
    arithmeticTwapToNow(request: QueryArithmeticTwapToNowRequest): Promise<QueryArithmeticTwapToNowResponse> {
      return queryService.arithmeticTwapToNow(request);
    },
    geometricTwap(request: QueryGeometricTwapRequest): Promise<QueryGeometricTwapResponse> {
      return queryService.geometricTwap(request);
    },
    geometricTwapToNow(request: QueryGeometricTwapToNowRequest): Promise<QueryGeometricTwapToNowResponse> {
      return queryService.geometricTwapToNow(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseArithmeticTwapQuery<TData> extends ReactQueryParams<QueryArithmeticTwapResponse, TData> {
  request: QueryArithmeticTwapRequest;
}
export interface UseArithmeticTwapToNowQuery<TData> extends ReactQueryParams<QueryArithmeticTwapToNowResponse, TData> {
  request: QueryArithmeticTwapToNowRequest;
}
export interface UseGeometricTwapQuery<TData> extends ReactQueryParams<QueryGeometricTwapResponse, TData> {
  request: QueryGeometricTwapRequest;
}
export interface UseGeometricTwapToNowQuery<TData> extends ReactQueryParams<QueryGeometricTwapToNowResponse, TData> {
  request: QueryGeometricTwapToNowRequest;
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
  const useArithmeticTwap = <TData = QueryArithmeticTwapResponse,>({
    request,
    options
  }: UseArithmeticTwapQuery<TData>) => {
    return useQuery<QueryArithmeticTwapResponse, Error, TData>(["arithmeticTwapQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.arithmeticTwap(request);
    }, options);
  };
  const useArithmeticTwapToNow = <TData = QueryArithmeticTwapToNowResponse,>({
    request,
    options
  }: UseArithmeticTwapToNowQuery<TData>) => {
    return useQuery<QueryArithmeticTwapToNowResponse, Error, TData>(["arithmeticTwapToNowQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.arithmeticTwapToNow(request);
    }, options);
  };
  const useGeometricTwap = <TData = QueryGeometricTwapResponse,>({
    request,
    options
  }: UseGeometricTwapQuery<TData>) => {
    return useQuery<QueryGeometricTwapResponse, Error, TData>(["geometricTwapQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.geometricTwap(request);
    }, options);
  };
  const useGeometricTwapToNow = <TData = QueryGeometricTwapToNowResponse,>({
    request,
    options
  }: UseGeometricTwapToNowQuery<TData>) => {
    return useQuery<QueryGeometricTwapToNowResponse, Error, TData>(["geometricTwapToNowQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.geometricTwapToNow(request);
    }, options);
  };
  return {
    /** Parameters queries the parameters of the module. */useParams,
    /** Queries a list of ArithmeticTwap items. */useArithmeticTwap,
    /** Queries a list of ArithmeticTwapToNow items. */useArithmeticTwapToNow,
    /** Queries a list of GeometricTwap items. */useGeometricTwap,
    /** Queries a list of GeometricTwapToNow items. */useGeometricTwapToNow
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
  class QueryArithmeticTwapStore {
    store = new QueryStore<QueryArithmeticTwapRequest, QueryArithmeticTwapResponse>(queryService?.arithmeticTwap);
    arithmeticTwap(request: QueryArithmeticTwapRequest) {
      return this.store.getData(request);
    }
  }
  class QueryArithmeticTwapToNowStore {
    store = new QueryStore<QueryArithmeticTwapToNowRequest, QueryArithmeticTwapToNowResponse>(queryService?.arithmeticTwapToNow);
    arithmeticTwapToNow(request: QueryArithmeticTwapToNowRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGeometricTwapStore {
    store = new QueryStore<QueryGeometricTwapRequest, QueryGeometricTwapResponse>(queryService?.geometricTwap);
    geometricTwap(request: QueryGeometricTwapRequest) {
      return this.store.getData(request);
    }
  }
  class QueryGeometricTwapToNowStore {
    store = new QueryStore<QueryGeometricTwapToNowRequest, QueryGeometricTwapToNowResponse>(queryService?.geometricTwapToNow);
    geometricTwapToNow(request: QueryGeometricTwapToNowRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Parameters queries the parameters of the module. */QueryParamsStore,
    /** Queries a list of ArithmeticTwap items. */QueryArithmeticTwapStore,
    /** Queries a list of ArithmeticTwapToNow items. */QueryArithmeticTwapToNowStore,
    /** Queries a list of GeometricTwap items. */QueryGeometricTwapStore,
    /** Queries a list of GeometricTwapToNow items. */QueryGeometricTwapToNowStore
  };
};