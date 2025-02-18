//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Denom, DenomAmino, DenomSDKType } from "./denom";
import { DenomAuth, DenomAuthAmino, DenomAuthSDKType } from "./denom_auth";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the factory module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  denomList: Denom[];
  denomAuthList: DenomAuth[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/zigchain.factory.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the factory module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params: ParamsAmino;
  denomList?: DenomAmino[];
  denomAuthList?: DenomAuthAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/zigchain.factory.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the factory module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  denomList: DenomSDKType[];
  denomAuthList: DenomAuthSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    denomList: [],
    denomAuthList: []
  };
}
export const GenesisState = {
  typeUrl: "/zigchain.factory.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.denomList) {
      Denom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.denomAuthList) {
      DenomAuth.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.denomList.push(Denom.decode(reader, reader.uint32()));
          break;
        case 3:
          message.denomAuthList.push(DenomAuth.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.denomList = object.denomList?.map(e => Denom.fromPartial(e)) || [];
    message.denomAuthList = object.denomAuthList?.map(e => DenomAuth.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.denomList = object.denomList?.map(e => Denom.fromAmino(e)) || [];
    message.denomAuthList = object.denomAuthList?.map(e => DenomAuth.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.denomList) {
      obj.denomList = message.denomList.map(e => e ? Denom.toAmino(e) : undefined);
    } else {
      obj.denomList = message.denomList;
    }
    if (message.denomAuthList) {
      obj.denomAuthList = message.denomAuthList.map(e => e ? DenomAuth.toAmino(e) : undefined);
    } else {
      obj.denomAuthList = message.denomAuthList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/zigchain.factory.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};