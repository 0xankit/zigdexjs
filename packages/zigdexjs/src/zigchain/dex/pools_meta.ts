//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** PoolMeta is the metadata of a pool related stuff */
export interface PoolsMeta {
  nextPoolId: bigint;
}
export interface PoolsMetaProtoMsg {
  typeUrl: "/zigchain.dex.PoolsMeta";
  value: Uint8Array;
}
/** PoolMeta is the metadata of a pool related stuff */
export interface PoolsMetaAmino {
  nextPoolId?: string;
}
export interface PoolsMetaAminoMsg {
  type: "/zigchain.dex.PoolsMeta";
  value: PoolsMetaAmino;
}
/** PoolMeta is the metadata of a pool related stuff */
export interface PoolsMetaSDKType {
  nextPoolId: bigint;
}
function createBasePoolsMeta(): PoolsMeta {
  return {
    nextPoolId: BigInt(0)
  };
}
export const PoolsMeta = {
  typeUrl: "/zigchain.dex.PoolsMeta",
  encode(message: PoolsMeta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolsMeta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolsMeta>): PoolsMeta {
    const message = createBasePoolsMeta();
    message.nextPoolId = object.nextPoolId !== undefined && object.nextPoolId !== null ? BigInt(object.nextPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolsMetaAmino): PoolsMeta {
    const message = createBasePoolsMeta();
    if (object.nextPoolId !== undefined && object.nextPoolId !== null) {
      message.nextPoolId = BigInt(object.nextPoolId);
    }
    return message;
  },
  toAmino(message: PoolsMeta): PoolsMetaAmino {
    const obj: any = {};
    obj.nextPoolId = message.nextPoolId !== BigInt(0) ? message.nextPoolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolsMetaAminoMsg): PoolsMeta {
    return PoolsMeta.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolsMetaProtoMsg): PoolsMeta {
    return PoolsMeta.decode(message.value);
  },
  toProto(message: PoolsMeta): Uint8Array {
    return PoolsMeta.encode(message).finish();
  },
  toProtoMsg(message: PoolsMeta): PoolsMetaProtoMsg {
    return {
      typeUrl: "/zigchain.dex.PoolsMeta",
      value: PoolsMeta.encode(message).finish()
    };
  }
};