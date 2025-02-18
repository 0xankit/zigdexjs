//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** PoolUids is secondary index on pools, allows for reverse lookup from pool date to pool id */
export interface PoolUids {
  poolUid: string;
  poolId: string;
}
export interface PoolUidsProtoMsg {
  typeUrl: "/zigchain.dex.PoolUids";
  value: Uint8Array;
}
/** PoolUids is secondary index on pools, allows for reverse lookup from pool date to pool id */
export interface PoolUidsAmino {
  poolUid?: string;
  poolId?: string;
}
export interface PoolUidsAminoMsg {
  type: "/zigchain.dex.PoolUids";
  value: PoolUidsAmino;
}
/** PoolUids is secondary index on pools, allows for reverse lookup from pool date to pool id */
export interface PoolUidsSDKType {
  poolUid: string;
  poolId: string;
}
function createBasePoolUids(): PoolUids {
  return {
    poolUid: "",
    poolId: ""
  };
}
export const PoolUids = {
  typeUrl: "/zigchain.dex.PoolUids",
  encode(message: PoolUids, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolUid !== "") {
      writer.uint32(10).string(message.poolUid);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolUids {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolUids();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolUid = reader.string();
          break;
        case 2:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolUids>): PoolUids {
    const message = createBasePoolUids();
    message.poolUid = object.poolUid ?? "";
    message.poolId = object.poolId ?? "";
    return message;
  },
  fromAmino(object: PoolUidsAmino): PoolUids {
    const message = createBasePoolUids();
    if (object.poolUid !== undefined && object.poolUid !== null) {
      message.poolUid = object.poolUid;
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    }
    return message;
  },
  toAmino(message: PoolUids): PoolUidsAmino {
    const obj: any = {};
    obj.poolUid = message.poolUid === "" ? undefined : message.poolUid;
    obj.poolId = message.poolId === "" ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: PoolUidsAminoMsg): PoolUids {
    return PoolUids.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolUidsProtoMsg): PoolUids {
    return PoolUids.decode(message.value);
  },
  toProto(message: PoolUids): Uint8Array {
    return PoolUids.encode(message).finish();
  },
  toProtoMsg(message: PoolUids): PoolUidsProtoMsg {
    return {
      typeUrl: "/zigchain.dex.PoolUids",
      value: PoolUids.encode(message).finish()
    };
  }
};