//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { PoolsMeta, PoolsMetaAmino, PoolsMetaSDKType } from "./pools_meta";
import { PoolUids, PoolUidsAmino, PoolUidsSDKType } from "./pool_uids";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  portId: string;
  poolList: Pool[];
  poolsMeta?: PoolsMeta;
  poolUidsList: PoolUids[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/zigchain.dex.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params: ParamsAmino;
  port_id?: string;
  poolList?: PoolAmino[];
  poolsMeta?: PoolsMetaAmino;
  poolUidsList?: PoolUidsAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/zigchain.dex.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  port_id: string;
  poolList: PoolSDKType[];
  poolsMeta?: PoolsMetaSDKType;
  poolUidsList: PoolUidsSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    portId: "",
    poolList: [],
    poolsMeta: undefined,
    poolUidsList: []
  };
}
export const GenesisState = {
  typeUrl: "/zigchain.dex.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolsMeta !== undefined) {
      PoolsMeta.encode(message.poolsMeta, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolUidsList) {
      PoolUids.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.portId = reader.string();
          break;
        case 3:
          message.poolList.push(Pool.decode(reader, reader.uint32()));
          break;
        case 4:
          message.poolsMeta = PoolsMeta.decode(reader, reader.uint32());
          break;
        case 5:
          message.poolUidsList.push(PoolUids.decode(reader, reader.uint32()));
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
    message.portId = object.portId ?? "";
    message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
    message.poolsMeta = object.poolsMeta !== undefined && object.poolsMeta !== null ? PoolsMeta.fromPartial(object.poolsMeta) : undefined;
    message.poolUidsList = object.poolUidsList?.map(e => PoolUids.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.poolList = object.poolList?.map(e => Pool.fromAmino(e)) || [];
    if (object.poolsMeta !== undefined && object.poolsMeta !== null) {
      message.poolsMeta = PoolsMeta.fromAmino(object.poolsMeta);
    }
    message.poolUidsList = object.poolUidsList?.map(e => PoolUids.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.port_id = message.portId === "" ? undefined : message.portId;
    if (message.poolList) {
      obj.poolList = message.poolList.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.poolList = message.poolList;
    }
    obj.poolsMeta = message.poolsMeta ? PoolsMeta.toAmino(message.poolsMeta) : undefined;
    if (message.poolUidsList) {
      obj.poolUidsList = message.poolUidsList.map(e => e ? PoolUids.toAmino(e) : undefined);
    } else {
      obj.poolUidsList = message.poolUidsList;
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
      typeUrl: "/zigchain.dex.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};