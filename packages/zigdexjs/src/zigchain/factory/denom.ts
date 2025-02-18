//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * Denom is the protobuf definition for the factory module.
 * type name = order in binary message
 * this will generate all kind of go files based on protobuf
 */
export interface Denom {
  creator: string;
  denom: string;
  maxSupply: string;
  supply: string;
  canChangeMaxSupply: boolean;
}
export interface DenomProtoMsg {
  typeUrl: "/zigchain.factory.Denom";
  value: Uint8Array;
}
/**
 * Denom is the protobuf definition for the factory module.
 * type name = order in binary message
 * this will generate all kind of go files based on protobuf
 */
export interface DenomAmino {
  creator?: string;
  denom?: string;
  maxSupply: string;
  supply: string;
  canChangeMaxSupply?: boolean;
}
export interface DenomAminoMsg {
  type: "/zigchain.factory.Denom";
  value: DenomAmino;
}
/**
 * Denom is the protobuf definition for the factory module.
 * type name = order in binary message
 * this will generate all kind of go files based on protobuf
 */
export interface DenomSDKType {
  creator: string;
  denom: string;
  maxSupply: string;
  supply: string;
  canChangeMaxSupply: boolean;
}
function createBaseDenom(): Denom {
  return {
    creator: "",
    denom: "",
    maxSupply: "",
    supply: "",
    canChangeMaxSupply: false
  };
}
export const Denom = {
  typeUrl: "/zigchain.factory.Denom",
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.maxSupply !== "") {
      writer.uint32(26).string(message.maxSupply);
    }
    if (message.supply !== "") {
      writer.uint32(34).string(message.supply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(40).bool(message.canChangeMaxSupply);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Denom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.maxSupply = reader.string();
          break;
        case 4:
          message.supply = reader.string();
          break;
        case 5:
          message.canChangeMaxSupply = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Denom>): Denom {
    const message = createBaseDenom();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.maxSupply = object.maxSupply ?? "";
    message.supply = object.supply ?? "";
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    return message;
  },
  fromAmino(object: DenomAmino): Denom {
    const message = createBaseDenom();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply;
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = object.canChangeMaxSupply;
    }
    return message;
  },
  toAmino(message: Denom): DenomAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.maxSupply = message.maxSupply ?? "";
    obj.supply = message.supply ?? "";
    obj.canChangeMaxSupply = message.canChangeMaxSupply === false ? undefined : message.canChangeMaxSupply;
    return obj;
  },
  fromAminoMsg(object: DenomAminoMsg): Denom {
    return Denom.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomProtoMsg): Denom {
    return Denom.decode(message.value);
  },
  toProto(message: Denom): Uint8Array {
    return Denom.encode(message).finish();
  },
  toProtoMsg(message: Denom): DenomProtoMsg {
    return {
      typeUrl: "/zigchain.factory.Denom",
      value: Denom.encode(message).finish()
    };
  }
};