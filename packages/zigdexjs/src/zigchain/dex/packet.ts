//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface DexPacketData {
  noData?: NoData;
}
export interface DexPacketDataProtoMsg {
  typeUrl: "/zigchain.dex.DexPacketData";
  value: Uint8Array;
}
export interface DexPacketDataAmino {
  noData?: NoDataAmino;
}
export interface DexPacketDataAminoMsg {
  type: "/zigchain.dex.DexPacketData";
  value: DexPacketDataAmino;
}
export interface DexPacketDataSDKType {
  noData?: NoDataSDKType;
}
export interface NoData {}
export interface NoDataProtoMsg {
  typeUrl: "/zigchain.dex.NoData";
  value: Uint8Array;
}
export interface NoDataAmino {}
export interface NoDataAminoMsg {
  type: "/zigchain.dex.NoData";
  value: NoDataAmino;
}
export interface NoDataSDKType {}
function createBaseDexPacketData(): DexPacketData {
  return {
    noData: undefined
  };
}
export const DexPacketData = {
  typeUrl: "/zigchain.dex.DexPacketData",
  encode(message: DexPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DexPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDexPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DexPacketData>): DexPacketData {
    const message = createBaseDexPacketData();
    message.noData = object.noData !== undefined && object.noData !== null ? NoData.fromPartial(object.noData) : undefined;
    return message;
  },
  fromAmino(object: DexPacketDataAmino): DexPacketData {
    const message = createBaseDexPacketData();
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromAmino(object.noData);
    }
    return message;
  },
  toAmino(message: DexPacketData): DexPacketDataAmino {
    const obj: any = {};
    obj.noData = message.noData ? NoData.toAmino(message.noData) : undefined;
    return obj;
  },
  fromAminoMsg(object: DexPacketDataAminoMsg): DexPacketData {
    return DexPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: DexPacketDataProtoMsg): DexPacketData {
    return DexPacketData.decode(message.value);
  },
  toProto(message: DexPacketData): Uint8Array {
    return DexPacketData.encode(message).finish();
  },
  toProtoMsg(message: DexPacketData): DexPacketDataProtoMsg {
    return {
      typeUrl: "/zigchain.dex.DexPacketData",
      value: DexPacketData.encode(message).finish()
    };
  }
};
function createBaseNoData(): NoData {
  return {};
}
export const NoData = {
  typeUrl: "/zigchain.dex.NoData",
  encode(_: NoData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NoData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
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
  fromPartial(_: Partial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  },
  fromAmino(_: NoDataAmino): NoData {
    const message = createBaseNoData();
    return message;
  },
  toAmino(_: NoData): NoDataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NoDataAminoMsg): NoData {
    return NoData.fromAmino(object.value);
  },
  fromProtoMsg(message: NoDataProtoMsg): NoData {
    return NoData.decode(message.value);
  },
  toProto(message: NoData): Uint8Array {
    return NoData.encode(message).finish();
  },
  toProtoMsg(message: NoData): NoDataProtoMsg {
    return {
      typeUrl: "/zigchain.dex.NoData",
      value: NoData.encode(message).finish()
    };
  }
};