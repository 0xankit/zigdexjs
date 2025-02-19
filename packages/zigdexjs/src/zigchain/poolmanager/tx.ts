//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType, SwapAmountInSplitRoute, SwapAmountInSplitRouteAmino, SwapAmountInSplitRouteSDKType, SwapAmountOutSplitRoute, SwapAmountOutSplitRouteAmino, SwapAmountOutSplitRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface DenomPairTakerFee {
  /**
   * DEPRECATED: Now that we are using uni-directional trading pairs, we are
   * using tokenInDenom and tokenOutDenom instead of denom0 and denom1 to
   * prevent confusion.
   */
  /** @deprecated */
  denom0?: string;
  /** @deprecated */
  denom1?: string;
  takerFee: string;
  tokenInDenom: string;
  tokenOutDenom: string;
}
export interface DenomPairTakerFeeProtoMsg {
  typeUrl: "/zigchain.poolmanager.DenomPairTakerFee";
  value: Uint8Array;
}
export interface DenomPairTakerFeeAmino {
  /**
   * DEPRECATED: Now that we are using uni-directional trading pairs, we are
   * using tokenInDenom and tokenOutDenom instead of denom0 and denom1 to
   * prevent confusion.
   */
  /** @deprecated */
  denom0?: string;
  /** @deprecated */
  denom1?: string;
  taker_fee?: string;
  tokenInDenom?: string;
  tokenOutDenom?: string;
}
export interface DenomPairTakerFeeAminoMsg {
  type: "/zigchain.poolmanager.DenomPairTakerFee";
  value: DenomPairTakerFeeAmino;
}
export interface DenomPairTakerFeeSDKType {
  /** @deprecated */
  denom0?: string;
  /** @deprecated */
  denom1?: string;
  taker_fee: string;
  tokenInDenom: string;
  tokenOutDenom: string;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgUpdateParams";
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
  type: "zigchain/x/poolmanager/MsgUpdateParams";
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
  typeUrl: "/zigchain.poolmanager.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/zigchain.poolmanager.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
  tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountIn";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInAmino {
  sender?: string;
  routes?: SwapAmountInRouteAmino[];
  token_in?: CoinAmino;
  token_out_min_amount?: string;
}
export interface MsgSwapExactAmountInAminoMsg {
  type: "zigchain/poolmanager/swap-exact-amount-in";
  value: MsgSwapExactAmountInAmino;
}
export interface MsgSwapExactAmountInSDKType {
  sender: string;
  routes: SwapAmountInRouteSDKType[];
  token_in: CoinSDKType;
  token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseAmino {
  token_out_amount?: string;
}
export interface MsgSwapExactAmountInResponseAminoMsg {
  type: "/zigchain.poolmanager.MsgSwapExactAmountInResponse";
  value: MsgSwapExactAmountInResponseAmino;
}
export interface MsgSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
export interface MsgSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutRoute[];
  tokenInMaxAmount: string;
  tokenOut: Coin;
}
export interface MsgSwapExactAmountOutProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountOut";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutAmino {
  sender?: string;
  routes?: SwapAmountOutRouteAmino[];
  token_in_max_amount?: string;
  token_out?: CoinAmino;
}
export interface MsgSwapExactAmountOutAminoMsg {
  type: "zigchain/poolmanager/swap-exact-amount-out";
  value: MsgSwapExactAmountOutAmino;
}
export interface MsgSwapExactAmountOutSDKType {
  sender: string;
  routes: SwapAmountOutRouteSDKType[];
  token_in_max_amount: string;
  token_out: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseAmino {
  token_in_amount?: string;
}
export interface MsgSwapExactAmountOutResponseAminoMsg {
  type: "/zigchain.poolmanager.MsgSwapExactAmountOutResponse";
  value: MsgSwapExactAmountOutResponseAmino;
}
export interface MsgSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
export interface MsgSplitRouteSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInSplitRoute[];
  tokenInDenom: string;
  tokenOutMinAmount: string;
}
export interface MsgSplitRouteSwapExactAmountInProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountIn";
  value: Uint8Array;
}
export interface MsgSplitRouteSwapExactAmountInAmino {
  sender?: string;
  routes?: SwapAmountInSplitRouteAmino[];
  token_in_denom?: string;
  token_out_min_amount?: string;
}
export interface MsgSplitRouteSwapExactAmountInAminoMsg {
  type: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountIn";
  value: MsgSplitRouteSwapExactAmountInAmino;
}
export interface MsgSplitRouteSwapExactAmountInSDKType {
  sender: string;
  routes: SwapAmountInSplitRouteSDKType[];
  token_in_denom: string;
  token_out_min_amount: string;
}
export interface MsgSplitRouteSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface MsgSplitRouteSwapExactAmountInResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface MsgSplitRouteSwapExactAmountInResponseAmino {
  token_out_amount?: string;
}
export interface MsgSplitRouteSwapExactAmountInResponseAminoMsg {
  type: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountInResponse";
  value: MsgSplitRouteSwapExactAmountInResponseAmino;
}
export interface MsgSplitRouteSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
export interface MsgSplitRouteSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutSplitRoute[];
  tokenOutDenom: string;
  tokenInMaxAmount: string;
}
export interface MsgSplitRouteSwapExactAmountOutProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOut";
  value: Uint8Array;
}
export interface MsgSplitRouteSwapExactAmountOutAmino {
  sender?: string;
  routes?: SwapAmountOutSplitRouteAmino[];
  token_out_denom?: string;
  token_in_max_amount?: string;
}
export interface MsgSplitRouteSwapExactAmountOutAminoMsg {
  type: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOut";
  value: MsgSplitRouteSwapExactAmountOutAmino;
}
export interface MsgSplitRouteSwapExactAmountOutSDKType {
  sender: string;
  routes: SwapAmountOutSplitRouteSDKType[];
  token_out_denom: string;
  token_in_max_amount: string;
}
export interface MsgSplitRouteSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface MsgSplitRouteSwapExactAmountOutResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface MsgSplitRouteSwapExactAmountOutResponseAmino {
  token_in_amount?: string;
}
export interface MsgSplitRouteSwapExactAmountOutResponseAminoMsg {
  type: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOutResponse";
  value: MsgSplitRouteSwapExactAmountOutResponseAmino;
}
export interface MsgSplitRouteSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
export interface MsgSetDenomPairTakerFee {
  sender: string;
  denomPairTakerFee: DenomPairTakerFee[];
}
export interface MsgSetDenomPairTakerFeeProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSetDenomPairTakerFee";
  value: Uint8Array;
}
export interface MsgSetDenomPairTakerFeeAmino {
  sender?: string;
  denom_pair_taker_fee?: DenomPairTakerFeeAmino[];
}
export interface MsgSetDenomPairTakerFeeAminoMsg {
  type: "/zigchain.poolmanager.MsgSetDenomPairTakerFee";
  value: MsgSetDenomPairTakerFeeAmino;
}
export interface MsgSetDenomPairTakerFeeSDKType {
  sender: string;
  denom_pair_taker_fee: DenomPairTakerFeeSDKType[];
}
export interface MsgSetDenomPairTakerFeeResponse {
  success: boolean;
}
export interface MsgSetDenomPairTakerFeeResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSetDenomPairTakerFeeResponse";
  value: Uint8Array;
}
export interface MsgSetDenomPairTakerFeeResponseAmino {
  success?: boolean;
}
export interface MsgSetDenomPairTakerFeeResponseAminoMsg {
  type: "/zigchain.poolmanager.MsgSetDenomPairTakerFeeResponse";
  value: MsgSetDenomPairTakerFeeResponseAmino;
}
export interface MsgSetDenomPairTakerFeeResponseSDKType {
  success: boolean;
}
export interface MsgSetTakerFeeShareAgreementForDenom {
  sender: string;
  /**
   * denom is the denom that the taker fee share agreement is being set for.
   * Ex. If this is set to "nBTC", then any trade route that includes "nBTC"
   * will have the skim_percent skimmed from the taker fees and sent to the
   * skim_address.
   */
  denom: string;
  /**
   * skim_percent is the percentage of taker fees that will be skimmed for the
   * bridge provider, in the event that the bridge provider's denom is included
   * in the swap route.
   */
  skimPercent: string;
  /**
   * skim_address is the address belonging to the respective bridge provider
   * that the skimmed taker fees will be sent to at the end of each epoch.
   */
  skimAddress: string;
}
export interface MsgSetTakerFeeShareAgreementForDenomProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenom";
  value: Uint8Array;
}
export interface MsgSetTakerFeeShareAgreementForDenomAmino {
  sender?: string;
  /**
   * denom is the denom that the taker fee share agreement is being set for.
   * Ex. If this is set to "nBTC", then any trade route that includes "nBTC"
   * will have the skim_percent skimmed from the taker fees and sent to the
   * skim_address.
   */
  denom?: string;
  /**
   * skim_percent is the percentage of taker fees that will be skimmed for the
   * bridge provider, in the event that the bridge provider's denom is included
   * in the swap route.
   */
  skim_percent?: string;
  /**
   * skim_address is the address belonging to the respective bridge provider
   * that the skimmed taker fees will be sent to at the end of each epoch.
   */
  skim_address?: string;
}
export interface MsgSetTakerFeeShareAgreementForDenomAminoMsg {
  type: "zigchain/poolmanager/set-taker-fee-share-agreement-for-denom";
  value: MsgSetTakerFeeShareAgreementForDenomAmino;
}
export interface MsgSetTakerFeeShareAgreementForDenomSDKType {
  sender: string;
  denom: string;
  skim_percent: string;
  skim_address: string;
}
export interface MsgSetTakerFeeShareAgreementForDenomResponse {}
export interface MsgSetTakerFeeShareAgreementForDenomResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenomResponse";
  value: Uint8Array;
}
export interface MsgSetTakerFeeShareAgreementForDenomResponseAmino {}
export interface MsgSetTakerFeeShareAgreementForDenomResponseAminoMsg {
  type: "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenomResponse";
  value: MsgSetTakerFeeShareAgreementForDenomResponseAmino;
}
export interface MsgSetTakerFeeShareAgreementForDenomResponseSDKType {}
export interface MsgSetRegisteredAlloyedPool {
  sender: string;
  /**
   * pool_id is the id of the pool that is being registered as an alloyed pool.
   * Only alloyed pools that intend to be used in taker fee revenue sharing
   * should be registered.
   */
  poolId: bigint;
}
export interface MsgSetRegisteredAlloyedPoolProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSetRegisteredAlloyedPool";
  value: Uint8Array;
}
export interface MsgSetRegisteredAlloyedPoolAmino {
  sender?: string;
  /**
   * pool_id is the id of the pool that is being registered as an alloyed pool.
   * Only alloyed pools that intend to be used in taker fee revenue sharing
   * should be registered.
   */
  pool_id?: string;
}
export interface MsgSetRegisteredAlloyedPoolAminoMsg {
  type: "zigchain/poolmanager/set-registered-alloyed-pool";
  value: MsgSetRegisteredAlloyedPoolAmino;
}
export interface MsgSetRegisteredAlloyedPoolSDKType {
  sender: string;
  pool_id: bigint;
}
export interface MsgSetRegisteredAlloyedPoolResponse {}
export interface MsgSetRegisteredAlloyedPoolResponseProtoMsg {
  typeUrl: "/zigchain.poolmanager.MsgSetRegisteredAlloyedPoolResponse";
  value: Uint8Array;
}
export interface MsgSetRegisteredAlloyedPoolResponseAmino {}
export interface MsgSetRegisteredAlloyedPoolResponseAminoMsg {
  type: "/zigchain.poolmanager.MsgSetRegisteredAlloyedPoolResponse";
  value: MsgSetRegisteredAlloyedPoolResponseAmino;
}
export interface MsgSetRegisteredAlloyedPoolResponseSDKType {}
function createBaseDenomPairTakerFee(): DenomPairTakerFee {
  return {
    denom0: undefined,
    denom1: undefined,
    takerFee: "",
    tokenInDenom: "",
    tokenOutDenom: ""
  };
}
export const DenomPairTakerFee = {
  typeUrl: "/zigchain.poolmanager.DenomPairTakerFee",
  encode(message: DenomPairTakerFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom0 !== undefined) {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== undefined) {
      writer.uint32(18).string(message.denom1);
    }
    if (message.takerFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.takerFee, 18).atomics);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(34).string(message.tokenInDenom);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(42).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomPairTakerFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomPairTakerFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        case 3:
          message.takerFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.tokenInDenom = reader.string();
          break;
        case 5:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomPairTakerFee>): DenomPairTakerFee {
    const message = createBaseDenomPairTakerFee();
    message.denom0 = object.denom0 ?? undefined;
    message.denom1 = object.denom1 ?? undefined;
    message.takerFee = object.takerFee ?? "";
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromAmino(object: DenomPairTakerFeeAmino): DenomPairTakerFee {
    const message = createBaseDenomPairTakerFee();
    if (object.denom0 !== undefined && object.denom0 !== null) {
      message.denom0 = object.denom0;
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = object.denom1;
    }
    if (object.taker_fee !== undefined && object.taker_fee !== null) {
      message.takerFee = object.taker_fee;
    }
    if (object.tokenInDenom !== undefined && object.tokenInDenom !== null) {
      message.tokenInDenom = object.tokenInDenom;
    }
    if (object.tokenOutDenom !== undefined && object.tokenOutDenom !== null) {
      message.tokenOutDenom = object.tokenOutDenom;
    }
    return message;
  },
  toAmino(message: DenomPairTakerFee): DenomPairTakerFeeAmino {
    const obj: any = {};
    obj.denom0 = message.denom0 === null ? undefined : message.denom0;
    obj.denom1 = message.denom1 === null ? undefined : message.denom1;
    obj.taker_fee = message.takerFee === "" ? undefined : message.takerFee;
    obj.tokenInDenom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
    obj.tokenOutDenom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(object: DenomPairTakerFeeAminoMsg): DenomPairTakerFee {
    return DenomPairTakerFee.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomPairTakerFeeProtoMsg): DenomPairTakerFee {
    return DenomPairTakerFee.decode(message.value);
  },
  toProto(message: DenomPairTakerFee): Uint8Array {
    return DenomPairTakerFee.encode(message).finish();
  },
  toProtoMsg(message: DenomPairTakerFee): DenomPairTakerFeeProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.DenomPairTakerFee",
      value: DenomPairTakerFee.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/zigchain.poolmanager.MsgUpdateParams",
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
      type: "zigchain/x/poolmanager/MsgUpdateParams",
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
      typeUrl: "/zigchain.poolmanager.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/zigchain.poolmanager.MsgUpdateParamsResponse",
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
      typeUrl: "/zigchain.poolmanager.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountIn(): MsgSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    tokenIn: Coin.fromPartial({}),
    tokenOutMinAmount: ""
  };
}
export const MsgSwapExactAmountIn = {
  typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountIn",
  encode(message: MsgSwapExactAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenOutMinAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    return message;
  },
  fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = Coin.fromAmino(object.token_in);
    }
    if (object.token_out_min_amount !== undefined && object.token_out_min_amount !== null) {
      message.tokenOutMinAmount = object.token_out_min_amount;
    }
    return message;
  },
  toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.token_out_min_amount = message.tokenOutMinAmount === "" ? undefined : message.tokenOutMinAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoMsg {
    return {
      type: "zigchain/poolmanager/swap-exact-amount-in",
      value: MsgSwapExactAmountIn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountInProtoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountIn): Uint8Array {
    return MsgSwapExactAmountIn.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountIn",
      value: MsgSwapExactAmountIn.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountInResponse(): MsgSwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const MsgSwapExactAmountInResponse = {
  typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountInResponse",
  encode(message: MsgSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountInResponse();
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
  fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse {
    const message = createBaseMsgSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse {
    const message = createBaseMsgSwapExactAmountInResponse();
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInResponseAminoMsg): MsgSwapExactAmountInResponse {
    return MsgSwapExactAmountInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapExactAmountInResponseProtoMsg): MsgSwapExactAmountInResponse {
    return MsgSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountInResponse): Uint8Array {
    return MsgSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountInResponse",
      value: MsgSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountOut(): MsgSwapExactAmountOut {
  return {
    sender: "",
    routes: [],
    tokenInMaxAmount: "",
    tokenOut: Coin.fromPartial({})
  };
}
export const MsgSwapExactAmountOut = {
  typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountOut",
  encode(message: MsgSwapExactAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(26).string(message.tokenInMaxAmount);
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenInMaxAmount = reader.string();
          break;
        case 4:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut {
    const message = createBaseMsgSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    return message;
  },
  fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut {
    const message = createBaseMsgSwapExactAmountOut();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.token_in_max_amount !== undefined && object.token_in_max_amount !== null) {
      message.tokenInMaxAmount = object.token_in_max_amount;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = Coin.fromAmino(object.token_out);
    }
    return message;
  },
  toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_in_max_amount = message.tokenInMaxAmount === "" ? undefined : message.tokenInMaxAmount;
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutAminoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoMsg {
    return {
      type: "zigchain/poolmanager/swap-exact-amount-out",
      value: MsgSwapExactAmountOut.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountOutProtoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountOut): Uint8Array {
    return MsgSwapExactAmountOut.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountOut",
      value: MsgSwapExactAmountOut.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountOutResponse(): MsgSwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const MsgSwapExactAmountOutResponse = {
  typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountOutResponse",
  encode(message: MsgSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse {
    const message = createBaseMsgSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse {
    const message = createBaseMsgSwapExactAmountOutResponse();
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    return message;
  },
  toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutResponseAminoMsg): MsgSwapExactAmountOutResponse {
    return MsgSwapExactAmountOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapExactAmountOutResponseProtoMsg): MsgSwapExactAmountOutResponse {
    return MsgSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountOutResponse): Uint8Array {
    return MsgSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountOutResponse",
      value: MsgSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSplitRouteSwapExactAmountIn(): MsgSplitRouteSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    tokenInDenom: "",
    tokenOutMinAmount: ""
  };
}
export const MsgSplitRouteSwapExactAmountIn = {
  typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountIn",
  encode(message: MsgSplitRouteSwapExactAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountInSplitRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(26).string(message.tokenInDenom);
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSplitRouteSwapExactAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountInSplitRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenInDenom = reader.string();
          break;
        case 4:
          message.tokenOutMinAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSplitRouteSwapExactAmountIn>): MsgSplitRouteSwapExactAmountIn {
    const message = createBaseMsgSplitRouteSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountInSplitRoute.fromPartial(e)) || [];
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    return message;
  },
  fromAmino(object: MsgSplitRouteSwapExactAmountInAmino): MsgSplitRouteSwapExactAmountIn {
    const message = createBaseMsgSplitRouteSwapExactAmountIn();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.routes = object.routes?.map(e => SwapAmountInSplitRoute.fromAmino(e)) || [];
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (object.token_out_min_amount !== undefined && object.token_out_min_amount !== null) {
      message.tokenOutMinAmount = object.token_out_min_amount;
    }
    return message;
  },
  toAmino(message: MsgSplitRouteSwapExactAmountIn): MsgSplitRouteSwapExactAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInSplitRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
    obj.token_out_min_amount = message.tokenOutMinAmount === "" ? undefined : message.tokenOutMinAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSplitRouteSwapExactAmountInAminoMsg): MsgSplitRouteSwapExactAmountIn {
    return MsgSplitRouteSwapExactAmountIn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSplitRouteSwapExactAmountInProtoMsg): MsgSplitRouteSwapExactAmountIn {
    return MsgSplitRouteSwapExactAmountIn.decode(message.value);
  },
  toProto(message: MsgSplitRouteSwapExactAmountIn): Uint8Array {
    return MsgSplitRouteSwapExactAmountIn.encode(message).finish();
  },
  toProtoMsg(message: MsgSplitRouteSwapExactAmountIn): MsgSplitRouteSwapExactAmountInProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountIn",
      value: MsgSplitRouteSwapExactAmountIn.encode(message).finish()
    };
  }
};
function createBaseMsgSplitRouteSwapExactAmountInResponse(): MsgSplitRouteSwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const MsgSplitRouteSwapExactAmountInResponse = {
  typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountInResponse",
  encode(message: MsgSplitRouteSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSplitRouteSwapExactAmountInResponse();
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
  fromPartial(object: Partial<MsgSplitRouteSwapExactAmountInResponse>): MsgSplitRouteSwapExactAmountInResponse {
    const message = createBaseMsgSplitRouteSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromAmino(object: MsgSplitRouteSwapExactAmountInResponseAmino): MsgSplitRouteSwapExactAmountInResponse {
    const message = createBaseMsgSplitRouteSwapExactAmountInResponse();
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(message: MsgSplitRouteSwapExactAmountInResponse): MsgSplitRouteSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSplitRouteSwapExactAmountInResponseAminoMsg): MsgSplitRouteSwapExactAmountInResponse {
    return MsgSplitRouteSwapExactAmountInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSplitRouteSwapExactAmountInResponseProtoMsg): MsgSplitRouteSwapExactAmountInResponse {
    return MsgSplitRouteSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: MsgSplitRouteSwapExactAmountInResponse): Uint8Array {
    return MsgSplitRouteSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSplitRouteSwapExactAmountInResponse): MsgSplitRouteSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountInResponse",
      value: MsgSplitRouteSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSplitRouteSwapExactAmountOut(): MsgSplitRouteSwapExactAmountOut {
  return {
    sender: "",
    routes: [],
    tokenOutDenom: "",
    tokenInMaxAmount: ""
  };
}
export const MsgSplitRouteSwapExactAmountOut = {
  typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOut",
  encode(message: MsgSplitRouteSwapExactAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountOutSplitRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(34).string(message.tokenInMaxAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSplitRouteSwapExactAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountOutSplitRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        case 4:
          message.tokenInMaxAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSplitRouteSwapExactAmountOut>): MsgSplitRouteSwapExactAmountOut {
    const message = createBaseMsgSplitRouteSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountOutSplitRoute.fromPartial(e)) || [];
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    return message;
  },
  fromAmino(object: MsgSplitRouteSwapExactAmountOutAmino): MsgSplitRouteSwapExactAmountOut {
    const message = createBaseMsgSplitRouteSwapExactAmountOut();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.routes = object.routes?.map(e => SwapAmountOutSplitRoute.fromAmino(e)) || [];
    if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
      message.tokenOutDenom = object.token_out_denom;
    }
    if (object.token_in_max_amount !== undefined && object.token_in_max_amount !== null) {
      message.tokenInMaxAmount = object.token_in_max_amount;
    }
    return message;
  },
  toAmino(message: MsgSplitRouteSwapExactAmountOut): MsgSplitRouteSwapExactAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutSplitRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
    obj.token_in_max_amount = message.tokenInMaxAmount === "" ? undefined : message.tokenInMaxAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSplitRouteSwapExactAmountOutAminoMsg): MsgSplitRouteSwapExactAmountOut {
    return MsgSplitRouteSwapExactAmountOut.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSplitRouteSwapExactAmountOutProtoMsg): MsgSplitRouteSwapExactAmountOut {
    return MsgSplitRouteSwapExactAmountOut.decode(message.value);
  },
  toProto(message: MsgSplitRouteSwapExactAmountOut): Uint8Array {
    return MsgSplitRouteSwapExactAmountOut.encode(message).finish();
  },
  toProtoMsg(message: MsgSplitRouteSwapExactAmountOut): MsgSplitRouteSwapExactAmountOutProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOut",
      value: MsgSplitRouteSwapExactAmountOut.encode(message).finish()
    };
  }
};
function createBaseMsgSplitRouteSwapExactAmountOutResponse(): MsgSplitRouteSwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const MsgSplitRouteSwapExactAmountOutResponse = {
  typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOutResponse",
  encode(message: MsgSplitRouteSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSplitRouteSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSplitRouteSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSplitRouteSwapExactAmountOutResponse>): MsgSplitRouteSwapExactAmountOutResponse {
    const message = createBaseMsgSplitRouteSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromAmino(object: MsgSplitRouteSwapExactAmountOutResponseAmino): MsgSplitRouteSwapExactAmountOutResponse {
    const message = createBaseMsgSplitRouteSwapExactAmountOutResponse();
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    return message;
  },
  toAmino(message: MsgSplitRouteSwapExactAmountOutResponse): MsgSplitRouteSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSplitRouteSwapExactAmountOutResponseAminoMsg): MsgSplitRouteSwapExactAmountOutResponse {
    return MsgSplitRouteSwapExactAmountOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSplitRouteSwapExactAmountOutResponseProtoMsg): MsgSplitRouteSwapExactAmountOutResponse {
    return MsgSplitRouteSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: MsgSplitRouteSwapExactAmountOutResponse): Uint8Array {
    return MsgSplitRouteSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSplitRouteSwapExactAmountOutResponse): MsgSplitRouteSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOutResponse",
      value: MsgSplitRouteSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetDenomPairTakerFee(): MsgSetDenomPairTakerFee {
  return {
    sender: "",
    denomPairTakerFee: []
  };
}
export const MsgSetDenomPairTakerFee = {
  typeUrl: "/zigchain.poolmanager.MsgSetDenomPairTakerFee",
  encode(message: MsgSetDenomPairTakerFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.denomPairTakerFee) {
      DenomPairTakerFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomPairTakerFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomPairTakerFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denomPairTakerFee.push(DenomPairTakerFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetDenomPairTakerFee>): MsgSetDenomPairTakerFee {
    const message = createBaseMsgSetDenomPairTakerFee();
    message.sender = object.sender ?? "";
    message.denomPairTakerFee = object.denomPairTakerFee?.map(e => DenomPairTakerFee.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetDenomPairTakerFeeAmino): MsgSetDenomPairTakerFee {
    const message = createBaseMsgSetDenomPairTakerFee();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.denomPairTakerFee = object.denom_pair_taker_fee?.map(e => DenomPairTakerFee.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetDenomPairTakerFee): MsgSetDenomPairTakerFeeAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.denomPairTakerFee) {
      obj.denom_pair_taker_fee = message.denomPairTakerFee.map(e => e ? DenomPairTakerFee.toAmino(e) : undefined);
    } else {
      obj.denom_pair_taker_fee = message.denomPairTakerFee;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomPairTakerFeeAminoMsg): MsgSetDenomPairTakerFee {
    return MsgSetDenomPairTakerFee.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomPairTakerFeeProtoMsg): MsgSetDenomPairTakerFee {
    return MsgSetDenomPairTakerFee.decode(message.value);
  },
  toProto(message: MsgSetDenomPairTakerFee): Uint8Array {
    return MsgSetDenomPairTakerFee.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomPairTakerFee): MsgSetDenomPairTakerFeeProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSetDenomPairTakerFee",
      value: MsgSetDenomPairTakerFee.encode(message).finish()
    };
  }
};
function createBaseMsgSetDenomPairTakerFeeResponse(): MsgSetDenomPairTakerFeeResponse {
  return {
    success: false
  };
}
export const MsgSetDenomPairTakerFeeResponse = {
  typeUrl: "/zigchain.poolmanager.MsgSetDenomPairTakerFeeResponse",
  encode(message: MsgSetDenomPairTakerFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomPairTakerFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomPairTakerFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetDenomPairTakerFeeResponse>): MsgSetDenomPairTakerFeeResponse {
    const message = createBaseMsgSetDenomPairTakerFeeResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgSetDenomPairTakerFeeResponseAmino): MsgSetDenomPairTakerFeeResponse {
    const message = createBaseMsgSetDenomPairTakerFeeResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgSetDenomPairTakerFeeResponse): MsgSetDenomPairTakerFeeResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomPairTakerFeeResponseAminoMsg): MsgSetDenomPairTakerFeeResponse {
    return MsgSetDenomPairTakerFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomPairTakerFeeResponseProtoMsg): MsgSetDenomPairTakerFeeResponse {
    return MsgSetDenomPairTakerFeeResponse.decode(message.value);
  },
  toProto(message: MsgSetDenomPairTakerFeeResponse): Uint8Array {
    return MsgSetDenomPairTakerFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomPairTakerFeeResponse): MsgSetDenomPairTakerFeeResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSetDenomPairTakerFeeResponse",
      value: MsgSetDenomPairTakerFeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetTakerFeeShareAgreementForDenom(): MsgSetTakerFeeShareAgreementForDenom {
  return {
    sender: "",
    denom: "",
    skimPercent: "",
    skimAddress: ""
  };
}
export const MsgSetTakerFeeShareAgreementForDenom = {
  typeUrl: "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenom",
  encode(message: MsgSetTakerFeeShareAgreementForDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.skimPercent !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.skimPercent, 18).atomics);
    }
    if (message.skimAddress !== "") {
      writer.uint32(34).string(message.skimAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetTakerFeeShareAgreementForDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTakerFeeShareAgreementForDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.skimPercent = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.skimAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetTakerFeeShareAgreementForDenom>): MsgSetTakerFeeShareAgreementForDenom {
    const message = createBaseMsgSetTakerFeeShareAgreementForDenom();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.skimPercent = object.skimPercent ?? "";
    message.skimAddress = object.skimAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSetTakerFeeShareAgreementForDenomAmino): MsgSetTakerFeeShareAgreementForDenom {
    const message = createBaseMsgSetTakerFeeShareAgreementForDenom();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.skim_percent !== undefined && object.skim_percent !== null) {
      message.skimPercent = object.skim_percent;
    }
    if (object.skim_address !== undefined && object.skim_address !== null) {
      message.skimAddress = object.skim_address;
    }
    return message;
  },
  toAmino(message: MsgSetTakerFeeShareAgreementForDenom): MsgSetTakerFeeShareAgreementForDenomAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.skim_percent = message.skimPercent === "" ? undefined : message.skimPercent;
    obj.skim_address = message.skimAddress === "" ? undefined : message.skimAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetTakerFeeShareAgreementForDenomAminoMsg): MsgSetTakerFeeShareAgreementForDenom {
    return MsgSetTakerFeeShareAgreementForDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetTakerFeeShareAgreementForDenom): MsgSetTakerFeeShareAgreementForDenomAminoMsg {
    return {
      type: "zigchain/poolmanager/set-taker-fee-share-agreement-for-denom",
      value: MsgSetTakerFeeShareAgreementForDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetTakerFeeShareAgreementForDenomProtoMsg): MsgSetTakerFeeShareAgreementForDenom {
    return MsgSetTakerFeeShareAgreementForDenom.decode(message.value);
  },
  toProto(message: MsgSetTakerFeeShareAgreementForDenom): Uint8Array {
    return MsgSetTakerFeeShareAgreementForDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgSetTakerFeeShareAgreementForDenom): MsgSetTakerFeeShareAgreementForDenomProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenom",
      value: MsgSetTakerFeeShareAgreementForDenom.encode(message).finish()
    };
  }
};
function createBaseMsgSetTakerFeeShareAgreementForDenomResponse(): MsgSetTakerFeeShareAgreementForDenomResponse {
  return {};
}
export const MsgSetTakerFeeShareAgreementForDenomResponse = {
  typeUrl: "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenomResponse",
  encode(_: MsgSetTakerFeeShareAgreementForDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetTakerFeeShareAgreementForDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTakerFeeShareAgreementForDenomResponse();
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
  fromPartial(_: Partial<MsgSetTakerFeeShareAgreementForDenomResponse>): MsgSetTakerFeeShareAgreementForDenomResponse {
    const message = createBaseMsgSetTakerFeeShareAgreementForDenomResponse();
    return message;
  },
  fromAmino(_: MsgSetTakerFeeShareAgreementForDenomResponseAmino): MsgSetTakerFeeShareAgreementForDenomResponse {
    const message = createBaseMsgSetTakerFeeShareAgreementForDenomResponse();
    return message;
  },
  toAmino(_: MsgSetTakerFeeShareAgreementForDenomResponse): MsgSetTakerFeeShareAgreementForDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetTakerFeeShareAgreementForDenomResponseAminoMsg): MsgSetTakerFeeShareAgreementForDenomResponse {
    return MsgSetTakerFeeShareAgreementForDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetTakerFeeShareAgreementForDenomResponseProtoMsg): MsgSetTakerFeeShareAgreementForDenomResponse {
    return MsgSetTakerFeeShareAgreementForDenomResponse.decode(message.value);
  },
  toProto(message: MsgSetTakerFeeShareAgreementForDenomResponse): Uint8Array {
    return MsgSetTakerFeeShareAgreementForDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetTakerFeeShareAgreementForDenomResponse): MsgSetTakerFeeShareAgreementForDenomResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenomResponse",
      value: MsgSetTakerFeeShareAgreementForDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetRegisteredAlloyedPool(): MsgSetRegisteredAlloyedPool {
  return {
    sender: "",
    poolId: BigInt(0)
  };
}
export const MsgSetRegisteredAlloyedPool = {
  typeUrl: "/zigchain.poolmanager.MsgSetRegisteredAlloyedPool",
  encode(message: MsgSetRegisteredAlloyedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRegisteredAlloyedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRegisteredAlloyedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetRegisteredAlloyedPool>): MsgSetRegisteredAlloyedPool {
    const message = createBaseMsgSetRegisteredAlloyedPool();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetRegisteredAlloyedPoolAmino): MsgSetRegisteredAlloyedPool {
    const message = createBaseMsgSetRegisteredAlloyedPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgSetRegisteredAlloyedPool): MsgSetRegisteredAlloyedPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetRegisteredAlloyedPoolAminoMsg): MsgSetRegisteredAlloyedPool {
    return MsgSetRegisteredAlloyedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetRegisteredAlloyedPool): MsgSetRegisteredAlloyedPoolAminoMsg {
    return {
      type: "zigchain/poolmanager/set-registered-alloyed-pool",
      value: MsgSetRegisteredAlloyedPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetRegisteredAlloyedPoolProtoMsg): MsgSetRegisteredAlloyedPool {
    return MsgSetRegisteredAlloyedPool.decode(message.value);
  },
  toProto(message: MsgSetRegisteredAlloyedPool): Uint8Array {
    return MsgSetRegisteredAlloyedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRegisteredAlloyedPool): MsgSetRegisteredAlloyedPoolProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSetRegisteredAlloyedPool",
      value: MsgSetRegisteredAlloyedPool.encode(message).finish()
    };
  }
};
function createBaseMsgSetRegisteredAlloyedPoolResponse(): MsgSetRegisteredAlloyedPoolResponse {
  return {};
}
export const MsgSetRegisteredAlloyedPoolResponse = {
  typeUrl: "/zigchain.poolmanager.MsgSetRegisteredAlloyedPoolResponse",
  encode(_: MsgSetRegisteredAlloyedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRegisteredAlloyedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRegisteredAlloyedPoolResponse();
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
  fromPartial(_: Partial<MsgSetRegisteredAlloyedPoolResponse>): MsgSetRegisteredAlloyedPoolResponse {
    const message = createBaseMsgSetRegisteredAlloyedPoolResponse();
    return message;
  },
  fromAmino(_: MsgSetRegisteredAlloyedPoolResponseAmino): MsgSetRegisteredAlloyedPoolResponse {
    const message = createBaseMsgSetRegisteredAlloyedPoolResponse();
    return message;
  },
  toAmino(_: MsgSetRegisteredAlloyedPoolResponse): MsgSetRegisteredAlloyedPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetRegisteredAlloyedPoolResponseAminoMsg): MsgSetRegisteredAlloyedPoolResponse {
    return MsgSetRegisteredAlloyedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetRegisteredAlloyedPoolResponseProtoMsg): MsgSetRegisteredAlloyedPoolResponse {
    return MsgSetRegisteredAlloyedPoolResponse.decode(message.value);
  },
  toProto(message: MsgSetRegisteredAlloyedPoolResponse): Uint8Array {
    return MsgSetRegisteredAlloyedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRegisteredAlloyedPoolResponse): MsgSetRegisteredAlloyedPoolResponseProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.MsgSetRegisteredAlloyedPoolResponse",
      value: MsgSetRegisteredAlloyedPoolResponse.encode(message).finish()
    };
  }
};