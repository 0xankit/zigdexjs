//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Denom, DenomAmino, DenomSDKType } from "./denom";
import { DenomAuth, DenomAuthAmino, DenomAuthSDKType } from "./denom_auth";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/zigchain.factory.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/zigchain.factory.QueryParamsRequest";
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
  typeUrl: "/zigchain.factory.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/zigchain.factory.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryGetDenomRequest get denom info by denom. */
export interface QueryGetDenomRequest {
  denom: string;
}
export interface QueryGetDenomRequestProtoMsg {
  typeUrl: "/zigchain.factory.QueryGetDenomRequest";
  value: Uint8Array;
}
/** QueryGetDenomRequest get denom info by denom. */
export interface QueryGetDenomRequestAmino {
  denom?: string;
}
export interface QueryGetDenomRequestAminoMsg {
  type: "/zigchain.factory.QueryGetDenomRequest";
  value: QueryGetDenomRequestAmino;
}
/** QueryGetDenomRequest get denom info by denom. */
export interface QueryGetDenomRequestSDKType {
  denom: string;
}
/** QueryDenomResponse is response type for the Query/DenomByAdmin RPC method. */
export interface QueryDenomResponse {
  denom: string;
  supply: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
  creator: string;
  bankAdmin: string;
  metadataAdmin: string;
}
export interface QueryDenomResponseProtoMsg {
  typeUrl: "/zigchain.factory.QueryDenomResponse";
  value: Uint8Array;
}
/** QueryDenomResponse is response type for the Query/DenomByAdmin RPC method. */
export interface QueryDenomResponseAmino {
  denom?: string;
  supply: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
  creator?: string;
  bankAdmin?: string;
  metadataAdmin?: string;
}
export interface QueryDenomResponseAminoMsg {
  type: "/zigchain.factory.QueryDenomResponse";
  value: QueryDenomResponseAmino;
}
/** QueryDenomResponse is response type for the Query/DenomByAdmin RPC method. */
export interface QueryDenomResponseSDKType {
  denom: string;
  supply: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
  creator: string;
  bankAdmin: string;
  metadataAdmin: string;
}
/** QueryDenomByOwnerRequest is request type for the Query/DenomByOwner RPC method. */
export interface QueryDenomByAdminRequest {
  admin: string;
  pagination?: PageRequest;
}
export interface QueryDenomByAdminRequestProtoMsg {
  typeUrl: "/zigchain.factory.QueryDenomByAdminRequest";
  value: Uint8Array;
}
/** QueryDenomByOwnerRequest is request type for the Query/DenomByOwner RPC method. */
export interface QueryDenomByAdminRequestAmino {
  admin?: string;
  pagination?: PageRequestAmino;
}
export interface QueryDenomByAdminRequestAminoMsg {
  type: "/zigchain.factory.QueryDenomByAdminRequest";
  value: QueryDenomByAdminRequestAmino;
}
/** QueryDenomByOwnerRequest is request type for the Query/DenomByOwner RPC method. */
export interface QueryDenomByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType;
}
/** QueryDenomByOwnerResponse is response type for the Query/DenomByOwner RPC method. */
export interface QueryAllDenomRequest {
  pagination?: PageRequest;
}
export interface QueryAllDenomRequestProtoMsg {
  typeUrl: "/zigchain.factory.QueryAllDenomRequest";
  value: Uint8Array;
}
/** QueryDenomByOwnerResponse is response type for the Query/DenomByOwner RPC method. */
export interface QueryAllDenomRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDenomRequestAminoMsg {
  type: "/zigchain.factory.QueryAllDenomRequest";
  value: QueryAllDenomRequestAmino;
}
/** QueryDenomByOwnerResponse is response type for the Query/DenomByOwner RPC method. */
export interface QueryAllDenomRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryDenomByOwnerResponse is response type for the Query/QueryAllDenom RPC method. */
export interface QueryAllDenomResponse {
  denom: Denom[];
  pagination?: PageResponse;
}
export interface QueryAllDenomResponseProtoMsg {
  typeUrl: "/zigchain.factory.QueryAllDenomResponse";
  value: Uint8Array;
}
/** QueryDenomByOwnerResponse is response type for the Query/QueryAllDenom RPC method. */
export interface QueryAllDenomResponseAmino {
  denom?: DenomAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDenomResponseAminoMsg {
  type: "/zigchain.factory.QueryAllDenomResponse";
  value: QueryAllDenomResponseAmino;
}
/** QueryDenomByOwnerResponse is response type for the Query/QueryAllDenom RPC method. */
export interface QueryAllDenomResponseSDKType {
  denom: DenomSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryDenomByOwnerResponse is response type for the Query/QueryDenomByAdmin RPC method. */
export interface QueryDenomByAdminResponse {
  denoms: string[];
  pagination?: PageResponse;
}
export interface QueryDenomByAdminResponseProtoMsg {
  typeUrl: "/zigchain.factory.QueryDenomByAdminResponse";
  value: Uint8Array;
}
/** QueryDenomByOwnerResponse is response type for the Query/QueryDenomByAdmin RPC method. */
export interface QueryDenomByAdminResponseAmino {
  denoms?: string[];
  pagination?: PageResponseAmino;
}
export interface QueryDenomByAdminResponseAminoMsg {
  type: "/zigchain.factory.QueryDenomByAdminResponse";
  value: QueryDenomByAdminResponseAmino;
}
/** QueryDenomByOwnerResponse is response type for the Query/QueryDenomByAdmin RPC method. */
export interface QueryDenomByAdminResponseSDKType {
  denoms: string[];
  pagination?: PageResponseSDKType;
}
/** QueryDenomByOwnerResponse is response type for the Query/DenomByAdmin RPC method. */
export interface QueryAllDenomsByAdminRequest {
  admin: string;
  pagination?: PageRequest;
}
export interface QueryAllDenomsByAdminRequestProtoMsg {
  typeUrl: "/zigchain.factory.QueryAllDenomsByAdminRequest";
  value: Uint8Array;
}
/** QueryDenomByOwnerResponse is response type for the Query/DenomByAdmin RPC method. */
export interface QueryAllDenomsByAdminRequestAmino {
  admin?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllDenomsByAdminRequestAminoMsg {
  type: "/zigchain.factory.QueryAllDenomsByAdminRequest";
  value: QueryAllDenomsByAdminRequestAmino;
}
/** QueryDenomByOwnerResponse is response type for the Query/DenomByAdmin RPC method. */
export interface QueryAllDenomsByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType;
}
/** QueryAllDenomsByAdminResponse is response type for the Query/DenomByOwner RPC method. */
export interface QueryAllDenomsByAdminResponse {
  denoms: string;
  pagination?: PageResponse;
}
export interface QueryAllDenomsByAdminResponseProtoMsg {
  typeUrl: "/zigchain.factory.QueryAllDenomsByAdminResponse";
  value: Uint8Array;
}
/** QueryAllDenomsByAdminResponse is response type for the Query/DenomByOwner RPC method. */
export interface QueryAllDenomsByAdminResponseAmino {
  denoms?: string;
  pagination?: PageResponseAmino;
}
export interface QueryAllDenomsByAdminResponseAminoMsg {
  type: "/zigchain.factory.QueryAllDenomsByAdminResponse";
  value: QueryAllDenomsByAdminResponseAmino;
}
/** QueryAllDenomsByAdminResponse is response type for the Query/DenomByOwner RPC method. */
export interface QueryAllDenomsByAdminResponseSDKType {
  denoms: string;
  pagination?: PageResponseSDKType;
}
/** QueryGetDenomAuthRequest is request type for the Query/GetDenomAuth RPC method. */
export interface QueryGetDenomAuthRequest {
  denom: string;
}
export interface QueryGetDenomAuthRequestProtoMsg {
  typeUrl: "/zigchain.factory.QueryGetDenomAuthRequest";
  value: Uint8Array;
}
/** QueryGetDenomAuthRequest is request type for the Query/GetDenomAuth RPC method. */
export interface QueryGetDenomAuthRequestAmino {
  denom?: string;
}
export interface QueryGetDenomAuthRequestAminoMsg {
  type: "/zigchain.factory.QueryGetDenomAuthRequest";
  value: QueryGetDenomAuthRequestAmino;
}
/** QueryGetDenomAuthRequest is request type for the Query/GetDenomAuth RPC method. */
export interface QueryGetDenomAuthRequestSDKType {
  denom: string;
}
/** QueryGetDenomAuthResponse is response type for the Query/GetDenomAuth RPC method. */
export interface QueryDenomAuthResponse {
  denomAuth: DenomAuth;
}
export interface QueryDenomAuthResponseProtoMsg {
  typeUrl: "/zigchain.factory.QueryDenomAuthResponse";
  value: Uint8Array;
}
/** QueryGetDenomAuthResponse is response type for the Query/GetDenomAuth RPC method. */
export interface QueryDenomAuthResponseAmino {
  denomAuth?: DenomAuthAmino;
}
export interface QueryDenomAuthResponseAminoMsg {
  type: "/zigchain.factory.QueryDenomAuthResponse";
  value: QueryDenomAuthResponseAmino;
}
/** QueryGetDenomAuthResponse is response type for the Query/GetDenomAuth RPC method. */
export interface QueryDenomAuthResponseSDKType {
  denomAuth: DenomAuthSDKType;
}
/** QueryListDenomAuthRequest is request type for the Query/ListDenomAuth RPC method. */
export interface QueryAllDenomAuthRequest {
  pagination?: PageRequest;
}
export interface QueryAllDenomAuthRequestProtoMsg {
  typeUrl: "/zigchain.factory.QueryAllDenomAuthRequest";
  value: Uint8Array;
}
/** QueryListDenomAuthRequest is request type for the Query/ListDenomAuth RPC method. */
export interface QueryAllDenomAuthRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDenomAuthRequestAminoMsg {
  type: "/zigchain.factory.QueryAllDenomAuthRequest";
  value: QueryAllDenomAuthRequestAmino;
}
/** QueryListDenomAuthRequest is request type for the Query/ListDenomAuth RPC method. */
export interface QueryAllDenomAuthRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryListDenomAuthResponse is response type for the Query/ListDenomAuth RPC method. */
export interface QueryAllDenomAuthResponse {
  denomAuth: DenomAuth[];
  pagination?: PageResponse;
}
export interface QueryAllDenomAuthResponseProtoMsg {
  typeUrl: "/zigchain.factory.QueryAllDenomAuthResponse";
  value: Uint8Array;
}
/** QueryListDenomAuthResponse is response type for the Query/ListDenomAuth RPC method. */
export interface QueryAllDenomAuthResponseAmino {
  denomAuth?: DenomAuthAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDenomAuthResponseAminoMsg {
  type: "/zigchain.factory.QueryAllDenomAuthResponse";
  value: QueryAllDenomAuthResponseAmino;
}
/** QueryListDenomAuthResponse is response type for the Query/ListDenomAuth RPC method. */
export interface QueryAllDenomAuthResponseSDKType {
  denomAuth: DenomAuthSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/zigchain.factory.QueryParamsRequest",
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
      typeUrl: "/zigchain.factory.QueryParamsRequest",
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
  typeUrl: "/zigchain.factory.QueryParamsResponse",
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
      typeUrl: "/zigchain.factory.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDenomRequest(): QueryGetDenomRequest {
  return {
    denom: ""
  };
}
export const QueryGetDenomRequest = {
  typeUrl: "/zigchain.factory.QueryGetDenomRequest",
  encode(message: QueryGetDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomRequest();
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
  fromPartial(object: Partial<QueryGetDenomRequest>): QueryGetDenomRequest {
    const message = createBaseQueryGetDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetDenomRequestAmino): QueryGetDenomRequest {
    const message = createBaseQueryGetDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetDenomRequest): QueryGetDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetDenomRequestAminoMsg): QueryGetDenomRequest {
    return QueryGetDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDenomRequestProtoMsg): QueryGetDenomRequest {
    return QueryGetDenomRequest.decode(message.value);
  },
  toProto(message: QueryGetDenomRequest): Uint8Array {
    return QueryGetDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDenomRequest): QueryGetDenomRequestProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryGetDenomRequest",
      value: QueryGetDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomResponse(): QueryDenomResponse {
  return {
    denom: "",
    supply: "",
    maxSupply: "",
    canChangeMaxSupply: false,
    creator: "",
    bankAdmin: "",
    metadataAdmin: ""
  };
}
export const QueryDenomResponse = {
  typeUrl: "/zigchain.factory.QueryDenomResponse",
  encode(message: QueryDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.supply !== "") {
      writer.uint32(18).string(message.supply);
    }
    if (message.maxSupply !== "") {
      writer.uint32(26).string(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(32).bool(message.canChangeMaxSupply);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.bankAdmin !== "") {
      writer.uint32(50).string(message.bankAdmin);
    }
    if (message.metadataAdmin !== "") {
      writer.uint32(58).string(message.metadataAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.supply = reader.string();
          break;
        case 3:
          message.maxSupply = reader.string();
          break;
        case 4:
          message.canChangeMaxSupply = reader.bool();
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.bankAdmin = reader.string();
          break;
        case 7:
          message.metadataAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomResponse>): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    message.denom = object.denom ?? "";
    message.supply = object.supply ?? "";
    message.maxSupply = object.maxSupply ?? "";
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    message.creator = object.creator ?? "";
    message.bankAdmin = object.bankAdmin ?? "";
    message.metadataAdmin = object.metadataAdmin ?? "";
    return message;
  },
  fromAmino(object: QueryDenomResponseAmino): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply;
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = object.canChangeMaxSupply;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bankAdmin !== undefined && object.bankAdmin !== null) {
      message.bankAdmin = object.bankAdmin;
    }
    if (object.metadataAdmin !== undefined && object.metadataAdmin !== null) {
      message.metadataAdmin = object.metadataAdmin;
    }
    return message;
  },
  toAmino(message: QueryDenomResponse): QueryDenomResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.supply = message.supply ?? "";
    obj.maxSupply = message.maxSupply ?? "";
    obj.canChangeMaxSupply = message.canChangeMaxSupply ?? false;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bankAdmin = message.bankAdmin === "" ? undefined : message.bankAdmin;
    obj.metadataAdmin = message.metadataAdmin === "" ? undefined : message.metadataAdmin;
    return obj;
  },
  fromAminoMsg(object: QueryDenomResponseAminoMsg): QueryDenomResponse {
    return QueryDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomResponseProtoMsg): QueryDenomResponse {
    return QueryDenomResponse.decode(message.value);
  },
  toProto(message: QueryDenomResponse): Uint8Array {
    return QueryDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomResponse): QueryDenomResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryDenomResponse",
      value: QueryDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomByAdminRequest(): QueryDenomByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryDenomByAdminRequest = {
  typeUrl: "/zigchain.factory.QueryDenomByAdminRequest",
  encode(message: QueryDenomByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
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
  fromPartial(object: Partial<QueryDenomByAdminRequest>): QueryDenomByAdminRequest {
    const message = createBaseQueryDenomByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomByAdminRequestAmino): QueryDenomByAdminRequest {
    const message = createBaseQueryDenomByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomByAdminRequest): QueryDenomByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomByAdminRequestAminoMsg): QueryDenomByAdminRequest {
    return QueryDenomByAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomByAdminRequestProtoMsg): QueryDenomByAdminRequest {
    return QueryDenomByAdminRequest.decode(message.value);
  },
  toProto(message: QueryDenomByAdminRequest): Uint8Array {
    return QueryDenomByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomByAdminRequest): QueryDenomByAdminRequestProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryDenomByAdminRequest",
      value: QueryDenomByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDenomRequest(): QueryAllDenomRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllDenomRequest = {
  typeUrl: "/zigchain.factory.QueryAllDenomRequest",
  encode(message: QueryAllDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomRequest();
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
  fromPartial(object: Partial<QueryAllDenomRequest>): QueryAllDenomRequest {
    const message = createBaseQueryAllDenomRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomRequestAmino): QueryAllDenomRequest {
    const message = createBaseQueryAllDenomRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomRequest): QueryAllDenomRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomRequestAminoMsg): QueryAllDenomRequest {
    return QueryAllDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomRequestProtoMsg): QueryAllDenomRequest {
    return QueryAllDenomRequest.decode(message.value);
  },
  toProto(message: QueryAllDenomRequest): Uint8Array {
    return QueryAllDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomRequest): QueryAllDenomRequestProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryAllDenomRequest",
      value: QueryAllDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDenomResponse(): QueryAllDenomResponse {
  return {
    denom: [],
    pagination: undefined
  };
}
export const QueryAllDenomResponse = {
  typeUrl: "/zigchain.factory.QueryAllDenomResponse",
  encode(message: QueryAllDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denom) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom.push(Denom.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllDenomResponse>): QueryAllDenomResponse {
    const message = createBaseQueryAllDenomResponse();
    message.denom = object.denom?.map(e => Denom.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomResponseAmino): QueryAllDenomResponse {
    const message = createBaseQueryAllDenomResponse();
    message.denom = object.denom?.map(e => Denom.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomResponse): QueryAllDenomResponseAmino {
    const obj: any = {};
    if (message.denom) {
      obj.denom = message.denom.map(e => e ? Denom.toAmino(e) : undefined);
    } else {
      obj.denom = message.denom;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomResponseAminoMsg): QueryAllDenomResponse {
    return QueryAllDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomResponseProtoMsg): QueryAllDenomResponse {
    return QueryAllDenomResponse.decode(message.value);
  },
  toProto(message: QueryAllDenomResponse): Uint8Array {
    return QueryAllDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomResponse): QueryAllDenomResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryAllDenomResponse",
      value: QueryAllDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomByAdminResponse(): QueryDenomByAdminResponse {
  return {
    denoms: [],
    pagination: undefined
  };
}
export const QueryDenomByAdminResponse = {
  typeUrl: "/zigchain.factory.QueryDenomByAdminResponse",
  encode(message: QueryDenomByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
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
  fromPartial(object: Partial<QueryDenomByAdminResponse>): QueryDenomByAdminResponse {
    const message = createBaseQueryDenomByAdminResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomByAdminResponseAmino): QueryDenomByAdminResponse {
    const message = createBaseQueryDenomByAdminResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomByAdminResponse): QueryDenomByAdminResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomByAdminResponseAminoMsg): QueryDenomByAdminResponse {
    return QueryDenomByAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomByAdminResponseProtoMsg): QueryDenomByAdminResponse {
    return QueryDenomByAdminResponse.decode(message.value);
  },
  toProto(message: QueryDenomByAdminResponse): Uint8Array {
    return QueryDenomByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomByAdminResponse): QueryDenomByAdminResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryDenomByAdminResponse",
      value: QueryDenomByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDenomsByAdminRequest(): QueryAllDenomsByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryAllDenomsByAdminRequest = {
  typeUrl: "/zigchain.factory.QueryAllDenomsByAdminRequest",
  encode(message: QueryAllDenomsByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomsByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomsByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
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
  fromPartial(object: Partial<QueryAllDenomsByAdminRequest>): QueryAllDenomsByAdminRequest {
    const message = createBaseQueryAllDenomsByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomsByAdminRequestAmino): QueryAllDenomsByAdminRequest {
    const message = createBaseQueryAllDenomsByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomsByAdminRequest): QueryAllDenomsByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomsByAdminRequestAminoMsg): QueryAllDenomsByAdminRequest {
    return QueryAllDenomsByAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomsByAdminRequestProtoMsg): QueryAllDenomsByAdminRequest {
    return QueryAllDenomsByAdminRequest.decode(message.value);
  },
  toProto(message: QueryAllDenomsByAdminRequest): Uint8Array {
    return QueryAllDenomsByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomsByAdminRequest): QueryAllDenomsByAdminRequestProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryAllDenomsByAdminRequest",
      value: QueryAllDenomsByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDenomsByAdminResponse(): QueryAllDenomsByAdminResponse {
  return {
    denoms: "",
    pagination: undefined
  };
}
export const QueryAllDenomsByAdminResponse = {
  typeUrl: "/zigchain.factory.QueryAllDenomsByAdminResponse",
  encode(message: QueryAllDenomsByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denoms !== "") {
      writer.uint32(10).string(message.denoms);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomsByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomsByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms = reader.string();
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
  fromPartial(object: Partial<QueryAllDenomsByAdminResponse>): QueryAllDenomsByAdminResponse {
    const message = createBaseQueryAllDenomsByAdminResponse();
    message.denoms = object.denoms ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomsByAdminResponseAmino): QueryAllDenomsByAdminResponse {
    const message = createBaseQueryAllDenomsByAdminResponse();
    if (object.denoms !== undefined && object.denoms !== null) {
      message.denoms = object.denoms;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomsByAdminResponse): QueryAllDenomsByAdminResponseAmino {
    const obj: any = {};
    obj.denoms = message.denoms === "" ? undefined : message.denoms;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomsByAdminResponseAminoMsg): QueryAllDenomsByAdminResponse {
    return QueryAllDenomsByAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomsByAdminResponseProtoMsg): QueryAllDenomsByAdminResponse {
    return QueryAllDenomsByAdminResponse.decode(message.value);
  },
  toProto(message: QueryAllDenomsByAdminResponse): Uint8Array {
    return QueryAllDenomsByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomsByAdminResponse): QueryAllDenomsByAdminResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryAllDenomsByAdminResponse",
      value: QueryAllDenomsByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDenomAuthRequest(): QueryGetDenomAuthRequest {
  return {
    denom: ""
  };
}
export const QueryGetDenomAuthRequest = {
  typeUrl: "/zigchain.factory.QueryGetDenomAuthRequest",
  encode(message: QueryGetDenomAuthRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDenomAuthRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomAuthRequest();
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
  fromPartial(object: Partial<QueryGetDenomAuthRequest>): QueryGetDenomAuthRequest {
    const message = createBaseQueryGetDenomAuthRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetDenomAuthRequestAmino): QueryGetDenomAuthRequest {
    const message = createBaseQueryGetDenomAuthRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetDenomAuthRequest): QueryGetDenomAuthRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetDenomAuthRequestAminoMsg): QueryGetDenomAuthRequest {
    return QueryGetDenomAuthRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDenomAuthRequestProtoMsg): QueryGetDenomAuthRequest {
    return QueryGetDenomAuthRequest.decode(message.value);
  },
  toProto(message: QueryGetDenomAuthRequest): Uint8Array {
    return QueryGetDenomAuthRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDenomAuthRequest): QueryGetDenomAuthRequestProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryGetDenomAuthRequest",
      value: QueryGetDenomAuthRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomAuthResponse(): QueryDenomAuthResponse {
  return {
    denomAuth: DenomAuth.fromPartial({})
  };
}
export const QueryDenomAuthResponse = {
  typeUrl: "/zigchain.factory.QueryDenomAuthResponse",
  encode(message: QueryDenomAuthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomAuth !== undefined) {
      DenomAuth.encode(message.denomAuth, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomAuth = DenomAuth.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomAuthResponse>): QueryDenomAuthResponse {
    const message = createBaseQueryDenomAuthResponse();
    message.denomAuth = object.denomAuth !== undefined && object.denomAuth !== null ? DenomAuth.fromPartial(object.denomAuth) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomAuthResponseAmino): QueryDenomAuthResponse {
    const message = createBaseQueryDenomAuthResponse();
    if (object.denomAuth !== undefined && object.denomAuth !== null) {
      message.denomAuth = DenomAuth.fromAmino(object.denomAuth);
    }
    return message;
  },
  toAmino(message: QueryDenomAuthResponse): QueryDenomAuthResponseAmino {
    const obj: any = {};
    obj.denomAuth = message.denomAuth ? DenomAuth.toAmino(message.denomAuth) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomAuthResponseAminoMsg): QueryDenomAuthResponse {
    return QueryDenomAuthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomAuthResponseProtoMsg): QueryDenomAuthResponse {
    return QueryDenomAuthResponse.decode(message.value);
  },
  toProto(message: QueryDenomAuthResponse): Uint8Array {
    return QueryDenomAuthResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomAuthResponse): QueryDenomAuthResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryDenomAuthResponse",
      value: QueryDenomAuthResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDenomAuthRequest(): QueryAllDenomAuthRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllDenomAuthRequest = {
  typeUrl: "/zigchain.factory.QueryAllDenomAuthRequest",
  encode(message: QueryAllDenomAuthRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomAuthRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomAuthRequest();
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
  fromPartial(object: Partial<QueryAllDenomAuthRequest>): QueryAllDenomAuthRequest {
    const message = createBaseQueryAllDenomAuthRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomAuthRequestAmino): QueryAllDenomAuthRequest {
    const message = createBaseQueryAllDenomAuthRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomAuthRequest): QueryAllDenomAuthRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomAuthRequestAminoMsg): QueryAllDenomAuthRequest {
    return QueryAllDenomAuthRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomAuthRequestProtoMsg): QueryAllDenomAuthRequest {
    return QueryAllDenomAuthRequest.decode(message.value);
  },
  toProto(message: QueryAllDenomAuthRequest): Uint8Array {
    return QueryAllDenomAuthRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomAuthRequest): QueryAllDenomAuthRequestProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryAllDenomAuthRequest",
      value: QueryAllDenomAuthRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDenomAuthResponse(): QueryAllDenomAuthResponse {
  return {
    denomAuth: [],
    pagination: undefined
  };
}
export const QueryAllDenomAuthResponse = {
  typeUrl: "/zigchain.factory.QueryAllDenomAuthResponse",
  encode(message: QueryAllDenomAuthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomAuth) {
      DenomAuth.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomAuthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomAuth.push(DenomAuth.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllDenomAuthResponse>): QueryAllDenomAuthResponse {
    const message = createBaseQueryAllDenomAuthResponse();
    message.denomAuth = object.denomAuth?.map(e => DenomAuth.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomAuthResponseAmino): QueryAllDenomAuthResponse {
    const message = createBaseQueryAllDenomAuthResponse();
    message.denomAuth = object.denomAuth?.map(e => DenomAuth.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomAuthResponse): QueryAllDenomAuthResponseAmino {
    const obj: any = {};
    if (message.denomAuth) {
      obj.denomAuth = message.denomAuth.map(e => e ? DenomAuth.toAmino(e) : undefined);
    } else {
      obj.denomAuth = message.denomAuth;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomAuthResponseAminoMsg): QueryAllDenomAuthResponse {
    return QueryAllDenomAuthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomAuthResponseProtoMsg): QueryAllDenomAuthResponse {
    return QueryAllDenomAuthResponse.decode(message.value);
  },
  toProto(message: QueryAllDenomAuthResponse): Uint8Array {
    return QueryAllDenomAuthResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomAuthResponse): QueryAllDenomAuthResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.QueryAllDenomAuthResponse",
      value: QueryAllDenomAuthResponse.encode(message).finish()
    };
  }
};