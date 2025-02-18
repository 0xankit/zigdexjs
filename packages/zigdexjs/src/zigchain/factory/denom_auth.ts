//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** DenomAuth is a struct that contains the bank and metadata admin of a denom */
export interface DenomAuth {
  denom: string;
  bankAdmin: string;
  metadataAdmin: string;
}
export interface DenomAuthProtoMsg {
  typeUrl: "/zigchain.factory.DenomAuth";
  value: Uint8Array;
}
/** DenomAuth is a struct that contains the bank and metadata admin of a denom */
export interface DenomAuthAmino {
  denom?: string;
  bankAdmin?: string;
  metadataAdmin?: string;
}
export interface DenomAuthAminoMsg {
  type: "/zigchain.factory.DenomAuth";
  value: DenomAuthAmino;
}
/** DenomAuth is a struct that contains the bank and metadata admin of a denom */
export interface DenomAuthSDKType {
  denom: string;
  bankAdmin: string;
  metadataAdmin: string;
}
function createBaseDenomAuth(): DenomAuth {
  return {
    denom: "",
    bankAdmin: "",
    metadataAdmin: ""
  };
}
export const DenomAuth = {
  typeUrl: "/zigchain.factory.DenomAuth",
  encode(message: DenomAuth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.bankAdmin !== "") {
      writer.uint32(18).string(message.bankAdmin);
    }
    if (message.metadataAdmin !== "") {
      writer.uint32(26).string(message.metadataAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomAuth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.bankAdmin = reader.string();
          break;
        case 3:
          message.metadataAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomAuth>): DenomAuth {
    const message = createBaseDenomAuth();
    message.denom = object.denom ?? "";
    message.bankAdmin = object.bankAdmin ?? "";
    message.metadataAdmin = object.metadataAdmin ?? "";
    return message;
  },
  fromAmino(object: DenomAuthAmino): DenomAuth {
    const message = createBaseDenomAuth();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.bankAdmin !== undefined && object.bankAdmin !== null) {
      message.bankAdmin = object.bankAdmin;
    }
    if (object.metadataAdmin !== undefined && object.metadataAdmin !== null) {
      message.metadataAdmin = object.metadataAdmin;
    }
    return message;
  },
  toAmino(message: DenomAuth): DenomAuthAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.bankAdmin = message.bankAdmin === "" ? undefined : message.bankAdmin;
    obj.metadataAdmin = message.metadataAdmin === "" ? undefined : message.metadataAdmin;
    return obj;
  },
  fromAminoMsg(object: DenomAuthAminoMsg): DenomAuth {
    return DenomAuth.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomAuthProtoMsg): DenomAuth {
    return DenomAuth.decode(message.value);
  },
  toProto(message: DenomAuth): Uint8Array {
    return DenomAuth.encode(message).finish();
  },
  toProtoMsg(message: DenomAuth): DenomAuthProtoMsg {
    return {
      typeUrl: "/zigchain.factory.DenomAuth",
      value: DenomAuth.encode(message).finish()
    };
  }
};