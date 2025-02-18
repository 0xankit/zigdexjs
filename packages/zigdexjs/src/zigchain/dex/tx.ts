//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/zigchain.dex.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "zigchain/x/dex/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/zigchain.dex.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/zigchain.dex.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgCreatePool creates pool message needs base and token */
export interface MsgCreatePool {
  creator: string;
  base: Coin;
  quote: Coin;
  receiver: string;
}
export interface MsgCreatePoolProtoMsg {
  typeUrl: "/zigchain.dex.MsgCreatePool";
  value: Uint8Array;
}
/** MsgCreatePool creates pool message needs base and token */
export interface MsgCreatePoolAmino {
  creator?: string;
  base?: CoinAmino;
  quote?: CoinAmino;
  receiver?: string;
}
export interface MsgCreatePoolAminoMsg {
  type: "/zigchain.dex.MsgCreatePool";
  value: MsgCreatePoolAmino;
}
/** MsgCreatePool creates pool message needs base and token */
export interface MsgCreatePoolSDKType {
  creator: string;
  base: CoinSDKType;
  quote: CoinSDKType;
  receiver: string;
}
/** MsgCreatePoolResponse defines the response structure for executing MsgCreatePool message. */
export interface MsgCreatePoolResponse {
  poolId: string;
  base: Coin;
  quote: Coin;
  lpToken: Coin;
}
export interface MsgCreatePoolResponseProtoMsg {
  typeUrl: "/zigchain.dex.MsgCreatePoolResponse";
  value: Uint8Array;
}
/** MsgCreatePoolResponse defines the response structure for executing MsgCreatePool message. */
export interface MsgCreatePoolResponseAmino {
  poolId?: string;
  base?: CoinAmino;
  quote?: CoinAmino;
  lpToken?: CoinAmino;
}
export interface MsgCreatePoolResponseAminoMsg {
  type: "/zigchain.dex.MsgCreatePoolResponse";
  value: MsgCreatePoolResponseAmino;
}
/** MsgCreatePoolResponse defines the response structure for executing MsgCreatePool message. */
export interface MsgCreatePoolResponseSDKType {
  poolId: string;
  base: CoinSDKType;
  quote: CoinSDKType;
  lpToken: CoinSDKType;
}
/** MsgSwap swaps tokens from one to another */
export interface MsgSwap {
  signer: string;
  incoming: Coin;
  poolId: string;
  receiver: string;
}
export interface MsgSwapProtoMsg {
  typeUrl: "/zigchain.dex.MsgSwap";
  value: Uint8Array;
}
/** MsgSwap swaps tokens from one to another */
export interface MsgSwapAmino {
  signer?: string;
  incoming?: CoinAmino;
  poolId?: string;
  receiver?: string;
}
export interface MsgSwapAminoMsg {
  type: "/zigchain.dex.MsgSwap";
  value: MsgSwapAmino;
}
/** MsgSwap swaps tokens from one to another */
export interface MsgSwapSDKType {
  signer: string;
  incoming: CoinSDKType;
  poolId: string;
  receiver: string;
}
/** MsgSwapResponse defines the response structure for executing MsgSwap message. */
export interface MsgSwapResponse {
  swapped: Coin;
  base: string;
  quote: string;
}
export interface MsgSwapResponseProtoMsg {
  typeUrl: "/zigchain.dex.MsgSwapResponse";
  value: Uint8Array;
}
/** MsgSwapResponse defines the response structure for executing MsgSwap message. */
export interface MsgSwapResponseAmino {
  swapped?: CoinAmino;
  base?: string;
  quote?: string;
}
export interface MsgSwapResponseAminoMsg {
  type: "/zigchain.dex.MsgSwapResponse";
  value: MsgSwapResponseAmino;
}
/** MsgSwapResponse defines the response structure for executing MsgSwap message. */
export interface MsgSwapResponseSDKType {
  swapped: CoinSDKType;
  base: string;
  quote: string;
}
/** MsgAddLiquidity adds liquidity to the pool, from the base and quote tokens send in */
export interface MsgAddLiquidity {
  creator: string;
  poolId: string;
  base: Coin;
  quote: Coin;
  receiver: string;
}
export interface MsgAddLiquidityProtoMsg {
  typeUrl: "/zigchain.dex.MsgAddLiquidity";
  value: Uint8Array;
}
/** MsgAddLiquidity adds liquidity to the pool, from the base and quote tokens send in */
export interface MsgAddLiquidityAmino {
  creator?: string;
  poolId?: string;
  base?: CoinAmino;
  quote?: CoinAmino;
  receiver?: string;
}
export interface MsgAddLiquidityAminoMsg {
  type: "/zigchain.dex.MsgAddLiquidity";
  value: MsgAddLiquidityAmino;
}
/** MsgAddLiquidity adds liquidity to the pool, from the base and quote tokens send in */
export interface MsgAddLiquiditySDKType {
  creator: string;
  poolId: string;
  base: CoinSDKType;
  quote: CoinSDKType;
  receiver: string;
}
/** MsgAddLiquidityResponse defines the response structure for executing MsgAddLiquidity message. */
export interface MsgAddLiquidityResponse {
  lptoken: Coin;
}
export interface MsgAddLiquidityResponseProtoMsg {
  typeUrl: "/zigchain.dex.MsgAddLiquidityResponse";
  value: Uint8Array;
}
/** MsgAddLiquidityResponse defines the response structure for executing MsgAddLiquidity message. */
export interface MsgAddLiquidityResponseAmino {
  lptoken?: CoinAmino;
}
export interface MsgAddLiquidityResponseAminoMsg {
  type: "/zigchain.dex.MsgAddLiquidityResponse";
  value: MsgAddLiquidityResponseAmino;
}
/** MsgAddLiquidityResponse defines the response structure for executing MsgAddLiquidity message. */
export interface MsgAddLiquidityResponseSDKType {
  lptoken: CoinSDKType;
}
/** MsgRemoveLiquidity removes liquidity from the pool, from the lptoken send in */
export interface MsgRemoveLiquidity {
  creator: string;
  lptoken: Coin;
  receiver: string;
}
export interface MsgRemoveLiquidityProtoMsg {
  typeUrl: "/zigchain.dex.MsgRemoveLiquidity";
  value: Uint8Array;
}
/** MsgRemoveLiquidity removes liquidity from the pool, from the lptoken send in */
export interface MsgRemoveLiquidityAmino {
  creator?: string;
  lptoken?: CoinAmino;
  receiver?: string;
}
export interface MsgRemoveLiquidityAminoMsg {
  type: "/zigchain.dex.MsgRemoveLiquidity";
  value: MsgRemoveLiquidityAmino;
}
/** MsgRemoveLiquidity removes liquidity from the pool, from the lptoken send in */
export interface MsgRemoveLiquiditySDKType {
  creator: string;
  lptoken: CoinSDKType;
  receiver: string;
}
/** MsgRemoveLiquidityResponse defines the response structure for executing MsgRemoveLiquidity message. */
export interface MsgRemoveLiquidityResponse {
  base: Coin;
  quote: Coin;
}
export interface MsgRemoveLiquidityResponseProtoMsg {
  typeUrl: "/zigchain.dex.MsgRemoveLiquidityResponse";
  value: Uint8Array;
}
/** MsgRemoveLiquidityResponse defines the response structure for executing MsgRemoveLiquidity message. */
export interface MsgRemoveLiquidityResponseAmino {
  base?: CoinAmino;
  quote?: CoinAmino;
}
export interface MsgRemoveLiquidityResponseAminoMsg {
  type: "/zigchain.dex.MsgRemoveLiquidityResponse";
  value: MsgRemoveLiquidityResponseAmino;
}
/** MsgRemoveLiquidityResponse defines the response structure for executing MsgRemoveLiquidity message. */
export interface MsgRemoveLiquidityResponseSDKType {
  base: CoinSDKType;
  quote: CoinSDKType;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/zigchain.dex.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "zigchain/x/dex/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/zigchain.dex.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/zigchain.dex.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    creator: "",
    base: Coin.fromPartial({}),
    quote: Coin.fromPartial({}),
    receiver: ""
  };
}
export const MsgCreatePool = {
  typeUrl: "/zigchain.dex.MsgCreatePool",
  encode(message: MsgCreatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.base !== undefined) {
      Coin.encode(message.base, writer.uint32(18).fork()).ldelim();
    }
    if (message.quote !== undefined) {
      Coin.encode(message.quote, writer.uint32(26).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.base = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.quote = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.creator = object.creator ?? "";
    message.base = object.base !== undefined && object.base !== null ? Coin.fromPartial(object.base) : undefined;
    message.quote = object.quote !== undefined && object.quote !== null ? Coin.fromPartial(object.quote) : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgCreatePoolAmino): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = Coin.fromAmino(object.base);
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = Coin.fromAmino(object.quote);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgCreatePool): MsgCreatePoolAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.base = message.base ? Coin.toAmino(message.base) : undefined;
    obj.quote = message.quote ? Coin.toAmino(message.quote) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool {
    return MsgCreatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool {
    return MsgCreatePool.decode(message.value);
  },
  toProto(message: MsgCreatePool): Uint8Array {
    return MsgCreatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg {
    return {
      typeUrl: "/zigchain.dex.MsgCreatePool",
      value: MsgCreatePool.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {
    poolId: "",
    base: Coin.fromPartial({}),
    quote: Coin.fromPartial({}),
    lpToken: Coin.fromPartial({})
  };
}
export const MsgCreatePoolResponse = {
  typeUrl: "/zigchain.dex.MsgCreatePoolResponse",
  encode(message: MsgCreatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.base !== undefined) {
      Coin.encode(message.base, writer.uint32(18).fork()).ldelim();
    }
    if (message.quote !== undefined) {
      Coin.encode(message.quote, writer.uint32(26).fork()).ldelim();
    }
    if (message.lpToken !== undefined) {
      Coin.encode(message.lpToken, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.base = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.quote = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.lpToken = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    message.poolId = object.poolId ?? "";
    message.base = object.base !== undefined && object.base !== null ? Coin.fromPartial(object.base) : undefined;
    message.quote = object.quote !== undefined && object.quote !== null ? Coin.fromPartial(object.quote) : undefined;
    message.lpToken = object.lpToken !== undefined && object.lpToken !== null ? Coin.fromPartial(object.lpToken) : undefined;
    return message;
  },
  fromAmino(object: MsgCreatePoolResponseAmino): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = Coin.fromAmino(object.base);
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = Coin.fromAmino(object.quote);
    }
    if (object.lpToken !== undefined && object.lpToken !== null) {
      message.lpToken = Coin.fromAmino(object.lpToken);
    }
    return message;
  },
  toAmino(message: MsgCreatePoolResponse): MsgCreatePoolResponseAmino {
    const obj: any = {};
    obj.poolId = message.poolId === "" ? undefined : message.poolId;
    obj.base = message.base ? Coin.toAmino(message.base) : undefined;
    obj.quote = message.quote ? Coin.toAmino(message.quote) : undefined;
    obj.lpToken = message.lpToken ? Coin.toAmino(message.lpToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.decode(message.value);
  },
  toProto(message: MsgCreatePoolResponse): Uint8Array {
    return MsgCreatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.MsgCreatePoolResponse",
      value: MsgCreatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSwap(): MsgSwap {
  return {
    signer: "",
    incoming: Coin.fromPartial({}),
    poolId: "",
    receiver: ""
  };
}
export const MsgSwap = {
  typeUrl: "/zigchain.dex.MsgSwap",
  encode(message: MsgSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.incoming !== undefined) {
      Coin.encode(message.incoming, writer.uint32(18).fork()).ldelim();
    }
    if (message.poolId !== "") {
      writer.uint32(26).string(message.poolId);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.incoming = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.poolId = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwap>): MsgSwap {
    const message = createBaseMsgSwap();
    message.signer = object.signer ?? "";
    message.incoming = object.incoming !== undefined && object.incoming !== null ? Coin.fromPartial(object.incoming) : undefined;
    message.poolId = object.poolId ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgSwapAmino): MsgSwap {
    const message = createBaseMsgSwap();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.incoming !== undefined && object.incoming !== null) {
      message.incoming = Coin.fromAmino(object.incoming);
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgSwap): MsgSwapAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.incoming = message.incoming ? Coin.toAmino(message.incoming) : undefined;
    obj.poolId = message.poolId === "" ? undefined : message.poolId;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgSwapAminoMsg): MsgSwap {
    return MsgSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapProtoMsg): MsgSwap {
    return MsgSwap.decode(message.value);
  },
  toProto(message: MsgSwap): Uint8Array {
    return MsgSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgSwap): MsgSwapProtoMsg {
    return {
      typeUrl: "/zigchain.dex.MsgSwap",
      value: MsgSwap.encode(message).finish()
    };
  }
};
function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {
    swapped: Coin.fromPartial({}),
    base: "",
    quote: ""
  };
}
export const MsgSwapResponse = {
  typeUrl: "/zigchain.dex.MsgSwapResponse",
  encode(message: MsgSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapped !== undefined) {
      Coin.encode(message.swapped, writer.uint32(10).fork()).ldelim();
    }
    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapped = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.base = reader.string();
          break;
        case 3:
          message.quote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    message.swapped = object.swapped !== undefined && object.swapped !== null ? Coin.fromPartial(object.swapped) : undefined;
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  },
  fromAmino(object: MsgSwapResponseAmino): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    if (object.swapped !== undefined && object.swapped !== null) {
      message.swapped = Coin.fromAmino(object.swapped);
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    return message;
  },
  toAmino(message: MsgSwapResponse): MsgSwapResponseAmino {
    const obj: any = {};
    obj.swapped = message.swapped ? Coin.toAmino(message.swapped) : undefined;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    return obj;
  },
  fromAminoMsg(object: MsgSwapResponseAminoMsg): MsgSwapResponse {
    return MsgSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapResponseProtoMsg): MsgSwapResponse {
    return MsgSwapResponse.decode(message.value);
  },
  toProto(message: MsgSwapResponse): Uint8Array {
    return MsgSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapResponse): MsgSwapResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.MsgSwapResponse",
      value: MsgSwapResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return {
    creator: "",
    poolId: "",
    base: Coin.fromPartial({}),
    quote: Coin.fromPartial({}),
    receiver: ""
  };
}
export const MsgAddLiquidity = {
  typeUrl: "/zigchain.dex.MsgAddLiquidity",
  encode(message: MsgAddLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.base !== undefined) {
      Coin.encode(message.base, writer.uint32(26).fork()).ldelim();
    }
    if (message.quote !== undefined) {
      Coin.encode(message.quote, writer.uint32(34).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddLiquidity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.base = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.quote = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddLiquidity>): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId ?? "";
    message.base = object.base !== undefined && object.base !== null ? Coin.fromPartial(object.base) : undefined;
    message.quote = object.quote !== undefined && object.quote !== null ? Coin.fromPartial(object.quote) : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgAddLiquidityAmino): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = Coin.fromAmino(object.base);
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = Coin.fromAmino(object.quote);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgAddLiquidity): MsgAddLiquidityAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.poolId = message.poolId === "" ? undefined : message.poolId;
    obj.base = message.base ? Coin.toAmino(message.base) : undefined;
    obj.quote = message.quote ? Coin.toAmino(message.quote) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgAddLiquidityAminoMsg): MsgAddLiquidity {
    return MsgAddLiquidity.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddLiquidityProtoMsg): MsgAddLiquidity {
    return MsgAddLiquidity.decode(message.value);
  },
  toProto(message: MsgAddLiquidity): Uint8Array {
    return MsgAddLiquidity.encode(message).finish();
  },
  toProtoMsg(message: MsgAddLiquidity): MsgAddLiquidityProtoMsg {
    return {
      typeUrl: "/zigchain.dex.MsgAddLiquidity",
      value: MsgAddLiquidity.encode(message).finish()
    };
  }
};
function createBaseMsgAddLiquidityResponse(): MsgAddLiquidityResponse {
  return {
    lptoken: Coin.fromPartial({})
  };
}
export const MsgAddLiquidityResponse = {
  typeUrl: "/zigchain.dex.MsgAddLiquidityResponse",
  encode(message: MsgAddLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptoken !== undefined) {
      Coin.encode(message.lptoken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptoken = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    message.lptoken = object.lptoken !== undefined && object.lptoken !== null ? Coin.fromPartial(object.lptoken) : undefined;
    return message;
  },
  fromAmino(object: MsgAddLiquidityResponseAmino): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    if (object.lptoken !== undefined && object.lptoken !== null) {
      message.lptoken = Coin.fromAmino(object.lptoken);
    }
    return message;
  },
  toAmino(message: MsgAddLiquidityResponse): MsgAddLiquidityResponseAmino {
    const obj: any = {};
    obj.lptoken = message.lptoken ? Coin.toAmino(message.lptoken) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddLiquidityResponseAminoMsg): MsgAddLiquidityResponse {
    return MsgAddLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddLiquidityResponseProtoMsg): MsgAddLiquidityResponse {
    return MsgAddLiquidityResponse.decode(message.value);
  },
  toProto(message: MsgAddLiquidityResponse): Uint8Array {
    return MsgAddLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddLiquidityResponse): MsgAddLiquidityResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.MsgAddLiquidityResponse",
      value: MsgAddLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveLiquidity(): MsgRemoveLiquidity {
  return {
    creator: "",
    lptoken: Coin.fromPartial({}),
    receiver: ""
  };
}
export const MsgRemoveLiquidity = {
  typeUrl: "/zigchain.dex.MsgRemoveLiquidity",
  encode(message: MsgRemoveLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.lptoken !== undefined) {
      Coin.encode(message.lptoken, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveLiquidity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.lptoken = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveLiquidity>): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    message.creator = object.creator ?? "";
    message.lptoken = object.lptoken !== undefined && object.lptoken !== null ? Coin.fromPartial(object.lptoken) : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveLiquidityAmino): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.lptoken !== undefined && object.lptoken !== null) {
      message.lptoken = Coin.fromAmino(object.lptoken);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgRemoveLiquidity): MsgRemoveLiquidityAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.lptoken = message.lptoken ? Coin.toAmino(message.lptoken) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveLiquidityAminoMsg): MsgRemoveLiquidity {
    return MsgRemoveLiquidity.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveLiquidityProtoMsg): MsgRemoveLiquidity {
    return MsgRemoveLiquidity.decode(message.value);
  },
  toProto(message: MsgRemoveLiquidity): Uint8Array {
    return MsgRemoveLiquidity.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveLiquidity): MsgRemoveLiquidityProtoMsg {
    return {
      typeUrl: "/zigchain.dex.MsgRemoveLiquidity",
      value: MsgRemoveLiquidity.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveLiquidityResponse(): MsgRemoveLiquidityResponse {
  return {
    base: Coin.fromPartial({}),
    quote: Coin.fromPartial({})
  };
}
export const MsgRemoveLiquidityResponse = {
  typeUrl: "/zigchain.dex.MsgRemoveLiquidityResponse",
  encode(message: MsgRemoveLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== undefined) {
      Coin.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.quote !== undefined) {
      Coin.encode(message.quote, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.quote = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    message.base = object.base !== undefined && object.base !== null ? Coin.fromPartial(object.base) : undefined;
    message.quote = object.quote !== undefined && object.quote !== null ? Coin.fromPartial(object.quote) : undefined;
    return message;
  },
  fromAmino(object: MsgRemoveLiquidityResponseAmino): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    if (object.base !== undefined && object.base !== null) {
      message.base = Coin.fromAmino(object.base);
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = Coin.fromAmino(object.quote);
    }
    return message;
  },
  toAmino(message: MsgRemoveLiquidityResponse): MsgRemoveLiquidityResponseAmino {
    const obj: any = {};
    obj.base = message.base ? Coin.toAmino(message.base) : undefined;
    obj.quote = message.quote ? Coin.toAmino(message.quote) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveLiquidityResponseAminoMsg): MsgRemoveLiquidityResponse {
    return MsgRemoveLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveLiquidityResponseProtoMsg): MsgRemoveLiquidityResponse {
    return MsgRemoveLiquidityResponse.decode(message.value);
  },
  toProto(message: MsgRemoveLiquidityResponse): Uint8Array {
    return MsgRemoveLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveLiquidityResponse): MsgRemoveLiquidityResponseProtoMsg {
    return {
      typeUrl: "/zigchain.dex.MsgRemoveLiquidityResponse",
      value: MsgRemoveLiquidityResponse.encode(message).finish()
    };
  }
};