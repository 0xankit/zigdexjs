//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { PoolsMeta, PoolsMetaAmino, PoolsMetaSDKType } from "./pools_meta";
import { PoolUids, PoolUidsAmino, PoolUidsSDKType } from "./pool_uids";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/zigchain.dex.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/zigchain.dex.QueryParamsRequest";
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
  typeUrl: "/zigchain.dex.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/zigchain.dex.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryGetPoolRequest gets a specific pool by its ID. */
export interface QueryGetPoolRequest {
  poolId: string;
}
export interface QueryGetPoolRequestProtoMsg {
  typeUrl: "/zigchain.dex.QueryGetPoolRequest";
  value: Uint8Array;
}
/** QueryGetPoolRequest gets a specific pool by its ID. */
export interface QueryGetPoolRequestAmino {
  poolId?: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/zigchain.dex.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
/** QueryGetPoolRequest gets a specific pool by its ID. */
export interface QueryGetPoolRequestSDKType {
  poolId: string;
}
/** QueryGetPoolResponse is the response type for the Query/GetPool RPC method. */
export interface QueryGetPoolResponse {
  pool: Pool;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/zigchain.dex.QueryGetPoolResponse";
  value: Uint8Array;
}
/** QueryGetPoolResponse is the response type for the Query/GetPool RPC method. */
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/zigchain.dex.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
/** QueryGetPoolResponse is the response type for the Query/GetPool RPC method. */
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
}
/** QueryAllPoolRequest is the request type for the Query/AllPool RPC method. */
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/zigchain.dex.QueryAllPoolRequest";
  value: Uint8Array;
}
/** QueryAllPoolRequest is the request type for the Query/AllPool RPC method. */
export interface QueryAllPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/zigchain.dex.QueryAllPoolRequest";
  value: QueryAllPoolRequestAmino;
}
/** QueryAllPoolRequest is the request type for the Query/AllPool RPC method. */
export interface QueryAllPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryAllPoolResponse is the response type for the Query/AllPool RPC method. */
export interface QueryAllPoolResponse {
  pool: Pool[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
  typeUrl: "/zigchain.dex.QueryAllPoolResponse";
  value: Uint8Array;
}
/** QueryAllPoolResponse is the response type for the Query/AllPool RPC method. */
export interface QueryAllPoolResponseAmino {
  pool?: PoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/zigchain.dex.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
/** QueryAllPoolResponse is the response type for the Query/AllPool RPC method. */
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetPoolsMetaRequest {}
export interface QueryGetPoolsMetaRequestProtoMsg {
  typeUrl: "/zigchain.dex.QueryGetPoolsMetaRequest";
  value: Uint8Array;
}
export interface QueryGetPoolsMetaRequestAmino {}
export interface QueryGetPoolsMetaRequestAminoMsg {
  type: "/zigchain.dex.QueryGetPoolsMetaRequest";
  value: QueryGetPoolsMetaRequestAmino;
}
export interface QueryGetPoolsMetaRequestSDKType {}
export interface QueryGetPoolsMetaResponse {
  poolsMeta: PoolsMeta;
}
export interface QueryGetPoolsMetaResponseProtoMsg {
  typeUrl: "/zigchain.dex.QueryGetPoolsMetaResponse";
  value: Uint8Array;
}
export interface QueryGetPoolsMetaResponseAmino {
  PoolsMeta?: PoolsMetaAmino;
}
export interface QueryGetPoolsMetaResponseAminoMsg {
  type: "/zigchain.dex.QueryGetPoolsMetaResponse";
  value: QueryGetPoolsMetaResponseAmino;
}
export interface QueryGetPoolsMetaResponseSDKType {
  PoolsMeta: PoolsMetaSDKType;
}
/** QueryGetPoolUidRequest gets a specific pool based on base and quote. */
export interface QueryGetPoolUidRequest {
  base: string;
  quote: string;
}
export interface QueryGetPoolUidRequestProtoMsg {
  typeUrl: "/zigchain.dex.QueryGetPoolUidRequest";
  value: Uint8Array;
}
/** QueryGetPoolUidRequest gets a specific pool based on base and quote. */
export interface QueryGetPoolUidRequestAmino {
  base?: string;
  quote?: string;
}
export interface QueryGetPoolUidRequestAminoMsg {
  type: "/zigchain.dex.QueryGetPoolUidRequest";
  value: QueryGetPoolUidRequestAmino;
}
/** QueryGetPoolUidRequest gets a specific pool based on base and quote. */
export interface QueryGetPoolUidRequestSDKType {
  base: string;
  quote: string;
}
/** QueryGetPoolUidResponse is the response type for the Query/GetPool RPC method. */
export interface QueryGetPoolUidResponse {
  poolUids: PoolUids;
}
export interface QueryGetPoolUidResponseProtoMsg {
  typeUrl: "/zigchain.dex.QueryGetPoolUidResponse";
  value: Uint8Array;
}
/** QueryGetPoolUidResponse is the response type for the Query/GetPool RPC method. */
export interface QueryGetPoolUidResponseAmino {
  poolUids?: PoolUidsAmino;
}
export interface QueryGetPoolUidResponseAminoMsg {
  type: "/zigchain.dex.QueryGetPoolUidResponse";
  value: QueryGetPoolUidResponseAmino;
}
/** QueryGetPoolUidResponse is the response type for the Query/GetPool RPC method. */
export interface QueryGetPoolUidResponseSDKType {
  poolUids: PoolUidsSDKType;
}
/** QueryAllPoolUidsRequest is the request type for the Query/AllPool RPC method. */
export interface QueryAllPoolUidsRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolUidsRequestProtoMsg {
  typeUrl: "/zigchain.dex.QueryAllPoolUidsRequest";
  value: Uint8Array;
}
/** QueryAllPoolUidsRequest is the request type for the Query/AllPool RPC method. */
export interface QueryAllPoolUidsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolUidsRequestAminoMsg {
  type: "/zigchain.dex.QueryAllPoolUidsRequest";
  value: QueryAllPoolUidsRequestAmino;
}
/** QueryAllPoolUidsRequest is the request type for the Query/AllPool RPC method. */
export interface QueryAllPoolUidsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryAllPoolUidsResponse is the response type for the Query/AllPool RPC method. */
export interface QueryAllPoolUidsResponse {
  poolUids: PoolUids[];
  pagination?: PageResponse;
}
export interface QueryAllPoolUidsResponseProtoMsg {
  typeUrl: "/zigchain.dex.QueryAllPoolUidsResponse";
  value: Uint8Array;
}
/** QueryAllPoolUidsResponse is the response type for the Query/AllPool RPC method. */
export interface QueryAllPoolUidsResponseAmino {
  poolUids?: PoolUidsAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolUidsResponseAminoMsg {
  type: "/zigchain.dex.QueryAllPoolUidsResponse";
  value: QueryAllPoolUidsResponseAmino;
}
/** QueryAllPoolUidsResponse is the response type for the Query/AllPool RPC method. */
export interface QueryAllPoolUidsResponseSDKType {
  poolUids: PoolUidsSDKType[];
  pagination?: PageResponseSDKType;
}
/** QuerySwapInRequest gets a specific pool by its ID and incoming token. */
export interface QuerySwapInRequest {
  poolId: string;
  coinIn: string;
}
export interface QuerySwapInRequestProtoMsg {
  typeUrl: "/zigchain.dex.QuerySwapInRequest";
  value: Uint8Array;
}
/** QuerySwapInRequest gets a specific pool by its ID and incoming token. */
export interface QuerySwapInRequestAmino {
  poolId?: string;
  coinIn?: string;
}
export interface QuerySwapInRequestAminoMsg {
  type: "/zigchain.dex.QuerySwapInRequest";
  value: QuerySwapInRequestAmino;
}
/** QuerySwapInRequest gets a specific pool by its ID and incoming token. */
export interface QuerySwapInRequestSDKType {
  poolId: string;
  coinIn: string;
}
/** QuerySwapInResponse returns amount of tokens given back given pool id and incoming. */
export interface QuerySwapInResponse {
  out: Coin;
  fee: Coin;
}
export interface QuerySwapInResponseProtoMsg {
  typeUrl: "/zigchain.dex.QuerySwapInResponse";
  value: Uint8Array;
}
/** QuerySwapInResponse returns amount of tokens given back given pool id and incoming. */
export interface QuerySwapInResponseAmino {
  out?: CoinAmino;
  fee?: CoinAmino;
}
export interface QuerySwapInResponseAminoMsg {
  type: "/zigchain.dex.QuerySwapInResponse";
  value: QuerySwapInResponseAmino;
}
/** QuerySwapInResponse returns amount of tokens given back given pool id and incoming. */
export interface QuerySwapInResponseSDKType {
  out: CoinSDKType;
  fee: CoinSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/zigchain.dex.QueryParamsRequest",
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
      typeUrl: "/zigchain.dex.QueryParamsRequest",
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
  typeUrl: "/zigchain.dex.QueryParamsResponse",
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
      typeUrl: "/zigchain.dex.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    poolId: ""
  };
}
export const QueryGetPoolRequest = {
  typeUrl: "/zigchain.dex.QueryGetPoolRequest",
  encode(message: QueryGetPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.poolId = object.poolId ?? "";
    return message;
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    }
    return message;
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.poolId = message.poolId === "" ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolRequestProtoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolRequest): Uint8Array {
    return QueryGetPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QueryGetPoolRequest",
      value: QueryGetPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  typeUrl: "/zigchain.dex.QueryGetPoolResponse",
  encode(message: QueryGetPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolResponseProtoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolResponse): Uint8Array {
    return QueryGetPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QueryGetPoolResponse",
      value: QueryGetPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  typeUrl: "/zigchain.dex.QueryAllPoolRequest",
  encode(message: QueryAllPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolRequest): QueryAllPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolRequestProtoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolRequest): Uint8Array {
    return QueryAllPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QueryAllPoolRequest",
      value: QueryAllPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  typeUrl: "/zigchain.dex.QueryAllPoolResponse",
  encode(message: QueryAllPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool = message.pool;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolResponseProtoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolResponse): Uint8Array {
    return QueryAllPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolsMetaRequest(): QueryGetPoolsMetaRequest {
  return {};
}
export const QueryGetPoolsMetaRequest = {
  typeUrl: "/zigchain.dex.QueryGetPoolsMetaRequest",
  encode(_: QueryGetPoolsMetaRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolsMetaRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolsMetaRequest();
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
  fromPartial(_: Partial<QueryGetPoolsMetaRequest>): QueryGetPoolsMetaRequest {
    const message = createBaseQueryGetPoolsMetaRequest();
    return message;
  },
  fromAmino(_: QueryGetPoolsMetaRequestAmino): QueryGetPoolsMetaRequest {
    const message = createBaseQueryGetPoolsMetaRequest();
    return message;
  },
  toAmino(_: QueryGetPoolsMetaRequest): QueryGetPoolsMetaRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolsMetaRequestAminoMsg): QueryGetPoolsMetaRequest {
    return QueryGetPoolsMetaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolsMetaRequestProtoMsg): QueryGetPoolsMetaRequest {
    return QueryGetPoolsMetaRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolsMetaRequest): Uint8Array {
    return QueryGetPoolsMetaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolsMetaRequest): QueryGetPoolsMetaRequestProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QueryGetPoolsMetaRequest",
      value: QueryGetPoolsMetaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolsMetaResponse(): QueryGetPoolsMetaResponse {
  return {
    poolsMeta: PoolsMeta.fromPartial({})
  };
}
export const QueryGetPoolsMetaResponse = {
  typeUrl: "/zigchain.dex.QueryGetPoolsMetaResponse",
  encode(message: QueryGetPoolsMetaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolsMeta !== undefined) {
      PoolsMeta.encode(message.poolsMeta, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolsMetaResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolsMetaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolsMeta = PoolsMeta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolsMetaResponse>): QueryGetPoolsMetaResponse {
    const message = createBaseQueryGetPoolsMetaResponse();
    message.poolsMeta = object.poolsMeta !== undefined && object.poolsMeta !== null ? PoolsMeta.fromPartial(object.poolsMeta) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolsMetaResponseAmino): QueryGetPoolsMetaResponse {
    const message = createBaseQueryGetPoolsMetaResponse();
    if (object.PoolsMeta !== undefined && object.PoolsMeta !== null) {
      message.poolsMeta = PoolsMeta.fromAmino(object.PoolsMeta);
    }
    return message;
  },
  toAmino(message: QueryGetPoolsMetaResponse): QueryGetPoolsMetaResponseAmino {
    const obj: any = {};
    obj.PoolsMeta = message.poolsMeta ? PoolsMeta.toAmino(message.poolsMeta) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolsMetaResponseAminoMsg): QueryGetPoolsMetaResponse {
    return QueryGetPoolsMetaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolsMetaResponseProtoMsg): QueryGetPoolsMetaResponse {
    return QueryGetPoolsMetaResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolsMetaResponse): Uint8Array {
    return QueryGetPoolsMetaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolsMetaResponse): QueryGetPoolsMetaResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QueryGetPoolsMetaResponse",
      value: QueryGetPoolsMetaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolUidRequest(): QueryGetPoolUidRequest {
  return {
    base: "",
    quote: ""
  };
}
export const QueryGetPoolUidRequest = {
  typeUrl: "/zigchain.dex.QueryGetPoolUidRequest",
  encode(message: QueryGetPoolUidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolUidRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolUidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;
        case 2:
          message.quote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolUidRequest>): QueryGetPoolUidRequest {
    const message = createBaseQueryGetPoolUidRequest();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  },
  fromAmino(object: QueryGetPoolUidRequestAmino): QueryGetPoolUidRequest {
    const message = createBaseQueryGetPoolUidRequest();
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    return message;
  },
  toAmino(message: QueryGetPoolUidRequest): QueryGetPoolUidRequestAmino {
    const obj: any = {};
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolUidRequestAminoMsg): QueryGetPoolUidRequest {
    return QueryGetPoolUidRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolUidRequestProtoMsg): QueryGetPoolUidRequest {
    return QueryGetPoolUidRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolUidRequest): Uint8Array {
    return QueryGetPoolUidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolUidRequest): QueryGetPoolUidRequestProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QueryGetPoolUidRequest",
      value: QueryGetPoolUidRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolUidResponse(): QueryGetPoolUidResponse {
  return {
    poolUids: PoolUids.fromPartial({})
  };
}
export const QueryGetPoolUidResponse = {
  typeUrl: "/zigchain.dex.QueryGetPoolUidResponse",
  encode(message: QueryGetPoolUidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolUids !== undefined) {
      PoolUids.encode(message.poolUids, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolUidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolUidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolUids = PoolUids.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolUidResponse>): QueryGetPoolUidResponse {
    const message = createBaseQueryGetPoolUidResponse();
    message.poolUids = object.poolUids !== undefined && object.poolUids !== null ? PoolUids.fromPartial(object.poolUids) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolUidResponseAmino): QueryGetPoolUidResponse {
    const message = createBaseQueryGetPoolUidResponse();
    if (object.poolUids !== undefined && object.poolUids !== null) {
      message.poolUids = PoolUids.fromAmino(object.poolUids);
    }
    return message;
  },
  toAmino(message: QueryGetPoolUidResponse): QueryGetPoolUidResponseAmino {
    const obj: any = {};
    obj.poolUids = message.poolUids ? PoolUids.toAmino(message.poolUids) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolUidResponseAminoMsg): QueryGetPoolUidResponse {
    return QueryGetPoolUidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolUidResponseProtoMsg): QueryGetPoolUidResponse {
    return QueryGetPoolUidResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolUidResponse): Uint8Array {
    return QueryGetPoolUidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolUidResponse): QueryGetPoolUidResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QueryGetPoolUidResponse",
      value: QueryGetPoolUidResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolUidsRequest(): QueryAllPoolUidsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolUidsRequest = {
  typeUrl: "/zigchain.dex.QueryAllPoolUidsRequest",
  encode(message: QueryAllPoolUidsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolUidsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolUidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPoolUidsRequest>): QueryAllPoolUidsRequest {
    const message = createBaseQueryAllPoolUidsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolUidsRequestAmino): QueryAllPoolUidsRequest {
    const message = createBaseQueryAllPoolUidsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolUidsRequest): QueryAllPoolUidsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolUidsRequestAminoMsg): QueryAllPoolUidsRequest {
    return QueryAllPoolUidsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolUidsRequestProtoMsg): QueryAllPoolUidsRequest {
    return QueryAllPoolUidsRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolUidsRequest): Uint8Array {
    return QueryAllPoolUidsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolUidsRequest): QueryAllPoolUidsRequestProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QueryAllPoolUidsRequest",
      value: QueryAllPoolUidsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolUidsResponse(): QueryAllPoolUidsResponse {
  return {
    poolUids: [],
    pagination: undefined
  };
}
export const QueryAllPoolUidsResponse = {
  typeUrl: "/zigchain.dex.QueryAllPoolUidsResponse",
  encode(message: QueryAllPoolUidsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolUids) {
      PoolUids.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolUidsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolUidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolUids.push(PoolUids.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllPoolUidsResponse>): QueryAllPoolUidsResponse {
    const message = createBaseQueryAllPoolUidsResponse();
    message.poolUids = object.poolUids?.map(e => PoolUids.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolUidsResponseAmino): QueryAllPoolUidsResponse {
    const message = createBaseQueryAllPoolUidsResponse();
    message.poolUids = object.poolUids?.map(e => PoolUids.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolUidsResponse): QueryAllPoolUidsResponseAmino {
    const obj: any = {};
    if (message.poolUids) {
      obj.poolUids = message.poolUids.map(e => e ? PoolUids.toAmino(e) : undefined);
    } else {
      obj.poolUids = message.poolUids;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolUidsResponseAminoMsg): QueryAllPoolUidsResponse {
    return QueryAllPoolUidsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolUidsResponseProtoMsg): QueryAllPoolUidsResponse {
    return QueryAllPoolUidsResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolUidsResponse): Uint8Array {
    return QueryAllPoolUidsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolUidsResponse): QueryAllPoolUidsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QueryAllPoolUidsResponse",
      value: QueryAllPoolUidsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySwapInRequest(): QuerySwapInRequest {
  return {
    poolId: "",
    coinIn: ""
  };
}
export const QuerySwapInRequest = {
  typeUrl: "/zigchain.dex.QuerySwapInRequest",
  encode(message: QuerySwapInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.coinIn !== "") {
      writer.uint32(18).string(message.coinIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.coinIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapInRequest>): QuerySwapInRequest {
    const message = createBaseQuerySwapInRequest();
    message.poolId = object.poolId ?? "";
    message.coinIn = object.coinIn ?? "";
    return message;
  },
  fromAmino(object: QuerySwapInRequestAmino): QuerySwapInRequest {
    const message = createBaseQuerySwapInRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    }
    if (object.coinIn !== undefined && object.coinIn !== null) {
      message.coinIn = object.coinIn;
    }
    return message;
  },
  toAmino(message: QuerySwapInRequest): QuerySwapInRequestAmino {
    const obj: any = {};
    obj.poolId = message.poolId === "" ? undefined : message.poolId;
    obj.coinIn = message.coinIn === "" ? undefined : message.coinIn;
    return obj;
  },
  fromAminoMsg(object: QuerySwapInRequestAminoMsg): QuerySwapInRequest {
    return QuerySwapInRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapInRequestProtoMsg): QuerySwapInRequest {
    return QuerySwapInRequest.decode(message.value);
  },
  toProto(message: QuerySwapInRequest): Uint8Array {
    return QuerySwapInRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapInRequest): QuerySwapInRequestProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QuerySwapInRequest",
      value: QuerySwapInRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySwapInResponse(): QuerySwapInResponse {
  return {
    out: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const QuerySwapInResponse = {
  typeUrl: "/zigchain.dex.QuerySwapInResponse",
  encode(message: QuerySwapInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.out !== undefined) {
      Coin.encode(message.out, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.out = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapInResponse>): QuerySwapInResponse {
    const message = createBaseQuerySwapInResponse();
    message.out = object.out !== undefined && object.out !== null ? Coin.fromPartial(object.out) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: QuerySwapInResponseAmino): QuerySwapInResponse {
    const message = createBaseQuerySwapInResponse();
    if (object.out !== undefined && object.out !== null) {
      message.out = Coin.fromAmino(object.out);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: QuerySwapInResponse): QuerySwapInResponseAmino {
    const obj: any = {};
    obj.out = message.out ? Coin.toAmino(message.out) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySwapInResponseAminoMsg): QuerySwapInResponse {
    return QuerySwapInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapInResponseProtoMsg): QuerySwapInResponse {
    return QuerySwapInResponse.decode(message.value);
  },
  toProto(message: QuerySwapInResponse): Uint8Array {
    return QuerySwapInResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapInResponse): QuerySwapInResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.QuerySwapInResponse",
      value: QuerySwapInResponse.encode(message).finish()
    };
  }
};