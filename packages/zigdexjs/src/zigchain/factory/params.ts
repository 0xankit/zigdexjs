//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /** createFeeDenom is the denomination of the fee to create a new factory */
  createFeeDenom: string;
  /** createFeeAmount is the amount of the fee to create a new factory */
  createFeeAmount: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/zigchain.factory.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** createFeeDenom is the denomination of the fee to create a new factory */
  createFeeDenom?: string;
  /** createFeeAmount is the amount of the fee to create a new factory */
  createFeeAmount?: number;
}
export interface ParamsAminoMsg {
  type: "zigchain/x/factory/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  createFeeDenom: string;
  createFeeAmount: number;
}
function createBaseParams(): Params {
  return {
    createFeeDenom: "",
    createFeeAmount: 0
  };
}
export const Params = {
  typeUrl: "/zigchain.factory.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createFeeDenom !== "") {
      writer.uint32(10).string(message.createFeeDenom);
    }
    if (message.createFeeAmount !== 0) {
      writer.uint32(16).uint32(message.createFeeAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createFeeDenom = reader.string();
          break;
        case 2:
          message.createFeeAmount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.createFeeDenom = object.createFeeDenom ?? "";
    message.createFeeAmount = object.createFeeAmount ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.createFeeDenom !== undefined && object.createFeeDenom !== null) {
      message.createFeeDenom = object.createFeeDenom;
    }
    if (object.createFeeAmount !== undefined && object.createFeeAmount !== null) {
      message.createFeeAmount = object.createFeeAmount;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.createFeeDenom = message.createFeeDenom === "" ? undefined : message.createFeeDenom;
    obj.createFeeAmount = message.createFeeAmount === 0 ? undefined : message.createFeeAmount;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "zigchain/x/factory/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/zigchain.factory.Params",
      value: Params.encode(message).finish()
    };
  }
};