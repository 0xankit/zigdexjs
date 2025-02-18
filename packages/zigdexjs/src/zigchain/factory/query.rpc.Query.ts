//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryGetDenomRequest, QueryDenomResponse, QueryAllDenomRequest, QueryAllDenomResponse, QueryDenomByAdminRequest, QueryDenomByAdminResponse, QueryGetDenomAuthRequest, QueryDenomAuthResponse, QueryAllDenomAuthRequest, QueryAllDenomAuthResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** QueryParams Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** QueryDenom Queries a list of Denom items. */
  denom(request: QueryGetDenomRequest): Promise<QueryDenomResponse>;
  /** Queries a list of Denom items. */
  denomAll(request?: QueryAllDenomRequest): Promise<QueryAllDenomResponse>;
  /** QueryDenomsByAdmin Queries a list of Denom items. */
  denomsByAdmin(request: QueryDenomByAdminRequest): Promise<QueryDenomByAdminResponse>;
  /** QueryGetDenomAuth a denom DenomAuth items. */
  denomAuth(request: QueryGetDenomAuthRequest): Promise<QueryDenomAuthResponse>;
  /**
   * QueryListDenomAuth queries a list of DenomAuth items.
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  listDenomAuth(request?: QueryAllDenomAuthRequest): Promise<QueryAllDenomAuthResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.denom = this.denom.bind(this);
    this.denomAll = this.denomAll.bind(this);
    this.denomsByAdmin = this.denomsByAdmin.bind(this);
    this.denomAuth = this.denomAuth.bind(this);
    this.listDenomAuth = this.listDenomAuth.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  denom(request: QueryGetDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryGetDenomRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Query", "Denom", data);
    return promise.then(data => QueryDenomResponse.decode(new BinaryReader(data)));
  }
  denomAll(request: QueryAllDenomRequest = {
    pagination: undefined
  }): Promise<QueryAllDenomResponse> {
    const data = QueryAllDenomRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Query", "DenomAll", data);
    return promise.then(data => QueryAllDenomResponse.decode(new BinaryReader(data)));
  }
  denomsByAdmin(request: QueryDenomByAdminRequest): Promise<QueryDenomByAdminResponse> {
    const data = QueryDenomByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Query", "DenomsByAdmin", data);
    return promise.then(data => QueryDenomByAdminResponse.decode(new BinaryReader(data)));
  }
  denomAuth(request: QueryGetDenomAuthRequest): Promise<QueryDenomAuthResponse> {
    const data = QueryGetDenomAuthRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Query", "DenomAuth", data);
    return promise.then(data => QueryDenomAuthResponse.decode(new BinaryReader(data)));
  }
  listDenomAuth(request: QueryAllDenomAuthRequest = {
    pagination: undefined
  }): Promise<QueryAllDenomAuthResponse> {
    const data = QueryAllDenomAuthRequest.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Query", "ListDenomAuth", data);
    return promise.then(data => QueryAllDenomAuthResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    denom(request: QueryGetDenomRequest): Promise<QueryDenomResponse> {
      return queryService.denom(request);
    },
    denomAll(request?: QueryAllDenomRequest): Promise<QueryAllDenomResponse> {
      return queryService.denomAll(request);
    },
    denomsByAdmin(request: QueryDenomByAdminRequest): Promise<QueryDenomByAdminResponse> {
      return queryService.denomsByAdmin(request);
    },
    denomAuth(request: QueryGetDenomAuthRequest): Promise<QueryDenomAuthResponse> {
      return queryService.denomAuth(request);
    },
    listDenomAuth(request?: QueryAllDenomAuthRequest): Promise<QueryAllDenomAuthResponse> {
      return queryService.listDenomAuth(request);
    }
  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseDenomQuery<TData> extends ReactQueryParams<QueryDenomResponse, TData> {
  request: QueryGetDenomRequest;
}
export interface UseDenomAllQuery<TData> extends ReactQueryParams<QueryAllDenomResponse, TData> {
  request?: QueryAllDenomRequest;
}
export interface UseDenomsByAdminQuery<TData> extends ReactQueryParams<QueryDenomByAdminResponse, TData> {
  request: QueryDenomByAdminRequest;
}
export interface UseDenomAuthQuery<TData> extends ReactQueryParams<QueryDenomAuthResponse, TData> {
  request: QueryGetDenomAuthRequest;
}
export interface UseListDenomAuthQuery<TData> extends ReactQueryParams<QueryAllDenomAuthResponse, TData> {
  request?: QueryAllDenomAuthRequest;
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
  const useDenom = <TData = QueryDenomResponse,>({
    request,
    options
  }: UseDenomQuery<TData>) => {
    return useQuery<QueryDenomResponse, Error, TData>(["denomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denom(request);
    }, options);
  };
  const useDenomAll = <TData = QueryAllDenomResponse,>({
    request,
    options
  }: UseDenomAllQuery<TData>) => {
    return useQuery<QueryAllDenomResponse, Error, TData>(["denomAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomAll(request);
    }, options);
  };
  const useDenomsByAdmin = <TData = QueryDenomByAdminResponse,>({
    request,
    options
  }: UseDenomsByAdminQuery<TData>) => {
    return useQuery<QueryDenomByAdminResponse, Error, TData>(["denomsByAdminQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomsByAdmin(request);
    }, options);
  };
  const useDenomAuth = <TData = QueryDenomAuthResponse,>({
    request,
    options
  }: UseDenomAuthQuery<TData>) => {
    return useQuery<QueryDenomAuthResponse, Error, TData>(["denomAuthQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomAuth(request);
    }, options);
  };
  const useListDenomAuth = <TData = QueryAllDenomAuthResponse,>({
    request,
    options
  }: UseListDenomAuthQuery<TData>) => {
    return useQuery<QueryAllDenomAuthResponse, Error, TData>(["listDenomAuthQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.listDenomAuth(request);
    }, options);
  };
  return {
    /** QueryParams Parameters queries the parameters of the module. */useParams,
    /** QueryDenom Queries a list of Denom items. */useDenom,
    /** Queries a list of Denom items. */useDenomAll,
    /** QueryDenomsByAdmin Queries a list of Denom items. */useDenomsByAdmin,
    /** QueryGetDenomAuth a denom DenomAuth items. */useDenomAuth,
    /**
     * QueryListDenomAuth queries a list of DenomAuth items.
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    useListDenomAuth
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
  class QueryDenomStore {
    store = new QueryStore<QueryGetDenomRequest, QueryDenomResponse>(queryService?.denom);
    denom(request: QueryGetDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDenomAllStore {
    store = new QueryStore<QueryAllDenomRequest, QueryAllDenomResponse>(queryService?.denomAll);
    denomAll(request: QueryAllDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDenomsByAdminStore {
    store = new QueryStore<QueryDenomByAdminRequest, QueryDenomByAdminResponse>(queryService?.denomsByAdmin);
    denomsByAdmin(request: QueryDenomByAdminRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDenomAuthStore {
    store = new QueryStore<QueryGetDenomAuthRequest, QueryDenomAuthResponse>(queryService?.denomAuth);
    denomAuth(request: QueryGetDenomAuthRequest) {
      return this.store.getData(request);
    }
  }
  class QueryListDenomAuthStore {
    store = new QueryStore<QueryAllDenomAuthRequest, QueryAllDenomAuthResponse>(queryService?.listDenomAuth);
    listDenomAuth(request: QueryAllDenomAuthRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** QueryParams Parameters queries the parameters of the module. */QueryParamsStore,
    /** QueryDenom Queries a list of Denom items. */QueryDenomStore,
    /** Queries a list of Denom items. */QueryDenomAllStore,
    /** QueryDenomsByAdmin Queries a list of Denom items. */QueryDenomsByAdminStore,
    /** QueryGetDenomAuth a denom DenomAuth items. */QueryDenomAuthStore,
    /**
     * QueryListDenomAuth queries a list of DenomAuth items.
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     */
    QueryListDenomAuthStore
  };
};