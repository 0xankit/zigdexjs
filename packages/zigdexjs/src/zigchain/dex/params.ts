//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  newPoolFeePct: number;
  creationFee: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/zigchain.dex.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  newPoolFeePct?: number;
  creationFee?: number;
}
export interface ParamsAminoMsg {
  type: "zigchain/x/dex/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  newPoolFeePct: number;
  creationFee: number;
}
function createBaseParams(): Params {
  return {
    newPoolFeePct: 0,
    creationFee: 0
  };
}
export const Params = {
  typeUrl: "/zigchain.dex.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newPoolFeePct !== 0) {
      writer.uint32(8).uint32(message.newPoolFeePct);
    }
    if (message.creationFee !== 0) {
      writer.uint32(16).uint32(message.creationFee);
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
          message.newPoolFeePct = reader.uint32();
          break;
        case 2:
          message.creationFee = reader.uint32();
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
    message.newPoolFeePct = object.newPoolFeePct ?? 0;
    message.creationFee = object.creationFee ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.newPoolFeePct !== undefined && object.newPoolFeePct !== null) {
      message.newPoolFeePct = object.newPoolFeePct;
    }
    if (object.creationFee !== undefined && object.creationFee !== null) {
      message.creationFee = object.creationFee;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.newPoolFeePct = message.newPoolFeePct === 0 ? undefined : message.newPoolFeePct;
    obj.creationFee = message.creationFee === 0 ? undefined : message.creationFee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "zigchain/x/dex/Params",
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
      typeUrl: "/zigchain.dex.Params",
      value: Params.encode(message).finish()
    };
  }
};