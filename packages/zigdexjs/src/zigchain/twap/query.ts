//@ts-nocheck
import { Timestamp } from "../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/zigchain.twap.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/zigchain.twap.QueryParamsRequest";
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
  typeUrl: "/zigchain.twap.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/zigchain.twap.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryArithmeticTwapRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date;
  endTime?: Date;
}
export interface QueryArithmeticTwapRequestProtoMsg {
  typeUrl: "/zigchain.twap.QueryArithmeticTwapRequest";
  value: Uint8Array;
}
export interface QueryArithmeticTwapRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
  end_time?: string;
}
export interface QueryArithmeticTwapRequestAminoMsg {
  type: "/zigchain.twap.QueryArithmeticTwapRequest";
  value: QueryArithmeticTwapRequestAmino;
}
export interface QueryArithmeticTwapRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
  end_time?: Date;
}
export interface QueryArithmeticTwapResponse {
  arithmeticTwap: string;
}
export interface QueryArithmeticTwapResponseProtoMsg {
  typeUrl: "/zigchain.twap.QueryArithmeticTwapResponse";
  value: Uint8Array;
}
export interface QueryArithmeticTwapResponseAmino {
  arithmetic_twap?: string;
}
export interface QueryArithmeticTwapResponseAminoMsg {
  type: "/zigchain.twap.QueryArithmeticTwapResponse";
  value: QueryArithmeticTwapResponseAmino;
}
export interface QueryArithmeticTwapResponseSDKType {
  arithmetic_twap: string;
}
export interface QueryArithmeticTwapToNowRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date;
}
export interface QueryArithmeticTwapToNowRequestProtoMsg {
  typeUrl: "/zigchain.twap.QueryArithmeticTwapToNowRequest";
  value: Uint8Array;
}
export interface QueryArithmeticTwapToNowRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
}
export interface QueryArithmeticTwapToNowRequestAminoMsg {
  type: "/zigchain.twap.QueryArithmeticTwapToNowRequest";
  value: QueryArithmeticTwapToNowRequestAmino;
}
export interface QueryArithmeticTwapToNowRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
}
export interface QueryArithmeticTwapToNowResponse {
  arithmeticTwap: string;
}
export interface QueryArithmeticTwapToNowResponseProtoMsg {
  typeUrl: "/zigchain.twap.QueryArithmeticTwapToNowResponse";
  value: Uint8Array;
}
export interface QueryArithmeticTwapToNowResponseAmino {
  arithmetic_twap?: string;
}
export interface QueryArithmeticTwapToNowResponseAminoMsg {
  type: "/zigchain.twap.QueryArithmeticTwapToNowResponse";
  value: QueryArithmeticTwapToNowResponseAmino;
}
export interface QueryArithmeticTwapToNowResponseSDKType {
  arithmetic_twap: string;
}
export interface QueryGeometricTwapRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date;
  endTime?: Date;
}
export interface QueryGeometricTwapRequestProtoMsg {
  typeUrl: "/zigchain.twap.QueryGeometricTwapRequest";
  value: Uint8Array;
}
export interface QueryGeometricTwapRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
  end_time?: string;
}
export interface QueryGeometricTwapRequestAminoMsg {
  type: "/zigchain.twap.QueryGeometricTwapRequest";
  value: QueryGeometricTwapRequestAmino;
}
export interface QueryGeometricTwapRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
  end_time?: Date;
}
export interface QueryGeometricTwapResponse {
  geometricTwap: string;
}
export interface QueryGeometricTwapResponseProtoMsg {
  typeUrl: "/zigchain.twap.QueryGeometricTwapResponse";
  value: Uint8Array;
}
export interface QueryGeometricTwapResponseAmino {
  geometric_twap?: string;
}
export interface QueryGeometricTwapResponseAminoMsg {
  type: "/zigchain.twap.QueryGeometricTwapResponse";
  value: QueryGeometricTwapResponseAmino;
}
export interface QueryGeometricTwapResponseSDKType {
  geometric_twap: string;
}
export interface QueryGeometricTwapToNowRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date;
}
export interface QueryGeometricTwapToNowRequestProtoMsg {
  typeUrl: "/zigchain.twap.QueryGeometricTwapToNowRequest";
  value: Uint8Array;
}
export interface QueryGeometricTwapToNowRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
}
export interface QueryGeometricTwapToNowRequestAminoMsg {
  type: "/zigchain.twap.QueryGeometricTwapToNowRequest";
  value: QueryGeometricTwapToNowRequestAmino;
}
export interface QueryGeometricTwapToNowRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
}
export interface QueryGeometricTwapToNowResponse {
  geometricTwap: string;
}
export interface QueryGeometricTwapToNowResponseProtoMsg {
  typeUrl: "/zigchain.twap.QueryGeometricTwapToNowResponse";
  value: Uint8Array;
}
export interface QueryGeometricTwapToNowResponseAmino {
  geometric_twap?: string;
}
export interface QueryGeometricTwapToNowResponseAminoMsg {
  type: "/zigchain.twap.QueryGeometricTwapToNowResponse";
  value: QueryGeometricTwapToNowResponseAmino;
}
export interface QueryGeometricTwapToNowResponseSDKType {
  geometric_twap: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/zigchain.twap.QueryParamsRequest",
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
      typeUrl: "/zigchain.twap.QueryParamsRequest",
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
  typeUrl: "/zigchain.twap.QueryParamsResponse",
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
      typeUrl: "/zigchain.twap.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryArithmeticTwapRequest(): QueryArithmeticTwapRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: new Date(),
    endTime: undefined
  };
}
export const QueryArithmeticTwapRequest = {
  typeUrl: "/zigchain.twap.QueryArithmeticTwapRequest",
  encode(message: QueryArithmeticTwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArithmeticTwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArithmeticTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryArithmeticTwapRequest>): QueryArithmeticTwapRequest {
    const message = createBaseQueryArithmeticTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
  fromAmino(object: QueryArithmeticTwapRequestAmino): QueryArithmeticTwapRequest {
    const message = createBaseQueryArithmeticTwapRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    return message;
  },
  toAmino(message: QueryArithmeticTwapRequest): QueryArithmeticTwapRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset = message.baseAsset === "" ? undefined : message.baseAsset;
    obj.quote_asset = message.quoteAsset === "" ? undefined : message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryArithmeticTwapRequestAminoMsg): QueryArithmeticTwapRequest {
    return QueryArithmeticTwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryArithmeticTwapRequestProtoMsg): QueryArithmeticTwapRequest {
    return QueryArithmeticTwapRequest.decode(message.value);
  },
  toProto(message: QueryArithmeticTwapRequest): Uint8Array {
    return QueryArithmeticTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryArithmeticTwapRequest): QueryArithmeticTwapRequestProtoMsg {
    return {
      typeUrl: "/zigchain.twap.QueryArithmeticTwapRequest",
      value: QueryArithmeticTwapRequest.encode(message).finish()
    };
  }
};
function createBaseQueryArithmeticTwapResponse(): QueryArithmeticTwapResponse {
  return {
    arithmeticTwap: ""
  };
}
export const QueryArithmeticTwapResponse = {
  typeUrl: "/zigchain.twap.QueryArithmeticTwapResponse",
  encode(message: QueryArithmeticTwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArithmeticTwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArithmeticTwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryArithmeticTwapResponse>): QueryArithmeticTwapResponse {
    const message = createBaseQueryArithmeticTwapResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
  fromAmino(object: QueryArithmeticTwapResponseAmino): QueryArithmeticTwapResponse {
    const message = createBaseQueryArithmeticTwapResponse();
    if (object.arithmetic_twap !== undefined && object.arithmetic_twap !== null) {
      message.arithmeticTwap = object.arithmetic_twap;
    }
    return message;
  },
  toAmino(message: QueryArithmeticTwapResponse): QueryArithmeticTwapResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap === "" ? undefined : message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: QueryArithmeticTwapResponseAminoMsg): QueryArithmeticTwapResponse {
    return QueryArithmeticTwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryArithmeticTwapResponseProtoMsg): QueryArithmeticTwapResponse {
    return QueryArithmeticTwapResponse.decode(message.value);
  },
  toProto(message: QueryArithmeticTwapResponse): Uint8Array {
    return QueryArithmeticTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryArithmeticTwapResponse): QueryArithmeticTwapResponseProtoMsg {
    return {
      typeUrl: "/zigchain.twap.QueryArithmeticTwapResponse",
      value: QueryArithmeticTwapResponse.encode(message).finish()
    };
  }
};
function createBaseQueryArithmeticTwapToNowRequest(): QueryArithmeticTwapToNowRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: new Date()
  };
}
export const QueryArithmeticTwapToNowRequest = {
  typeUrl: "/zigchain.twap.QueryArithmeticTwapToNowRequest",
  encode(message: QueryArithmeticTwapToNowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArithmeticTwapToNowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArithmeticTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryArithmeticTwapToNowRequest>): QueryArithmeticTwapToNowRequest {
    const message = createBaseQueryArithmeticTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    return message;
  },
  fromAmino(object: QueryArithmeticTwapToNowRequestAmino): QueryArithmeticTwapToNowRequest {
    const message = createBaseQueryArithmeticTwapToNowRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    return message;
  },
  toAmino(message: QueryArithmeticTwapToNowRequest): QueryArithmeticTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset = message.baseAsset === "" ? undefined : message.baseAsset;
    obj.quote_asset = message.quoteAsset === "" ? undefined : message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryArithmeticTwapToNowRequestAminoMsg): QueryArithmeticTwapToNowRequest {
    return QueryArithmeticTwapToNowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryArithmeticTwapToNowRequestProtoMsg): QueryArithmeticTwapToNowRequest {
    return QueryArithmeticTwapToNowRequest.decode(message.value);
  },
  toProto(message: QueryArithmeticTwapToNowRequest): Uint8Array {
    return QueryArithmeticTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryArithmeticTwapToNowRequest): QueryArithmeticTwapToNowRequestProtoMsg {
    return {
      typeUrl: "/zigchain.twap.QueryArithmeticTwapToNowRequest",
      value: QueryArithmeticTwapToNowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryArithmeticTwapToNowResponse(): QueryArithmeticTwapToNowResponse {
  return {
    arithmeticTwap: ""
  };
}
export const QueryArithmeticTwapToNowResponse = {
  typeUrl: "/zigchain.twap.QueryArithmeticTwapToNowResponse",
  encode(message: QueryArithmeticTwapToNowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArithmeticTwapToNowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArithmeticTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryArithmeticTwapToNowResponse>): QueryArithmeticTwapToNowResponse {
    const message = createBaseQueryArithmeticTwapToNowResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
  fromAmino(object: QueryArithmeticTwapToNowResponseAmino): QueryArithmeticTwapToNowResponse {
    const message = createBaseQueryArithmeticTwapToNowResponse();
    if (object.arithmetic_twap !== undefined && object.arithmetic_twap !== null) {
      message.arithmeticTwap = object.arithmetic_twap;
    }
    return message;
  },
  toAmino(message: QueryArithmeticTwapToNowResponse): QueryArithmeticTwapToNowResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap === "" ? undefined : message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: QueryArithmeticTwapToNowResponseAminoMsg): QueryArithmeticTwapToNowResponse {
    return QueryArithmeticTwapToNowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryArithmeticTwapToNowResponseProtoMsg): QueryArithmeticTwapToNowResponse {
    return QueryArithmeticTwapToNowResponse.decode(message.value);
  },
  toProto(message: QueryArithmeticTwapToNowResponse): Uint8Array {
    return QueryArithmeticTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryArithmeticTwapToNowResponse): QueryArithmeticTwapToNowResponseProtoMsg {
    return {
      typeUrl: "/zigchain.twap.QueryArithmeticTwapToNowResponse",
      value: QueryArithmeticTwapToNowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGeometricTwapRequest(): QueryGeometricTwapRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: new Date(),
    endTime: undefined
  };
}
export const QueryGeometricTwapRequest = {
  typeUrl: "/zigchain.twap.QueryGeometricTwapRequest",
  encode(message: QueryGeometricTwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGeometricTwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGeometricTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGeometricTwapRequest>): QueryGeometricTwapRequest {
    const message = createBaseQueryGeometricTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
  fromAmino(object: QueryGeometricTwapRequestAmino): QueryGeometricTwapRequest {
    const message = createBaseQueryGeometricTwapRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    return message;
  },
  toAmino(message: QueryGeometricTwapRequest): QueryGeometricTwapRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset = message.baseAsset === "" ? undefined : message.baseAsset;
    obj.quote_asset = message.quoteAsset === "" ? undefined : message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGeometricTwapRequestAminoMsg): QueryGeometricTwapRequest {
    return QueryGeometricTwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGeometricTwapRequestProtoMsg): QueryGeometricTwapRequest {
    return QueryGeometricTwapRequest.decode(message.value);
  },
  toProto(message: QueryGeometricTwapRequest): Uint8Array {
    return QueryGeometricTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGeometricTwapRequest): QueryGeometricTwapRequestProtoMsg {
    return {
      typeUrl: "/zigchain.twap.QueryGeometricTwapRequest",
      value: QueryGeometricTwapRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGeometricTwapResponse(): QueryGeometricTwapResponse {
  return {
    geometricTwap: ""
  };
}
export const QueryGeometricTwapResponse = {
  typeUrl: "/zigchain.twap.QueryGeometricTwapResponse",
  encode(message: QueryGeometricTwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.geometricTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.geometricTwap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGeometricTwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGeometricTwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.geometricTwap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGeometricTwapResponse>): QueryGeometricTwapResponse {
    const message = createBaseQueryGeometricTwapResponse();
    message.geometricTwap = object.geometricTwap ?? "";
    return message;
  },
  fromAmino(object: QueryGeometricTwapResponseAmino): QueryGeometricTwapResponse {
    const message = createBaseQueryGeometricTwapResponse();
    if (object.geometric_twap !== undefined && object.geometric_twap !== null) {
      message.geometricTwap = object.geometric_twap;
    }
    return message;
  },
  toAmino(message: QueryGeometricTwapResponse): QueryGeometricTwapResponseAmino {
    const obj: any = {};
    obj.geometric_twap = message.geometricTwap === "" ? undefined : message.geometricTwap;
    return obj;
  },
  fromAminoMsg(object: QueryGeometricTwapResponseAminoMsg): QueryGeometricTwapResponse {
    return QueryGeometricTwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGeometricTwapResponseProtoMsg): QueryGeometricTwapResponse {
    return QueryGeometricTwapResponse.decode(message.value);
  },
  toProto(message: QueryGeometricTwapResponse): Uint8Array {
    return QueryGeometricTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGeometricTwapResponse): QueryGeometricTwapResponseProtoMsg {
    return {
      typeUrl: "/zigchain.twap.QueryGeometricTwapResponse",
      value: QueryGeometricTwapResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGeometricTwapToNowRequest(): QueryGeometricTwapToNowRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: new Date()
  };
}
export const QueryGeometricTwapToNowRequest = {
  typeUrl: "/zigchain.twap.QueryGeometricTwapToNowRequest",
  encode(message: QueryGeometricTwapToNowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGeometricTwapToNowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGeometricTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGeometricTwapToNowRequest>): QueryGeometricTwapToNowRequest {
    const message = createBaseQueryGeometricTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    return message;
  },
  fromAmino(object: QueryGeometricTwapToNowRequestAmino): QueryGeometricTwapToNowRequest {
    const message = createBaseQueryGeometricTwapToNowRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    return message;
  },
  toAmino(message: QueryGeometricTwapToNowRequest): QueryGeometricTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset = message.baseAsset === "" ? undefined : message.baseAsset;
    obj.quote_asset = message.quoteAsset === "" ? undefined : message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGeometricTwapToNowRequestAminoMsg): QueryGeometricTwapToNowRequest {
    return QueryGeometricTwapToNowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGeometricTwapToNowRequestProtoMsg): QueryGeometricTwapToNowRequest {
    return QueryGeometricTwapToNowRequest.decode(message.value);
  },
  toProto(message: QueryGeometricTwapToNowRequest): Uint8Array {
    return QueryGeometricTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGeometricTwapToNowRequest): QueryGeometricTwapToNowRequestProtoMsg {
    return {
      typeUrl: "/zigchain.twap.QueryGeometricTwapToNowRequest",
      value: QueryGeometricTwapToNowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGeometricTwapToNowResponse(): QueryGeometricTwapToNowResponse {
  return {
    geometricTwap: ""
  };
}
export const QueryGeometricTwapToNowResponse = {
  typeUrl: "/zigchain.twap.QueryGeometricTwapToNowResponse",
  encode(message: QueryGeometricTwapToNowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.geometricTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.geometricTwap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGeometricTwapToNowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGeometricTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.geometricTwap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGeometricTwapToNowResponse>): QueryGeometricTwapToNowResponse {
    const message = createBaseQueryGeometricTwapToNowResponse();
    message.geometricTwap = object.geometricTwap ?? "";
    return message;
  },
  fromAmino(object: QueryGeometricTwapToNowResponseAmino): QueryGeometricTwapToNowResponse {
    const message = createBaseQueryGeometricTwapToNowResponse();
    if (object.geometric_twap !== undefined && object.geometric_twap !== null) {
      message.geometricTwap = object.geometric_twap;
    }
    return message;
  },
  toAmino(message: QueryGeometricTwapToNowResponse): QueryGeometricTwapToNowResponseAmino {
    const obj: any = {};
    obj.geometric_twap = message.geometricTwap === "" ? undefined : message.geometricTwap;
    return obj;
  },
  fromAminoMsg(object: QueryGeometricTwapToNowResponseAminoMsg): QueryGeometricTwapToNowResponse {
    return QueryGeometricTwapToNowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGeometricTwapToNowResponseProtoMsg): QueryGeometricTwapToNowResponse {
    return QueryGeometricTwapToNowResponse.decode(message.value);
  },
  toProto(message: QueryGeometricTwapToNowResponse): Uint8Array {
    return QueryGeometricTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGeometricTwapToNowResponse): QueryGeometricTwapToNowResponseProtoMsg {
    return {
      typeUrl: "/zigchain.twap.QueryGeometricTwapToNowResponse",
      value: QueryGeometricTwapToNowResponse.encode(message).finish()
    };
  }
};